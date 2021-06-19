/* var center = document.querySelector('.center');
var zb = document.querySelector('.left')
var small = document.querySelector('.small')
var fdj = document.querySelector('.fdj')
var fdjimg = document.querySelector('.fdjimg')

zb.onmouseenter = function(){
    small.style.display = 'block'
    fdj.style.display = 'block'
}
zb.onmouseleave = function(){
    small.style.display = 'none'
    fdj.style.display = 'none'
}
zb.onmousemove = function(e){
    e=e || window.event
    var x = e.pageX;
    var y = e.pageY
    var left = x - small.clientWidth/2
    var top = y - small.clientHeight/2
    if(left<=0){
        left = 0
    }
    if(top<=0){
        top  = 0
    }
    if(left>center.clientWidth - small.clientWidth){
        left = center.clientWidth - small.clientWidth
    }
    if(top>center.clientHeight - center.clientHeight){
        top = center.clientHeight - center.clientHeight
    }
    small.style.left = left+'px'
    small.style.top = top+'px'

    var fdjLeft = -left*fdjImg.offsetWidth/zb.offsetWidth;
    var fdjTop = -top*fdjImg.offsetHeight/zb.offsetHeight;

    fdjImg.style.left = fdjLeft + 'px'
    fdjImg.style.top = fdjTop + 'PX'
}
 */
var banb = document.querySelectorAll('.kuan')

for(let i=0;i<banb.length;i++){
    banb[i].onclick = function(){
        this.style.borderColor = 'red'
        
    }
}