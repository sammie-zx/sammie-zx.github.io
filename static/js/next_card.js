/**
 * Add info to card
 * Make card change each time next is clicked
 */
function main() {    
    /**
     * Holds the text to be displayed in a card
     */
    const infos = [{
        title: 'My tools',
        items: ['Python', 'Flask', 'SQL and ORM', 'HTML, CSS and JavaScript', 
            'Sass', 'Machine Learning', 'C/C++', 'Git']
    }, 
    {
        title: 'My projects',
        items: ['LiquidFx', 'CourseSite']
    }]

    let cardState = 0;
    let lastCardState = infos.length - 1;

    populateCard(infos[cardState]);
    
    // display the next info when next button is clicked 
    let nextBtn = document.querySelector('.next');
    nextBtn.addEventListener('click', () => {
        cardState++;

        // reset cardState
        if (cardState > lastCardState) {
            cardState = 0;
        }
        populateCard(infos[cardState]);
    });

}


/**
 * Add info to card in html
 * @param {Object} info 
 */
function populateCard(info) {
    // change title
    let card = document.querySelector('.card');
    let cardTitle = card.querySelector('.card-title');
    cardTitle.textContent = info['title'];

    let cardItemsDiv = card.querySelector('.card-items');
    
    // removes previous items
    Array.from(cardItemsDiv.children).forEach(e => e.remove());

    // add new items
    info['items'].forEach(item => {
        let newItemParagraph = document.createElement('p');
        newItemParagraph.textContent = item;
        cardItemsDiv.appendChild(newItemParagraph);
    });
}


main();