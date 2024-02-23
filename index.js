const inputField = document.querySelector(".password");
const copyBtn = document.querySelector(".fa-copy");
const generateBtn = document.querySelector(".btn");
const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lettersSmal = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "1234567890";
const specialSigns = "!@#$%^&*()_=+?/";
let passLength = 12;
let password = "";

const passGen = () => {
	let randomNumber = 0;
    randomChar = "";
	for (let i = 0; i <= passLength; i++) {
		randomNumber = Math.floor(Math.random() * 4);
        switch (randomNumber) {
            case 0:
                randomChar = letters[Math.floor(Math.random() * letters.length)];
                break;
            case 1:
                randomChar = lettersSmal[Math.floor(Math.random() * lettersSmal.length)];
                break;
            case 2:
                randomChar = numbers[Math.floor(Math.random() * numbers.length)];
                break;
            case 3:
                randomChar =
                    specialSigns[Math.floor(Math.random() * specialSigns.length)];
        }
        password += randomChar;
	}

    inputField.value=password
    password=''
};
const copyToClipboard=()=>{
    inputField.select()
    navigator.clipboard.writeText(inputField.value)
   
}

generateBtn.addEventListener("click", passGen);
copyBtn.addEventListener('click',copyToClipboard)
