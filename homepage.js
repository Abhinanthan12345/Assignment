function toggleLogin() {
    const loginBox = document.getElementById('login-box');
    const webpageContent = document.getElementById('webpage-content');

    if (loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
        webpageContent.style.display = 'none';
    } else {
        loginBox.style.display = 'none';
        webpageContent.style.display = 'block';
    }
}
    if (registrationBox.style.display === "block") {
        showNotImplementedPrompt();
    } else {
        closeLoginBox();
        closeRegistrationBox();
        registrationBox.style.display = "block";
    }

    if (loginBox.style.display === "block") {
        showNotImplementedPrompt();
    } else {
        closeRegistrationBox();
        closeLoginBox();
        loginBox.style.display = "block";
    }
    document.getElementById("logout").addEventListener("click", function () {
        // Sign out the user using Firebase
        signOut(auth).then(() => {
            // Handle successful logout
            console.log('Sign-out successful.');
            alert('Sign-out successful.');
            window.location.href = "start_page.html"; // Redirect to the login page upon logout
        }).catch((error) => {
            // Handle logout error
            console.log('An error happened.');
        });
    });