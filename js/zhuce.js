var zc = document.querySelector('.xyb');
zc.onclick = function(){
    var username = document.querySelector('.k4').value;
    if(username === ''){
        layer.msg('用户名必填')
        return false;
    }
   /* var reg = /^[a-zA-Z][a-zA-Z0-9]{2,7}$/;
    if(!reg.test(yhm)){
        layer.msg('用户名：字母开头，字母、数字组成，3~8位')
        return false;
    } */

    var tel = document.querySelector('.shuru>input').value;
    if(tel == ''){
        layer.msg('手机号必填')
        return false;
    }
    var reg = /^\d{11}$/;
    if(!reg.test(tel)){
        layer.msg('请输入正确的手机号')
        return false;
    }
    

    var password = document.querySelector('.k1').value;
    if(password===''){
        layer.msg('密码必填')
        return false;
    }
    var reg = /^[a-zA-Z0-9]{6,12}$/;
    if(!reg.test(password)){
        layer.msg('密码：数字、字母自称，6~12位')
        return false
    }

    var password1 = document.querySelector('.k3').value;
    if(password1!==password){
        layer.msg('两次不一致')
        return false
    }

    var xieyi = document.querySelector('[type="checkbox"]');
    if(!xieyi.checked){
        layer.msg('请同意协议')
        return false;
    }
    
    var index = layer.load(1, {
        shade: [0.5,'#666'] //0.1透明度的白色背景
    });
    zc.disabled = true;
    pAjax({
        url:'./php/register.php',
        data:{
            username,
            password,
            tel,
        },
        type:"post"
    }).then(res=>{
        layer.close(index)
        var status = res.meta.status;
        console.log(res);
        var msg = res.meta.msg;
        var msgIndex = layer.msg(msg);

        if(status===0){
            setInterval(()=>{
                layer.close(msgIndex)
                location.href = './denglu.html'
            },2000)
        }else{
            zc.disabled = false;
            return false;
        }
    })
}
