class AnimalTable {
    constructor() {
        this.animalData = {
          "Big Cats": [
            { species: "Big Cats", name: "Tiger", size: "10 ft", location: "Asia", image: "https://images.cnbctv18.com/uploads/2024/05/bengal-tiger-2024-05-33405306918be2efff88622a05becf60.jpg" },
            { species: "Big Cats", name: "Lion", size: "8 ft", location: "Africa", image: "https://media.4-paws.org/2/a/5/e/2a5e5d3f160276a39225ccb81ae8e0a562c7640e/VIER%20PFOTEN_2012-05-15_002%20%281%29-1927x1333.jpg" },
            { species: "Big Cats", name: "Leopard", size: "5 ft", location: "Africa and Asia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzu7pSc_T8gdZZ-AUVqh_nEDfPHsRgUdixA&s" },
            { species: "Big Cats", name: "Cheetah", size: "5 ft", location: "Africa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8qHkR9QXuLuSH1Ru2A9RpRdJOkzKgFiH1A&s" },
            { species: "Big Cats", name: "Caracal", size: "3 ft", location: "Africa", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXe2p_ATYQ4z2warlizTrbKfNBfV7V7pOSPmo3jkYKU114Z6XWFsM2gZXq3aTWsS0x7if2qrHEggrlEMyOjr6buvb-OijTgAcvlaSX3vbF7HoloaIvk8g2mqc15n-EBUMq1Zis1_cg?key=diMK_80ckKTiDYYhCkLD1Q" },
            { species: "Big Cats", name: "Jaguar", size: "5 ft", location: "Amazon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmj7Dsq4Ic0sNEDA6Yn3HZ23pbGJ9kGRYfDw&s" },
            { species: "Big Cats", name: "Jaguar", size: "5 ft", location: "Amazon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmj7Dsq4Ic0sNEDA6Yn3HZ23pbGJ9kGRYfDw&s" },
          ],
          "Dogs": [
            { species: "Dog", name: "Rotwailer", size: "2 ft", location: "Germany", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCPxwzoCJUvZkgX6VWLh8ZPCsFGBlQuKncA&s" },
            { species: "Dog", name: "German Shepherd", size: "2 ft", location: "Germany", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFi7d0iIB3zkzYPAo2_WzotmV2pc_vK-P0Q&s" },
            { species: "Dog", name: "Labrodar", size: "2", location: "UK", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39IFw4rWuGlpEY_cNnAzMmTsANZvNFj766Q&sQ" },
            { species: "Dog", name: "Alabai", size: "4 ft", location: "Turkey", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGZTSCsxBoBDLcClMT9uyyfDChOZBo3hwoQ&s" }
          ],
          "Big Fish": [
            { species: "Big Fish", name: "Humpback Whale", size: "15 ft", location: "Atlantic Ocean", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99Hmr2eKeCZGtSG1gmol3x6Bi3I3A1PoCow&s" },
            { species: "Big Fish", name: "Killer Whale", size: "12 ft", location: "Atlantic Ocean", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N4XahUuHoPkgyjgj7_JwnVmCcAJjOnGGCg&s" },
            { species: "Big Fish", name: "Tiger Shark", size: "8 ft", location: "Ocean", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9weEkwrLOuohKyHFEStK6OFSUiCdBcgWfaQ&s" },
            { species: "Big Fish", name: "Hammerhead Shark", size: "8 ft", location: "Ocean", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6v72NT6IYq2TfswW1b6wzCh_h8Koh41ZRBA&s" }
          ]
        };
  this.renderTables();
  this.addEventListeners();
}

renderTables() {
  const container = document.getElementById("animal-tables");
  container.innerHTML = "";

  Object.keys(this.animalData).forEach((category) => {
    const tableDiv = document.createElement("div");
    tableDiv.className = "animal-container";
    const tableTitle = document.createElement("h2");
    tableTitle.textContent = `Category: ${category}`;
    tableDiv.appendChild(tableTitle);
    const animalList = document.createElement("div");
    animalList.className = "animal-list";

    this.animalData[category].forEach((animal, index) => {
      const animalCard = document.createElement("div");
      animalCard.className = "animal-card";
      const img = document.createElement("img");
      img.src = animal.image;
      img.alt = animal.name;

      const details = document.createElement("div");
      details.className = "animal-details";
      let nameClass = "";
      if (category === "Big Fish") {
        nameClass = "big-fish-name";
      } else if (category === "Dogs") {
        nameClass = "dogs-name";
      }

      details.innerHTML = `
        <p><strong>Species:</strong> ${animal.species}</p>
        <p><strong>Name:</strong> <span class="${nameClass}">${animal.name}</span></p>
        <p><strong>Size:</strong> ${animal.size}</p>
        <p><strong>Location:</strong> ${animal.location}</p>
      `;
      const actions = document.createElement("div");
      actions.className = "actions";
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "btn";
      editBtn.onclick = () => this.editAnimal(category, index);
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "btn-delete";
      deleteBtn.onclick = () => this.deleteAnimal(category, index);
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      animalCard.appendChild(img);
      animalCard.appendChild(details);
      animalCard.appendChild(actions);
      animalList.appendChild(animalCard);
    });
    tableDiv.appendChild(animalList);
    container.appendChild(tableDiv);
  });
}
sortTable() {
  const sortBy = document.getElementById("sort-by").value;
  const sortedData = {};
  Object.keys(this.animalData).forEach((category) => {
    sortedData[category] = [...this.animalData[category]];
    if (sortBy === "name") {
      sortedData[category].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "size") {
      sortedData[category].sort((a, b) => parseInt(a.size) - parseInt(b.size));
    } else if (sortBy === "location") {
      sortedData[category].sort((a, b) => a.location.localeCompare(b.location));
    }
  });
  Object.assign(this.animalData, sortedData);
  this.renderTables();
}
editAnimal(category, index) {
  const animal = this.animalData[category][index];
  document.getElementById("category").value = category;
  document.getElementById("species").value = animal.species;
  document.getElementById("name").value = animal.name;
  document.getElementById("size").value = animal.size;
  document.getElementById("location").value = animal.location;
  document.getElementById("image").value = animal.image;
  document.getElementById("edit-index").value = index;
}
deleteAnimal(category, index) {
  this.animalData[category].splice(index, 1);
  this.renderTables();
}
addEventListeners() {
  document.getElementById("sort-by").addEventListener("change", () => this.sortTable());
  document.getElementById("animal-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const index = document.getElementById("edit-index").value;
    const category = document.getElementById("category").value;
    const species = document.getElementById("species").value;
    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const location = document.getElementById("location").value;
    const image = document.getElementById("image").value;
    const animal = { species, name, size, location, image };
    if (index) {
      this.animalData[category][index] = animal;
    } else {
      if (!this.animalData[category]) {
        this.animalData[category] = [];
      }
      this.animalData[category].push(animal);
    }
    this.renderTables();
    e.target.reset();
    document.getElementById("edit-index").value = "";
  });
}
}

const animalTable = new AnimalTable();