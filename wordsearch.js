const wordSearch = (letters, word) => {
  let a = word.split("");
  a = a.reverse();
  a = a.join('');
  
  
  if (letters.length == 0) return false;
  let b = transpose(letters)
  if (!Array.isArray(letters[0])) {
    let c = letters.join("")
    if (c.includes(word) || c.includes(a)) return true;
    return false
  }
  if (!Array.isArray(b[0])){
    let d = b.join("")
    if (d.includes(word) || c.includes(d)) return true;
    return false
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word) || l.includes(a)) return true;
    
  } 
  const VerticalJoin = b.map(ls => ls.join(''));
  for (let l of VerticalJoin) {
    if (l.includes(word) || l.includes(a)) return true;
  }
    
  return false;

};

module.exports = wordSearch;



const transpose = function(matrix) {
  let a = [];
  for (let k = 0; k < matrix[0].length; k++) {
    a.push([]);
    for (let l = 0; l < matrix.length; l++) {
      a[k].push(0);
    }
  }
  
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      a[j][i] = matrix[i][j];
    }
  }
  return a;
};

console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'AAAYRR'))

module.exports = wordSearch