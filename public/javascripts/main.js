window.onload=function(){
    var hidden_batch_weibo=document.getElementById('hidden_batch_weibo');
    var ys=hidden_batch_weibo.value;

    var options={
        height:130,
        width:700,
        maxY:10,
        id:'svg_chart',
        ys:[10,10,10,3,4,90,75,87,16,0,30,10,87,12,45,67,37],
        color:['#8BBC21','#2F7ED8','#0D233A','green','red','blue','red','green','blcak','red','blue','red','green','blcak','red']
    };
    drawSvgBar(options);
};


//--------------------------柱状图绘制----------------------------------
//转屏幕坐标
function toScreenY(maxy,y){
    return maxy-y;
}
//批量转屏幕坐标
function toBatchY(maxy,ys){
    var newYs=[];
    for(var i=0; i<ys.length;i++){
        newYs.push(toScreenY(maxy,ys[i]));
    }
    return newYs;
}
//定制画布，绘制
function drawSvgBar(options){
    var height=options.height;//画布
    var width=options.width;//画布
    var maxY=options.maxY;//传入的最大值
    var id=options.id;
    var ys=options.ys;//传入的直角坐标系的高度值
    var color=options.color;
    var DIS=12;//矩形宽
    var DIS_RECT=30;//柱状间距
    var RATE=0.95;//转换比率
    var svg=document.getElementById(id);
    //批量转屏幕坐标
    var newys;
    var convert_new=[];
    if(maxY<=height){
        newys=toBatchY(height,ys);
    }
    else{
        for(i=0;i<ys.length;i++){
            convert_new.push(ys[i]*(height/maxY));
        }
        newys=toBatchY(height,convert_new);
        console.log(newys);
    }
    for(var i=0;i<newys.length;i++){
        var rect=document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttributeNS(null,'x',DIS_RECT*(i+1)+DIS*i);
        rect.setAttributeNS(null,'y',newys[i]);
        rect.setAttributeNS(null,'width',DIS);
        rect.setAttributeNS(null,'height',maxY<=height?ys[i]:convert_new[i]);
        rect.setAttributeNS(null, 'fill','url(#orange_red)');
        rect.setAttributeNS(null,'stroke-width','1');

        var text=document.createElementNS('http://www.w3.org/2000/svg','text');
        text.setAttributeNS(null,'x',DIS_RECT*(i+1)+DIS*i);
        text.setAttributeNS(null,'y',newys[i]-3);
        text.textContent=ys[i];
        text.setAttributeNS(null,'font-size','12');
        text.setAttributeNS(null,'color','#2F7ED8');

        svg.appendChild(text);
        svg.appendChild(rect);
    }
}
//绘制折线
function drawPolyLine(id,point){
    var svg=document.getElementById(id);
    var polyline=document.createElementNS("http://www.w3.org/2000/svg",'polyline');

    polyline.setAttribute('points','20,130,40,40,100,20');
    polyline.setAttribute('fill','#FFFFFF');
    polyline.setAttribute('stroke','#478CDB');
    polyline.setAttribute('stroke-width','2');
    svg.appendChild(polyline);
}

//---------------------------------------------------------------------
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



