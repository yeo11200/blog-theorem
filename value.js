// 1. 1, 3, 2

// 2. 1, 3, 에러

// 3. 각각의 함수를 여러개의 promise로 만들어서 then을 연결해서 소스를 조금 더 간결하게 코드를 개선할 것이다.

// 4. 얇은 복사를 하기 때문에, 해당 메모리의 주소가 복사되었다.

// 5. 제가 생각하기엔 true라고 생각합니다. 만약 이게 false가 될려면 비교군이 다른 타입으로 해야할 것 같습니다.

// 6. 얇은 복사를 하게되면, 클론의 값이 변화해도 suzy의 값 또한 같이 변화하기에 true가 된다.

// 7. const clonedeep = require('lodash.clonedeep'); const suzy1 = {name : '수지', age: 26, fans: ['a', 'b', 'c', 'd']};  const suzyClone = clonedeep(suzy1);  const dr1 = suzy1 === suzyClone;  console.log(dr1); 해당 라이브러리를 이용해서 깊은 복사를 사용했다.

// 8. 우선 style을 먼저 랜더링시키고 스크립트를 맨밑에 적어서 조금의 랜더링을 줄 일 수 있다. 또한 이미지를 lazyLoad를 시켜서 load후 이미지를 불러온다.

// 9. 1. Arrow Function은 기존 함수선언식의 함수호이스팅의 영향을 받지않아서 위치에 따라 에러가 발생할 수 있다.
// 2. 기존 Function은 함수를 호출할 때 어그먼트로 사용할 수 있지만, Array function은 전개연산자나 어그먼트를 선언해줘야 사용이 가능하다.

// 10. mochajs 를 통해 단위테스트를 할 것입니다.
// mochajs는 다양한 브라우저를 지원하고, 또한 작성마저 간단하기 때문에 단위테스트하는 데는 제격이라고 생각합니다.

// 11. jquery는 주로 DOM을 조작하는 데 사용을 한다. 하지만 다른 프레임워크는 온전히 웹사이트를 빌드하는데 사용할 수 있다.

// 12. 제가 리액트에 관심이 생기게된 계기는, 개발자라면 API를 만들줄 알아야한다 라는 분위기 속에 생긴 라이브러리입니다. 하지만 프론트에서도 계산식이 도입되고, 더 많은 일을 프론트에서 할 수 있게 되었다보니 더욱 관심이 가게 되었고, 함수형과 클래스형으로 나뉘어서 사용할 수 있다는 것 또한 상당한 매력으로 다가오게되었습니다.
const clonedeep = require('lodash.clonedeep');
const suze = {name : '수지', age: 26, fans: ['a', 'b', 'c', 'd']};

const suzeClone = suze;


const r1 = suze === suzeClone;

console.log(r1);

const r2 = suze.age === 26;

console.log(r2);

suzeClone.fans.push('e');

const r4 = suzeClone.fans.length === suze.fans.length;

console.log(suzeClone.fans);
console.log(suze.fans);
console.log(r4);

const suzy1 = {name : '수지', age: 26, fans: ['a', 'b', 'c', 'd']};

const suzyClone = clonedeep(suzy1);

const dr1 = suzy1 === suzyClone;

console.log(dr1)
