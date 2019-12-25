document.addEventListener('DOMContentLoaded', function () {
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
    const px = document.querySelectorAll('.parallax');
    M.Parallax.init(px, {});
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, { scrollOffset: 100});
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {});
    const images = document.querySelectorAll('.carousel');
    M.Carousel.init(images, {});
    hljs.initHighlightingOnLoad();
});