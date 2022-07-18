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

function subScribe() {
    var emailis = document.getElementById("emailis").value;
    var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    error_message.style.padding = "10px";

    var text;
    if (emailis ==/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/||emailis==""||emailis==null) {
        text = "Please Enter a Valid Email";
        error_message.innerHTML = text;
        document.getElementById('error_message').classList.remove('hide') = text;
        return false;
    }

    alert("Form Submitted Successfully!");
    document.getElementById('error_message').classList.add('hide');
    var emailis = document.getElementById("emailis").value = "";
    return true;
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


function ValidateEmail(inputText) {
    if (inputText.value.match(mailformat)) { document.form1.text1.focus(); alert("Valid email address!"); return true; }
    else { alert("You have entered an invalid email address!"); document.form1.text1.focus(); return false; }
}