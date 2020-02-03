$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Tianjin&units=metric&appid=41a0c5ac1390f6bb66614d60e76d01c0",
function(data){
  console.log(data);
  var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var weather = data.weather[0].main;
  var temp = Math.floor(data.main.temp);
  var feels = Math.floor(data.main.feels_like);

//   console.log(icon);
  $('.icon').attr('src', icon);
  $('.weather').append(weather);
  $('.temp').append(temp);
  $('.feels').append(feels);

});