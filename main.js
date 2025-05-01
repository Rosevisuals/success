document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for animations and transitions
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    function handleScroll() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load

    // Example of a button click event for a transition effect
    const transitionButton = document.querySelector('.transition-button');
    if (transitionButton) {
        transitionButton.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});