// Option 2 to handle event 
 function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
  }
  function makeRed(){
    document.body.style.backgroundColor = 'red'
  }

//   option 3: get element by id and set onClick 
 const btnMakeBlue = document.getElementById('btn-make-blue')
  // console.log(btnMakeBlue);
  btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue'
  }

//   another system with function or different version of option 3
 const makebtnPurple = document.getElementById('btn-make-purple');
  // console.log(makebtnPurple);
  makebtnPurple.onclick = makePurple
  function makePurple(){
    document.body.style.backgroundColor = 'purple'
  }

function findSomething(){
    document.body.style.backgroundColor = 'green'
}

const makeWhiteBtn = document.getElementById('make-white');
makeWhiteBtn.onclick = function makeWhite(){
    document.body.style.backgroundColor = 'white'
} 

const makeSkyBtn = document.getElementById('make-sky');
makeSkyBtn.onclick = makeSky()
function makeSky(){
    makeSkyBtn.innerText = 'make noting'
}

document.getElementById('make-new').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})

    