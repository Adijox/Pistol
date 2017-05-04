var x;
var y;
var xmove = 0;
var ymove = 0;
var time = 0;
var houses = [];
var houses2 = [];
var scroller;
var house1;
var bodyWidth = 25;
var bodyHeight = 59;
var ycopy;
var yscroll;
var time2 = 0;
var collitimer1 = 0;
var collitimer2 = 0;
var uno = 0;
var img;
var worldmap;
var rmmap1;
var rmmap2;
var spritescroll = 0;
var spritescroll2= 0;
var maxscroll = 108;
var xkb = 0;
var ykb = 0;
var life = 6;
var coordcopy;
var music = [];
var heart = [];
var heartx = 20;
var rdmusic;
var knock1 = false;
var bullet;
 var momentum1 = 1;
 var momentum2 = 1
setInterval(draw, 5);
setInterval(Timer, 100);
setInterval(Timer2, 5);
setInterval(spriteClock, 150);
setInterval(spriteClock2, 100);
setInterval(colliClock, 5);
function preload() {
    house1 = loadImage("house1.png");
    worldmap = loadImage("map.png")
    img = loadImage("spritesheet.png");
    music[1] = loadSound("music1.mp3");
    music[2] = loadSound("music2.mp3");
    music[3] = loadSound("music3.mp3");
    music[4] = loadSound("music4.mp3");
    heart[1] = loadImage("heart1.png");
    heart[2] = loadImage("heart2.png");

}


function setup() {
    createCanvas(windowWidth * (70/100), windowHeight);
    for (var i = -4000; i < 100; i += 100) {
        houses[i] = new House(0, i, ceil(random(0, 3)), 'left');
        
    }
    for (var j = -4000; j < 100; j += 100) {
        houses2[j] = new House(width, j, ceil(random(0, 3)), 'right');
    }
    rectMode(RADIUS);
    scroller = 0;
    x = width / 2;
    y = height / 2;
    coordcopy = createVector(x, y);
    imageMode(CENTER);
    noSmooth();
    rdmusic = ceil(random(0, 4));
    music[rdmusic].play();
    music[rdmusic].loop(2);
    rmmap1 = random(1, 300);
    rmmap2 = random(1, 300);
}

function draw() {
    image(worldmap, 0, 0 + scroller, 2000, 2000, rmmap1, rmmap2, 2000, 2000);
    Scroll(); 
    Move();
    Houses();
    Collision();
    Pause();
    Life();




}
function Timer() {
    time += 1;
}
function Timer2() {
    time2 += 1;
}
function Move() {
    maxscroll = 108;
    xmove = 0;
    ymove = 0;
    var speed = 0.5;
    yscroll = - 0.5;
    if(keyIsDown(81)) {
        if(keyIsDown(90)) {
            image(img, x, y, 62, 130, spritescroll, 146, 31, 43);
        }else {
        image(img, x, y, 62, 130, spritescroll, 49, 31, 43);
        }
    }else
    if(keyIsDown(68)) {
    
        if(keyIsDown(90)) {
            image(img, x, y, 62, 130, spritescroll, 146, 31, 43);
        }else {
        image(img, x, y, 62, 130, spritescroll, 96, 31, 43);
        }
    }else if(keyIsDown(90)) {
        image(img, x, y, 62, 130, spritescroll2, 146, 31, 43);
        }
    else if(keyIsDown(83)) {

        maxscroll = 0;
        image(img, x, y, 62, 130, spritescroll, 0, 31, 43);
    
    }else {
        image(img, x, y, 62, 130, spritescroll, 146, 31, 43);
    }
    
    if(keyIsDown(90)) {
        ymove -= speed;
        
        
    }
    if(keyIsDown(81)) {
        xmove -= speed;
        
        
    }
    if(keyIsDown(68)) {
        xmove += speed;
        
    }
    
    if(keyIsDown(83)) {
        ymove += speed;
                  }

    
    
    

    var xspeed = xmove + xkb;
    var yspeed = ymove + yscroll + ykb;
            
    x += xspeed;
    y += yspeed;
    noStroke();
    fill(51, 54, 245);

}
function Scroll() {
    scroller += 0.5;
//    translate(0, scroller);
   
     
}
function Houses() {
    for(var i = -4000; i < 100; i += 100) {
        
        houses[i].update();
    }
    for(var j = -4000; j < 100; j += 100) {
       houses2[j].update();
    }
}
function Collision() {
    
    for (var i = -4000; i < 100; i += 100) {
        var d = dist(0, 0 + 396.5, 0, y );
        d -= 396.5;
        d *= -1;
        if(x - bodyWidth < houses[i].x + (houses[i].width) && houses[i].y - houses[i].length < d + bodyHeight && d - bodyHeight < houses[i].y + houses[i].length) {
            console.log('collision' + ' ' + i);
            knock1 = true;
            var collision1 = true;
        }
     }

    for (var j = -4000; j < 100; j += 100) {
           if(x + bodyWidth > houses2[j].x - (houses2[j].width) && houses2[j].y - houses2[j].length < d + bodyHeight && d - bodyHeight < houses2[j].y + houses2[j].length) {
            console.log('collision' + ' ' + j);
               var collision2 = true;
        }
    }
   
   
    fill(255, 100);
    if(collision1 || collision2) {
        fill(200, 40, 10);
        life -= 1;
    }
    rect(x, y, bodyWidth, bodyHeight);
    if(knock1) {
        if(uno == 0){
            collitimer1 = 1;
            uno = 1;
        }
        xkb = 10 / collitimer1;
        ykb = 10 / collitimer1;
        print(collitimer1);
    }
    if(uno == 1 && collitimer1 > 30) {
        knock1 = false;
        uno = 0;
        xkb = 0;
        ykb = 0;
    }
    
}

function spriteClock() {
    spritescroll += 32;
    if(spritescroll > maxscroll) {
        spritescroll = 0;
        time += 1;
}
}
function spriteClock2() {
    spritescroll2 += 32;
    if(spritescroll2 > maxscroll) {
        spritescroll2 = 0;
        time += 1;
}
}
function colliClock() {
    collitimer1 += 1;
    collitimer2 += 1;
    }
function Life() {
        for(var k = 1; k <= life; k++) {

        if(k % 2 == 0) {
        noSmooth();
            image(heart[2],26 + k * 25, 30 - scroller, 12, 17);
            
            

        }else {
            noSmooth();
            image(heart[1], 40 + k * 25, 30 - scroller, 12, 17)
            
          }

        }
}   
function Pause() {
    fill(15, 42, 200);
  rect(width - 30, height + 30 - scroller, 5, 15);  
  rect(windowWidth * (70/100) - 30, windowHeight - scroller + 30, 5, 15);  
    
    
}
