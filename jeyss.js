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

    error_message.style.padding = "10px";

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

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
