const allH1 = document.getElementsByTagName('h1');
console.log(allH1);

allH1[0].style.color = "red"
allH1[1].style.border = "1px solid black"


const ids = document.getElementById('doc');
console.log(ids)
ids.style.color = "green"

const classes = document.getElementsByClassName('dom');
console.log(classes);
for(let item of classes) {
    item.style.backgroundColor = "purple"
}

const classs = document.querySelectorAll('.dom');
console.log(classs)

const idd = document.querySelectorAll('#doc');
console.log(idd)

const mainElement = document.querySelector('#new');
const newElement = document.createElement('p');
newElement.innerHTML = "This is a new Element";
mainElement.appendChild(newElement);

const new_p = document.querySelector('#new .new_p')
mainElement.insertBefore(newElement, new_p)

new_p.remove();