// JavaScript for tab navigation in the About section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// JavaScript for form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbxpkwejgl4ZAY_llJErbPQ4TOd7uDoT9rp5NvEY049aGrr8SQEaEZAZ0cI8Q9AoK3kEjA/exec';
const form = document.getElementById('contactForm');
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
