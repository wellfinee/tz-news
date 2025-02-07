import { news } from './data.js';

    const modal = document.getElementById("modal");


    // Function to open modal with article data
    window.openModal = function(id) {
        const span = document.getElementsByClassName("close")[0];
        const modalTitle = document.getElementById("modalTitle");
        const modalContent = document.getElementById("modalContent");
        const modalImage = document.getElementById("modalImage");
        const article = news.find(a => a.id === id);
        if (article) {
            modalTitle.innerHTML = article.title; // Set title
            modalContent.innerHTML = article.text; // Set article text
            modalImage.src = article.img; // Set article image
            modal.style.display = "block"; // Show modal
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
    
        // Close modal when clicking outside of it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    // Close modal when 'x' is clicked
   