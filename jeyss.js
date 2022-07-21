let toggles = document.getElementsByClassName
    ('toggle');
let contentDiv = document.getElementsByClassName
    ('conteudo');
let icons = document.getElementsByClassName
    ('icon');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height)
            != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv
            [i].scrollHeight + "px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }
        for (let j = o; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[i].style.height = "0px";
                toggles[i].style.color = "#111130";
                icons[i].classList.remove('fa-minus');
                icons[i].classList.add('fa-plus');
            }
        }
    })
}

function validatIon() {

    var mail = document.getElementById("text").value;

    var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    var text = error_message;

    if (mail.match(regx)) {
        alert("Form Submitted Successfully!");
        document.getElementById('error_message').classList.add('hide');
        var mail = document.getElementById("text").value = "";
        return true;
    }
    text = "Invalid Email";
    error_message.innerHTML = text;
    document.getElementById('error_message').classList.remove('hide') = text;
    return false;

}

function validateForm() {
    var nombre = document.getElementById("inputNames").value;
    var ultimoNombre = document.getElementById("inputLastNames").value;
    var phonis = document.getElementById("inputPhones").value;
    var text = error_messages;
    var mail = document.getElementById("inputEmailis").value;
    var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var adres = document.getElementById("inputAddress").value;
    var citis = document.getElementById("inputCity").value;
    var statis = document.getElementById("inputState").value;
    var zipis = document.getElementById("inputZip").value;

    if (nombre == null || nombre == "") {
        text = "Please Enter Valids Namis";
        error_messages.innerHTML = text;
        document.getElementById('error_messages').classList.remove("hide") = text;
        return false;
    }
    if (ultimoNombre == null || ultimoNombre == "") {
        text = "Please Enter Valids Lastis Namis";
        error_messages.innerHTML = text;
        document.getElementById('error_messages').classList.remove('hide') = text;
        return false;
    }
    if (phonis.length < 9 || phonis.length > 9 || isNaN(phonis)) {
        text = "Please Enter valid ID Number";
        error_messages.innerHTML = text;
        document.getElementById('error_messages').classList.remove('hide') = text;
        return false;
    }
    if (mail == "" || mail == null) {
        text = "Please Enter Valids Email";
        error_messages.innerHTML = text;
        document.getElementById('error_messages').classList.remove('hide') = text;
        return false;
    } else if (mail.match(regx)) {
        alert("Form Submitted Successfully!");
        document.getElementById('error_messages').classList.add('hide');
        var mail = document.getElementById("inputEmailis").value = "";
        var nombre = document.getElementById("inputNames").value = "";
        var ultimoNombre = document.getElementById("inputLastNames").value = "";
        var phonis = document.getElementById("inputPhones").value = "";
        var adres = document.getElementById("inputAddress").value = "";
        var citis = document.getElementById("inputCity").value = "";
        var statis = document.getElementById("inputState").value = "";
        var zipis = document.getElementById("inputZip").value = "";
        return true;
    }
    alert("Form Submitted Successfully!");
    document.getElementById('error_messages').classList.add('hide');
    var nombre = document.getElementById("inputNames").value = "";
    var ultimoNombre = document.getElementById("inputLastNames").value = "";
    var phonis = document.getElementById("inputPhones").value = "";
    var adres = document.getElementById("inputAddress").value = "";
    var citis = document.getElementById("inputCity").value = "";
    var statis = document.getElementById("inputState").value = "";
    var zipis = document.getElementById("inputZip").value = "";
    return true;
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
