document.getElementById('yes').onclick = function() {
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;

    if (pass1 == pass2) {
        document.getElementById('out').innerHTML = 'Подтверждено';
    } else if (pass1 == '' || pass2 == '' || pass1 == '' && pass2 == '') {
        document.getElementById('out').innerHTML = 'Вы не ввели пароль! Введите пароль';
    } else {
        document.getElementById('out').innerHTML = 'Неверно! Попробуйте ещё раз';
    };
};