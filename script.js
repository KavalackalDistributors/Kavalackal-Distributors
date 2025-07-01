const products = {
    amul: [
        // Milk Products
        { id: 1, name: "Amul Gold Full Cream Milk", image: "images/amul/amul-gold.jpg" },
        { id: 2, name: "Amul Taaza Toned Milk", image: "images/amul/amul-taaza.jpg" },
        { id: 3, name: "Amul Diamond Double Toned Milk", image: "images/amul/amul-diamond.jpg" },
        { id: 4, name: "Amul Slim n Trim Skimmed Milk", image: "images/amul/amul-slim.jpg" },
        { id: 5, name: "Amul Shakti Standardised Milk", image: "images/amul/amul-shakti.jpg" },

        // Butter & Spreads
        { id: 6, name: "Amul Butter 100g", image: "images/amul/amul-butter-100.jpg" },
        { id: 7, name: "Amul Butter 500g", image: "images/amul/amul-butter-500.jpg" },
        { id: 8, name: "Amul Garlic & Herbs Butter", image: "images/amul/amul-garlic-butter.jpg" },
        { id: 9, name: "Amul Lite Low Fat Bread Spread", image: "images/amul/amul-lite.jpg" },

        // Cheese Range
        { id: 10, name: "Amul Processed Cheese Block", image: "images/amul/amul-cheese-block.jpg" },
        { id: 11, name: "Amul Processed Cheese Slices", image: "images/amul/amul-cheese-slices.jpg" },
        { id: 12, name: "Amul Cheese Spread", image: "images/amul/amul-cheese-spread.jpg" },
        { id: 13, name: "Amul Pizza Cheese Mozzarella", image: "images/amul/amul-mozzarella.jpg" },

        // Fresh Products
        { id: 14, name: "Amul Whipping Cream", image: "images/amul/amul-whipping-cream.jpg" },
        { id: 15, name: "Amul Paneer", image: "images/amul/amul-paneer.jpg" },

        // Ice Creams
        { id: 16, name: "Amul Vanilla Ice Cream", image: "images/amul/amul-vanilla.jpg" },
        { id: 17, name: "Amul Chocolate Ice Cream", image: "images/amul/amul-chocolate-ice.jpg" },
        { id: 18, name: "Amul Strawberry Ice Cream", image: "images/amul/amul-strawberry.jpg" },
        { id: 19, name: "Amul Butterscotch Ice Cream", image: "images/amul/amul-butterscotch.jpg" },
        { id: 20, name: "Amul Rajbhog Ice Cream", image: "images/amul/amul-rajbhog.jpg" },
        { id: 21, name: "Amul Kesar Pista Ice Cream", image: "images/amul/amul-kesar-pista.jpg" },
        { id: 22, name: "Amul Tricone Cone", image: "images/amul/amul-tricone.jpg" },
        { id: 23, name: "Amul Ice Cream Sandwich", image: "images/amul/amul-sandwich.jpg" },
        { id: 24, name: "Amul Chocolate Chips Ice Cream", image: "images/amul/amul-choco-chips.jpg" },

        // Beverages
        { id: 25, name: "Amul Kool Cafe", image: "images/amul/amul-kool-cafe.jpg" },
        { id: 26, name: "Amul Kool Koko", image: "images/amul/amul-kool-koko.jpg" },
        { id: 27, name: "Amul Kool Badam", image: "images/amul/amul-kool-badam.jpg" },
        { id: 28, name: "Amul Kool Rose", image: "images/amul/amul-kool-rose.jpg" },
        { id: 29, name: "Amul Lassi", image: "images/amul/amul-lassi.jpg" },
        { id: 30, name: "Amul Buttermilk", image: "images/amul/amul-buttermilk.jpg" },

        // Other Dairy Products
        { id: 31, name: "Amul Pure Ghee", image: "images/amul/amul-ghee.jpg" },
        { id: 32, name: "Amul Milk Powder", image: "images/amul/amul-milk-powder.jpg" },
        { id: 33, name: "Amul Mithai Mate", image: "images/amul/amul-mithai-mate.jpg" },
        { id: 34, name: "Amul Condensed Milk", image: "images/amul/amul-condensed.jpg" },

        // Chocolates
        { id: 35, name: "Amul Dark Chocolate", image: "images/amul/amul-dark.jpg" },
        { id: 36, name: "Amul Milk Chocolate", image: "images/amul/amul-milk-chocolate.jpg" },
        { id: 37, name: "Amul Fruit & Nut Chocolate", image: "images/amul/amul-fruit-nut.jpg" },

        // Bread Spreads
        { id: 38, name: "Amul Chocolate Spread", image: "images/amul/amul-choco-spread.jpg" },
        { id: 39, name: "Amul Honey", image: "images/amul/amul-honey.jpg" }
    ],
    eyetex: [
        // Kajal Collection
        { id: 1, name: "Eyetex Dazller Kajal Supreme", image: "images/Eyetex/kajal-supreme.jpg" },
        { id: 2, name: "Eyetex Kajal Supreme Herbally Enhanced", image: "images/Eyetex/herbal-kajal.jpg" },
        { id: 3, name: "Eyetex Classic Kajal", image: "images/Eyetex/classic-kajal.jpg" },
        { id: 4, name: "Eyetex Waterproof Kajal", image: "images/Eyetex/waterproof-kajal.jpg" },
        { id: 5, name: "Eyetex Long-Lasting Kajal", image: "images/Eyetex/long-lasting-kajal.jpg" },
        
        // Kumkum Range
        { id: 6, name: "Eyetex Divyaa Kumkum 11-in-1", image: "images/Eyetex/divyaa-kumkum.jpg" },
        { id: 7, name: "Eyetex Traditional Red Kumkum", image: "images/Eyetex/traditional-kumkum.jpg" },
        { id: 8, name: "Eyetex Color Kumkum Collection", image: "images/Eyetex/color-kumkum.jpg" },
        { id: 9, name: "Eyetex Liquid Kumkum", image: "images/Eyetex/liquid-kumkum.jpg" },
        
        // Bindi Collection
        { id: 10, name: "Eyetex Traditional Bindis", image: "images/Eyetex/traditional-bindis.jpg" },
        { id: 11, name: "Eyetex Decorative Bindis", image: "images/Eyetex/decorative-bindis.jpg" },
        { id: 12, name: "Eyetex Bridal Bindis", image: "images/Eyetex/bridal-bindis.jpg" },
        
        // Eye Makeup Collection
        { id: 13, name: "Eyetex Dazller Eyeliner Pen", image: "images/Eyetex/eyeliner-pen.jpg" },
        { id: 14, name: "Eyetex Liquid Eyeliner", image: "images/Eyetex/liquid-eyeliner.jpg" },
        { id: 15, name: "Eyetex Waterproof Mascara", image: "images/Eyetex/waterproof-mascara.jpg" },
        { id: 16, name: "Eyetex Volume Boost Mascara", image: "images/Eyetex/volume-mascara.jpg" },
        { id: 17, name: "Eyetex Eye Shadow Palette", image: "images/Eyetex/eyeshadow-palette.jpg" },
        { id: 18, name: "Eyetex Glitter Eye Shadow", image: "images/Eyetex/glitter-eyeshadow.jpg" },
        
        // Face Makeup
        { id: 19, name: "Eyetex Dazller Foundation", image: "images/Eyetex/foundation.jpg" },
        { id: 20, name: "Eyetex Compact Powder", image: "images/Eyetex/compact-powder.jpg" },
        { id: 21, name: "Eyetex Face Powder", image: "images/Eyetex/face-powder.jpg" },
        { id: 22, name: "Eyetex Blush", image: "images/Eyetex/blush.jpg" },
        
        // Lip Products
        { id: 23, name: "Eyetex Dazller Lipstick", image: "images/Eyetex/lipstick.jpg" },
        { id: 24, name: "Eyetex Lip Gloss", image: "images/Eyetex/lip-gloss.jpg" },
        { id: 25, name: "Eyetex Lip Liner", image: "images/Eyetex/lip-liner.jpg" },
        
        // Nail Products
        { id: 26, name: "Eyetex Nail Polish", image: "images/Eyetex/nail-polish.jpg" },
        { id: 27, name: "Eyetex Nail Art Kit", image: "images/Eyetex/nail-art.jpg" },
        
        // Accessories
        { id: 28, name: "Eyetex Makeup Remover", image: "images/Eyetex/makeup-remover.jpg" },
        { id: 29, name: "Eyetex Makeup Brushes Set", image: "images/Eyetex/brush-set.jpg" }
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

    // Create Eyetex Products section if there are any
    if (products.eyetex && products.eyetex.length > 0) {
        const eyetexHeading = document.createElement('h2');
        eyetexHeading.classList.add('section-heading');
        eyetexHeading.textContent = 'Eyetex Products';
        mainContainer.appendChild(eyetexHeading);

        const eyetexContainer = createProductRow(products.eyetex);
        mainContainer.appendChild(eyetexContainer);
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
    const allProducts = [...products.amul, ...products.eyetex];
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

// Mobile menu functionality
const menuBtn = document.querySelector('.openbtn');
const navItems = document.querySelector('.nav-items');
const body = document.body;

function toggleMenu(e) {
    if (e) e.stopPropagation();
    navItems.classList.toggle('show');
    body.classList.toggle('menu-open');
}

function closeMenu() {
    navItems.classList.remove('show');
    body.classList.remove('menu-open');
}

// Event Listeners
menuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navItems.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
    }
});

// Close menu when window is resized
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Prevent scrolling on iOS when menu is open
navItems.addEventListener('touchmove', (e) => {
    if (body.classList.contains('menu-open')) {
        const element = e.target;
        const isAtTop = element.scrollTop === 0;
        const isAtBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

        if ((isAtTop && e.touches[0].screenY > e.touches[0].screenY) ||
            (isAtBottom && e.touches[0].screenY < e.touches[0].screenY)) {
            e.preventDefault();
        }
    }
}, { passive: false });

// Handle search input on mobile
const searchInput = document.getElementById('search');
searchInput.addEventListener('focus', () => {
    if (window.innerWidth <= 768) {
        window.scrollTo(0, 0);
    }
});