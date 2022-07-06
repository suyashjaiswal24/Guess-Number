var systemGuess = Math.floor(Math.random()*100)+1;
attempt = 0
function guessNumber()
{
    var num = document.getElementById("number").value;
    userNumber = parseInt(num);
    if(num === '' || userNumber >100 || userNumber < 1)
        document.getElementById("out").textContent = "Input is not Valid"
    else{
        attempt++;
        if(userNumber === systemGuess)
            document.getElementById("out").innerHTML = "<b>You Guessed the answer CORRECTLY in "+ attempt +" attempts!!!!</b>"
        else if(userNumber > systemGuess)
            document.getElementById("out").innerHTML = "<i>Guess a Smaller Number!</i>"
        else 
            document.getElementById("out").innerHTML = "<i>Guess a Greater Number!</i>"
    }
}