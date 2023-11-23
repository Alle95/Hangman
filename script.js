let arrayOfWords = ["CLOUDY", "APARTEMENT", "APPOINTMENT","FLOWER", 
"COMPUTER","KEYBOARD", "HAPPINESS", ];
let newWord = [];
let incorrectGuesses = 0;
let noOfLetters = 0;
let givenWord;

function showWord() {
    givenWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
    for(let i = 0; i < givenWord.length; ++i) {
        newWord[i] = "_";
    }
    document.getElementById("textbox").value = newWord;
    document.getElementById("startGame").disabled = true;
}

function addLetter(letter) {
    if(givenWord.includes(letter)) {
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
