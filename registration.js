function toggleForm(){
    section = document.querySelector('section');
    container = document.querySelector('.container');
    container.classList.toggle('active');
    section.classList.toggle('active');
}
function validate(){
    
    var username =  document.registration_form.username;
    var password =  document.registration_form.password;
    var username1 =  document.registration_form.username1;
    var email =  document.registration_form.email;
    var password2 =  document.registration_form.password2;
    var password3 =  document.registration_form.password3;
    var mobile =  document.registration_form.mobile;
    var age =  document.registration_form.age;
    var gender =  document.registration_form.gender;
    
    if(username.value.length <= 0){
        alert("UserName is required");
        username.focus();
        return false;
        
    }
    return false;
}