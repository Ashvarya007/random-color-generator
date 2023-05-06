// color generator code
const btn = document.querySelector('#colors');
btn.addEventListener('click', function () {
    const newColor = randColor();
    document.body.style.backgroundColor = newColor;
    document.querySelector('h1').innerText = newColor;
});
// color generator code

// color generator function
const randColor = () => {
     const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

// reset back to original background
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => { document.body.style.backgroundColor = "white", document.querySelector('h1').innerText = "Color generator" });
// reset back to original background

// copy the color value to clipboard
const copyBtn = document.querySelector('#copyToClipboard');
copyBtn.addEventListener('click', () => {
    const head = document.getElementById("heading").innerText;
    navigator.clipboard.writeText(head);
    console.log(head);
})

