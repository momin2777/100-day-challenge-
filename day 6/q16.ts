var guests = ["minhaj", "amjad", "danish"];
console.log("great! i have invited more people to join");

guests.unshift("saad");
guests.splice(guests.length / 2, 0, "ayan");
guests.push("hassan");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});