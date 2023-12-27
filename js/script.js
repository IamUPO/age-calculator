function calculateAge() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    var currentDate = new Date();

    // Clear previous messages
    document.getElementById("dayError").innerText = "";
    document.getElementById("monthError").innerText = "";
    document.getElementById("yearError").innerText = "";
    document.getElementById("yearWarning").innerText = "";
    document.getElementById("daySuccess").innerText = "";
    document.getElementById("monthSuccess").innerText = "";
    document.getElementById("yearSuccess").innerText = "";

    var errors = [];

    // Validate day
    if (!day) {
        document.getElementById("dayError").innerText = "This field is required.";
        errors.push("Invalid day");
    } else if (!/^\d+$/.test(day) || day < 1 || day > 31) {
        document.getElementById("dayError").innerText = "Must be a valid day";
        errors.push("Invalid day");
    } else {
        document.getElementById("daySuccess").innerText = "Approved!";
    }

    // Validate month
    if (!month) {
        document.getElementById("monthError").innerText = "This field is required.";
        errors.push("Invalid month");
    } else if (!/^\d+$/.test(month) || month < 1 || month > 12) {
        document.getElementById("monthError").innerText = "Must be a valid month";
        errors.push("Invalid month");
    } else {
        document.getElementById("monthSuccess").innerText = "Approved!";
    }

    // Validate year
    if (!year) {
        document.getElementById("yearError").innerText = "This field is required.";
        errors.push("Invalid year");
    } else if (!/^\d+$/.test(year) || parseInt(year) < 0 || parseInt(year) > currentDate.getFullYear()) {
        document.getElementById("yearError").innerText = "Must be a valid year";
        errors.push("Invalid year");
    } else if (parseInt(year) < 1000) {
        document.getElementById("yearWarning").innerText = " a year greater than or equal to 1000";
    }
    else {
        document.getElementById("yearSuccess").innerText = "Approved!";
    }

    // If there are errors, display them and return
    if (errors.length > 0) {
        return;
    }

    var inputDate = new Date(year, month - 1, day); // Subtract 1 from the month

    // Check if the input date is in the future
    if (inputDate > currentDate) {
        document.getElementById("yearError").innerText = "Must be in the past.";
        return;
    }

    // Check if the input date is valid
    if (inputDate.getDate() !== parseInt(day) ||
        inputDate.getMonth() !== parseInt(month) - 1 ||
        inputDate.getFullYear() !== parseInt(year)) {
        return;
    }

    // Perform age calculation
    var ageInMilliseconds = currentDate - inputDate;
    var ageDate = new Date(ageInMilliseconds);

    var years = ageDate.getUTCFullYear() - 1970;
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1;

    // Display the result
    var resultElements = document.querySelectorAll('.calc-result');
    resultElements[0].innerText = years < 10 ? '0' + years : years;
    resultElements[1].innerText = months < 10 ? '0' + months : months;
    resultElements[2].innerText = days < 10 ? '0' + days : days;
}