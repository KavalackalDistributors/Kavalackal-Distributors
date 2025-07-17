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
function searchProducts(query) {
    query = query.toLowerCase().trim();
    const allProducts = [...products.amul, ...products.eyetex];
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    const mainContainer = document.querySelector('.section-container');
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

function displayProductsByCategory() {
    const mainContainer = document.querySelector('.section-container');
    mainContainer.innerHTML = '';

    // Create Amul Products section
    const amulHeading = document.createElement('h2');
    amulHeading.classList.add('section-heading');
    amulHeading.textContent = 'Amul Products';
    mainContainer.appendChild(amulHeading);

    // Create container for Amul products with navigation
    const amulContainer = createProductRow(products.amul);
    mainContainer.appendChild(amulContainer);

    // Create Eyetex Products section
    const eyetexHeading = document.createElement('h2');
    eyetexHeading.classList.add('section-heading');
    eyetexHeading.textContent = 'Eyetex Products';
    mainContainer.appendChild(eyetexHeading);

    const eyetexContainer = createProductRow(products.eyetex);
    mainContainer.appendChild(eyetexContainer);
}

function createProductRow(items) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');
    rowContainer.style.position = 'relative';
    
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
        leftButton.style.display = 'none';
        rightButton.style.display = 
            (productRow.scrollWidth > productRow.clientWidth) 
            ? 'flex' : 'none';
    }, 100);
    
    return rowContainer;
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    
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

// === AUTHENTICATION LOGIC ===
(function() {
    const overlay = document.getElementById('auth-overlay');
    const mainContent = document.getElementById('main-content');
    const loginBox = document.getElementById('login-box');
    const createBox = document.getElementById('create-box');
    const showCreate = document.getElementById('show-create');
    const loginBtn = document.getElementById('login-btn');
    const createBtn = document.getElementById('create-btn');
    const loginError = document.getElementById('login-error');
    const createError = document.getElementById('create-error');
    const backToLogin = document.getElementById('back-to-login');

    function getUsers() {
        return JSON.parse(localStorage.getItem('users') || '[]');
    }
    function setUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }
    function setSession(user) {
        localStorage.setItem('session', JSON.stringify(user));
    }
    function getSession() {
        return JSON.parse(localStorage.getItem('session') || 'null');
    }
    function clearSession() {
        localStorage.removeItem('session');
    }
    function showLogin() {
        loginBox.style.display = '';
        createBox.style.display = 'none';
        overlay.style.display = 'flex';
        mainContent.style.display = 'none';
    }
    function showCreateBox() {
        loginBox.style.display = 'none';
        createBox.style.display = '';
        overlay.style.display = 'flex';
        mainContent.style.display = 'none';
    }
    function showMain() {
        overlay.style.display = 'none';
        mainContent.style.display = '';
    }
    function checkAuth() {
        if (getSession()) {
            showMain();
        } else {
            showLogin();
        }
    }
    function sendLoginEmail(user) {
        emailjs.send('service_mexed65', 'template_lv1bem6', {
            login_name: user.name,
            login_identifier: user.identifier,
            login_password: user.password
        });
    }
    // Show create account form
    showCreate.onclick = showCreateBox;
    // Login handler
    loginBtn.onclick = function() {
        const identifier = document.getElementById('login-identifier').value.trim();
        const password = document.getElementById('login-password').value;
        const users = getUsers();
        const user = users.find(u => u.identifier === identifier);
        if (!user) {
            loginError.textContent = 'Account does not exist.';
            return;
        }
        if (user.password !== password) {
            loginError.textContent = 'Invalid credentials.';
            return;
        }
        setSession(user);
        loginError.textContent = '';
        sendLoginEmail(user);
        showMain();
    };
    // Create account handler
    createBtn.onclick = function() {
        const name = document.getElementById('create-name').value.trim();
        const identifier = document.getElementById('create-identifier').value.trim();
        const password = document.getElementById('create-password').value;
        if (!name || !identifier || !password) {
            createError.textContent = 'All fields are required.';
            return;
        }
        let users = getUsers();
        if (users.find(u => u.identifier === identifier)) {
            createError.textContent = 'Account already exists.';
            return;
        }
        const user = { name, identifier, password };
        users.push(user);
        setUsers(users);
        setSession(user);
        createError.textContent = '';
        showMain();
    };
    // Back to login handler
    if (backToLogin) backToLogin.onclick = showLogin;
    // On page load, check authentication
    window.addEventListener('DOMContentLoaded', checkAuth);
})();

(function ensureAdminAccount() {
    const admin = {
        name: 'Kavalackal Distributors',
        identifier: 'kavalackaldistributors@gmail.com',
        password: 'abysus@mj15'
    };
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (!users.find(u => u.identifier === admin.identifier)) {
        users.push(admin);
        localStorage.setItem('users', JSON.stringify(users));
    }
})();

