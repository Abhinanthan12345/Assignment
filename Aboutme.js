document.addEventListener('DOMContentLoaded', function () {
    const aboutMeText = document.querySelector('.about-me-text p');
    const readMoreLink = document.querySelector('.read-more-link');

    readMoreLink.addEventListener('click', function () {
        if (aboutMeText.style.maxHeight) {
            aboutMeText.style.maxHeight = null;
            readMoreLink.textContent = 'Read More';
        } else {
            aboutMeText.style.maxHeight = aboutMeText.scrollHeight + 'px';
            readMoreLink.textContent = 'Read Less';
        }
    });

    // Check if the text exceeds 5 lines
    if (aboutMeText.scrollHeight > aboutMeText.clientHeight) {
        readMoreLink.style.display = 'block';
    }
});
