document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'fries',
            img: 'fries.png'
        },
        {
            name: 'fries',
            img: 'fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'milkshake.png'
        },
        {
            name: 'pizza',
            img: 'pizza.png'
        },
        {
            name: 'pizza',
            img: 'pizza.png'
        },
    ];

    const grid = document.querySelector('.grid');

    // create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    createBoard();
});