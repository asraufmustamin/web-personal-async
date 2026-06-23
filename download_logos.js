const fs = require('fs');
const path = require('path');
const https = require('https');

const logos = [
  { name: "Nextjs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Nodejs", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Supabase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Vercel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Canva", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  { name: "Word", url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019-present%29.svg" },
  { name: "Excel", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019-present%29.svg" },
  { name: "PowerPoint", url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019-present%29.svg" },
  { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "ChatGPT", url: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Claude", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Anthropic_logo.svg" },
  { name: "Gemini", url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
  { name: "DeepSeek", url: "https://chat.deepseek.com/favicon.svg" },
  { name: "CapCut", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capcut-logo.png" },
  { name: "Antigravity", url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" } // Using TensorFlow logo as a cool AI proxy
];

const dir = path.join(__dirname, 'public', 'tools');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

logos.forEach(logo => {
  const ext = logo.url.split('.').pop().split('?')[0]; // simple extension
  const dest = path.join(dir, logo.name + (ext === 'png' ? '.png' : '.svg'));
  
  https.get(logo.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${logo.name}`);
      });
    } else if (res.statusCode === 301 || res.statusCode === 302) {
      // Handle simple redirect
      https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (redirectRes) => {
         if (redirectRes.statusCode === 200) {
           const file = fs.createWriteStream(dest);
           redirectRes.pipe(file);
           file.on('finish', () => file.close());
         } else {
           console.log(`Redirect failed for ${logo.name}: ${redirectRes.statusCode}`);
         }
      });
    } else {
      console.log(`Failed to download ${logo.name}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.log(`Error downloading ${logo.name}: ${err.message}`);
  });
});
