// Generate object cards


const products = [ 
    {
        name:'toy',
        rating:'5',
        price:'10',
        image:'images/',
    },
    {
        name:'toy',
        rating:'5',
        price:'10',
        image: 'images/'
    },
    {
        name:'toy',
        rating:'5',
        price:'10',
        image: 'images/'
    },
    {
        name:'toy',
        rating:'5',
        price:'10',
        image: 'images/'
    },
    {
        name:'toy',
        rating:'5',
        price:'10',
        image: 'images/'
    },
    {
        name:'toy',
        rating:'5',
        price:'10',
        image: 'images/'
    }
];

function generateProductCards() {
    const productCardsContainer = document.getElementById('card');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col-6');
        card.classList.add('mt-3');      

        card.innerHTML = `
            <div class="card">
                <div class="card-header color" style="background-color: #7F5539;"> 
                    ${product.name} 
                </div>
                <div class="card-body" style="background-color: ;">
                    <img class='sizing' src ="${product.image}">
                    <p>Rating: ${product.rating}</p>
                    <p>price: ${product.price}</p>
                    
                   
                </div>
            </div>
        `;

        productCardsContainer.appendChild(card);
    });
}

window.onload = generateProductCards;