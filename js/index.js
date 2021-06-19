const img = document.querySelectorAll('#banner>a>img');
const banner = document.getElementById('banner')
const oli = document.querySelectorAll('#banner>ol>li')

const yinc = document.querySelector('.yinc')
const uli = document.querySelectorAll('#banner>ul>li')

var index = 0;
var timer = setInterval(function(){
    index++;
    if(index==img.length){
        index = 0;
    }
    for(var i = 0;i<img.length;i++){
        img[i].className = ''
        oli[i].className = ''
    }
    img[index].className = 'show'
    oli[index].className = 'yanse'
    
},5000)
banner.onmouseover = function(){
    clearInterval(timer)
}

banner.onmouseout = function(){
    timer = setInterval(function(){
      // 让下标自增
      index++;
    // 限制自增的值
    if(index==img.length){
        index = 0;
    }
    // 让ul,ol下的所有li的xians样式去掉
    for(var i = 0;i<img.length;i++){
        img[i].className = ''
        oli[i].className = ''
       
    }
    // 根据下标给对应的ul,li下的li添加xians样式
        img[index].className = 'show'
        oli[index].className = 'yanse'
       
},5000)
}

for(let j = 0;j<oli.length;j++){
    oli[j].onclick = function(){
        index = j;
        for(var i = 0;i<img.length;i++){
            oli[i].className = ''
            img[i].className = ''

        }
        oli[index].className = 'yanse'
        img[index].className = 'show'

    }
}

for(let s = 0;s<uli.length;s++){
    uli[s].onmouseover = function(){
        this.style.backgroundColor = '#fff'
        yinc.style.display = 'block'
    }
    uli[s].onmouseout = function(){
        this.style.backgroundColor = ''
        yinc.style.display = 'none'
    }
}
