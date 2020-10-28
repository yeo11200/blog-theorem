var fs = require('fs');

console.log(1);

fs.readFile('test.txt', 'utf8', function(error, data) {
    if(error){
        throw error;
    }

    console.log(2);
});


console.log(3);

/**
 * node는 기본적으로 비동기 통신을 기준으로 삼고 있다.
 * 그래서 이벤트가 발생 후에 return을 해준다.
 * function 밖에 있는 것 부터 처리 후 함수가 실행된다.
 */
/**
 * file Y -> 1, 3, 2
 * file N -> 1, 3
 */