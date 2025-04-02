document.addEventListener('DOMContentLoaded', () => {
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const color3 = document.getElementById('color3');
    const pageWrapper = document.getElementById('page-wrapper');
    const gridItems = document.querySelectorAll('.grid > div');
    let hoverColor = '#ff0000'; // Initial hover color

    // Initialize color3 value
    if (color3) {
        color3.value = hoverColor;
    }

    // Color1: Page background
    if (color1) {
        color1.addEventListener('input', () => {
            if (pageWrapper) {
                pageWrapper.style.backgroundColor = color1.value;
            }
        });
    }

    // Color2: Grid item background
    if (color2) {
        color2.addEventListener('input', () => {
            const selectedColor = color2.value;
            gridItems.forEach(item => {
                item.style.backgroundColor = selectedColor;
                item.dataset.originalBackgroundColor = selectedColor;
            });
        });
    }

    // Color3: Hover color
    if (color3) {
        color3.addEventListener('input', () => {
            hoverColor = color3.value;
        });
    }

    // Hover handlers
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.dataset.originalBackgroundColor = item.style.backgroundColor;
            item.style.backgroundColor = hoverColor;
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = item.dataset.originalBackgroundColor || '';
        });
    });

    export {};
});