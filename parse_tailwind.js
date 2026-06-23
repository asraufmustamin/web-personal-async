const fs = require('fs');

const html = fs.readFileSync('stitch_design.html', 'utf8');
const configMatch = html.match(/tailwind\.config\s*=\s*([\s\S]*?)<\/script>/);

if (configMatch) {
  let configStr = configMatch[1];
  // Remove the trailing comma in the config object if any to make it valid JSON
  configStr = configStr.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
  
  // The string is not purely JSON, it's a JS object.
  // We can evaluate it to get the object.
  const fn = new Function('return ' + configStr);
  const config = fn();

  const theme = config.theme.extend;
  
  let css = `@import "tailwindcss";\n\n`;
  css += `@theme {\n`;
  
  if (theme.colors) {
    for (const [key, value] of Object.entries(theme.colors)) {
      css += `  --color-${key}: ${value};\n`;
    }
  }
  
  if (theme.borderRadius) {
    for (const [key, value] of Object.entries(theme.borderRadius)) {
      if (key === 'DEFAULT') {
        css += `  --radius: ${value};\n`;
      } else {
        css += `  --radius-${key}: ${value};\n`;
      }
    }
  }
  
  if (theme.spacing) {
    for (const [key, value] of Object.entries(theme.spacing)) {
      css += `  --spacing-${key}: ${value};\n`;
    }
  }
  
  if (theme.fontFamily) {
    for (const [key, value] of Object.entries(theme.fontFamily)) {
      css += `  --font-${key}: '${value[0]}', sans-serif;\n`;
    }
  }

  css += `}\n\n`;
  
  // Also get the custom styles from <style> tags
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  if (styleMatch) {
    css += styleMatch[1] + `\n\n`;
  }
  
  // Global base setup
  css += `
@layer base {
  body {
    @apply bg-surface text-on-surface font-body-md antialiased selection:bg-indigo-500/30 selection:text-indigo-900 overflow-x-hidden;
  }
}
`;

  fs.writeFileSync('src/app/globals.css', css);
  console.log('Successfully generated globals.css');
} else {
  console.log('Could not find tailwind config in HTML');
}
