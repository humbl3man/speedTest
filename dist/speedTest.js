var SpeedTest = function(testFunc, repetitions) {
  this.testFunc = testFunc;
  this.repetitions = repetitions || 10000;
  this.average = 0;
};

SpeedTest.prototype = {
  startTest: function () {
    var beginTime, endTime, sumTimes = 0;

    for (var i = 0, x = this.repetitions; i < x; i += 1) {
      beginTime = + new Date();
      this.testFunc();
      endTime = + new Date();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return 'Speed for repeating ' + this.repetitions + ' times: ' + this.average;
  }
};

$(function () {
  'use strict';
});
