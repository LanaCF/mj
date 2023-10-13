const doc = document;

const logo = doc.querySelector('.logo');
const arrLogo = [
    {
        link: '#/Home',
        img: 'img/mj.png',
        text: 'MICHAEL JACKSON'
    }
];

logo.innerHTML = `
    <a href="${arrLogo[0].link}" class="logo-link">
        <img src="${arrLogo[0].img}" alt="" class="logo-img">
        <span class="title-site">
            ${arrLogo[0].text}
        </span>
    </a>
`;



const mjImg = doc.querySelector('.mj-img');
const arrMj = ['img/MichaelJackson.png'];
mjImg.innerHTML = `<img src="${arrMj}" alt="" class="mj">`



const menu = doc.querySelector('ul');
const arrMenu = ['HOME', 'HISTORY', 'COLLECTION'];

const siteMenu = arrMenu.map(function(item) {
    return `<li class="menu-items">${item}</li>`
}).join('');

menu.innerHTML = siteMenu;



const titleMain = doc.querySelector('.title-page');
titleMain.innerHTML = `
    <p class="title-collection">COLLECTION</p>
`;



const card = doc.querySelector('.main');
const arrCard = [
    {
        img: 'img/mj_1.jpg',
        title: 'Jackson Five Signed Album By All 5. PSA Certified Michael Jackson Autographed',
        price: 'US $4,399.99',
        shipping: 'Shipping:',
        city: 'Somerville, New Jersey, United States',
        delivery: 'Delivery:',
        type: 'Varies',
        returns: 'Returns:',
        circs: 'Seller does not accept returns.'
    },

    {
        img: 'img/mj_2.jpg',
        title: 'MICHAEL JACKSON bad LP EX/EX- 450290 1, vinyl, album, gatefold, with lyric inner',
        price: 'US $59.54',
        shipping: 'Shipping:',
        city: 'Wrexham, United Kingdom',
        delivery: 'Delivery:',
        type: 'Estimated between Fri, Oct 27 and Fri, Nov 3 to 36000',
        returns: 'Returns:',
        circs: '30 days returns. Buyer pays for return shipping.'
    },

    {
        img: 'img/mj_3.jpg',
        title: 'Vintage Michael Jackson T shirt M',
        price: 'US $24.50',
        shipping: 'Shipping:',
        city: 'Johnstown, Ohio, United States',
        delivery: 'Delivery:',
        type: 'Varies',
        returns: 'Returns:',
        circs: '30 days returns. Buyer pays for return shipping.'
    }
];

const siteCard = arrCard.map(function(item) {
    return `
    <div class="card">
        <div class="card-photo">
            <img src="${item.img}" alt="" class="card-img">
        </div>

        <div class="card-block">
            <a href="#" class="card-title">${item.title}</a>

            <p class="card-price">${item.price}</p>

            <p class="card-info">
                <span>${item.shipping}</span> ${item.city}
            </p>

            <p class="card-info">
                <span>${item.delivery}</span> ${item.type}
            </p>

            <p class="card-info">
                <span>${item.returns}</span> ${item.circs}
            </p>
        </div>
    </div>
    `
}).join('');

card.innerHTML = siteCard;


