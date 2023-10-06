// ? CHAPTERS 31 - 34
// *Q.1
const currentDate = new Date();
const dateTimeString = `Current Date and Time: ${currentDate.toLocaleString()}`;
const paragraph = document.createElement('p');
paragraph.textContent = dateTimeString;
document.body.appendChild(paragraph);

// *Q.2
const currentMonthIndex = new Date().getMonth();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const currentMonthName = monthNames[currentMonthIndex];
alert(currentMonthName);

// *Q.3
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDayIndex = new Date().getDay();
const currentDayAbbreviation = dayNames[currentDayIndex];
alert(currentDayAbbreviation);

// *Q.4
const currentDayIndex2 = new Date().getDay();
if (currentDayIndex === 6 || currentDayIndex === 0) {
    alert("It's Fun day");
} else {
    alert("It's not Fun day. :( Enjoy your day anyway!");
}

// *Q.5
const currentDate2 = new Date();
const currentDay = currentDate.getDate();
if (currentDay < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// *Q.6
const currentTimeInMilliseconds = Date.now();
const minutesSinceMidnight = Math.floor(currentTimeInMilliseconds / 60000);
console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceMidnight);

// *Q.7
const currentHour = new Date().getHours();
if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// *Q.8
const laterDate = new Date(2020, 11, 31);
console.log("Last day of the last month of 2020:", laterDate);

// Q.9
const ramadanStartDate = new Date(2015, 5, 18); 
const currentDate3 = new Date();
const timeDifference = currentDate - ramadanStartDate;
const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
alert(`Number of days passed since 1st Ramadan: ${daysPassed} days`);

// *Q.10
const referenceDate = new Date(1970, 0, 1);
const beginningOf2015 = new Date(2015, 0, 1);
const timeDifference1 = beginningOf2015 - referenceDate;
const secondsElapsed = Math.floor(timeDifference / 1000);
document.write(`Seconds elapsed between the reference date and the beginning of 2015: ${secondsElapsed} seconds`);

// *Q.11
const currentDate4 = new Date();
const currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write(`Updated Date object (an hour ahead): ${currentDate}`);

// *Q.12
const currentDate5 = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert(`Date 100 years back: ${currentDate}`);

// *Q.13
const age = prompt("Please enter your age:");
const currentYear = new Date().getFullYear();
const birthYear = currentYear - parseInt(age);
document.write(`Your birth year is: ${birthYear}`);

// *Q.14
const customerName = prompt("Enter Customer Name:");
const currentMonth = prompt("Enter Current Month:");
const numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
const chargesPerUnit = parseFloat(prompt("Enter Charges Per Unit (in PKR):"));
const latePaymentSurchargeRate = 0.1; 
const netAmountPayable = numberOfUnits * chargesPerUnit;
const latePaymentSurcharge = netAmountPayable * latePaymentSurchargeRate;
const grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("<h2>K-Electric Bill</h2>");
document.write(`<p><strong>Customer Name:</strong> ${customerName}</p>`);
document.write(`<p><strong>Current Month:</strong> ${currentMonth}</p>`);
document.write(`<p><strong>Number of Units:</strong> ${numberOfUnits.toFixed(2)}</p>`);
document.write(`<p><strong>Charges Per Unit:</strong> ${chargesPerUnit.toFixed(2)} PKR</p>`);
document.write(`<p><strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable.toFixed(2)} PKR</p>`);
document.write(`<p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge.toFixed(2)} PKR</p>`);
document.write(`<p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable.toFixed(2)} PKR</p>`);
