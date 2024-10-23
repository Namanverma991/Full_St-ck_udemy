axios.get("https://swapi.dev/api/planets/1/")
.then((res) => {
    console.log("res",res);
});

const  getPlanets = async(id) => {
    const res = await axios.get(`https://swapi.dev/api/planets/1/${id}`)
    console.log(res.data)
}

getPlanets(5);