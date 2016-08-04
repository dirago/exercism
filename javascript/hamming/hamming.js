var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
    var result = 0;
    if (a.length !== b.length) {
        throw new Error('DNA strands must be of equal length.');
    } else {
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
            result++;
            }
        }
        return result
    }
}

module.exports = Hamming;