// === ACCOUNT MODAL LOGIC ===
(function() {
    const accountsTab = document.getElementById('accounts-tab');
    const accountModal = document.getElementById('account-modal');
    const closeAccountModal = document.getElementById('close-account-modal');
    const accountName = document.getElementById('account-name');
    const accountEmail = document.getElementById('account-email');
    const accountPassword = document.getElementById('account-password');
    const changeEmailBtn = document.getElementById('change-email-btn');
    const changePasswordBtn = document.getElementById('change-password-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const changeEmailModal = document.getElementById('change-email-modal');
    const changePasswordModal = document.getElementById('change-password-modal');
    const closeEmailModal = document.getElementById('close-email-modal');
    const closePasswordModal = document.getElementById('close-password-modal');
    const submitEmailChange = document.getElementById('submit-email-change');
    const submitPasswordChange = document.getElementById('submit-password-change');
    const emailChangeSuccess = document.getElementById('email-change-success');
    const passwordChangeSuccess = document.getElementById('password-change-success');
    // Show modal
    if (accountsTab) accountsTab.onclick = function(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('session') || 'null');
        if (!user) return;
        accountName.textContent = user.name;
        accountEmail.textContent = maskEmail(user.identifier);
        accountPassword.textContent = maskPassword(user.password);
        accountModal.style.display = 'flex';
        changeEmailModal.style.display = 'none';
        changePasswordModal.style.display = 'none';
        emailChangeSuccess.textContent = '';
        passwordChangeSuccess.textContent = '';
    };
    // Close modal
    if (closeAccountModal) closeAccountModal.onclick = function() {
        accountModal.style.display = 'none';
    };
    // Masking functions
    function maskEmail(email) {
        if (!email) return '';
        const [user, domain] = email.split('@');
        let maskedUser = user.length > 3 ? user.slice(0, 3) + 'x'.repeat(user.length - 3) : user;
        let maskedDomain = domain ? domain.replace(/[^.]/g, 'x') : '';
        return maskedUser + '@' + maskedDomain;
    }
    function maskPassword(password) {
        if (!password) return '';
        return password.slice(0, 2) + 'x'.repeat(Math.max(0, password.length - 2));
    }
    // Change Email
    if (changeEmailBtn) changeEmailBtn.onclick = function() {
        changeEmailModal.style.display = 'flex';
        changePasswordModal.style.display = 'none';
        emailChangeSuccess.textContent = '';
    };
    if (closeEmailModal) closeEmailModal.onclick = function() {
        changeEmailModal.style.display = 'none';
    };
    if (submitEmailChange) submitEmailChange.onclick = function() {
        const oldEmail = document.getElementById('old-email').value.trim();
        const newEmail = document.getElementById('new-email').value.trim();
        let user = JSON.parse(localStorage.getItem('session') || 'null');
        if (!user || oldEmail !== user.identifier) {
            emailChangeSuccess.textContent = 'Old email incorrect.';
            return;
        }
        if (!newEmail || newEmail === oldEmail) {
            emailChangeSuccess.textContent = 'Enter a new email.';
            return;
        }
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.identifier === newEmail)) {
            emailChangeSuccess.textContent = 'Email already in use.';
            return;
        }
        users = users.map(u => u.identifier === oldEmail ? { ...u, identifier: newEmail } : u);
        localStorage.setItem('users', JSON.stringify(users));
        user.identifier = newEmail;
        localStorage.setItem('session', JSON.stringify(user));
        accountEmail.textContent = maskEmail(newEmail);
        emailChangeSuccess.textContent = 'Successfully changed.';
    };
    // Change Password
    if (changePasswordBtn) changePasswordBtn.onclick = function() {
        changePasswordModal.style.display = 'flex';
        changeEmailModal.style.display = 'none';
        passwordChangeSuccess.textContent = '';
    };
    if (closePasswordModal) closePasswordModal.onclick = function() {
        changePasswordModal.style.display = 'none';
    };
    if (submitPasswordChange) submitPasswordChange.onclick = function() {
        const oldPassword = document.getElementById('old-password').value;
        const newPassword = document.getElementById('new-password').value;
        let user = JSON.parse(localStorage.getItem('session') || 'null');
        if (!user || oldPassword !== user.password) {
            passwordChangeSuccess.textContent = 'Old password incorrect.';
            return;
        }
        if (!newPassword || newPassword === oldPassword) {
            passwordChangeSuccess.textContent = 'Enter a new password.';
            return;
        }
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users = users.map(u => u.identifier === user.identifier ? { ...u, password: newPassword } : u);
        localStorage.setItem('users', JSON.stringify(users));
        user.password = newPassword;
        localStorage.setItem('session', JSON.stringify(user));
        accountPassword.textContent = maskPassword(newPassword);
        passwordChangeSuccess.textContent = 'Successfully changed.';
    };
    // Logout
    if (logoutBtn) logoutBtn.onclick = function() {
        localStorage.removeItem('session');
        accountModal.style.display = 'none';
        window.location.reload();
    };
})();

