# 문제18 : 평균 점수
영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
**단, 소숫점 자리는 모두 버립니다.**

입출력
입력 : 20 30 40
출력 : 30

>>나의 풀이
 //코드실행안됨.오류남. 공부한 흔적을 남기기 위해 남긴다....
// 수학기호로 하는 (국+수+영)/3 을 원하는 문제같지 않아서, 입력 수만큼 만들고 싶어서 짜다가 어려워서 챗지피티 했다...
 const score = prompt('공백으로 구분하여 국어, 수학, 영어 점수를 적어주세요. ex) 90 90 100').split(' ').map(Number);
console.log(score);
const average = score/(score.length)
console.log(average);


>> 풀고 싶었던 것을 챗지피티로 만들어 본 것
const score = prompt('공백으로 구분하여 국어, 수학, 영어 점수를 적어주세요. ex) 90 90 100').split(' ').map(Number);
let sum = 0;
for (let i = 0; i < score.length; i++) {
  sum += score[i];
}
const average = Math.floor(sum / score.length);
console.log(average);


>>답안
const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;
for (let i=0; i<3; i++){
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}
console.log(Math.floor(sum/3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.


>>답안(영상)
const score =prompt().split(" ");
let sum= 0;
for (let i=0; i<score.length; i++) {
  sum = sum + parseInt(score[1], 10);
}
console.log(Math/floor(sum/score.length));
console.log(sum/score.length);
//Math.floor : 주어진 값보다 이하의 가장 큰 정수를 반환합니다.