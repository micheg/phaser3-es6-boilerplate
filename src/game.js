import './main.css';
import Phaser, { Game } from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';

//const canvas = document.getElementById('game_area');
const portrait = true;
const landscape = !portrait;

const height = portrait ? 800 : 450;
const width = landscape ? 800 : 450;
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
window.$C = config;
const game = new Game(config);
