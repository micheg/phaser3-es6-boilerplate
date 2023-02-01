import './main.css';
import Phaser, { Game } from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';

const canvas = document.getElementById('game-area');
const portrait = true;
const landscape = !portrait;

const height = portrait ? 800 : 450;
const width = landscape ? 800 : 450

const config =
{
    type: Phaser.AUTO,
    width,
    height,
    canvas,
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
    ]
};

const game = new Game(config);
