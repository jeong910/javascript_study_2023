//getElement.. 방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');
console.log(mainTag, hTag[0], contentsCls[0], boxId);
console.log(aTag, aTag[0], aTag[1], aTag[2]);
//[ES6]querySelector.. 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1'); //개별일땐 
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('#box');
const aTagQ= document.querySelectorAll('a'); //두개 이상일때 All
console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ);
console.log(aTagQ, aTagQ[0], aTag[1], aTagQ[2]);

//querySelector, querySelectorAll
// 객체가 2개 이상일 때 태그 작성 순서상 한개만 인식하고 싶다면
// == querySelector()
// 객체가 2개 이상일 때 모두 잡아서 구분해서 사용하고 싶다면
// == querySelectorAll()
const firstClsQ = document.querySelector('.first');
console.log(firstClsQ);
const lastClsQ =document.querySelectorAll('.last');
console.log(lastClsQ[0]);