const btn = document.querySelector('button');
const body = document.querySelector('body');
const color = ['pink','black','green','red','grey','purple'];
body.style.backgroundColor = 'yellow';
document.addEventListener('click',function(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
});
 