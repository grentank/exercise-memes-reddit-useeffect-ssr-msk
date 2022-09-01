const fs = require('fs/promises');

async function getMemes() {
  const res = await fetch('https://meme-api.herokuapp.com/gimme/50');
  const data = await res.json();
  fs.writeFile('./src/db/memes.txt', JSON.stringify(data.memes), 'utf-8');
}

getMemes();
