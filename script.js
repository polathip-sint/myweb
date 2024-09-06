let menu = document.querySelector('#menu-icon');
let navlist = document.querySelection('.navlist');

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.description',{delay:200, origin:'top'});
sr.reveal('FLOWBOTs-img',{delay:450, origin:'top'});
