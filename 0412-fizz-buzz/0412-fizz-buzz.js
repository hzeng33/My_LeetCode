/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for(let i = 0; i < n; i++){
        answer.push(i+1);
    }
    for(let i = 0; i < answer.length; i++){
        if(answer[i] % 3 === 0 && answer[i] % 5 === 0){
            answer[i] = "FizzBuzz";
        } else if(answer[i] % 3 === 0){
            answer[i] = "Fizz";
        } else if(answer[i] % 5 === 0){
            answer[i] = "Buzz";
        } else {
            answer[i] = (i+1).toString();
        }
    }
    return answer;
};