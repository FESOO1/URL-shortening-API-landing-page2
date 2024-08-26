const textInput = document.getElementById('textInput');
const shortenBtn = document.getElementById('submitBtn');
const outputContainer = document.querySelector('.output-container');

shortenBtn.addEventListener('click', shortenLink);

async function shortenLink(e) {
    e.preventDefault();

    const response = await fetch('https://cleanuri.com/api/v1/shorten/google.com')
    console.log(response);
};