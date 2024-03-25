let guestss: string[] = ["haris", "sheroz", "minhaj"];

guestss.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


// Q15 Answer:
let unableToAttendd = "sheroz";
console.log(`${unableToAttendd} can't make it to dinner.`);

// Replace the guest
let newGuest = "amjad";
guestss[guestss.indexOf(unableToAttendd)] = newGuest;

// New invitations
guestss.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});