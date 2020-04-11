import cipher from './cipher.js';

//console.log(cipher);


let form = document.getElementById("form")
let decodeBtn = document.getElementById("decode-btn")
let encodeBtn = document.getElementById("encode-btn")


function encryptMessage() {
  const messageValue = form.elements["message"].value
  const offsetValue = +form.elements["offset"].value
  const encryptedValue = cipher.encode(offsetValue, messageValue)
  form.elements["result"].value = encryptedValue
}

form.onsubmit = function (e) {
  e.preventDefault()
  encryptMessage()
}

encodeBtn.onclick = encryptMessage


function decryptMessage() {
    const messageValue = form.elements["message"].value
    const offsetValue = +form.elements["offset"].value
    const decryptedValue = cipher.decode(offsetValue,messageValue)
    form.elements["result"].value = decryptedValue
}

decodeBtn.onclick = decryptMessage