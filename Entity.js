class Entity {

    constructor(ctx, color = 'blue', positionX = 200, positionY = 200, width = 100, height = 50) {

        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;

        console.log('ctx:  ' + this.ctx);

    }

}