const getSvgMarker = (google, markerType) => {
  switch (markerType) {
    case 'currentLocation':
      return {
        // path: 'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
        // fillColor: 'blue',
        // fillOpacity: 0.6,
        // strokeWeight: 0,
        // rotation: 0,
        // scale: 1.5,
        url: 'https://www.svgrepo.com/show/382702/location-pin-navigation-destination-maps.svg',
        scaledSize: new google.maps.Size(28, 28),
        anchor: new google.maps.Point(15, 30)
      };
    case 'carBlocking':
      return {
        url: 'https://www.svgrepo.com/show/122406/small-car.svg',
        scaledSize: new google.maps.Size(28, 28),
        anchor: new google.maps.Point(15, 30)
      };
    case 'bikeBlocking':
      return {
        url: 'https://www.svgrepo.com/show/98190/bike.svg',
        scaledSize: new google.maps.Size(28, 28),
        anchor: new google.maps.Point(15, 30)
      };
    case 'step':
      return {
        url: 'https://www.svgrepo.com/show/355278/steps.svg',
        rotation: 0,
        scaledSize: new google.maps.Size(28, 28),
        anchor: new google.maps.Point(15, 30)
      };
    case 'narrowSidewalk':
      return {
        url: 'https://www.svgrepo.com/show/86840/narrow-two-lanes-sign.svg',
        rotation: 0,
        scaledSize: new google.maps.Size(28, 28),
        anchor: new google.maps.Point(15, 30)
      };
    default:
      return {
        url: 'https://www.svgrepo.com/show/340584/location-hazard-filled.svg',
        rotation: 0,
        scaledSize: new google.maps.Size(28, 28),
        anchor: new google.maps.Point(15, 30)
      };
  }
};

const markerTypes = ['carBlocking', 'bikeBlocking', 'step', 'narrowSidewalk', 'other'];

export { getSvgMarker, markerTypes };
