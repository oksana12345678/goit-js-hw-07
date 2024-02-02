const forms = document.querySelector(".login-form");

forms.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = forms.elements.email;
  const passwordInput = forms.elements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formData);
  forms.reset();
});
