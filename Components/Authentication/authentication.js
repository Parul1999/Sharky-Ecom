const signUp = document.querySelector('#signup-click');
const signIn = document.querySelector('#login-click');
const backtosignIn = document.querySelector('#back-login-click');
const ForgetPswd = document.querySelector('#forgetpswd-click');
const signInfields = document.querySelectorAll('.signin-fields')
const signUpfields = document.querySelectorAll('.signup-fields')
const signupSignInfields = document.querySelectorAll('.signup-signin-fields')
const ForgetPswdfields = document.querySelectorAll('.forgetpswd-fields')
const showPassword = document.querySelector(".show-pswd")
const passwords = document.querySelectorAll('.passwords');

const showSignInFields=(e)=>{
      signUpfields.forEach(element => {
        element.classList.toggle("signup-fields")
      });
      signInfields.forEach(element => {
        element.classList.toggle("signup-fields")
      });
}
signIn.addEventListener("click",(e)=>showSignInFields(e));

const BacktoSignInFields=(e)=>{
  signupSignInfields.forEach(element=>{
    element.classList.toggle("signup-fields")
  })
  signInfields.forEach(element => {
    element.classList.toggle("signup-fields")
  });
  ForgetPswdfields.forEach(element => {
    element.classList.toggle("forgetpswd-fields")
  });
}
backtosignIn.addEventListener("click",(e)=>BacktoSignInFields(e))

const showSignUpFields=(e)=>{

    signInfields.forEach(element => {
        element.classList.toggle("signup-fields")
      });
      signUpfields.forEach(element => {
        element.classList.toggle("signup-fields")
      });
}
signUp.addEventListener("click",(e)=>showSignUpFields(e))

const showForgetPswdFields=(e)=>{
    ForgetPswdfields.forEach(element => {
      element.classList.toggle("forgetpswd-fields")
    });
    signInfields.forEach(element => {
      element.classList.toggle("signup-fields")
    });
    signupSignInfields.forEach(element=>{
      element.classList.toggle("signup-fields")
    })
}
ForgetPswd.addEventListener("click",(e)=>showForgetPswdFields(e))

const showPasswords=(e)=>{
passwords.forEach(element=>{
    const type = element.getAttribute('type') === 'password' ? 'text' : 'password';
    element.setAttribute('type', type);
})
}
showPassword.addEventListener("click",(e)=>showPasswords(e))