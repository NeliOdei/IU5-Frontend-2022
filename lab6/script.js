// --- TASK1 ---
const square = document.getElementById("color")
square.addEventListener("click", () => (square.style.background = "#" + ((1<<24)*Math.random() | 0).toString(16)));

//--- TASK2 ---
let square2 = document.getElementById("counter")
let timerId;

function start () {
  timerId = setInterval( () => {
    square2.textContent = +square2.textContent + 1;
  }, 500);
}
function stop () {
  clearInterval(timerId);
}
square2.addEventListener('mouseover', start);
square2.addEventListener('mouseout', stop);

//--- TASK3 ---
const button = document.getElementById("button1");
const list = document.getElementById("task3");

button.addEventListener("click", () => {list.classList.toggle("spisok-show")});

//--- TASK4 ---
const sircle = document.getElementById("sircle");
const area = document.getElementById("area");
let flag = false;
document.addEventListener('mousemove',(mouse) =>{
    if(flag==true){
        let x,y;
        const minX = area.offsetLeft + sircle.offsetWidth/2,
        maxX = area.offsetLeft + area.offsetWidth - sircle.offsetWidth/2,
        minY = area.offsetTop + sircle.offsetWidth/2,
        maxY = area.offsetTop + area.offsetHeight - sircle.offsetHeight/2;
        const coordX=mouse.pageX,
        coordY=mouse.pageY;

        if(coordX > maxX){
            x = area.offsetWidth - sircle.offsetWidth;
        }
        else{
            x = coordX - minX;
        }
        if(coordY > maxY){
            y = area.offsetHeight - sircle.offsetHeight;
        }
        else{
            y = coordY - minY;
        }
        if(coordY < minY){
            y = 0;
        }
          if(coordX < minX){
            x = 0 ;
        }
        sircle.style.left = `${x}px`;
        sircle.style.top = `${y}px`;
    }
})
sircle.addEventListener('click', () => {
	flag = true;
 })
 document.addEventListener('keyup', (k) => {
 if (k.key.toLowerCase() == 'escape') {
	flag = false;
 }
})
//--- TASK5 ---
const button2 = document.getElementById("button2");
 const task5 = document.getElementById("task5");
function task(){
	fetch("https://breakingbadapi.com/api/episodes").then((data) => data.json()).then((data) => {
		data.forEach((ep) => {
			const episode = document.createElement("div");

			const season = document.createElement('h2');
			season.innerText = `Season ${ep.season}`
			episode.appendChild(season);

			const Series = document.createElement('h2');
			Series.innerText = `Series № ${ep.episode}`
			episode.appendChild(Series);

			const title = document.createElement('h2');
			title.innerText = `${ep.title}`
			episode.appendChild(title);
			task5.appendChild(episode);
		})
	})
 }
 button2.addEventListener("click", task);
 button2.addEventListener("click", () => {task5.classList.toggle("spisok-show2")});