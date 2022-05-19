function trimString(inputString) {
    const string = inputString.toString();
    const stringRegex = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, " ");
    const newString = stringRegex.trim();

    return newString
}

module.exports = trimString;