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

 


}
export default cipher;
