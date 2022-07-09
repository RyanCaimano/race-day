// race numbers for participants are generated randomly. I had to include the '+ 400' in order to generate numbers greater than or equal to 1000
var raceNumber = Math.floor((Math.random() * 1000) + 400);
console.log(raceNumber);

// did the participant register early? It will depend on their number
if (raceNumber >= 1000) {
    console.log(true);
}
else {
    console.log(false);
}

var age = 17;

// Early participants who are adults will have '1000' added to their race number
if (raceNumber >= 1000 && age >= 18) {
    console.log(raceNumber += 1000);
}

// Early participants who are adults will race at 9:30am and late participants who are adults will race at 11:00am. Youth participants will race at 12:30pm regardless of registration time
if (raceNumber >= 1000 && age >= 18) {
    console.log(`Your race number is ${raceNumber} and you will race at 9:30am`);
}
else if (raceNumber <= 1000 && age >= 18) {
    console.log(`Your race number is ${raceNumber} and you will race at 11:00am`);
}
else {
    console.log(`Your race number is ${raceNumber} and you will race at 12:30pm`)
}
