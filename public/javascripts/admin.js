var productinfo;
var validateadminproductdata=()=>{
    var productinfo={}
    productinfo.productname=document.querySelector("#pname").value
    productinfo.productprice=document.querySelector("#pprice").value
    productinfo.discountprice=document.querySelector("#dprice").value
    productinfo.manufacture=document.querySelector("#manufacture").value
    productinfo.rating=document.querySelector("#rating").value
    productinfo.image=document.querySelector("#image").value
    $.ajax(
        {
            url:"/admin/product/details",
            method:"POST",
            dataType:"JSON",
            data:productinfo,
            success:(res)=>{
                if(res.msg=="valid"){
                    loadpagedetails("productpage")
                }
            },
            error:(err)=>{
                console.log("error")
            }
        }
    )
}