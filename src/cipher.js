const alphabetOfsset = 65;
const alphabetSize = 26;
const cipher = {
  encode: (offset, string) => {
    const stringToUpper = string.toUpperCase();
    const parsedOffset = parseInt(offset)
    let encoded = ""
    for (let i = 0; i < string.length; i++) {
      const letterInAsciiTable = stringToUpper.charCodeAt(i);
      const cipherFormula = (((letterInAsciiTable - alphabetOfsset) + parsedOffset) % alphabetSize) + alphabetOfsset;
      const result = String.fromCharCode(cipherFormula)
      encoded += result
    }
    return encoded
  }
  
};

export default cipher;
