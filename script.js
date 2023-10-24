const introSection = document.getElementById('intro');
const s1Section = document.getElementById('s1');
const a1Section = document.getElementById('a1');
const formSection = document.getElementById('form');

const forms = document.getElementById("forms");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const message = document.getElementById("message");


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

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === '') {
        setError(name, 'Name is required!');
    } else {
        setSuccess(name);
    }

    if (surnameValue === '') {
        setError(surname, 'Surname is required!');
    } else {
        setSuccess(surname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address!');
    } else {
        setSuccess(email);
    }

    if (messageValue === '') {
        setError(message, 'Message is required!');
    } else {
        setSuccess(message);
    }

    if (nameValue && surnameValue && emailValue && messageValue) {
        // Tutaj możesz wywołać dodatkową funkcję do wysłania formularza na serwer, na przykład:
        // sendFormToServer();
        // Po pomyślnym wysłaniu możesz wyświetlić komunikat o sukcesie
        removeSuccessMessage();
        displaySuccessMessage();
    } else {
        removeSuccessMessage();
    }
};
const displaySuccessMessage = () => {
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Form submitted successfully!';
    successMessage.classList.add('success-message');
    document.body.appendChild(successMessage);
    forms.reset();
};

const removeSuccessMessage = () => {
    const existingSuccessMessage = document.querySelector('.success-message');
    if (existingSuccessMessage) {
        existingSuccessMessage.remove();
    }
};
forms.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();

})

introObserver.observe(introSection);
s1Observer.observe(s1Section);
a1Observer.observe(a1Section);
formObserver.observe(formSection);
