// Using BOM concept for this problem //
//Browser Object Model//
window.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
//documentElement.scrollHeight gives height of the entire document. - window.innerHeight gives the visible area in the browser.
// FInally this gives us the height of the content that can be scrolled 

    const scrolledPercentage = Math.round((window.scrollY / scrollableHeight) * 100);
    // window.scrollY gives the current verticall scroll position
    //Math.round gives the exact integer value!
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = scrolledPercentage + '%';
});
