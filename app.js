let scale = 1;

    function zoomIn() {
        scale += 0.1;  // Increase the scale by 10%
        document.body.style.transform = `scale(${scale})`;
    }

    function zoomOut() {
        if (scale > 0.2) {  // Prevent zooming out too much
            scale -= 0.1;  // Decrease the scale by 10%
            document.body.style.transform = `scale(${scale})`;
        }
    }