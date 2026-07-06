const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

function toKebabCase(str) {
  return str
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/_/g, '-')
    .toLowerCase();
}

function processDirectory(dir, replacements) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath, replacements);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.md') || file.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            for (const [oldName, newName] of Object.entries(replacements)) {
                if (content.includes(oldName)) {
                    content = content.split(oldName).join(newName);
                    modified = true;
                }
            }
            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    }
}

const files = fs.readdirSync(publicDir);
const replacements = {};

for (const file of files) {
  const fullPath = path.join(publicDir, file);
  const stat = fs.statSync(fullPath);
  if (!stat.isDirectory()) {
    const name = path.parse(file).name;
    const ext = path.parse(file).ext;
    // toKebabCase might replace spaces with dashes, removing parenthesis, replacing underscores with dashes.
    const newName = toKebabCase(name) + ext.toLowerCase();
    if (file !== newName) {
        const newFullPath = path.join(publicDir, newName);
        fs.renameSync(fullPath, newFullPath);
        console.log(`Renamed: ${file} -> ${newName}`);
        replacements[file] = newName;
        
        const encodedFile = encodeURI(file);
        if (encodedFile !== file) {
            replacements[encodedFile] = newName;
        }
    }
  }
}

console.log('Replacements:', replacements);
processDirectory(srcDir, replacements);
