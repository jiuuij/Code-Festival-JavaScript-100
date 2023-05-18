# 문제33 : 거꾸로 출력하기
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
입출력

입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2

>>나의 풀이 
const data = prompt('거꾸로 출력할 숫자를 입력해주세요.').split(' ').reverse().join();
console.log(data.replace(/,/g,' '));
// 정규표현식 참고 :https://webisfree.com/2014-01-09/[%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8]-replace()-%EB%AC%B8%EC%9E%90-%EB%B3%80%ED%99%98-%EC%B9%98%ED%99%98

>>답안 //띄어쓰기 안됨.
let data = prompt('숫자를 입력하세요.').split(' ').reverse();
let result = '';

for (let i=0; i<data.length; i++){
  result += data[i];
}

console.log(result);


>>영상답안
onst arr = prompt().split(" ").reverse();
let reverseVal = "";

for(let i = 0; i < arr.length; i++) {
    reverseVal = reverseVal + (arr[i]+" ");
}

console.log(reverseVal);