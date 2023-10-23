// Utwórz obserwator
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element jest widoczny na ekranie, uruchom animację
            entry.target.classList.add('animate');
            // Przestań obserwować ten element po pierwszym przejściu przez granicę widoku
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // threshold określa, ile procentów elementu musi być widoczne, aby zadziałał callback

// Pobierz wszystkie elementy, które mają być animowane
const animatedElements = document.querySelectorAll('.element');

// Dodaj każdy element do obserwatora
animatedElements.forEach(element => {
    observer.observe(element);
});
