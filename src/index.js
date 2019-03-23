module.exports = function getZerosCount(number, base) {
  // your implementation
    
  var sem = Number.MAX_VALUE;
  var ak = base;
  for (var q = 2; q <= base; q++) {
    if (ak % q === 0) {        
      var lis = 0;
        
      while (ak % q === 0) 
          
      {
         ak = ak / q;     
         lis++;
      }
        
      var x = 0;  
      var z = Math.floor(number / q);
        
      while (z > 0) 
      {
        x += z;
        z = Math.floor(z / q);
      }
      sem = Math.min(sem, Math.floor(x / lis))
    }
  }
            return sem;
        }