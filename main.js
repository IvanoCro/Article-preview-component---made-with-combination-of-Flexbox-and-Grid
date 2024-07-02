document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('share-button');
    const shareOptions = document.getElementById('shareOptions');

    shareButton.addEventListener('click', function() {
        if (shareOptions.style.display === 'none' || shareOptions.style.display === '') {
            shareOptions.style.display = 'flex';
        } else {
            shareOptions.style.display = 'none';
        }
    });
});
