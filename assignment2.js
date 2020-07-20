const div = document.querySelector('div')
const divs = document.querySelectorAll('div')
const body = document.querySelector('body')

divs.forEach(div => {
    div.addEventListener('click', function (event) {
        beforeClick();
        event.target.style.backgroundColor = '#63cdda';

        if (event.target.parentNode === body ) {
        event.target.parentNode.style.backgroundColor = 'white';   
        } else {    
        event.target.parentNode.style.backgroundColor = '#f78fb3';
        }
    })
})
function beforeClick(event) {
    divs.forEach(div => {
        div.style.backgroundColor = 'white';
    })
}
