
/*write a javascript program to validate an email field */

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Get the email from the user
const userEmail = "kundusubhajt";

// Validate the email
if (validateEmail(userEmail)) {
    console.log(userEmail + " is a valid email address.");
} else {
    console.log(userEmail + " is not a valid email address.");
}