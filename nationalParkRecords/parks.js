const parks = [
  "Acadia", "American Samoa", "Arches", "Badlands", "Big Bend", "Biscayne", "Black Canyon", "Bryce Canyon",
  "Canyonlands", "Capitol Reef", "Carlsbad Caverns", "Channel Islands", "Congaree", "Crater Lake", "Cuyahoga Valley", "Death Valley",
  "Denali", "Dry Tortugas", "Everglades", "Gates of the Arctic", "Gateway Arch", "Glacier", "Glacier Bay", "Grand Canyon",
  "Grand Teton", "Great Basin", "Great Sand Dunes", "Great Smoky Mountains", "Guadalupe Mountains", "Haleakalā", "Hawai'i Volcanoes", "Hot Springs",
  "Indiana Dunes", "Isle Royale", "Joshua Tree", "Katmai", "Kenai Fjords", "Kings Canyon", "Kobuk Valley", "Lake Clark",
  "Lassen Volcanic", "Mammoth Cave", "Mesa Verde", "Mount Rainier", "New River Gorge", "North Cascades", "Olympic", "Petrified Forest",
  "Pinnacles", "Redwood", "Rocky Mountain", "Saguaro", "Sequoia", "Shenandoah", "Theodore Roosevelt", "Virgin Islands",
  "Voyageurs", "White Sands", "Wind Cave", "Wrangell–St. Elias", "Yellowstone", "Yosemite", "Zion"
];

const visitedParks = {
  "Acadia": "images/acadia.jpg",
  "Arches": "images/arches.jpg",
  "Badlands": "images/badlands.jpg",
  "Black Canyon": "images/black_canyon.jpg",
  "Bryce Canyon": "images/bryce_canyon.jpg",
  "Everglades": "images/everglades.jpg",
  "Gateway Arch": "images/gateway_arch.jpg",
  "Grand Canyon": "images/grand_canyon.jpg",
  "Grand Teton": "images/grand_teton.jpg",
  "Great Sand Dunes": "images/great_sand_dunes.jpg",
  "Great Smoky Mountains": "images/great_smoky_mountains.jpg",
  "Indiana Dunes": "images/indiana_dunes.jpg",
  "Joshua Tree": "images/joshua_tree.jpg",
  "Mammoth Cave": "images/mammoth_cave.jpg",
  "Mesa Verde": "images/mesa_verde.jpg",
  "Mount Rainier": "images/mount_rainier.jpg",
  "North Cascades": "images/north_cascades.jpg",
  "Olympic": "images/olympic.jpg",
  "Wind Cave": "images/wind_cave.jpg",
  "Yellowstone": "images/yellowstone.jpg",
  "Sequoia": "images/sequoia.jpg",
  "Rocky Mountain": "images/rocky_mountain.jpg",
  "Canyonlands": "images/canyonlands.jpg",
  "Capitol Reef": "images/capitol_reef.jpg",
  "Congaree": "images/congaree.jpg",
  "Crater Lake": "images/crater_lake.jpg",
  "Death Valley": "images/death_valley.jpg",
  "Kings Canyon": "images/kings_canyon.jpg",
  "Saguaro": "images/saguaro.jpg",
  "Zion": "images/zion.jpg"
};

const grid = document.querySelector(".grid");

parks.forEach(park => {
  const card = document.createElement("div");
  card.className = "park-card fade-in";

  if (visitedParks[park]) {
    const img = document.createElement("img");
    img.className = "card-img";
    img.src = visitedParks[park];
    img.alt = park;
    card.appendChild(img);
  } else {
    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_of_the_United_States_National_Park_Service.svg/1200px-Logo_of_the_United_States_National_Park_Service.svg.png";
    img.alt = `${park} (default placeholder)`;
    img.className = "default-img";
    card.appendChild(img);
  }

  const label = document.createElement("div");
  label.className = "park-name";

  const link = document.createElement("a");
  link.className = "park-link";
  link.href = `https://www.google.com/search?q=${encodeURIComponent(park + ' National Park')}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = park;

  label.appendChild(link);
  card.appendChild(label);
  grid.appendChild(card);
});
