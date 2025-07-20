let string = '';
let buttons = document.querySelectorAll('.button')
// document.querySelector('input').value='h'
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        if(e.target.innerHTML=='C'){
            string='';
            document.querySelector('.display').innerHTML = 0;
            return;

        }
        else if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.display').innerHTML = string;
            return;

        }

        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('.display').innerHTML = string
            console.log(string);
            

        }
    })

})
