let arrayOfWords = ["INNORAT", "APARTAMENT", "MASINA","FLOARE", 
"FURCULITA","ACUARELE"];
let givenWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
let newWord = [];
let incorrectGuesses = 0;
let noOfLetters = 0;

function showWord() {
    document.getElementById('button-container').innerHTML += `
    <div class="card">
        <div class="body-header">Cuvantul este:</div>
        <br>
        <input type="text" value="" name="textbox" id="textbox" readonly/>
        <br>
        <h4 id="incorrectGuesses" > Raspuns Gresit: 0</h4>
        <button id="reloadPage" type="button" class="btn btn-secondary" style="float:right" 
        onClick="window.location.reload()">
        Reincearca!
        </button>
        </div>
    <br>
  `; 
    for(let i = 65; i <= 90; ++i) {
        const newBtn = document.createElement('button');
        newBtn.innerText = String.fromCharCode(i);
        newBtn.className="btn btn-primary";
        newBtn.style="margin-right: 16px";
        document.querySelector('#button-container').appendChild(newBtn);
        newBtn.id = i;
        newBtn.addEventListener('click', onClick);
    }
    for(let i = 0; i < givenWord.length; ++i) {
        newWord[i] = "_";
    }
    document.getElementById("textbox").value = newWord;
    document.getElementById("startGame").disabled = true;
}

const onClick = function() {
    let letter = String.fromCharCode(this.id); 
    if (givenWord.includes(letter)) {
        apperLetter(letter);
    } else {
        ++incorrectGuesses;
        document.getElementById("incorrectGuesses").innerHTML = "Raspuns Gresit:" + incorrectGuesses;
        if (incorrectGuesses == 7) {
            document.getElementById("incorrectGuesses").innerHTML = "Ne pare rau ai pierdut!";
            let elements = document.getElementsByClassName("btn btn-primary");
            for(var i = 0; i < elements.length; ++i) {
                elements[i].disabled = true;
            }
        }
    }
}

function apperLetter(letter) {
    for(let i = 0; i < givenWord.length; ++i) {
        if (givenWord[i] == letter) {
            newWord[i] = letter;
            ++noOfLetters;
        }
    }
    document.getElementById("textbox").value = newWord;
    if(noOfLetters == givenWord.length) {
        document.getElementById("incorrectGuesses").innerHTML = "Felicitari, ai ghicit cuvantul!";
        let elements = document.getElementsByClassName("btn btn-primary");
        for(var i = 0; i < elements.length; ++i) {
            elements[i].disabled = true;
         }
    }
}
