
let contactForm = document.querySelector(".form");
let userName  = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('name', userName .value);
    formData.append('email', email.value);
    formData.append('message', message.value);

    submit.value = "Sending Message...";

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: userName.value,
            email: email.value,
            message: message.value,
        }),
    })
    .then(function(response) {
        if (response.ok) {
                alert('Email sent successfully!');
                document.getElementById('contactForm').reset();
                submit.value = "Submit";
        } else {
                alert('Failed to send email.');
            }
        })
    .catch(function(error) {
            console.error('Error:', error);
        });
    });

