// ─────────────────────────────────────────────
// BALI RETREAT CARDS DATA
// Each object = one card on the Bali page
// Includes the 2 retreats moved from View All Programs
// ─────────────────────────────────────────────

// 🖼️ Replace these image imports with actual images when available


const baliCards = [
  {
    id: 201,
    imageKey: 'baliYinYoga',
    image: require('../../../../../images/services/Retreats.jpg'), // 🖼️ 5 levels up            // 🖼️ Replace with yin yoga Bali image
    title: "Yin Yoga Teacher Training",
    route: "/programs/short-retreats/bali/yin-yoga-teacher-training",
    features: [
      "In-depth yin yoga certification in Bali",  // 📝 Update features as needed
      "Anatomy and meridian theory included",
      "Yoga Alliance registered certificate"
    ],
    price: "$499",                 // 💰 Replace with actual price
    priority: 1
  },
  {
    id: 202,
    imageKey: 'baliAerialYoga',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with aerial yoga Bali image
    title: "Aerial Yoga Teacher Training",
    route: "/programs/short-retreats/bali/aerial-yoga-teacher-training",
    features: [
      "Aerial yoga certification in beautiful Bali", // 📝 Update features as needed
      "Safety and rigging techniques covered",
      "Yoga Alliance registered certificate"
    ],
    price: "$399",                 // 💰 Replace with actual price
    priority: 2
  },
  {
    id: 203,
    imageKey: 'baliAcroYoga',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with acro yoga Bali image
    title: "Acro Yoga Teacher Training",
    route: "/programs/short-retreats/bali/acro-yoga-teacher-training",
    features: [
      "Partner and acrobatic yoga training",     // 📝 Update features as needed
      "Trust, balance and acrobatics combined",
      "Yoga Alliance registered certificate"
    ],
    price: "$599",                 // 💰 Replace with actual price
    priority: 3
  },
  {
    id: 204,
    imageKey: 'baliPrenatalYoga',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with prenatal yoga image
    title: "Prenatal Yoga Teacher Training",
    route: "/programs/short-retreats/bali/prenatal-yoga-teacher-training",
    features: [
      "Specialized prenatal yoga certification",  // 📝 Update features as needed
      "Safe practices for pregnancy stages",
      "Yoga Alliance registered certificate"
    ],
    price: "$499",                 // 💰 Replace with actual price
    priority: 4
  },
  {
    // ✅ Moved from View All Programs
    id: 205,
    imageKey: 'baliAdventure',
    image: require('../../../../../images/services/Retreats.jpg'),           // 🖼️ This was already used in Servicess - update route in App.jsx too
    title: "7-Day Adventure & Yoga Retreat",
    route: "/programs/retreat-7-adventure",
    features: [
      "7 days Adventure and immersive spiritual experience",
      "Beautiful natural locations in Bali",
      "All meals and accommodation included"
    ],
    price: "$1399",                // 💰 Keep or update
    priority: 5
  },
  {
    // ✅ Moved from View All Programs
    id: 206,
    imageKey: 'baliMeditation',
    image: require('../../../../../images/Gallery/8.jpg'),         // 🖼️ This was already used in Servicess - update route in App.jsx too
    title: "7-Day Meditation & Yoga Retreat",
    route: "/programs/retreat-7-meditation",
    features: [
      "7 days Meditation, Yoga and immersive spiritual experience",
      "Beautiful natural locations in Bali",
      "All meals and accommodation included"
    ],
    price: "$1199",                // 💰 Keep or update
    priority: 6
  }
];

export default baliCards;
