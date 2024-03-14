function changeMode(val, name){
    if(val == true){
        $('body.vtt').addClass(name);
    } else {
        $('body.vtt').removeClass(name);
    }
}
Hooks.once('init', () => {
    game.settings.register('dark-mode-5e', 'enabled', {
        name: 'Enable Dark Mode',
        hint: "Enable dark mode for DnD 5th Edition.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: val => {
            changeMode(val, 'dark-mode-5e');
        }
    });
    game.settings.register('dark-mode-5e', 'alternative', {
        name: 'Alternate Hightlight Colors',
        hint: "Enable to use inverted highlighting colors.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: val => {
            changeMode(val, 'alt-mode');
        }
    });
    game.settings.register('dark-mode-5e', 'dir-changes', {
        name: 'Toggle Sidetab Changes',
        hint: "Enable this setting to make the right-hand sidetab more compact and modern.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: true,
        onChange: val => {
            changeMode(val, 'dark-mode-dir');
        }
    });
    changeMode(game.settings.get('dark-mode-5e', 'enabled'), 'dark-mode-5e');
    changeMode(game.settings.get('dark-mode-5e', 'alternative'), 'alt-mode');
    changeMode(game.settings.get('dark-mode-5e', 'dir-changes'), 'dark-mode-dir');
});