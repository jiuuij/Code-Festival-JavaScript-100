# 문제34 : sort 구현하기
민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 
민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

입출력

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES

>>나의 풀이
const data = prompt('띄어쓰기로 구분하여 키를 입력해주세요').split(' ');
const ascending = data.sort((a, b) => a - b).join(' ');
const result = data === ascending ? 'YES' : 'NO';
console.log(result);
// 항상 문제에서 if 로 풀길래 if로도 해보았다! 뿌듯!
// if (data === ascending) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

>>답안
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) { 
    //123과 95가 있을 때 sort는 문자열1 vs 문자열9 로 비교하기 때문에 95가 더 뒤에 가게 된다. 그래서 함수로 지정해주는 것!
    return a - b;
  }).join(" "); 

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}