module.exports = function getZerosCount(number, base) {
  // факторизация base
  var p = []; // массив множителей
  var q = []; // степень каждого множителя
  let count = 0;
  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      while (base % i === 0) {
        base = base / i;
        count += 1
      }
      p.push(i);
      q.push(count);
      count = 0;
    }
  }
     
  var o = []; // временный массив для подсчёта множителей
  var c = []; // суммы множителей
 
  // сколько степеней множителя рассматриваем
  for(let j = 0; j < p.length; j++) {    
    var f = 0;
    while(Math.pow(p[j], f + 1) < number) {
      f++;
    }
    
    for(let l = 1; l <= f; l++) {
      var z = Math.trunc(number / Math.pow(p[j], l));
      o.push(z);
    }    
    
    var x = o.reduce((a, b) => a + b);
    c.push(Math.trunc(x / q[j]));
    o = [];
  }
  
  return c.sort((a, b) => a - b)[0];
}

// алгоритм http://www.cyberforum.ru/cpp-beginners/thread2192637.html