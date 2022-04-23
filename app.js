const form = document.querySelector("#searchForm");
const imageContainer = document.querySelector(".container");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = this.elements.searchTerm;
  imageContainer.innerHTML = "";
  const { data: shows } = await axios.get(
    "https://api.tvmaze.com/search/shows",
    {
      params: {
        q: searchTerm.value,
      },
    }
  );
  addImages(shows);
});

const addImages = (shows) => {
  for (let res of shows) {
    if (res.show.image) {
      const img = document.createElement("IMG");
      img.src = res.show.image["medium"];
      imageContainer.append(img);
    }
  }
};
