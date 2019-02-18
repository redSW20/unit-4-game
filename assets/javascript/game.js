    //assign values to variables
    var targetNumber = Math.floor(Math.random() * 101) + 19; // Generate random number between 19-120
    var crystals = $("#crystals"); 
    var counter = 0; 
    var wins = 0; 
    var loses = 0;
    var crystal1 = Math.floor(Math.random() * 12) + 2; //assign and generate random number between 1-12
    var crystal2 = Math.floor(Math.random() * 12) + 2; 
    var crystal3 = Math.floor(Math.random() * 12) + 2; 
    var crystal4 = Math.floor(Math.random() * 12) + 2; 
    var numberOptions = [crystal1, crystal2, crystal3, crystal4]; // assign and create array for values
    var crystalImages = ['./assets/images/crystal1.png', './assets/images/crystal2.png', './assets/images/crystal3.png', './assets/images/crystal4.png'];



    $(document).ready(function() {
         // displays values on screen
    $("#number-to-guess").text(targetNumber); 
    $('#wins-count').text(wins);
    $('#loses-count').text(loses); 
    $('#score').text(counter); 
    
    
    // for loop to create crystals for every numberOption
    for (let i = 0; i < numberOptions.length; i++) { 
      let imageCrystal = $("<img>"); 
      imageCrystal.addClass("crystal-image"); 
      imageCrystal.attr('src', crystalImages[i]); 
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
      crystals.append(imageCrystal);
    }

});