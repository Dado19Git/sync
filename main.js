var name = 'bob',
    email = 'danijeldzakula1991@gmail.com',
    comments = 'yo, fresh';

function sendForm() {
  
  var data = {
    name:name,
    email:email,
    comments:comments,
    _subject:'My Form Submission',
  }

  var request = new XMLHttpRequest();
  request.open('POST', 'https://danijeldzakula.github.io', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(data);
}

let submit = document.querySelector('.js-contact-form-submit');
submit.addEventListener('click', sendForm());
