var vipguests = ["minhaj", "amjad", "danish"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
vipguests.unshift("saad");
vipguests.splice(vipguests.length / 2, 0, "Charles Darwin");
vipguests.push("hassan");
vipguests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Q17 Answer:
console.log("Unfortunately, I can only invite two people for dinner.");
while (vipguests.length > 2) {
    var removedGuest = vipguests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
vipguests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
vipguests.splice(0, vipguests.length);
console.log(vipguests); // Shows an empty list
