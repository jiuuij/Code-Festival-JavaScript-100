# 문제49 : 최댓값 구하기
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

입출력

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10

>>나의 풀이
//참고 https://codechacha.com/ko/javascript-get-min-max-in-array/
//첫번째풀이
const data = prompt('공백으로 구분하여 숫자 10개를 적어주세요').split(' ');
const max = Math.max.apply(null,data);
console.log(max) 
//두번째풀이
const data = prompt('공백으로 구분하여 숫자 10개를 적어주세요').split(' ');
const max = Math.max(...data);
console.log(max);


>>답안
let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  numbers.sort((a, b) => {
    return b-a;
  });
  
  console.log(numbers[0]);