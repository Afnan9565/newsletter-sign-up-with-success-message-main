
# Frontend Mentor - Newsletter sign-up form with success message solution

  

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

  

## Table of contents

  

- [Overview](#overview)

- [The challenge](#the-challenge)

- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [What I learned](#what-i-learned)

- [Continued development](#continued-development)

- [Useful resources](#useful-resources)

- [Author](#author)



  


  

## Overview

  

### The challenge

  

Users should be able to:

  

- Add their email and submit the form

- See a success message with their email after successfully submitting the form


- View the optimal layout for the interface depending on their device's screen size

- See hover and focus states for all interactive elements on the page

  

### Screenshot

  
![Screenshot](https://ibb.co/nngzTJh)

### Links

  

- Solution URL: [https://www.frontendmentor.io/solutions/newsletter-sign-up-form-UJxGvnpkE6](https://www.frontendmentor.io/solutions/newsletter-sign-up-form-UJxGvnpkE6)

- Live Site URL: [https://afnan9565.github.io/newsletter-sign-up-with-success-message-main/](https://afnan9565.github.io/newsletter-sign-up-with-success-message-main/)

  

## My process

  

### Built with

  

- Semantic HTML5 markup

- CSS custom properties

- Flexbox

- CSS Grid

  

### What I learned

  - I learned how to access a value given in a input tag and pass it to a javascript variable

  

```html
<input type="text" class="input" placeholder="Enter text" onblur="getVal()">
```



```js
function getVal() {
  const val = document.querySelector('.input').value;
  console.log(val);
}
```

  


  

### Continued development

  

In future I will add a custom form validation to this project.
  

  

### Useful resources

  

- [Tabnine](https://www.tabnine.com/academy/javascript/get-value-of-input/) - This helped me to get realtime values of the input field and storing them as a JavaScript variable.



  

## Author

  

- Website - [Afnan Ahmad](https://afnan9565.github.io/portfolio/)

- Frontend Mentor - [@Afnan9565](https://www.frontendmentor.io/profile/Afnan9565)

