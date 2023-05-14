// // // // // //DOM Manipulation
// // // // // //Styling Elemnets
// // // // // //const title=document.querySelector('main-heading');
// // // // // //title.style.color='red';
// // // // // // const listItems= document.querySelectorAll('list-items');

// // // // // // for(i=0; i<listItems.length; i++){
// // // // // //     listItems.style.fontSize='5rem';

// // // // // // }
// // // // // //console.log(listItems);
// // // // // //Creating Elements

// // // // // const ul=document.querySelector('ul');
// // // // // const li=document.querySelector('li');
// // // // // //Adding Elements
// // // // // ul.append(li);
// // // // // //Modify Text

// // // // // // const firstListItem=document.querySelector('list-item');
// // // // // // console.log(firstListItem.innerText);
// // // // // // console.log(firstListItem.textContent);
// // // // // // console.log(firstListItem.innerHTML);
// // // // // li.innerText='X-men';

// // // // // //Modifying Attributes
// // // // // // li.setAttribute('id','main-heading');
// // // // // // li.removeAttribute('id');

// // // // // // const title=document.querySelector('main-heading');

// // // // // // console.log(title.getAttribute('id'));

// // // // // //Modifying Classes
// // // // // li.classList.add('list-item');
// // // // // li.classList.remove('list-item');
// // // // // console.log(li.classList.contains('list-item'));

// // // // // //Remove Elemnets
// // // // // li.remove();

// // // // //DOM Manipulation

// // // // //Traverse the DOM

// // // // //Parent Node Traversal
// // // // // let ul=document.querySelector('ul');
// // // // // // console.log(ul.parentNode);
// // // // // // console.log(ul.parentElement.parentElement);
// // // // // const html=document.documentElement;
// // // // // console.log(html.parentNode);
// // // // // console.log(html.parentElement);

// // // // //Child NOde Traversal
// // // // let ul=document.querySelector('ul');
// // // // // console.log(ul.childNodes);
// // // // // console.log(ul.firstChild);
// // // // // console.log(ul.lastChild);

// // // // // ul.childNodes[1].style.backgroundColor='blue';

// // // // // console.log(ul.childElementCount);
// // // // console.log(ul.children);
// // // // console.log(ul.firstElementChild);
// // // // console.log(ul.lastElementChild);

// // // // //Sibling Node Traversal

// // // let ul=document.querySelector('ul');
// // // const div=document.querySelector('div');

// // // console.log(div.childNodes);

// // // console.log(ul.previousSibling);
// // // console.log(ul.nextSibling);
// // // console.log(ul.nextElementSibling);


// // //DOM

// // //Event Listeners.....


// // //element.addEventListener("click",function);

// // const buttonTwo=document.querySelector('btn-2');
// // function alertBtn(){
// //     alert('I also love JavaScript');
// // };
// // buttonTwo.addEventListener('click',alertBtn);

// // //Mouse Over
// // const newBackgroundColor=document.querySelector('box-3');

// // function changeBgColor(){
// //     newBackgroundColor.style.newBackgroundColor='blue';
// // };
// // newBackgroundColor.addEventListener('mouseover',changeBgColor);


// //Reveal Event......

// const revealbtn=document.querySelector('.reveal-btn');

// const hiddenContent=document.querySelector('.hidden-content');

// function revealContent(){
// }{if(hiddenContent.classList.contains('reveal-btn')){
//     hiddenContent.classList.remove('reveal-btn')

//     }else{
//         hiddenContent.classList.add('reveal-btn')
//     }
// }
// revealbtn.addEventListener('click',revealContent);


//Event Probagation........
window.addEventListener("click",function(){
    console.log('window');
},true);

document.addEventListener("click",function(){
    console.log('document');
},true);

document.querySelector(".div2").addEventListener
{"click",function(){
    console.log('DIV 2');
},true};
    
document.querySelector(".div1").addEventListener
{"click",function(){
    console.log('DIV 1');
},true};

document.querySelector(".button").addEventListener
{"click",function(e){
    e.preventDefault()
    console.log(e.target.innerText='clicked');
},false};