
function Defolt(){
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      const data = await response.json();
      const governorate = data.address.state || data.address.county || "غير معروف";
  
    var x = new XMLHttpRequest();
    x.open( "Get" , `https://api.weatherapi.com/v1/current.json?key=930af1567fa44ef68fd212254240312&q=${governorate}` )
    x.send()
    var k ;
    x.addEventListener( "loadend" , function(){
        if(x.status<=200){
            k = JSON.parse(x.response);
          }   

    var date = new Date(k.current.last_updated);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayNumber = date.getDate();
    var dayName = days[date.getDay()];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthName = months[date.getMonth()];
        var cartona = ` <div id="C1" class="card-body C1">
        <h5 class="card-title card-title1"> ${k.location.name} </h5>
        <div class="">
          <h1 class="card-text textcard1">${k.current.temp_c}<sup>o</sup>C</h1>
        </div>
        <img class="W_Cloud" src="https:${k.current.condition.icon}" alt="">
        <p class="ColorCardP1"> ${k.current.condition.text} </p>

        <span class=" me-3">
          <img class="me-1" width="w-100" src="./Images/icon-umberella.png" alt="umberella">
          <span>20%</span>
        </span>
        <span class="me-3">
          <img class="me-1" width="w-100" src="./Images/icon-wind.png" alt="wind">
          <span>18km/h</span>
        </span>
        <span class="me-3">
          <img class="me-1" width="w-100" src="./Images/icon-compass.png" alt="compass">
          <span>East</span>
        </span>


      </div> ` ;

    document.getElementById("C1").innerHTML= cartona;
    document.getElementById("F1").innerHTML= `
    <div class= "d-flex justify-content-between" >
    <small class=""> ${dayName} </small>
    <small class=""> ${dayNumber + " " + monthName} </small></div>`;
  })

  },
  (error) => {
    console.error("حدث خطأ أثناء تحديد الموقع:", error.message);
  }
  );
  } else {
  console.log("المتصفح لا يدعم تحديد الموقع الجغرافي.");
  }
}



Defolt();        // call defolt function to the current location  



function getCurrntday(SearchInputListener){
    var x = new XMLHttpRequest();
    x.open( "Get" , `https://api.weatherapi.com/v1/current.json?key=930af1567fa44ef68fd212254240312&q=${SearchInputListener}` )
    x.send()
    var k ;
    x.addEventListener( "loadend" , function(){
        if(x.status<=200){
          k = JSON.parse(x.response);
        }
    var date = new Date(k.current.last_updated);

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayNumber = date.getDate();
    var dayName = days[date.getDay()];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthName = months[date.getMonth()];
        var cartona = ` <div id="C1" class="card-body C1">
        <h5 class="card-title card-title1"> ${k.location.name} </h5>
        <div class="">
          <h1 class="card-text textcard1">${k.current.temp_c}<sup>o</sup>C</h1>
        </div>
        <img class="W_Cloud" src="https:${k.current.condition.icon}" alt="">
        <p class="ColorCardP1"> ${k.current.condition.text} </p>

        <span class=" me-3">
          <img class="me-1" width="w-100" src="./Images/icon-umberella.png" alt="umberella">
          <span>20%</span>
        </span>
        <span class="me-3">
          <img class="me-1" width="w-100" src="./Images/icon-wind.png" alt="wind">
          <span>18km/h</span>
        </span>
        <span class="me-3">
          <img class="me-1" width="w-100" src="./Images/icon-compass.png" alt="compass">
          <span>East</span>
        </span>
      </div> `;
    document.getElementById("C1").innerHTML= cartona;
    document.getElementById("F1").innerHTML= `
    <div class= "d-flex justify-content-between" >
    <small class=""> ${dayName} </small>
    <small class=""> ${dayNumber + " " + monthName} </small></div>`;
})}

function getSearchCities(SearchInputListener){
    
  var x = new XMLHttpRequest();
  x.open( "Get" , `https://api.weatherapi.com/v1/search.json?key=930af1567fa44ef68fd212254240312&q=${SearchInputListener}` )
  x.send()
  var k ;
  x.addEventListener( "loadend" , function(){
      if(x.status<=200){
      k = JSON.parse(x.response);
      getCurrntday(SearchInputListener)
  }
})}
var SearchInput = document.querySelector(".input1");
SearchInput.addEventListener("keyup" , function(e){
    getSearchCities(e.target.value);
})


