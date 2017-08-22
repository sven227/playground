var fs = require ('fs');

var readable = fs.createReadStream( __dirname + '/loremipsum.txt', {encoding: 'utf8', highWaterMark: 1 * 1024 });

var writable = fs.createWriteStream ( __dirname + '/loremcopy.txt');

readable.on('data', (chunk)=> {
    console.log(chunk.length);
    writable.write(chunk);
});

readable.pipe(writable);