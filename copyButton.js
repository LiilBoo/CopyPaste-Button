const btn1 = document.querySelector('#btn1');

const btn2 = document.querySelector('#btn2');

const textToBeCopied1 = "Here is some text to be copied"
const textToBeCopied2 = "And here is another one"

//*OU

const txtToBeCopiedDynamically = document.querySelector('#text1');

btn1.addEventListener("click", () =>  {
    
    
    navigator.clipboard.writeText(textToBeCopied1)
    // navigator.clipboard.writeText(txtToBeCopiedDynamically.innerText)

});

btnCopy.addEventListener("click", (e) =>  {
    
    
    navigator.clipboard.writeText(e.target.previousElementSibling.innerText)
    // navigator.clipboard.writeText(txtToBeCopiedDynamically.innerText)

});

btn2.addEventListener("click", () =>  {
    
    
    navigator.clipboard.writeText(textToBeCopied2)

});


