const validator = require("email-validator");

const checkNotEmpty = (input) => {
    if (input.length == 0) {
        return "This input is required!";
    } else {
        return true;
    }
}

const checkIsEmail = (input) => {
    if (validator.validate(input)) {
        return true; 
    } else {
        return "Please enter valid email address!"
    }
}

module.exports = {
    checkNotEmpty,
    checkIsEmail
}