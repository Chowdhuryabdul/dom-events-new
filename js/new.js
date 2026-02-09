document.getElementById('update').addEventListener('click', function(){
    const textArea = document.getElementById('coment-area'); 
    const theValue = textArea.value 
    const mainSection = document.getElementById('main-div')
    const newCommnet = document.createElement('p');
    newCommnet.innerText = theValue;
    newCommnet.style.color = 'green'
    newCommnet.classList.add('comment')
    mainSection.appendChild(newCommnet)
    textArea.value = ''
    // console.log(mainSection);
})