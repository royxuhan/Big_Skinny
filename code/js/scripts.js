function validate() {
    var zipcode = $("#zip").val();
    var zipstr = zipcode.toString();
    if (zipstr.length != 5) {
        alert("Please enter 5 digit zip code!");
        return false;
    }
}

function validatePhone() {
    var phoneNumber = $("#phone").val();
    console.log(isNaN(phoneNumber));
    if (!isNaN(phoneNumber) || phoneNumber.length != 10) {
        alert("Invalid phone number. If you want yo pie yo better give me the right number boy.");
        return false;
    }
}