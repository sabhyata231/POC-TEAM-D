document.getElementById("registrationForm").addEventListener("submit" ,function(event)
{
    event.preventDefault();
    var firstname=document.getElementById("first").value;
    var Lastname=document.getElementById("last").value;
    var Email1=document.getElementById("email").value;
    var Password=document.getElementById("password").value;
    var gender=document.getElementById("gender").value;


    var user={
        firstname: firstname ,
        Lastname: Lastname ,
        Email1: Email1,
        Password: Password,
        gender: gender
    };

    localStorage.setItem('information', JSON.stringify(user));
    al
});