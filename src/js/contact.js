export function initWorksContact() {
  document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      window.location.href = 'https://toru-toru94.github.io/portfolio/thanks.html';
    } else {
      alert('送信に失敗しました。もう一度お試しください。');
    }
  })
  .catch(() => {
    alert('通信エラーが発生しました。');
  });
});

}
