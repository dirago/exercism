var BeerSong = function() {};

BeerSong.prototype.verse = function(n) {
    outputOneMore = n + ' bottles of beer on the wall, ' + n + ' bottles of beer.\nTake one down and pass it around, ' + (n-1) + ' bottles of beer on the wall.\n';
    outputNoMore = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

    return n > 0 ? outputOneMore : outputNoMore
}

BeerSong.protype.sing = function(n1, n2) {


}

module.exports = BeerSong;
