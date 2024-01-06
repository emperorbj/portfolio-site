let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sect => {
        let top = window.scrollY;
        let offset = sect.offsetTop - 150;
        let height = sect.offsetHeight;
        let id = sect.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)//

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active')

};

// TO TOGGLE ICON MENU//
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active')
}

// scroll reveal//
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed.js//
const typed = new Typed('.multiple-text',{
    strings:['Software Engineer','Mobile App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})



const form = document.querySelector('form');

const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('number');
const subject = document.getElementById('mail-subject');
const message = document.getElementById('message')


function sendEmail(){

    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phoneNumber.value}
    <br> Message: ${message.value}`;
    Email.send({
        SecureToken: "942aacbf-72fc-47e9-b68e-af317148821e",
        // Host : "smtp.elasticemail.com",
        // Username : "cwaku96@gmail.com",
        // Password : "C60CA96774B4CCB759AEA862BDB70EC4E1D7",
        To : 'cwaku96@gmail.com',
        From : "cwaku96@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Good job!",
                    text: "Message sent successfully",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail()
})
