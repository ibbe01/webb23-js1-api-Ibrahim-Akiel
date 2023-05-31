const input = document.getElementById('input');
const outputContainer = document.getElementById('outputContainer');


const apiKey = '93cf9eafb3bcd3980df025882276a279';


const pTemp = document.getElementById('pTemp');
    const pWind = document.getElementById('pWind');
    const imageIcon = document.getElementById('image');
    const pDescription = document.getElementById('pDescription');
    const pError = document.createElement('p');


input.addEventListener('submit', async (e)=>{
    e.preventDefault() 
    pError.innerText = '';
    const lname = document.getElementById('lname')
    
    try {
        const data = await getCityWeather(lname.value)
    const temp = data.main.temp;
    const wind = data.wind.speed;
    const description = data.weather[0].description;
    const iconId = data.weather[0].icon

    const icon = await fetch( 'https://openweathermap.org/img/wn/'+iconId+'@2x.png');
    pTemp.innerHTML = '';
    pWind.innerHTML = '';
    pDescription.textContent = '';
    imageIcon.src = '';
    imageIcon.src = icon.url;
   pTemp.value = temp;
   pWind.value = wind;
   pDescription.value = description;
    
    
    pTemp.append('Temperature: ', temp, 'C');
    pWind.append('Wind speed: ', wind, 'm/s');;
    pDescription.append('Description: ', description, imageIcon);
    } catch(error) {
        console.log(error)
    }

    
    
    
    
})

const getCityWeather = async (name) =>{
    try {
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=93cf9eafb3bcd3980df025882276a279&units=metric';

        const res = await fetch(apiUrl);
        if(res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error(res.status)
        }
        
    

    } catch(error) {
        
        pError.innerText = 'Sorry no such city or server found maybe network problem i dont know'
        document.body.append(pError)

    }
   
      
   
}










