var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var place = ["zimbabwae", "korea", "Japan", "kazakistan", "mongolia"];
console.log("Original order:", place);
console.log("Alphabetical order:", __spreadArray([], place, true).sort());
console.log("Original order:", place);
console.log("Reverse alphabetical order:", __spreadArray([], place, true).sort().reverse());
console.log("Original order:", place);
place.reverse();
console.log("Reversed order:", place);
place.reverse();
console.log("Original order:", place);
place.sort();
console.log("Alphabetical order:", place);
place.reverse();
console.log("Reverse alphabetical order:", place);
