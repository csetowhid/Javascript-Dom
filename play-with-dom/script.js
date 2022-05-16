// console.log(document);
// console.dir(document);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title = 'Play With Him');
// console.log(document.all);

// for(element of document.all){
//     console.log(element);
// }


// console.log(document.all[5]);

// console.dir(document);

// let headerElement = document.getElementById('header');
// headerElement.style.color = 'red';

// headerElement.style.fontSize = '50px';


// let items = document.getElementsByClassName('item');

// let itemUl = document.getElementById('items');

// let items = itemUl.getElementsByClassName('item');



// for(let i=0;i<items.length;i++){
//     items[i].style.color = 'blue';
// }


// let tagName = document.getElementsByTagName('li');
// console.log(tagName);

// let newTask = document.querySelector('#new-task');

// console.log(newTask);


// let lastItem = document.querySelectorAll('.item:last-child');

// let lastItem = document.querySelector('.item:nth-child(2)');

// lastItem.style.color = "yellow";



// const parent = document.querySelector('#items');

// const children = parent.children;
// console.log(children[1]);

//Query Selector  up to down

// const grandParent = document.querySelector('.todo-list');
// // const parent = grandParent.children;
// // const children = parent[1].children;

// const children = grandParent.querySelectorAll('.item');


// console.log(children);


// const children = document.querySelector('.item');

// const parent = children.parentElement;

// console.log(parent);


//Closest down to up

// const children = document.querySelector('.item');

// const grandParent = children.closest('.todo-list');


// console.log(grandParent);

//Next Sibling

// const childrenOne = document.querySelector('.item');

// const childrenTwo = childrenOne.nextElementSibling;

// childrenTwo.style.color = "yellow";


//Previous Sibling

const childrenTwo = document.querySelector('.item');

const childrenOne = childrenTwo.previousElementSibling;

childrenTwo.style.color = "yellow";