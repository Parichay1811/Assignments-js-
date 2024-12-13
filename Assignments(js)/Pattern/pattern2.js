function pattern(n) {
  let outPut = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      outPut += "  ";
    }
    for (let j = 1; j <= i; j++) {
      outPut += j + " ";
    }
    outPut += "\n";
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      outPut += "  ";
    }
    for (let j = 1; j <= i; j++) {
      outPut += j + " ";
    }
    outPut += "\n";
  }

  console.log(outPut);
}
pattern(5);