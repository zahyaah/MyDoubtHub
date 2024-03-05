const regex_name = /^[a-zA-Z]{2,30}$/;
const regex_phone = /^\d{10}$/;
const regex_email = /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regex_pos = /^[a-zA-Z]$/;

function validateFields(firstname, lastname, phone, email, position) {
    return regex_name.test(firstname) && regex_name.test(lastname) && regex_phone.test(phone) && regex_email.test(email) && regex_pos.test(position);
}


localStorage.setItem('first-name', document.getElementById("first-name").value);
localStorage.setItem('last-name', document.getElementById("last-name").value);
localStorage.setItem('phone', document.getElementById("phone").value);
localStorage.setItem('email', document.getElementById("email").value);
localStorage.setItem('position', document.getElementById("pos").value);
localStorage.setItem('date', document.getElementById("date").value);
localStorage.setItem('pref-date', document.getElementById("date-ok").value);
localStorage.setItem('time', document.getElementById("time-ok").value);


function populateFields() {
    document.getElementById('first-name').value = localStorage.getItem('first-name') || "";
    document.getElementById('last-name').value = localStorage.getItem('last-name') || "";
    document.getElementById('phone').value = localStorage.getItem('phone') || "";
    document.getElementById('email').value = localStorage.getItem('email') || "";
    document.getElementById("pos").value = localStorage.getItem("position") || "";
    document.getElementById("date").value = localStorage.getItem("date") || "";
    document.getElementById("date-ok").value = localStorage.getItem("pref-date") || "";
    document.getElementById("time-ok").value = localStorage.getItem("time") || "";
}


window.onload = populateFields;

document.getElementById('submit').addEventListener('click', function() {
    // Retrieve field values from localStorage
    const firstName = localStorage.getItem('first-name');
    const lastName = localStorage.getItem('last-name');
    const phone = localStorage.getItem('phone');
    const email = localStorage.getItem('email');
    const position = localStorage.getItem('position');

    if (!validateFields(firstName, lastName, phone, email, position)) {
        alert('Invalid input[s], please check!');
    }

    // If all fields are valid, clear localStorage
    alert("Successful!");
});

//
// // Regular expressions
// const regex_name = /^[a-zA-Z]{2,30}$/;
// const regex_phone = /^\d{10}$/; // Exactly 10 digits
// const regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const regex_pos = /^[a-zA-Z\s]+$/;

// Function to validate form fields
// function validateFields(firstname, lastname, phone, email, position) {
//     return (
//         regex_name.test(firstname) &&
//         regex_name.test(lastname) &&
//         regex_phone.test(phone) &&
//         regex_email.test(email) &&
//         regex_pos.test(position)
//     );
// }
//
// // Function to populate form fields from localStorage
// function populateFields() {
//     document.getElementById('first-name').value = localStorage.getItem('first-name') || "";
//     document.getElementById('last-name').value = localStorage.getItem('last-name') || "";
//     document.getElementById('phone').value = localStorage.getItem('phone') || "";
//     document.getElementById('email').value = localStorage.getItem('email') || "";
//     document.getElementById('pos').value = localStorage.getItem('position') || "";
// }
//
// // Window onload event
// window.onload = function() {
//     populateFields(); // Populate fields on page load
//
//     // Submit button click event
//     document.getElementById('submit').addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent form submission
//
//         // Retrieve field values from form
//         const firstName = document.getElementById('first-name').value;
//         const lastName = document.getElementById('last-name').value;
//         const phone = document.getElementById('phone').value;
//         const email = document.getElementById('email').value;
//         const position = document.getElementById('pos').value;
//
//         // Validate fields
//         if (!validateFields(firstName, lastName, phone, email, position)) {
//             alert('Invalid input[s], please check!');
//             return; // Stop execution if any field is invalid
//         }
//
//         // If all fields are valid, save to localStorage
//         localStorage.setItem('first-name', firstName);
//         localStorage.setItem('last-name', lastName);
//         localStorage.setItem('phone', phone);
//         localStorage.setItem('email', email);
//         localStorage.setItem('position', position);
//
//         // Clear the form
//         // document.getElementById('first-name').value = '';
//         // document.getElementById('last-name').value = '';
//         // document.getElementById('phone').value = '';
//         // document.getElementById('email').value = '';
//         // document.getElementById('pos').value = '';
//
//         alert('You have successfully applied for the full-stack developer job!');
//     });
// };


