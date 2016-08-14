var Isogram = function(str) {
    this.str = str;
};

Isogram.prototype.isIsogram = function() {
    str = this.str.toLowerCase();
    regex = /[a-zÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ]/gi
    obj = {};
    for (var i = 0; i < str.length; i++) {
        if (obj.hasOwnProperty(str[i]) && str[i].match(regex)) {
            return false;
        } else {
            obj[str[i]] = 1;
        }
    }
    return true;
};

module.exports = Isogram;
