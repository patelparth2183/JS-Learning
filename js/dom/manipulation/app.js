const h1 = document.querySelector('h1')
console.log(h1.innerText)

const div = document.querySelector('div');
console.log(div.innerText);
console.log(div.innerHTML);
console.log(div.textContent);

div.innerText = "Shivani Patel"
div.innerHTML = "<h1>Shivani Patel</h1>"
div.textContent = "Patel Parth"

//getAttribute & setAttribute

let parth = document.querySelector('.parth')
console.log(parth.getAttribute('href'))
parth.setAttribute('href', 'https://www.google.com')


// -----------------------
const imgsrc = ["https://images.unsplash.com/photo-1780131527972-1e87cfc93a26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8N0lQdDhzYWUtbkl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1780039319910-3aaf210c9f05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8N0lQdDhzYWUtbkl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1780132109775-4fa1e8e53e88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8N0lQdDhzYWUtbkl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1779962338483-16de3d1f9c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fDdJUHQ4c2FlLW5JfHxlbnwwfHx8fHw%3D"
]
const images = document.querySelector('#carousel');
function changeImg(img) {
    images.setAttribute('src', img)
}
function rolling(image) {
    let i = 0;
    setInterval(() => {
        changeImg(image[i]);
        i++;
        if (i===image.length) {
            i = 0;
        }
    }, 2000)
}

rolling(imgsrc)