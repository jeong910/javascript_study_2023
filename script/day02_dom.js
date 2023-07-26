// dom == document object model
// 자바스크립트 = 객체지향언어
// bom = browser object model 웹브라우저의 기본 객체
let hello = 'hello js';
// window.alert(hello);
// window.prompt('이건 뭘까?');
// let qa = window.prompt('1+1?')
// window.alert('정답은 '+qa+'입니다.');
// let ox = window.confirm('자바스크립트는 객체지향언어다.'); //확인=true(참), 취소=false(거짓)
// window.alert(ox);

//객체.속성
//객체.메서드()
//객체.속성.메서드()

//변수선언키워드 변수명 대입연산자 대입객체문법
//아이디 객체 변수 대입하기
const btn1 = document.getElementById('btn1')
const login = document.getElementById('login')
const payBtn = document.getElementById('pay')
const pay =document.getElementById('pay')
console.log(btn1, login, payBtn, price);
btn1.style.color = 'red';

//클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first'); 
const li_second = document.getElementsByClassName('second');
const li_last = document.getElementsByClassName('last')[0];
console.log(li_first, li_second, li_last);
console.log(li_first[0])
console.log(li_first[1])

//태그 객체 변수 생성하기
const header = document.getElementsByTagName('header');
const h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const aTag = document.getElementsByTagName('a');
console.log(header, h1, nav, aTag);
console.log(aTag[0]);

//innerHTML 속성 활용
//객체.속성 //읽기
//객체.속성 = 대입값 //수정or삭제
console.log(header.innerHTML) //undefined
console.log(header[0].innerHTML); //자식, 자손 읽기
console.log(h1[0].innerHTML);
console.log(li_first[1].innerHTML);
console.log(btn1.innerHTMl);
console.log(login.innerHTML);

h1[0].innerHTML ='로<br>고'; // 상황에 따라 필요하면 태그(종류상관없이)를 쓸 수 있다.
btn1.innerHTML = '전송'; 
aTag[2].innerHTML = ''; //빈문자열 == 문자열을 비운다.(삭제)
pay.innerHTML = '결제';

nav[0].style.backgroundColor = 'aqua';
nav[0].style.border = '2px solid black';
li_first[0].style.border = '1px solid black';
li_first[1].style.backgroundColor = 'gray';
h1[0].style.transform = 'rotate(10deg)';
btn1.style.filter = 'blur(5px) grayscale(100%)'
login.style.background = 'linear-gradient(90deg, red, blue)';
