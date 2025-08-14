function solution(s) {
    let answer = ""
    let i=0;
    let j=0;
    while(i+j<s.length){
        answer += j%2===0 ? s[i+j].toUpperCase(): s[i+j].toLowerCase();
        if(s[i+j]===" "){
            i = i+j+1;
            j=0;
        }else{
            j++;
        }
    }
    return answer
}