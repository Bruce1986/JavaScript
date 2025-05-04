javascript:(function(){
  const width = 900;
  const height = 1400;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  const baseUrl = document.location.href.split('?')[0].replace(/\/$/, '');
  const newUrl = baseUrl + '/chat';
  window.open(
    newUrl,
    '',
    `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=${width},height=${height},left=${left},top=${top}`
  );
})();
