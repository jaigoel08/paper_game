function compChoice(){
    let x = Math.floor(Math.random()*3);
    if(x===0){
        return '✊';
    } else if( x===1){
        return '📃';
    } else{
        return '✂️'
    }
}
function ifRock(){
    document.querySelector('#user-choice').innerHTML = 'YOU HAVE SELECTED ✊';
    let computerChoice = compChoice();
    document.querySelector('#comp-choice').innerHTML = `COMPUTER HAS SELECTED ${computerChoice} `;
    if(computerChoice === '✊') {
        document.querySelector('#result').innerHTML = `It's a tie 🤝...`;
    }
    else if(computerChoice === '📃') {
        document.querySelector('#result').innerHTML = `Computer won this time 😟...`;
    } else {
        document.querySelector('#result').innerHTML = `Congrats You won 🤩...`;
    }
}
function ifPaper(){
    document.querySelector('#user-choice').innerHTML = 'YOU HAVE SELECTED 📃';
    let computerChoice = compChoice();
    document.querySelector('#comp-choice').innerHTML = `COMPUTER HAS SELECTED ${computerChoice} `;
    if(computerChoice === '📃') {
        document.querySelector('#result').innerHTML = `It's a tie 🤝...`;
    }
    else if(computerChoice === '✂️') {
        document.querySelector('#result').innerHTML = `Computer won this time 😟...`;
    } else {
        document.querySelector('#result').innerHTML = `Congrats You won 🤩...`;
    }
}
function ifScissor(){
    document.querySelector('#user-choice').innerHTML = 'YOU HAVE SELECTED ✂️';
    let computerChoice = compChoice();
    document.querySelector('#comp-choice').innerHTML = `COMPUTER HAS SELECTED ${computerChoice} `;
    if(computerChoice === '✂️') {
        document.querySelector('#result').innerHTML = `It's a tie 🤝...`;
    }
    else if(computerChoice === '✊') {
        document.querySelector('#result').innerHTML = `Computer won this time 😟...`;
    } else {
        document.querySelector('#result').innerHTML = `Congrats You won 🤩...`;
        console.log("User selected Scissor and won");
    }
}