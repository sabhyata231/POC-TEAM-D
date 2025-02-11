document.getElementById('registration').addEventListener('submit',function(event){
    event.preventDefault();

    var fullname =document.getElementById("fullname").value;
    var Email =document.getElementById("email").value;
    var phone =document.getElementById("phone").value;
    // var position =document.getElementById('position').value;
    // var resume =document.getElementById('resume').file;

    // if(!fullname && !Email && !phone && !position && !resume) {
    //     alert('Please fill out all fields');
    //         return;
    //     }

    alert(fullname);
        const user={
            fullname:fullname,
            Email:Email,
            phone:phone
            // position:position,
            // resume:resume
        };

        localStorage.setItem("data", JSON.stringify(user));
    });