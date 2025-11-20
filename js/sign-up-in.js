const password = document.getElementById("password")
const togglePass = document.getElementById("togglePass");

togglePass.addEventListener("click", () =>{
    if(password.type === "password"){
        password.type = "text";
        togglePass.src = "../assets/assets-sign-up-in/hide.png"
    }
    else{
        password.type = "password";
        togglePass.src = "../assets/assets-sign-up-in/view.png"
    }
    // const isPassword = password.type === "password";

    // password.type = isPassword ? "text":"password";

    // togglePass.src = isPassword ? "../assets/assets-sign-up-in/hide.png" : "../assets/assets-sign-up-in/view.png";
});