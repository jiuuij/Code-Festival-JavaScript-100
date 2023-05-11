# 문제19 : 제곱을 구하자
공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

>>나의풀이
const num = prompt('공백으로 구분하여 a의 b승을 구하기 위한 숫자를 입력하세요. ex)2 3 -> 2의 3승').split(' ');
const save = Math.pow(parseInt(num[0],10), parseInt(num[1],10));
console.log(save);


>>답안
const num = prompt('수를 입력하세요.').split(' ');
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
