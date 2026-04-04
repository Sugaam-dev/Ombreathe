// ─────────────────────────────────────────────────────────────
// BALI — Prenatal Yoga Teacher Training
// Replace all 🖼️ image paths, 💰 prices, 📝 text as needed
// ─────────────────────────────────────────────────────────────

const baliPrenatalYogaData = {

  tagline: "Prenatal Yoga Teacher Training\nIn Ubud, Bali, Indonesia\nWith Ombreathe",
  title: "Specialise in prenatal yoga and support expecting mothers in beautiful Bali",
  subtitle: "A comprehensive prenatal yoga teacher training in the heart of Ubud",
  price: "$750 USD",                    // 💰
  priceNote: "*Includes accommodation, meals & all materials",
  buttonText: "Book Your Spot",
  location: "📍 Ubud, Bali, Indonesia",

  heroImage: require('../../../../../images/services/Retreats.jpg'),  // 🖼️

  includedTitle: "Your training includes:",
  includedItems: [
    "• Prenatal yoga teacher certification",
    "• Pregnancy anatomy and physiology",
    "• Daily meals and accommodation",
    "• Yoga props and materials",
    "• Certificate of completion",
    "• Yoga Alliance registered hours"
  ],
  ratings: [{ label: "FOOD", value: "4.75" }, { label: "TEACHERS", value: "4.8" }],
  infoLines: ["Specialised prenatal yoga training in nurturing Bali.", "Located in the heart of Ubud."],
  closingLine: "Learn to nurture and support new life in the paradise of Bali",

  backgroundImage: require('../../../../../images/services/Retreats.jpg'), // 🖼️
  brandName: "Ombreathe",
  houseTitle: "Learn to support and nurture expecting mothers through the beautiful practice of prenatal yoga in Bali",
  houseSubtitle: "Join our comprehensive prenatal yoga teacher training certification in Ubud!",
  stats: [
    { value: "50 Hrs", label: "Prenatal Training" },
    { value: "Daily", label: "Practice Sessions" },
    { value: "Ubud", label: "Bali, Indonesia" },
    { value: "All Meals", label: "Healthy Organic Food" },
    { value: "$750", label: "All-Inclusive Package" }
  ],
  welcomeTitle: "Welcome to Our Prenatal Yoga Teacher Training in Bali",
  welcomeLines: [
    "Embark on a nurturing journey into prenatal yoga, learning how to safely guide expecting mothers through all stages of pregnancy.",
    "Study pregnancy anatomy, trimester-specific sequencing, breathwork for labour and how to create safe and empowering prenatal classes.",
    "Graduate as a certified prenatal yoga teacher enriched by the gentle and nurturing energy of Ubud, Bali."
  ],

  promoSectionLabel: "OMBREATHE BALI",
  promoHeading: "Join us for an immersive\nprenatal yoga teacher\ntraining in Bali",
  promoFeatures: [
    { title: "Prenatal yoga sequencing", subtitle: "trimester-specific safe practices" },
    { title: "Pregnancy anatomy", subtitle: "physiology and contraindications" },
    { title: "Daily meals and accommodation", subtitle: "healthy organic food included" },
    { title: "Breathwork for labour", subtitle: "supporting mothers through birth" },
    { title: "Certificate of completion", subtitle: "Yoga Alliance registered certification" }
  ],
  promoImages: [
    require('../../../../../images/services/Retreats.jpg'),      // 🖼️
    require('../../../../../images/Gallery/baliadventure.jpg'),  // 🖼️
    require('../../../../../images/Gallery/Bali-Activities.jpg') // 🖼️
  ],

  transformationText: "Learn to hold space for the sacred journey of pregnancy through prenatal yoga in the nurturing paradise of Bali",
  transformationSubtext: "Our training combines prenatal yoga expertise, pregnancy anatomy, breathwork and Balinese cultural immersion for a complete and heartfelt certification",

  transTeachHeading: "Comprehensive prenatal yoga teacher training combining asana, pregnancy anatomy, breathwork and Balinese cultural immersion for a complete certification journey",
  transTeachSubtitle: "Our training blends prenatal yoga expertise with anatomy, breathwork, and the nurturing energy of Bali.",
  experienceImages: [
    { src: require('../../../../../images/Gallery/baliadventure.jpg'), alt: "Prenatal yoga Bali", title: "Prenatal Yoga Asana", description: "Safe and nurturing trimester-specific yoga sequences in the beautiful environment of Bali" },
    { src: require('../../../../../images/Gallery/Bali-Activities.jpg'), alt: "Pregnancy anatomy", title: "Pregnancy Anatomy", description: "In-depth study of pregnancy physiology, contraindications and safe modifications" },
    { src: require('../../../../../images/Gallery/11.jpg'), alt: "Breathwork labour", title: "Breathwork & Birth", description: "Empowering breathing techniques and practices to support mothers through labour" }
  ],
  specialFeatures: [
    { title: "Prenatal Expertise", description: "Master trimester-specific sequencing, safe modifications and empowering prenatal classes" },
    { title: "Anatomy & Safety", description: "Comprehensive pregnancy anatomy, physiology and contraindication awareness" },
    { title: "Bali Experience", description: "The nurturing and healing energy of Bali enriches every aspect of this training" }
  ],

  coursesHeading: "Prenatal Yoga Teacher Training",
  coursesSubheading: "Complete Certification Program in Bali",
  courseDescription: ["Master prenatal yoga sequencing, anatomy and teaching methodology in beautiful Bali", "Graduate as a certified prenatal yoga teacher ready to support expecting mothers"],
  activities: [
    { title: "Books, Manuals & study materials", icon: "📚", content: [
      "Pre-Natal Asana Manual",
      "Post-Natal Asana Manual",
      "Mantra Manual",
      "Pre-natal Meditation Manual",
      "Pre-Natal Pranayama Manual",
      "Daily life of a yogi book (Yogi Vishnu)",
      "Prenatal Yoga Anatomy and Therapy",
      "Prenatal Yoga Nidra Manual",
      "Teaching Methodology Manual",
      "Assignments and Instructions"
    ] },
    { title: "Prenatal Yoga Therapy", icon: "☮️", content:  [
      "for spine and back issue",
      "For digestion",
      "Sleeping issue",
      "Stress and anxiety",
      "Fear and anger",
      "Breathing issue",
      "Pelvic floor",
      "Other problems"
    ]},
    { title: "Asana Practices", icon: "🧘", content: ["Early Pregnancy Yoga (1–3 Month)",
      "Vajrasana (The Thunderbolt)",
      "Trikonasana (Easy Triangle)",
      "Sarvangasana (Shoulder stand)",
      "Shoulder Stretches",
      "Sitting Stretches",
      "Breath and Awareness",
      "Basic Pelvic Alignment",
      "Spinal Rolls"] },
    { title: "Caring New born baby", icon: "👶", content: ["Baby Massage.", "Feeding Milk.", "Food after 6 months.", "Mantra for Baby.", "Special Care."] }
  ],

    
  dayBreakdown: [
    { days: "Days 1-2", color: "#e3f2fd", titleColor: "#1976d2", description: "Orientation, pregnancy anatomy, 1st and 2nd trimester sequencing and safe modifications" },
    { days: "Days 3-4", color: "#f3e5f5", titleColor: "#7b1fa2", description: "3rd trimester, postnatal yoga, breathwork for labour, teaching methodology and supervised practice" },
    { days: "Days 5-6", color: "#e8f5e8", titleColor: "#388e3c", description: "Final assessments, certificate ceremony and Bali farewell celebration" }
  ],
  packageIncludes: ["✓ Accommodation & meals", "✓ Yoga props & materials", "✓ Certificate of completion"],
  scheduleTitle: "Sample Daily Schedule",
  scheduleDescription: "Each day nurtures your prenatal yoga expertise combining asana, anatomy, breathwork and Bali cultural experiences.",
  scheduleImage: require('../../../../../images/Gallery/Daily_Schedule_100_200_300.jpg'), // 🖼️
  morningSchedule: [
    { time: "06:00 AM", activity: "Prenatal Vinyasa Flow" },
    { time: "07:45 AM", activity: "Pregrency Breathword" },
    { time: "09:00 AM", activity: "Breakfast" },
    { time: "10:30 AM", activity: "Prenatal Philosophy & Yoga Nidra" },
    { time: "11:30 AM - 01:00 PM", activity: "Pregnancy Anatomy & Alignment" }
  ],
  eveningSchedule: [
    { time: "01:00 PM", activity: "Lunch" },
    { time: "03:00 PM - 05:00 PM", activity: "Pre Natal Asana & Sequencing" },
    { time: "05:30 PM - 06:30 PM", activity: "Meditation" }
   
  ],
  additionalInfoTitle: "Training Includes",
  additionalInfoLines: [
    "Prenatal yoga asana, pregnancy anatomy, breathwork for labour, teaching methodology and Bali cultural immersion.",
    "Each session builds your expertise in the nurturing and healing environment of Ubud, Bali."
  ]
}

export default baliPrenatalYogaData
