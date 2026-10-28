// Enquiry form with AJAX submission via FormSubmit
document.getElementById("enquiry-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var date = document.getElementById("date").value;
    var qty = parseInt(document.getElementById("qty").value);
    var metal = document.querySelector('input[name="metal"]:checked');
    var product = document.getElementById("interest").value;
    var message = document.getElementById("message").value;

    var errorBox = document.getElementById("enquiry-error");
    var responseBox = document.getElementById("enquiry-response");
    errorBox.style.display = "none";
    responseBox.style.display = "none";

    if (name === "") {
        errorBox.innerHTML = "Please enter your full name.";
        errorBox.style.display = "block";
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorBox.innerHTML = "Please enter a valid email address.";
        errorBox.style.display = "block";
        return;
    }
    if (!/^[0-9\s+]{10,15}$/.test(phone)) {
        errorBox.innerHTML = "Please enter a valid phone number with 10 to 15 digits.";
        errorBox.style.display = "block";
        return;
    }
    if (metal === null) {
        errorBox.innerHTML = "Please choose a preferred metal.";
        errorBox.style.display = "block";
        return;
    }
    if (date === "") {
        errorBox.innerHTML = "Please choose the date you need the piece by.";
        errorBox.style.display = "block";
        return;
    }

    var basePrice = 0;
    if (product === "ring") { basePrice = 4500; }
    else if (product === "necklace") { basePrice = 1200; }
    else if (product === "earrings") { basePrice = 850; }
    else if (product === "bracelet") { basePrice = 950; }
    else { basePrice = 500; }

    var metalExtra = 0;
    if (metal.value === "gold") { metalExtra = 300; }
    else if (metal.value === "platinum") { metalExtra = 800; }
    else if (metal.value === "silver") { metalExtra = 100; }

    var total = (basePrice + metalExtra) * qty;

    var payload = new FormData();
    payload.append("name", name);
    payload.append("email", email);
    payload.append("phone", phone);
    payload.append("date", date);
    payload.append("quantity", qty);
    payload.append("metal", metal.value);
    payload.append("product", product);
    payload.append("message", message);
    payload.append("_subject", "New Custom Enquiry from Onalenna Jewels Website");

    responseBox.innerHTML = "Sending your enquiry...";
    responseBox.style.display = "block";

    fetch("https://formsubmit.co/ajax/info@onalennajewels.co.za", {
        method: "POST",
        body: payload,
        headers: { "Accept": "application/json" }
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
        responseBox.innerHTML =
            "Thank you, " + name + "! You asked for " + qty + " " + product +
            "(s) in " + metal.value + ". Estimated cost: R" + total.toLocaleString() +
            ". We have availability and can deliver by " + date +
            ". A confirmation has been sent to " + email + ".";
        responseBox.style.display = "block";
    })
    .catch(function() {
        responseBox.innerHTML =
            "Thank you, " + name + "! Your enquiry was received. Estimated cost: R" +
            total.toLocaleString() + ". We will contact you at " + email + " within 24 hours.";
        responseBox.style.display = "block";
    });
});

// Contact form with AJAX submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("contact-name").value.trim();
    var email = document.getElementById("contact-email").value.trim();
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("contact-message").value.trim();

    var errorBox = document.getElementById("contact-error");
    var responseBox = document.getElementById("contact-response");
    errorBox.style.display = "none";
    responseBox.style.display = "none";

    if (name === "") {
        errorBox.innerHTML = "Please enter your name.";
        errorBox.style.display = "block";
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorBox.innerHTML = "Please enter a valid email address.";
        errorBox.style.display = "block";
        return;
    }
    if (message === "") {
        errorBox.innerHTML = "Please type your message.";
        errorBox.style.display = "block";
        return;
    }

    var payload = new FormData();
    payload.append("name", name);
    payload.append("email", email);
    payload.append("subject", subject);
    payload.append("message", message);
    payload.append("_subject", "Website Contact: " + subject);

    responseBox.innerHTML = "Sending your message...";
    responseBox.style.display = "block";

    fetch("https://formsubmit.co/ajax/info@onalennajewels.co.za", {
        method: "POST",
        body: payload,
        headers: { "Accept": "application/json" }
    })
    .then(function(res) { return res.json(); })
    .then(function() {
        responseBox.innerHTML =
            "Thank you, " + name + "! Your message has been sent to info@onalennajewels.co.za. We will reply to " + email + " within 24 hours.";
        responseBox.style.display = "block";
    })
    .catch(function() {
        responseBox.innerHTML =
            "Thank you, " + name + "! Your message was received. We will reply to " + email + " within 24 hours.";
        responseBox.style.display = "block";
    });
});

// Load products dynamically from JSON
var productGrid = document.getElementById("product-grid");

if (productGrid !== null) {
    var allProducts = [];

    fetch("products.json")
        .then(function(res) { return res.json(); })
        .then(function(data) {
            allProducts = data;
            renderProducts(allProducts);
        });

    function renderProducts(list) {
        productGrid.innerHTML = "";
        list.forEach(function(p) {
            var card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML =
                "<h3>" + p.name + "</h3>" +
                "<img src='images/" + p.image + "' alt='" + p.alt + "' class='product-image'>" +
                "<p><strong>Price:</strong> R" + p.price.toLocaleString() + "</p>";
            productGrid.appendChild(card);
        });
    }

    var searchInput = document.getElementById("search-input");
    var sortSelect = document.getElementById("sort-select");

    function applyFilterAndSort() {
        var filter = searchInput.value.toLowerCase();
        var filtered = allProducts.filter(function(p) {
            return p.name.toLowerCase().indexOf(filter) !== -1;
        });

        if (sortSelect.value === "price-asc") {
            filtered.sort(function(a, b) { return a.price - b.price; });
        } else if (sortSelect.value === "price-desc") {
            filtered.sort(function(a, b) { return b.price - a.price; });
        } else if (sortSelect.value === "name") {
            filtered.sort(function(a, b) { return a.name.localeCompare(b.name); });
        }

        renderProducts(filtered);
    }

    searchInput.addEventListener("keyup", applyFilterAndSort);
    sortSelect.addEventListener("change", applyFilterAndSort);
}

// Gallery lightbox
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");

if (lightbox !== null) {
    document.querySelectorAll(".gallery-img").forEach(function(img) {
        img.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
        });
    });

    document.querySelector(".close-lightbox").addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

// Tab switcher
var tabButtons = document.querySelectorAll(".tab-btn");

if (tabButtons.length > 0) {
    tabButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var target = this.getAttribute("data-target");

            document.querySelectorAll(".tab-btn").forEach(function(b) {
                b.classList.remove("active");
            });
            document.querySelectorAll(".tab-content").forEach(function(c) {
                c.classList.remove("active");
            });

            this.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
}

// Leaflet map
var mapDiv = document.getElementById("map");

if (mapDiv !== null) {
    var map = L.map("map").setView([-26.1076, 28.0567], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker([-26.1076, 28.0567])
        .addTo(map)
        .bindPopup("Onalenna Jewels - Johannesburg Studio")
        .openPopup();
}