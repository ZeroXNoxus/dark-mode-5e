function initialize(html){
    let openBtn = $(`<a class="dark-mode-toggle" title="Change Dark/Light Mode"><i class="fas fa-eye-evil"></i>Light/Dark Mode</a>`);
    openBtn.click(ev => {
        if(localStorage.getItem('dark-mode') == 'true'){
            localStorage.setItem('dark-mode', 'false');
            $('body').removeClass('dark');
            $('a.dark-mode-toggle>i.far.fa-eye-evil').removeClass('far').addClass('fas');
        } else {
            localStorage.setItem('dark-mode', 'true');
            $('body').addClass('dark');
            $('a.dark-mode-toggle>i.fas.fa-eye-evil').removeClass('fas').addClass('far');
        }
    });
    html.closest('.app').find('.dark-mode-toggle').remove();
    let titleElement = html.closest('.app').find('.window-title');
    openBtn.insertAfter(titleElement);
}
Hooks.on('init', () => {
    if(localStorage.getItem('dark-mode') == 'true'){
        $('body').addClass('dark');
        $('a.dark-mode-toggle>i.fas.fa-eye-evil').removeClass('fas').addClass('far');
    } else {
        $('body').removeClass('dark');
        $('a.dark-mode-toggle>i.far.fa-eye-evil').removeClass('far').addClass('fas');
    }
});

Hooks.on('renderActorSheet', (app, html, data) => {
    initialize(html);
});