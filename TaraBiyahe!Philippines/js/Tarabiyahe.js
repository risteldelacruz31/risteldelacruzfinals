document.addEventListener("DOMContentLoaded", () => {

  if(document.getElementById("spots-list")) {
    loadTopSpots();
  }
  if(document.getElementById("region-spots")) {
 
    showRegion('luzon');
  }
  if(document.getElementById("faq-list")) {
    loadFAQs();
  }
  if(document.getElementById("gallery-images")) {
    loadGallery();
  }
  initializeMenuToggle();
});


const topSpots = [
  {
    name: "El Nido, Palawan",
    location: "Northern Palawan",
    description: "El Nido is renowned for its stunning limestone cliffs, crystal-clear lagoons, and diverse marine life, making it a paradise for beach lovers and divers.",
    cost: "₱6,000–₱8,000",
    highlights: "Island hopping tours to Big Lagoon, Small Lagoon, and Secret Beach.",
    imgSrc: "images/image3.jpg"
  },
  {
    name: "Boracay Island, Aklan",
    location: "Western Visayas",
    description: "Famous for its powdery white sand beaches and vibrant nightlife, Boracay offers a mix of relaxation and entertainment.",
    cost: "₱5,000–₱7,000",
    highlights: "White Beach, water sports, and sunset sailing.",
    imgSrc: "images/image4.jpg"
  },
  {
    name: "Coron, Palawan",
    location: "Northern Palawan",
    description: "Known for its World War II shipwreck diving sites, clear lakes, and beautiful coral reefs.",
    cost: "₱5,500–₱7,500",
    highlights: "Kayangan Lake, Twin Lagoon, and Maquinit Hot Springs.",
    imgSrc: "images/image5.jpg"
  },
  {
    name: "Bohol",
    location: "Central Visayas",
    description: "Home to the unique Chocolate Hills and the endangered Philippine Tarsier, Bohol offers natural wonders and rich culture.",
    cost: "₱6,000–₱8,000",
    highlights: "Chocolate Hills, Tarsier Sanctuary, and Loboc River Cruise.",
    imgSrc: "images/image6.jpg"
  },
  {
    name: "Siargao Island",
    location: "Surigao del Norte, Mindanao",
    description: "\"Surfing Capital of the Philippines,\" Siargao boasts excellent waves and pristine natural attractions.",
    cost: "₱7,000–₱9,000",
    highlights: "Cloud 9 surf spot, Sugba Lagoon, and Magpupungko Rock Pools.",
    imgSrc: "images/image7.jpg"
  },
  {
    name: "Banaue Rice Terraces",
    location: "Ifugao, Luzon",
    description: "Often called the \"Eighth Wonder of the World,\" these ancient terraces showcase the ingenuity of the Ifugao people.",
    cost: "₱4,000–₱6,000",
    highlights: "Batad and Bangaan Rice Terraces, cultural immersion.",
    imgSrc: "images/image8.jpg"
  },
  {
    name: "Vigan City",
    location: "Ilocos Sur, Luzon",
    description: "A UNESCO World Heritage Site famous for its preserved Spanish colonial and Asian architecture.",
    cost: "₱4,500–₱6,500",
    highlights: "Calle Crisologo, Bantay Bell Tower, and local delicacies.",
    imgSrc: "images/image9.jpg"
  },
  {
    name: "Mayon Volcano",
    location: "Albay, Bicol Region",
    description: "Known for its near-perfect cone shape, Mayon Volcano is a majestic natural landmark.",
    cost: "₱5,000–₱7,000",
    highlights: "Cagsawa Ruins, ATV adventures, and panoramic views.",
    imgSrc: "images/image10.jpg"
  },
  {
    name: "Puerto Princesa Underground River",
    location: "Palawan",
    description: "A UNESCO World Heritage Site offering a unique subterranean boat tour through a cave system.",
    cost: "₱6,000–₱8,000",
    highlights: "Underground river tour, Sabang Beach, and mangrove forests.",
    imgSrc: "images/image11.jpg"
  },
  {
    name: "Apo Reef Natural Park",
    location: "Occidental Mindoro",
    description: "Second-largest contiguous coral reef system in the world, ideal for diving and snorkeling.",
    cost: "₱3,000–₱5,000",
    highlights: "Diverse marine life, clear waters, and vibrant coral gardens.",
    imgSrc: "images/image12.jpg"
  }
];


