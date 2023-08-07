var uesrName =document.getElementById("uesrName");
var email =document.getElementById("email");
var pass =document.getElementById("pass");

var userInfo =[];


if(localStorage.getItem("userInfo") !=null){
    userInfo=JSON.parse(localStorage.getItem("userInfo"))
}else{
    userInfo=[];
}
function add(){
    if(uesrName.value == "" || email.value == "" || pass.value == ""){
        document.getElementById("message").innerHTML=`<p class="text-center text-danger">All inputs is required

        </p>`
    }else{

        var ele = {
            useName:uesrName.value,
            useEmail:email.value,
            usePass:pass.value,
        }
        userInfo.push(ele);
        location.href = "../../login/index.html";
        localStorage.setItem("userInfo",JSON.stringify(userInfo));
    }
}

