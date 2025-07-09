 document.addEventListener("DOMContentLoaded", () => {
    let totalSeconds = Math.floor(2 * 60); 

    const paymentModal = document.getElementById("paymentModal");
    const cancelModal = document.getElementById("cancelPaymentModal");
    const modalOverlay = document.getElementById("modalOverlay");

    const pageMin = document.getElementById("pageMinTimer");
    const pageSec = document.getElementById("pageSecTimer");
    const modalMin = document.getElementById("modalMinTimer");
    const modalSec = document.getElementById("modalSecTimer");

    function format(num) {
      return num < 10 ? "0" + num : num;
    }

    function updateTimer() {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      if (pageMin && pageSec) {
        pageMin.textContent = format(minutes);
        pageSec.textContent = format(seconds);
      }

      if (modalMin && modalSec) {
        modalMin.textContent = format(minutes);
        modalSec.textContent = format(seconds);
      }


      if (totalSeconds === 120) {
        if (paymentModal) paymentModal.style.display = "block";
        
        if (modalOverlay) modalOverlay.style.display = "block";
         document.body.classList.add('no-scroll');
      }

 
      if (totalSeconds === 0) {
        clearInterval(timerInterval);
        if (paymentModal) paymentModal.style.display = "none";
        
        if (cancelModal) cancelModal.style.display = "block";
      }

      totalSeconds--;
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);


    document.querySelectorAll("#closeModal").forEach(btn => {
      btn.addEventListener("click", () => {
        if (paymentModal) paymentModal.style.display = "none";
        if (cancelModal) cancelModal.style.display = "none";
        if (modalOverlay) modalOverlay.style.display = "none";
        document.body.classList.remove('no-scroll');
        clearInterval(timerInterval);
      });
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const detailsBtn = document.querySelector(".cart__details");
    const cartServices = document.querySelector(".cart__content");
    const registerForm = document.getElementById("registerFormCart");

    if (detailsBtn && cartServices && registerForm) {
        detailsBtn.addEventListener("click", () => {
        
            cartServices.classList.remove("show");

    
            setTimeout(() => {
                cartServices.style.display = "none";

     
                registerForm.style.display = "block";

        
                setTimeout(() => {
                    registerForm.classList.add("show");
                }, 10);
            }, 500);
        });
    }
});
const registerForm = document.getElementById("registerFormCart");
const registerInputs = registerForm.querySelectorAll("input[type='text'], input[type='tel'], input[type='email'], input[type='date']");
const registerCheckbox = document.getElementById("registerPolicy");
const errorContainer = registerForm.querySelector(".form-error");
const nextButton = document.getElementById("registerNextButton");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let hasError = false;

    registerInputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("input-error");
            hasError = true;
        } else {
            input.classList.remove("input-error");
        }
    });

    if (!registerCheckbox.checked) {
        hasError = true;
    }

    if (hasError) {
        errorContainer.textContent = "Пожалуйста, заполните все поля и подтвердите согласие.";
    } else {
        errorContainer.textContent = "";

      
        registerForm.style.display = "none";
        document.querySelector(".cart__content").style.display = "grid";
        document.querySelector(".cart__services").style.display = "none";
        document.getElementById("successForm").style.display = "block";
    }
});

