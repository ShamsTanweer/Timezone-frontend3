fetch(
  "https://api.ipgeolocation.io/ipgeo?apiKey=bbb627d8419d43f0a83fd96a1670514c"
)
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    data = objectData;

    let lat = data.latitude;
    let lon = data.longitude;
    let country = data.country_name;
    let city = data.city;
    let postcode = data.zipcode;

    // console.log(lat, lon);
    // console.log(data);

    let page1 = document.getElementById("page");

    function fetchData() {
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
          // console.log();
        } else {
          console.log("Geolocation not supported");
        }

        function showPosition(position) {
          // console.log(position.coords.latitude);
          console.log(position);
                console.log("Carrer del Pintor Navarro Llorens, 7, 46008 València, Valencia, Spain");

          // console.log(position.coords.longitude);

          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;

          fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=816850ca6a1a4d2da3fc5b0001e63f9a`
          ).then((data) => {
            return data.json();
          });
          Wdata = objectData;
          if ((result = {})) {
            // console.log(Wdata);
          } else {
            console.log("No location found");
          }

          page1.innerHTML = `<h1>TimeZone API</h1>
      <h1>Your Current Time Zone</h1>
      <div class="firstD">
      <p>Name of the Time Zone: ${Wdata.time_zone.name}</p>
      <p>Lat: ${latitude} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Long:${longitude}</p>
  
      <p>Offset STD : ${Wdata.time_zone.offset}</p>
      <p>Offset STD Seconds: ${Wdata.time_zone.offset}</p>
      <p>Offset DST: ${Wdata.time_zone.is_dst}</p>
      <p>Offset DST Seconds:</p>
  
      <p>Country: ${country}</p>
      <p>Postcode: ${postcode}</p>
      <p>City: ${city}</p>
  
  
      </div>
      `;
        }
      }
      getLocation();

      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=816850ca6a1a4d2da3fc5b0001e63f9a`
      ).then((data) => {
        return data.json();
      });
      Wdata = objectData;
      if ((result = {})) {
        // console.log(Wdata);
      } else {
        console.log("No location found");
      }

      page1.innerHTML = `<h1>TimeZone API</h1>
  <h1>Your Current Time Zone</h1>
  <div class="firstD">
  <p>Name of the Time Zone: ${Wdata.time_zone.name}</p>
  <p>Lat: ${lat} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Long:${lon}</p>

  <p>Offset STD : ${Wdata.time_zone.offset}</p>
  <p>Offset STD Seconds: ${Wdata.time_zone.offset}</p>
  <p>Offset DST: ${Wdata.time_zone.is_dst}</p>
  <p>Offset DST Seconds:</p>

  <p>Country: ${country}</p>
  <p>Postcode: ${postcode}</p>
  <p>City: ${city}</p>


  </div>
  `;

      let address2 =
        "Carrer del Pintor Navarro Llorens, 7, 46008 València, Valencia, Spain";

      let btn = document.getElementById("btn");
      let input = document.getElementById("input");
      // console.log(input.value);
      btn.addEventListener("click", function () {
        // console.log(input.value);
        address = input.value;
        // console.log(address);

        fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
            address
          )}&apiKey=816850ca6a1a4d2da3fc5b0001e63f9a`
        )
          .then((resp) => resp.json())
          .then((Result) => {
            if (address == address2) {
              // console.log(Result.features[0].properties.country);
              srcData = Result.features[0].properties;

              let Rpage = document.getElementById("Rpage");

              Rpage.innerHTML = `<h1>Your Result</h1>
    <div class="second">
    <p>Name of the Time Zone: ${srcData.timezone.name} </p>
    <p>Lat: ${srcData.lat}  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Long:${srcData.lon} </p>

    <p>Offset STD :  ${srcData.timezone.offset_STD}  </p>
    <p>Offset STD Seconds:  ${srcData.timezone.offset_STD_seconds}  </p>
    <p>Offset DST: ${srcData.timezone.offset_DST}  </p>
    <p>Offset DST Seconds: ${srcData.timezone.offset_DST_seconds}</p>

    <p>Country: ${srcData.country} </p>
    <p>Postcode: ${srcData.postcode} </p>
    <p>City: ${srcData.city} </p>


    </div>
    `;
            } else {
              let Rpage = document.getElementById("Rpage");

              Rpage.innerHTML = `<h6>Time zone could not be found. Please Enter an address!</h6>`;
              // console.log("No data found");
              console.log("Enter this address:", address2);
            }
            input.value = "";
          });
      });
    }
    fetchData();
  });
