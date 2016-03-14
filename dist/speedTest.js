var SPEEDTEST = function (testFn, repetitions) {
  var fn = testFn,
      reps = repetitions || 10000,
      average = 0;
  return {
    startTest: function () {
      var beginTime, endTime, sumTimes = 0;

      for (var i = 0, x = reps; i < x; i += 1) {
        beginTime = + new Date();
        fn();
        endTime = + new Date();
        sumTimes += endTime - beginTime;
      }
      average = sumTimes / reps;
      return 'Speed for repeating ' + reps + ' times: ' + average;
    }
  };
};
