const city1 = document.getElementById("search1")

let res=[];

let city ="Moscow"

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=6e39d0c6204167c2b237300957bfaec3`)
    .then((response)=>{
        return response.json();
   })
    .then((data) => {
        document.querySelector('.city_name').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = data.main.temp+'&deg; C';
        document.querySelector('.descr').innerHTML = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
        document.querySelector('.pressure').innerHTML = 'Pressure: '+Math.round(Number(data.main.pressure) * 0.75)+' mmhg';
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("imag").src="http://openweathermap.org/img/wn/"+data.weather[0].icon + "@2x.png";
        let i =data.weather[0].main[0].toLowerCase() + data.weather[0].main.slice(1);
        if (i=="rain"){document.getElementById("wrap1").style.backgroundImage ="url('https://avatars.mds.yandex.net/get-images-cbir/61254/JunBTX-yu1dPu0LzTsHPXw7846/ocr')";}
        else if (i=="mist"){document.getElementById("wrap1").style.backgroundImage ="url('http://клод-моне.рф/images/Картины%20Клод%20Моне%2018/Картины%20Клода%20Моне/Мост%20Ватерлоо,%20затуманенное%20солнце%201903г.jpg')";}
        else if (i=="snow"){document.getElementById("wrap1").style.backgroundImage ="url('https://www.asu.ru/files/images/editor/2015-02/monet2.jpg')";}
        else if (i=="clear"){document.getElementById("wrap1").style.backgroundImage ="url('https://spb-krovati.ru/images/src/0bd6636d5ca2fb12133e47dc349486dca381f8c4.jpg')";}
        else if (i=="clouds"){document.getElementById("wrap1").style.backgroundImage ="url('https://i.pinimg.com/originals/b2/45/d8/b245d8985b3d68579964a6de4b0c2ff6.jpg')";}
        else if (i=="thunderstorm"){document.getElementById("wrap1").style.backgroundImage ="url('https://regnum.ru/uploads/pictures/news/2018/07/28/regnum_picture_1532797937525397_normal.jpg')";}
    }
    );

city1.addEventListener("change",() => {
    city = city1.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=6e39d0c6204167c2b237300957bfaec3`)
    .then((response)=>{
        return response.json();
    })
    .then((data) => {
        if (data.cod == 404){ alert("Город не найден"); }
        else{
        document.querySelector('.city_name').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = data.main.temp+'&deg; C';
        document.querySelector('.descr').innerHTML = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
        document.querySelector('.pressure').innerHTML = 'Pressure: '+Math.round(Number(data.main.pressure) * 0.75)+' mmhg';
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("imag").src="http://openweathermap.org/img/wn/"+data.weather[0].icon + "@2x.png";
        let i =data.weather[0].main[0].toLowerCase() + data.weather[0].main.slice(1);

        if (i=="rain"){document.getElementById("wrap1").style.backgroundImage ="url('https://avatars.mds.yandex.net/get-images-cbir/61254/JunBTX-yu1dPu0LzTsHPXw7846/ocr')";}
        else if (i=="mist"){document.getElementById("wrap1").style.backgroundImage ="url('http://клод-моне.рф/images/Картины%20Клод%20Моне%2018/Картины%20Клода%20Моне/Мост%20Ватерлоо,%20затуманенное%20солнце%201903г.jpg')";}
        else if (i=="snow"){document.getElementById("wrap1").style.backgroundImage ="url('https://www.asu.ru/files/images/editor/2015-02/monet2.jpg')";}
        else if (i=="clear"){document.getElementById("wrap1").style.backgroundImage ="url('https://spb-krovati.ru/images/src/0bd6636d5ca2fb12133e47dc349486dca381f8c4.jpg";}
        else if (i=="clouds"){document.getElementById("wrap1").style.backgroundImage ="url('https://i.pinimg.com/originals/b2/45/d8/b245d8985b3d68579964a6de4b0c2ff6.jpg')";}
        else if (i=="thunderstorm"){document.getElementById("wrap1").style.backgroundImage ="url('https://regnum.ru/uploads/pictures/news/2018/07/28/regnum_picture_1532797937525397_normal.jpg')";}
    }});
    city1.value = '';
} );



