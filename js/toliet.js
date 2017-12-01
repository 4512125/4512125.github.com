var 화장실데이터 = [{
  "이름": "시민화장실",
  "주소": "제주특별자치도 제주시 이도2동 1176-1",
  "관리기관": "제주시 총무과",
  "전화번호": "064-710-2041",
  "mapx": "33.432084",
  "mapy": "126.288723"
}, {
  "이름": "시민화장실",
  "주소": "제주특별자치도 제주시 이도2동 1176-1",
  "관리기관": "제주시 총무과",
  "전화번호": "064-710-2041",
  "mapx": "33.432083",
  "mapy": "126.288722"
}];

function initMap() {
  var jeju = {
    lat: 33.3616658,
    lng: 126.5204118
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: jeju
  });
  for (var i = 0; i < 화장실데이터.length; i++) {
    var marker = new google.maps.Marker({
      position: {
        lat: 화장실데이터[i]["mapx"] * 1,
        lng: 화장실데이터[i]["mapy"] * 1
      },
      map: map
    });
    console.log(화장실데이터[i]["mapx"] * 1);
    console.log(화장실데이터[i]["mapy"] * 1);
  };

  //내 위치 찍기
  var infoWindow = new google.maps.InfoWindow({
    map: map
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}
