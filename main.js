const players = {
    scorpion: {
        name: "scorpion",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
        weapon: [],
        attack: function () {
            console.log(this.name + ' Fight...');
        }
    },

    kitana: {
        name: "kitana",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
        weapon: [],
        attack: function () {
            console.log(this.name + ' Fight...');
        }
    },

    liukang: {
        name: "kitana",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
        weapon: [],
        attack: function () {
            console.log(this.name + ' Fight...');
        }
    },

    sonya: {
        name: "kitana",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
        weapon: [],
        attack: function () {
            console.log(this.name + ' Fight...');
        }
    },

    subzero: {
        name: "kitana",
        hp: 100,
        img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
        weapon: [],
        attack: function () {
            console.log(this.name + ' Fight...');
        }
    },
}

function createPlayer(typeCharacter, player) {
    const _player = document.createElement('div');
    const progressbar = document.createElement('div');
    const character = document.createElement('div');
    const life = document.createElement('div');
    const name = document.createElement('div');
    const img_character = document.createElement('img');

    _player.classList.add(typeCharacter);
    progressbar.classList.add('progressbar');
    character.classList.add('character');
    life.classList.add('life');
    name.classList.add('name');

    name.innerText = player.name;
    life.innerText = player.hp;
    img_character.src = player.img;

    character.appendChild(img_character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    _player.appendChild(progressbar);
    _player.appendChild(character);

    return _player;
}

const $player_1 = createPlayer('player1', players['scorpion']);
const $player_2 = createPlayer('player2', players['subzero']);

const arenas = document.querySelector('.arenas');
arenas.appendChild($player_1);
arenas.appendChild($player_2);