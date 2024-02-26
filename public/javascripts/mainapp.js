var templateurl;
var loadpagedetails=(pagetype)=>{
    var templateurl="template/"
    switch(pagetype){
        case 'index':
            templateurl+="index.htm"
            break;
        case 'logedin':
            templateurl+="logedin.htm";
            break;   
        case 'signup':
            templateurl+='signup.htm';
            break;    
        case 'forgot':
            templateurl+="forgot.htm" 
            break;   
        case 'productpage':
            templateurl+='productpage.htm' 
            break;
        case 'adminproductpage':
            templateurl+='adminproductpage.htm'
            break;       
    }
    $.ajax({
        url:templateurl,
        method:"GET",
        success:(res)=>{
            document.querySelector(".selectedpage").innerHTML=res
            if(pagetype=='logedin'){
                getCapche();
            }
            if(pagetype=='productpage'){
                productdetails()
            }
        },
        error:(err)=>{
            console.log("err")
        }
    })
}
loadpagedetails('index')

/*capacha part*/
var capchaword;
var getCapche=()=>{
    var result="";
    var upper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var result=Math.floor(Math.random()*10)+upper[Math.floor(Math.random()*26)]+Math.floor(Math.random()*10)+upper[Math.floor(Math.random()*26)]+lower[Math.floor(Math.random()*26)]+upper[Math.floor(Math.random()*26)]
    document.querySelector(".capcha").innerHTML=result;
    capchaword=result


    html2canvas(document.querySelector('.capcha'), {
        onrendered: function (canvas) {
          var screenshot = canvas.toDataURL('image/png');
          document.querySelector('#textScreenshot').setAttribute('src', screenshot);
          $(".capcha").hide()
        },
      });
      
}