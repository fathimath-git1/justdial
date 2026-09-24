const fs = require('fs');
const path = require('path');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

const posters = [
  // Bethlehem Kudumba Unit: Couple on balcony
  { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=550&fit=crop", dest: "public/images/movies/bethlehem-kudumba-unit.jpg" },
  // Pradhama Drishtiya Kuttakkar: Police / officers sitting together
  { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=550&fit=crop", dest: "public/images/movies/pradhama-drishtiya-kuttakkar.jpg" },
  // Mandaadi: Fishermen hero / coastal drama
  { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=550&fit=crop", dest: "public/images/movies/mandaadi.jpg" },
  // Ottam Thullal: Indian family smiling portrait
  { url: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=400&h=550&fit=crop", dest: "public/images/movies/ottam-thullal.jpg" },
  // Aasha: Dark dramatic thriller movie poster
  { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=550&fit=crop", dest: "public/images/movies/aasha.jpg" }
];

async function run() {
  for (const item of posters) {
    try {
      console.log(`Downloading poster ${item.dest}...`);
      await download(item.url, path.join(__dirname, item.dest));
      console.log(`Done: ${item.dest}`);
    } catch (e) {
      console.error(`Error downloading ${item.dest}:`, e.message);
    }
  }
}

run();
