const productsData = [
            { name: "Wireless Mouse", img: "mouse.jpeg", price: "$12" },
            { name: "Gaming Keyboard", img: "keyboard.jpeg", price: "$25" },
            { name: "Sports Watch", img: "watch.jpeg", price: "$30" },
            { name: "Bluetooth Speaker", img: "speaker.jpeg", price: "$20" },
        ];

        let cartCount = 0;
        const cartCounter = document.getElementById("cartCount");
        const container = document.getElementById("productContainer");

        function renderProducts() {
            container.innerHTML = "";

            productsData.forEach((p) => {
                container.innerHTML += `
                <div class="product">
                    <img src="${p.img}" alt="${p.name}">
                    <h3 class="product-title">${p.name}</h3>
                    <p>${p.price}</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
                `;
            });

            attachCartEvents();
        }

        function attachCartEvents() {
            document.querySelectorAll(".add-to-cart").forEach((btn) => {
                btn.addEventListener("click", () => {
                    cartCount++;
                    cartCounter.textContent = cartCount;
                });
            });
        }

        
        document.getElementById("searchInput").addEventListener("input", function () {
            const query = this.value.toLowerCase();
            const products = document.querySelectorAll(".product");

            products.forEach((item) => {
                const name = item.querySelector(".product-title").textContent.toLowerCase();
                item.style.display = name.includes(query) ? "block" : "none";
            });
        });

        renderProducts();