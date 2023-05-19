# 문제35 : Factory 함수 사용하기
2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 
<pass>에 코드를 작성하여 two함수를 완성하세요.
function one(n){
    function two(){
        //pass
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));


>>나의 풀이
//틀린 답임!문제 자체를 이해하기가 어려웠다.. Math.pow() 사용하는 건 찾아서 일단 풀긴 품...어렵다ㅠㅠ
function one(n){
    function two(A) {
    return Math.pow(A,n)
    }
    return two;
}
const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

>>답안
function one(n) {
  function two(value) {
    const sq = Math.pow(value, n);
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));


>>영상답안 
function one(n) {
  function two(x) {
    return Math.pow(x, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
