document.getElementById('add-btn').addEventListener('click', function(){
    const inputField = document.getElementById
    ('input-field')
    const textValue = inputField.value
    const mainSection = document.getElementById('section')
    const text = document.createElement('p');
    text.innerText = textValue;
    mainSection.appendChild(text);
    inputField.value  = ''
})

/* document.getElementById('item-2').addEventListener('click', function(event){
    console.log('The list item - 2 is clicked');
    // event.stopPropagation()
    event.stopImmediatePropagation()
})
document.getElementById('item-2').addEventListener('click', function(){
    console.log('The list item - 2  is clicked for the second time');
})
document.getElementById('item-2').addEventListener('click', function(){
    console.log('The list item - 2 is clicked for the third');
})
document.getElementById('body').addEventListener('click', function(){
    console.log('The body is clicked');
})
document.getElementById('another-section').addEventListener('click', function(){
    console.log('The another is clicked');
})
document.getElementById('title').addEventListener('click', function(){
    console.log('The title is clicked');
})
document.getElementById('babul-ol').addEventListener('click', function(){
    console.log('The olis clicked');
}) */

/* document.getElementById('input-text').addEventListener('keyup', function(event){
    const text = event.target.value 
    console.log(text);
    const deleteBtn = document.getElementById('delete-btn');
    if(text == 'delete'){
        deleteBtn.removeAttribute('disabled')
        const title = document.getElementById('title-dlt')
        title.style.display = 'none'
    }else{
        deleteBtn.setAttribute('disabled', true)
    }
}); */


/* const items = document.getElementsByClassName('list-item');
for(const item of items){
    item.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target)
    })
} */

    document.getElementById('propagate-ol').addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target)
        // console.log('want to add');
    })
document.getElementById('add-new').addEventListener('click', function(event){
    const text = document.createElement('li');
    text.innerText = 'this is the nw items'
    text.style.backgroundColor = 'red'
    const section = document.getElementById('propagate-ol')
    section.appendChild(text)
    // console.log(event.target);
})