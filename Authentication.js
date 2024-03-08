// async function DataPush(e) {
//     e.preventDefault();

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const res = await fetch('./data/Auth.json');
//     const userData = await res.json();

//     const authenticatedUser = userData.find(user => user.email === email && user.password === password);

//     if (authenticatedUser) {
//         window.location.href = "http://127.0.0.1:5500/index.html";
//         console.log("Authentication successful");
//     } else {
//         console.log("Authentication failed");
//     }
// }

// document.querySelector('#formData').addEventListener('submit', DataPush);
