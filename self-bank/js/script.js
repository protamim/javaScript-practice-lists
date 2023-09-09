const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('userPass');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function(){
    const userEmailValue = userEmail.value;
    const userPasswordValue = userPassword.value;
    console.log(userEmailValue)
    
    if(userEmailValue == 's163.tamim@gmail.com' && userPasswordValue == 'RE12hbf'){
        location.href = 'bank.html';
    }else{
        alert('Invalid Credentials!')
    }
});
