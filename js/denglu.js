 /* var dl = document.querySelector('.denglu');
console.log(dl);
dl.onclick = function(){
   var sjh = document.querySelector('[type="text"]').value;
   if(sjh == ''){
         layer.msg('用户名必填')
        return false;
    }
    

     var password = document.querySelector('[type="password"]').value;
     if(password===''){
         layer.msg('密码必填')
         return false;
     }
     var reg = /^[a-zA-Z0-9]{6,12}$/;
     if(!reg.test(password)){
         layer.msg('密码：数字、字母自称，6~12位')
         return false
     }

 }
 */


var rememberusername = getCookie('rememberusername');
var user = document.querySelector("[name='username']")
if(rememberusername){
    user.value = rememberusername;
}



$('.form').validate({
    rules:{
        username:'required',
        password:'required'
    },
    messages:{
        username:'用户名不能为空',
        password:'密码不能为空'
    },
    submitHandler:function(form){
        var loadindex = layer.load(1, {
            shade: [0.5,'#333'] //0.1透明度的白色背景
        });
        $('.denglu').prop('disabled',true)
        $.ajax({
            url:'./php/login.php',
            data:$(form).serialize(),
            dataType:'json',
            method:'post',
            success:res=>{
                var {meta:{status,msg}} = res;                
                layer.close(loadindex)
                var msgindex = layer.msg(msg)
                if(status===0){
                    setCookie('username',$('[name="username"]').val())
                    if($("[name='remember']").prop('checked')){
                        setCookie('rememberusername',$('[name="username"]').val(),7*24*3600)
                    }
                    setTimeout(()=>{
                        layer.close(msgindex)
                        $('.denglu').prop('disabled',false)
                        location.href = 'index.html';
                },2000)
            }else{
                $('.denglu').prop('disabled',false)
                return false;
            }
        }
        })
        return false;
    }
})
