var BeerSong = function() {};

BeerSong.prototype.verse = function(n) {
    outputALot = n + ' bottles of beer on the wall, ' + n + ' bottles of beer.\nTake one down and pass it around, ' + (n-1) + ' bottles of beer on the wall.\n';
    outputTwoMore = n + ' bottles of beer on the wall, ' + n + ' bottles of beer.\nTake one down and pass it around, ' + (n-1) + ' bottle of beer on the wall.\n';
    outputOneMore = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    outputNoMore = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

    if (n>2) {
        return outputALot;
    } else if (n==2) {
        return outputTwoMore;
    } else if (n==1) {
        return outputOneMore;
    } else {
        return outputNoMore;
    }
}

// BeerSong.prototype.sing = function(n1, n2) {
//     var output;
//     if (n1&&n2) {
//         gap = n1 - n2;
//         for (var i = 0; i < gap; i++);
//         output +=
//     }
// }

module.exports = BeerSong;
