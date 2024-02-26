var userinfo;
var validateuser=()=>{
    var userinfo={}
    userinfo.accountid=document.querySelector("#accountid").value
    userinfo.accountpassword=document.querySelector("#accountpassword").value
    if(userinfo.accountid=="" || userinfo.accountpassword==""){
        $(".error").show()
    }
    else{
        $(".error").hide()
    }
    userinfo.capche=document.querySelector("#capchatext").value
    if(userinfo.capche==capchaword)
    {
        $(".caperror").hide()
        $.ajax({
            url:"/validate/user/details",
            method:"POST",
            dataType:"JSON",
            data:userinfo,
            success:(res)=>{
                res.isAdmin=Boolean(res.isAdmin)
                if(res.isAdmin==true && res.msg=="valid"){
                    $(".links").hide()
                    loadpagedetails('adminproductpage')
                }
                else if(res.msg=="valid"){
                    $(".links").hide()
                    loadpagedetails('productpage')
                }
                else{
                    $(".error").show()
                }
            },
            error:(err)=>{
                console.log("err")
            }
        })
    }
    else{
        $(".caperror").show()
        getCapche()
    }
}

var count=1
var showpassword=()=>{
    count=count+1
    if(count%2==0){
        $("#accountpassword").attr("type","text")
        $("#hide").show()
        $("#show").hide()
    }
    else{
        $("#accountpassword").attr("type","password")
        $("#hide").hide()
        $("#show").show()
    }
}