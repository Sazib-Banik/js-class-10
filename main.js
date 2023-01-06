//querySelectore for selecting any kind of html element
//tag select
const tag1 = document.querySelector("h1");
console.log(tag1);

//class select
const class1 = document.querySelector(".class1");
console.log(class1);

//id select
const id1 = document.querySelector('#id1');
console.log(id1);

//querySelector diye sudu matro first class or tag tai select kora jay... jodi sob gula class or tag select korte hoy tahole querySelectorAll use korte hobe...

//querySelectorAll for selecting any kind of html elements
//tag select
const selectAllTag = document.querySelectorAll("h2");
console.log(selectAllTag);
console.log(selectAllTag[0].innerText); 
console.log(selectAllTag[1].innerText); 

const selectAllClass = document.querySelectorAll(".class2");
console.log(selectAllClass);
console.log(selectAllClass[0].innerText);
console.log(selectAllClass[1].innerText);

//chileNodes
const selectChildElements = document.getElementById("id1");
console.log(selectChildElements);
console.log(selectChildElements.childNodes);

// akta div or parent element er modde child element gula jante hole children use korte hobe

const parentElement = document.getElementById("list_id");
console.log(parentElement);
console.log(parentElement.children);
console.log(parentElement.children[0]);
console.log(parentElement.children[0].innerText);

// add new child element in parent element
// akta new child element k jodi amara parent a add korte chi tahole age chile element ta creat korte hobe. erpor se child element k appendChild kore parent element a pathate hobe..

const addList = document.createElement("li");
//console.log(addList);
addList.innerText = "List 5";
//console.log(addList.innerText);
parentElement.appendChild(addList);

const addList1 = document.createElement("li");
addList1.innerText = "List 6";
parentElement.appendChild(addList1);

//removeChild
const delList = parentElement.children[0];
parentElement.removeChild(delList);

const delList1 = parentElement.children[2];
parentElement.removeChild(delList1);

//replace
const replaceList = parentElement.children[0];
const replaceValue = document.createElement("li");
replaceValue.innerText = "Replace List";
parentElement.replaceChild(replaceValue, replaceList);


// title access by js
console.log(document.title);
document.title = "Title Change By Js"

// body access by js
console.log(document.body);

document.body.innerHTML = "<h1>This is only JavaScript Heading...</h1>"

