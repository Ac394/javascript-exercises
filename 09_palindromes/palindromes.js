const palindromes = function (phrase) {
    let newPhrase = phrase.replace(/[^a-zA-Z]+/g, '');
    let reversePhrase = newPhrase.split("").reverse().join("");
    if (newPhrase.toLowerCase() === reversePhrase.toLowerCase()) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
