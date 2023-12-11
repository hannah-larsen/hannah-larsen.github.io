const categoryLinks = document.querySelectorAll('.category-link');

categoryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedCategory = link.getAttribute('data-category');

        // Hide all portfolio items
        portfolioItems.forEach((item) => {
            item.style.opacity = '0'; // Hide the item
        });

        // Define the fade-in function
        const fadeIn = (element, duration) => {
            let opacity = 0;
            const interval = 10; // Milliseconds
            const increment = interval / duration;
            element.style.opacity = '0';
            element.style.display = 'block';

            const animate = () => {
                opacity += increment;
                if (opacity >= 1) {
                    element.style.opacity = '1';
                } else {
                    element.style.opacity = opacity;
                    setTimeout(animate, interval);
                }
            };

            animate();
        };

        // Show only the items of the selected category with a fade-in effect
        portfolioItems.forEach((item) => {
            if (selectedCategory === 'all' || item.classList.contains(selectedCategory)) {
                fadeIn(item, 500); // Show the item with a fade-in effect (500 milliseconds duration)
            } else {
                item.style.display = 'none'; // Hide the item by setting its display to 'none'
            }
        });
    });
});