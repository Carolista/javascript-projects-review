//Code Your Solution Below
window.addEventListener('load', function () {
  const form = document.querySelector('form');

  const nameInput = document.querySelector('input[name=testName]');
  const dateInput = document.querySelector('input[name=testDate]');
  const boosterCountInput = document.querySelector('input[name=boosterCount]');
  const windRatingInput = document.querySelector('input[name=windRating]');

  form.addEventListener('submit', function (event) {
    if (nameInput.value.trim() === ""
      || dateInput.value === ""
      || boosterCountInput.value === ""
      || windRatingInput.value === "") {
        event.preventDefault();
      }
  });

});
