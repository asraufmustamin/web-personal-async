const fs = require('fs');
const path = require('path');

const componentsDir = 'src/components';
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Layout and Padding changes
    content = content.replace(/max-w-7xl/g, 'max-w-5xl');
    content = content.replace(/px-6 lg:px-8/g, 'px-8 md:px-12');
    content = content.replace(/px-6/g, 'px-8 md:px-12');
    
    // Remove gradients on text
    content = content.replace(/bg-gradient-to-[a-z]+ from-burgundy-\d+ to-[a-z]+-\d+ text-gradient/g, 'text-burgundy-900');
    content = content.replace(/bg-gradient-to-[a-z]+ from-burgundy-\d+ to-[a-z]+-\d+ text-transparent bg-clip-text/g, 'text-burgundy-900');
    content = content.replace(/text-transparent bg-clip-text/g, '');
    content = content.replace(/text-gradient/g, '');
    
    // Solid background colors for buttons/elements
    content = content.replace(/bg-gradient-to-[a-z]+ from-burgundy-\d+ to-[a-z]+-\d+/g, 'bg-burgundy-900');
    content = content.replace(/bg-gradient-to-[a-z]+ from-gold-\d+ to-gold-\d+/g, 'bg-gold-500');
    
    // Hover solid colors
    content = content.replace(/hover:bg-gradient-to-[a-z]+/g, '');
    content = content.replace(/hover:from-burgundy-\d+/g, 'hover:bg-burgundy-800');
    content = content.replace(/hover:to-[a-z]+-\d+/g, '');
    
    // Remove background blobs and mesh
    content = content.replace(/mesh-bg/g, 'hidden');
    content = content.replace(/blur-\[100px\]/g, 'hidden');
    content = content.replace(/bg-burgundy-900\/5/g, 'hidden');
    content = content.replace(/bg-gold-600\/5/g, 'hidden');
    
    // Surface to white
    content = content.replace(/bg-surface/g, 'bg-white');
    
    // Typography scaling
    content = content.replace(/text-5xl md:text-\[72px\]/g, 'text-4xl md:text-5xl');
    content = content.replace(/text-4xl md:text-5xl lg:text-6xl/g, 'text-3xl md:text-4xl');
    
    // Logo replacement
    if (file === 'Navbar.tsx' || file === 'Footer.tsx' || file === 'HeroSection.tsx') {
      content = content.replace(/<span[^>]*>ASPYRE<\/span>\s*<span[^>]*>\.AI<\/span>/g, '<img src="/logo.png" alt="ASYNC Logo" className="h-10 md:h-12 w-auto" />');
      content = content.replace(/ASPYRE\.AI/g, '<img src="/logo.png" alt="ASYNC Logo" className="h-8 md:h-10 w-auto" />');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Compacted and solidified ${file}`);
  }
});
