document.querySelector('.inside').addEventListener('click', function () {
    const card = document.querySelector('.card');
    card.classList.toggle('open');
});
    let scale = 1;
    const card = document.querySelector(".card");

    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            scale -= 0.1; // Zoom out
        } else {
            scale += 0.1; // Zoom in
        }

        scale = Math.min(Math.max(0.5, scale), 2); // Limit zoom range (0.5x to 2x)
        card.style.transform = `scale(${scale})`;
    });

