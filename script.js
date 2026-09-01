const button = document.getElementById('myBtn');
const messageText = document.getElementById('message');

button.addEventListener('click', function() {
    messageText.innerText = 'Ура! JavaScript заработал!';
    messageText.style.color = '#eb06ff';
});