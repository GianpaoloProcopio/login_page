document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("btn-registrati");
    const loginBtn = document.getElementById("btn-accedi");

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
});