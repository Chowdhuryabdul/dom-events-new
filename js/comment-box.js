
//Step -- 1: Set an event handler to the btn 
document.getElementById('btn-post').addEventListener('click', function(){
// step -- 2: get the text written in the comment text area 
const textArea = document.getElementById('text-area');
const newComment = textArea.value;

// step -- 3: get the parent node where to publish comment 
const commentContainer = document.getElementById('comment-container');

// step -- 4: creating tag
const commentElement = document.createElement('p');
commentElement.innerText = newComment;
commentElement.style.backgroundColor = 'red'

// step --5: append in the comment container 
commentContainer.appendChild(commentElement)

// step --6: erase the comment box automatically 
textArea.value = '';
})



document.getElementById('click-add').addEventListener('click', function(){
    const commentArea = document.getElementById('comment-area')
    const textOfcommentArea = commentArea.value; 
    const mainSection = document.getElementById('comment-container-1')
    const newComment = document.createElement('p');
    newComment.innerText = textOfcommentArea
    newComment.style.color = 'red'
    mainSection.appendChild(newComment);
    console.log(mainSection);
})