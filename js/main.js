(function () {
  'use strict';

  const heroFlexboxContainer = document.querySelector('.hero');
  const heroGridContainer = document.querySelector('.hero-grid');

  const infoContentContainer = document.querySelector('.info__content');

  const heroFeaturesFlexbox = document.querySelector('.hero__features-inner');
  const heroFeaturesGrid = document.querySelector('.hero-grid__features');

  const addBlockButton = document.querySelector('.btn-add-block');
  const removeBlockButton = document.querySelector('.btn-remove-block');
  const randomizeContentButton = document.querySelector('.btn-randomize-content');
  const switchButtons = document.querySelectorAll('.btn-change-mode');
  const infoButton = document.querySelector('.info__icon');

  if (addBlockButton) {
    addBlockButton.addEventListener('click', addBlock);
  }

  if (removeBlockButton) {
    removeBlockButton.addEventListener('click', removeBlock);
  }

  if (randomizeContentButton) {
    randomizeContentButton.addEventListener('click', randomizeContent);
  }

  if (infoButton) {
    infoButton.addEventListener('click', toggleInfo);
  }

  switchButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const mode = this.dataset.mode;

      switchButtons.forEach(function (button) {
        button.classList.remove('actions__button--active');
      });

      button.classList.add('actions__button--active');

      if (mode === 'flexbox') {
        heroGridContainer.hidden = true;
        heroFlexboxContainer.hidden = false;
      } else {
        heroFlexboxContainer.hidden = true;
        heroGridContainer.hidden = false;
      }
    })
  });

  function addBlock() {
    const blockHtmlFlexboxString = `<div class="hero__feature">
                                      <div class="hero__feature-inner">
                                        <div class="hero__feature-icon hero__feature-icon--1">
                                          <svg class="hero__feature-svg" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                                          </svg>
                                        </div>

                                        <h3 class="hero__feature-heading" data-randomize>Ut dui neque, volutpat ac erat quis, lobortis.</h3>

                                        <p class="hero__feature-text" data-randomize>In eget lugila ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum.</p>
                                      </div>
                                    </div>`;

    const blockHtmlGridString = `<div class="hero-grid__feature">
                                    <div class="hero__feature-icon hero__feature-icon--1">
                                      <svg class="hero__feature-svg" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                                      </svg>
                                    </div>

                                    <h3 class="hero__feature-heading" data-randomize>Ut dui neque, volutpat ac erat quis, lobortis.</h3>

                                    <p class="hero__feature-text" data-randomize>In eget lugila ut est interdum finibus. Etiam consectetur, libero tincidunt vulputate fermentum.</p>
                                </div>`;

    const htmlElementFlexbox = document.createRange().createContextualFragment(blockHtmlFlexboxString);
    const htmlElementGrid = document.createRange().createContextualFragment(blockHtmlGridString);

    removeBlockButton.disabled = false;
    randomizeContentButton.disabled = false;

    heroFeaturesFlexbox.append(htmlElementFlexbox);
    heroFeaturesGrid.append(htmlElementGrid);
  }

  function removeBlock() {
    let blocks = document.querySelectorAll('.hero__feature:last-child, .hero-grid__feature:last-child');

    blocks.forEach(function (block) {
      block.remove()
    });

    blocks = document.querySelectorAll('.hero__feature:last-child, .hero-grid__feature:last-child');

    if (!blocks.length) {
      removeBlockButton.disabled = true;
      randomizeContentButton.disabled = true;
    }
  }

  function randomizeContent() {
    document.querySelectorAll('[data-randomize]').forEach(function (text) {
      text.textContent = faker.lorem.sentence();
    });

    document.querySelectorAll('[data-randomize-short]').forEach(function (text) {
      text.textContent = faker.lorem.sentence(1);
    });
  }

  function toggleInfo() {
    infoContentContainer.classList.toggle('info__content--active');
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.info__icon')) {
      infoContentContainer.classList.remove('info__content--active');
    }
  });
})();
