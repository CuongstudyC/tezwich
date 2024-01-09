const checkboxes = document.querySelectorAll('.filter-checkbox');
// Sử dụng fetch để tải tệp JSON từ máy chủ
fetch("/data/data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("products").innerHTML = "";
        function getAllInfomation() {

            data.forEach(element => {
                document.getElementById("products").innerHTML +=
                    "<div class='col-md-4'> " +
                    "<div><a href='product_detail_page.html?id=" + element['id'] + "' class='productImg'" + "'" + "><img src='" + element['pic'][0] + "' alt='' class='flowerImaged'" +
                    "data-id ='" + element['id'] + "'>"
                    + "</a></div>" +
                    "<h3 class='font-text'>" + element['name'] + "</h3>" +
                    "<h3 class='font-text'>Price:" + element['price'] + "</h3>" +
                    " <a href='' data-id='" + element['id'] + "' class='add-to-cart btn btn-primary'>ADD TO CART</a>" +
                    "</div>" + "<br>" + "<br>";
            })
        }
        getAllInfomation();
        const getData = document.querySelectorAll(".flowerImaged");
        getData.forEach(function (getValue) {
            getValue.addEventListener('click', function () {
                var idValue = getValue.getAttribute('data-id');
                sessionStorage.get = idValue;
            });
        });

        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var count = 0;
                if (this.checked) {
                    data.forEach(element => {
                        if (element['cat'] == this.value || element['water'] == this.value || element['light'] == this.value) {
                            if (count == 0) {
                                document.getElementById("products").innerHTML = "";
                                count = parseInt(count) + 1;
                            }
                            document.getElementById("products").innerHTML +=
                                "<div class='col-md-4'> " +
                                "<div><a href='product_detail_page.html?id=" + element['id'] + "' class='productImg'" + "'" + "><img src='" + element['pic'][0] + "' alt='' class='flowerImaged'" +
                                "data-id ='" + element['id'] + "'>"
                                + "</a></div>" +
                                "<h3 class='font-text'>" + element['name'] + "</h3>" +
                                "<h3 class='font-text'>Price:" + element['price'] + "</h3>" +
                                " <a href='' data-id='" + element['id'] + "' class='add-to-cart btn btn-primary'>ADD TO CART</a>" +
                                "</div>" + "<br>" + "<br>";
                        }
                        // Uncheck other checkboxes
                        checkboxes.forEach(function (otherCheckbox) {
                            if (otherCheckbox !== checkbox) {
                                otherCheckbox.checked = false;
                            }
                        });
                    })
                    const getData = document.querySelectorAll(".flowerImaged");
                    getData.forEach(function (image) {
                        image.addEventListener('click', function () {
                            var idValue = image.getAttribute('data-id');
                            sessionStorage.get = idValue;

                            // Bạn có thể thực hiện xử lý khác ở đây
                        });
                    });
                } else {
                    document.getElementById("products").innerHTML = "";
                    getAllInfomation();
                    const getData = document.querySelectorAll(".flowerImaged");
                    getData.forEach(function (image) {
                        image.addEventListener('click', function () {
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
                        "<div class='col-md-4'> " +
                        "<div><a href='product_detail_page.html?id=" + element['id'] + "' class='productImg'" + "'" + "><img src='" + element['pic'][0] + "' alt='' class='flowerImaged'" +
                        "data-id ='" + element['id'] + "'>"
                        + "</a></div>" +
                        "<h3 class='font-text'>" + element['name'] + "</h3>" +
                        "<h3 class='font-text'>Price:" + element['price'] + "</h3>" +
                        " <a href='' data-id='" + element['id'] + "' class='add-to-cart btn btn-primary'>ADD TO CART</a>" +
                        "</div>" + "<br>" + "<br>";
                }
            });

            if (filteredProducts !== "") {
                document.getElementById("products").innerHTML = filteredProducts;
            } else {
                document.getElementById("products").innerHTML = "";
            }
        });


        //xử lí phần Cart:
        document.getElementById("getAllPrice").innerHTML = 0;
        var getCart = document.getElementById("Carting");
        getCart.innerHTML = "";
        const showCart = document.querySelectorAll(".add-to-cart");
        showCart.forEach(element => {
            element.addEventListener('click', function () {
                data.forEach(getdata => {
                    if (getdata['id'] == this.getAttribute("data-id")) {
                        localStorage.setItem(getdata['id'], getdata['id']);
                    }
                })
            })
        })

        function displayall(getdata,sum){
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
        }
            var sum = 0;
            getCart.innerHTML = "";
            data.forEach(getdata => {
              displayall(getdata,sum);
            })

        var getNum = document.querySelectorAll(".numberous");
        getNum.forEach(num => {
            num.addEventListener('change', function () {
                data.forEach(element => {
                    if (element['id'] == num.getAttribute("data-num")) {
                        document.getElementById("price_" + element['id']).innerHTML = parseInt(num.value) * element['price'];
                        localStorage.setItem("countNumber_" + element['id'], num.value);
                        sum = 0;
                        for (var getdata of data) {
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
                data.forEach(getdata => {
                    if (getdata['id'] == this.getAttribute("data-delete")) {
                        localStorage.removeItem(getdata['id']);
                        localStorage.removeItem("countNumber_" + getdata['id']);
                        window.location.href = '/html/products.html';
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
        quit.addEventListener('click', function () {
            var cou = 0;
            data.forEach(element => {
                if (localStorage.getItem(element['id']) == element['id']) {
                    cou = 1;
                }
            })
            if (cou == 1) {
                data.forEach(element => {
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