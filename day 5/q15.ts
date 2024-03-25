var guests = ["danish", "minhaj", "amjad"];
guests.forEach(function (people) {
    console.log("Dear ".concat(people, ", would you like to join me for dinner?"));
});
var unableToAttend = "amjad";
console.log("".concat(unableToAttend, " can't make it to dinner."));

var replacement = "saad ubaid";
guests[guests.indexOf(unableToAttend)] = replacement;

guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});