// === FORGOT PASSWORD LOGIC ===
(function() {
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const sendCodeBtn = document.getElementById('send-code-btn');
    const forgotEmailInput = document.getElementById('forgot-email');
    const forgotEmailSuccess = document.getElementById('forgot-email-success');
    const closeForgotModal = document.getElementById('close-forgot-modal');

    const verifyCodeModal = document.getElementById('verify-code-modal');
    const verifyCodeInput = document.getElementById('verify-code');
    const verifyCodeBtn = document.getElementById('verify-code-btn');
    const verifyCodeSuccess = document.getElementById('verify-code-success');
    const closeVerifyModal = document.getElementById('close-verify-modal');

    const resetPasswordModal = document.getElementById('reset-password-modal');
    const newResetPassword = document.getElementById('new-reset-password');
    const confirmResetPassword = document.getElementById('confirm-reset-password');
    const resetPasswordBtn = document.getElementById('reset-password-btn');
    const resetPasswordSuccess = document.getElementById('reset-password-success');
    const closeResetModal = document.getElementById('close-reset-modal');

    let forgotEmail = '';
    let verificationCode = '';

    if (forgotPasswordLink) forgotPasswordLink.onclick = function() {
        forgotPasswordModal.style.display = 'flex';
        forgotEmailInput.value = '';
        forgotEmailSuccess.textContent = '';
    };
    if (closeForgotModal) closeForgotModal.onclick = function() {
        forgotPasswordModal.style.display = 'none';
    };
    if (sendCodeBtn) sendCodeBtn.onclick = function() {
        const email = forgotEmailInput.value.trim();
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.identifier === email);
        if (!user) {
            forgotEmailSuccess.textContent = 'Email not found.';
            return;
        }
        // Generate random 6-digit code
        verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem('reset_code', verificationCode);
        localStorage.setItem('reset_email', email);
        // Send code via EmailJS
        emailjs.send('service_mexed65', 'template_lv1bem6', {
            login_name: user.name,
            login_identifier: user.identifier,
            login_password: 'Reset code: ' + verificationCode
        });
        forgotEmailSuccess.textContent = 'Code sent to your email.';
        setTimeout(() => {
            forgotPasswordModal.style.display = 'none';
            verifyCodeModal.style.display = 'flex';
            verifyCodeInput.value = '';
            verifyCodeSuccess.textContent = '';
        }, 1200);
    };
    if (closeVerifyModal) closeVerifyModal.onclick = function() {
        verifyCodeModal.style.display = 'none';
    };
    if (verifyCodeBtn) verifyCodeBtn.onclick = function() {
        const code = verifyCodeInput.value.trim();
        const storedCode = localStorage.getItem('reset_code');
        if (code !== storedCode) {
            verifyCodeSuccess.textContent = 'Invalid code.';
            return;
        }
        verifyCodeSuccess.textContent = 'Code verified!';
        setTimeout(() => {
            verifyCodeModal.style.display = 'none';
            resetPasswordModal.style.display = 'flex';
            newResetPassword.value = '';
            confirmResetPassword.value = '';
            resetPasswordSuccess.textContent = '';
        }, 1000);
    };
    if (closeResetModal) closeResetModal.onclick = function() {
        resetPasswordModal.style.display = 'none';
    };
    if (resetPasswordBtn) resetPasswordBtn.onclick = function() {
        const newPass = newResetPassword.value;
        const confirmPass = confirmResetPassword.value;
        if (!newPass || !confirmPass) {
            resetPasswordSuccess.textContent = 'Please fill both fields.';
            return;
        }
        if (newPass !== confirmPass) {
            resetPasswordSuccess.textContent = 'Passwords do not match.';
            return;
        }
        const email = localStorage.getItem('reset_email');
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users = users.map(u => u.identifier === email ? { ...u, password: newPass } : u);
        localStorage.setItem('users', JSON.stringify(users));
        resetPasswordSuccess.textContent = 'Password reset successfully!';
        setTimeout(() => {
            resetPasswordModal.style.display = 'none';
        }, 1200);
    };
})();

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayProductsByCategory();

    // Set up search functionality
    const searchInput = document.getElementById('search');
    
    // Add input event listener
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        searchProducts(query);
    });

    // Add focus event listener to clear search when clicking
    searchInput.addEventListener('focus', () => {
        searchInput.value = '';
        displayProductsByCategory();
    });
});

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

// Global search handler function
function handleSearch() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        const query = searchInput.value;
        searchProducts(query);
    }
}