문제16 : 로꾸거
문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입출력
입력 : 거꾸로
출력 : 로꾸거

>>나의 풀이
const a = prompt('');
const mirror = a.split('').reverse().join('');
console.log(mirror)
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split#split%EC%9C%BC%EB%A1%9C_%EB%AC%B8%EC%9E%90%EC%97%B4_%EB%92%A4%EC%A7%91%EA%B8%B0
//https://www.freecodecamp.org/korean/news/how-to-reverse-a-string-in-javascript-in-3-different-ways/
//이거 보고 만듦!

>>답안
const n = prompt('입력하세요.');
const reverseString = n.split('').reverse().join('');
/*
* split() 메서드는 문자열을 배열로 만들어 반환하고,
* reverse() 메서드는 배열의 순서를 반전하며,
* join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
*/
console.log(reverseString);

>>답안(강의)
var str = "거꾸로";
console.log(str.split('').reverse().join(''));