function solution(s) {
    let answer = s.split(0).join('');
    let count = 0;
    while(answer!==1){
        count++;
        answer = parseInt(answer,2);
        answer = answer.toString(2);
    }
    return 1;
    
}

console.log(solution("110010101001"));