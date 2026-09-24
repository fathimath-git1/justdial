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

const imagesToDownload = [
  // Trending
  { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop", dest: "public/images/trending/beauty-parlours.jpg" },
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop", dest: "public/images/trending/pg-accommodations.jpg" },
  { url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=400&fit=crop", dest: "public/images/trending/income-tax.jpg" },
  { url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop", dest: "public/images/trending/mehendi.jpg" },

  // Categories - Wedding
  { url: "https://images.unsplash.com/photo-1611591475285-b37209f6873f?w=400&h=300&fit=crop", dest: "public/images/categories/bridal-requisite.jpg" },
  { url: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop", dest: "public/images/categories/caterers.jpg" },
  
  // Categories - Beauty & Spa
  { url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop", dest: "public/images/categories/beauty-parlours.jpg" },
  { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop", dest: "public/images/categories/spa-massages.jpg" },
  { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop", dest: "public/images/categories/salons.jpg" },

  // Categories - Repairs & Services
  { url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop", dest: "public/images/categories/ac-service.jpg" },
  { url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop", dest: "public/images/categories/car-service.jpg" },
  { url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=300&fit=crop", dest: "public/images/categories/bike-service.jpg" },

  // Categories - Daily Needs
  { url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop", dest: "public/images/categories/movies.jpg" },
  { url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop", dest: "public/images/categories/grocery.jpg" },
  { url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop", dest: "public/images/categories/electricians.jpg" },

  // Tourist Places
  { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop", dest: "public/images/tourist/ooty.jpg" },
  { url: "https://images.unsplash.com/photo-1609946782701-792f3922883a?w=400&h=300&fit=crop", dest: "public/images/tourist/coimbatore.jpg" },
  { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop", dest: "public/images/tourist/coorg.jpg" },
  { url: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=400&h=300&fit=crop", dest: "public/images/tourist/munnar.jpg" },
  { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop", dest: "public/images/tourist/wayanad.jpg" },

  // Popular Searches
  { url: "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=400&h=300&fit=crop", dest: "public/images/popular/solar-panel.jpg" },
  { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop", dest: "public/images/popular/beauty-parlours.jpg" },
  { url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=300&fit=crop", dest: "public/images/popular/home-nursing.jpg" },
  { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop", dest: "public/images/popular/dentists.jpg" },
  { url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop", dest: "public/images/popular/travel-agents.jpg" },

  // News
  { url: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=600&h=400&fit=crop", dest: "public/images/news/radio-signal.jpg" },
  { url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop", dest: "public/images/news/albanese-openai.jpg" },
  { url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop", dest: "public/images/news/rahul-gandhi.jpg" },
];

async function run() {
  for (const item of imagesToDownload) {
    try {
      console.log(`Downloading ${item.dest}...`);
      await download(item.url, path.join(__dirname, item.dest));
      console.log(`Done: ${item.dest}`);
    } catch (e) {
      console.error(`Error downloading ${item.dest}:`, e.message);
    }
  }
}

run();
