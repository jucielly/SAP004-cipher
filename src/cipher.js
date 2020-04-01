const alphabetOfsset = 65;
const alphabetSize = 26;
const cipher = {
  encode: (offset,string) => {
    const stringToUpper = string.toUpperCase();
    let encoded = ""
    for(let i = 0; i <= string.length; i++){
       const letterInAsciiTable = stringToUpper.charCodeAt(i);
       const cipherFormula = ((letterInAsciiTable - alphabetOfsset + offset)% alphabetSize)+alphabetOfsset;
       const result = String.fromCharCode(cipherFormula)
       encoded += result
    }
    return encoded
}
};

export default cipher;
