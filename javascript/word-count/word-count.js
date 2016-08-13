var Words = function () {};

Words.prototype.count = function(input) {
    input = input.toLowerCase().trimLeft().trimRight();
    var arr = input.split(/\s+/);
    var lib = {};

    for (var i = 0; i < arr.length; i++) {
        if (lib.hasOwnProperty(arr[i])) {
            lib[arr[i]] += 1;
        } else {
            lib[arr[i]] = 1;
        }
    }
    return lib;
};

module.exports = Words;
