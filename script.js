const introSection = document.getElementById('intro');
const s1Section = document.getElementById('s1');
const a1Section = document.getElementById('a1');
const formSection = document.getElementById('form');

const introObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            introSection.classList.add('show');
        } else {
            introSection.classList.remove('show');
        }
    });
}, {threshold: 0.3});

const s1Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            s1Section.classList.add('show');
        } else {
            s1Section.classList.remove('show');
        }
    });
}, {threshold: 0.3});

const a1Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            a1Section.classList.add('show');
        } else {
            a1Section.classList.remove('show');
        }
    });
}, {threshold: 0.3});

const formObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            formSection.classList.add('show');
        } else {
            formSection.classList.remove('show');
        }
    });
}, {threshold: 0.3});

introObserver.observe(introSection);
s1Observer.observe(s1Section);
a1Observer.observe(a1Section);
formObserver.observe(formSection);
