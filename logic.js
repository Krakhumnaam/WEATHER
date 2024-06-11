  const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
  const apiKey="613ea0f65b83816785fb70e79b98c670"
 async function city_search(place)
{
        //    let apiResponse = await fetch(url +"jhapa"+`&appid=613ea0f65b83816785fb70e79b98c670`)
        let apiResponse= await fetch(url+ place +`&appid=${apiKey}`);
         var result= await apiResponse.json(); 
         console.log(result) 
         document.querySelector(".city_name").innerHTML= place
      document.querySelector(".humidity").innerHTML= "HUMIDITY:"+result.main.humidity+"%"
      document.querySelector(".temp").innerHTML= "TEMPERATURE: "+ result.main.temp +"°C"
      document.querySelector(".wind_speed").innerHTML = "WIND SPEED:"  + result.wind.speed + "km/hr"
// yo aako chaina hai!      if(result.weather[0].main == "Clouds")
//     {
//         document.querySelector(".weather_icon").src="C:\Users\DELL\Desktop\GIT\WEATHER\CLOUDS.png"
//     }
           
 }
document.getElementById('search_btn').onclick=()=>{
    var searchedPlace= document.getElementById('search_city').value


    city_search(searchedPlace);
   

 

}
