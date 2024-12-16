let buttons = document.querySelectorAll("#btnSize");
let selectedButton = null;
let cart = JSON.parse(localStorage.getItem('cart'));
let checkSize = 0;
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (selectedButton !== null) {
            selectedButton.classList.remove("button-size-change");
            selectedButton.classList.add("button-size");
        }
        button.classList.remove("button-size");
        button.classList.add("button-size-change");
        document.getElementById("txtSize").innerHTML = button.value;
        let id = parseInt(document.getElementById("addBag").value);
        cart.forEach(item => {
            if (item.id === id) {
                item.size = button.value;
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        })
        checkSize = 1;
        selectedButton = button;
    });
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
        if (!allFlagsZero()) {
            let pay = document.getElementById("pay");
            pay.style.display = "block";
        }
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
function addToBag() {
    let check = document.getElementById("selectSize")
    if (!checkSize) {
        check.innerHTML = "Please select a size";
    } else {
        check.style.display = "none";
        let body = document.getElementById("cartBody");
        body.style.display = "none";
        if (!allFlagsZero()) {
            let pay = document.getElementById("pay");
            pay.style.display = "block";
        }
        let id = parseInt(document.getElementById("addBag").value);
        cart.forEach(item => {
            if (item.id === id) {
                item.flag = 1;
                item.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        })
        // Gọi hàm để hiển thị giỏ hàng mới
        renderCartItems();
    }
}
// Loop through each item in the cart and create HTML elements to display them
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
function addToWishlist() {
    let body = document.getElementById("wishlistBody");
    body.style.display = "none";
    let add = document.getElementById("addWishlist");
    add.style.display = "none";
    let added = document.getElementById("addedWishlist");
    added.style.display = "block";
    let id = parseInt(document.getElementById("addWishlist").value);
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].wishlist = 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            break;
        }
    }

    rederWishlist();
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
                if (allWishlistsZero()) {
                    let body = document.getElementById("wishlistBody");
                    body.style.display = "block";
                }
                rederWishlist();
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