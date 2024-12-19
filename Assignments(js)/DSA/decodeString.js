function decodeString(s) {
    let stack = [];
    
    for (let char of s) {
        if (char !== ']') {
            stack.push(char);
        } else {
            let currentStr = '';
            while (stack[stack.length - 1] !== '[') {
                currentStr = stack.pop() + currentStr;
            }
            stack.pop(); 
            let num = '';
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }
            num = parseInt(num); 
            stack.push(currentStr.repeat(num));
        }
    }
    return stack.join('');
}
console.log(decodeString("3[a]2[bc]"));    
console.log(decodeString("3[a2[c]]"));     
console.log(decodeString("2[abc]3[cd]ef")); 