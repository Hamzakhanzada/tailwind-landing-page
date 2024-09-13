const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
} 
const  initialTranslateLTR = -48*4;
const  initialTranslateRTL = 36*4;


function setupIntersectionObserver(element,isLTR,speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener('scroll',scrollHandler);
        } else {
            document.removeEventListener('scroll',scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate  = translateX + initialTranslateLTR;
        } else {
            totalTranslate  = -(translateX + initialTranslateRTL);

        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');


setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, true, 0.15);
setupIntersectionObserver(line3, true, 0.15);





function toggleAnswer(faqId, arrowId) {
    // Toggle the clicked FAQ's answer visibility
    const answer = document.getElementById(faqId);
    const arrow = document.getElementById(arrowId);

    // Close all other FAQs
    document.querySelectorAll('dd').forEach((dd) => {
        if (dd !== answer) {
            dd.classList.add('hidden');
        }
    });

    // Reset all arrows
    document.querySelectorAll('span.material-symbols-outlined').forEach((arw) => {
        if (arw !== arrow) {
            arw.classList.remove('rotate-0');
            arw.classList.add('-rotate-180');
        }
    });

    // Toggle the visibility of the current FAQ
    answer.classList.toggle('hidden');
    arrow.classList.toggle('-rotate-180');
    arrow.classList.toggle('rotate-0');
}
