function ValidateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var x = document.getElementById("email").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid email address.Please enter a valid email address.");
        document.getElementById("email").focus()
    }
}

function PhoneNumberCheck() {

    var x = document.getElementById("phonenumber").value;
    console.log(x)
    if (!(x.length == 10)) {
        alert("You have entered an invalid phone number. Please enter a valid phone number.")
        document.getElementById("phonenumber").focus()
    }
}

function NameCheck() {
    var x = document.getElementById("name").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) {
        if (y.includes(sp[i])) {
            alert("You have entered an invalid name. Special characters are present in the name. Enter a Valid Name")
            document.getElementById("name").focus()
            break
        }
    }
}

function PassCheck(){
    var a = document.getElementById("password").value;
    if (!(a.length>3 && a.length<24))
         alert("Invalid Password . Please enter a valid password")
}