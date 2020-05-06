function capitalize(word) {
    if (typeof word != 'string') {return 'Invalid string'}
    let newWord = word.charAt(0).toUpperCase() + word.slice(1)
    return newWord
}

module.exports = capitalize
