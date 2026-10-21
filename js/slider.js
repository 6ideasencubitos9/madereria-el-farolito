


///////////////////Jumbotron/////////////////////////////////////////////////////////////////////////
var cont=0;

function cambia() {

cont = cont % 3;

if (cont==1){

document.getElementById("fotocambia").src="imagenes/banner1.png";

}
if (cont==2){

document.getElementById("fotocambia").src="imagenes/banner2.png";

}




cont++;

}
function inicio() {

setInterval(cambia, 1500);

}

///////////////////////////////////////////////////////////////////////////////////////////////
////////////------INICIO SCRIPST JAVA-----/////////////////////////////////////////////////////


window.onload=inicio(),inicio2(),inicio3(),inicio4(),inicio5(),inicio6(),inicio7(),inicio8(),inicio9();

///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////DESARROLLO WEB//////////////////////////////////////////////////////////////

function inicio2() {

setInterval(cambia2, 2000);

}

function cambia2() {

cont = cont % 3;

if (cont==1){

document.getElementById("fotocambia1").src="imagenes/banner-dw.png";

}
if (cont==2){

document.getElementById("fotocambia1").src="imagenes/banner-dw.png";

}


cont++;

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////---cctv--/////////////////////////////////////////////////////////////////////////////////////////////

function inicio3() {

setInterval(cambia3, 3000);

}

function cambia3() {

cont = cont % 4;

if (cont==1){

document.getElementById("fotocambia2").src="imagenes/banner-cctv.png";

}
if (cont==2){

document.getElementById("fotocambia2").src="imagenes/banner-cctv.png";

}
if (cont==3){

document.getElementById("fotocambia2").src="imagenes/banner-cctv.png";

}


cont++;

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Slider 3 mantenimento/////////////////////////////////////////////////////////////////////////////////////
function inicio4() {

setInterval(cambia4, 3000);

}

function cambia4() {

cont = cont % 3;

if (cont==1){

document.getElementById("fotocambia3").src="app-assets/imagenes/banner1-mante.jpg";

}
if (cont==2){

document.getElementById("fotocambia3").src="app-assets/imagenes/banner2-mante.jpg";

}


cont++;

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Slider 4 equipo activo/////////////////////////////////////////////////////////////////////////////////////
function inicio5() {

setInterval(cambia5, 3000);

}

function cambia5() {

cont = cont % 3;

if (cont==1){

document.getElementById("fotocambia4").src="app-assets/imagenes/banner1-eqactivo.jpg";

}
if (cont==2){

document.getElementById("fotocambia4").src="app-assets/imagenes/banner2-eqactivo.jpg";

}


cont++;

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Slider 5 cableado estructurado/////////////////////////////////////////////////////////////////////////////////////
function inicio6() {

setInterval(cambia6, 3000);

}

function cambia6() {

cont = cont % 3;

if (cont==1){

document.getElementById("fotocambia5").src="app-assets/imagenes/banner1-estructurado.jpg";

}
if (cont==2){

document.getElementById("fotocambia5").src="app-assets/imagenes/banner2-canalizacion.jpg";

}


cont++;

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Slider 6 cctv/////////////////////////////////////////////////////////////////////////////////////
function inicio7() {

setInterval(cambia7, 3000);

}

function cambia7() {

cont = cont % 3;

if (cont==1){

document.getElementById("fotocambia6").src="app-assets/imagenes/banner1-cctv-marcas.jpg";

}
if (cont==2){

document.getElementById("fotocambia6").src="app-assets/imagenes/banner2-cctv-marcas.jpg";

}


cont++;

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Slider 7 proteccion/////////////////////////////////////////////////////////////////////////////////////
function inicio8() {

setInterval(cambia8, 3000);

}

function cambia8() {

cont = cont % 3;

if (cont==1){

document.getElementById("fotocambia7").src="app-assets/imagenes/banner1-perimetral.jpg";

}
if (cont==2){

document.getElementById("fotocambia7").src="app-assets/imagenes/banner2-electrica.jpg";

}


cont++;

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////// Slider 8 clientes/////////////////////////////////////////////////////////////////////////////////////
function inicio9() {

setInterval(cambia9, 1500);

}

function cambia9() {

cont = cont % 3;

if (cont==1){

document.getElementById("fotocambia8").src="app-assets/imagenes/clientes1.png";

}
if (cont==2){

document.getElementById("fotocambia8").src="app-assets/imagenes/clientes2.png";

}


cont++;

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////