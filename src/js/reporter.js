(() => {
  const uaEl = document.getElementById('ua');
  const ipEl = document.getElementById('ip');
  const timeEl = document.getElementById('time');

  uaEl.innerHTML = navigator.userAgent;
  timeEl.innerHTML = (new Date()).toUTCString();

  fetch('https://api64.ipify.org?format=json')
    .then((res) => res.json())
    .then((data) => {
      ipEl.innerHTML = data.ip;
    });
})();
