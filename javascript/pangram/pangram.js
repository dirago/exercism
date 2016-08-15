var Pangram = function(str){
    this.str = str.toLowerCase().replace(/ /g,"");
};

Pangram.prototype.isPangram = function () {
    obj = {};
    nbLetters = 0;
    for (var i = 0; i < this.str.length; i++) {
        if (this.str[i].match(/[a-z]/gi)) {
            obj[this.str[i]] = 1;
        }
    }
    for (var index in obj) {
        nbLetters += obj[index];
    }
    return nbLetters == 26 ? true : false;
};

module.exports = Pangram;
