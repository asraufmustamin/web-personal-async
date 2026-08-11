const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../locales');
const langs = ['ar', 'de', 'en', 'es', 'fr', 'id', 'ja', 'zh'];

langs.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.ts`);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('import { extendedData }')) {
    content = `import { extendedData } from "./extendedData";\n` + content;
  }
  
  if (!content.includes(`extended: extendedData.${lang}`)) {
    content = content.replace(/\n\};?\s*$/g, `,\n  extended: extendedData.${lang}\n};`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${lang}.ts`);
  }
});
