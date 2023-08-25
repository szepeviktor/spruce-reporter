(() => {
  const copyBtn = document.getElementById('copy-btn');
  const copyBtnCaption = copyBtn.querySelector('.btn__caption');

  async function copyTextToClipboard() {
    const copiedText = document.getElementById('data').innerText;

    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(copiedText);
    }

    return document.execCommand('copy', true, copiedText);
  }

  function handleCopyClick() {
    copyTextToClipboard()
      .then(() => {
        copyBtnCaption.innerHTML = 'Copied!';
        setTimeout(() => {
          copyBtnCaption.innerHTML = 'Copy';
        }, 1500);
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line
      });
  }

  copyBtn.addEventListener('click', handleCopyClick);
})();
