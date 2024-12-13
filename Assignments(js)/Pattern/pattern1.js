function pattern(row) {
    let st = 1;
    for (let i = 0; i < row; i++) {
      let output = "";
      for (let j = row - 1; j > i; j--) {
        output += "  ";
      }
      for (let k = 1; k <= st; k++) {
        output += k + " ";
      }
      console.log(output); 
      st += 2; 
    }
  }
  pattern(5);