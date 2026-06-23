const fs = require('fs');
const path = require('path');

const componentsDir = 'src/components';
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace logo
    content = content.replace(/\/logo\.png/g, '/logo_async.png');
    
    // Replace portrait/avatar URLs (the big googleusercontent ones)
    content = content.replace(/https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_\-]+/g, '/foto_1.png');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated images in ${file}`);
  }
});
