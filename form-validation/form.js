let formData = document.querySelector("form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyField = document.querySelectorAll(".empty-field"); 
let body = document.querySelector("body");
let eye = document.querySelector(".btn");
let fnflag, lnflag, eflag, pflag;

for(let error of errorMessages) {
    error.style.display = "none";
}
for(let field of emptyField) {
    field.style.display = "none";
}
let nameregex = /^[a-zA-Z]+$/;
let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let firstName , lastName, email, password;
let fTarget, LTarget, eTarget, pTarget;

formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    feild  = event.target.dataset.key;
    // console.log(feild);
    switch (feild){
        case "firstName":
            firstName = event.target.value;
            fTarget = event.target;
            break;
        case "lastName":
            lastName = event.target.value;
            LTarget = event.target;
            break;  
        case "email":
            email = event.target.value;
            eTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pTarget = event.target;
            break;  
        default:
            firstName = lastName = email = password = "";
            break;
    }
});
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password);
    if(firstName){
        emptyField[0].style.display = "none";
        if(!nameregex.test(firstName)){
            fTarget.classList.add("error");
            errorMessages[0].style.display = "block";
            fnflag = false;
        }
        else{
            fTarget.classList.remove("error");
            fTarget.classList.add("success");
            errorMessages[0].style.display = "none";
            fnflag = true;
        }
    }
    else{
        emptyField[0].style.display = "block";
    }
    if(lastName){
        emptyField[1].style.display = "none";
        if(!nameregex.test(lastName)){
            errorMessages[1].style.display = "block";
            LTarget.classList.add("error");
            fTarget.classList.remove("success");
            lnflag = false;
        }
        else{
            errorMessages[1].style.display = "none";
            LTarget.classList.remove("error");
            LTarget.classList.add("success");
            fTarget.classList.remove("success");
            lnflag = true;          
        }
    }
    else{
        emptyField[1].style.display = "block";
    }
    if(email){
        emptyField[2].style.display = "none";
        if(!emailregex.test(email)){
            errorMessages[2].style.display = "block";
            eTarget.classList.add("error");
            LTarget.classList.remove("success");
            eflag = false;
        }
        else{
            errorMessages[2].style.display = "none";
            eTarget.classList.remove("error");
            eTarget.classList.add("success");
            LTarget.classList.remove("success");
            eflag = true;
        }
    }
    else{
        emptyField[2].style.display = "block";
    }
    if(password){
        emptyField[3].style.display = "none";
        if(!passwordregex.test(password)){
            errorMessages[3].style.display = "block";
            pTarget.classList.add("error");
            eTarget.classList.remove("success");
            pflag = false;
        }
        else{
            errorMessages[3].style.display = "none";
            pTarget.classList.remove("error");
            eTarget.classList.remove("success");
            pflag = true;
        }
    }
    else{
        emptyField[3].style.display = "block";
    }
    if(fnflag && lnflag && eflag && pflag){
        fTarget.value = LTarget.value = eTarget.value = pTarget.value = "";
        window.location.href = "success.html"
    }
});
eye.addEventListener("click", (event) => {
    event.preventDefault();
    if(pTarget.getAttribute("type") === "text"){
        pTarget.setAttribute("type","password");
    }else{
    pTarget.setAttribute("type","text");
    }
});