document.addEventListener('DOMContentLoaded', () => {
    // Sticky navigation bar functionality
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // "Back to top" button functionality
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add animations to buttons and links
    const animatedLinks = document.querySelectorAll('.animated-link');
    animatedLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hovered');
        });

        link.addEventListener('mouseout', () => {
            link.classList.remove('hovered');
        });
    });

    const animatedButtons = document.querySelectorAll('.animated-button');
    animatedButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('hovered');
        });

        button.addEventListener('mouseout', () => {
            button.classList.remove('hovered');
        });
    });
});
