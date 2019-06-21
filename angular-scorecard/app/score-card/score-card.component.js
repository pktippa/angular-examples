'use strict';

angular.
  module('scoreCard').
  component('scoreCard', {
    templateUrl: 'score-card/score-card.template.html',
    controller:['cardService', function ScoreCardController(cardService) {
      var self = this;
      self.score = 0;
      self.updateScore = function updateScore() {
        cardService.addDetail('abc');
        self.score = cardService.getCardDetails();        
      };
    }]
  });
