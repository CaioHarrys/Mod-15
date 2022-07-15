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

    error_message.style.padding = "10px";

    var text;
    if (emailis == null || emailis == "") {
        text = "Please Enter valid Name";
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