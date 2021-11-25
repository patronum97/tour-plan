// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    center: [39.95940754, 32.77204902],
    zoom: 18,
  });
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [39.95940754, 32.77204902], // координаты точки
    },
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
}
