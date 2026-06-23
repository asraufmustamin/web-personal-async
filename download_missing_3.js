const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

const dl = (url, dest) => {
  https.get(url, options, (res) => {
    if(res.statusCode === 301 || res.statusCode === 302) {
      dl(res.headers.location, dest);
    } else {
      res.pipe(fs.createWriteStream(path.join(__dirname, 'public', 'tools', dest)));
    }
  });
};

dl('https://upload.wikimedia.org/wikipedia/commons/4/4c/DeepSeek_logo.svg', 'DeepSeek.svg');
dl('https://upload.wikimedia.org/wikipedia/commons/5/52/CapCut_logo.svg', 'CapCut.svg');
