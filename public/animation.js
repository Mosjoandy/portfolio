var scrolling = document.querySelectorAll('a[href^="#"]') //finds all a tags with href with # sign

function smoothScrolling() {
    scrolling.forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
};

smoothScrolling();