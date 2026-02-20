document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("menu_toggle");
    const menu = document.getElementById("menu");

    // Segurança: só executa se existir
    if (!toggle || !menu) return;

    // Abrir / Fechar menu
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Fecha menu ao clicar em um link
    document.querySelectorAll(".menu_link").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });

    // Fecha menu ao clicar fora
    document.addEventListener("click", (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickToggle = toggle.contains(event.target);

        if (!isClickInsideMenu && !isClickToggle) {
            toggle.classList.remove("active");
            menu.classList.remove("active");
        }
    });

});