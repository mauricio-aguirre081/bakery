const BotonResponsive = document.querySelector('#boton-responsive');
        const MenuResponsive = document.querySelector('#menu-responsive');

        BotonResponsive.addEventListener('click', () => {
            MenuResponsive.classList.toggle('hidden')
        })