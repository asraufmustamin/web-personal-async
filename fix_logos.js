const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
};

const dl = (url, dest) => {
  https.get(url, options, (res) => {
    res.pipe(fs.createWriteStream(path.join(__dirname, 'public', 'tools', dest)));
  });
};

dl('https://chat.deepseek.com/favicon.svg', 'DeepSeek.svg');
dl('https://cdn.simpleicons.org/capcut/000000', 'CapCut.svg');
