class Button extends Entity {

    constructor(color, positionX, positionY, width, height) {

        super(color, positionX, positionY, width, height)

    }

    drawShape = () => {

        ctx.fillStyle = this.color;
        ctx.fillRect(this.positionX, this.positionY, this.width, this.height);

    }

}