// SLIDER 
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}


function DropOffer() {
    let show = document.getElementById('popOffer');
    if (show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    };
}

function DropOff() {
    let btttn = document.getElementById('cross');
    let show = document.getElementById('popOffer');

    if (show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    };
}

let AddCartOn = true;
function Cart() {
    let header3 = document.getElementById('header3');
    let content = document.getElementById('mainBody');
    let Mobile = document.getElementById('mobile');

    if (AddCartOn) {
        header3.classList.add('Hiding');
        content.classList.add('Hiding');
        Mobile.classList.add('Hiding');
        AddCartOn = false;
    }
    else {
        header3.classList.remove('Hiding');
        content.classList.remove('Hiding');
        Mobile.classList.remove('Hiding');
        AddCartOn = true;
    }
}

function AddCart(phones) {
    try {
        console.log("Added to Cart:", phones.brand, "| Price:", phones.price);
    } catch (error) {
        console.log("Error in Adding element");
    }
}



document.addEventListener('DOMContentLoaded', function () {

    const Container = document.getElementById('Display1-content');

    async function mobileDisplay() {
        try {
            const response = await fetch('data/phones.json');
            const data = await response.json();

            data.mobile_phones.forEach(phones => {
                const mainBox = document.createElement('div');
                mainBox.className = 'Display-Card';

                const box1 = document.createElement('div');
                box1.className = 'Display-Card-box';

                const para = document.createElement('p');
                para.className = 'Display-Card-box-Sale';
                para.textContent = 'Sale';

                const phoneImg = document.createElement('img');
                phoneImg.className = 'Display-Card-box-img';
                phoneImg.src = phones.imgSrc;
                phoneImg.alt = phones.name;

                box1.appendChild(para);
                box1.appendChild(phoneImg);

                const box2 = document.createElement('div');
                box2.className = 'Display-Card-box2';

                const title = document.createElement('h4');
                title.className = 'Display-Card-box-title';
                title.textContent = phones.brand;

                const subTitle = document.createElement('h6');
                subTitle.className = 'Display-Card-box-sub';
                subTitle.textContent = `Price ${phones.price} | Sale price : ${phones.sale}`;

                box2.appendChild(title);
                box2.appendChild(subTitle);

                const box3 = document.createElement('div');
                box3.className = 'Display-Card-box3';

                const addToCartButton = document.createElement('button');
                addToCartButton.textContent = 'Add to Cart';

                box3.appendChild(addToCartButton);

                mainBox.appendChild(box1);
                mainBox.appendChild(box2);
                mainBox.appendChild(box3);

                Container.appendChild(mainBox);

                let checkbutton = 1;
                addToCartButton.addEventListener('click', function () {
                    if (checkbutton) {
                        AddCart(phones);
                        addToCartButton.style.backgroundColor = 'green';
                        addToCartButton.style.color = 'white';
                        addToCartButton.textContent = 'Added';
                        showToast("Added Successfully", "success", 5000);
                        addToCartButton.style.opacity = 1;
                        checkbutton = 0;
                    }
                    else {
                        addToCartButton.style.backgroundColor = 'skyblue';
                        addToCartButton.textContent = 'Add to cart';
                        showToast("Removed", "warning", 5000);
                        checkbutton = 1;
                    }
                });
            });


        } catch (error) {
            console.log("Error in Fetching");
        }
    }

    mobileDisplay();
});

const Container1 = document.getElementById('Display2-content');



