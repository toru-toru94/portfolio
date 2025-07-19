export function initContactForm(scriptURL) {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
      method: 'POST',
      mode: 'cors',
      body: new FormData(form)  // フォームデータ送信
    })
      .then(res => res.json())  // JSONとして受け取る
      .then(result => {
        if (result.status === 'success') {
          window.location.href = '/thanks.html';
        } else {
          console.warn('Unexpected response:', result);
          alert('送信に失敗しました。');
        }
      })
      .catch(error => {
        console.error(error);
        alert('通信エラーが発生しました。');
      });
  });
}
