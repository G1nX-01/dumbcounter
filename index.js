const keepAlive = require('./server');
// const resetthing = require('./reset/code.js');
const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
    website: 'https://ntrj2q-3000.preview.csb.app/',
    title: 'dumbass counter',
    interval: 2
});

monitor.on('up', (res) => console.log(`${res.website} is up.`));
monitor.on('down', (res) => console.log(`${res.website} died - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} stopped.`) );
monitor.on('error', (error) => console.log(error));

const express = require('express');
var dumbass = 0
const app = express();
var altdumbass = ""
app.get('/count', (req, res) => {
  dumbass++
  altdumbass = dumbass.toString()
  res.send(altdumbass)
  console.log(dumbass)
});
app.get('/', (req, res) => {
  res.send("hi")
});
app.get('/reset', (req, res) => {
  reset()
  altdumbass = dumbass.toString()
  res.send("woohoo! reset! we're at " + altdumbass + " now")
});

app.listen(3000, () => {
  console.log('server started');
});

function reset() {
dumbass = 0
console.log("reset!")
}