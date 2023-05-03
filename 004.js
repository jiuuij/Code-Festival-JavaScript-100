/**문제4: 변수의 타입2
 * 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
 * 
 * 1) 입력: a=1, 출력 : number
 * 2) 입력: a=2.22  , 출력: boolean
 * 3) 입력: a='p' , 출력: string
 * 4) 입력: a=[1,2,3] , 출력: abject
 */

//나의 풀이 : 2

답안 : 2 
boolean은 true, false 값 밖에 없다.
typeof(a)에서 a = 2.22로 했을 때 올바른 출력 값은 number이다.