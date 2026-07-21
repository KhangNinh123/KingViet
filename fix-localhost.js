const fs = require('fs');
const files = [
  "src/services/api.js",
  "src/pages/News/NewsDetail.jsx",
  "src/pages/News/index.jsx",
  "src/pages/admin/news/NewsForm.jsx",
  "src/pages/admin/news/NewsList.jsx",
  "src/components/sections/NewsSection.jsx"
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/http:\/\/localhost:5001/g, 'https://api.kingvietedu.vn');
  fs.writeFileSync(file, content);
}
console.log('Done replacing localhost');
