
// document.body.style.backgroundColor="red"

const button=document.querySelector(".search-button")
const inputCity=document.getElementById("input")
const img=document.getElementById("weth-img")
const temp=document.querySelector(".temp")
const data=document.getElementById("weth")
const speed=document.getElementById("speed")
const humid=document.getElementById("humid")
const not_found=document.querySelector(".not-found")
const weth_body=document.querySelector(".weather-body")

async function Weather(city){
    // document.body.style.backgroundColor="red"
    document.querySelector(".search-button").style.backgroundColor = "orange"
    // let api_key="b2a6ffdec2042eb9c09fd643f8754fab"
    const api_key = "2c689a84085a6cf5a30976dd0ebca38a"
    // const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weth_data = await fetch(`${url}`).then
    (response => response.json())
    console.log(weth_data)

    if(weth_data.cod === `404`){
        not_found.style.display="flex"
        weth_body.style.display="none"
        console.log("Error")
        return
    }
    not_found.style.display='none'
    weth_body.style.display="flex"

    temp.innerHTML=`${Math.round(weth_data.main.temp-273.15)}°C`
    data.innerHTML=`${weth_data.weather[0].description}`
    speed.innerHTML=`${weth_data.wind.speed}Km/H`
    humid.innerHTML=`${weth_data.main.humidity}%`

    switch(weth_data.weather[0].main){

        case('Clouds'):
            img.src="./photos/cloud.png";
            break;

        case('Clear'):
            img.src="./photos/clear.png";
            break;

        case('Mist'):
            img.src="./photos/rain.png";
            break;

        case('Clouds'):
            img.src="./photos/mist.png";
            break;

        case('Snow'):
            img.src="./photos/snow.png";
            break;
        default:
            img.src="./photos/mist.png";
            break;

    }
 }

button.addEventListener("click",() => {
    Weather(inputCity.value)
})
