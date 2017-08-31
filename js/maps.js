//maps

function initMap() {
        var uluru = {lat: 30.399467, lng:-97.709061 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      };

initMap();
