class Menu {

    constructor() {
        this.isActive = true;
        this.mainMenu = document.querySelector('.main-menu');
        this.startBtn = document.querySelector('.start-btn');
        this.changeColorBtn = document.querySelector('.change-color-btn');
        this.buttons = document.querySelectorAll('button');

        /*        this menu1 = document.querySelector('.menu');
               this buttons = [...buttons]; */

    }

    handlingMenuButtons = () => {
        this.buttons = [...this.buttons]

        this.buttons.forEach(button => {

            button.addEventListener('click', () => {

                console.log(button.textContent);
            })

        });

    }







}