var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}


let carIndex = 1
const carousel = () => {
    carIndex ++
    const carousel = document.querySelector('.carousel')
    
    if (carIndex > carousel.childElementCount) {
        carIndex = 1
    }

    let carChildren = [].slice.call(carousel.children)
    carChildren.forEach(img => {
        img.style.display = 'none'
    });

    carChildren[carIndex - 1].style.display = 'flex'
}

carousel()
let carInterval = setInterval(() => {
    carousel()
}, 2900);

function navbutton(x) {
    if (document.documentElement.clientWidth >= 770) return
    x.classList.toggle("change");

    let navbar = document.querySelector(".flex-container")
    navbar.classList.toggle("active");
}

function navdropdown() {
    if (document.documentElement.clientWidth >= 770) return
    let dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("active");
    console.log(dropdown);
}