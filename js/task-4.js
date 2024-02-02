const forms = querySelectorAll(".login-form");

loginForm = forms.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formValues = Object.fromEntries(formData.entries());

  formData.forEach((value, key) => {
    formValues[key] = value.trim();
  });
  if (formValues.username || formValues.password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formValues);
});
