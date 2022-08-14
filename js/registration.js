function ajaxPostAction() {
    var queryString = $("form[name=signup]").serialize() ;

    $.ajax({
        type : 'post',
        url : 'https://httpbin.org/post',
        data : queryString,
        dataType : 'json',
        error: function(xhr, status, error){
            alert(error);
        },
        success : function(json){
            console.log(json);
        }
    });
}

function formValidation() {
    clearErrors();
    let result=false;
    let streetName = document.querySelector("#streetname").value;
    let Phone = document.querySelector("#phonenumber").value;
    let postalCode = document.querySelector("#postalcode").value;
    let city = document.querySelector("#city").value;

    if (validateStreet(streetName) && 
    validatePhoneNumber(Phone) && 
    validatePostalCode(postalCode) && 
    validateCity(city)) {
        result=true;
    }
    ajaxPostAction();
}

function clearErrors() {
    document.querySelector("#errors").innerHTML = "";
} 
function validationCheck(value) {
    clearErrors();
    formValidation();
}

/*E: Province must be selected from a drop-down list of displayed provinces (only
Canadian provinces allowed), you may have ONTARIO as default selection in
which case no validation is required. E. Street name: cannot contain digits.*/
function validateStreet(streetName) {
    let errors = document.querySelector("#errors");
    let charecters = "abcdefghijklmnopqrstuvwxyz";
    let result=true;

    for (var i = 0; i < streetName.length; i++) {
        var letter = streetName.substr(i, 1);
        if (charecters.indexOf(letter.toLowerCase()) < 0) {
            errors.innerHTML += "<p>* Please do not include digits for Street Name.</p>";
            result=false;
        }
    }
    return result;
} 


/*F: must be 10 digits, hyphen in the 4th and 8th position, format allowed
xxx-xxx-xxxx, for example 111-111-1111.*/
function validatePhoneNumber(Phone) {
    let errors = document.querySelector("#errors");
    let regex = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
    if(!regex.test(Phone)){
        alert("Wrong formation of Phone number");
        return false;
      }

    return true;
}
// pattern="^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$"
/*G: only Canadian format allowed (Letter Digit Letter Digit Letter Digit
and the length must be 6), for example C1A1A7. */
function validateZipcode(zipCode) {
    let errors = document.querySelector("#errors");
    let regex = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/;
    if(!regex.test(zipCode)){
        alert("Wrong formation of Zipcode");
        return false;
      }

    return true;

} 

/*H: must contain letters only.*/
function validateCity(city) {
    let errors = document.querySelector("#errors");
    let charecters = "abcdefghijklmnopqrstuvwxyz";
    let result=true;
    for (let i = 0; i < city.length; i++) {
        let letter = city.substr(i, 1);
        if (charecters.indexOf(letter.toLowerCase()) < 0) {
            errors.innerHTML += "<p>* Please do not include digits for city.</p>";
            result= false;
        }
    }
    return result; 
}

/*J */
function validateFields(){
    if(!formValidation()){       
        event.preventDefault();
        var errors = document.getElementById("errors"); 
        errors.innerHTML += "<p>* Please check invalid field</p>";
    }
}



























