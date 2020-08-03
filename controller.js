function fnSort() {
    var cardItem = document.querySelectorAll('.grid');
    [].slice.call(cardItem).sort(function(a, b) {
            var cardA = a.getAttribute('data-item')
            var cardB = b.getAttribute('data-item')
            return (cardA < cardB) ? -1 : (cardA > cardB) ? 1 : 0;
        })
        .forEach(function(cardItem) {
            cardItem.parentNode.appendChild(cardItem)
        });
}

function fnShuffle() {
    var CardItems = document.querySelectorAll('.grid');
    [].slice.call(CardItems).sort(function(a, b) {
            return 0.5 - Math.random();
        })
        .forEach(function(cardItem) {
            cardItem.parentNode.appendChild(cardItem)
        });
}