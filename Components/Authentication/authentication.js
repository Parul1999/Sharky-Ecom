const signUp = document.querySelector('#signup-click');
const signIn = document.querySelector('#login-click');
const signInfields = document.querySelectorAll('.signin-fields')
const signUpfields = document.querySelectorAll('.signup-fields')
const showPassword = document.querySelector(".show-pswd")
const passwords = document.querySelectorAll('.passwords');

const showSignInFields=(e)=>{
      signInfields.forEach(element => {
        element.classList.toggle("signup-fields")
      });
      signUpfields.forEach(element => {
        element.classList.toggle("signup-fields")
      });
}
signIn.addEventListener("click",(e)=>showSignInFields(e))


const showSignUpFields=(e)=>{
    signInfields.forEach(element => {
        element.classList.toggle("signup-fields")
      });
    signUpfields.forEach(element => {
        element.classList.toggle("signup-fields")
      });
}
signUp.addEventListener("click",(e)=>showSignUpFields(e))

const showPasswords=(e)=>{
passwords.forEach(element=>{
    const type = element.getAttribute('type') === 'password' ? 'text' : 'password';
    element.setAttribute('type', type);
})
}
showPassword.addEventListener("click",(e)=>showPasswords(e))