'use strict';

angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controller: function HomePageController() {
      var cardNames = [
        "Clinical Quality",
        "Financial Viability",
        "Customer Loyalty",
        "Operational Effectiveness",
        "Total Score"
      ];

      var cards = [
        [
          "Adverse Affects",
          "Clinical Outcomes"
        ],
        [
          "Net Revenues",
          "Volume"
        ],
        [
          "Patient Experience",
          "Provider Satisfaction"
        ],
        [
          "Accreditation Readiness",
          "staff Efficieny"
        ]
      ];
      var self = this;
      self.score = 0;
      self.cardId = 0;
      self.cardName = cardNames[self.cardId];
      self.cardDetails = cards[self.cardId];
      self.inputScore = '';

      self.showScoreDiv = false;
      self.showFinalScore = true;
      self.showUpdateCard = false;
      self.updateAndNextCard = function updateAndNextCard() {
        self.cardId += 1;
        self.cardName = cardNames[self.cardId];
        self.cardDetails = cards[self.cardId];
        console.log('score', self.inputScore);
        self.score += parseInt(self.inputScore);
        self.inputScore = '';

        if(self.cardId == 4) {
          self.showScoreDiv = true;
          self.showFinalScore = false;
          self.showUpdateCard = true;
        }
      };
    }
  });
