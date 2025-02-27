function isCardNumberValid(number) {
    // Normally we would contact a credit card service
    return number === '1234123412341234';
}

function displayError(msg) {
    if (msg) {
        alert(msg); // Show alert only if there is a message
    }
}

function isExpirationValid(month, year) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear() % 100; // Get last two digits of the year
    let currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed in JS

    month = parseInt(month, 10);
    year = parseInt(year, 10);

    // Create expiration date object
    let expirationDate = new Date(2000 + year, month - 1); // Convert YY to full year

    return expirationDate > currentDate; // Check if expiration date is in the future
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';

    let cardNumber = this.elements.cardNumber?.value.trim();
    let expirationMonth = this.elements.expirationMonth?.value.trim();
    let expirationYear = this.elements.expirationYear?.value.trim();

    // Check credit card number
    if (!cardNumber || isNaN(parseInt(cardNumber, 10))) {
        errorMsg += 'Card number is not a valid number\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not valid\n';
    }

    // Check expiration date
    if (!isExpirationValid(expirationMonth, expirationYear)) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
        // Show only ONE alert with all errors
        displayError(errorMsg);
        return false;
    }

    alert('Payment successful!');
    return false;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);
