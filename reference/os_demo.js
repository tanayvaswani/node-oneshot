const os = require('os');

// Platform = wind32 for Windows and darwin for macOS
console.log(os.platform());

// CPU Architechure 
console.log(os.arch());

// CPU's every core info 
console.log(os.cpus());

// Free memory 
console.log(os.freemem());

// Total memory 
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime 
console.log(os.uptime());