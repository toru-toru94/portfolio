export function initContactForm(scriptURL) {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();  // デフォルトのフォーム送信を無効化

    fetch(scriptURL, {
      method: 'POST',
      mode: 'cors',
      body: new FormData(form)
    })
      .then(res => res.json())  // JSONとして処理
      .then(result => {
        console.log('Response:', result);
        if (result.status === 'success') {
          window.location.href = '/thanks.html';
        } else {
          alert('送信に失敗しました。');
        }
      })
      .catch(error => {
        console.error(error);
        alert('通信エラーが発生しました。');
      });
  });
}
