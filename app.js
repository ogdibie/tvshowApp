const form = document.querySelector("#searchForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchTerm = this.elements.searchTerm;
  console.log(searchTerm.value);
});
