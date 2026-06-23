const fs = require('fs');
const path = require('path');
const https = require('https');

const logos = [
  { name: "Word", url: "https://cdn.worldvectorlogo.com/logos/microsoft-word-2013-logo.svg" },
  { name: "Excel", url: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg" },
  { name: "PowerPoint", url: "https://cdn.worldvectorlogo.com/logos/microsoft-powerpoint-2013.svg" },
  { name: "Claude", url: "https://cdn.worldvectorlogo.com/logos/claude-ai-1.svg" },
  { name: "CapCut", url: "https://cdn.worldvectorlogo.com/logos/capcut-1.svg" }
];

const dir = path.join(__dirname, 'public', 'tools');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

logos.forEach(logo => {
  const dest = path.join(dir, logo.name + '.svg');
  https.get(logo.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${logo.name}`);
      });
    } else {
      console.log(`Failed to download ${logo.name}: ${res.statusCode}`);
    }
  });
});
