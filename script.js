const textInput = document.getElementById('textInput');
const shortenBtn = document.getElementById('submitBtn');
const outputContainer = document.querySelector('.output-container');

shortenBtn.addEventListener('click', shortenLink);

async function shortenLink(e) {
    e.preventDefault();

    const response = await fetch('https://cleanuri.com/api/v1/shorten');

    console.log(response);
    outputContainer.innerHTML += `
    <div class="output">
        <span class="output-left" id="linkEnteredText">https://www.frontendmentor.io</span>
        <span class="output-right">
        <span id="shortenedLinkText">https://rel.ink/k4IKyk</span>
        <button id="copyBtn" class="copy-button">Copy</button>
        </span>
    </div>
    `;
};