$(document).ready(function() {
    $(".info-card").addClass("animate-card");
    $(document).ready(function() {
        $(".info-card").addClass("animate-card");

        $(".info-card").click(function() {
            // Get the card-specific content
            var cardId = $(this).attr("id");
            var cardContent = getCardContent(cardId);

            // Update the overlay with the card-specific content
            var overlay = $(".overlay");
            overlay.find("img").attr("src", cardContent.gif);
            overlay.find("p").text(cardContent.description);

            // Toggle the overlay
            overlay.fadeToggle(300);
        });

        $(".exit-button").click(function(event) {
            event.stopPropagation(); // Prevent the overlay from closing when clicking the exit button
            var overlay = $(".overlay");
            overlay.fadeOut(300);
        });

        // Define card-specific content (you can extend this with data for other cards)
        function getCardContent(cardId) {
            var cardContent = {
                family: {
                    gif: "family.gif",
                    description: "We are the uchihas who can go to great length to protect the family and if anyone harms us our eyes turn red and we harshly scold you "               
                 },
                school: {
                    gif: "school.gif",
                    description: "The school was the best place for learning culture "
                },
                college: {
                    gif: "college.gif",
                    description: "We friends enjoy outdoors more than indoors"
                },
                hobby: {
                    gif: "hobby.gif",
                    description: "Worker by day gamer by night"
                },
                achievements: {
                    gif: "achievements.gif",
                    description: "World's most wanted person"
                },
                vision: {
                    gif: "vision.gif" ,
                    description: "Retire and live a peaceful life showing of skills I learnt during my working day"
                  }

            };

            return cardContent[cardId] || {}; // Return the card-specific content or an empty object
        }
    });


    $(".info-card").hover(
        function() {
            // Enlarge the card and show details on hover
            $(this).css({
                'transform': 'scale(1.03)',
                'box-shadow': '0 0 20px rgba(0, 0, 0, 0.2)'
            });

        },
        function() {
            // Shrink the card and hide details on hover out
            $(this).css({
                'transform': 'scale(1)',
                'box-shadow': '0 0 10px rgba(0, 0, 0, 0.1)'
            });
        },

    );
});
