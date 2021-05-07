// form logic:
things = [{ inquiry: "toronto" }]

const handleForm = (ev) => {
    ev.preventDefault() // stops form submission
    let search = {
        inquiry: document.getElementById("user-search").value
    }

    things.unshift(search) // add search to spot one and push everything donw

    document.forms[0].reset() // clears form for next entry

    updateLocation()

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', handleForm)
})

updateLocation()





// getting data from server
async function weather(location) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=32d271370432bbbd9ea00d52e8e0d6ee&units=metric`
    let response = await fetch(url, { mode: 'cors' })
    let data = await response.json()
    // console.log(data.weather[0].description)
    return Object.assign({}, data)
}

function updateLocation() {

    // update temp_location to new search entry
    temp_location = things[0].inquiry

    weather(temp_location).then((data) => {
        // console.log(data)

        // uppercasing the description
        let descrip_cap = data.weather[0].description
        descrip_cap = descrip_cap[0].toUpperCase() + descrip_cap.substring(1)

        document.getElementById("location").innerHTML = `${data.name}`
        document.getElementById("temperature").innerHTML = `${data.main.temp} °C`
        document.getElementById("description").innerHTML = descrip_cap
        document.getElementById("feels").innerHTML = `Feels like: ${data.main.feels_like} °C`
        document.getElementById("wind").innerHTML = `Wind: ${data.wind.speed} m/s`
    })
}
