function changeMode(val, name){
    (val == true) ? $('body.vtt').addClass(name) : $('body.vtt').removeClass(name);
}
Hooks.once('init', () => {
    game.settings.register('dark-mode-5e', 'dir-changes', {
        name: 'Toggle Sidetab Changes',
        hint: "Enable this setting to make the right-hand sidetab more compact and modern.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: true,
        onChange: val => {
            changeMode(val, 'zetas-dark-mode-dir');
        },
        requiresReload: true
    });
    changeMode(game.settings.get('dark-mode-5e', 'dir-changes'), 'zetas-dark-mode-dir');
});