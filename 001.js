/** 문제1 : 배열의 삭제
 * 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
 * var nums = [100, 200, 300, 400, 500];
 */

var nums = [100, 200, 300, 400, 500];

//영상 풀이1
nums.pop();
nums.pop();
console.log(nums);

/**나의 풀이2
console.log(nums.slice(0,3));

/**나의 풀이3
 * nums.splice(3,5);
 * console.log(nums);
 */

/**나의 풀이4
 * nums.splice(3);
 * console.log(nums);
 */