const craftsmenData = [
    {
        id: 1,
        name: "Murari",
        craft: "Potter",
        location: "Soun Kheragarh, Agra, Uttar Pradesh",
        priceRange: "₹50 - ₹300",
        phone: "+91 6397560576",
        image: "attached_assets/stock_images/potter.jpg"
    },
    {
        id: 2,
        name: "Shivani",
        craft: "Crochet & Knitting",
        location: "Soun Kheragarh, Agra, Uttar Pradesh",
        priceRange: "₹200 - ₹800",
        phone: "+91 9760089757",
        image: "attached_assets/stock_images/crochet.jpg"
    },
    {
        id: 3,
        name: "Asha",
        craft: "Handicrafts & Embroidery",
        location: "Soun Kheragarh, Agra, Uttar Pradesh",
        priceRange: "₹150 - ₹1200",
        phone: "+91 8395003242",
        image: "attached_assets/stock_images/home_decor.jpg"
    },
    {
        id: 4,
        name: "Lalitesh",
        craft: "Handicrafts & Embroidery",
        location: "Soun Cheet Kheragarh, Agra, Uttar Pradesh",
        priceRange: "₹300 - ₹1500",
        phone: "+91 6396443021",
        image: "attached_assets/stock_images/handicrafts.jpg"
    }
];

let filteredCraftsmen = [...craftsmenData];

function createCraftsmanCard(craftsman) {
    const card = document.createElement('div');
    card.className = 'craftsman-card';
    
    card.innerHTML = `
        <div class="card-content">
            <div class="card-image-container">
                <img src="${craftsman.image}" alt="${craftsman.name}" class="card-image">
            </div>
            <div class="card-info">
                <h2 class="craftsman-name">${craftsman.name}</h2>
                <span class="craft-type">${craftsman.craft}</span>
                <div class="location">${craftsman.location}</div>
                <div class="price-range">
                    Price Range: <span class="price-amount">${craftsman.priceRange}</span>
                </div>
                <div class="card-buttons">
                    <button class="btn btn-primary" onclick="contactArtisan('${craftsman.name}', '${craftsman.phone}')">
                        Contact
                    </button>
                    <button class="btn btn-secondary" onclick="viewDetails(${craftsman.id})">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function renderCraftsmen(craftsmen) {
    const grid = document.getElementById('craftsmenGrid');
    const noResults = document.getElementById('noResults');
    
    grid.innerHTML = '';
    
    if (craftsmen.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        
        craftsmen.forEach(craftsman => {
            const card = createCraftsmanCard(craftsman);
            grid.appendChild(card);
        });
    }
}

function filterCraftsmen(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    
    if (term === '') {
        filteredCraftsmen = [...craftsmenData];
    } else {
        filteredCraftsmen = craftsmenData.filter(craftsman => {
            return craftsman.name.toLowerCase().includes(term) ||
                   craftsman.craft.toLowerCase().includes(term) ||
                   craftsman.location.toLowerCase().includes(term);
        });
    }
    
    renderCraftsmen(filteredCraftsmen);
}

function contactArtisan(name, phone) {
    alert(`Contacting ${name}\n\nPhone: ${phone}\n\nIn a full application, this would open a contact form or messaging interface.`);
}

function viewDetails(id) {
    const craftsman = craftsmenData.find(c => c.id === id);
    if (craftsman) {
        alert(`Viewing details for ${craftsman.name}\n\nCraft: ${craftsman.craft}\nLocation: ${craftsman.location}\nPrice Range: ${craftsman.priceRange}\n\nIn a full application, this would navigate to a detailed profile page.`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCraftsmen(craftsmenData);
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        filterCraftsmen(e.target.value);
    });
});
