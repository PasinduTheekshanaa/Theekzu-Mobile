document.addEventListener('DOMContentLoaded', () => {
    // --- Product Data ---
    const products = [
        { id: '17promax', title: 'iPhone 17 Pro Max', price: 385000, img: 'https://onei.lk/wp-content/uploads/2025/05/iPhone-16-Pro-Max-Desert.jpg' },
        { id: '17pro', title: 'iPhone 17 Pro', price: 345000, img: 'https://onei.lk/wp-content/uploads/2025/05/w300h300-4.png' },
        { id: '17', title: 'iPhone 17', price: 275000, img: 'https://onei.lk/wp-content/uploads/2025/05/w300h300-8.png' },
        { id: '16promax', title: 'iPhone 16 Pro Max', price: 335000, img: 'https://onei.lk/wp-content/uploads/2025/05/iPhone-16-Pro-Max-Desert.jpg' },
        { id: '16pro', title: 'iPhone 16 Pro', price: 285000, img: 'https://onei.lk/wp-content/uploads/2025/05/w300h300-4.png' },
        { id: '16', title: 'iPhone 16', price: 235000, img: 'https://onei.lk/wp-content/uploads/2025/05/w300h300-8.png' },
        { id: '15promax', title: 'iPhone 15 Pro Max', price: 275000, img: 'https://onei.lk/wp-content/uploads/2024/11/93-1536x1536-1.webp' },
        { id: '15pro', title: 'iPhone 15 Pro', price: 235000, img: 'https://onei.lk/wp-content/uploads/2024/11/92-1536x1536-1.webp' },
        { id: '15', title: 'iPhone 15', price: 185000, img: 'https://onei.lk/wp-content/uploads/2023/09/pink-22-web.webp' },
        { id: '14promax', title: 'iPhone 14 Pro Max', price: 225000, img: 'https://onei.lk/wp-content/uploads/2024/11/85-1536x1536-1.webp' },
        { id: '14pro', title: 'iPhone 14 Pro', price: 185000, img: 'https://onei.lk/wp-content/uploads/2024/11/83-1536x1536.webp' },
        { id: '14plus', title: 'iPhone 14 Plus', price: 155000, img: 'https://onei.lk/wp-content/uploads/2023/03/iPhone-14-Plus-Blue-Price-in-Srilanka-Apple-Asia-1.webp' },
        { id: '14', title: 'iPhone 14', price: 135000, img: 'https://onei.lk/wp-content/uploads/2023/03/iPhone-14-Blue-Price-in-Srilanka-Apple-Asia-1.webp' },
        { id: '13promax', title: 'iPhone 13 Pro Max', price: 175000, img: 'https://onei.lk/wp-content/uploads/2024/10/75-1536x1536.png.webp' },
        { id: '13pro', title: 'iPhone 13 Pro', price: 155000, img: 'https://onei.lk/wp-content/uploads/2024/10/72-1536x1536.png.webp' },
        { id: '13', title: 'iPhone 13', price: 105000, img: 'https://onei.lk/wp-content/uploads/2024/10/iPhone-13-All-Colours-%EF%A3%BF1.jpg-2.webp' },
        { id: '13mini', title: 'iPhone 13 Mini', price: 95000, img: 'https://onei.lk/wp-content/uploads/2024/10/iPhone-13-All-Colours-%EF%A3%BF1.jpg-2.webp' },
        { id: '12promax', title: 'iPhone 12 Pro Max', price: 138000, img: 'https://onei.lk/wp-content/uploads/2024/10/iphone-12-pro-max-gold-e1755780411244.jpg' },
        { id: '12pro', title: 'iPhone 12 Pro', price: 115000, img: 'https://onei.lk/wp-content/uploads/2024/10/iphone-12-pro-max-gold-e1755780411244.jpg' },
        { id: '12', title: 'iPhone 12', price: 75000, img: 'https://onei.lk/wp-content/uploads/2024/10/Apple-iPhone-12-White.jpg' },
        { id: '11promax', title: 'iPhone 11 Pro Max', price: 95000, img: 'https://onei.lk/wp-content/uploads/2024/09/11-PM-GOLD-e1755858759409.jpg' },
        { id: '11pro', title: 'iPhone 11 Pro', price: 82000, img: 'https://onei.lk/wp-content/uploads/2024/09/11-PRO-MAX-GOLD.png' },
        { id: '11', title: 'iPhone 11', price: 62000, img: 'https://onei.lk/wp-content/uploads/2024/09/11-MINT-1281x1536.webp' },
        { id: 'xsmax', title: 'iPhone XS Max', price: 68000, img: 'https://onei.lk/wp-content/uploads/2024/09/XSMAX-G.jpeg' },
        { id: 'xs', title: 'iPhone XS', price: 55000, img: 'https://onei.lk/wp-content/uploads/2024/09/XS-WHITE.jpeg' },
        { id: 'x', title: 'iPhone X', price: 48000, img: 'https://onei.lk/wp-content/uploads/2024/09/XSMAX-G.jpeg' },
        { id: '8plus', title: 'iPhone 8 Plus', price: 38000, img: 'https://onei.lk/wp-content/uploads/2025/01/website-photo-size-39-1536x1536.webp' },
        { id: 'se2', title: 'iPhone SE 2', price: 28000, img: 'https://onei.lk/wp-content/uploads/2023/03/iPhone-SE-3-Price-in-Sri-lanka-Apple-Asia-Black-1.webp' },
        { id: '8', title: 'iPhone 8', price: 22000, img: 'https://onei.lk/wp-content/uploads/2023/03/iPhone-SE-3-Price-in-Sri-lanka-Apple-Asia-Black-1.webp' },
        { id: '7plus', title: 'iPhone 7 Plus', price: 25000, img: 'https://onei.lk/wp-content/uploads/2025/01/website-photo-size-41-1536x1536.webp' },
        { id: '7', title: 'iPhone 7', price: 14000, img: 'https://onei.lk/wp-content/uploads/2023/07/iPhone-7-Jet-Black-Price-in-Srilanka_1-2.jpg' }
    ];

    // --- State Management ---
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('theekzu_cart')) || [];
    } catch (e) {
        console.error("Cart error:", e);
    }

    // --- Selectors ---
    const elements = {
        hamburger: document.querySelector('.hamburger'),
        navLinks: document.querySelector('.nav-links'),
        modalOverlays: document.querySelectorAll('.modal-overlay'),
        modalCloses: document.querySelectorAll('.modal-close'),
        searchTrigger: document.getElementById('search-trigger'),
        cartTrigger: document.getElementById('cart-trigger'),
        authTrigger: document.getElementById('auth-trigger'),
        searchModal: document.getElementById('search-modal'),
        authModal: document.getElementById('auth-modal'),
        cartDrawer: document.getElementById('cart-drawer'),
        cartClose: document.getElementById('cart-close'),
        productSearch: document.getElementById('product-search'),
        searchResults: document.getElementById('search-results'),
        cartContainer: document.getElementById('cart-items-container'),
        cartTotal: document.getElementById('cart-total-amount'),
        cartCount: document.querySelector('.cart-count'),
        navbar: document.querySelector('.navbar'),
        cartOverlay: document.getElementById('cart-overlay')
    };

    // --- Mobile Nav ---
    if (elements.hamburger) {
        elements.hamburger.onclick = () => {
            elements.navLinks.classList.toggle('active');
            elements.hamburger.textContent = elements.navLinks.classList.contains('active') ? '✕' : '☰';
        };
    }

    // --- Modal Logic ---
    const closeModal = () => {
        elements.modalOverlays.forEach(m => {
            m.classList.remove('active');
            setTimeout(() => { m.style.display = 'none'; }, 400);
        });
        if (elements.cartDrawer) elements.cartDrawer.classList.remove('active');
        if (elements.cartOverlay) elements.cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    const openModal = (modal) => {
        if (!modal) return;
        modal.style.display = 'flex';
        setTimeout(() => { modal.classList.add('active'); }, 10);
        document.body.style.overflow = 'hidden';
    };

    const openCart = () => {
        if (elements.cartDrawer) {
            elements.cartDrawer.classList.add('active');
            if (elements.cartOverlay) elements.cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    if (elements.searchTrigger) elements.searchTrigger.onclick = () => openModal(elements.searchModal);
    if (elements.authTrigger) elements.authTrigger.onclick = () => openModal(elements.authModal);
    if (elements.cartTrigger) elements.cartTrigger.onclick = openCart;
    if (elements.cartClose) elements.cartClose.onclick = closeModal;

    elements.modalCloses.forEach(btn => btn.onclick = closeModal);
    window.onclick = (e) => {
        if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('cart-overlay')) closeModal();
    };

    // --- Search Logic ---
    if (elements.productSearch) {
        elements.productSearch.oninput = (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) { elements.searchResults.innerHTML = ''; return; }
            const filtered = products.filter(p => p.title.toLowerCase().includes(query));
            elements.searchResults.innerHTML = filtered.map(p => `
                <a href="product-details.html?id=${p.id}" class="search-item">
                    <img src="${p.img}" alt="${p.title}">
                    <div>
                        <p style="font-weight:600;">${p.title}</p>
                        <p style="font-size:0.8rem; color:var(--accent-color);">Rs. ${p.price.toLocaleString()}</p>
                    </div>
                </a>
            `).join('');
        };
    }

    // --- Cart UI ---
    const updateCartUI = () => {
        const count = cart.length;
        if (elements.cartCount) elements.cartCount.textContent = count;

        if (!elements.cartContainer) return;

        if (count === 0) {
            elements.cartContainer.innerHTML = `
                <div style="text-align: center; padding: 60px 20px;">
                    <i class="fas fa-shopping-bag" style="font-size: 3rem; color: #eee; margin-bottom: 20px;"></i>
                    <p style="color: var(--secondary-text); font-size: 1.1rem;">Your bag is empty.</p>
                </div>
            `;
            if (elements.cartTotal) elements.cartTotal.textContent = 'Rs. 0';
        } else {
            let total = 0;
            elements.cartContainer.innerHTML = cart.map((item, index) => {
                total += item.price;
                return `
                    <div class="cart-item" style="animation-delay: ${index * 0.1}s;">
                        <img src="${item.img}" alt="${item.title}">
                        <div style="flex:1;">
                            <p style="font-weight:700; font-size: 1.1rem; margin-bottom: 5px;">${item.title}</p>
                            <p style="font-size:1rem; color:var(--accent-color); font-weight: 600;">Rs. ${item.price.toLocaleString()}</p>
                            ${item.selectedStorage ? `<p style="font-size:0.8rem; color:var(--secondary-text);">Storage: ${item.selectedStorage}GB</p>` : ''}
                            <button onclick="removeFromCart(${index})" style="background:none; border:none; color:var(--accent-pink); font-size:0.9rem; cursor:pointer; padding-top:10px; font-weight: 600; text-decoration: underline;">Remove</button>
                        </div>
                    </div>
                `;
            }).join('');
            if (elements.cartTotal) elements.cartTotal.textContent = `Rs. ${total.toLocaleString()}`;
        }
        localStorage.setItem('theekzu_cart', JSON.stringify(cart));
    };

    // --- Checkout Logic ---
    window.proceedToCheckout = () => {
        if (cart.length === 0) {
            alert('Your bag is empty.');
            return;
        }

        const user = JSON.parse(localStorage.getItem('theekzu_current_user'));
        if (user) {
            window.location.href = 'payment.html';
        } else {
            alert('Please sign in to proceed to checkout.');
            // Switch to login tab if not already
            if (authUI.loginTab) authUI.loginTab.click();
            openModal(document.getElementById('auth-modal'));
        }
    };

    // Attach to checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.onclick = window.proceedToCheckout;
    }

    window.addToCart = (id, productData = null) => {
        // If productData is provided (from product-details page), use it directly
        // Otherwise look it up in the products array (from product listing page)
        const product = productData || products.find(p => p.id === id);

        if (product) {
            cart.push({ ...product });
            updateCartUI();

            // Pulse animation for cart count
            if (elements.cartCount) {
                elements.cartCount.style.animation = 'none';
                elements.cartCount.offsetHeight; // trigger reflow
                elements.cartCount.style.animation = 'pulse 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }

            elements.cartDrawer?.classList.add('active');
            if (elements.cartOverlay) elements.cartOverlay.classList.add('active');
        }
    };

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCartUI();
    };

    // --- Animations ---
    const countUp = (el) => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target + suffix;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('stat-number') && !entry.target.classList.contains('counted')) {
                    countUp(entry.target);
                    entry.target.classList.add('counted');
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-up, .stat-number').forEach(el => observer.observe(el));

    // Navbar Scroll Effect
    // Navbar Scroll Effect - Disabled as per request
    // window.addEventListener('scroll', () => {
    //    if (!elements.navbar) return;
    //    if (window.scrollY > 50) {
    //        elements.navbar.style.padding = '15px 60px';
    //        elements.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    //        elements.navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    //    } else {
    //        elements.navbar.style.padding = '25px 60px';
    //        elements.navbar.style.background = 'var(--glass-bg)';
    //        elements.navbar.style.boxShadow = 'none';
    //    }
    // });

    // Auth Tabs Logic & Full Authentication Implementation
    const authUI = {
        loginForm: document.getElementById('login-form'),
        signupForm: document.getElementById('signup-form'),
        authTrigger: document.getElementById('auth-trigger'),
        loginTab: document.querySelector('.auth-tab[data-tab="login"]'),
        signupTab: document.querySelector('.auth-tab[data-tab="signup"]'),
        forms: document.querySelectorAll('.auth-form'),
        tabs: document.querySelectorAll('.auth-tab')
    };

    // Tab Switching
    authUI.tabs.forEach(tab => {
        tab.onclick = () => {
            authUI.tabs.forEach(t => t.classList.remove('active'));
            authUI.forms.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            const target = document.getElementById(`${tab.dataset.tab}-form`);
            if (target) target.classList.add('active');
        };
    });

    // Helper: Validations
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    // 1. Sign Up Logic
    if (authUI.signupForm) {
        authUI.signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = e.target.querySelectorAll('input');
            const name = inputs[0].value.trim();
            const email = inputs[1].value.trim();
            const password = inputs[2].value.trim();

            if (!name || !email || !password) return alert('Please fill in all fields.');
            if (!validateEmail(email)) return alert('Please enter a valid email.');

            let users = JSON.parse(localStorage.getItem('theekzu_users')) || [];

            if (users.find(u => u.email === email)) {
                alert('Account already exists! Please login instead.');
                authUI.loginTab.click();
                return;
            }

            // Create new user
            users.push({ name, email, password });
            localStorage.setItem('theekzu_users', JSON.stringify(users));

            alert('Account created successfully! Please login with your new credentials.');
            e.target.reset();
            authUI.loginTab.click();
        });
    }

    // 2. Login Logic
    if (authUI.loginForm) {
        authUI.loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = e.target.querySelectorAll('input');
            const email = inputs[0].value.trim();
            const password = inputs[1].value.trim();

            let users = JSON.parse(localStorage.getItem('theekzu_users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Login Success
                localStorage.setItem('theekzu_current_user', JSON.stringify(user));
                updateAuthUI(user);
                closeModal();
                alert(`Welcome back, ${user.name}!`);
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }

    // 3. Check Auth State UI
    const updateAuthUI = (user) => {
        if (!authUI.authTrigger) return;

        if (user) {
            // User is logged in
            authUI.authTrigger.innerHTML = `<i class="fas fa-user-check" style="color: #4ade80;"></i>`;
            authUI.authTrigger.title = `Logged in as ${user.name}`;

            // Override click to show logout option
            authUI.authTrigger.onclick = (e) => {
                e.stopPropagation();
                if (confirm(`Hi ${user.name}, do you want to logout?`)) {
                    localStorage.removeItem('theekzu_current_user');
                    window.location.reload();
                }
            };
        } else {
            // User is guest
            authUI.authTrigger.innerHTML = `<i class="fas fa-user"></i>`;
            authUI.authTrigger.title = "Login / Sign Up";
            authUI.authTrigger.onclick = () => openModal(document.getElementById('auth-modal'));
        }
    }

    // Initialize
    const currentUser = JSON.parse(localStorage.getItem('theekzu_current_user'));
    if (currentUser) updateAuthUI(currentUser);

    // --- Global Function Exports ---
    window.updateCartUI = updateCartUI;

    // Initial UI Sync
    updateCartUI();
});
