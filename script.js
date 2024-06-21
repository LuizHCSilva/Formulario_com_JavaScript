function validateForm(){
    var fname = document.getElementById('fname').Value.trim();
    var email = document.getElementById('email').Value.trim();
    var message = document.getElementById('message').Value.trim();

    if(fname === ''){
        alert('Preencha o campo Nome!');
        return false;
    }

    if(email === ''){
        alert('Preencha o campo E-mail!');
        return false;
    }

    if(message === ''){
        alert('Preencha o campo Mensagem!');
        return false;
    }

    return true;

}