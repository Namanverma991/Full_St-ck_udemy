const form = document.querySelector("#searchform");
form.addEventListener("submit", async function(e){
    e.preventDefault();
    const searchterm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
    makeImgages(res.data)
})

const makeImgages = (shows) => {
    for(let result of shows){
        const img = document.createElement("IMG");
        img.src = result.show.image.medium;
        document.body.append(img)
    }
}