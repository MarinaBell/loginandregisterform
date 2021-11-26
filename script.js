const loginButton = document.querySelector('.login-button');
const registerButton = document.querySelector('.register-button');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

registerButton.addEventListener('click', function(){
   loginForm.remove('active');
   // registerForm.add('active');

   //  loginButton.remove('active');
   
})

registerButton.addEventListener('click', function(){
  
    loginButton.remove('active');
   
})


// loginButton.addEventListener('click', function(){
//    loginForm.add('active');
//       registerForm.remove('active');
   
// })


