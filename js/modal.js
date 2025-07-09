const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginBtn.addEventListener('click', function () {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
});

registerBtn.addEventListener('click', function () {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
});


document.querySelector('.lk').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('loginModal').style.display = 'block';
  document.getElementById('modalOverlay').style.display = 'block';
  document.body.classList.add('no-scroll'); // 🔥 ВАЖНО

  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
});


document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
  document.body.classList.remove('no-scroll'); 
}
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const loginInputs = loginForm.querySelectorAll("input[type='tel'], input[type='password']");
  const loginButton = loginForm.querySelector(".submit-autorization");

  const registerInputs = registerForm.querySelectorAll("input[type='text'], input[type='date'], input[type='tel'], input[type='email']");
  const registerCheckbox = registerForm.querySelector("input[type='checkbox']");
  const registerButton = registerForm.querySelector(".submit-autorization");

  function showError(form, message) {
    let error = form.querySelector(".form-error");
    if (!error) {
      error = document.createElement("div");
      error.className = "form-error";
      form.appendChild(error);
    }
    error.textContent = message;
  }

  function disableButton(button) {
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
    }, 2500);
  }

  function markEmpty(inputs) {
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.classList.add("input-error");
      } else {
        input.classList.remove("input-error");
      }
    });
  }


  function clearErrorOnInput(inputs) {
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
          input.classList.remove("input-error");
        }
      });
    });
  }

  clearErrorOnInput(loginInputs);
  clearErrorOnInput(registerInputs);

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const filled = [...loginInputs].every(input => input.value.trim() !== "");

    if (!filled) {
      showError(loginForm, "Пожалуйста, заполните все поля");
      disableButton(loginButton);
      markEmpty(loginInputs);
    } else {

      loginForm.style.display = "none";
      registerForm.style.display = "none";
      document.getElementById("loginModal").style.display = "none";

      document.getElementById("modalOverlay").style.display = "block";
      document.getElementById("successForm").style.display = "block";
    }
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const filled = [...registerInputs].every(input => input.value.trim() !== "") && registerCheckbox.checked;

    if (!filled) {
      showError(registerForm, "Пожалуйста, заполните все поля и подтвердите согласие");
      disableButton(registerButton);
      markEmpty(registerInputs);
    } else {

      registerForm.style.display = "none";
      loginForm.style.display = "none";
      document.getElementById("loginModal").style.display = "none";


      document.getElementById("modalOverlay").style.display = "block";
      document.getElementById("successForm").style.display = "block";
    }
  });
 document.getElementById("closeSuccess").addEventListener("click", () => {
  document.getElementById("successForm").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
  document.body.classList.remove("no-scroll"); 
});
});


document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('input[name="role"]');

  function updateBackgrounds() {
    radioButtons.forEach(radio => {
      const label = radio.closest('label');
      if (radio.checked) {
        label.style.backgroundColor = '#FCF9F7';
      } else {
        label.style.backgroundColor = '#F3FBFD';
      }
    });
  }

  radioButtons.forEach(radio => {
    radio.addEventListener('change', updateBackgrounds);
  });

  updateBackgrounds();
});