window.addEventListener('load', function () {
    // Lấy dữ liệu từ localStorage
    // localStorage.clear();
    var storedData = localStorage.getItem('cart');
    console.log(storedData);
    if (storedData) {
        cart = JSON.parse(storedData);
        console.log("ok")
    } else {
        const cart = [
            {
                img: "../image/sale1.jpg",
                title: "PRIMARY",
                description: "Swing Dress In Cutout Suns, Violet Iris Sun Block",
                quantity: 0,
                price: 33.60,
                size: "",
                flag: 0,
                id: 0,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "14", "15", "25"]
            },
            {
                img: "../image/sale2.jpg",
                title: "PEEK KIDS",
                description: "Roar Coverall, Cream",
                quantity: 0,
                price: 21.60,
                size: "",
                flag: 0,
                id: 1,
                wishlist: 0,
                selectionCriteria: ["01", "02", "03", "07", "08", "09", "10", "11", "16", "23"]
            },
            {
                img: "../image/sale3.jpg",
                title: "MANIERE",
                description: "Sun Print Girls Undershirt 3 Pack, White",
                quantity: 0,
                price: 18.75,
                size: "",
                flag: 0,
                id: 2,
                wishlist: 0,
                selectionCriteria: ["01", "02", "03", "07", "08", "09", "10", "12", "21", "25"]
            },
            {
                img: "../image/sale4.jpg",
                title: "MANIERE",
                description: "Father Print Girls Undershirt 3 Pack, White",
                quantity: 0,
                price: 18.75,
                size: "",
                flag: 0,
                id: 3,
                wishlist: 0,
                selectionCriteria: ["01", "02", "03", "07", "08", "09", "10", "12", "21", "25"]
            },
            {
                img: "../image/sale5.jpg",
                title: "PRIMARY",
                description: "Baby Polo Shortie In Mini Stripe, Green Apple White Stripe",
                quantity: 0,
                price: 18.55,
                size: "",
                flag: 0,
                id: 4,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "13", "17", "21", "24"]
            },
            {
                img: "../image/sale6.jpg",
                title: "PETITE PLUME",
                description: "Petite Plume x Maisonette Scarlett Nightgown, Night Before Christmas",
                quantity: 0,
                price: 45.90,
                size: "",
                flag: 0,
                id: 5,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "14", "21", "22"]
            },
            {
                img: "../image/sale7.jpg",
                title: "BENBEN",
                description: "Cars Print Long Sleeve Pajamas, Multicolors",
                quantity: 0,
                price: 29.40,
                size: "",
                flag: 0,
                id: 6,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "13", "20", "21", "22"]
            },
            {
                img: "../image/sale8.jpg",
                title: "LILA + HATES",
                description: "Palmer Boys'Bubble, Bunny Hope Blue",
                quantity: 0,
                price: 41.60,
                size: "",
                flag: 0,
                id: 7,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "13", "15", "20", "21", "23"]
            },
            {
                img: "../image/sale9.jpg",
                title: "PRIMARY",
                description: "Baby Contton Gauze Henley Tank Shortie In Rainbow Garden Party",
                quantity: 0,
                price: 18.55,
                size: "",
                flag: 0,
                id: 8,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "11", "14", "15", "18", "19", "20", "21", "22", "25"]
            },
            {
                img: "../image/sale10.jpg",
                title: "PRIMARY",
                description: "Baby Dress & Bloomer Set In Garden Party, Cantaloupe Block Print",
                quantity: 0,
                price: 27.65,
                size: "",
                flag: 0,
                id: 9,
                wishlist: 0,
                selectionCriteria: ["01", "02", "03", "07", "08", "09", "10", "11", "18", "19", "25"]
            },
            {
                img: "../image/sale11.jpg",
                title: "PRIMARY",
                description: "Baby Pocket Shortie, Banana Multi Stripe",
                quantity: 0,
                price: 17.15,
                size: "",
                flag: 0,
                id: 10,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "13", "18", "19", "24"]
            },
            {
                img: "../image/sale12.jpg",
                title: "PRIMARY",
                description: "Baby Pocket Shortie, Banana Flamingo Multi Stripe",
                quantity: 0,
                price: 17.15,
                size: "",
                flag: 0,
                id: 11,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "13", "19", "20", "24"]
            },
            {
                img: "../image/sale13.jpg",
                title: "PRIMARY",
                description: "Short Sleeve Explorer Dress, Flamingo Multi Stripe",
                quantity: 0,
                price: 19.60,
                size: "",
                flag: 0,
                id: 12,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "14", "19", "20", "24"]
            },
            {
                img: "../image/sale14.jpg",
                title: "PRIMARY",
                description: "Short Sleeve Explorer Dress, Pistachio Multi Stripe",
                quantity: 0,
                price: 19.60,
                size: "",
                flag: 0,
                id: 13,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "14", "15", "17", "24"]
            },
            {
                img: "../image/sale15.jpg",
                title: "PRIMARY",
                description: "Short Sleeve Explorer Dress, Sunwashed Navy Multi Stripe",
                quantity: 0,
                price: 19.60,
                size: "",
                flag: 0,
                id: 14,
                wishlist: 0,
                selectionCriteria: ["04", "05", "06", "07", "08", "09", "10", "14", "15", "24"]
            }
        ];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
});


