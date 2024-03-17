function init() {
  const abortButton = document.getElementById('abortMission');
  const takeOffButton = document.getElementById('liftoffButton');
  const status = document.getElementById('statusReport');

  // Put your code for the exercises here.
  takeOffButton.addEventListener('click', function () {
    status.innerHTML = 'Houston, we have liftoff!';
  });

  abortButton.addEventListener('mouseover', function () {
    abortButton.style.backgroundColor = 'red';
  });

  abortButton.addEventListener('mouseout', function () {
    abortButton.style.backgroundColor = '';
  });

  abortButton.addEventListener("click", function () {
    let shouldAbort = window.confirm("Are you sure you want to abort the mission?");
    if (shouldAbort) {
      status.innerHTML = "Mission aborted! Space shuttle returning home.";
    }
  });
}

window.addEventListener('load', init);
