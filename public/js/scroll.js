const ids = ['discover', 'about', 'beta', 'contribute', 'discord'];

function scrollToCenter(element) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    const offset = (windowHeight - element.clientHeight) / 2;
    const scrollToY = elementTop + window.scrollY - offset;

    window.scrollTo({ top: scrollToY, behavior: 'smooth' });
}

function scrollHandler() {
    const sections = document.querySelectorAll('main, section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                if (index !== -1) {
                    const targetId = ids[index];
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        scrollToCenter(targetElement);
                    }
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}

scrollHandler();
