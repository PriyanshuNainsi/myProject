console.log("Game loaded successfully!");
alert("Welcome to the game!");
class mainScene{
   preload(){
        // // Parameters: name of the sprite, path of the image
        this.load.image('player','assets/player.png')
        this.load.image('coin','assets/coin.png')
   }
   create(){
            
           // Parameters: x position, y position, name of the sprite
           this.player=this.physics.add.sprite(100,100,'player');
           this.coin=this.physics.add.sprite(300,300,'coin');
           // Store the score in a variable, initialized at 0
           this.score=0;
           // The style of the text 

            let style = { font: '20px Arial', fill: '#fff' };


         
             // Parameters: x position, y position, text, style
            this.scoreText=this.add.text(20,20,'score:'+this.score,style);
            // for movement
            this.arrow=this.input.keyboard.createCursorKeys();
              
            // make wall 

         
            this.player.setCollideWorldBounds(true);
             this.player.body.onWorldBounds = true;

             this.physics.world.on('worldbounds', (body) => {
             if (body.gameObject === this.player) {
                   this.wallhit();
              }
            });


            this.isGameOver=false;
   }
   update(){

         if (this.isGameOver) return;

    // Handle player movement here...
    
                  
                // If the player is overlapping with the coin
                if(this.physics.overlap(this.player,this.coin)){
                    // call hit function
                    this.hit();
                }
               
               // Handle horizontal movements
              
               this.player.setVelocity(0); // Reset velocity each frame

                 if (this.arrow.right.isDown) {
                     this.player.setVelocityX(700);
                 }else if (this.arrow.left.isDown) {
                    this.player.setVelocityX(-700);
                 }                 
                 
                 if (this.arrow.down.isDown) {
                     this.player.setVelocityY(700);
                 } else if (this.arrow.up.isDown) {
                     this.player.setVelocityY(-700);
                 }

                

   }
   hit(){
      // Change the position x and y of the coin randomly
      this.coin.x=Phaser.Math.Between(100,600);
      this.coin.y = Phaser.Math.Between(100, 300);
     
      // increase the score
      this.score+=10;

       // Display the updated score on the screen
       this.scoreText.setText('score:'+this.score);
       

       // Create a new tween 
     this.tweens.add({
          targets: this.player, // on the player 
          duration: 200, // for 200ms 
          scaleX: 1.2, // that scale vertically by 20% 
          scaleY: 1.2, // and scale horizontally by 20% 
          yoyo: true, // at the end, go back to original scale 
      });

   }
   wallhit() {
    this.isGameOver = true;
    this.player.setVelocity(0, 0);
    this.player.setTint(0xff0000);
    this.cameras.main.shake(200, 0.01);

    this.gameOverText = this.add.text(350, 180, 'Game Over', {
        fontSize: '40px',
        fill: '#fff'
    }).setOrigin(0.5);

    this.restartText = this.add.text(350, 230, 'Click to Restart', {
        fontSize: '20px',
        fill: '#fff'
    }).setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', () => this.restartGame());
}

restartGame() {
  this.isGameOver = false;
  this.score = 0;
  this.scoreText.setText('score:' + this.score);
  this.player.clearTint();
  this.player.setPosition(100, 100);

  this.gameOverText.destroy();
  this.restartText.destroy();
}

  
}

new Phaser.Game({
    width:700,
    height:400,
    backgroundColor: '#3498db',
    scene:mainScene,
    physics:{default:'arcade'},
    parent:'game'
 
})