async function WatchesDisplay() {
    try {
        const response = await fetch('data/watches.json');
        const data = await response.json();

        data.watches.forEach(watch => {
            const mainBox = document.createElement('div');
            mainBox.className = 'Display-Card';

            const box1 = document.createElement('div');
            box1.className = 'Display-Card-box';

            const para = document.createElement('p');
            para.className = 'Display-Card-box-Sale';
            para.textContent = 'Sale';

            const WatchImg = document.createElement('img');
            WatchImg.className = 'Display-Card-box-img';
            WatchImg.src = watch.imgSrc;
            WatchImg.alt = watch.name;

            box1.appendChild(para);
            box1.appendChild(WatchImg);

            const box2 = document.createElement('div');
            box2.className = 'Display-Card-box2';

            const title = document.createElement('h4');
            title.className = 'Display-Card-box-title';
            title.textContent = watch.brand;

            const subTitle = document.createElement('h6');
            subTitle.className = 'Display-Card-box-sub';
            subTitle.textContent = `${watch.title} || Price : ${watch.price}`;

            box2.appendChild(title);
            box2.appendChild(subTitle);

            const box3 = document.createElement('div');
            box3.className = 'Display-Card-box3';

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';

            box3.appendChild(addToCartButton);

            mainBox.appendChild(box1);
            mainBox.appendChild(box2);
            mainBox.appendChild(box3);

            Container1.appendChild(mainBox);

            let checkbutton = 1;
            addToCartButton.addEventListener('click', function () {
                if (checkbutton) {
                    addToCartButton.style.backgroundColor = 'green';
                    addToCartButton.style.color = 'white';
                    addToCartButton.textContent = 'Added';
                    addToCartButton.style.opacity = 1;
                    showToast("Added Successfully", "success", 5000);
                    checkbutton = 0;
                }
                else {
                    addToCartButton.style.backgroundColor = 'skyblue';
                    addToCartButton.style.color = 'white';
                    addToCartButton.textContent = 'Add to cart';
                    showToast("Removed", "warning", 5000);
                    checkbutton = 1;
                }
            });
        });

    } catch (error) {
        console.log("Error in Fetching");
    }
}

WatchesDisplay();


const Container2 = document.getElementById('Display3-content');

async function catogeryDisplay() {

    try {
        const response = await fetch('data/Catogery.json');
        const data = await response.json();

        data.catogery.forEach(catogerySub => {

            const Box = document.createElement('div');
            Box.className = 'CatogeryCard';

            const Box1 = document.createElement('div');
            Box1.className = 'CatogeryBox';

            const CatogeryImg = document.createElement('img');
            CatogeryImg.className = 'CatogeryImage';
            CatogeryImg.src = catogerySub.imgSrc;
            CatogeryImg.alt = catogerySub.title;

            Box1.appendChild(CatogeryImg);

            const Box2 = document.createElement('div');
            Box2.className = 'CatogeryName';
            Box2.textContent = catogerySub.title;

            Box.appendChild(Box1);
            Box.appendChild(Box2);

            Container2.appendChild(Box);
        });

    } catch (error) {
        console.log("Error in Fetching Catogery JSON 404 Error");
    }



};

catogeryDisplay();


const Container3 = document.getElementById('Display4-content');

async function ElectronicsDisplay() {
    try {
        const response = await fetch('data/Electronics.json');
        const data = await response.json();

        data.digitalProducts.forEach(products => {
            const mainBox = document.createElement('div');
            mainBox.className = 'Display-Card';

            const box1 = document.createElement('div');
            box1.className = 'Display-Card-box';

            const para = document.createElement('p');
            para.className = 'Display-Card-box-Sale';
            para.textContent = 'Sale';

            const ProductImg = document.createElement('img');
            ProductImg.className = 'Display-Card-box-img';
            ProductImg.src = products.imgSrc;
            ProductImg.alt = products.name;

            box1.appendChild(para);
            box1.appendChild(ProductImg);

            const box2 = document.createElement('div');
            box2.className = 'Display-Card-box2';

            const title = document.createElement('h4');
            title.className = 'Display-Card-box-title';
            title.textContent = products.brand;

            const subTitle = document.createElement('h6');
            subTitle.className = 'Display-Card-box-sub';
            subTitle.textContent = `${products.title} || Price : ${products.price}`;

            box2.appendChild(title);
            box2.appendChild(subTitle);

            const box3 = document.createElement('div');
            box3.className = 'Display-Card-box3';

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';

            box3.appendChild(addToCartButton);

            mainBox.appendChild(box1);
            mainBox.appendChild(box2);
            mainBox.appendChild(box3);

            Container3.appendChild(mainBox);

            let checkbutton = 1;
            addToCartButton.addEventListener('click', function () {
                if (checkbutton) {
                    addToCartButton.style.backgroundColor = 'green';
                    addToCartButton.style.color = 'white';
                    addToCartButton.textContent = 'Added';
                    addToCartButton.style.opacity = 1;
                    showToast("Added Successfully", "success", 5000);
                    checkbutton = 0;
                }
                else {
                    addToCartButton.style.backgroundColor = 'skyblue';
                    addToCartButton.style.color = 'white';
                    addToCartButton.textContent = 'Add to cart';
                    showToast("Removed", "warning", 5000);
                    checkbutton = 1;
                }
            });
        });

    } catch (error) {
        console.log("Error in Fetching");
    }
}

