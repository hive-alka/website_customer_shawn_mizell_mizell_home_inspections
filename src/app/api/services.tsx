import { Service } from '@/types/service'

export const homeInspectionServices: Service[] = [
  {
    name: 'Full Home Inspection',
    slug: 'full-home-inspection',
    description: 'A deep dive into your potential new home. Every nook and cranny is inspected, from missing door stops and squeaky cabinets to a leaky roof.',
    category: 'Home Inspection Services',
    features: [
      'Complete structural inspection',
      'Roof and attic assessment',
      'HVAC systems evaluation',
      'Plumbing and electrical inspection',
      'Foundation and basement check',
      'Door stops and cabinet inspection',
      'FREE warranty from Mizell Home Inspections',
      'Detailed report with photos'
    ],
    icon: 'ph:house-fill',
    images: [
      {
        src: "/images/properties/property1/property1.jpg",
      },
      {
        src: "/images/properties/property1/image-2.jpg"
      }
    ]
  },
  {
    name: '4-Point & Wind Mitigation',
    slug: '4-point-wind-mitigation',
    description: 'A basic inspection needed for most purchases. Your insurance provider usually needs these reports as we look for structural, electrical, plumbing, or HVAC concerns.',
    category: 'Home Inspection Services',
    features: [
      'Structural assessment',
      'Electrical system inspection',
      'Plumbing system evaluation',
      'HVAC inspection',
      'Wind mitigation assessment',
      'Insurance compliance documentation',
      'Detailed findings report'
    ],
    icon: 'ph:shield-check-fill',
    images: [
      {
        src: "/images/properties/property2/property2.jpg",
      },
      {
        src: "/images/properties/property2/image-2.jpg"
      }
    ]
  },
  {
    name: 'Water Testing',
    slug: 'water-testing',
    description: 'We check for chemical and bacterial evidence in your drinking water. Some loans require this test, and we can facilitate this for you.',
    category: 'Home Inspection Services',
    features: [
      'Chemical contamination testing',
      'Bacterial presence detection',
      'Drinking water safety analysis',
      'Loan requirement compliance',
      'Laboratory analysis',
      'Comprehensive water quality report'
    ],
    icon: 'ph:drop-fill',
    images: [
      {
        src: "/images/properties/property3/property3.jpg",
      },
      {
        src: "/images/properties/property3/image-2.jpg"
      }
    ]
  },
  {
    name: 'Commercial Inspection',
    slug: 'commercial-inspection',
    description: 'We are commercially certified and available to inspect any type of building for businesses and commercial properties.',
    category: 'Home Inspection Services',
    features: [
      'Commercially certified inspector',
      'All building types accepted',
      'Complete commercial property assessment',
      'Code compliance verification',
      'Safety and structural evaluation',
      'Detailed commercial inspection report'
    ],
    icon: 'ph:building-fill',
    images: [
      {
        src: "/images/properties/property4/property4.jpg",
      },
      {
        src: "/images/properties/property4/image-2.jpg"
      }
    ]
  },
  {
    name: 'Termite/WDO Inspection',
    slug: 'termite-wdo-inspection',
    description: 'An in-depth inspection to search for wood-destroying organisms. Reports will suggest treatment options along with findings.',
    category: 'Home Inspection Services',
    features: [
      'Wood-destroying organism detection',
      'Termite inspection',
      'Comprehensive property assessment',
      'Treatment recommendations',
      'Prevention strategies',
      'Detailed WDO report'
    ],
    icon: 'ph:bug-fill',
    images: [
      {
        src: "/images/properties/property5/property5.jpg",
      },
      {
        src: "/images/properties/property5/image-2.jpg"
      }
    ]
  },
  {
    name: 'Airborne Mold Spore Testing',
    slug: 'airborne-mold-testing',
    description: 'If you are coughing, sneezing, or have itchy eyes in your home, this test will identify the type of mold in the air and test airborne mold spore concentration.',
    category: 'Mold Testing Services',
    features: [
      'Air quality assessment',
      'Mold spore identification',
      'Concentration level testing',
      'Health hazard evaluation',
      'Laboratory analysis',
      'Remediation referrals available',
      'Complete home health evaluation'
    ],
    icon: 'ph:wind-fill',
    images: [
      {
        src: "/images/properties/property6/property6.jpg",
      },
      {
        src: "/images/properties/property6/image-2.jpg"
      }
    ]
  },
  {
    name: 'Wall Cavity Air Sample',
    slug: 'wall-cavity-mold-testing',
    description: 'If you suspect mold but don\'t have symptoms and don\'t see it on surfaces, this sample gathers air from inside ceilings or walls where mold is not visible but still causing damage.',
    category: 'Mold Testing Services',
    features: [
      'Hidden mold detection',
      'Wall and ceiling cavity testing',
      'Air sample collection',
      'Laboratory analysis',
      'Invisible mold identification',
      'Damage assessment',
      'Remediation company referrals'
    ],
    icon: 'ph:wall-fill',
    images: [
      {
        src: "/images/properties/property7.jpg",
      },
      {
        src: "/images/properties/property8.jpg"
      }
    ]
  },
  {
    name: 'Visible Mold Inspection',
    slug: 'visible-mold-inspection',
    description: 'When you can visibly see a dark stain on your wall or floor, our inspector will identify the mold and provide remediation company referrals.',
    category: 'Mold Testing Services',
    features: [
      'Visual mold identification',
      'Surface mold assessment',
      'Mold type determination',
      'Immediate remediation referrals',
      'Professional evaluation',
      'Action plan recommendations'
    ],
    icon: 'ph:eye-fill',
    images: [
      {
        src: "/images/properties/property8.jpg",
      },
      {
        src: "/images/properties/property9.jpg"
      }
    ]
  }
]
