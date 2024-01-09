const checkboxes = document.querySelectorAll('.filter-checkbox');
// Sử dụng fetch để tải tệp JSON từ máy chủ
fetch("/data/data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("best-sell").innerHTML = "";
        function getAllInfomation(){
            data.forEach(element => {
                document.getElementById("best-sell").innerHTML +=
                "<div class='col-12 col-md-6 col-lg-4 col-xl-3 mb-5'>"+
                    "<div class='product-card h-100 mb-0'>"+
                        "<a class='product-card__content' href='product_detail_page.html?id=p14'>"+
                            "<span class='product-card__img'"+
                                "style='background-image:url("+element['pic']+")'></span>"+
                            "<span class='product-card__title'>"+
                                element['name']+
                            "</span>"+
                            "<span class='product-card__price'>"+
                                element['price']+
                            "</span>"+
                        "</a>"+
                        "<div class='product-card__actions'>"+
                            "<a class='product-card__btn mr-3' href='product_detail_page.html?id="+element['id']+"'>"+
                                "<i class='fas fa-plus mr-2'></i>"+
                                "VIEW PRODUCT"+
                            "</a>"+
                        "</div>"+
                    "</div>"+
                "</div>";

                // "<div class='col-md-4'> " +
                // "<div><a href='product_detail_page.html?id=" + element['id'] + "' class='productImg'"+ "'" +"><img src='" + element['pic'] + "' alt='' class='flowerImaged'"+
                // "data-id ='" + element['id'] +"'>"
                // + "</a></div>" +
                // "<h3 class='font-text'>" + element['name'] + "</h3>" +
                // "<h3 class='font-text'>Price:" + element['price'] + "</h3>" +
                // " <a href='#' data-name='" + element['name'] + "' data-price='" + element['price'] + "' class='add-to-cart btn btn-primary'>ADD TO CART</a>" +
                // "</div>" +"<br>"+"<br>";
            })
        }
        getAllInfomation();
        const getData = document.querySelectorAll(".flowerImaged");
        getData.forEach(function(getValue) {
            getValue.addEventListener('click', function() {
              var idValue = getValue.getAttribute('data-id');
              sessionStorage.get = idValue;
            });
          });

        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var count = 0;
                if (this.checked) {
                    data.forEach(element => {
                        if (element['best'] == this.value || element['decor'] == this.value || element['flower'] == this.value || element['table'] == this.value) {
                            if (count == 0) {
                                document.getElementById("products").innerHTML = "";
                                count = parseInt(count) + 1;
                            }
                            document.getElementById("products").innerHTML +=
                            "<div class='col-12 col-md-6 col-lg-4 col-xl-3 mb-5'>"+
                                "<div class='product-card h-100 mb-0'>"+
                                    "<a class='product-card__content' href='product_detail_page.html?id=p14'>"+
                                        "<span class='product-card__img'"+
                                            "style='background-image:url(indoor_plants/Table_plants/Nanouk.jpg)'></span>"+
                                        "<span class='product-card__title'>"+
                                            element['name']+
                                        "</span>"+
                                        "<span class='product-card__price'>"+
                                            element['price']+
                                        "</span>"+
                                    "</a>"+
                                    "<div class='product-card__actions'>"+
                                        "<a class='product-card__btn mr-3' href='product_detail_page.html?id="+element['id']+"'>"+
                                            "<i class='fas fa-plus mr-2'></i>"+
                                            "VIEW PRODUCT"+
                                        "</a>"+
                                    "</div>"+
                                "</div>"+
                            "</div>";
                            // "<div class='col-md-4'> " +
                            // "<div><a href='product_detail_page.html?id=" + element['id'] + "' class='productImg'"+ "'" +"><img src='" + element['pic'] + "' alt='' class='flowerImaged'"+
                            // "data-id ='" + element['id'] +"'>"
                            // + "</a></div>" +
                            // "<h3 class='font-text'>" + element['name'] + "</h3>" +
                            // "<h3 class='font-text'>Price:" + element['price'] + "</h3>" +
                            // " <a href='#' data-name='" + element['name'] + "' data-price='" + element['price'] + "' class='add-to-cart btn btn-primary'>ADD TO CART</a>" +
                            // "</div>" +"<br>"+"<br>";
                        }
                        // Uncheck other checkboxes
                        checkboxes.forEach(function (otherCheckbox) {
                            if (otherCheckbox !== checkbox) {
                                otherCheckbox.checked = false;
                            }
                        });
                    })
                    const getData = document.querySelectorAll(".flowerImaged");
                    getData.forEach(function(image) {
                        image.addEventListener('click', function() {
                          var idValue = image.getAttribute('data-id');
                          sessionStorage.get = idValue;
                          
                          // Bạn có thể thực hiện xử lý khác ở đây
                        });
                      });
                } else {
                    document.getElementById("products").innerHTML = "";
                    getAllInfomation();
                    const getData = document.querySelectorAll(".flowerImaged");
                    getData.forEach(function(image) {
                        image.addEventListener('click', function() {
                          var idValue = image.getAttribute('data-id');
                          sessionStorage.get = idValue;
                          
                      
                        });
                      });
                }
            });
        });
        var find = document.querySelector('#search');
        find.addEventListener('keyup', function () {
            document.getElementById("products").innerHTML = "";
            var filter = find.value.toLowerCase();
            var filteredProducts = ""; 
            data.forEach(element => {
                var plant = element['name'].toLowerCase(); 
        
                if (plant.indexOf(filter) !== -1) {
                    filteredProducts +=
                    "<div class='col-12 col-md-6 col-lg-4 col-xl-3 mb-5'>"+
                        "<div class='product-card h-100 mb-0'>"+
                            "<a class='product-card__content' href='product_detail_page.html?id=p14'>"+
                                "<span class='product-card__img'"+
                                    "style='background-image:url(indoor_plants/Table_plants/Nanouk.jpg)'></span>"+
                                "<span class='product-card__title'>"+
                                    element['name']+
                                "</span>"+
                                "<span class='product-card__price'>"+
                                    element['price']+
                                "</span>"+
                            "</a>"+
                            "<div class='product-card__actions'>"+
                                "<a class='product-card__btn mr-3' href='product_detail_page.html?id="+element['id']+"'>"+
                                    "<i class='fas fa-plus mr-2'></i>"+
                                    "VIEW PRODUCT"+
                                "</a>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
                    // "<div class='col-md-4'> " +
                    // "<div><a href='product_detail_page.html?id=" + element['id'] + "' class='productImg'"+ "'" +"><img src='" + element['pic'] + "' alt='' class='flowerImaged'"+
                    // "data-id ='" + element['id'] +"'>"
                    // + "</a></div>" +
                    // "<h3 class='font-text'>" + element['name'] + "</h3>" +
                    // "<h3 class='font-text'>Price:" + element['price'] + "</h3>" +
                    // " <a href='#' data-name='" + element['name'] + "' data-price='" + element['price'] + "' class='add-to-cart btn btn-primary'>ADD TO CART</a>" +
                    // "</div>" +"<br>"+"<br>";
                }
            });
        
            if (filteredProducts !== "") {
                document.getElementById("products").innerHTML = filteredProducts; 
            } else {
                getAllInfomation(); 
            }
        });
        
    })