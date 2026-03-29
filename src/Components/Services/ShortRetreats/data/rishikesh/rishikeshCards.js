// ─────────────────────────────────────────────
// RISHIKESH RETREAT CARDS DATA
// Each object = one card on the Rishikesh page
// ─────────────────────────────────────────────

// 🖼️ Replace these image imports with actual images when available
 // 🖼️ Replace with Rishikesh-specific image

const rishikeshCards = [
  {
    id: 301,
    imageKey: 'rishikeshYinYoga',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with yin yoga Rishikesh image
    title: "Yin Yoga Teacher Training",
    route: "/programs/short-retreats/rishikesh/yin-yoga-teacher-training",
    features: [
      "In-depth yin yoga certification in Rishikesh", // 📝 Update features as needed
      "Anatomy and meridian theory included",
      "Yoga Alliance registered certificate"
    ],
    price: "$699",                 // 💰 Replace with actual price
    priority: 1
  },
  {
    id: 302,
    imageKey: 'rishikeshAerialYoga',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with aerial yoga Rishikesh image
    title: "Aerial Yoga Teacher Training",
    route: "/programs/short-retreats/rishikesh/aerial-yoga-teacher-training",
    features: [
      "Aerial yoga certification in Rishikesh",  // 📝 Update features as needed
      "Safety and rigging techniques covered",
      "Yoga Alliance registered certificate"
    ],
    price: "$699",                 // 💰 Replace with actual price
    priority: 2
  },
  {
    id: 303,
    imageKey: 'rishikeshPrenatalYoga',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with prenatal yoga Rishikesh image
    title: "Prenatal Yoga Teacher Training",
    route: "/programs/short-retreats/rishikesh/prenatal-yoga-teacher-training",
    features: [
      "Specialized prenatal yoga certification",  // 📝 Update features as needed
      "Safe practices for all pregnancy stages",
      "Yoga Alliance registered certificate"
    ],
    price: "$699",                 // 💰 Replace with actual price
    priority: 3
  }
];

export default rishikeshCards;
