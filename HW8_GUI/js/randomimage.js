/*
Author: Kerry O'Neill
I used this website for help for randomizing the tiles
https://markinns.com/archive/simple-two-line-image-randomiser-script-with-jquery.html
*/

const tiles = [
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_A.jpg', count: 9, value: 1, letter: 'A'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_B.jpg', count: 2, value: 3, letter: 'B'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_C.jpg', count: 2, value: 3, letter: 'C'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_D.jpg', count: 4, value: 1, letter: 'D'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_E.jpg', count: 12, value: 1, letter: 'E'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_F.jpg', count: 2, value: 4, letter: 'F'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_G.jpg', count: 3, value: 1, letter: 'G'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_H.jpg', count: 2, value: 4, letter: 'H'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_I.jpg', count: 9, value: 1, letter: 'I'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_J.jpg', count: 1, value: 8, letter: 'J'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_K.jpg', count: 1, value: 5, letter: 'K'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_L.jpg', count: 4, value: 1, letter: 'L'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_M.jpg', count: 2, value: 3, letter: 'M'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_N.jpg', count: 6, value: 1, letter: 'N'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_O.jpg', count: 8, value: 1, letter: 'O'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_P.jpg', count: 2, value: 3, letter: 'P'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_Q.jpg', count: 1, value: 10, letter: 'Q'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_R.jpg', count: 6, value: 1, letter: 'R'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_S.jpg', count: 4, value: 1, letter: 'S'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_T.jpg', count: 6, value: 1, letter: 'T'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_U.jpg', count: 4, value: 1, letter: 'U'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_V.jpg', count: 2, value: 4, letter: 'V'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_W.jpg', count: 2, value: 4, letter: 'W'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_X.jpg', count: 1, value: 8, letter: 'X'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_Y.jpg', count: 2, value: 4, letter: 'Y'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_Z.jpg', count: 1, value: 10, letter: 'Z'},
  {'image': 'js/Scrabble_Tiles/Scrabble_Tile_Blank.jpg', count: 2, value: 0, letter: 'blank'},
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var l = tiles.length;
var random_no1 = getRandomInt(0, l);
document.getElementById("tile_1").src = tiles[random_no1].image;

var l = tiles.length;
var random_no2 = getRandomInt(0, l);
document.getElementById("tile_2").src = tiles[random_no2].image;

var l = tiles.length;
var random_no3 = getRandomInt(0, l);
document.getElementById("tile_3").src = tiles[random_no3].image;

var l = tiles.length;
var random_no4 = getRandomInt(0, l);
document.getElementById("tile_4").src = tiles[random_no4].image;

var l = tiles.length;
var random_no5 = getRandomInt(0, l);
document.getElementById("tile_5").src = tiles[random_no5].image;

var l = tiles.length;
var random_no6 = getRandomInt(0, l);
document.getElementById("tile_6").src = tiles[random_no6].image;

var l = tiles.length;
var random_no7 = getRandomInt(0, l);
document.getElementById("tile_7").src = tiles[random_no7].image;
