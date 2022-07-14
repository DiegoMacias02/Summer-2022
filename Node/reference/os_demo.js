//os -> operating system
const os = require('os');

//platform
console.log(os.platform());

//CPU arch
console.log(os.arch());

//CPU Core Info
console.log(os.cpus())

//Free Memory
console.log(os.freemem())

//Total Memory
console.log(os.totalmem())

//Home Dir
console.log(os.homedir())

//Uptime (how long system been up)
console.log(os.uptime())