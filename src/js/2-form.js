const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

function inputForm() {
  const emailField = email.value.trim();
  const messageField = message.value.trim();
  const inputFields = {
    emailField,
    messageField,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputFields));
  return inputFields;
}

function loadForm() {
  const returnInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (returnInfo !== null) {
    email.value = returnInfo.emailField;
    message.value = returnInfo.messageField;
    return returnInfo;
  }
  return { email: '', message: '' };
}

function clearFormState() {
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

function handleSubmit(event) {
  event.preventDefault();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  if (emailValue.length === 0 || messageValue.length === 0) {
    alert('Please, input all fields');
  } else {
    const formInfo = inputForm();
    console.log(formInfo);
    clearFormState();
  }
}

form.addEventListener('input', inputForm);
form.addEventListener('submit', handleSubmit);
const initialFormState = loadForm();