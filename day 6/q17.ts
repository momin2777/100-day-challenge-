
var guests = ["minhaj", "amjad", "danish"];
console.log("Great news! I found a bigger dinner table!");

guests.unshift("saad");
guests.splice(guests.length / 2, 0, "ayan");
guests.push("hassan");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});

console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); 