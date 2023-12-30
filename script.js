

const allInputs = document.querySelectorAll('input')
const password = document.getElementById('pass')
const conPass = document.getElementById('conpass')


password.addEventListener('keyup',function(){
    console.log(this.value)
    const inputPass = this.value;
    const errorMsg = document.querySelector('.error'); 
    if(inputPass.length<8){
        errorMsg.textContent="The password must be at least 8 characters";
    }
    else{
        errorMsg.textContent="";
    }
});

conPass.addEventListener('keyup', function(){
    if(password.value!=this.value){
        const errorMsg = document.querySelector('.passMatch');
        errorMsg.textContent = "Passwords did not match";
    }
});

