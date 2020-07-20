const box = document.querySelector('#text')

box.addEventListener('keyup', function count(event) {
    let inputValue = ''

    inputValue = event.target.value

    count1.textContent = '공백 포함 글자 수 : '+ inputValue.length
    count2.textContent = '공백 제외 글자 수 : '+ inputValue.replace(/ /gi, '').length
})