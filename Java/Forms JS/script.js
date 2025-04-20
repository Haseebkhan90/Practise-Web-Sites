function formValidate(e){
    var inputValue = e.target.value;
    var nameSpan = document.getElementById('nameError');
    nameSpan.style.color = 'red';
    
    if(inputValue.length < 3){
      nameSpan.innerText = 'Invalid name';
      return;
    }

    nameSpan.innerText = '';
    console.log('Valid name input');
  }

  function passwordVisibility(){
    var passInput = document.getElementById('pass');
    passInput.type = passInput.type === 'text' ? 'password' : 'text';
  }

  function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var cnic = document.getElementById('cnic').value;
    var pass = document.getElementById('pass').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var cnicError = document.getElementById('cnicError');
    var passError = document.getElementById('passError');

    var isValid = true;

    if (name.length < 3) {
      nameError.innerText = 'Name must be at least 3 characters';
      isValid = false;
    } else {
      nameError.innerText = '';
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      emailError.innerText = 'Enter a valid email';
      isValid = false;
    } else {
      emailError.innerText = '';
    }

    if (phone.length < 10) {
      phoneError.innerText = 'Enter a valid phone number';
      isValid = false;
    } else {
      phoneError.innerText = '';
    }

    if (cnic.length !== 13) {
      cnicError.innerText = 'CNIC must be 13 digits';
      isValid = false;
    } else {
      cnicError.innerText = '';
    }

    if (pass.length < 6) {
      passError.innerText = 'Password must be at least 6 characters';
      isValid = false;
    } else {
      passError.innerText = '';
    }

    if (isValid) {
      prompt('Thank you for your time');
    }

    return false;
  }