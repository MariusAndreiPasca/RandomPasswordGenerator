const btn = document.querySelector(".btn");
const password = document.querySelector(".password");
const upperCase = document.querySelector("#upperCase");
const copyBtn = document.querySelector(".copy-password"); 
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

// char lists
const lowerList = "abcdefghijklmnopqrstuvwxyz";
const upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersList = "1234567890";
const symbolsList = "~`!@#$%^&*()_+=-<>?|;:][{}/?.,"; 
let myList = [];


// checking boxes 

function checkBoxes() {
    if(upperCase.checked && numbers.checked && symbols.checked) {
        myList.push(upperList, numbersList, symbolsList)
    } else if (upperCase.checked && numbers.checked ) {
        myList.push(upperList, numbersList)
    } else if (upperCase.checked && symbols.checked ) {
        myList.push(upperList, symbolsList)
    } else if (numbers.checked && symbols.checked ) {
        myList.push(numbersList, symbolsList)
    } else if (upperCase.checked) {
        myList.push(upperList)
    } else if (numbers.checked) {
        myList.push(numbersList)
    } else if (symbols.checked){
        myList.push(symbolsList)
    } else {
        myList.push(lowerList)
    }
}








// password generator
btn.addEventListener("click", () => { 
    myList = [lowerList];
    checkBoxes();
    function createPass() { 
        let passLength = document.getElementById("length").value;
        let passGen = "";
        for (let i = 0; i < passLength; i++) { 
            passGen += myList.join("").charAt(Math.floor(Math.random() * myList.join("").length));
        };
    password.textContent = passGen;
    };
    createPass();
   
});






// copy to clipboard
copyBtn.addEventListener("click", () => {
    const placeHolder = document.createElement("textarea"); // create textarea so we can select the generated password
    const copyText = password.innerText; // create a variable with the value of the password
    if (!copyText) {
        return; // make sure there is a password generated 
    }
    placeHolder.value = copyText;
    document.body.appendChild(placeHolder); // create textarea ready for select()
    placeHolder.select(); //selecting the text
    document.execCommand("copy"); // copy 
    placeHolder.remove(); //remove textarea.
})




