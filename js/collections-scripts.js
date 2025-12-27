// ===== COLLECTIONS PAGE JAVASCRIPT =====

// Initialize collections
let currentProducts = [...window.products];
let displayedCount = 8;
const productsPerLoad = 4;

// Display collections
function displayCollections() {
    const grid = document.getElementById('collectionsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!grid) return;
    
    // Clear grid
    grid.innerHTML = '';
    
    // Get products to display
    const productsToDisplay = currentProducts.slice(0, displayedCount);
    
    if (productsToDisplay.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #2c3e50; margin-bottom: 10px;">No Products Found</h3>
                <p style="color: #7f8c8d;">Try adjusting your filters to find what you're looking for.</p>
                <button class="cta-btn" onclick="clearAllFilters()" style="margin-top: 20px;">
                    Clear All Filters
                </button>
            </div>
        `;
        if (resultsCount) {
            resultsCount.textContent = "0 products found";
        }
        document.getElementById('loadMoreBtn').style.display = 'none';
        return;
    }
    
    // Display products
    productsToDisplay.forEach(item => {
        const card = document.createElement('div');
        card.className = 'collection-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'">
            <div class="collection-info">
                <h3>${item.name}</h3>
                <div class="collection-price">KES ${item.price.toLocaleString()}</div>
                <div class="collection-sizes">Size: ${item.size} | ${item.category} tile</div>
                <button class="buy-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
                <a href="product.html?id=${item.id}" class="view-details" style="display: block; margin-top: 10px;">View Details →</a>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Update results count
    if (resultsCount) {
        resultsCount.textContent = `${productsToDisplay.length} of ${currentProducts.length} products`;
    }
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (displayedCount >= currentProducts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// Apply filters
function applyFilters() {
    const countryFilters = Array.from(document.querySelectorAll('input[name="country"]:checked')).map(cb => cb.value);
    const categoryFilters = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const sizeFilters = Array.from(document.querySelectorAll('input[name="size"]:checked')).map(cb => cb.value);
    const priceRange = parseInt(document.getElementById('priceRange').value);
    
    // Reset displayed count
    displayedCount = 8;
    
    // Filter products
    currentProducts = window.products.filter(product => {
        // Country filter
        if (countryFilters.length > 0 && !countryFilters.includes(product.country)) {
            return false;
        }
        
        // Category filter
        if (categoryFilters.length > 0 && !categoryFilters.includes(product.category)) {
            return false;
        }
        
        // Size filter
        if (sizeFilters.length > 0 && !sizeFilters.includes(product.size)) {
            return false;
        }
        
        // Price filter
        if (product.price > priceRange) {
            return false;
        }
        
        return true;
    });
    
    // Reset sort to default
    document.getElementById('sortBy').value = 'default';
    
    // Update price display
    document.getElementById('currentPrice').textContent = priceRange.toLocaleString();
    
    // Display filtered products
    displayCollections();
    
    // Update active size buttons
    updateActiveSizeButtons();
}

// Clear all filters
function clearAllFilters() {
    // Uncheck all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    // Check Kenya by default
    const kenyaCheckbox = document.querySelector('input[value="kenya"]');
    if (kenyaCheckbox) kenyaCheckbox.checked = true;
    
    // Reset price range
    const priceSlider = document.getElementById('priceRange');
    if (priceSlider) priceSlider.value = 5000;
    document.getElementById('currentPrice').textContent = '5,000';
    
    // Reset sort
    document.getElementById('sortBy').value = 'default';
    
    // Reset products
    currentProducts = [...window.products];
    displayedCount = 8;
    
    // Reset size buttons
    document.querySelectorAll('.size-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.size-filter-btn[data-size="all"]').classList.add('active');
    
    // Display all products
    displayCollections();
}

// Sort products
function sortProducts() {
    const sortBy = document.getElementById('sortBy').value;
    
    switch(sortBy) {
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'newest':
            // Assuming newer products have higher IDs
            currentProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            // Default sorting (original order)
            currentProducts = [...window.products];
            applyFilters(); // Reapply filters to maintain filter order
            return;
    }
    
    displayCollections();
}

// Load more products
function loadMoreProducts() {
    displayedCount += productsPerLoad;
    displayCollections();
}

// Update active size filter buttons
function updateActiveSizeButtons() {
    const sizeButtons = document.querySelectorAll('.size-filter-btn');
    const activeSizes = Array.from(document.querySelectorAll('input[name="size"]:checked')).map(cb => cb.value);
    
    sizeButtons.forEach(btn => {
        const size = btn.getAttribute('data-size');
        if (size === 'all') {
            btn.classList.toggle('active', activeSizes.length === 0);
        } else {
            btn.classList.toggle('active', activeSizes.includes(size));
        }
    });
}

// Size quick filter
function setupSizeQuickFilters() {
    document.querySelectorAll('.size-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const size = this.getAttribute('data-size');
            
            // Update all size buttons
            document.querySelectorAll('.size-filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            // Handle "all" selection
            if (size === 'all') {
                // Uncheck all size checkboxes
                document.querySelectorAll('input[name="size"]').forEach(cb => {
                    cb.checked = false;
                });
            } else {
                // Check only this size
                document.querySelectorAll('input[name="size"]').forEach(cb => {
                    cb.checked = (cb.value === size);
                });
            }
            
            // Apply filters
            applyFilters();
        });
    });
}

// Initialize collections page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('collectionsGrid')) {
        displayCollections();
        setupSizeQuickFilters();
        
        // Set up event listeners
        const priceSlider = document.getElementById('priceRange');
        if (priceSlider) {
            priceSlider.addEventListener('input', function() {
                document.getElementById('currentPrice').textContent = 
                    parseInt(this.value).toLocaleString();
            });
        }
        
        // Apply initial filters if URL has category parameter
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        if (categoryParam) {
            const categoryCheckbox = document.querySelector(`input[value="${categoryParam}"]`);
            if (categoryCheckbox) {
                categoryCheckbox.checked = true;
                applyFilters();
            }
        }
    }
});