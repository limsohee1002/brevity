module.exports = function nthFibonacci(n, a = 1, b = 0) {
  if (n <= 1) { return n; }
  var c;
  while (n > 0) {c=a;a=a+b;b=c;n--;}
  return b;
}