const regionsData = {
  luzon: [
    {
      name: "Banaue Rice Terraces",
      location: "Ifugao, Luzon",
      description: "Often referred to as the 'Eighth Wonder of the World,' these ancient terraces showcase the ingenuity of the Ifugao people.",
      cost: "₱4,000–₱6,000",
      highlights: "Batad and Bangaan Rice Terraces, cultural immersion.",
      imgSrc: "images/image8.jpg"
    },
    {
      name: "Vigan City",
      location: "Ilocos Sur, Luzon",
      description: "A UNESCO World Heritage Site, Vigan is famous for its preserved Spanish colonial and Asian architecture.",
      cost: "₱4,500–₱6,500",
      highlights: "Calle Crisologo, Bantay Bell Tower, and local delicacies.",
      imgSrc: "images/image9.jpg"
    },
    {
      name: "Mount Pulag",
      location: "Benguet, Luzon",
      description: "The third-highest mountain in the Philippines, offering breathtaking views and a 'sea of clouds' experience.",
      cost: "₱5,000–₱7,000",
      highlights: "Hiking, camping, and stargazing.",
      imgSrc: "images/image15.jpg"
    },
    {
      name: "Taal Volcano and Lake",
      location: "Batangas, Luzon",
      description: "A picturesque volcano within a lake, which itself is on an island in a larger lake—a unique geological formation.",
      cost: "₱3,000–₱5,000",
      highlights: "Boat rides, trekking, and panoramic views.",
      imgSrc: "images/image16.jpg"
    },
    {
      name: "Hundred Islands National Park",
      location: "Pangasinan, Luzon",
      description: "A group of 124 islands scattered in the Lingayen Gulf, perfect for island hopping and water activities.",
      cost: "₱4,500–₱6,500",
      highlights: "Snorkeling, kayaking, and exploring caves.",
      imgSrc: "images/image17.jpg"
    }
  ],

  visayas: [
    {
      name: "Boracay Island",
      location: "Aklan, Western Visayas",
      description: "Famous for its powdery white sand beaches and vibrant nightlife, Boracay offers relaxation and entertainment.",
      cost: "₱5,000–₱7,000",
      highlights: "White Beach, water sports, and sunset sailing.",
      imgSrc: "images/image4.jpg"
    },
    {
      name: "Chocolate Hills",
      location: "Bohol, Central Visayas",
      description: "Over 1,200 uniquely shaped hills that turn brown during the dry season, creating a chocolate-like appearance.",
      cost: "₱6,000–₱8,000",
      highlights: "Viewing deck, ATV rides, and nearby tarsier sanctuary.",
      imgSrc: "images/image6.jpg"
    },
    {
      name: "Kawasan Falls",
      location: "Cebu, Central Visayas",
      description: "Multi-layered waterfall known for its turquoise waters, ideal for canyoneering and swimming.",
      cost: "₱5,500–₱7,500",
      highlights: "Canyoneering adventures and bamboo rafting.",
      imgSrc: "images/image18.jpg"
    },
    {
      name: "Kalanggaman Island",
      location: "Leyte, Eastern Visayas",
      description: "Pristine island famous for its long white sandbar and clear blue waters, perfect for day trips.",
      cost: "₱6,000–₱8,000",
      highlights: "Swimming, snorkeling, and beach camping.",
      imgSrc: "images/image19.jpg"
    },
    {
      name: "Panglao Island",
      location: "Bohol, Central Visayas",
      description: "Known for its white sand beaches, clear blue waters, and vibrant marine life, making it a diver's paradise.",
      cost: "₱6,000–₱8,000",
      highlights: "Diving, snorkeling, and island hopping.",
      imgSrc: "images/image20.jpg"
    }
  ],

  mindanao: [
    {
      name: "Siargao Island",
      location: "Surigao del Norte, Mindanao",
      description: "Dubbed the 'Surfing Capital of the Philippines,' Siargao boasts excellent waves and pristine natural attractions.",
      cost: "₱7,000–₱9,000",
      highlights: "Cloud 9 surf spot, Sugba Lagoon, and Magpupungko Rock Pools.",
      imgSrc: "images/image7.jpg"
    },
    {
      name: "Camiguin Island",
      location: "Northern Mindanao",
      description: "Known as the 'Island Born of Fire,' Camiguin is home to several volcanoes, hot springs, and waterfalls.",
      cost: "₱6,500–₱8,500",
      highlights: "White Island sandbar, Sunken Cemetery, and Mount Hibok-Hibok.",
      imgSrc: "images/image21.jpg"
    },
    {
      name: "Enchanted River",
      location: "Hinatuan, Surigao del Sur, Mindanao",
      description: "A deep spring river with crystal-clear blue waters, surrounded by lush greenery.",
      cost: "₱6,000–₱8,000",
      highlights: "Swimming, fish feeding, and boat rides.",
      imgSrc: "images/image22.jpg"
    },
    {
      name: "Mount Apo",
      location: "Davao Region, Mindanao",
      description: "The highest peak in the Philippines, offering challenging hikes and diverse flora and fauna.",
      cost: "₱6,500–₱8,500",
      highlights: "Trekking, camping, and bird watching.",
      imgSrc: "images/image23.jpg"
    },
    {
      name: "Lake Sebu",
      location: "South Cotabato, Mindanao",
      description: "A tranquil lake surrounded by rolling hills and home to the indigenous T'boli people.",
      cost: "₱6,000–₱8,000",
      highlights: "Seven Falls zipline, cultural immersion, and boat tours.",
      imgSrc: "images/image24.jpg"
    }
  ]
};

