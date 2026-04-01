// ===============================
// CITY DATA
// ===============================

const cityExplorerData = {
  rajkot: {
    id: "rajkot",
    name: "Rajkot",
    image: "assets/images/cities/Rajkot.jpg",
    description: "Explore parks, hill escapes, cafes, and temples in Rajkot.",
    places: [
      {
        id: "pradhyuman-park",
        name: "Pradhyuman Park",
        type: "park",
        city: "rajkot",
        image: "assets/images/places/pradyuman.jpg",
        description: "Peaceful green park.",
        mapLink: "https://maps.google.com/?q=Pradhyuman+Park+Rajkot",
        time: "Morning / Evening",
        tips: "Visit in evening",
        nearby: ["race-course-park", "jubilee-garden"]
      },
      {
        id: "race-course-park",
        name: "Race Course Park",
        type: "park",
        city: "rajkot",
        image: "assets/images/places/racecourse.jpg",
        description: "Best jogging place.",
        mapLink: "https://maps.google.com/?q=Race+Course+Park+Rajkot",
        time: "Morning",
        tips: "Early morning best",
        nearby: ["pradhyuman-park", "jubilee-garden"]
      },
      {
        id: "jubilee-garden",
        name: "Jubilee Garden",
        type: "park",
        city: "rajkot",
        image: "assets/images/places/jubilee.jpg",
        description: "Central garden area.",
        mapLink: "https://maps.google.com/?q=Jubilee+Garden+Rajkot",
        time: "Morning / Evening",
        tips: "Go early or late",
        nearby: ["race-course-park"]
      },
      {
        id: "analgadh-hill",
        name: "Analgadh Hill",
        type: "hillstation",
        city: "rajkot",
        image: "assets/images/places/analgadh.jpg",
        description: "Scenic hill spot.",
        mapLink: "https://maps.google.com/?q=Analgadh+Hill+Rajkot",
        time: "Morning / Evening",
        tips: "Best at sunrise",
        nearby: ["bhichari-mataji-hill"]
      },
      {
        id: "bhichari-mataji-hill",
        name: "Bhichari Mataji Hill",
        type: "hillstation",
        city: "rajkot",
        image: "assets/images/places/bhichari.jpg",
        description: "Temple hill spot.",
        mapLink: "https://maps.google.com/?q=Bhichari+Mataji+Hill+Rajkot",
        time: "Morning",
        tips: "Wear comfortable shoes",
        nearby: ["analgadh-hill"]
      },
      {
        id: "cafe-beats",
        name: "Cafe Beats",
        type: "cafe",
        city: "rajkot",
        image: "assets/images/places/cafebeats.jpg",
        description: "Music cafe.",
        mapLink: "https://maps.google.com/?q=Cafe+Beats+Rajkot",
        time: "Evening",
        tips: "Try snacks",
        nearby: ["race-course-park"]
      },
      {
        id: "caffotto",
        name: "Caffotto",
        type: "cafe",
        city: "rajkot",
        image: "assets/images/places/caffotto.jpg",
        description: "Cozy cafe.",
        mapLink: "https://maps.google.com/?q=Caffotto+Rajkot",
        time: "Evening",
        tips: "Try coffee",
        nearby: ["jubilee-garden"]
      },
      {
        id: "green-palazzo",
        name: "Green Palazzo Cafe",
        type: "cafe",
        city: "rajkot",
        image: "assets/images/places/greenpalazzo.jpg",
        description: "Nature cafe.",
        mapLink: "https://maps.google.com/?q=Green+Palazzo+Cafe+Rajkot",
        time: "Evening",
        tips: "Sit outside",
        nearby: ["pradhyuman-park"]
      },
      {
        id: "secret-sung",
        name: "Secret Sung Cafe",
        type: "cafe",
        city: "rajkot",
        image: "assets/images/places/secretsung.jpg",
        description: "Hidden cafe.",
        mapLink: "https://maps.google.com/?q=Secret+Sung+Cafe+Rajkot",
        time: "Evening",
        tips: "Visit off hours",
        nearby: ["caffotto"]
      },
      {
        id: "bileshwar-mahadev",
        name: "Bileshwar Mahadev",
        type: "viewpoint",
        city: "rajkot",
        image: "assets/images/places/bileshwar.jpg",
        description: "Ancient temple.",
        mapLink: "https://maps.google.com/?q=Bileshwar+Mahadev+Rajkot",
        time: "Morning",
        tips: "Avoid weekends",
        nearby: ["khodiyar-mandir"]
      },
      {
        id: "khodiyar-mandir",
        name: "Khodiyar Mandir",
        type: "viewpoint",
        city: "rajkot",
        image: "assets/images/places/khodiyar.jpg",
        description: "Famous temple near dam.",
        mapLink: "https://maps.google.com/?q=Khodiyar+Mandir+Rajkot",
        time: "Morning / Evening",
        tips: "Visit during aarti",
        nearby: ["bileshwar-mahadev"]
      }
    ]
  },

  junagadh: {
    id: "junagadh",
    name: "Junagadh",
    image: "assets/images/cities/junagadh.jpg",
    description: "Explore Junagadh nature and temples.",
    places: [
      {
        id: "sakkarbaug",
        name: "Sakkarbaug Garden",
        type: "park",
        city: "junagadh",
        image: "assets/images/places/sakkarbaug.jpg",
        description: "Peaceful garden.",
        mapLink: "https://maps.google.com/?q=Sakkarbaug+Garden+Junagadh",
        time: "Morning",
        tips: "Visit early",
        nearby: ["girnar-hill"]
      },
      {
        id: "girnar-hill",
        name: "Girnar Hill",
        type: "hillstation",
        city: "junagadh",
        image: "assets/images/places/girnar.jpg",
        description: "Famous hill.",
        mapLink: "https://maps.google.com/?q=Girnar+Hill+Junagadh",
        time: "Morning",
        tips: "Start early",
        nearby: ["girnar-temple"]
      },
      {
        id: "cafe-corner",
        name: "Cafe Corner",
        type: "cafe",
        city: "junagadh",
        image: "assets/images/places/cafecorner.jpg",
        description: "Local cafe.",
        mapLink: "https://maps.google.com/?q=Cafe+Corner+Junagadh",
        time: "Evening",
        tips: "Try snacks",
        nearby: ["sakkarbaug"]
      },
      {
        id: "girnar-temple",
        name: "Girnar Temple",
        type: "viewpoint",
        city: "junagadh",
        image: "assets/images/places/girnartemple.jpg",
        description: "Temple on hill.",
        mapLink: "https://maps.google.com/?q=Girnar+Temple+Junagadh",
        time: "Morning",
        tips: "Carry water",
        nearby: ["girnar-hill"]
      }
    ]
  }
};

// ===============================
// CATEGORY DETAILS
// ===============================

const categoryDetails = {
  park: { title: "Park" },
  cafe: { title: "Cafe" },
  hillstation: { title: "Hill Station" },
  viewpoint: { title: "Temple" },
  nature: { title: "Nature" },
  heritage: { title: "Heritage" }
};

// ===============================
// FLATTENED PLACE DATA
// ===============================

const placeDetailsData = Object.entries(cityExplorerData).flatMap(
  ([cityId, city]) =>
    city.places.map(place => ({
      ...place,
      cityId,
      category: categoryDetails[place.type].title
    }))
);

// ===============================
// HELPER FUNCTIONS
// ===============================

function getCity(cityId) {
  return cityExplorerData[cityId];
}

function getPlacesByCategory(cityId, type) {
  return cityExplorerData[cityId].places.filter(
    place => place.type === type
  );
}

function getPlaceById(cityId, placeId) {
  return cityExplorerData[cityId].places.find(
    place => place.id === placeId
  );
}

function getNearbyPlaces(cityId, nearbyIds) {
  const city = cityExplorerData[cityId];
  return nearbyIds.map(id =>
    city.places.find(place => place.id === id)
  );
}