ElectronicsDisplay();


const Container4 = document.getElementById('Display5-content');

async function SportsDisplay() {
    try {
        const response = await fetch('data/Sports.json');
        const data = await response.json();

        data.digitalProducts.forEach(products => {
            const mainBox = document.createElement('div');
            mainBox.className = 'Display-Card';

            const box1 = document.createElement('div');
            box1.className = 'Display-Card-box';

            const para = document.createElement('p');
            para.className = 'Display-Card-box-Sale';
            para.textContent = 'Sale';

            const ProductImg = document.createElement('img');
            ProductImg.className = 'Display-Card-box-img';
            ProductImg.src = products.imgSrc;
            ProductImg.alt = products.name;

            box1.appendChild(para);
            box1.appendChild(ProductImg);

            const box2 = document.createElement('div');
            box2.className = 'Display-Card-box2';

            const title = document.createElement('h4');
            title.className = 'Display-Card-box-title';
            title.textContent = products.brand;

            const subTitle = document.createElement('h6');
            subTitle.className = 'Display-Card-box-sub';
            subTitle.textContent = `${products.title} || Price : ${products.price}`;

            box2.appendChild(title);
            box2.appendChild(subTitle);

            const box3 = document.createElement('div');
            box3.className = 'Display-Card-box3';

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';

            box3.appendChild(addToCartButton);

            mainBox.appendChild(box1);
            mainBox.appendChild(box2);
            mainBox.appendChild(box3);

            Container4.appendChild(mainBox);

            let checkbutton = 1;
            addToCartButton.addEventListener('click', function () {
                if (checkbutton) {
                    addToCartButton.style.backgroundColor = 'green';
                    addToCartButton.style.color = 'white';
                    addToCartButton.textContent = 'Added';
                    addToCartButton.style.opacity = 1;
                    showToast("Added Successfully", "success", 5000);
                    checkbutton = 0;
                }
                else {
                    addToCartButton.style.backgroundColor = 'skyblue';
                    addToCartButton.style.color = 'white';
                    showToast("Removed", "warning", 5000);
                    addToCartButton.textContent = 'Add to cart';
                    checkbutton = 1;
                }
            });
        });

    } catch (error) {
        console.log("Error in Fetching");
    }
}

SportsDisplay();

const partnerConatiner = document.getElementById('partner-content');
async function partnerDisplay() {
    try {
        const response = await fetch('data/partner.json');
        const data = await response.json();

        data.partners.forEach(partner => {
            const box1 = document.createElement('div');
            box1.className = 'partnerCard';

            const ProductImg = document.createElement('img');
            ProductImg.className = 'partnerImage';
            ProductImg.src = partner.imgSrc;

            box1.appendChild(ProductImg);
            partnerConatiner.appendChild(box1);
        })
    } catch (error) {
        console.log("Error in fetching partner's brand");
    }
}
partnerDisplay();


let SubscribeBtn = document.getElementById('subbtn');
let EmailContent = document.getElementById('emailSend');
let a = 1;
function subscribe() {
    if (a) {
        if (EmailContent.value !== '') {
            EmailContent.value = '';
            SubscribeBtn.style.backgroundColor = 'lightgreen';
            SubscribeBtn.style.color = 'white';
            SubscribeBtn.textContent = 'Subscribed'
            a = 0;

            setTimeout(function () {
                SubscribeBtn.style.backgroundColor = 'skyblue';
                SubscribeBtn.style.color = 'white';
                SubscribeBtn.textContent = 'Subscribe';
            }, 2000);
        }
    }
    else {
        SubscribeBtn.textContent = 'Subscribe'
        SubscribeBtn.style.backgroundColor = 'skyblue';
        a = 1;
    }
}


