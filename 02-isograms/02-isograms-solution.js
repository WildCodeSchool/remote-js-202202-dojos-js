function isIsogram(str) {
    const letters = [];
    const lowerCased = str.toLowerCase();
    for (let char of lowerCased) {
        if (letters.indexOf(char) > -1) {
            return false;
        }
        letters.push(char);
    }
    return true;
}

module.exports = isIsogram;

// Autres solutions : RegExp, Utilisation d'un Set