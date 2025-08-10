document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollBox');
  const items = Array.from(container.querySelectorAll('.scrollableContent'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let cntTitle   = document.getElementById('cntTitle');
  let cntDescrip = document.getElementById('cntDescrip');


  let currentIndex = 0;
  let contentTitle = [
    { title: "PreAssessment", description: "An Interview App by Trevon Noble" },
    { title: "Interview Question 1", description: "Given a string, save the string into a new variable but reversed" },
    { title: "Interview Question 2", description: "Given an int list, return the list as strings" },
    { title: "Interview Question 3", description: "Given an object list with properties USMC or NAVY, return only USMC objects" },
    { title: "Post Interview Gameplan", description: "A plan to further prepare for this role" }
  ]

  //Update buttons every time
  function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === items.length - 1;
  }

  function updateContentAndDescription(){
    const { title, description } = contentTitle[currentIndex];
    cntTitle.textContent = title;
    cntDescrip.textContent = description;
  }

  //Navigate to here
  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, items.length - 1));

    //scrolling
    items[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    updateButtons();
    updateContentAndDescription();
  }

  //Execute
  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));
  updateButtons();
  updateContentAndDescription();
});

