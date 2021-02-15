//create map
const map = L.map("mapid").setView([-21.244995, -48.8063554], 16);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/logo-icon.png",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create popup overlay

const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Teste de Nome<a href="orphanage.html?id=1" class="choose-orphanage"><img src="../public/images/arrow-white.svg"></a>'
);

//create and add maker
L.marker([-21.244995, -48.8063554], { icon })
  .addTo(map)
  .bindPopup(popup)
  .openPopup();
