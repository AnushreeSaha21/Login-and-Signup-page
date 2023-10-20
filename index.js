function validatePhoneNumber() {
    
    var phoneNumber = document.getElementById("phonenumber").value;

    
    var phonePattern = /^[0-9]{10}$/;

    
    if (phonePattern.test(phoneNumber)) {
        // Valid phone number
        alert("A phone number verification message is sent");
    } else {
        // Invalid phone number
        alert("Invalid phone number. Please enter a 10-digit number.");
    }
}