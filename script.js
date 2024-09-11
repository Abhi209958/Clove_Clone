/////////////////////////////////////////////////////////////// for selecting a city for consultation

document.addEventListener('DOMContentLoaded', () => {
    const selectBox = document.querySelector('.select-box');
    const optionsContainer = document.querySelector('.options-container');
    const options = document.querySelectorAll('.option');
    const selected = document.querySelector('.select-box .selected');
  
    selectBox.addEventListener('click', () => {
      optionsContainer.classList.toggle('open');
    });
  
    // Set selected option and close dropdown
    options.forEach(option => {
      option.addEventListener('click', () => {
        selected.textContent = option.textContent;
        optionsContainer.classList.remove('open');
      });
    });
  
    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!selectBox.contains(e.target)) {
        optionsContainer.classList.remove('open');
      }
    });
  });

/////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////// scrollable cards
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
  card.addEventListener('click', function () {
    const name = card.getAttribute('data-name');
    const description = card.getAttribute('data-description');
    const imgSrc = card.querySelector('img').getAttribute('src');

    modalName.textContent = name;
    modalDescription.textContent = description;
    modalImg.setAttribute('src', imgSrc);

    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

//////////////////////////////////////////////////////////




// ///////////////////////////////////////////////////////Switching tabs logic

function showContent(tabId) {
 
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Remove active class from all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Show the selected tab content
  document.getElementById(tabId).classList.add('active');

  // Highlight the selected tab
  event.currentTarget.classList.add('active');
}

///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////appointement modal

function openAppointmentModal() {
  document.getElementById("appointmentModal").style.display = "block";
}

 
window.onclick = function(event) {
  const modal = document.getElementById("appointmentModal");
  if (event.target === modal) {
    closeAppointmentModal();
  }
}

function closeAppointmentModal() {
  document.getElementById("appointmentModal").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////