
fetch("/data/data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      if (element['id'] == sessionStorage.get) {

        sessionStorage.pic2 = element['pic'][1]
        sessionStorage.pic1 = element['pic'][0]
        document.getElementById("hinhLon1").src = sessionStorage.pic1
        document.getElementById("hinhLon2").src = sessionStorage.pic2
        document.getElementById("hinh2").src = sessionStorage.pic2
        document.getElementById("hinh1").src = sessionStorage.pic1


        document.getElementById("description").innerHTML = element['description'];
        document.getElementById("information").innerHTML = "<table ><tr><th>Amount of water</th><td>" +
          element['water'] + "</td></tr><tr>" + "<th>Amount of light</th><td>" + element['light'] +
          "</td></tr><tr>" + "<th>Uses</th><td>" + element['cat'] + "</td></tr></table>";
        document.getElementById("proname").innerHTML = "<h1>" + element['name'] + "</h1>";
        document.getElementById("proprice").innerHTML = "Price: $" + element['price'] +
          "<div><span>Please follow me</span> <a href='wishPage.html'><input type='submit' id= 'Wishpage' data-id='" + element['id'] + "' value='&#10084;'></a> </div>"

      }
    });
    var wish = document.querySelector("#Wishpage");
    wish.addEventListener('click', function () {
      data.forEach(element => {
        if (element['id'] == this.getAttribute('data-id')) {
          localStorage.setItem("wish_" +element['id'], element['id']);
        }
      })
    })
  })
  .catch(error => console.error('Error:', error));