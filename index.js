const express = require('express');
var dumbass = 0
const app = express();
var altdumbass = ""
app.get('/', (req, res) => {
  dumbass++
  altdumbass = dumbass.toString()
  res.send(altdumbass)
  console.log(dumbass)
});

app.listen(3000, () => {
  console.log('server started');
});

function reset() {
 dumbass = 0
console.log("reset!")
}