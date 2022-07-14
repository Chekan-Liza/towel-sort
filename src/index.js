module.exports = function towelSort (matrix) {
  var result = [];

  for(let d in matrix){
    if(d % 2 == 0){
      matrix[d].sort(function(a, b) {
        return a - b;
      });
      for(let w in matrix[d]){
        result.push(matrix[d][w]);
      }
    } else {
      matrix[d].sort(function(a, b) {
        return b - a;
      });
      for(let w in matrix[d]){
        result.push(matrix[d][w]);
      }
    }
  }

  return result;
}
