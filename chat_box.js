$(document).ready(function () {
    // Toggle the chat box when the chat box toggle is clicked
    $(".chat-box-toggle").click(function () {
        $(".chat-box").slideToggle();
    });

    // Close the chat box when the close button is clicked
    $(".chat-close").click(function () {
        $(".chat-box").slideUp();
    });

    // Function to generate bot responses based on user input
    function generateBotResponse(userMessage) {
        // Define predefined responses for specific user inputs
        const responses = {
            'hi|^hello|^howdy': 'Hello!',
            'how are you': 'I am just a bot, but thanks for asking!',
            'your website is very pleasing': 'Thank you for noticing and letting me know',
        };

        // Check if userMessage matches a predefined response
        for (const keyword in responses) {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i');
            if (regex.test(userMessage)) {
                return responses[keyword];
            }
        }

        // Handle irrelevant messages
        return 'I didn\'t quite understand that. Do you need any other help?';
    }

    // Send a message
    $("#send-button").click(function () {
        var userMessage = $("#message-input").val();
        if (userMessage.trim() !== "") {
            $(".chat-messages").append("<div class='message'>You: " + userMessage + "</div>");
            var botResponse = generateBotResponse(userMessage);
            $(".chat-messages").append("<div class='message bot-message'>Bot: " + botResponse + "</div>").css("color", "grey");
            $("#message-input").val("");
        }
    });

    // Submit message on pressing Enter
    $("#message-input").keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            $("#send-button").click();
        }
    });
});
