export function initContactForm(scriptURL) {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => response.text())  // レスポンスをテキストで受け取る
      .then(result => {
        if (result.trim() === 'success') { // "success" ならリダイレクト
          window.location.href = '/thanks.html';
        } else {
          // 予期しないレスポンスが返った場合（古いデプロイなど）
          console.warn('Unexpected response:', result);
          alert('送信処理で問題が発生しました。');
        }
      })
      .catch(error => {
        alert('通信エラーが発生しました。');
        console.error(error);
      });
  });
}
