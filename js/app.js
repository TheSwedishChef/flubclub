document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown - visit https://www.unixtimestamp.com and enter the unix code
  var flipdown = new FlipDown(1723078800)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
      body.querySelector('#flipdown').classList.toggle('hidden');
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000);

  // Show version number
  // var ver = document.getElementById('ver');
  // ver.innerHTML = flipdown.version;
});
