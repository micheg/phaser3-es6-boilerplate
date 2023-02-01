import { Scene } from 'phaser';

class BootScene extends Scene
{
    constructor()
    {
        super("scene_boot");
    }

    preload()
    {
        this.load.image('cat-like', 'assets/cat-like-creature.png');
    }

    create()
    {
        this.scene.start('scene_game');
    }
}

export default BootScene;
