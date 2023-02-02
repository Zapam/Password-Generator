let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("passOne")
let passwordTwo = document.getElementById("passTwo")
const clBtn = document.getElementById("clBtn");
function generate() {
    create()
}
function create(){
    passwordOne.textContent = " "
    passwordTwo.textContent = " "
    for (let i = 0; i < 10; i++ ) {
        let pass1 = Math.floor(Math.random() * characters.length)
        let pass2 = Math.floor(Math.random() * characters.length)
        passwordOne.textContent += characters[pass1]
        passwordTwo.textContent += characters[pass2]
    }
}

function clear1() {
    passwordOne.textContent = " ";
    passwordTwo.textContent = " ";
    console.log('test');
}

