const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');

async function processDirectory(dir) {
  try {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (let entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (/\.(js|jsx|ts|tsx)$/i.test(entry.name)) {
        let content = await fs.promises.readFile(fullPath, 'utf8');
        let originalContent = content;
        
        // Replace .png, .jpg, .jpeg extensions with .webp when they are followed by a quote (import/require strings)
        content = content.replace(/(\.png|\.jpg|\.jpeg)(['"])/gi, '.webp$2');
        
        if (content !== originalContent) {
          await fs.promises.writeFile(fullPath, content, 'utf8');
          console.log(`Updated imports in: ${fullPath}`);
        }
      }
    }
  } catch(e) {
    console.error(e);
  }
}

console.log('Starting import updates...');
processDirectory(srcDir)
  .then(() => console.log('Done!'))
  .catch(console.error);
