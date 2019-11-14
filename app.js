$('#email').change(validation_email)

function validation_email() {
    var output = document.getElementById("output");
    var pattern = "[a-zA-Z0-9-_.]+@[a-zA-Z.-]+.[a-zA-Z]{2,4}$";
    var input = document.getElementById("email").value;
    if (input.match(pattern) == null || input.match(pattern).index != 0) {
        console.log(input.match(pattern));
        email = 0;
        output.style.opacity = "1";
        output.style.color = "red";
        output.innerHTML = "email address is invalid";

    } else {
        email = 1;
        console.log(input.match(pattern));
        output.innerHTML = "";
    }

}