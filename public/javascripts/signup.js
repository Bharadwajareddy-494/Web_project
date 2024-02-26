var newinfo;
var validatenewuserdata=()=>{
    var newinfo={};
    newinfo.accountid=document.querySelector("#accountid").value
    if(newinfo.accountid==""){
        $(".emailerror").show()
    }
    else{
        $(".emailerror").hide()
    }
    newinfo.accountpassword=document.querySelector("#accountpassword").value
    if(newinfo.accountpassword==""){
        $(".passerror").show()
    }
    else{
        $(".passerror").hide()
    }
    newinfo.dob=document.querySelector("#dob").value
    newinfo.phno=document.querySelector("#phno").value
    newinfo.isAdmin=document.querySelector("#admin").value
    newinfo.isAdmin=Boolean(newinfo.isAdmin)
    newinfo.conformpassword=document.querySelector("#conformpassword").value
    if(newinfo.accountpassword==newinfo.conformpassword){
        $.ajax({
            url:"/validete/new/user/details",
            method:"POST",
            dataType:"JSON",
            data:newinfo,
            success:(res)=>{
                if(res.msg=="valid"){
                    loadpagedetails('logedin')
                }
            },
            error:(err)=>{
                console.log("err")
            }
        })
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

var passwordrules=(event)=>{
    var pass=document.querySelector("#accountpassword").value
    if(pass.length>=8){
        $(".length").hide()
    }
    else{
        $(".length").show()
    }
    if(event.keyCode <= 90 && event.keyCode >= 65){
        $(".uppercase").hide()
    }
    if(event.keyCode==50 || (event.keyCode<=38 && event.keyCode>=35)){
        $(".specialcase").hide()
    }
}