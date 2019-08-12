class Ship {

    constructor(ctx, color = 'blue', positionX = 100, positionY = 100, shipSize, shipDirection) {

        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.shipR = shipSize / 2;
        this.ctx = ctx;

        this.shipDirection = shipDirection / 180 * Math.PI; //zmieniane na radiany
        this.velocity = 0;
        this.shipAcceleration = 0; //acceleration
        this.thrustX = 0;
        this.thrustY = 0;
        this.shipThrust = false;

        this.braking = true;
    }


    shape = () => {

        this.ctx.strokeStyle = this.color,
            this.ctx.beginPath();
        this.ctx.moveTo( //nos statu
            this.positionX + this.shipR * Math.cos(this.shipDirection),
            this.positionY - this.shipR * Math.sin(this.shipDirection)
        )
        this.ctx.lineTo( //lewy tył statku
            this.positionX - this.shipR * (Math.cos(this.shipDirection) + Math.sin(this.shipDirection)),
            this.positionY + this.shipR * (Math.sin(this.shipDirection) - Math.cos(this.shipDirection))
        )
        this.ctx.lineTo( //wcięcie tył statku
            this.positionX - this.shipR / 50 * (Math.cos(this.shipDirection) + Math.sin(this.shipDirection)),
            this.positionY + this.shipR / 50 * (Math.sin(this.shipDirection) - Math.cos(this.shipDirection))
        )

        this.ctx.lineTo( //prawy tył statku
            this.positionX - this.shipR * (Math.cos(this.shipDirection) - Math.sin(this.shipDirection)),
            this.positionY + this.shipR * (Math.sin(this.shipDirection) + Math.cos(this.shipDirection))
        )
        this.ctx.closePath();
        this.ctx.stroke();


        /* this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.positionX - 2, this.positionY - 2, 4, 4); */




        if (this.shipThrust === true) {

            this.ctx.fillStyle = "red";
            this.ctx.strokeStyle = "red";
            this.ctx.beginPath();
            this.ctx.moveTo( //nos statu
                this.positionX - this.shipR / 2 * (3 * Math.cos(this.shipDirection) - Math.sin(this.shipDirection)),
                this.positionY + this.shipR / 2 * (3 * Math.sin(this.shipDirection) + Math.cos(this.shipDirection))
            )
            this.ctx.lineTo( //lewy tył statku
                this.positionX - this.shipR * 1 / 10 * Math.cos(this.shipDirection),
                this.positionY + this.shipR * 1 / 10 * Math.sin(this.shipDirection)
            )
            this.ctx.lineTo( //prawy tył statku
                this.positionX - this.shipR / 2 * (3 * Math.cos(this.shipDirection) + Math.sin(this.shipDirection)),
                this.positionY + this.shipR / 2 * (3 * Math.sin(this.shipDirection) - Math.cos(this.shipDirection))
            )
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        }

    }

    thrustShip = () => {

        if (this.shipThrust === false) {


            let thrustDividerX = this.thrustX * 0.01
            let thrustDividerY = this.thrustY * 0.01

            if (this.thrustX > 0) {
                this.thrustX -= thrustDividerX;
            }
            if (this.thrustX < 0) {
                this.thrustX += -thrustDividerX; //potrzebne są minusy
            }
            if (this.thrustY > 0) {
                this.thrustY -= thrustDividerY;
            }

            if (this.thrustY < 0) {
                this.thrustY += -thrustDividerY; //potrzebne są minusy
            }


            if (this.shipAcceleration > 0) {
                this.shipAcceleration -= 0.01;

            }


        }

        if (this.shipThrust) {


            this.thrustX += this.shipAcceleration * Math.cos(this.shipDirection) / 60
            this.thrustY -= this.shipAcceleration * Math.sin(this.shipDirection) / 60

            if (this.shipAcceleration <= 3) {
                this.shipAcceleration += 0.4;
            }

        }

    }

    moveShip = () => {

        if (this.thrustX > 10) {
            this.thrustX = 10
        } else if (this.thrustX < -10) {
            this.thrustX = -10;
        }

        if (this.thrustY > 10) {
            this.thrustY = 10
        } else if (this.thrustY < -10) {
            this.thrustY = -10;
        }

        this.positionX += this.thrustX;
        this.positionY += this.thrustY;

        if (this.positionX <= 0 - this.shipR) {
            this.positionX = window.innerWidth + this.shipR
        } else if (this.positionX >= window.innerWidth + this.shipR) {
            this.positionX = 0 - this.shipR;
        } else if (this.positionY <= 0 - this.shipR) {
            this.positionY = window.innerHeight + this.shipR;
        } else if (this.positionY > window.innerHeight + this.shipR) {
            this.positionY = 0 - this.shipR;
        }



    }



    control = () => {

        document.addEventListener('keydown', (e) => {

            if (e.keyCode === 39) {
                //right
                this.shipDirection -= 5 / 60
            } else if (e.keyCode === 37) {
                //left
                this.shipDirection += 5 / 60
            } else if (e.keyCode === 38) {
                //forward
                this.shipThrust = true;

            }

        })
        document.addEventListener('keyup', (e) => {

            if (e.keyCode === 38) {
                this.shipThrust = false;
            }

        })


    }


}