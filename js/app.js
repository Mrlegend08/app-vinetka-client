const elItems = document.querySelectorAll('.photos-section__item');
elItems.forEach((item) => {
    item.addEventListener('click', () => {
        localStorage.setItem("sinf", item.getAttribute("toggle"))
        window.location.href = "../view.html";
    });
    }
);