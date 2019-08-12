class Asteroid {

    constructor(ctx, positionX, positionY, asteroidSize) {
        this.ctx = ctx;
        this.positionX = positionX;
        this.positionY = positionY;
        this.asteroidSpeed = 50;
        this.velocityX = Math.random() * this.asteroidSpeed / 60 * (Math.random() < 0.5 ? -1 : 1);
        this.velocityY = Math.random() * this.asteroidSpeed / 60 * (Math.random() < 0.5 ? -1 : 1);
        this.asteroidR = asteroidSize / 2;
        this.angle = 90;
        this.ver = Math.floor(Math.random() * (10 - 5 + 1) + 5);
        this.asteroidsJag = true;
        this.jags = [];



    }

    asteroidDraw = () => {

        if (this.asteroidsJag) {

            for (i = 0; i < this.ver; i++) {
                const jag = (Math.random() * 2).toFixed(1)
                if (jag < .3) {
                    this.jags.push(.3)
                } else {
                    this.jags.push(jag)
                }


            }

            this.asteroidsJag = false
        }


        this.ctx.strokeStyle = 'grey',
            this.ctx.beginPath();
        this.ctx.moveTo(
            this.positionX + this.asteroidR * this.jags[0] * Math.cos(this.angle),
            this.positionY - this.asteroidR * this.jags[0] * Math.sin(this.angle)
        )
        for (i = 1; i < this.ver; i++) {

            this.ctx.lineTo(
                this.positionX + this.asteroidR * this.jags[i] * Math.cos(this.angle + i * Math.PI * 2 / this.ver),
                this.positionY - this.asteroidR * this.jags[i] * Math.sin(this.angle + i * Math.PI * 2 / this.ver)
            )
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }





    asteroidMove = () => {
        this.positionX += this.velocityX;
        this.positionY += this.velocityY;

        if (this.positionX <= 0 - this.asteroidR) {
            this.positionX = window.innerWidth + this.asteroidR
        } else if (this.positionX >= window.innerWidth + this.asteroidR) {
            this.positionX = 0 - this.asteroidR;
        } else if (this.positionY <= 0 - this.asteroidR) {
            this.positionY = window.innerHeight + this.asteroidR;
        } else if (this.positionY > window.innerHeight + this.asteroidR) {
            this.positionY = 0 - this.asteroidR;
        }
    }
}