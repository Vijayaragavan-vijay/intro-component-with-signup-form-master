# intro-component-with-signup-form-master

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*
  
### Screenshot

### Desktop 

![des](https://user-images.githubusercontent.com/95960286/205491614-11efabba-3cdb-401c-a551-363e0a318e05.png)

### Mobile

![mobile](https://user-images.githubusercontent.com/95960286/205491691-b20181cd-aa98-49cb-9d13-a311fc333715.png)

### Links

- Live Site URL: [solution](https://astonishing-biscuit-4fbc3f.netlify.app/)
- Solution URL: [live site](https://www.frontendmentor.io/solutions/introcomponentwithsignupformmaster-FFCmvEwEgM)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
This is really a good challenge for practising JS Form validations.

``` js
if (fnameinput.value.trim() == '') {
        seterror(fnameinput, 'First name cannot be empty');
    } else if (fnameinput.value.trim().length < 5) {
        seterror(fnameinput, 'Must contain 5 chars')
    } else {
        setsuccess(fnameinput);
    }
```

``` js
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

```

``` js
function setsuccess(element) {
    flag++;
    if (element.classList.contains('error')) {
        element.classList.remove('error');
    }
    element.classList.add('success');
    element.parentElement.firstElementChild.nextElementSibling.style.visibility = 'hidden';
    element.parentElement.lastElementChild.style.visibility = 'hidden';
}

```

## Author
- Frontend Mentor - [@Vijayaragavan](https://www.frontendmentor.io/profile/vijayaragavankts)
