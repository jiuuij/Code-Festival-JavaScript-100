# 문제46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

>>나의 풀이

//44번 문제 답 참고 했지만 못풀었다.. for문 하면 될거같은데... for문 다시 공부해야겠다ㅠ
let n = ;
let sum = 0;

for(let i=0; i<20; i++) {
    
}
while(n !== 0){
  sum += (n % 10);
  n = Math.floor(n/10);
}
console.log(sum);

//챗지피티의 답
let concatenatedString = '';

for (let i = 1; i <= 20; i++) {
  concatenatedString += i;
}

let sum = 0;

for (let j = 0; j < concatenatedString.length; j++) {
  sum += parseInt(concatenatedString.charAt(j));
}

console.log('모든 자릿수의 총 합:', sum);



>>답안
let arr = [];
let sum = 0;

for (let i=0; i<20; i++){
  arr[i] = i+1;
}

arr.forEach((n) => {
  while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
  }
})

console.log(sum);