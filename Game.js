class Game {

    constructor() {
        this.myCanvas = document.createElement('canvas');
        this.ctx = this.myCanvas.getContext('2d');
        document.body.appendChild(this.myCanvas);



        this.myCanvasWidth = this.myCanvas.width = window.innerWidth;
        this.myCanvasHeight = this.myCanvas.height = window.innerHeight;
    }

    canvasDraw = () => {

        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.myCanvasWidth, this.myCanvasHeight);
    }

    rand = (minS = 0, maxS = 240) => {
        return Math.floor(Math.random() * (maxS - minS + 1) + minS);
    }

    asteroidShipDistance = (shipPositionX, shipPositionY, asteroidsContainer) => {

        asteroidsContainer.forEach(asteroid => {

            const distanceDifference = shipPositionX - asteroid.positionX

            if (distanceDifference < 100 && distanceDifference > 0) {
                asteroid.positionX = asteroid.positionX - 150;
            } else if (distanceDifference < 0 && distanceDifference > -100) {
                asteroid.positionX = asteroid.positionX + 150
            }


        });

    }




}