async function weather() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=taiwan&APPID=400a2da9fc8de79265f21641d47f6b48`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
}

weather()

console.log(
    "the current weather is nice"
)