function loadTopSpots() {
  const container = document.getElementById('spots-list');
  container.innerHTML = '';
  topSpots.forEach(spot => {
    const spotCard = document.createElement('div');
    spotCard.className = 'card';
    spotCard.innerHTML = `
      <h3>${spot.name}</h3>
      <img src="${spot.imgSrc}" alt="${spot.name}" class="spot-img" />
      <div class="hidden-info" style="display: none;">
        <p><strong>Location:</strong> ${spot.location}</p>
        <p><strong>Description:</strong> ${spot.description}</p>
        <p><strong>Estimated Travel Cost from Mindoro:</strong> ${spot.cost}</p>
        <p><strong>Highlights:</strong> ${spot.highlights}</p>
      </div>
    `;
    const img = spotCard.querySelector('.spot-img');
    img.addEventListener('click', () => {
      const hiddenInfo = spotCard.querySelector('.hidden-info');
      hiddenInfo.style.display = hiddenInfo.style.display === 'none' ? 'block' : 'none';
    });
    container.appendChild(spotCard);
  });
}

function showRegion(region) {
  const container = document.getElementById('region-spots');
  container.innerHTML = ''; 

  regionsData[region].forEach(spot => {
    const spotCard = document.createElement('div');
    spotCard.className = 'card';
    
    
    spotCard.innerHTML = `
      <h3>${spot.name}</h3>
      <img src="${spot.imgSrc}" alt="${spot.name}" class="spot-img" />
      <div class="hidden-info" style="display: none;">
        <p><strong>Location:</strong> ${spot.location}</p>
        <p><strong>Description:</strong> ${spot.description}</p>
        <p><strong>Estimated Travel Cost from Mindoro:</strong> ${spot.cost}</p>
        <p><strong>Highlights:</strong> ${spot.highlights}</p>
      </div>
    `;

   
    const img = spotCard.querySelector('.spot-img');
    img.addEventListener('click', () => {
      const hiddenInfo = spotCard.querySelector('.hidden-info');
      hiddenInfo.style.display = hiddenInfo.style.display === 'none' ? 'block' : 'none';
    });

   
    container.appendChild(spotCard);
  });
}


const faqs = [
  {
    question: "What is the best time to visit the Philippines?",
    answer: "The best time to visit is during the dry season, from November to April."
  },
  {
    question: "Is it safe to travel in the Philippines?",
    answer: "Yes, but always stay informed about the local situation and follow safety guidelines."
  },
  {
    question: "Do I need a visa to visit the Philippines?",
    answer: "Visa requirements depend on your nationality. Many countries have visa-free access for short stays."
  },
  {
    question: "What are some must-try Filipino foods?",
    answer: "Adobo, Sinigang, Lechon, Halo-halo, and many more regional dishes."
  }
];

function loadFAQs() {
  const container = document.getElementById('faq-list');
  container.innerHTML = '';
  faqs.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
      <button class="faq-question" aria-expanded="false" aria-controls="faq${index}">
        ${faq.question}
      </button>
      <div id="faq${index}" class="faq-answer" hidden>
        <p>${faq.answer}</p>
      </div>
    `;
    container.appendChild(faqItem);
  });

  
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(question => {
    question.addEventListener('click', () => {
      const expanded = question.getAttribute('aria-expanded') === 'true';
      question.setAttribute('aria-expanded', !expanded);
      const answer = question.nextElementSibling;
      if (expanded) {
        answer.hidden = true;
      } else {
        answer.hidden = false;
      }
    });
  });
}

const galleryData = {
  "Nature & Landscapes": [
    {src: "images/image25.jpg", alt:"Beaches"},
    {src: "images/image26.jpg", alt:"Mountains"},
    {src: "images/image27.jpg", alt:"Waterfalls"}
  ],
  "Culture & Festivals": [
    {src: "images/image28.jpg", alt:"Local Events"},
    {src: "images/image29.jpg", alt:"Traditional Dances"},
    {src: "images/image30.jpg", alt:"Colorful Fiestas"}
  ]
};

function loadGallery() {
  const galleryContainer = document.getElementById('gallery-images');
  galleryContainer.innerHTML = `
    <div class="gallery-buttons">
      <button onclick="showGalleryCategory('Nature & Landscapes')">Nature & Landscapes</button>
      <button onclick="showGalleryCategory('Culture & Festivals')">Culture & Festivals</button>
    </div>
    <div id="gallery-category"></div>
  `;
 
  showGalleryCategory('Nature & Landscapes');
}

function showGalleryCategory(category) {
  const categoryContainer = document.getElementById('gallery-category');
  categoryContainer.innerHTML = '';
  galleryData[category].forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    img.className = "gallery-photo";
    categoryContainer.appendChild(img);
  });
}


document.addEventListener("DOMContentLoaded", () => {
    initializeMenuToggle();
});

function initializeMenuToggle() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    const hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    hamburger.innerHTML = '&#9776;'; 
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.onclick = () => {
        const ul = nav.querySelector('ul');
        ul.classList.toggle('show'); 
    };

    nav.parentNode.insertBefore(hamburger, nav);
}


