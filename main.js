let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let select1 = document.getElementById('select1');
let btn = document.getElementById('btn');
let h4 = document.getElementById('h4');
let span1= document.getElementById('span1')
function h4text(){
    setTimeout(() => {
        h4.innerText = '';
    }, 1800);
}
btn.onclick = function(){
    if(inp1.value === ""){
        h4.innerText = `Please ${inp1.placeholder}`;
        h4text();
        return;
    }
    if(inp2.value === ""){
        h4.innerText = `Please ${inp2.placeholder}`;
        h4text();
        return;
    }
    if(inp2.value.length != 11){
        h4.innerText = 'Please Enter A valid Phone number';
        h4text();
        return;
    }
    if(inp3.value === ""){
        h4.innerText = `Please ${inp3.placeholder}`;
        h4text();
        return;
    }
    if(select1.value === ""){
        h4.innerText = "Please Choose the amount of water you want";
        h4text();
        return;
    }
    let selectedAmount = select1.value;
    inp1.value = '';
    inp2.value = '';
    inp3.value = '';
    select1.value = '';
    h4.innerText = `It has been booked: ${selectedAmount}`;
    h4text();
    span1.style.display = 'block';
}
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let divend = document.getElementById('divend');
p2.onclick = function(){
    div1.style.display = 'block';
    div2.style.display = 'none'
    div3.style.display = 'none';
    div4.style.display = 'none';
    divend.style.display = 'none';
}
p3.onclick = function(){
    div1.style.display = 'none'
    div2.style.display = 'block'
    div3.style.display = 'none';
    div4.style.display = 'none';
    divend.style.display = 'none';
}
p4.onclick = function(){
    div1.style.display = 'none'
    div2.style.display = 'none'
    div3.style.display = 'block';
    div4.style.display = 'none';
    divend.style.display = 'none';
}
p5.onclick = function(){
    div1.style.display = 'none'
    div2.style.display = 'none'
    div3.style.display = 'none';
    div4.style.display = 'block';
    divend.style.display = 'none';
}
p1.onclick = function(){
    location.reload();
}