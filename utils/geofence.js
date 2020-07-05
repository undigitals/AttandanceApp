// export default function calcGeoFence(officeLocation, currentLocation) {

//   let R = 6371; // assuming a spherical approximation of the figure of the Earth with radius R=6371 km
//   let distanceInKm = parseInt(
//     R *
//     Math.acos(
//       Math.sin(officeLocation.latitude) * Math.sin(currentLocation.latitude) +
//       Math.cos(officeLocation.latitude) *
//       Math.cos(currentLocation.latitude) *
//       Math.cos(officeLocation.longitude - currentLocation.longitude)
//     )
//   );

//   console.log('distanceInKm:', distanceInKm)

//   if (distanceInKm - officeLocation.radius > 0) {
//     return false
//   } else if (distanceInKm - officeLocation.radius <= 0) {
//     return true
//   }
// }

// let officeLocation = {
//   longitude: -1.2923,
//   latitude: 0.7102,
//   radius: 5,
// };

// let currentLocation = {
//   longitude: 0.04,
//   latitude: 0.8527,
// };

// console.log(calcGeoFence(officeLocation, currentLocation));




Number.prototype.toRad = function () {
  return this * Math.PI / 180;
};

const calculateGeofence = (officeLatitude, officeLongitude, currentLatitude, currentLongitude, officeRadius) => {
  console.log('officeLatitude=', officeLatitude, 'officeLongitude=', officeLongitude, 'currentLatitude=', currentLatitude, 'currentLongitude=', currentLongitude);

  var R = 6371; // radius of the Earth in km
  var dLat = (currentLatitude - officeLatitude).toRad();
  var dLng = (currentLongitude - officeLongitude).toRad();
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + (officeLatitude.toRad()) * Math.cos(currentLatitude.toRad()) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = parseFloat(R * c).toFixed(2);

  console.log('result:', d);

  const officeRadiusInFloat = parseFloat(officeRadius).toFixed(2)

  if (d - officeRadiusInFloat > 0) {
    return {
      isInRadius: false,
      distanceToRadius: d - officeRadiusInFloat,
      distanceToDestination: d
    }
  } else {
    return {
      isInRadius: true,
      distanceToRadius: d - officeRadiusInFloat,
      distanceToDestination: d
    }
  }
}

// calculate(37.669684, 126.761743, 37.668342, 126.763328)

export default calculateGeofence