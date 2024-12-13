function pattern4(n) {
    let st = n
    for(let i = 1; i <= n; i++){
        let num = ""
        for(let j = 1; j <= i; j++){
            num += "  "
        }
        for(let j = 1; j <= st; j++){
            num += j + " "
        }
        console.log(num);
        st -= 2
    }
}
pattern4(9)
