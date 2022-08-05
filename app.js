function getWeather(input_city_value) {
  let key = "61029fbca04f287b39882584b4ad0e5d";
  // let city_name = "seoul";
  let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${input_city_value}&appid=${key}`;

  fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showWeather(data, input_city_value);
    })
    .catch((err) => {
      alert("잘못된 도시명입니다!");
    });
}

function showWeather(data) {
  const temp_el = document.querySelector(".temp");
  const weather_el = document.querySelector(".weather");
  const icon_el = document.querySelector(".icon img");
  const city_name_el = document.querySelector(".city_name");

  let city_name = data.name;
  // 기온 정보 가져온 후 섭씨로 변환, k = 켈빈(절대온도)
  let temp = data.main.temp;
  let weather = data.weather[0].main;
  let icon = data.weather[0].icon;
  const k = 273.15;
  temp = (temp - k).toFixed();

  console.log(temp, weather, icon, city_name);
  city_name_el.innerHTML = city_name;
  temp_el.innerHTML = temp;
  weather_el.innerHTML = weather;
  icon_el.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

const submit = document.querySelector(".submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const input_value = document.querySelector(".city_value").value;
  getWeather(input_value);
});

// 시작
getWeather("seoul");
