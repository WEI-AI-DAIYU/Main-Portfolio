// for sending message
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ou1hmzy', 'template_6ipgmw7', this)
        .then(function() {
            document.getElementById('status').innerText = 'Message sent successfully!';
        }, function(error) {
            document.getElementById('status').innerText = 'Failed to send message. Error: ' + JSON.stringify(error);
        });
});



document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");

    // menu element
    const btnMenu = document.querySelector(".menu-button");
    const ImgbtnMenu = document.querySelector(".menu-button>img");

    // darkmode element
    const btnDarkMode = document.querySelector(".darkmode-button");
    const imgDarkmode = document.querySelector(".darkmode-button>img");
    const navbarRoot = document.querySelector(".navbar-root");
    const navbarLink = document.querySelectorAll("nav>a");
        //home
    const bgHome = document.querySelector(".home-background");
    const spanHome = document.querySelector(".home-text>h1>span");
        //about
    const bgAboutCard = document.querySelector(".about-card>img");
    const bgAboutText = document.querySelector(".about-text>p");
        //projects
    const bgProjectContainer = document.querySelectorAll(".project-container");
    const bgProjectCard = document.querySelectorAll(".project-card");
    const bgProjectCardImg = document.querySelectorAll(".project-card>img");
    const bgInfo = document.querySelectorAll(".info");
    const bgInfoLink = document.querySelectorAll(".link");
    const bgLink = document.querySelectorAll(".project-link");
        //contact
    const bgContactForm = document.querySelector("#contact-form");
        //footer
    const bgFooter = document.querySelector("footer");
    const bgBorder = document.querySelector(".border");

    // mobile-navbar element
    const mobileNavbar = document.createElement("div");
    mobileNavbar.className = "mobile-navbar";
    const btnMobileDarkMode = document.createElement("button");
    const imgMobileDarkMode = document.createElement("img");
    imgMobileDarkMode.src = imgDarkmode.src;
    btnMobileDarkMode.appendChild(imgMobileDarkMode);

    // create mobile-navbar
    const mobileNavLink = ["home", "about", "projects", "contacts"];
    mobileNavLink.forEach(link => {
        const mobileLink = document.createElement("a");
        mobileLink.className = "mobile-link";
        mobileLink.textContent = link;
        mobileLink.href = `#${link}`;
        mobileNavbar.appendChild(mobileLink);
        
        mobileLink.addEventListener("click", ()=> {
            body.removeChild(mobileNavbar);
            ImgbtnMenu.src = "/assets/images/menu-icon.svg";
        });
    });

    mobileNavbar.appendChild(btnMobileDarkMode);

    // toggle menu
    btnMenu.addEventListener("click", () => {
        if (ImgbtnMenu.src.includes("/assets/images/menu-icon.svg")) {
            body.appendChild(mobileNavbar);
            ImgbtnMenu.src = "/assets/images/black-cross.svg";
        } else {
            body.removeChild(mobileNavbar);
            ImgbtnMenu.src = "/assets/images/menu-icon.svg";
        }
    });

    // autoclose mobile navbar (specified width)
    const mediaQuery = window.matchMedia("(min-width: 805px)");
    function mobileNavbarRemover(x) {
        if (x.matches && document.body.contains(mobileNavbar)) {
            body.removeChild(mobileNavbar);
            ImgbtnMenu.src = "/assets/images/menu-icon.svg";
        }
    }

    mobileNavbarRemover(mediaQuery);
    mediaQuery.addEventListener("change", mobileNavbarRemover);

    // toggle darkmode
    function toggleDarkMode() {
    const mobileNavLinks = document.querySelectorAll(".mobile-link");
        if (imgDarkmode.src.includes("/assets/images/light-mode.svg")
            && imgMobileDarkMode.src.includes("/assets/images/light-mode.svg")) {
            body.classList.add('darkmode');
            body.classList.remove('lightmode');
            // nav-root
            navbarRoot.classList.add('darkmode');
            navbarRoot.classList.remove('lightmode');
            // navbar-link
            navbarLink.forEach(link => {
                link.classList.add('darkmode');
                link.classList.remove('lightmode');
            });
            // mobile navbar
            mobileNavbar.classList.add('darkmode');
            mobileNavbar.classList.remove('lightmode');
            // mobile navbar links
            mobileNavLinks.forEach(link => {
                link.classList.add('darkmode');
                link.classList.remove('lightmode');
            });
            // home bg
            bgHome.classList.add('darkmode');
            bgHome.classList.remove('lightmode');
            // home span
            spanHome.classList.add('darkmode');
            spanHome.classList.remove('lightmode');
            //about bg photo-card
            bgAboutCard.classList.add('darkmode');
            bgAboutCard.classList.remove('lightmode');
            //about bg text
            bgAboutText.classList.add('darkmode');
            bgAboutText.classList.remove('lightmode');
            //bg project container
            bgProjectContainer.forEach(link => {
                link.classList.add('darkmode');
                link.classList.remove('lightmode');
            });
            //bg project-card
            bgProjectCard.forEach(link => {
                link.classList.add('darkmode');
                link.classList.remove('lightmode');
            });
            //bg project-card img
            bgProjectCardImg.forEach(link => {
                link.classList.add('darkmode');
                link.classList.remove('lightmode');
            });
            //project bg info
            bgInfo.forEach(link => {
                link.classList.add('darkmode');
                link.classList.remove('lightmode');
            });
            //project bg info link
            bgInfoLink.forEach(link => {
                link.classList.add('darkmode');
                link.classList.remove('lightmode');
            });
            //project bg link
            bgLink.forEach(link => {
                link.classList.add('darkmode');
                link.classList.remove('lightmode');
            });
            //about bg contract form
            bgContactForm.classList.add('darkmode');
            bgContactForm.classList.remove('lightmode');
            //footer
            bgFooter.classList.add('darkmode');
            bgFooter.classList.remove('lightmode');
            //footer border (img)
            bgBorder.classList.add('darkmode');
            bgBorder.classList.remove('lightmode');



            imgDarkmode.src = "/assets/images/dark-mode.svg";
            imgMobileDarkMode.src = "/assets/images/dark-mode.svg";
        } 
        
        else {
            body.classList.add('lightmode');
            body.classList.remove('darkmode');
            // nav-root
            navbarRoot.classList.add('lightmode');
            navbarRoot.classList.remove('darkmode');
            // navbar-link
            navbarLink.forEach(link => {
                link.classList.add('lightmode');
                link.classList.remove('darkmode');
            });
            // mobile navbar
            mobileNavbar.classList.add('lightmode');
            mobileNavbar.classList.remove('darkmode');
            // mobile navbar links
            mobileNavLinks.forEach(link => {
                link.classList.add('lightmode');
                link.classList.remove('darkmode');
            });
            // home bg
            bgHome.classList.add('lightmode');
            bgHome.classList.remove('darkmode');
            // home span
            spanHome.classList.add('lightmode');
            spanHome.classList.remove('darkmode');
            //about bg photo-card
            bgAboutCard.classList.add('lightmode');
            bgAboutCard.classList.remove('darkmode');
            //about bg text
            bgAboutText.classList.add('lightmode');
            bgAboutText.classList.remove('darkmode');
            //bg project container
            bgProjectContainer.forEach(link => {
                link.classList.add('lightmode');
                link.classList.remove('darkmode');
            });
            //bg project-card
            bgProjectCard.forEach(link => {
                link.classList.add('lightmode');
                link.classList.remove('darkmode');
            });
            //bg project-card img
            bgProjectCardImg.forEach(link => {
                link.classList.add('lightmode');
                link.classList.remove('darkmode');
            });
            //project bg info
            bgInfo.forEach(link => {
                link.classList.add('lightmode');
                link.classList.remove('darkmode');
            });
            //project bg info link
            bgInfoLink.forEach(link => {
                link.classList.add('lightmode');
                link.classList.remove('darkmode');
            });
            //project bg link
            bgLink.forEach(link => {
                link.classList.add('lightmode');
                link.classList.remove('darkmode');
            });
            //about bg contract form
            bgContactForm.classList.add('lightmode');
            bgContactForm.classList.remove('darkmode')
            //footer
            bgFooter.classList.add('lightmode');
            bgFooter.classList.remove('darkmode')
            //footer border (img)
            bgBorder.classList.add('lightmode');
            bgBorder.classList.remove('darkmode')


            imgDarkmode.src = "/assets/images/light-mode.svg";
            imgMobileDarkMode.src = "/assets/images/light-mode.svg";
        }
    }

    btnDarkMode.addEventListener("click", toggleDarkMode);
    btnMobileDarkMode.addEventListener("click", ()=> {
        toggleDarkMode();
        body.removeChild(mobileNavbar);
        ImgbtnMenu.src = "/assets/images/menu-icon.svg";
    });

    
    const mobileNavLinks = document.querySelectorAll(".mobile-link");
    mobileNavLinks.forEach(element => {
        element.addEventListener("click", ()=> {
            body.removeChild(mobileNavbar);
            ImgbtnMenu.src = "/assets/images/menu-icon.svg";
        });
    });

});


/* dark
    .classList.add('darkmode');
    .classList.remove('lightmode');
*/
/* light
    .classList.add('lightmode');
    .classList.remove('darkmode');
*/
const scrollBtnUp = document.querySelector(".scroll-button-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        scrollBtnUp.style.display = "block";
        
    
    } else {
        scrollBtnUp.style.display = "none"
    }
}

scrollBtnUp.addEventListener("click", ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})