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

let lastItem = document.querySelector('.item:nth-child(2)');

lastItem.style.color = "yellow";