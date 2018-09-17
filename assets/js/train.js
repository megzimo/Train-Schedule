$(function () {
    let database = firebase.database();
    //sets a variable to the firebase database so that we don't have to keep retyping it
    let dataRef = database.ref("/trains");

    
    $("#submit").on('click', function(e) {
        e.preventDefault();

        let name = $("#train-name").val().trim();
        let dest = $("#destination").val().trim();
        let first = moment($("#first-train").val().trim(), "hh:mm A").subtract(1, "years").format("X");
        console.log("first train type: ", typeof first)
        let freq = $("#frequency").val().trim();


        // submit the input values to the database
        database.ref("/trains").push({
            name: name,
            dest: dest,
            first: first,
            freq: freq
        })

        $("#train-name").val("");
        $("#destination").val("");
        $("#first-train").val("");
        $("#frequency").val("") ;      
        
        return false;        
    });

    dataRef.on("child_added", function(snapshot){
        let trainInfo = snapshot.val();

        let tName = trainInfo.name;
        let tDest = trainInfo.dest;
        let tFirst = trainInfo.first;
        let tFreq = trainInfo.freq;

        // values need to be dynamically added after calculation with moment
       let tRemaining = moment().diff(moment.unix(tFirst), "minutes") % tFreq;
       let tMin = tFreq - tRemaining;

       let tNext = moment().add(tMin, "m").format("hh:mm A");
       console.log("tnext: ", tNext)


        $("#train-sched").append("<tr><td>" + tName + "</td><td>" + tDest + "</td><td>" + tFreq + "</td><td>" + tNext + "</td><td>" + tMin + "</td></tr>");

    })


}); // ENDS initial function



// Calculate the minutes until arrival using hardcore math
// To calculate the minutes till arrival, take the current time in unix subtract the FirstTrain time
// and find the modulus between the difference and the frequency.
// var differenceTimes = moment().diff(trainTime, "minutes");
// var tRemainder = differenceTimes % tFrequency;
// tMinutes = tFrequency - tRemainder;
// To calculate the arrival time, add the tMinutes to the current time
// tArrival = moment().add(tMinutes, "m").format("hh:mm A");
