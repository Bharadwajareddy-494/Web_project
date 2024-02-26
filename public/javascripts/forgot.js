var forgotdata;
var validateforgotdetails=()=>{
    var forgotdata={}
    forgotdata.accountid=document.querySelector("#accountid").value
    if(forgotdata.accountid==""){
        $(".emailerror").show()
    }
    else{
        $(".emailerror").hide()
    }
    forgotdata.accountpassword=document.querySelector("#accountpassword").value
    if(forgotdata.accountpassword==""){
        $(".passerror").show()
    }
    else{
        $(".passerror").hide()
    }
    forgotdata.conformpassword=document.querySelector("#conformpassword").value
    if(forgotdata.accountpassword==forgotdata.conformpassword){
        $.ajax(
            {
                url:"/validate/forgot/details",
                method:"POST",
                dataType:"JSON",
                data:forgotdata,
                success:(res)=>{
                    if(res.msg=="valid"){
                        loadpagedetails('productpage')
                    }
                },
                error:(err)=>{
                    console.log("error")
                }
            }
        )
    }
    else{
        $(".cpasserror").show()
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