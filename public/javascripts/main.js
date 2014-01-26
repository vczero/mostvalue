
function header_input_click(){
    var input=document.getElementById('header_input');
    input.value='';
}

function header_input_blur(){
    var input=document.getElementById('header_input');
    input.value='  搜索';
}

function show_特征信息分析(){
    var specialInfo=document.getElementById('specialInfo');
    specialInfo.style.visibility='visible';

    var menu=document.getElementById('mainbody_right_info');
    var publicInfo=document.getElementById('publicInfo');
    menu.style.visibility='hidden';
    publicInfo.style.visibility='hidden';
}

function show_个人信息分析(){
    var menu=document.getElementById('mainbody_right_info');
    menu.style.visibility='visible';

    var publicInfo=document.getElementById('publicInfo');
    publicInfo.style.visibility='hidden';
    var specialInfo=document.getElementById('specialInfo');
    specialInfo.style.visibility='hidden';
}

function toScreenY(maxy,y){
    return maxy-y;
}

function toBatchY(maxy,ys){
    var newYs=[];
    for(var i=0; i<ys.length;i++){
        newYs.push(toScreenY(maxy,y));
    }
    return newYs;
}

