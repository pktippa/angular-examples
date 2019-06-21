angular.module('card').service('cardService', function() {
    var cardDetais = [];

    var addDetail = function(detail) {
        cardDetais.push(detail);
    };

    var getCardDetails = function() {
        return cardDetais;
    };

    return {
        addDetail: addDetail,
        getCardDetails: getCardDetails
    };
});