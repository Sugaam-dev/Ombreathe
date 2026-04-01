// ─────────────────────────────────────────────
// MYSURU RETREAT CARDS DATA
// Each object = one card on the Mysuru page
// ─────────────────────────────────────────────

// 🖼️ Replace these image imports with actual images when available
 // 🖼️ Replace with Mysuru-specific image

const mysuruCards = [
  {
    id: 101,
    imageKey: 'singingBowl',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with singing bowl / sound healing image
    title: "Singing Bowl & Sound Healing Course",
    route: "/programs/short-retreats/mysuru/singing-bowl-and-sound-healing-course",
    features: [
      "Learn ancient sound healing techniques",  // 📝 Update features as needed
      "Hands-on singing bowl practice",
      "Certificate of completion included"
    ],
    price: "$250",                 // 💰 Replace with actual price
    priority: 1
  },
  {
    id: 102,
    imageKey: 'wheelYoga',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with wheel yoga image
    title: "7-Day Wheel Yoga Teacher Training Course",
    route: "/programs/short-retreats/mysuru/7-day-wheel-yoga-teacher-training-course",
    features: [
      "7-day intensive wheel yoga training",     // 📝 Update features as needed
      "Expert guidance from certified teachers",
      "Yoga Alliance registered certificate"
    ],
    price: "$300",                 // 💰 Replace with actual price
    priority: 2
  },
  {
    id: 103,
    imageKey: 'yinYoga50',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with yin yoga image
    title: "50-Hour Yin Yoga Teacher Training Course",
    route: "/programs/short-retreats/mysuru/50-hour-yin-yoga-teacher-training-course-mysore",
    features: [
      "50-hour in-depth yin yoga program",       // 📝 Update features as needed
      "Anatomy and meridian theory included",
      "Yoga Alliance registered certificate"
    ],
    price: "$300",                 // 💰 Replace with actual price
    priority: 3
  },
  {
    id: 104,
    imageKey: 'aerialYoga50',
    image: require('../../../../../images/services/Retreats.jpg'),             // 🖼️ Replace with aerial yoga image
    title: "50-Hour Aerial Yoga Teacher Training",
    route: "/programs/short-retreats/mysuru/50-hour-aerial-yoga-teacher-training-mysore",
    features: [
      "50-hour aerial yoga certification",       // 📝 Update features as needed
      "Safety and rigging techniques covered",
      "Yoga Alliance registered certificate"
    ],
    price: "$300",                 // 💰 Replace with actual price
    priority: 4
  }
];

export default mysuruCards;
