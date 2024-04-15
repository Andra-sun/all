function showBreeds(species) {
    var breedListDog = document.getElementById("breedListDog");
    var breedListCat = document.getElementById("breedListCat");
    var dogCheckbox = document.getElementById("dog");
    var catCheckbox = document.getElementById("cat");

    if (species === "dog") {
        breedListDog.style.display = dogCheckbox.checked ? "block" : "none";
    } else if (species === "cat") {
        breedListCat.style.display = catCheckbox.checked ? "block" : "none";
    }
}
