function initialize(html){
    let openBtn = $(`<a class="dark-mode-toggle" title="Change Dark/Light Mode"><i class="fas fa-eye-evil"></i>Light/Dark Mode</a>`);
    let theme;
    let themeClass;
    openBtn.click(ev => changeMode());
    html.closest('.app').find('.dark-mode-toggle').remove();
    let titleElement = html.closest('.app').find('.window-title');
    openBtn.insertAfter(titleElement);
}

function changeMode(){
    theme = game.settings.get('dark-mode-5e', 'theme-selector');
    switch(theme) {
        case 1:
            themeClass = "dark";
            break;
        case 2:
            themeClass = "bNw";
            break;
        case 3:
            themeClass = "program";
            break;
      }
    if(localStorage.getItem('dark-mode') == 'true'){
        localStorage.setItem('dark-mode', 'false');
        $('body').removeClass(themeClass);
        $('a.dark-mode-toggle>i.far.fa-eye-evil').removeClass('far').addClass('fas');
    } else {
        localStorage.setItem('dark-mode', 'true');
        $('body').addClass(themeClass);
        $('a.dark-mode-toggle>i.fas.fa-eye-evil').removeClass('fas').addClass('far');
    }
}

function generateDarkModeSettings(){ 
    game.settings.register('dark-mode-5e', 'theme-selector', {
        name: 'Selected Theme',
        hint: "Select the theme you want! Either Black'n'White, Programmer or Dark, you will find your preference! (Reload required!)",
        scope: 'client',
        config: true,
        type: Number,
        choices: {
          1 : "Dark Mode",
          2 : "Black'n'White",
          3 : "Programmer"
        },
        default: "darkMode",
    });
}
Hooks.on('init', () => {
    generateDarkModeSettings();
    theme = game.settings.get('dark-mode-5e', 'theme-selector');
    switch(theme) {
        case 1:
            themeClass = "dark";
            break;
        case 2:
            themeClass = "bNw";
            break;
        case 3:
            themeClass = "program";
            break;
    }
    if(localStorage.getItem('dark-mode') == 'true'){
        $('body').addClass(themeClass);
    } else {
        $('body').removeClass(themeClass);
    }
});

Hooks.on('renderActorSheet', (app, html, data) => {
    initialize(html);
});