# 문제39 : 오타 수정하기

혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다. 

그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다. 
혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

**문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.**

입출력

입력 : querty
출력 : euerty

입력 : hqllo my namq is hyqwon
출력 : hello my name is hyewon

>>나의 풀이
// 참고 해서 품 : https://codechacha.com/ko/javascript-replace-in-string/
const data = prompt('입력해주세요.');
// 방법1 : 가장 먼저 찾은 문자열 1개만 반환한다. 
// console.log(data.replace('q','e'));
//방법2 : 여러문자열을 변경하고 싶을 때는 정규표현식을 사용해야한다. /바꿀문자/g
console.log(data.replace(/[q]/g,'e'));
//방법3 : 대소문자를 구분하지 않고 문자치환
console.log(data.replace(/[q]/gi,'e'));


>>답안
//1. 함수 사용
const word = prompt('입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word,"q","e"));

//2. 정규식 사용
const word = prompt('입력하세요.');

console.log(word.replace(/q/gi, 'e'));

>>영상답안
// const word = prompt('입력하세요.');
const word = 'hqllo my namq is hyqwon';
console.log(word.split("q").join("e"));