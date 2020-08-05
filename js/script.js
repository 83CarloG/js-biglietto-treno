// Variables declaratiion (input)

var age = parseInt(prompt("How old are you?"));
var travel = parseInt(prompt("How many km do you want to travel?"));
var priceKm = 0.21;
var ticket;

// Algorithm to resolve problem + output

if (!(isNaN(age)) && !(isNaN(travel)) && (age >= 0) && (travel > 0)) {
  var ticket = travel * priceKm;
    if (age < 18) {
      ticket = ticket * 0.80;
    }
    else if (age >= 65) {
        ticket = ticket * 0.60;
    }
    else {
        ticket = ticket;
      }

    ticket = (Math.round(ticket * 100) / 100);
    document.getElementsByClassName('age')[0].innerHTML = age;
    document.getElementsByClassName('km')[0].innerHTML = travel;
    document.getElementsByClassName('ticket')[0].innerHTML = ticket
}
else {
  alert("Error: age and travel must be positive numbers. Retry to insert age and travel")
}
