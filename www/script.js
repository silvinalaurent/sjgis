// Coordenadas iniciales (cambiá por las de tu zona)
const centro = [-32.20839, -58.21793]; // San José, Entre Ríos

// Crear el mapa
const mapa = L.map('map').setView(centro, 13);

// Agregar capa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

// Evento click: agregar marcador donde se haga clic
mapa.on('click', function (e) {
  const { lat, lng } = e.latlng;

  L.marker([lat, lng])
    .addTo(mapa)
    .bindPopup(`Marcador en:<br>Lat: ${lat.toFixed(5)}<br>Lng: ${lng.toFixed(5)}`)
    .openPopup();

  console.log("Punto marcado:", lat, lng);
});