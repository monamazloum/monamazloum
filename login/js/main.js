
var userInfo =[];
userInfo = JSON.parse(localStorage.getItem("userInfo"));

var userEmail =document.getElementById("userEmail");
var userPass =document.getElementById("userPass");
document.getElementById("Login").addEventListener("click",function(){
    if(userEmail.value == "" || userPass.value == ""){
        document.getElementById("message").innerHTML=`<p class="text-center text-danger">All inputs is required

        </p>`
    }else{
        checkUser();

        
    }

})
function checkUser(){
    for (var i=0;i<userInfo.length;i++){
        if (userEmail.value == userInfo[i].email && userPass.value == userInfo[i].password){
            var x=userInfo[i].name
            localStorage.setItem("userName",x)
            location.href = "../../home/index.html";
            
        
            break;
        }
    }
}


