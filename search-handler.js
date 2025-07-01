// Global search handler function
function handleSearch() {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;

    const query = searchInput.value.trim();
    
    // If on about page, redirect to index with search query
    if (window.location.pathname.includes('about.html')) {
        window.location.href = `index.html?search=${encodeURIComponent(query)}`;
        return;
    }

    // If on index page, perform search
    if (query) {
        searchProducts(query);
    }
}

// Add event listeners when document loads
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-button');

    if (!searchInput) return;

    // Handle Enter key press
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Handle search button click
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }

    // Check for search parameter in URL when page loads
    if (window.location.pathname.includes('index.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        if (searchQuery) {
            searchInput.value = searchQuery;
            searchProducts(searchQuery);
        }
    }
});

// Make searchProducts available globally if not already defined
if (typeof searchProducts !== 'function') {
    function searchProducts(query) {
        query = query.toLowerCase().trim();
        const allProducts = [...products.amul, ...products.eyetex];
        const filteredProducts = allProducts.filter(product => 
            product.name.toLowerCase().includes(query)
        );

        const mainContainer = document.querySelector('.section-container');
        if (!mainContainer) {
            console.error('Main container not found');
            return;
        }

        mainContainer.innerHTML = '';

        if (query === '') {
            displayProductsByCategory();
            return;
        }

        const searchHeading = document.createElement('h2');
        searchHeading.classList.add('section-heading');
        searchHeading.textContent = `Search Results for "${query}"`;
        mainContainer.appendChild(searchHeading);

        if (filteredProducts.length > 0) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('row-container');
            
            const searchResults = document.createElement('div');
            searchResults.classList.add('product-row');
            
            filteredProducts.forEach(product => {
                const productElement = createProductElement(product);
                searchResults.appendChild(productElement);
            });

            rowContainer.appendChild(searchResults);
            mainContainer.appendChild(rowContainer);
        } else {
            const noResults = document.createElement('p');
            noResults.style.textAlign = 'center';
            noResults.style.padding = '20px';
            noResults.textContent = 'No products found';
            mainContainer.appendChild(noResults);
        }
    }
} 