function sendMail(){
    event.preventDefault();
    var params = {
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        message : document.getElementById("message").value ,
        mobile : document.getElementById("mobile").value,
        mailsubject : document.getElementById("mailsubject").value,


    };
    const serviceID = "service_goonnvf";
const templateID  = "template_tdpyaho";



emailjs.send(serviceID,templateID,params)
.then (
    (res) => {
        document.getElementById("name").value = "" ; 
        document.getElementById("email").value = "" ;
        document.getElementById("message").value = "" ;
        document.getElementById("mobile").value = "";
        document.getElementById("mailsubject").value = "";
        console.log(res);
        alert("Your message sent successfully");
    }
)


.catch((err) => console.log(err));
}






