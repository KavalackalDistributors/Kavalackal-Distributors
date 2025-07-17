// Debounce function to prevent too many searches
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    
    if (!searchInput) {
        console.error('Search input not found');
        return;
    }

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

    // Add input event listener
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        searchProducts(query);
    });

    // Add focus event listener
    searchInput.addEventListener('focus', () => {
        searchInput.value = '';
        displayProductsByCategory();
    });

    // Add click event listener
    searchInput.addEventListener('click', () => {
        searchInput.value = '';
        displayProductsByCategory();
    });
}); 