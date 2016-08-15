var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(input) {
    var arrDna = ["G", "C", "T", "A"];
    var arrRna = ["C", "G", "A", "U"];
    var output = "";
    for (var j = 0; j < input.length; j++) {
        for (var i = 0; i < arrDna.length; i++) {
            if (arrDna[i] == input[j]) {
                output += arrRna[i];
            }
        }
    }
    return output.length > 0 ? output : false;
};

module.exports = DnaTranscriber;
