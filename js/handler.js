document.getElementById('btn-update').addEventListener('click', function(){
    const heading = document.getElementById('event-handler')
    heading.innerText = 'rag koiro na'
    console.log(heading);
})

const logIn = document.getElementById('log-in');
logIn.onclick = function logInBtn(){
    const header = document.getElementById('event-handler');
    header.innerText = 'I would like to change it'
}

document.getElementById('btn-update-one').addEventListener('click', function(){
    const inPutField = document.getElementById('input-field')
    inputFieldValue = inPutField.value 
    const name = document.getElementById('name')
    name.innerText = inputFieldValue
    // console.log(inputFieldValue);
})