/// Adding phone screen

let DisplayM = document.querySelector('.Mobile-add');
let DisplayE = document.querySelector('.Electronics-add');
let DisplayS = document.querySelector('.Sports-add');

let activePage1 = document.querySelector('#toggle-btn1');
let activePage3 = document.querySelector('#toggle-btn3');
let activePage4 = document.querySelector('#toggle-btn4');
let activePage2 = document.querySelector('#toggle-btn2');
let MainPage = document.querySelector('.all-container');

activePage1.addEventListener("click", () => {
    MainPage.classList.remove('Hiding');
    DisplayM.classList.remove('MAdd');
    DisplayE.classList.remove('MAdd');
    DisplayS.classList.remove('MAdd');
    activePage1.classList.add('ByDefaultPage');
    activePage3.classList.remove('ByDefaultPage');
    activePage2.classList.remove('ByDefaultPage');
    activePage4.classList.remove('ByDefaultPage');
})

activePage2.addEventListener("click", () => {
    MainPage.classList.add('Hiding');
    DisplayM.classList.add('MAdd');
    DisplayE.classList.remove('MAdd');
    DisplayS.classList.remove('MAdd');
    activePage2.classList.add('ByDefaultPage');
    activePage1.classList.remove('ByDefaultPage');
    activePage3.classList.remove('ByDefaultPage');
    activePage4.classList.remove('ByDefaultPage');
})

activePage3.addEventListener("click", () => {
    MainPage.classList.add('Hiding');
    DisplayM.classList.remove('MAdd')
    DisplayE.classList.add('MAdd');
    DisplayS.classList.remove('MAdd');
    activePage3.classList.add('ByDefaultPage');
    activePage1.classList.remove('ByDefaultPage');
    activePage2.classList.remove('ByDefaultPage');
    activePage4.classList.remove('ByDefaultPage');

})

activePage4.addEventListener("click", () => {
    MainPage.classList.add('Hiding');
    DisplayM.classList.remove('MAdd');
    DisplayE.classList.remove('MAdd');
    DisplayS.classList.add('MAdd');
    activePage1.classList.remove('ByDefaultPage');
    activePage3.classList.remove('ByDefaultPage');
    activePage2.classList.remove('ByDefaultPage');
    activePage4.classList.add('ByDefaultPage');
})





// let mobileName = document.querySelector('[mobile-name]');
// let rating = document.querySelector('[mobile-rating]');
// let mimage = document.querySelector('[mobile-image]');

// async function AmazonData() {
//     try {
//         const response = await fetch('data/mobile.json');
//         const result = await response.json();

//         result.mobiles.forEach(mobilep => {

//             mimage.src = mobilep.imgSrc;
//             mobileName.textContent = mobilep.brand;
//             rating.textContent = mobilep.rating;
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }
// AmazonData();






// TOAST Script 
let icon = {
    success:
        '<span class="material-symbols-outlined">task_alt</span>',
    warning:
        '<span class="material-symbols-outlined">warning</span>',
};

const showToast = (
    message = "Sample Message",
    toastType = "info",
    duration = 5000) => {
    if (
        !Object.keys(icon).includes(toastType))
        toastType = "info";

    let box = document.createElement("div");
    box.classList.add(
        "toast", `toast-${toastType}`);
    box.innerHTML = ` <div class="toast-content-wrapper"> 
					<div class="toast-icon"> 
					${icon[toastType]} 
					</div> 
					<div class="toast-message">${message}</div> 
					<div class="toast-progress"></div> 
					</div>`;
    duration = duration || 5000;
    box.querySelector(".toast-progress").style.animationDuration =
        `${duration / 1000}s`;

    let toastAlready =
        document.body.querySelector(".toast");
    if (toastAlready) {
        toastAlready.remove();
    }

    document.body.appendChild(box)
};

