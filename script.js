document.getElementById('contactModalForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('nameModal').value;
  const email = document.getElementById('emailModal').value;
  const message = document.getElementById('messageModal').value;

  if (name && email && message) {
    alert('Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    document.getElementById('contactModalForm').reset();
    var myModal = new bootstrap.Modal(document.getElementById('contactModal'));
    myModal.hide();
  } else {
    alert('Пожалуйста, заполните все поля.');
  }
});
