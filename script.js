function zablokujObrot() {
    if (window.orientation !== undefined) {
        window.addEventListener("orientationchange", function () {
            if (window.orientation === 90 || window.orientation === -90) {
                screen.orientation.lock("portrait").catch(function (error) {
                    console.error("Błąd blokady orientacji: ", error);
                });
            }
        });
    }
}

// Wywołaj funkcję przy załadowaniu strony
window.addEventListener("load", zablokujObrot);