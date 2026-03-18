// Task 2: Declare and Initialize an Attendee Object
const attendee = {
    attendeeID: 101,
    name: "Alex Smith",
    event: "Tech Summit 2026",
    ticketType: "Standard",
    ticketPrice: 50
};
// Task 3: Function to log the attendee's name
function logAttendeeName(attendeeObj) {
    console.log("Attendee Name: " + attendeeObj.name);
}

// To test it, call the function using your object:
logAttendeeName(attendee);
// Task 4: Function to log the ticket price
function logTicketPrice(attendeeObj) {
    console.log("Ticket Price: $" + attendeeObj.ticketPrice);
}
// Task 5: Function to update the ticket type
function updateTicketType(attendeeObj, newType) {
    attendeeObj.ticketType = newType;
}

// Test it:
updateTicketType(attendee, "VIP");
console.log("New Ticket Type:", attendee.ticketType);

// Task 6: Function to update the ticket price
function updateTicketPrice(attendeeObj, newPrice) {
    attendeeObj.ticketPrice = newPrice;
}

// Test it:
updateTicketPrice(attendee, 150);
console.log("Updated Ticket Price: $" + attendee.ticketPrice);
// Test it:
logTicketPrice(attendee);
// Check it works by logging it
console.log(attendee);//Write your code here

// Task 7: Function to remove the event property
function removeEventProperty(attendeeObj) {
    delete attendeeObj.event;
}
// Task 8: Function to add a 'checkedIn' property
function addCheckedInProperty(attendeeObj) {
    attendeeObj.checkedIn = true; 
}

// Test it:
addCheckedInProperty(attendee);
console.log("Is attendee checked in?", attendee.checkedIn);

// Test it:
removeEventProperty(attendee);
console.log("Event property after deletion:", attendee.event); // Should say 'undefined'

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};