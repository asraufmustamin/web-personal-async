const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('stitch_design.html', 'utf8');

// Helper to convert HTML to simple JSX
function toJSX(htmlStr) {
  return htmlStr
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    // Self close img tags
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    // Self close input tags
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    // Self close br tags
    .replace(/<br>/g, '<br />')
    // Self close hr tags
    .replace(/<hr([^>]*[^\/])>/g, '<hr$1 />')
    // Replace style strings with objects (basic)
    .replace(/style="([^"]+)"/g, (match, p1) => {
      if (!p1.trim()) return '';
      const styleObj = {};
      p1.split(';').forEach(rule => {
        if (!rule.trim()) return;
        let [key, val] = rule.split(':');
        if (!key || !val) return;
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = val.trim();
      });
      return `style={{${Object.entries(styleObj).map(([k, v]) => `${k}: '${v}'`).join(', ')}}}`;
    })
    .replace(/<!--[\s\S]*?-->/g, ''); // remove html comments because they break JSX
}

const sections = [
  { name: 'Navbar', start: 'TopNavBar', end: 'Hero Section' },
  { name: 'HeroSection', start: 'Hero Section', end: 'About Section' },
  { name: 'AboutSection', start: 'About Section', end: 'Skills Section' },
  { name: 'SkillsSection', start: 'Skills Section', end: 'Experience Section' },
  { name: 'ExperienceSection', start: 'Experience Section', end: 'Projects Section' },
  { name: 'ProjectsSection', start: 'Projects Section', end: 'Certificates Section' },
  { name: 'CertificatesSection', start: 'Certificates Section', end: 'Contact Section' },
  { name: 'ContactSection', start: 'Contact Section', end: 'Footer' },
  { name: 'Footer', start: 'Footer', end: '</body>' }
];

fs.mkdirSync('src/components', { recursive: true });

sections.forEach(sec => {
  let startIndex = html.indexOf(`<!-- ${sec.start} -->`);
  if (startIndex === -1 && sec.start === 'Footer') startIndex = html.indexOf(`<!-- Footer -->`);
  
  if (startIndex !== -1) {
    let endIndex = html.length;
    if (sec.end === '</body>') {
      endIndex = html.indexOf('</body>');
    } else if (sec.end) {
      endIndex = html.indexOf(`<!-- ${sec.end} -->`);
    }
    
    if (endIndex === -1) endIndex = html.length;

    let sectionHtml = html.substring(startIndex + `<!-- ${sec.start} -->`.length, endIndex);
    
    // Check for unclosed textarea
    sectionHtml = sectionHtml.replace(/<textarea([^>]*)><\/textarea>/g, '<textarea$1 />');
    
    const jsx = toJSX(sectionHtml.trim());
    if (jsx) {
      const fileContent = `
'use client';

import { motion } from 'framer-motion';

export default function ${sec.name}() {
  return (
    <>
      {/* ${sec.name} */}
      ${jsx}
    </>
  );
}
`;
      fs.writeFileSync(`src/components/${sec.name}.tsx`, fileContent.trim() + '\n');
      console.log(`Generated src/components/${sec.name}.tsx`);
    }
  }
});
