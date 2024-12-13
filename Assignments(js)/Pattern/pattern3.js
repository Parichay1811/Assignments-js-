function pattern3(n){
    for(let i = 1; i <= n; i++){
        let num = ""
        for(let j = i ; j >= 1; j--){
            num += j + " "
        }
        console.log(num);  
    }
    for(i = n - 1; i >= 1; i--){
        let num = ""
        for(let j = i ; j >= 1; j--){
            num += j + " "
        }
        console.log(num);
    }
}
pattern3(5)