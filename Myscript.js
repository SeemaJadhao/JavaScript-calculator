document.addEventListener('DOMContentLoaded', function () {
    let inputBox = document.getElementById('InputBox');
    let buttons = document.querySelectorAll('button');
    let string = '';

    buttons.forEach(element => {
        element.addEventListener('click', (b) => {
            if (b.target.innerText === '=') {
                string = string.replace('%', '*0.01');
                string = String(eval(string));
                inputBox.value = string;
            } else if (b.target.innerText === 'AC') {
                string = '';
                inputBox.value = '0';
            } else if (b.target.innerText === 'DEL') {
                string = string.slice(0, -1);
                inputBox.value = string;
            } else if (b.target.className === 'opr') {
                string += ' ' + b.target.innerText + ' ';
                inputBox.value = string;
            } else if (b.target.innerText === '±') {
                string = string.split(' ');
                string[string.length - 2] = -string[string.length - 2];
                string = string.join(' ');
                inputBox.value = string;
            } else {
                string += b.target.innerText;
                inputBox.value = string;
            }
        });
    });
});
    