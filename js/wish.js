fetch("/data/data.json")
  .then(response => response.json())
  .then(data => {
    var getWish = document.getElementById("Wish");
    getWish.innerHTML = "";
    function getAllWish(){
        data.forEach(element => {
            if(element['id'] == localStorage.getItem("wish_" +element['id'])){
                getWish.innerHTML += "<div class='col-sm-3'>"+
                "<h2>Name: <span>"+ element['name']  +"</span></h2>" +
                "</div>"+
                "<div class='col-sm-3'>"+
                "<h2>Status: <span> Rất tích cực</span></h2>" +
                "</div>"+
                "<div class='col-sm-3'>"+
                "<h2>Price: <span>"+ element['price']  +"</span></h2>" +
                "</div>" +
                "<div class='col-sm-3'>"+
                " <a href='' data-id='" + element['id'] + "' class='add-to-cart btn btn-primary'>ADD TO CART</a>" +
                "</div>"
            }
        });
    }
        getAllWish();

        var find = document.querySelector('#WishSearch');
        find.addEventListener('keyup', function () {
            getWish.innerHTML = "";
            var filter = find.value.toLowerCase();
            var filteredProducts = "";
            data.forEach(element => {
                if(element['id'] == localStorage.getItem("wish_" +element['id'])){
                var plant = element['name'].toLowerCase();

                if (plant.indexOf(filter) !== -1) {
                    filteredProducts +="<div class='col-sm-3'>"+
                    "<h2>Name: <span>"+ element['name']  +"</span></h2>" +
                    "</div>"+
                    "<div class='col-sm-3'>"+
                    "<h2>Status: <span> Rất tích cực</span></h2>" +
                    "</div>"+
                    "<div class='col-sm-3'>"+
                    "<h2>Price: <span>"+ element['price']  +"</span></h2>" +
                    "</div>" +
                    "<div class='col-sm-3'>"+
                    " <a href='' data-id='" + element['id'] + "' class='add-to-cart btn btn-primary'>ADD TO CART</a>" +
                        "</div>" + "<br>" + "<br>"; +
                    "</div>"
                 
                }
            }
            });
            if (filteredProducts !== "") {
                getWish.innerHTML = filteredProducts;
            } else {
                getWish.innerHTML = "";
            }
        });

            //xử lí phần Cart:
            document.getElementById("getAllPrice").innerHTML  =0;
            var getCart = document.getElementById("Carting");
            getCart.innerHTML = "";
            const showCart = document.querySelectorAll(".add-to-cart");
            showCart.forEach(element => {
                element.addEventListener('click', function () {
                    data.forEach(getdata => {
                        if (getdata['id'] == element.getAttribute("data-id")) {
                            localStorage.setItem(getdata['id'], getdata['id']);
                        }
                    })
                })
            })
           
            function displayall(){
                var sum = 0;
                getCart.innerHTML ="";
                data.forEach(getdata => {
                    if (getdata['id'] == localStorage.getItem(getdata['id'])) {
                 
                        sum = parseInt(parseInt(sum) + parseInt((parseInt(localStorage.getItem("countNumber_" + getdata['id'])) * getdata['price'])));
                        document.getElementById("getAllPrice").innerHTML = sum;
                        getCart.innerHTML +=
                            " <div class='col-sm-3'>" +
                            " <span>" + getdata['name'] + "</span>" +
                            "</div>" +
                            " <div class='col-sm-3'>" +
                            "<span >" + getdata['price'] + "</span>" +
                            " </div>" +
                            "<div class='col-sm-4'>" +
                            " <input type='number' style='height:30px;' min='1' class='numberous' max='100' value=" + localStorage.getItem("countNumber_" + getdata['id']) + " data-num='" + getdata['id'] + "' >" + "  " +
                            "<button type='button'  class='delete-item btn btn-danger' data-delete='" + getdata['id'] + "'>X</button>" +
                            " </div>" +
                            "<div class='col-sm-2'>" +
                            "<span id='price_" + getdata['id'] + "'>" + parseInt(localStorage.getItem("countNumber_" + getdata['id'])) * getdata['price'] + "</span>" +
                            " </div>";
                    
                    }
                })
            }
            displayall();
      
            var getNum = document.querySelectorAll(".numberous");
            getNum.forEach(num => {
                num.addEventListener('change', function () {
                    data.forEach(element => {
                        if (element['id'] == num.getAttribute("data-num")) {
                            document.getElementById("price_" + element['id']).innerHTML = parseInt(num.value) * element['price'];
                            localStorage.setItem("countNumber_" + element['id'], num.value);
                            sum =0;
                           for( var getdata of data){
                            if (getdata['id'] == localStorage.getItem(getdata['id'])) {         
                                sum = parseInt(parseInt(sum) + parseInt((parseInt(localStorage.getItem("countNumber_" + getdata['id'])) * getdata['price'])));
                                document.getElementById("getAllPrice").innerHTML = sum;
                           }
                        }
                    }
                    })
                })
            })
            var getdelete = document.querySelectorAll(".delete-item");
            getdelete.forEach(xoa => {
                xoa.addEventListener('click', function () {
                    data.forEach(getdata1 => {
                        if (getdata1['id'] == this.getAttribute("data-delete")) {
                            localStorage.removeItem(getdata1['id']);
                            localStorage.removeItem("countNumber_" + getdata1['id']);  
                            window.location.href = '/html/wishPage.html';
                        }
                    })
                })
            })
        
            localStorage.DieuKien = 0;
            var Kiemtra = 0;
            data.forEach(getdata => {
                if (getdata['id'] == localStorage.getItem(getdata['id'])) {
                    Kiemtra = 1;
                }
            })
            if (Kiemtra == 0) {
                localStorage.DieuKien = 1;
            } else {
                localStorage.DieuKien = 0;
                Kiemtra = 0;
            }
    
            var quit = document.querySelector("#Ordernow");
            quit.addEventListener('click',function(){
             var cou = 0;
             data.forEach(element =>{
                 if(localStorage.getItem(element['id']) == element['id']){
                     cou = 1;
                 }
             })
             if(cou == 1){
                 data.forEach(element =>{
                     localStorage.removeItem(element['id']);
                     localStorage.removeItem("countNumber_" + element['id']);
                     localStorage.pageIndex = 0;
                     localStorage.pageProduct = 1;
                     localStorage.DieuKien = 0;
                 })
                 alert("success");
                 window.location.href = '/html/home.html';  
             } else {
                 alert("Ko có sản phẩm để Order");
             }
         })    
        
  })
  .catch(error => console.error('Error:', error));