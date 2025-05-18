const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    button.classList.add('active');

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block'; // Show the card
      } else {
        card.style.display = 'none'; // Hide the card
      }
    });
  });
});

const projectRepoUrls = {
  beautelligent: "https://github.com/vidhirawat10/Beautelligent",
  drapevibe: "YOUR_DRAPEVIBE_REPO_URL",        
  nyaysearch: "https://github.com/vidhirawat10/Nyay-Search",
  netflix: "https://github.com/vidhirawat10/Clone/tree/main/netflix%20clone",
  bookstore: "https://github.com/vidhirawat10/Online-Book-Store",
  pizza: "",
  recipe: "",
  realeyes: "https://github.com/vidhirawat10/RealEyes",
  legal: "",
  facial: "",
  game: ""
};

function viewCode(projectName) {
  const repoUrl = projectRepoUrls[projectName];
  if (repoUrl) {
    window.open(repoUrl, '_blank'); // Open in a new tab
  } else {
    alert("Repository URL not found for " + projectName);
  }
}

function viewLiveApp(projectName) {
  // Your existing logic for View Live App
  alert("View Live App clicked for: " + projectName);
}
const sliderContainer = document.querySelector('.slider-container');

function scrollLeft() {
  sliderContainer.scrollLeft -= sliderContainer.offsetWidth; // Scroll one slide width
}

function scrollRight() {
  sliderContainer.scrollLeft += sliderContainer.offsetWidth;  // Scroll one slide width
}

// ... (previous JavaScript for dynamic box creation - REMOVE if you're using the static HTML above)

const viewButtons = document.querySelectorAll('.certification-view-button');
const modal = document.getElementById('certificate-modal');
const modalImage = document.getElementById('certificate-image');
const closeButton = document.querySelector('.close-button');

viewButtons.forEach(button => {
  button.addEventListener('click', () => {
    const imagePath = 'assets/' + button.dataset.image; // Construct path
    modalImage.src = imagePath;
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside the image
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
