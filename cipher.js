//const initalUpperCaseLetters = 65
//const endUpperCaseLetters = 90
//const initalLowerCaseLetters = 97
//const endLowerCaseLetters = 122
//const alphabetSize = 26

const cipher = {

  encode: (offset, string) => {
    if (typeof offset != "number" || typeof string != "string") {
      throw new TypeError()
    }
    const parsedOffset = offset
    let encoded = ""
    for (let i = 0; i < string.length; i++) {
      const letterInAsciiTable = string.charCodeAt(i);
      if (letterInAsciiTable >= 65 && letterInAsciiTable <= 90) {
        encoded += String.fromCharCode(((letterInAsciiTable - 65 + parsedOffset) % 26) + 65); //para upperCase
      } else if (letterInAsciiTable >= 97 && letterInAsciiTable <= 122) {
        encoded += String.fromCharCode(((letterInAsciiTable - 97 + parsedOffset) % 26) + 97) //para lowerCase
      } else {
        encoded += string.charAt(i);
      }

    }
    return encoded
  },

  decode: (offset, string) => {
    if (typeof offset != "number" || typeof string != "string") {
      throw new TypeError()
    }
    const parsedOffset = parseInt(offset) % 26
    let decoded = ""
    for (let i = 0; i < string.length; i++) {
      const letterInAsciiTable = string.charCodeAt(i);
      if (letterInAsciiTable >= 65 && letterInAsciiTable <= 90) {
        decoded += String.fromCharCode(((letterInAsciiTable + 65 - parsedOffset) % 26) + 65); //para upperCase
      } else if (letterInAsciiTable >= 97 && letterInAsciiTable <= 122) {
        const letterInAlphabet = letterInAsciiTable - 97
        let letterInAlphabetMinusOffset = letterInAlphabet - parsedOffset
        if (letterInAlphabetMinusOffset < 0) letterInAlphabetMinusOffset += 26
        const offsetInAlphabet = letterInAlphabetMinusOffset % 26
        const offsetInAsciiTable = offsetInAlphabet + 97
        decoded += String.fromCharCode(offsetInAsciiTable); //para LowerCase
      } else {
        decoded += string.charAt(i);
      }

    }
    return decoded
  }


}
export default cipher;