function allFlagsZero() {
    let t = cart.every(function (item) {
        return item.flag === 0;
    })
    return t;
}
function allWishlistsZero() {
    let t = cart.every(function (item) {
        return item.wishlist === 0;
    });
    return t;
}
function openCart() {
    if (!allFlagsZero()) {
        let body = document.getElementById("cartBody");
        body.style.display = "none";
        let pay = document.getElementById("pay");
        pay.style.display = "block";
        if (!allFlagsZero()) {
            let pay = document.getElementById("pay");
            pay.style.display = "block";
        }
        // Gọi hàm để hiển thị giỏ hàng mới
        renderCartItems();
    }
}
function openWishlist() {
    if (!allWishlistsZero()) {
        let body = document.getElementById("wishlistBody");
        body.style.display = "none";
        rederWishlist();
    }
}
function renderCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    let displayedItems = new Set();
    let totalAmount = 0;
    cart.forEach(item => {
        if (item.flag === 1 && !displayedItems.has(item.id)) {
            displayedItems.add(item.id);
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('cart-item');

            // Create image element
            const imgElement = document.createElement('img');
            imgElement.src = item.img;
            imgElement.alt = item.title;

            // Append image to item container
            itemContainer.appendChild(imgElement);
            const cartContent = document.createElement('div');
            cartContent.classList.add("cart-content")
            itemContainer.appendChild(cartContent);
            // Create title element
            const titleElement = document.createElement('h2');
            titleElement.textContent = item.title;

            // Append title to item container
            cartContent.appendChild(titleElement);

            // Create description element
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.description;

            // Append description to item container
            cartContent.appendChild(descriptionElement);

            // Create size element
            const sizeElement = document.createElement('p');
            sizeElement.textContent = `Size: ${item.size}`;

            // Append quantity to item container
            cartContent.appendChild(sizeElement);

            // Create quantity element
            const quantityElement = document.createElement('select');
            const quantityLabel = document.createElement('label');
            quantityLabel.textContent = 'Quantity:';
            quantityLabel.style.marginRight = "10px";
            quantityLabel.setAttribute('for', 'quantitySelect'); // Đặt id cho select và liên kết với nhãn
            cartContent.appendChild(quantityLabel);
            for (let i = 1; i <= 10; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                quantityElement.appendChild(option);
            }
            quantityElement.value = item.quantity;

            quantityElement.addEventListener('change', function () {
                item.quantity = parseInt(quantityElement.value);
                // Gọi hàm cập nhật giỏ hàng sau khi số lượng đã thay đổi
                localStorage.setItem('cart', JSON.stringify(cart));
            });
            // Append quantity to item container
            cartContent.appendChild(quantityElement);

            const totalPrice = item.quantity * item.price;
            // Create price element
            const priceElement = document.createElement('p');
            priceElement.textContent = `Price: $${item.price.toFixed(2)}`;

            // Append price to item container
            cartContent.appendChild(priceElement);

            totalAmount += totalPrice;
            // Tạo nút Remove và thêm sự kiện click để xóa sản phẩm khỏi giỏ hàng
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X REMOVE';
            removeButton.classList.add('btn', 'btn-outline-primary');
            removeButton.addEventListener('click', function () {
                item.flag = 0;
                displayedItems.delete(item.id);
                item.quantity = 0;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCartItems();
                if (allFlagsZero()) {
                    let body = document.getElementById("cartBody");
                    body.style.display = "block";
                    let pay = document.getElementById("pay");
                    pay.style.display = "none";
                }
            });
            cartContent.appendChild(removeButton);

            // Append item container to cartItems div

            cartItemsElement.appendChild(itemContainer);
        }
    });
    let totalAmountElement = document.getElementById('totalAmount');
    if (!allFlagsZero()) {
        totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
    } else {
        totalAmountElement.style.display = "none";
    }
}
function rederWishlist() {
    const wishlistItemsElement = document.getElementById('wishlistItems');
    wishlistItemsElement.innerHTML = '';
    let displayedItems = new Set();
    cart.forEach(item => {
        if (item.wishlist === 1 && !displayedItems.has(item.id)) {
            displayedItems.add(item.id);
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('cart-item');

            // Create image element
            const imgElement = document.createElement('img');
            imgElement.src = item.img;
            imgElement.alt = item.title;

            // Append image to item container
            itemContainer.appendChild(imgElement);
            const cartContent = document.createElement('div');
            itemContainer.appendChild(cartContent);
            // Create title element
            const titleElement = document.createElement('h2');
            titleElement.textContent = item.title;

            // Append title to item container
            cartContent.appendChild(titleElement);

            // Create description element
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.description;

            // Append description to item container
            cartContent.appendChild(descriptionElement);

            // Append item container to cartItems div
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X REMOVE';
            removeButton.classList.add('btn', 'btn-outline-primary');
            removeButton.addEventListener('click', function () {
                item.wishlist = 0;
                displayedItems.delete(item.id);
                localStorage.setItem('cart', JSON.stringify(cart));
                rederWishlist();
                if (allWishlistsZero()) {
                    let body = document.getElementById("wishlistBody");
                    body.style.display = "block";
                }
            });
            cartContent.appendChild(removeButton);
            wishlistItemsElement.appendChild(itemContainer);
        }
    });
}
function checkFirstName() {
    let regix = /^[A-Z]+[A-Za-z]*(\s*[A-Z]+[A-Za-z]*)*$/;
    let t = document.getElementById("textFirstName").value;
    let box = document.getElementById("box-modal1");
    let err = document.getElementById("firstNameErr");
    if (regix.test(t) && t.trim() !== "" && t != null) {
        box.style.borderBottom = "2px solid green";
        err.textContent = "";
        return true;
    } else {
        err.style.color = "red";
        err.textContent = "Capitalize the beginning of words";
        box.style.borderBottom = "2px solid red";
        return false;
    }
}
function checkEmail() {
    let regix = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let t = document.getElementById("textEmail").value;
    let box = document.getElementById("box-modal3");
    let err = document.getElementById("emailErr");
    if (regix.test(t) && t.trim() !== "" && t != null) {
        box.style.borderBottom = "2px solid green";
        err.textContent = "";
        return true;
    } else {
        err.style.color = "red";
        err.textContent = "Please enter a valid email";
        box.style.borderBottom = "2px solid red";
        return false;
    }
}
function checkPass() {
    let regix = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let t = document.getElementById("textPass").value;
    let box = document.getElementById("box-modal4");
    let err = document.getElementById("passErr");
    if (regix.test(t) && t.trim() !== "" && t != null) {
        box.style.borderBottom = "2px solid green";
        err.textContent = "";
        return true;
    } else {
        err.style.color = "red";
        err.textContent = "Password atleast 8 charatcer with number, symbol, and capital letter.";
        box.style.borderBottom = "2px solid red";
        return false;
    }
}
function checkRePass() {
    let regix = document.getElementById("textPass").value;;
    let t = document.getElementById("textRePass").value;
    let box = document.getElementById("box-modal5");
    let err = document.getElementById("rePassErr");
    if (regix === t && t.trim() !== "" && t != null) {
        box.style.borderBottom = "2px solid green";
        err.textContent = "";
        return true;
    } else {
        err.style.color = "red";
        err.textContent = "Password don't match";
        box.style.borderBottom = "2px solid red";
        return false;
    }
}
function checkLastName() {
    let regix = /^[A-Z]+[A-Za-z]*(\s*[A-Z]+[A-Za-z]*)*$/;
    let t = document.getElementById("textFirstName").value;
    let box = document.getElementById("box-modal2");
    let err = document.getElementById("lastNameErr");
    if (regix.test(t) && t.trim() !== "" && t != null) {
        box.style.borderBottom = "2px solid green";
        err.textContent = "";
        return true;
    } else {
        err.style.color = "red";
        err.textContent = "Capitalize the beginning of words";
        box.style.borderBottom = "2px solid red";
        return false;
    }
}
const eyeIcons = document.querySelectorAll(".show-hide");
console.log(eyeIcons)
eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            console.log("ok")
            return (pInput.type = "text");
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
        console.log("ko")
    });
});
function signUp() {
    if (checkFirstName() && checkFirstName && checkEmail() && checkPass() && checkRePass()) {
        alert("Sign Up Success");
    } else {
        alert("Sign Up Failed")
    }
}
localStorage.removeItem('searchInput');
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function () {
    localStorage.setItem('searchInput', searchInput.value);
    window.location.href = "../html/sale.html";
});