const products = {
    amul: [
        // Milk Products
        { id: 1, name: "Amul Gold Full Cream Milk", image: "images/amul-gold.jpg" },
        { id: 2, name: "Amul Taaza Toned Milk", image: "images/amul-taaza.jpg" },
        { id: 3, name: "Amul Diamond Double Toned Milk", image: "images/amul-diamond.jpg" },
        { id: 4, name: "Amul Slim n Trim Skimmed Milk", image: "images/amul-slim.jpg" },
        { id: 5, name: "Amul Shakti Standardised Milk", image: "images/amul-shakti.jpg" },

        // Butter & Spreads
        { id: 6, name: "Amul Butter 100g", image: "images/amul-butter-100.jpg" },
        { id: 7, name: "Amul Butter 500g", image: "images/amul-butter-500.jpg" },
        { id: 8, name: "Amul Garlic & Herbs Butter", image: "images/amul-garlic-butter.jpg" },
        { id: 9, name: "Amul Lite Low Fat Bread Spread", image: "images/amul-lite.jpg" },

        // Cheese Range
        { id: 10, name: "Amul Processed Cheese Block", image: "images/amul-cheese-block.jpg" },
        { id: 11, name: "Amul Processed Cheese Slices", image: "images/amul-cheese-slices.jpg" },
        { id: 12, name: "Amul Cheese Spread", image: "images/amul-cheese-spread.jpg" },
        { id: 13, name: "Amul Pizza Cheese Mozzarella", image: "images/amul-mozzarella.jpg" },

        // Fresh Products
        { id: 14, name: "Amul Whipping Cream", image: "images/amul-whipping-cream.jpg" },
        { id: 15, name: "Amul Paneer", image: "images/amul-paneer.jpg" },

        // Ice Creams
        { id: 16, name: "Amul Vanilla Ice Cream", image: "images/amul-vanilla.jpg" },
        { id: 17, name: "Amul Chocolate Ice Cream", image: "images/amul-chocolate-ice.jpg" },
        { id: 18, name: "Amul Strawberry Ice Cream", image: "images/amul-strawberry.jpg" },
        { id: 19, name: "Amul Butterscotch Ice Cream", image: "images/amul-butterscotch.jpg" },
        { id: 20, name: "Amul Rajbhog Ice Cream", image: "images/amul-rajbhog.jpg" },
        { id: 21, name: "Amul Kesar Pista Ice Cream", image: "images/amul-kesar-pista.jpg" },
        { id: 22, name: "Amul Tricone Cone", image: "images/amul-tricone.jpg" },
        { id: 23, name: "Amul Ice Cream Sandwich", image: "images/amul-sandwich.jpg" },
        { id: 24, name: "Amul Chocolate Chips Ice Cream", image: "images/amul-choco-chips.jpg" },

        // Beverages
        { id: 25, name: "Amul Kool Cafe", image: "images/amul-kool-cafe.jpg" },
        { id: 26, name: "Amul Kool Koko", image: "images/amul-kool-koko.jpg" },
        { id: 27, name: "Amul Kool Badam", image: "images/amul-kool-badam.jpg" },
        { id: 28, name: "Amul Kool Rose", image: "images/amul-kool-rose.jpg" },
        { id: 29, name: "Amul Lassi", image: "images/amul-lassi.jpg" },
        { id: 30, name: "Amul Buttermilk", image: "images/amul-buttermilk.jpg" },

        // Other Dairy Products
        { id: 31, name: "Amul Pure Ghee", image: "images/amul-ghee.jpg" },
        { id: 32, name: "Amul Milk Powder", image: "images/amul-milk-powder.jpg" },
        { id: 33, name: "Amul Mithai Mate", image: "images/amul-mithai-mate.jpg" },
        { id: 34, name: "Amul Condensed Milk", image: "images/amul-condensed.jpg" },

        // Chocolates
        { id: 35, name: "Amul Dark Chocolate", image: "images/amul-dark.jpg" },
        { id: 36, name: "Amul Milk Chocolate", image: "images/amul-milk-chocolate.jpg" },
        { id: 37, name: "Amul Fruit & Nut Chocolate", image: "images/amul-fruit-nut.jpg" },

        // Bread Spreads
        { id: 38, name: "Amul Chocolate Spread", image: "images/amul-choco-spread.jpg" },
        { id: 39, name: "Amul Honey", image: "images/amul-honey.jpg" }
    ],
    vega: [
        { id: 3, name: "Vega Product 1", price: 99.99, image: "images/vega1.jpg" },
        { id: 4, name: "Vega Product 2", price: 79.99, image: "images/vega2.jpg" },
        // Add more Vega products
    ]
};

