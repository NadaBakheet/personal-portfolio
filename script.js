// =====================================
// Typing Effect - كتابة الاسم
// =====================================


const text = "Nada\nBakheet";

let index = 0;


function typingEffect(){


    if(index < text.length){


        if(text[index] === "\n"){

            document.getElementById("typing").innerHTML += "<br>";

        }

        else{

            document.getElementById("typing").innerHTML += text[index];

        }


        index++;

        setTimeout(typingEffect,150);


    }


}


typingEffect();






// =====================================
// Navbar Effect when scrolling
// =====================================


window.addEventListener("scroll", function(){


    let nav = document.querySelector("nav");


    if(window.scrollY > 50){


        nav.classList.add("sticky");


    }


    else{


        nav.classList.remove("sticky");


    }



});







// =====================================
// Show sections when scrolling (jQuery)
// =====================================


$(document).ready(function(){


    $(".box").hide();



    $(window).scroll(function(){



        $(".box").each(function(){



            let sectionTop = $(this).offset().top;


            let windowBottom = $(window).scrollTop() + $(window).height();



            if(windowBottom > sectionTop + 100){


                $(this).fadeIn(900);


            }



        });



    });



});



// =====================================
// Back To Top Button
// =====================================


let topButton = document.getElementById("topBtn");



window.addEventListener("scroll",function(){



    if(window.scrollY > 300){


        topButton.style.display="block";


    }


    else{


        topButton.style.display="none";


    }



});





topButton.onclick=function(){



    window.scrollTo({


        top:0,

        behavior:"smooth"



    });



};








// =====================================
// Dark Mode
// =====================================


let darkButton = document.getElementById("darkMode");



darkButton.onclick=function(){



    document.body.classList.toggle("dark");



    if(document.body.classList.contains("dark")){


        darkButton.innerHTML="☀️";

        localStorage.setItem("mode","dark");


    }



    else{


        darkButton.innerHTML="🌙";

        localStorage.setItem("mode","light");


    }



};



// =====================================
// Button Click Animation
// =====================================


let buttons = document.querySelectorAll(".btn");



buttons.forEach(function(button){



    button.addEventListener("click",function(){



        button.style.transform="scale(0.9)";



        setTimeout(function(){


            button.style.transform="scale(1)";



        },150);



    });



});








// =====================================
// Skills Hover Effect
// =====================================


let skills = document.querySelectorAll(".skills span");



skills.forEach(function(skill){



    skill.addEventListener("mouseenter",function(){



        skill.style.transform="translateY(-8px)";


    });





    skill.addEventListener("mouseleave",function(){



        skill.style.transform="translateY(0)";


    });



});








// =====================================
// Active Navbar Link
// =====================================


let sections = document.querySelectorAll("section");

let links = document.querySelectorAll("nav a");



window.addEventListener("scroll",function(){



    let current="";



    sections.forEach(function(section){



        let sectionTop = section.offsetTop;



        if(scrollY >= sectionTop - 200){


            current = section.getAttribute("id");


        }



    });




    links.forEach(function(link){



        link.classList.remove("active");



        if(link.getAttribute("href") === "#" + current){



            link.classList.add("active");



        }



    });



});



window.addEventListener("load", function(){


    // ظهور الصورة

    let image = document.querySelector(".profile-img");

    if(image){

        image.classList.add("show-image");

    }



    // حفظ الوضع الليلي

    let savedMode = localStorage.getItem("mode");


    if(savedMode === "dark"){


        document.body.classList.add("dark");


        darkButton.innerHTML="☀️";


    }


});


// Contact Form Validation

let form = document.querySelector("form");


form.onsubmit = function(event){

    event.preventDefault();


    let name = document.querySelector('input[placeholder="Full Name"]').value.trim();

    let email = document.querySelector('input[placeholder="Email Address"]').value.trim();

    let subject = document.querySelector('input[placeholder="Subject"]').value.trim();

    let message = document.querySelector('textarea[placeholder="Message"]').value.trim();



    if(name === "" || email === "" || subject === "" || message === ""){

        alert("Oops! It looks like some information is missing. Please complete all fields and try again.");

    }


    else{

        alert("Thank you for your message! I appreciate your interest and will reply as soon as possible.");

        form.reset();

    }


};