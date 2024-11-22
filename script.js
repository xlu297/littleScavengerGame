document.addEventListener('DOMContentLoaded', () => {
  const game = document.getElementById('game');
  const steps = {
    step1: document.getElementById('step1'),
    step2: document.getElementById('step2'),
    step3: document.getElementById('step3'),
    success: document.getElementById('success'),
  };

  function showStep(step) {
    for (const key in steps) {
      steps[key].classList.add('hidden');
    }
    step.classList.remove('hidden');
  }

  // Step 1: Choose the button with right color
  const buttonsContainer = document.getElementById('buttons-container');
  buttonsContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const word = event.target.textContent;
      if (word === 'Cat') {
        showStep(steps.step2); // Proceed to Step 2
      } else {
        alert('Wrong! Game Over!');
        showStep(steps.step1); // Reset the game
      }
    }
  });

  // Step 2: Input the correct 'keyword'
  const keywordSubmit = document.getElementById('keyword-submit');
  keywordSubmit.addEventListener('click', () => {
    const input = document
      .getElementById('keyword-input')
      .value.trim()
      .toLowerCase();
    if (input === 'cat') {
      showStep(steps.step3); // Proceed to Step 3
    } else {
      alert('Wrong keyword! Game Over!');
      showStep(steps.step1); // Reset the game
    }
  });

  // Step 3: Choose the correct image
  const imagesContainer = document.getElementById('images-container');
  imagesContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      const isCorrect = event.target.alt === 'Cat';
      if (isCorrect) {
        showStep(steps.success); // Success!
      } else {
        alert('Wrong image! Game Over!');
        showStep(steps.step1); // Reset the game
      }
    }
  });

  // Start the game
  showStep(steps.step1);
});
