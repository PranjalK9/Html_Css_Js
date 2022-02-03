var btn = document.getElementById("btn");
var back = document.getElementById("bg");

// Mouse Event
btn.addEventListener('mousedown', function(){
    console.log('Mousedown Event');
})
btn.addEventListener('mouseup', function(){
    console.log('Mouse Up Event');
})
btn.addEventListener('click', function(){
    console.log('Click Event');
})
btn.addEventListener('dblclick', function(){
    console.log('dblclick Event');
})




btn.addEventListener ("click",function onBtnClick(){
    back.style.backgroundColor = "rgb(" + Math.floor(Math.random()*255) +
    "," +  Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) +")"
})



btn.addEventListener ("mouseover",function onBtnClick(){
    btn.style.backgroundColor = "rgb(" + Math.floor(Math.random()*255) +
    "," +  Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) +")"
})
