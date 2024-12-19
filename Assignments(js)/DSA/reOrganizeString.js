function reorganizeString(s) {

    let charCount = {}; 
    for (let char of s) {
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        charCount[char]++;
    }

    let charArray = [];
    for (let char in charCount) {
        charArray.push([char, charCount[char]]);
    }
    charArray.sort((a, b) => b[1] - a[1]); 
    let maxFrequency = charArray[0][1]; 
    if (maxFrequency > Math.ceil(s.length / 2)) {
        return ""; 
    }
    let result = new Array(s.length);
    let index = 0;
    for (let [char, count] of charArray) {
        while (count > 0 && index < s.length) {
            result[index] = char; 
            index += 2; 
            count--;
        }
    }
    index = 1; 
    for (let [char, count] of charArray) {
        while (count > 0) {
            result[index] = char; 
            count--;
        }
    }
    return result.join('');
}
console.log(reorganizeString("aab"));  
console.log(reorganizeString("aaab")); 
