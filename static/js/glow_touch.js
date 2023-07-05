

/*
* Make background glow with gradient where mouse is located
* Do the same when touched in mobile
*/
document.addEventListener('mousemove', (event) => {
    let glow = document.querySelector('.glow');

    glow.style.animationName = 'none';
    glow.style.animationDuration = '5s';
    glow.style.animationTimingFunction = 'easy-out';

    glow.style.opacity = '100%'
    let percentage = 0.25;
    glow.style.top = event.y - (document.body.clientWidth * percentage) + 'px';
    glow.style.left = event.x - (document.body.clientWidth * percentage) + 'px';

    setInterval(() => {
        glow.style.animationName = 'glow-touch-out';
    }, 1000);

});

document.addEventListener('touchmove', (event) => {
    let glow = document.querySelector('.glow');

    glow.style.animationName = 'none';
    glow.style.animationDuration = '5s';
    glow.style.animationTimingFunction = 'easy-out';

    glow.style.opacity = '100%'
    let percentage = 0.25;
    glow.style.top = event.touches[0].clientY - (document.body.clientWidth * percentage) + 'px';
    glow.style.left = event.touches[0].clientX - (document.body.clientWidth * percentage) + 'px';

    setInterval(() => {
        glow.style.animationName = 'glow-touch-out';
    }, 1000);

});