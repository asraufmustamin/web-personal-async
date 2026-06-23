const fs = require('fs');
const path = require('path');

const componentsDir = 'src/components';
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.endsWith('.tsx') && file !== 'Navbar.tsx' && file !== 'HeroSection.tsx') {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace colors
    content = content.replace(/indigo/g, 'burgundy');
    content = content.replace(/violet/g, 'gold');
    content = content.replace(/emerald-500/g, 'green-500'); // if any
    
    // Replace margins for better symmetry
    content = content.replace(/px-margin-mobile md:px-margin-desktop/g, 'px-6 lg:px-8');
    content = content.replace(/max-w-container-max/g, 'max-w-7xl');
    
    // Improve font choices for elegance
    content = content.replace(/font-extrabold/g, 'font-bold font-serif');
    content = content.replace(/text-5xl md:text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated theme for ${file}`);
  }
});
