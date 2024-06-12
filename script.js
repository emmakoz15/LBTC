// Generate object cards

const products = [
  {
    name: "Blocks",
    rating: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Font Awesome Icon Library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Rating</title>
    <style>
        .checked {
            color: orange;
        }
         .star-rating {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .fa-star {
            margin: 0 -2px;
            padding: 0 1px; 
        }
    </style>
</head>
<body>

    
    <div class="star-rating">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
    </div>

</body>
</html>
`,
    price: "$9.99",
    images: ["images/block1.jpg","images/block4.jpg","images/block5.jpg",],
    id: "toy1",
    description: "Vibrant building blocks that spark creativity and enhance fine motor skills in children.",
  },
  {
    name: "Plane",
    rating: "5",
    price: "$4.99",
    images: ["images/plane3.jpg","images/plane1.jpg","images/plane2.jpg"],
    id: "toy2",
    description: "Sleek model airplane perfect for aviation enthusiasts and imaginative play.",
  },
  {
    name: "Car",
    rating: "5",
    price: "$9.99",
    images: ["images/car2.jpg","images/car3.jpg","images/car1.jpg",],
    id: "toy3",
    description: "Stylish toy car ready for thrilling races and adventurous journeys.",
  },
  {
    name: "Boat",
    rating: "5",
    price: "$12.99",
    images: ["images/boat3.jpg","images/boat1.jpg","images/boat2.jpg",],
    id: "toy4",
    description: "Detailed, buoyant toy boat ideal for exciting water play and nautical adventures.",
  },
  {
    name: "Train 1",
    rating: "5",
    price: "$14.99",
    images: ["images/train5.jpg","images/train2.jpg","images/train3.jpg",],
    id: "toy5",
    description: "Classic wooden train set with vibrant colors, perfect for imaginative play and developing fine motor skills.",
 },
  {
    name: "Train 2",
    rating: "5",
    price: "$19.99",
    images: ["images/train7.jpg","images/train1.jpg","images/train6.jpg"],
    id: "toy6",
    description: "Modern electric train with realistic sounds and lights, offering an engaging experience for young engineers.",
  }
];


function generateProductCards() {
  const productCardsContainer = document.getElementById("card");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("col-lg-4");
    card.classList.add("col-md-6");
    card.classList.add("col-sm-12");
    card.classList.add("mt-3");
    card.classList.add("h-100");

    card.innerHTML = `
            <div class="card">
            





            <div = class="card-img-top">
            <div id="${product.id}" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#${product.id}" data-bs-slide-to="0" class="active indicolors" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#${product.id}" data-bs-slide-to="1" class= "indicolors" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#${product.id}" data-bs-slide-to="2" class= "indicolors" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="imgsize" src ="${product.images[0]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img class="imgsize" src="${product.images[1]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img class="imgsize" src = "${product.images[2]}" class="d-block w-100" alt="...">
              </div>
            </div>
          
           
          </div>

            </div>








                <div class="card-header color" style="background-color: #7F5539;"> 
                    ${product.name} 
                </div>
                <div class="card-body" style="background-color: ;">
                    
                    <p>Rating: ${product.rating}</p>
                    <p>price: ${product.price}</p>
                    <p>Description: ${product.description}</p>
                   
                </div>
            </div>
        `;

    productCardsContainer.appendChild(card);
  });
}

window.onload = generateProductCards;



// scroll to top
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//show quantity

// For illustration purposes only
// Use JS to adjust the width attribute of the .value rectangle element.
TweenMax.to(".value", 2, {
  attr:{width: 0},
  yoyo: true,
  ease:Quint.easeInOut,
  repeat: -1
});




