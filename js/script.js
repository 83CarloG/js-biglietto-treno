// Variables declaratiion (input)

var age = prompt("How old are you?");
var travel = prompt("How many km do you want to travel?");
var travelKm = 0.21;
var ticket;

// Algorithm to resolve problem + output

if (!(age.isNan) && (!travel.isNaN) && (age > 0) && (travel > 0)) {
  var ticket = travel * travelKm;
    if (age < 18) {
      ticket = ticket * 0.80;
    }
    else if (age >= 65) {
        ticket = ticket * 0.60;
    }
    else {
        ticket = ticket;
      }

        alert("il prezzo del biglietto è " + Math.round(ticket * 100) / 100) + "€";
}
else {
  alert("Error, age and travel must be positive numbers. Retry to insert age and travel")
}
