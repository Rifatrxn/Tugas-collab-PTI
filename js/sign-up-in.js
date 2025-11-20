const password = document.getElementById("password")
const togglePass = document.getElementById("togglePass");

togglePass.addEventListener("click", () =>{
    // if(password.type === "password"){
    //     password.type = "text";
    //     togglePass.textContent = "img"
    // }
    // else{
    //     password.type = "password";
    //     togglePass.textContent = "hoe"
    // }
    const isPassword = password.type === "password";

    password.type = isPassword ? "text":"password";

    togglePass.src = isPassword ? "../assets/assets-sign-up-in/hide.png" : "../assets/assets-sign-up-in/view.png";
});