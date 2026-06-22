//Dark mode váltogató
const colorScheme = document.querySelector('meta[name=color-scheme]');
const switchButtons = document.querySelectorAll('button.mode-switch');

switchButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentButton = button;

        switchButtons.forEach(btn => 
            btn.setAttribute('aria-pressed', btn === currentButton)
        );

        colorScheme.content = button.value;
    });
});