function displayProductsByCategory() {
    const mainContainer = document.querySelector('.section-container');
    mainContainer.innerHTML = ''; // Clear existing content

    // Create Amul Products section
    const amulHeading = document.createElement('h2');
    amulHeading.classList.add('section-heading');
    amulHeading.textContent = 'Amul Products';
    mainContainer.appendChild(amulHeading);

    // Create container for Amul products with navigation
    const amulContainer = createProductRow(products.amul);
    mainContainer.appendChild(amulContainer);

    // Create Vega Products section if there are any
    if (products.vega && products.vega.length > 0) {
        const vegaHeading = document.createElement('h2');
        vegaHeading.classList.add('section-heading');
        vegaHeading.textContent = 'Vega Products';
        mainContainer.appendChild(vegaHeading);

        const vegaContainer = createProductRow(products.vega);
        mainContainer.appendChild(vegaContainer);
    }
}

function createProductRow(items) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');
    rowContainer.style.position = 'relative'; // Ensure proper positioning of buttons
    
    const productRow = document.createElement('div');
    productRow.classList.add('product-row');
    
    // Add navigation buttons
    const leftButton = document.createElement('button');
    leftButton.classList.add('scroll-button', 'scroll-left');
    leftButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    const rightButton = document.createElement('button');
    rightButton.classList.add('scroll-button', 'scroll-right');
    rightButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    // Add click handlers
    leftButton.addEventListener('click', () => {
        productRow.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    });
    
    rightButton.addEventListener('click', () => {
        productRow.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    });
    
    // Add products
    items.forEach(product => {
        const productElement = createProductElement(product);
        productRow.appendChild(productElement);
    });
    
    // Add elements to container
    rowContainer.appendChild(leftButton);
    rowContainer.appendChild(productRow);
    rowContainer.appendChild(rightButton);
    
    // Show/hide navigation buttons based on scroll position
    productRow.addEventListener('scroll', () => {
        leftButton.style.display = productRow.scrollLeft > 0 ? 'flex' : 'none';
        rightButton.style.display = 
            (productRow.scrollLeft < (productRow.scrollWidth - productRow.clientWidth)) 
            ? 'flex' : 'none';
    });
    
    // Initial button visibility
    setTimeout(() => {
        leftButton.style.display = 'none'; // Initially hide left button
        rightButton.style.display = 
            (productRow.scrollWidth > productRow.clientWidth) 
            ? 'flex' : 'none';
    }, 100);
    
    return rowContainer;
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    
    // Create image with error handling
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.onerror = function() {
        this.src = 'images/placeholder.jpg';
        this.onerror = null;
    };

    const name = document.createElement('h3');
    name.textContent = product.name;

    productElement.appendChild(img);
    productElement.appendChild(name);

    return productElement;
}

// Update search function to work with categories
function searchProducts(query) {
    const allProducts = [...products.amul, ...products.vega];
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    const mainContainer = document.querySelector('.section-container');
    mainContainer.innerHTML = '';

    if (filteredProducts.length > 0) {
        const searchResults = document.createElement('div');
        searchResults.classList.add('product-row');
        
        filteredProducts.forEach(product => {
            const productElement = createProductElement(product);
            searchResults.appendChild(productElement);
        });

        mainContainer.appendChild(searchResults);
    } else {
        const noResults = document.createElement('p');
        noResults.style.textAlign = 'center';
        noResults.style.padding = '20px';
        noResults.textContent = 'No products found';
        mainContainer.appendChild(noResults);
    }
}

// Update search event listener
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value;
    if (query === '') {
        displayProductsByCategory(); // Show original layout when search is empty
    } else {
        searchProducts(query);
    }
});

// Call this when page loads
document.addEventListener('DOMContentLoaded', displayProductsByCategory);

// Sidebar functionality
function openNav() {
    document.getElementById("sidebar").style.width = "300px";
    document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.body.style.overflow = "auto"; // Re-enable scrolling when sidebar is closed
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const openbtn = document.querySelector('.openbtn');
    
    if (sidebar.style.width === "300px" && 
        !sidebar.contains(event.target) && 
        !openbtn.contains(event.target)) {
        closeNav();
    }
});

// Update the page title
document.title = "KAVALACKAL DISTRIBUTORS";

// Update the header text if it exists
const header = document.querySelector('header h1');
if (header) {
    header.textContent = "KAVALACKAL DISTRIBUTORS";
}