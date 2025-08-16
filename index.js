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

  window.addEventListener("load", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
      el.classList.add("show");
    });
  });

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden-up");
      } else {
        entry.target.classList.remove("visible");
        entry.target.classList.add("hidden-up");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".scroll-animate").forEach(el => observer.observe(el));




