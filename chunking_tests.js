var chunking = require('./chunking.js');
var max = 100;
var timevalues = {"chunkFor":0,"chunkForChunks":0,"chunkSlice":0,"chunkRecurse":0};

function chunkingTests(randArr){
  /**
   * Run each method with the array recording the time the solution
   * took to run. 
   */

  var timestamp = Date.now();
  chunking.chunkFor(randArr, 20);
  timevalues.chunkFor += Date.now() - timestamp;

  timestamp = Date.now();
  chunking.chunkForChunks(randArr, 20);
  timevalues.chunkForChunks += Date.now() - timestamp;

  timestamp = Date.now();
  chunking.chunkSlice(randArr, 20);
  timevalues.chunkSlice += Date.now() - timestamp;

  timestamp = Date.now();
  chunking.chunkRecurse(randArr, 20);
  timevalues.chunkRecurse += Date.now() - timestamp;
}

function randomArr(){
  /**
   * Creates a random array with between 1 and 70,000 random numbers.
   */

  let randArr = [...Array(~~(Math.random()*70000))].map(e=>~~(Math.random()*100));
  return randArr
}

// Runs each method with a new random array
for (var i = 0; i < max; i++){
  chunkingTests(randomArr());
}

// Log Results
console.log("chunkFor: ",timevalues.chunkFor / max, " ms");
console.log("chunkForChunks: ",timevalues.chunkForChunks / max, " ms");
console.log("chunkSlice: ",timevalues.chunkSlice / max, " ms");
console.log("chunkRecurse: ",timevalues.chunkRecurse / max, " ms");