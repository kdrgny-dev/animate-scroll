const scrollOffset = 100;

const windowHeight = document.getElementById("window-height");
const offsetTop = document.getElementById("offset-top");
const scrollElement = document.querySelector(".js-scroll");
const instructions = document.getElementById("instructions");

const getWindowHeight = () => {
    windowHeight.innerHTML =
        window.innerHeight || document.documentElement.clientHeight;
};

const getOffsetTop = () => {
    offsetTop.innerHTML = scrollElement.getBoundingClientRect().top;
}

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = () => {
    scrollElement.classList.add('scrolled');
    instructions.classList.add('hidden');
}

const hideScrollElement = () => {
    scrollElement.classList.remove('scrolled');
    instructions.classList.remove('hidden');
}

const handleScrollAnimation = () => {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement(scrollElement);
    } else {
        hideScrollElement(scrollElement);
    }
}

getWindowHeight();
getOffsetTop()

window.addEventListener('resize', () => {
    getWindowHeight()
})

window.addEventListener('scroll', () => {
    getOffsetTop();
    handleScrollAnimation();
})