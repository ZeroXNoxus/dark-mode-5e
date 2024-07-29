function changeMode(val, name){
    if(val == true){
        $('body.vtt').addClass(name);
    } else {
        $('body.vtt').removeClass(name);
    }
}
Hooks.once('init', () => {
    game.settings.register('zetas-dark-mode', 'enabled', {
        name: 'Enable Dark Mode',
        hint: "Enable dark mode for DnD 5th Edition.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: val => {
            changeMode(val, 'zetas-dark-mode');
        }
    });
    game.settings.register('zetas-dark-mode', 'dir-changes', {
        name: 'Toggle Sidetab Changes',
        hint: "Enable this setting to make the right-hand sidetab more compact and modern.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: true,
        onChange: val => {
            changeMode(val, 'zetas-dark-mode-dir');
        }
    });
    changeMode(game.settings.get('zetas-dark-mode', 'enabled'), 'zetas-dark-mode');
    changeMode(game.settings.get('zetas-dark-mode', 'dir-changes'), 'zetas-dark-mode-dir');
});