# 문제41 : 소수판별

숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

>>나의 답안
//와 진짜 어케 만들어야할 지 생각도 안났다...머리터져... 강의...ㄱㄱ...
const input = prompt('소수인지 판별할 숫자를 입력해주세요')
const decimal = if {input % 2 === 0
} else { input % 3 === 0
} else { input % 5 === 0
} else 


>>풀이
const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  for (let i=2; i<num; i++) {
    const result = num % i;
    if (result === 0) {
      console.log('NO');
      return false;
    }
  }
  //i는 2보다 클 때부터 시작이라 1은 함수를 실행하지 않아서 바로 yes가 된다. 그래서 아래의 if 를 해주는 것.
  if (num === 1) {
    console.log('NO');
    return;
  }
  console.log('YES');
}

check_prime(num);

