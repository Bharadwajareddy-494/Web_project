var getRatingStars = (rating) => {
    var ratingcontainer=$("<span></span>")
    for(var i=1;i<=rating;i++){
        var img=$("<img/>").attr("src","images/fullStar.png")
        img.attr("width","15px")
        img.attr("height","15px")
        ratingcontainer.append(img)
    }
    for(var i=1;i<=5-rating;i++){
        var img=$("<img/>").attr("src","images/grayStar.png")
        img.attr("width","15px")
        img.attr("height","15px")
        ratingcontainer.append(img)
    }
    return ratingcontainer
}

var loadproductdata=(pdetails)=>{
    pdetails.productprice=parseFloat(pdetails.productprice)
    pdetails.discountprice=parseFloat(pdetails.discountprice)
    pdetails.discountprice=(pdetails.productprice-(pdetails.productprice*(pdetails.discountprice/100)))
    pdetails.rating=parseInt(pdetails.rating)


    var ulTag = $("<ul />").addClass('pdetails');    
    var li1 = jQuery("<li/>").text('Product Name: '+pdetails.productname);
    ulTag.append(li1);

    var li2 = $("<li/>").text('Product Price:');
    var span1=$("<span></span>").addClass('price')
    span1.text(pdetails.productprice)
    li2.append(span1)
    var span2=$("<span/>").addClass("dprice")
    span2.text(pdetails.discountprice)
    li2.append(span2)
    ulTag.append(li2);

    var li3 = $("<li />").text('Manufacturer : ' + pdetails.manufacture);
    ulTag.append(li3);

    var li4 = $("<li />").text('Rating : ');
    var ratingStar = getRatingStars(pdetails.rating);
    li4.append(ratingStar);
    ulTag.append(li4);

    var li5 = $("<li />").addClass('productImage')
    var imgTag = $("<img />").attr("src", pdetails.image);
    imgTag.addClass('pImage')
    li5.append(imgTag);
    ulTag.append(li5);

    $(".productblock").append(ulTag)
}

var productdetails=()=>{
    $.ajax({
        url:"/product/details",
        method:"POST",
        dataType:"JSON",
        success:(res)=>{
            productlist=res.productdetails
            console.log(productlist)
            console.log(productlist.length)
            for(i=0;i<productlist.length;i++){
                loadproductdata(productlist[i])
            }
        },
        error:(err)=>{
            console.log("error")
        }
    })
}