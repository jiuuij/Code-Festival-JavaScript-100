# 문제48 : 대소문자 바꿔서 출력하기
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD

>>나의 답안
//받은 값을 for 문으로 돌려서 if 대문자 === 대문자 면 소문자로 바꾸고, 소문자 === 소문자 면 대문자로 바꾸자.
//하아 어케 해야하는지는 알겠는데 코드로 만들기가 어렵노...ㅠㅠ 
const data = 'AAABBBcccddd';
let a = [];

for(let i=0; i < data.length; i++){
    if(data[i]===data[i].toUpperCase()) {
        data[i].toLowerCase();
    } else {
        (data[i].toUpperCase());
}}
console.log(a);

// 함수로 푸는 블로그도 있다. 참고 https://jieum.tistory.com/16



>>풀이
let a = prompt('문자열을 입력하세요.');
let b = [];
let s = '';

for (let i=0; i<a.length; i++){
	//toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
  if(a[i] === a[i].toLowerCase()){ 
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j=0; j<b.length; j++){
  s += b[j];
}

console.log(s);


>>영상답안
const str = "AAABBBcccddd"
let arr = [];

for (let i = 0; i < str.length; i++) {
    if(srt[i] === srt[i].toUpperCase()){
        arr.push(str[i].toLowerCase());
    } else {
        arr.push(str[i].toUpperCase());
    }
}

console.log(arr.join(""));