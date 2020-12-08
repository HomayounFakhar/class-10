

window.addEventListener('DOMContentLoaded', function() {
  var cards = document.querySelectorAll('.card');
  var selectedCards = [];
  var matchedCards = [];

  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      // If the card has already been matched, ignore it.
      if (card.classList.contains('is-selected')) {
        return;
      }

      // HOMAYOUN 
       selectedCards.length=selectedCards.length+1;

      // If we haven't selected 2 cards yet, add the current card to the
      // collection of selected cards and apply the correct CSS class.
      if (selectedCards.length <= 2) {
        card.classList.add('is-selected');
        card.classList.add('is-selected');
      }
      
 
      // If we have selected two cards, see if they match.
      if (selectedCards.length === 2) {
        var card1 = document.getElementsByClassName("is-selected")[0].innerText;
        var card2 = document.getElementsByClassName("is-selected")[1].innerText;

      
        // If the cards match, add them to the collection of matched cards and
        // apply the correct CSS class.
        if (card1 === card2) {

          var current = document.getElementsByClassName("is-selected");
          current[0].className = current[0].className.replace("is-selected", "is-matched");      
          current[0].className = current[0].className.replace("is-selected", "is-matched");
          selectedCards.length=0;          
         
        } else {

          var current = document.getElementsByClassName("is-selected");
          current[0].className = current[0].className.replace("is-selected", "");      
          current[0].className = current[0].className.replace("is-selected", "");
          selectedCards.length=0;
          
        }

    
        if (document.querySelectorAll('.is-matched').length === 6) {
          alert('You matched all the cards, nice job!');
        };
        // Regardless of whether or not the cards match, deselect them and reset
        // the collection of matched cards.
        card1.classList.remove('is-selected');
        card2.classList.remove('is-selected');
        selectedCards = [];
      }

      // If we've matched all the cards, display a message.
      if (matchedCards.length > cards.length) {
        alert('You matched all the cards, nice job!');
      }
    });
  });
});