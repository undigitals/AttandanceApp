## Run the project on web:
- `expo start:web`
- or `expo start --web`
- or `yarn web`

## Run the project on mobile:
- `expo start --android`
- or `yarn android`
- `expo start --ios`
- or `yarn ios`

## Added features:

- one codebase for web and mobile platformss
- when `clockedIn` but exit from app or out of range `clockedIn` should be saved.
- recent history should be saved even after exit from the app
- show how much currentLoc is away from the radius (office radius)
  - but if the currentLoc is already in radius does not show
- show how much distance away from the destination (office destination)
-

## Resources

1. `Geofence` is not supported on expo (react-native-web) as it was using `TaskManager` behind and browsers do not support it.
   I tried to write my own `geofence` function using these equetions.
   http://janmatuschek.de/LatitudeLongitudeBoundingCoordinates#:~:text=Moving%20along%20a%20circle%20of%20latitude%20means%20moving%20along%20a,cos(lat))%20%3D%200.9039.
