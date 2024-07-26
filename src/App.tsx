import React from 'react';
import './App.css';

// 타입스크립트는 자바스크립트에서
// 변수 뒤에 타입을 지정해줄 수 있다라는 설정외에 크게 다른 점은 없다

let number: number = 4
number = 3.141592
number = -50

let message: string = "abc"
message = '스트링치즈'
message = '맛있겠나'


// 배열 설정에서도 어떤것의 배열인지 타입을 지정할 수 있다.
// number 를 미리 지정해두었는데 string 을 넣어주게 되면 에러를 띄운다
let numberArray: number[] = []
numberArray.push(5)
numberArray.push(3.14)
// numberArray.push('으악')

// 미리들어갈 값을 지정해 둘 수도 있다.
let lunch: '치킨' | '햄버거' | '국밥' | '삼각김밥'

lunch = "치킨"
lunch = "햄버거"
//lunch = "스테이끼"

// undefined, null 도 저장 가능한 값으로 처리가 가능하다
let status: 'STATUS_OK' | undefined | null
status = undefined

let obj: any
obj = 'string'
obj = 123
obj = {id: 4, name: '조재영'}

// 함수의  경우, 파라미터의 타입과 함수의 리턴타입을 지정할 수 있다.

/*
public state int add(int a, int b){  함수 내부 }
*/
function add(a: number, b: number): number {
    return a + b
}

// ArrayList<UserDTO> list = new ArrayList<>()
// 제네릭 <UserDTO>

// 필요에 따라서는 내가 객체를 설계하고
// 각각의 어트리뷰트에 어떤 데이터 타입의 값이 들어갈지도 설정이 가능하다.

type student = {
    id: number,
    name: string
}

type A ={
    title : string,
    content: string
}

// 2개의 객체를 합쳐서 하나의 객체로 만들어주는 concat 매소드
// any 로 설정해주면 아무거나 오는데 그러면 타입스크립트를 사용하는 이유가 불분명해지기 때문에
// 각각 객체로 주는 방법을 알려주는 중 의미부여를 해줄 수 있다.
// <임시로 사용할 값을 만들어서 제네릭을 사용할 수 있다.>
function concat<A, student>(a: A, b: student): A & student {
    return {
        ...a,
        ...b
    }
}

console.log(concat<A, student>({title: 'abc', content:'der'}, {id: 4, name:'조재영'}))

type IndexProps = {
    id: number,
    nickname: string
}

// FC : app 의 Function Component 이다
// React.FC 는 비어있는 객체를 기준으로
// 만들었다고 인식을 하기 때문에
// 명확하게 사용하고자 해서
// 제네릭으로 만든 것임.
let App  = ({nickname, id}: IndexProps) => {
    return (
        <div className="App">
            <h1>{id} 번 {nickname} 회원님!, Hello, world!!!</h1>
        </div>
    )
}

//defaultProps : props를 따로 지정해주지 않아도 기본값으로 전달 해주는 props


export default App;
