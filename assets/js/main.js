// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("title")) {
    // We are on city-details.html
    loadCityExplorer();
  }
  if (document.getElementById("name")) {
    // We are on details.html
    loadDetails();
  }
});

// ================= LOAD CITY =================
function loadCityExplorer() {
  const params = new URLSearchParams(window.location.search);
  const cityKey = params.get("city");
  const type = params.get("type") || "park";

  const city = cityExplorerData[cityKey];
  if (!city) return;

  document.getElementById("title").innerText = city.name;

  renderPlaces(cityKey, type);
}

// ================= RENDER PLACES =================
function renderPlaces(cityKey, type) {
  const container = document.getElementById("places");
  const city = cityExplorerData[cityKey];

  if (!city || !city.places) {
    container.innerHTML = "<p>No places found for this city.</p>";
    return;
  }

  const filtered = city.places.filter(p => p.type === type);

  container.innerHTML = filtered.length
    ? filtered
        .map(
          place => `
    <div class="card">
      <h3>${place.name}</h3>
      <p>${place.description}</p>
      <p>🕒 ${place.time}</p>
      <p>💡 ${place.tips}</p>
      <button onclick="openDetails('${place.name}')">Explore</button>
    </div>
  `
        )
        .join("")
    : "<p>No places found for this category.</p>";
}

// ================= OPEN DETAILS =================
function openDetails(name) {
  window.location.href = `details.html?name=${encodeURIComponent(name)}`;
}

// ================= LOAD DETAILS =================
function loadDetails() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  let place;

  Object.values(cityExplorerData).forEach(city => {
    city.places.forEach(p => {
      if (p.name === name) place = p;
    });
  });

  if (!place) return;

  document.getElementById("name").innerText = place.name;
  document.getElementById("desc").innerText = place.description;

  // GOOGLE MAP BUTTON
  document.getElementById("mapBtn").href =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.location)}`;

  // NEARBY PLACES
  const nearby = nearbyPlaces.find(n => n.main === name);

  if (nearby) {
    document.getElementById("nearby").innerHTML =
      nearby.nearby.map(p => `<li>${p}</li>`).join("");
  }
}

// ================= SEARCH =================
function searchCity() {
  const val = document.getElementById("search").value.toLowerCase();

  if (cityExplorerData[val]) {
    window.location.href = `city-details.html?city=${val}`;
  } else {
    alert("City not found");
  }
}
