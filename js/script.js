
var my_pow = function(x, n) {
  var result = x;

  if (n > 0) {
    for (var i = 1; i < n; i++) {
      result *= x;
    }
  }

  if (n < 0 && x != 0) {
    for (var i = -1; i > n; i--) {
      result *= x;
    }
    result = 1 / result;
  }

  if (n == 0) {
    result = 1;
  }

  if (n < 0 && x == 0) {
    result = 'incurrect values!';
  }
    
  return result;
}


  console.log('5 в степени 0 =  ', my_pow(5, 0));
  console.log('2 в степени -1 =  ', my_pow(2, -1));
  console.log('-2 в степени -2 =  ', my_pow(-2, -2));
  console.log('0 в степени -1 =  ', my_pow(0, -1));


  module.exports = my_pow;





