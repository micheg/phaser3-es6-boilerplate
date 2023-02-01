import './main.css';
import Phaser, { Game } from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';

const portrait = true;
const landscape = !portrait;

const height = (landscape) ? 450 : Math.round(450/(window.innerWidth/window.innerHeight));
const width = (portrait) ? 450 : Math.round(450*(window.innerWidth/window.innerHeight));

const canvas = document.getElementById('area');

const config =
{
    type: Phaser.WEBGL,
    width: width,
    height: height,
    canvas : canvas,
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: { y: 400 },
            debug: true
        }
    },
    scene:
    [
        BootScene,
        GameScene
    ],
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

window.portrait = portrait;
window.landscape = landscape;

const game = new Game(config);
