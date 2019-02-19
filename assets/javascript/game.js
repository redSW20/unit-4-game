$(document).ready(function () {
    console.log("ready!")

                //assign values to variables
        var targetNumber = Math.floor(Math.random() * 101) + 19; // Generate random number between 19-120
        var crystals = $("#crystals");
        var counter = 0;
        var wins = 0;
        var losses = 0;
        var Ruby1 = Math.floor(Math.random() * 12) + 2; //assign and generate random number between 1-12
        var Peridot2 = Math.floor(Math.random() * 12) + 2;
        var Sapphire3 = Math.floor(Math.random() * 12) + 2;
        var Opal4 = Math.floor(Math.random() * 12) + 2;

        var numberOptions = [Ruby1, Peridot2, Sapphire3, Opal4]; // assign and create array for values and a seperate array for the images
        var crystalImages = ["./assets/images/Ruby1.jpg", "./assets/images/Peridot2.jpg", "./assets/images/Sapphire3.png", "./assets/images/Opal4.jpg"];

        // displays values on screen
        $("#number-to-guess").text(targetNumber);
        $("#win").text(wins);
        $("#loss").text(losses);
        $("#score").text(counter);


        // for loop to create crystals for every numberOption
        for (let i = 0; i < numberOptions.length; i++) {
            let imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("src", crystalImages[i]);
            imageCrystal.attr("data-crystalvalue", numberOptions[i]);
            crystals.append(imageCrystal);
        }


        //the onClick event to set things in motion

        crystals.on("click", "crystal-image", function () {
            var crystalvalue = ($(this).attr("data-crystalvalue"));
            crystalvalue = parseInt(crystalvalue);
            counter += crystalvalue;
            $("#score").text(counter);

            if (counter === targetNumber) {
                wins++;
                $("#win-lose-message").text("You got some treasure!");
                $("#win").text(wins);
                resetGame();

            } else if (counter >= targetNumber) {
                losses++;
                $("#win-lose-message").text("You were eaten!");
                $("loss").text(losses);
                resetGame();
            }
        });

        //The almighty reset...

        function resetGame() {
            targetNumber = Math.floor(Math.random() * 101) + 19;
            Ruby1 = Math.floor(Math.random() * 12) + 2;
            Peridot2 = Math.floor(Math.random() * 12) + 2;
            Sapphire3 = Math.floor(Math.random() * 12) + 2;
            Opal4 = Math.floor(Math.random() * 12) + 2;
            numberOptions = [Ruby1, Peridot2, Sapphire3, Opal4];
            crystalImages = ["./assets/images/Ruby1.jpg", "./assets/images/Peridot2.jpg", "./assets/images/Sapphire3.png", "./assets/images/Opal4.jpg"];
            counter = 0;
            crystals.empty();

            for (var i = 0; i < numberOptions.length; i++) {
                var imageCrystal = $("<img>");
                imageCrystal.addClass("crystal-image");
                imageCrystal.attr("src", crystalImages[i]);
                imageCrystal.attr("data-crystalvalue", numberOptions[i]);
                crystals.append(imageCrystal);
            }
            $("#number-to-guess").text(targetNumber);
            $("#score").text(counter);
        }
    });