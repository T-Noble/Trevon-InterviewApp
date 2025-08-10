document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollBox');
  const items = Array.from(container.querySelectorAll('.scrollableContent'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  prevBtn.enable = true;
  nextBtn.enable = true;

  let currentIndex = 0;

  //Update buttons every time
  function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === items.length - 1;
  }

  //Navigate to here
  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, items.length - 1));

    //scrolling
    items[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    updateButtons();
  }

  //Execute
  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));
  updateButtons();
});

