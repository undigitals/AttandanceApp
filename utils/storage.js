const Longitude = 126.832663
const Latitude = 37.634616
const access_token =
  'pk.eyJ1IjoiaWFtYXBhcms4OSIsImEiOiJjanlpZmF5c3AwOXJzM2NxaDQzNWhiaDRmIn0.C-e2EpmyDtsqPbu9FjJz5Q'
const link = `https://api.mapbox.com/geocoding/v5/mapbox.places/${Longitude},${Latitude}.json?access_token=${access_token}`

export default async function getAddress(Latitude, Longitude) {
  let response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${Longitude},${Latitude}.json?access_token=pk.eyJ1IjoiaWFtYXBhcms4OSIsImEiOiJjanlpZmF5c3AwOXJzM2NxaDQzNWhiaDRmIn0.C-e2EpmyDtsqPbu9FjJz5Q`
  )
  let data = await response.json()
  return data
}

// console.log(getAddress(access_token, Longitude, Latitude))
