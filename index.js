const fnamegroup = document.querySelector('#firstname');
const lnamegroup = document.querySelector('#lastname');
const emailgroup = document.querySelector('#emailaddress');
const passwordgroup = document.querySelector('#passwordgroup');
const mainbtn = document.querySelector('#greenbtn');
const fnameinput = document.querySelector('#fname');
const lnameinput = document.querySelector('#lname');
const emailinput = document.querySelector('#email');
const passinput = document.querySelector('#pass');

const email_verify = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const num = '1234567890';
let flag = 0;
mainbtn.addEventListener('click', (e) => {
    e.preventDefault();
    check();

})

fnameinput.addEventListener('keyup', check);
lnameinput.addEventListener('keyup', check);
emailinput.addEventListener('keyup', check);
passinput.addEventListener('keyup', check);

function check() {
    if (fnameinput.value.trim() == '') {
        seterror(fnameinput, 'First name cannot be empty');
    } else if (fnameinput.value.trim().length < 5) {
        seterror(fnameinput, 'Must contain 5 chars')
    } else {
        setsuccess(fnameinput);
    }
    if (lnameinput.value.trim() == '') {
        seterror(lnameinput, 'Last name cannot be empty');
    } else if (lnameinput.value.trim().length < 5) {
        seterror(lnameinput, 'Must contain 5 chars')
    } else {
        setsuccess(lnameinput);
    }

    if (emailinput.value.trim() == '') {
        seterror(emailinput, 'Email cannot be empty');
    } else if (!emailinput.value.match(email_verify)) {
        seterror(emailinput, 'Enter a valid email address');
    } else {
        setsuccess(emailinput);
    }

    if (passinput.value.trim() == '') {
        seterror(passinput, 'Password cannot be empty');
    } else if (passinput.value.trim().length < 9) {
        seterror(passinput, 'Password should contain atleast 8 characters');
    } else {
        setsuccess(passinput);
    }

}

function seterror(element, msg) {

    if (element.classList.contains('success')) {
        element.classList.remove('success');
    }
    element.classList.add('error');
    element.parentElement.firstElementChild.nextElementSibling.style.visibility = 'visible';
    element.parentElement.lastElementChild.style.visibility = 'visible';

    element.parentElement.lastElementChild.textContent = msg
    console.log(element.parentElement.lastElementChild)
    console.log(element.parentElement.firstElementChild.nextElementSibling)
}

function setsuccess(element) {
    flag++;
    if (element.classList.contains('error')) {
        element.classList.remove('error');
    }
    element.classList.add('success');
    element.parentElement.firstElementChild.nextElementSibling.style.visibility = 'hidden';
    element.parentElement.lastElementChild.style.visibility = 'hidden';
}