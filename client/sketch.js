const NGROK = `${window.location.hostname}`;
console.log('192.168.1.28', NGROK);
let socket = io(NGROK, { path: '/real-time' });

const input = document.getElementById('nombre')
const button = document.getElementById('submit')

button.addEventListener('click', ()=>{

let user = {name : input.value}

console.log('clickeado');
postUser(user)
getUser()

})


// Get and Post with async fetch

async function postUser(user) {
    
const data = { 
    method : 'POST',
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(user)
}

await fetch('/user-data', data)

}

async function getUser() {
    const res = await fetch('/get-user')
    const data = await res.json()

    console.log(data);
}
