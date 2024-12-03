// ========================== Header section ==============================

const navOpen = document.querySelector('.mobile-open-btn')
const navClose = document.querySelector('.mobile-close-btn')
const primaryNavigation = document.getElementById('primary-navigation');

navOpen.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible');
    if (visibility === 'false') {
        primaryNavigation.setAttribute('data-visible', true);
        navClose.setAttribute('data-visible', true);
    } else {
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', false);
    }
})

navClose.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible');

    if (visibility === 'true') {
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', false);
    }
})


//  ==================== cart menu ============================

const shoppingBag = document.getElementById('cart-box');
const CartItem = document.getElementById('cart-icon');
const crossBtn = document.getElementById('cross-btn');

const user = document.getElementById('user-box');
const userItem = document.getElementById('user-icon');
const xBtn = document.getElementById('x-btn');

user.addEventListener('click', () => {
    const showUser = userItem.getAttribute('data-visible');

    if (showUser === 'false') {
        userItem.setAttribute('data-visible', true)
    } else {
        userItem.setAttribute('data-visible', false)
    }
}) 

xBtn.addEventListener('click', () => {
    const showUser = userItem.getAttribute('data-visible');

    if (showUser === 'true') {
        userItem.setAttribute('data-visible', false)
    }


})



shoppingBag.addEventListener('click', () => {
    const showCart = CartItem.getAttribute('data-visible');

    if (showCart === 'false') {
        CartItem.setAttribute('data-visible', true)
    } else {
        CartItem.setAttribute('data-visible', false)
    }
})


crossBtn.addEventListener('click', () => {
    const showCart = CartItem.getAttribute('data-visible');

    if (showCart === 'true') {
        CartItem.setAttribute('data-visible', false)
    }


})