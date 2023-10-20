var nav = document.querySelector('nav');

    // Function to add a class when the user scrolls down
    function addClassOnScroll() {
      if (window.scrollY > 100) { // Adjust the scroll position threshold as needed
        nav.classList.add('scrolled'); // Add your desired class name
      } else {
        nav.classList.remove('scrolled'); // Remove the class if user scrolls back up
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', addClassOnScroll);