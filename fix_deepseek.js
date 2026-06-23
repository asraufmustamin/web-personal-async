const https = require('https');
const fs = require('fs');
const path = require('path');

const options = { headers: { 'User-Agent': 'Mozilla/5.0' } };

https.get('https://fe-static.deepseek.com/chat/favicon.svg', options, (res) => {
  res.pipe(fs.createWriteStream(path.join(__dirname, 'public', 'tools', 'DeepSeek.svg')));
});
