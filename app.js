// Function de las animaciones skills
// 
//document.querySelector o document.getElementById


// function mouseCursor(event){
//     document.getElementById(contentstart).style.backgroundColor = '#46858c'
// }

// function mouseOut(event){
//     documento.getElementById(contentstart).style.backgroundColor = 'white'
// }





function loadingAnimation(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#94be91",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate: 2000,
        })
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#94be91",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate: 2000,
        })
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#94be91",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate: 2000,
        })
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#94be91",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate: 2000,
        })
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#94be91",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate: 2000,
        })
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#94be91",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate: 2000,
        })
    })
}

// Efecto que detecta cuando lanzará las animaciones de la seccion skills
function animationEffect(){
    let skills = document.getElementById("skills");
    let distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let skills = document.getElementsByClassName("chart");
        skills[0].classList.add("chart1");
        skills[1].classList.add("chart2");
        skills[2].classList.add("chart3");
        skills[3].classList.add("chart4");
        skills[4].classList.add("chart5");
        skills[5].classList.add("chart6");

        loadingAnimation();
    }
}


// Detector el scrolling para aplicar la animación de los skills
window.onscroll = function(){
    animationEffect();
}

// funcion que muestra el menu responsivo
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span")
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className = "";
    }
}

// Esta parte del codigo es para agregar la funcion cada que demos click en los links del menu lo dirige al apartado y se cerrará el menu.

const links = document.querySelectorAll("#nav a");
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className="";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}


 