document.addEventListener('DOMContentLoaded', function () {

    const Container = document.getElementById('Mobile-Container');
    async function MobileDisplay() {
        try {
            const response = await fetch('data/mobile.json');
            const data = await response.json();


            data.mobiles.forEach(mobile => {
                const mainBox = document.createElement('div');
                mainBox.classList.add('MobileCard');

                const Box1 = document.createElement('div');
                const Box2 = document.createElement('div');
                Box2.classList.add('box2div');

                const image = document.createElement('img');
                image.classList.add('MobileImg');
                image.src = mobile.imgSrc;

                const p1 = document.createElement('p');
                p1.classList.add('MobileCardp1');
                p1.textContent = mobile.brand;
                const p3 = document.createElement('p');
                p3.classList.add('MobileCardp2');
                p3.textContent = mobile.price;
                const p2 = document.createElement('p');
                p2.classList.add('MobileCardp2');
                p2.textContent = mobile.rating;

                const Box3 = document.createElement('div');
                Box3.classList.add('ButtonBox');

                const Btn1 = document.createElement('button');
                Btn1.classList.add('MobileCardButton1');
                Btn1.textContent = 'Buy Now';
                const Btn2 = document.createElement('button');
                Btn2.classList.add('MobileCardButton2');
                Btn2.textContent = 'Add to Cart';


                let checkbutton = 1;
                Btn2.addEventListener('click', function () {
                    if (checkbutton) {
                        AddCart(mobile);
                        Btn2.style.backgroundColor = 'green';
                        Btn2.style.color = 'white';
                        Btn2.textContent = 'Added';
                        Btn2.style.opacity = 1;
                        showToast("Added Successfully", "success", 5000);
                        checkbutton = 0;
                    }
                    else {
                        Btn2.style.backgroundColor = 'orange';
                        Btn2.style.color = 'white';
                        Btn2.textContent = 'Add to cart';
                        showToast("Removed", "warning", 5000);
                        checkbutton = 1;
                    }
                });

                Box3.appendChild(Btn1);
                Box3.appendChild(Btn2);

                Box2.appendChild(p1);
                Box2.appendChild(p3);
                Box2.appendChild(p2);

                Box1.appendChild(image);

                mainBox.appendChild(Box1);
                mainBox.appendChild(Box2);
                mainBox.appendChild(Box3);


                Container.appendChild(mainBox);
            });

        } catch (error) {
            console.log('Error in Mobile fetching');
        }
    }

    MobileDisplay();

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
});





