const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.resolve(__dirname, '../src/assets');

async function processDirectory(dir) {
  try {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (let entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
        const ext = path.extname(entry.name);
        const webpPath = fullPath.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');
        
        console.log(`Converting: ${fullPath} -> ${webpPath}`);
        
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
            
          // Delete original file after successful conversion
          await fs.promises.unlink(fullPath);
          console.log(`Deleted original: ${fullPath}`);
        } catch (err) {
          console.error(`Error processing ${fullPath}:`, err);
        }
      }
    }
  } catch(e) {
    console.error(e);
  }
}

console.log('Starting conversion...');
processDirectory(assetsDir)
  .then(() => console.log('Done!'))
  .catch(console.error);
