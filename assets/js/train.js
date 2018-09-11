$(document).ready(function() {

let train = [];
let dest = [];
let firstTrain = [];
let freq = [];

  // target each input and store as a variable
  function addTrain() {
    let newTrain = $("#name").val();
    console.log("recent train added: ", newTrain);
    if (newTrain.length === 0) {
      alert("Please provide train name.");
      return false;
    }
    train.push(newTrain);
    console.log("train array: ", train);
  } // ENDS addTrain()

  function addDestination() {
    let newDest = $("#destination").val();
    if (newDest.length === 0) {
      alert("Please provide train destination.");
      return false;
    }
    dest.push(newDest);
    console.log("destination array: ", dest);
  } // ENDS addDestination()

  function addFirstTrain() {
    let newFirst = $("#train-time").val();
    if (newFirst.length === 0) {
      alert("Please provide a time for the first train arrival.");
      return false;
    }
    firstTrain.push(newFirst);
    console.log("first train array: ", firstTrain);
} // ENDS addFirstTrain()

  function addTrainFreq() {
    let newFreq = $("#freq").val();
    if (newFreq.length === 0) {
      alert("Please provide train frequency.");
      return false;
    }
    freq.push(newFreq);
    console.log("freq array: ", freq);
} // ENDS addTrainFreq()

  // Function that runs all functions for new input at once
  $(".btn").on("click", function addInfo(e) {
        e.preventDefault();
        console.log("click event: ", e);
        addTrain();
        addDestination();
        addFirstTrain();
        addTrainFreq();

  }); // ENDS addInfo()

  //push the variable to the bottom of the list area
}); // ENDS doc ready
