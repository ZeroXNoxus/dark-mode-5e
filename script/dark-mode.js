function changeMode(val){
    if(val == true){
        $('body.vtt').addClass("dark");
    } else {
        $('body.vtt').removeClass("dark");
    }
}
Hooks.once('init', () => {
    let plutonium;

    game.settings.register('dark-mode-5e', 'enabled', {
        name: 'Enable Dark Mode',
        hint: "Enable dark mode for DnD 5th Edition.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: val => {
            changeMode(val);
        }
    });
    changeMode(game.settings.get('dark-mode-5e', 'enabled'));
    plutonium = game.modules.get('plutonium').active;
    if(plutonium == true){ $('body.vtt').addClass("plutonium"); } 
});