const fs = require('fs');
const path = require('path');

const componentsDir = 'src/components';
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.endsWith('.tsx') && file !== 'Navbar.tsx') {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <section className="..."> with <motion.section className="..." initial="..." ...>
    content = content.replace(
      /<section([^>]+)>/g,
      `<motion.section$1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }}>`
    );
    
    // Also replace </section> with </motion.section>
    content = content.replace(/<\/section>/g, '</motion.section>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Added animations to ${file}`);
  }
});
