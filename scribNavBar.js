document.addEventListener('DOMContentLoaded', () => {
    const Menu = document.getElementById('Menu');
    const navbarNav = document.querySelector('.navbar-nav');

    Menu.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
        Menu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!navbarNav.contains(event.target) && !Menu.contains(event.target)) {
            navbarNav.classList.remove('active');
            Menu.classList.remove('active');
        }
    });

    document.querySelectorAll('.navbar-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
                navbarNav.classList.remove('active');
                Menu.classList.remove('active');
            }
        });
    });

    const signInBtn = document.getElementById("signInBtn");
    const loginModal = document.getElementById("loginModal");
    const logoutBtn = document.getElementById("logoutBtn");

    signInBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "flex";
    });

    loginModal.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    document.getElementById('loginSubmit').addEventListener('click', function (event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username && password) {
            signInBtn.innerText = username;
            loginModal.style.display = 'none';
            logoutBtn.style.display = 'block';
            this.style.display = 'none';
        }
    });

    logoutBtn.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        signInBtn.innerText = 'SIGN IN';
        logoutBtn.style.display = 'none';
        document.getElementById('loginSubmit').style.display = 'block';
        window.location.href = "index.html";
    });

    const form = document.getElementById('contactForm');
    const sendMessageBtn = document.getElementById('sendMessageBtn');

    form.addEventListener('submit', function (event) {
        event.preventDefault();


        alert('TERIMA KASIH ATAS MASUKANNYA');

        form.reset();
    });
});
