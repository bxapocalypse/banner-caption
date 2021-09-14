const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        const bannerContainer = entry.target.querySelector('.banner-caption__img__title__container');

        if (entry.isIntersecting) {
            bannerContainer.classList.add('fader');
            return;
        }

        bannerContainer.classList.remove('fader');
    });
});

observer.observe(document.querySelector('.banner-caption-wrapper'));




const secondObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const caption = entry.target.querySelector('.banner-caption__caption');
        if (entry.isIntersecting) {
        caption.classList.add('second-fader');
        return;
        }
        caption.classList.remove('second-fader');
    })
});

secondObserver.observe(document.querySelector('.banner-caption-wrapper'));






const thirdObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const brackets = entry.target.querySelector('.banner-caption', 'before');
        if (entry.isIntersecting) {
        brackets.classList.add('bringit');
        return;
        }
        brackets.classList.remove('bringit');
    })
});

thirdObserver.observe(document.querySelector('.banner-caption-wrapper'));

// thirdObserver.observe(document.querySelector('.banner-caption'), 'before');








