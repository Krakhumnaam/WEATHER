  const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
  const apiKey="613ea0f65b83816785fb70e79b98c670"
  var icon=document.querySelector(".weather_icon")
 async function city_search(place)
{
  var icon=document.querySelector(".weather_icon")
        //    let apiResponse = await fetch(url +"jhapa"+`&appid=613ea0f65b83816785fb70e79b98c670`)
        let apiResponse= await fetch(url+ place +`&appid=${apiKey}`);
         var result= await apiResponse.json(); 
         console.log(result) 
         document.querySelector(".city_name").innerHTML= place+"'s weather"
      document.querySelector(".humidity").innerHTML= "HUMIDITY:"+Math.round(result.main.humidity)+"%"
      document.querySelector(".temp").innerHTML= "TEMPERATURE: "+ Math.round(result.main.temp) +"°C"
      document.querySelector(".wind_speed").innerHTML = "WIND SPEED:"  + Math.round(result.wind.speed*3.6) + "km/hr"
     if(result.weather[0].main == "Clouds")
     {
      icon.src="CLOUDS.png"
      document.querySelector(".describe").innerHTML= "CLOUDY"

    }
    else if(result.weather[0].main== "Wind")
      {
        icon.src="wind.png"
        document.querySelector(".describe").innerHTML= "WINDY"
      }
      else if(result.weather[0].main == "Clear")
        {
          icon.src="clear (sunny).png"
          document.querySelector(".describe").innerHTML= "SUNNY"
        }
      else if(result.weather[0].main == "Rain")
        {
          document.querySelector(".describe").innerHTML= "RAINY"
          icon.src="RAIN.png"
        }
        document.querySelector(".city_name").style .display= "block"
        document.querySelector(".humidity").style.display= "block"
        document.querySelector(".temp").style.display= "block"
        document.querySelector(".wind_speed").style.display ="block"
        document.querySelector(".describe").style.display ="block"
        
        document.querySelector(".weather_icon").style.display ="block"

                  
       
 }

 
 

 document.getElementById('search_btn').onclick  =()=>{
    var searchedPlace= document.getElementById('search_city').value


    city_search(searchedPlace);
   

 

}
