function toggleAbout() {
    const aboutSection = document.getElementById("about");
    aboutSection.style.display = aboutSection.style.display === "block" ? "none" : "block";
   
    
}

function changeName(){
    let newname = prompt("Enter your name")
    if(newname) document.getElementById("name").innerText=newname;
    localStorage.setItem("userName",newname)
}

document.addEventListener("DOMContentLoaded",function(){
    if(localStorage.getItem("userName")){
        document.getElementById("name").innerText=localStorage.getItem("userName")
    }
})



function changeDetails() {
    let newnumber = prompt("Enter your number");
    let newemail = prompt("Enter your mail");
    let newaddress = prompt("Enter your address");
    if(newnumber && newemail && newaddress){
        document.getElementById("number").innerText=newnumber
        document.getElementById("email").innerText=newemail
        document.getElementById("add").innerText=newaddress

        localStorage.setItem("number",newnumber)
        localStorage.setItem("email",newemail)
        localStorage.setItem("address",newaddress)
    }
}

document.addEventListener("DOMContentLoaded",function(){
    if(localStorage.getItem("number")){
        document.getElementById("number").innerText=localStorage.getItem("number")
    }
    if(localStorage.getItem("email")){
        document.getElementById("email").innerText=localStorage.getItem("email")
    }
    if(localStorage.getItem("address")){
        document.getElementById("add").innerText=localStorage.getItem("address")
    }
    
})
