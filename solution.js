/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var len = digits.length
    if(len==0){
        return[]
    }
    
    const hashMap = [,,['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]
    
    
    var result=hashMap[digits[0]];
    
    for(let i=1; i<len; i++){
        let resLen = result.length
        let newResults =[]
        for(let j=0; j<resLen; j++){
            for(let k=0; k<hashMap[digits[i]].length;k++){
                newResults.push(`${result[j]}${hashMap[digits[i]][k]}`)
            }
        }
        result=newResults
    }
    return result
};
