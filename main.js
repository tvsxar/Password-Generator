const mainEl = document.querySelector('.main');
const passwordEl = document.createElement('input');
const copyButton = document.createElement('button');
const generateButton = document.createElement('button');

passwordEl.classList.add('password');
passwordEl.setAttribute('placeholder', 'Generate password');
passwordEl.addEventListener('keypress', (e) => {
    e.preventDefault();
})
passwordEl.addEventListener('focus', (e) => {
    navigator.clipboard.writeText(passwordEl.value);
})

copyButton.classList.add('password-button');
copyButton.innerText = 'Copy';
copyButton.addEventListener('click', (e) => {
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordEl.value);
})

generateButton.classList.add('password-button');
generateButton.innerText = 'Generate';
generateButton.addEventListener('click', (e) => {

    let password = generatePassword(12);
    passwordEl.value = password;
})

function generatePassword(passwordLength) {
    const numberChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+';
    const allChars = numberChars + upperChars + lowerChars + symbols;
    let randomString = '';

    for(let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allChars.length)
        randomString += allChars[randomNumber];
    }

    return randomString;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyButton);
mainEl.appendChild(generateButton);