const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//create maps
const map = L.map('map', options).setView([-27.222633, -49.6455874], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});



//create and add marker
L.marker([-27.222633, -49.6455874], {icon})
.addTo(map)


// image gallery

function selectImage(event){
    const button = event.currentTarget;

    // remover todas as classes .active

    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeAcitiveClass); // para cada botao executa a funcao removeAcitiveClass
    
    function removeAcitiveClass(button){ // A removeAcitiveClass procura dentro do botao a class "active" se for encontrada aplica o remove => que remover a classe passada como argumento
        button.classList.remove("active");
    }

    // selecionar a image clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    // atualizar o container de image
    imageContainer.src = image.src;

    //adicionar a classe .active para este botao
    button.classList.add('active');


}