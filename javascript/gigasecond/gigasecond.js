var Gigasecond = function(date){
    this.birthDate = date;
    this.timeDate = date.getTime();
};

Gigasecond.prototype.date = function () {
    interval = 1000000000000;
    return new Date(this.timeDate + interval);
};

module.exports = Gigasecond;
