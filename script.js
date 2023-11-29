// function testing(){
//     let emailbutton = document.getElementsByName("party")
//     for (let i = 0; i < emailbutton.length; i++) {
//         if (emailbutton[i].checked) {
//             console.log(emailbutton[i].value);
//             break
//         } 
//         }    
        
//     }
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});