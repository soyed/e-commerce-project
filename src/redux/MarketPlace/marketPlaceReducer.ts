import { STATUS } from '../Category/utils';
import marketPlaceAction from './marketPlaceActions';

const temp = [
  {
    id: '615f40b1dfa27353b9e2add9',
    name: 'Toilet Cleaner',
    description:
      '1/3/5/10x Blue Bubble Toilet Cleaner Autoile Automatic Flushing Toilet Cleaner Deodorant Block Toilet Spirit Household',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 400,
    ratings: 4,
    price: 27,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633632432/ecommerceAPI/2021-10-07T18-47-11.090Z1119749616-299167806.jpg.jpg',
    sales: 280,
    color: 'Blue',
    platform: 'MarketPlace',
  },
  {
    id: '615f4021dfa27353b9e2add7',
    name: 'Drawing robot',
    description:
      'LANDZO Quincy Magic Q Drawing Robot for Kid Science Toys Student Learning Draw Intelligence Automatic USB Rechargeable Robot Toy',
    category: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    stock: 289,
    ratings: 4,
    price: 29,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633632288/ecommerceAPI/2021-10-07T18-44-47.464Z-865873800715196296.jpg.jpg',
    sales: 111,
    color: 'Green',
    platform: 'MarketPlace',
  },
  {
    id: '615f3fb1dfa27353b9e2add5',
    name: 'Children puzzle',
    description:
      '3D Slide Puzzle Alphabet Early Educational Developing Toy for Children Jigsaw Digital Number 1-16 Animal Cartoon Game Kids Toys',
    category: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    stock: 50,
    ratings: 2,
    price: 11,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633632175/ecommerceAPI/2021-10-07T18-42-54.797Z1319449041-1107565679.jpg.jpg',
    sales: 180,
    color: 'Red, green, yellow',
    platform: 'MarketPlace',
  },
  {
    id: '615f3f3edfa27353b9e2add3',
    name: 'Luminous animal toys',
    description:
      'Cute Luminous Mochi Squishy Cat Antistress Toy Slow Rising Squeeze Healing Fun Kids Kawaii Toy Stress Reliever Decor Gift',
    category: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    stock: 300,
    ratings: 4,
    price: 10,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633632060/ecommerceAPI/2021-10-07T18-40-59.478Z-3822986301584677314.jpg.jpg',
    sales: 280,
    color: 'Blue',
    platform: 'MarketPlace',
  },
  {
    id: '615f3eb0dfa27353b9e2add1',
    name: 'Remote controlled cars',
    description:
      'CADA City RC APP Model Bricks Cars Remote control Cars Red Track Sports Car Building Blocks Speed Champion Racing  Toys Gift',
    category: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    stock: 450,
    ratings: 1,
    price: 38,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633631919/ecommerceAPI/2021-10-07T18-38-38.158Z-1822296315-1110323350.jpg.jpg',
    sales: 180,
    color: 'Red, blue',
    platform: 'MarketPlace',
  },
  {
    id: '615f3e36dfa27353b9e2adcf',
    name: 'Bubble poppet',
    description:
      'New Large-Size Fingertip Toys Push Bubble Popet Pendant Bag Popp It Adults Decompression Poppit Toys Children Anti-Stress',
    category: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    stock: 440,
    ratings: 4,
    price: 20,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633631797/ecommerceAPI/2021-10-07T18-36-36.734Z-4099223011372372106.jpg.jpg',
    sales: 140,
    color: 'Red, green, yellow',
    platform: 'MarketPlace',
  },
  {
    id: '615f3d4adfa27353b9e2adcb',
    name: 'Children Bulldozer toy',
    description:
      'City Remote Control Engineering Vehicle RC Excavator Construction Model Toy Kids Gift Truck Bulldozer Digger Engineering Vehicle',
    category: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    stock: 440,
    ratings: 3,
    price: 30,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633631560/ecommerceAPI/2021-10-07T18-32-40.036Z-1539119907-1990052069.jpg.jpg',
    sales: 180,
    color: 'Red, blue',
    platform: 'MarketPlace',
  },
  {
    id: '615f3cc6dfa27353b9e2adc9',
    name: 'Baby Dolls',
    description:
      '5pcs Kids Toys Interactive Baby Dolls Toy Mini Doll For Girls And Boys Reborn Doll Toy Gift For Children Cute Key Small Pendant',
    category: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    stock: 200,
    ratings: 4,
    price: 49,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633631429/ecommerceAPI/2021-10-07T18-30-28.474Z1640152380-1984236753.jpg.jpg',
    sales: 160,
    color: 'Red, yellow',
    platform: 'MarketPlace',
  },
  {
    id: '615f3c3cdfa27353b9e2adc7',
    name: 'Children truck',
    description:
      '4WD RC Car Updated Version 2.4G Radio Control RC Car Toys remote control car Trucks Off-Road Trucks boys Toys for Children',
    category: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    stock: 45,
    ratings: 4,
    price: 40,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633631291/ecommerceAPI/2021-10-07T18-28-10.721Z646268621687549714.jpg.jpg',
    sales: 99,
    color: 'Blue',
    platform: 'MarketPlace',
  },
  {
    id: '615f3bc9dfa27353b9e2adc5',
    name: 'Electric flying chopper',
    description:
      "Electric RC Flying Ball Luminous Kid's Flight Balls Infrared Induction Aircraft Remote Control Toys Flash LED Light Plane Toys",
    category: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    stock: 200,
    ratings: 3,
    price: 50,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633631175/ecommerceAPI/2021-10-07T18-26-15.692Z-2479360041202386404.jpg.jpg',
    sales: 109,
    color: 'Red, green',
    platform: 'MarketPlace',
  },
  {
    id: '615ded8d3d45ede7cdc64eb4',
    name: 'Nail Dust Vacuum Cleaner',
    description:
      '80W powerful vacuum\n2. Quiet design\n3. Simple buttons\n4. Two free vacuum bags\n5. Replaceable vacuum cleaner bag\nSize: 25.8*24*10cm\nMaterial: ABS+leather\nVoltage: 110/240V',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 90,
    ratings: 4,
    price: 59,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633545612/ecommerceAPI/2021-10-06T18-40-12.124ZNail-Dust-Vacuum-Cleaner-Nail-Manicure-Nail-Dust-Collector-Extractor-Fan-for-Manicure-Nail-Vacuum-Cleaner.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 544,
    color: 'purple',
    platform: 'MarketPlace',
  },
  {
    id: '615dec383d45ede7cdc64eb2',
    name: 'Mr Green Nail Clippers Stainless Steel',
    description:
      'MR.GREEN the professional beauty tools manufacturer Origin from Germany.\nMR.GREEN means high quality & reliable and the Industry leading position.\n\nMR-1111 series Anti-splash nail clipper:\n1. This is a nail clipper with anti-splash function, which can effectively prevent nail shavings splash, facilitate cleaning and storage, and prevent eye injury.\n2. Bionic design combined with excellent ergonomic design, feel good, delicate and beautiful appearance, just like a beautiful artwork.\n3. High grade stainless steel with zinc alloy nickel plating process,excellent anti-rust ability,it has outstanding texture and hand feel, let you have outstanding manicure experience.',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 100,
    ratings: 4,
    price: 48,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633545271/ecommerceAPI/2021-10-06T18-34-31.726ZMR-GREEN-Nail-Clippers-Stainless-Steel-Anti-Splash-Fingernail-Cutter-Manicure-Tools-Bionics-Design-Nail-Trimmer.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 670,
    color: 'stainless steel',
    platform: 'MarketPlace',
  },
  {
    id: '615dea463d45ede7cdc64eb0',
    name: 'Ambition Ninja Wireless Tattoo Pen Machine',
    description:
      "MOTOR ：Ambition coreless DC motor \n\nmore importantly, the motor still maintains vitality and the power will not be weak\n\nCompared with the soldier's ambition , this machine is an advanced version of the soldier.ninja is perfect for fine lines,smooth black grey，realistic color，traditional style 3rl work and more，it's your  all-in-one machine if you are an artist that does such work.it has  powerful motor precisely paired with 4.0 stroke.\n\nThis allows artists to work over 6 hours without worrying about empty power packs or power black outs.\n34mm grip makes you more comfortable at work.\n\n-Of course, it can be used with all major cartridge brands as well as Ambition's cartridge system.\n\n\n️Power-pack key features:\n️-display in which you can view all your parameteres such as voltage, Remaining battery reminder.",
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 421,
    ratings: 4,
    price: 45,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633544773/ecommerceAPI/2021-10-06T18-26-13.107ZAmbition-Ninja-Wireless-Tattoo-Pen-Machine-Powerful-Coreless-DC-Motor-Fast-Charging-2400-mAh-Lithium-Battery.jpg_Q90.jpg_%20%282%29.webp.webp',
    sales: 500,
    color: 'Black',
    platform: 'MarketPlace',
  },
  {
    id: '615de8713d45ede7cdc64eae',
    name: 'Pearlescent silkworm eyeshadow pen',
    description:
      'Pen Material:Plastic\nColor: 15 color to choose\nType:Eye Shadow & Liner Combination\nFunction:Waterproof / Water-Resistant,Natural,Other,Long-Lasting\n\nFeature:\nFeature 1:Waterproof / Waterproof, Multi-Functional Shaping Eye Shadow Pen, Natural Contour\nFeature 2:Fast / Fast Drying, Natural, Long Lasting, Easy To Wear\nFeature 3:Beauty Makeup Tool\nFeature 4:maquiagem profissional completa\nWeight:20g\nUse The Crowd:All Skin Types Can Be Used',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 40,
    ratings: 4,
    price: 18,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633544304/ecommerceAPI/2021-10-06T18-18-23.643ZPearlescent-silkworm-eyeshadow-pen-lasting-waterproof-and-not-blooming-Shiny-pearlescent-gel-pen-16-color-eye.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 101,
    color: 'red, blue,pink',
    platform: 'MarketPlace',
  },
  {
    id: '615de6a43d45ede7cdc64eac',
    name: 'Magic Hair Curlers',
    description:
      'Size: 25/30/45/50/65cm\nPackage: 12pcs/pack\n\nSuitable hairstyle: long hair, short hair can be used\n\nProduct Features: Used for DIY curly hair\n\n simple operation, curly hair does not hurt hair',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 32,
    ratings: 4,
    price: 98,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633543843/ecommerceAPI/2021-10-06T18-10-43.329Z12PCS-Magic-Hair-Curlers-25-30-45-50-65CM-DIY-Portable-Hairstyle-Rollers-Sticks-Durable-Beauty.jpg_Q90.jpg_.webp.webp',
    sales: 45,
    color: 'pink, blue',
    platform: 'MarketPlace',
  },
  {
    id: '615de4ea3d45ede7cdc64eaa',
    name: 'Kolinsky Acrylic Nail Brush',
    description:
      'Enables you to freely create your own favorite design on your nails, and suitable for exquisite nail work.\nPerfect for both professional use or personal use and suitable for intermediate and senior grade.\nDelicate and soft, creating beautiful nail effect.',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 100,
    ratings: 5,
    price: 18,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633543401/ecommerceAPI/2021-10-06T18-03-20.979ZKolinsky-Acrylic-Nail-Brush-Good-Quality-Nail-Art-Mink-Brush-Wood-Handle-Gel-Builder-Manicure-Brush.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 56,
    color: 'silver',
    platform: 'MarketPlace',
  },
  {
    id: '615de3c73d45ede7cdc64ea8',
    name: 'Makeup Setting Spray',
    description:
      'Description:\n\n100% new packaging\n\nApplicable skin: Universal\n\nNet content: 100ml\n\nShelf life: 3 years\n\n\nEfficacy:\n\n1. Give your makeup lasting endurance\n\n2. Long-lasting matte while absorbing surface gloss. Reduce the appearance of pores\n\n3. Provide long-lasting sebum control performance and keep skin matte\n\n4. Delivering moisture to the skin and renewing it over time',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 47,
    ratings: 3,
    price: 71,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633543110/ecommerceAPI/2021-10-06T17-58-30.591ZMakeup-Setting-Spray-Moisturizing-Long-Lasting-Foundation-Fixer-make-Up-SprayMatte-Finishing-Setting-Spray-Skin-Cosmetic.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 106,
    color: 'White',
    platform: 'MarketPlace',
  },
  {
    id: '615de1bd3d45ede7cdc64ea6',
    name: 'Black Liquid Eyeliner',
    description:
      '1PC Professional Women Ultimate Black Liquid Eyeliner Long-lasting Waterproof Quick-dry Eye Liner Pencil Pen Makeup Beauty Tools\n\n100% Brand new and high quality\n\nGreat for professional use or home use\n\nIt makes you look more attractive\n\nColor: Black\n\nWeight: 7 g\n\nLength: 12.7 cm\n\nPackage: 1 x Eyeliner',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 15,
    ratings: 4,
    price: 12,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633542588/ecommerceAPI/2021-10-06T17-49-48.833Z1PC-Professional-Women-Ultimate-Black-Liquid-Eyeliner-Long-lasting-Waterproof-Quick-dry-Eye-Liner-Pencil-Pen.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 100,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '615de0a43d45ede7cdc64ea4',
    name: 'Adjustable Posture Corrector Back Support',
    description:
      "Design,Breathable,Comfortable:\nThe postural correction belt is made of very soft composite fabric and nylon tape, and breathable holes are adopted in back and shoulder straps. Heat dissipation and permeability have been upgraded to improve the comfort of wearing\nMagic Paste Of High Quality,Free Asjustment\n \nThe angles needed to correce are different, the design of correction belt can adopt adjustable nylon belt with magic paste of high quality so that it can be adjusted freely through the shoulder band\n \nSitting Position Improvement\nApplicable to men, women and youth(teenagers).Unhealthy posture can lead to long-term back pain, muscle pain, myopia, and other medical problems.Wearing a back corrector can develop muscle memory for a period of time, and you can keep your back straight even if you don't wear a posture correction device\n \nFunctions:\nMuscle pain relief: The coronal and lumber section of the frontal plane maintains the gravity balance of the body, reduces the burden on the muscles, corrects and relieves pain, and bad postures would cause sore necks and shoulders, and even headaches The role of protection: Wearing is comfortable and breathable, can be applicable to all including men and women, young and old, it can play a good role in correcting the back.Applicable to those workers with pain in back and shoulder due to the long time standing, sitting or keeping of the same posture Easy to adjust and wear: Universal size, easy to wear, without any help, you can take off and wear a pose corrector by yourself",
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 16,
    ratings: 5,
    price: 67,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633542307/ecommerceAPI/2021-10-06T17-45-07.386ZAdjustable-Posture-Corrector-Back-Support-Shoulder-Back-Brace-Posture-Correctionr-Spine-Corrector-Health-Postural-Fixer-Tape.jpg_Q90.jpg_.webp.webp',
    sales: 37,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '615ddf933d45ede7cdc64ea2',
    name: 'Dust Collector Extractor Dental Vacuum Cleaner',
    description:
      'Voltage: AC100-240V,50/60Hz\nPower: 60w\nAirflow: 52.45CFM (1.2m³/min)\n\nFeatures:\n◆  3-way dust collector.360° flexible rotation square tray&Catheter\n◆  The square tray dust collector can easily clean the table dust.Make the table clean and tidy.\n◆  Three LED spotlight are built in the front end of the catheter.In addition to collecting dust,it can also be used as lighting.\n◆  Reduce the 96.41 of PM 2.5.Reduce dust and protect the health of user.\n◆  The filter is replaceable and the maintenance is very convenience.\n◆  The service life of the motor is about 10,000hrs.\n\nAbout the filter plate:\n◆  If the suction is weakened,clean or replace the new filter plate.(It is suggested that every THREE MONTHS be replaced or according to the frequency of use).\n◆  If there is too much dust in the filter board,the reverse flow will occur when the filter is used.\n\nUse of attention:\n◆  Do not insert your finger into the fan.\n◆  Be careful not to let the water enter into the machine.\n◆  The filter board can not be washed with water.\n◆  Keep out of reach of children.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 34,
    ratings: 3,
    price: 56,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633542034/ecommerceAPI/2021-10-06T17-40-34.108Z60W-Dust-Collector-Extractor-Dental-Vacuum-Cleaner-Dental-Lab-Equipment-Dust-Suction-Machine-for-Polishing.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 43,
    color: 'White',
    platform: 'MarketPlace',
  },
  {
    id: '615ddec43d45ede7cdc64ea0',
    name: 'ophthalmic microsurgical instruments',
    description:
      '1 pcs 12.5CM Needle Holder ( bend head )\n1 pss 12.5CM Micro scissors ( bend head )\n1 pcs 10.5CM Microsurgical round handle Tweezers ( with toothed )\n1 pcs 10.5CM Microsurgical round handle Tweezers ( without toothed )',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 34,
    ratings: 4,
    price: 45,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633541827/ecommerceAPI/2021-10-06T17-37-07.304ZNew-4pcs-set-ophthalmic-microsurgical-instruments-12-5cm-scissors-Needle-holders-tweezers-stainless-steel-surgical-tool.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 12,
    color: 'Grey',
    platform: 'MarketPlace',
  },
  {
    id: '615dde133d45ede7cdc64e9e',
    name: 'Leg Massager Pair Wireless With Smart Air Compression',
    description:
      'Exercise without fatigue, while fitness-while massage\n\nSurrounding all-inclusive massage method, flexible to use\nMassage while exercising, bid farewell to muscle soreness after exercise\nDouble pressure\nQuickly eliminate muscle soreness\nLongitudinal pressure\nLateral pressure',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 20,
    ratings: 4,
    price: 10,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633541648/ecommerceAPI/2021-10-06T17-34-07.082ZLeg-Massager-Pair-Wireless-With-Smart-Air-Compression-Controlled-Heating-Calf-Massage-Electric-Relief-Muscle-Pain.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 30,
    color: 'grey',
    platform: 'MarketPlace',
  },
  {
    id: '615ddc973d45ede7cdc64e9c',
    name: 'Face Spa Massager',
    description:
      '--100% brand new and high quality.\n--Face roller are made of 100% natural resin.\nAnti-aging, anti-wrinkles line, better skin and health without any chemicals or irritants.\n--The big roller is ideal for neck, chin, cheeks, and forehead while the smaller is perfect for around the eyes, nose, and lips. The roller promotes blood circulation, which can reduce puffiness and wrinkling.\n--Gua Sha Scraper Board . It is a very good jade gua sha scraping tool, great for using on your body and much helpful to relief pressure, always with a relaxative and graceful mood\n--Ultra smooth surface will never hurt your skin  .\n--Helps to relieve facial tension and discourage fine lines and wrinkles.\n--Keep your skin elasticity, promote circulation and integrate natural energy.\n--Natural resin Massager stays cool in feel even in hot condition which gives you a smooth and comfortable feeling.',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 200,
    ratings: 5,
    price: 20,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633541270/ecommerceAPI/2021-10-06T17-27-50.357Z2pcs-set-Face-Spa-Massager-Neck-Roller-Gua-Sha-Scraper-Board-Face-Lift-Up-Wrinkle-Remover.jpg_Q90.jpg_.webp.webp',
    sales: 400,
    color: 'pink',
    platform: 'MarketPlace',
  },
  {
    id: '615ddb453d45ede7cdc64e9a',
    name: 'cotton buds',
    description:
      '200PCS/Box Double Head Cotton Swab Bamboo Sticks Cotton Swab Disposable Buds Cotton For Beauty Makeup Nose Ears Cleaning',
    category: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    stock: 500,
    ratings: 4,
    price: 10,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633540932/ecommerceAPI/2021-10-06T17-22-12.219Z200PCS-Box-Double-Head-Cotton-Swab-Bamboo-Sticks-Cotton-Swab-Disposable-Buds-Cotton-For-Beauty-Makeup.jpg_Q90.jpg_%20%281%29.webp.webp',
    sales: 270,
    color: 'white, green, yellow',
    platform: 'MarketPlace',
  },
  {
    id: '6156ba8915b11153fbe4ebf7',
    name: '3M shower head',
    description:
      '3M Showerhead  Showerset with Spiral Hose ,Bathroom Accesorrry , Home Bathroom Shower pump ,Best Quality Improment New , Silver',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 110,
    ratings: 4,
    price: 56,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633073800/ecommerceAPI/2021-10-01T07-36-39.770Z104899207455292182.jpg.jpg',
    sales: 230,
    color: 'Silver',
    platform: 'MarketPlace',
  },
  {
    id: '6156ba2b15b11153fbe4ebf5',
    name: 'Toilet brush',
    description:
      'Silicone Toilet  Brush Wc Gap Brush with Holder Flat Head Soft Bristles Cleaning Brushes With Quick Drying Bracket Bathroom Tool',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 199,
    ratings: 4,
    price: 30,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633073706/ecommerceAPI/2021-10-01T07-35-05.851Z598127047-80627650.jpg.jpg',
    sales: 170,
    color: 'Blue',
    platform: 'MarketPlace',
  },
  {
    id: '6156b9aa15b11153fbe4ebf3',
    name: 'Toilet paper wall stand',
    description:
      'Toilet Paper Holder Stand Wall Mounted Waterproof Paper Towel Dispenser Holder Tissue Box Toilet Roll Holder For Toilet Paper',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 89,
    ratings: 3,
    price: 40,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633073576/ecommerceAPI/2021-10-01T07-32-56.084Z-974344728-1565728950.jpg.jpg',
    sales: 101,
    color: 'Pink',
    platform: 'MarketPlace',
  },
  {
    id: '6156b92d15b11153fbe4ebf1',
    name: '300 Holes Shower Head',
    description:
      'Hot Sale 300 Holes Shower Head High Pressure Rainfall Water Saving Flow With Chrome ABS Spray Water Saving Bathroom Accessories',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 190,
    ratings: 1,
    price: 20,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633073451/ecommerceAPI/2021-10-01T07-30-50.325Z1442122831-545268973.jpg.jpg',
    sales: 60,
    color: 'Silver',
    platform: 'MarketPlace',
  },
  {
    id: '6156b8c215b11153fbe4ebef',
    name: 'DJM4 diaphragm',
    description:
      'DJM4 diaphragm coupling single and double diaphragm couplings expansion Sleeve rigid flange Lamination set shaft coupler',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 111,
    ratings: 3,
    price: 40,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633073344/ecommerceAPI/2021-10-01T07-29-04.327Z14528006954459872.jpg.jpg',
    sales: 67,
    color: 'Black',
    platform: 'MarketPlace',
  },
  {
    id: '6156b85215b11153fbe4ebed',
    name: '2 heads kitchen tap',
    description:
      '2 Modes Water Faucet Aerator 360 Degree Adjustable Saving Tap Water Bubbler Kitchen Connector Shower Head Filter Nozzle Spray',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 300,
    ratings: 4,
    price: 30,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633073233/ecommerceAPI/2021-10-01T07-27-12.633Z3344939-1199534093.jpg.jpg',
    sales: 140,
    color: 'Silver',
    platform: 'MarketPlace',
  },
  {
    id: '6156b7ea15b11153fbe4ebeb',
    name: 'Solar lights',
    description:
      'Newly Solar Garden Light Simulation Flame Light Outdoor Household Waterproof Led Lawn Light Villa Decorative Street Lamp, indoors lamp',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 66,
    ratings: 4,
    price: 50,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633073128/ecommerceAPI/2021-10-01T07-25-27.089Z-629422507-2075250138.jpg.jpg',
    sales: 288,
    color: 'Black',
    platform: 'MarketPlace',
  },
  {
    id: '6156b77a15b11153fbe4ebe9',
    name: 'Solar panel',
    description:
      '2w 6v Solar Panel Power Battery Toy Charger Diy Small House Solar Power Panels Cell Generation Solar Panel Generator Solar S2F5',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 88,
    ratings: 4,
    price: 100,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1633073016/ecommerceAPI/2021-10-01T07-23-36.482Z-19643279291373580283.jpg.jpg',
    sales: 160,
    color: 'Black',
    platform: 'MarketPlace',
  },
  {
    id: '615391814007789f4f07c6fc',
    name: 'Brown hand bag',
    description:
      'Women Fashionable Shoulder Bags New Female Wide Strap Messenger Bag Ladies Handbag Casual Chain Crossbody Bag For Girls 2021',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 12,
    ratings: 2,
    price: 55,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632866684/ecommerceAPI/2021-09-28T22-04-28.725Zpexels-artem-beliaikin-2534961.jpg.jpg',
    sales: 100,
    color: 'Brown',
    platform: 'MarketPlace',
  },
  {
    id: '61533b3ba7a7fbc6853d0ea2',
    name: 'brown wooden stand',
    description:
      'Bedside Dresser Table Nordic Table Coffee Modern Storage Bedroom Home Furniture Also Mounted Tea Coffee Service Desk Decoration',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 400,
    ratings: 4,
    price: 290,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632844601/ecommerceAPI/2021-09-28T15-56-39.362Znathan-oakley-OngbrOmqtzc-unsplash.jpg.jpg',
    sales: 508,
    color: 'brown',
    platform: 'MarketPlace',
  },
  {
    id: '615339e0a7a7fbc6853d0ea0',
    name: 'xiaomi phone',
    description:
      'Global Version Xiaomi Redmi Note 10 Pro 6GB 64GB / 128GB 108MP Camera Mobile Phone Snapdragon 732G Octa Core NFC 120Hz AMOLED',
    category: 'Phones & Telecommunications',
    categoryId: 'PhonesTelecommunications',
    stock: 10,
    ratings: 3,
    price: 200,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632844255/ecommerceAPI/2021-09-28T15-50-54.073Zrishabh-malhotra-83ypHTv6J2M-unsplash.jpg.jpg',
    sales: 34,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '61533982a7a7fbc6853d0e9e',
    name: 'iphone xr',
    description:
      'Original Apple iPhone XR xr 2942mAh RAM 3GB ROM 64GB/128GB /256G Unlocked Mobile Phone 4G LTE 6.1" Hexa-core 12MP&7MP 2018',
    category: 'Phones & Telecommunications',
    categoryId: 'PhonesTelecommunications',
    stock: 10,
    ratings: 5,
    price: 400,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632844158/ecommerceAPI/2021-09-28T15-49-04.746Zthom-bradley-1NZcjdo2hKQ-unsplash.jpg.jpg',
    sales: 12,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '61533896a7a7fbc6853d0e9c',
    name: 'sebastian banasi wireless headphones',
    description:
      'Wireless Headset Bluetooth Headphones ANC bluetooth 5.0 HIFI sound with 57mm loudspeaker face recognition for phone',
    category: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    stock: 200,
    ratings: 4,
    price: 220,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632843925/ecommerceAPI/2021-09-28T15-45-22.809Zsebastian-banasiewcz-oXXc-s5nNy8-unsplash.jpg.jpg',
    sales: 490,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '61533853a7a7fbc6853d0e9a',
    name: 'tomasx headphones',
    description:
      'Wireless Headset Bluetooth Headphones ANC bluetooth 5.0 HIFI sound with 57mm loudspeaker face recognition for phone',
    category: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    stock: 300,
    ratings: 2,
    price: 200,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632843857/ecommerceAPI/2021-09-28T15-44-14.818Ztomasz-gawlowski-YDZPdqv3FcA-unsplash.jpg.jpg',
    sales: 49,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '61533808a7a7fbc6853d0e98',
    name: 'drummer ring',
    description:
      'Wireless Headset Bluetooth Headphones ANC bluetooth 5.0 HIFI sound with 57mm loudspeaker face recognition for phone, also has a port for cord if need be',
    category: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    stock: 107,
    ratings: 4,
    price: 300,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632843779/ecommerceAPI/2021-09-28T15-42-56.684Zkiran-ck-LSNJ-pltdu8-unsplash.jpg.jpg',
    sales: 300,
    color: 'grey',
    platform: 'MarketPlace',
  },
  {
    id: '615336bea7a7fbc6853d0e96',
    name: 'Basek D02',
    description:
      'Wireless Headphones Sport Bluetooth 5.0 Earphone Handsfree Headset Ear Buds Head Phone Earbuds For iPhone Xiaomi, infinix',
    category: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    stock: 400,
    ratings: 3,
    price: 300,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632843451/ecommerceAPI/2021-09-28T15-37-30.882Zkiran-ck-cDrIiiptFqE-unsplash.jpg.jpg',
    sales: 509,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '61533698a7a7fbc6853d0e94',
    name: 'dark headphone',
    description:
      'Wireless Headphones Sport Bluetooth 5.0 Earphone Handsfree Headset Ear Buds Head Phone Earbuds For iPhone Xiaomi',
    category: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    stock: 200,
    ratings: 4,
    price: 390,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632843385/ecommerceAPI/2021-09-28T15-35-49.983Zjason-leung-xR4JHzr69Og-unsplash.jpg.jpg',
    sales: 1002,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '6153366ea7a7fbc6853d0e92',
    name: 'dark headphone',
    description:
      'Wireless Headphones Sport Bluetooth 5.0 Earphone Handsfree Headset Ear Buds Head Phone Earbuds For iPhone Xiaomi',
    category: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    stock: 200,
    ratings: 4,
    price: 390,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632843369/ecommerceAPI/2021-09-28T15-35-49.927Zjason-leung-xR4JHzr69Og-unsplash.jpg.jpg',
    sales: 1002,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '6153354fa7a7fbc6853d0e8e',
    name: 'blue flower vase',
    description:
      'Modern Flower Vase Ceramic Ornaments Living Room Model Flower Pot Flower Basket Glass Jardiniere Arrangements Home Decoration',
    category: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    stock: 490,
    ratings: 3,
    price: 30,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632843084/ecommerceAPI/2021-09-28T15-31-21.486Zgalina-n-miziNqvJx5M-unsplash.jpg.jpg',
    sales: 1902,
    color: 'blue',
    platform: 'MarketPlace',
  },
  {
    id: '6153347ea7a7fbc6853d0e8c',
    name: 'multi language keyboard',
    description:
      'Russia/Spain/USA/France/Italy/Germany Layout 2.4 GHz Ultra Thin Portable Wireless Keyboard Mouse, Full Size 2400 DPI Mouse,Black',
    category: 'Computer, Office & Security',
    categoryId: 'ComputerOfficeSecurity',
    stock: 300,
    ratings: 3,
    price: 200,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632842875/ecommerceAPI/2021-09-28T15-27-50.475Zeditors-keys-CtDrd7mWW6M-unsplash.jpg.jpg',
    sales: 1009,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '6153340ea7a7fbc6853d0e8a',
    name: 'black headphones',
    description:
      'Active Noise Cancelling Headphones Bluetooth Headphones Wireless Headset Over Ear 30 Hours Playtime with Mic',
    category: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    stock: 490,
    ratings: 2,
    price: 380,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632842763/ecommerceAPI/2021-09-28T15-25-58.409Zc-d-x-PDX_a_82obo-unsplash.jpg.jpg',
    sales: 716,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '6153339da7a7fbc6853d0e87',
    name: 'Anker Soundcore',
    description:
      'Anker Soundcore Life Q20 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones',
    category: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    stock: 300,
    ratings: 4,
    price: 400,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632842652/ecommerceAPI/2021-09-28T15-24-11.812ZAnker-Soundcore-Life-Q20-Hybrid-Active-Noise-Cancelling-Headphones-Wireless-Over-Ear-Bluetooth-Headphones.jpg_Q90.jpg_.webp.webp',
    sales: 679,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '615331dda7a7fbc6853d0e83',
    name: '8gb grey laptop',
    description:
      'Intel Core i7 8th Gen\nQuad Core, 1.8 GHz Clock Speed\n8 GB RAM\n512 GB Hard Disk\nIntel UHD Graphics 620\n13.3 inches, 1920 x 1080 pixels\ngrey colored\n3 Year Warranty',
    category: 'Computer, Office & Security',
    categoryId: 'ComputerOfficeSecurity',
    stock: 10,
    ratings: 2,
    price: 200,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632842203/ecommerceAPI/2021-09-28T15-16-38.861Zkari-shea-1SAnrIxw5OY-unsplash.jpg.jpg',
    sales: 50,
    color: 'grey',
    platform: 'MarketPlace',
  },
  {
    id: '61533170a7a7fbc6853d0e81',
    name: 'black laptop 16gb',
    description:
      'Intel Core i7 8th Gen\nQuad Core, 1.8 GHz Clock Speed\n16GB RAM\n512 GB Hard Disk\nIntel UHD Graphics 620\n13.3 inches, 1920 x 1080 pixels\nWindows 10 OS\n3 Year Warranty',
    category: 'Computer, Office & Security',
    categoryId: 'ComputerOfficeSecurity',
    stock: 11,
    ratings: 4,
    price: 450,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632842094/ecommerceAPI/2021-09-28T15-14-49.802Zernest-ojeh-v-kSEAV7jQE-unsplash.jpg.jpg',
    sales: 100,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '6153311ba7a7fbc6853d0e7f',
    name: 'white laptop 8gb',
    description:
      'Intel Core i7 8th Gen\nQuad Core, 1.8 GHz Clock Speed\n8 GB RAM\n512 GB Hard Disk\nIntel UHD Graphics 620\n13.3 inches, 1920 x 1080 pixels\nWindows 10 OS\n3 Year Warranty',
    category: 'Computer, Office & Security',
    categoryId: 'ComputerOfficeSecurity',
    stock: 10,
    ratings: 4,
    price: 340,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632842007/ecommerceAPI/2021-09-28T15-12-56.537Zangelina-yan-r1fNqfIP8ZM-unsplash.jpg.jpg',
    sales: 23,
    color: 'white',
    platform: 'MarketPlace',
  },
  {
    id: '615330c0a7a7fbc6853d0e7d',
    name: 'white laptop 8gb',
    description:
      'Intel Core i7 8th Gen\nQuad Core, 1.8 GHz Clock Speed\n8 GB RAM\n512 GB Hard Disk\nIntel UHD Graphics 620\n13.3 inches, 1920 x 1080 pixels\nWindows 10 OS\n3 Year Warranty',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 20,
    ratings: 4,
    price: 300,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632841917/ecommerceAPI/2021-09-28T15-11-42.717Zangelina-yan-r1fNqfIP8ZM-unsplash.jpg.jpg',
    sales: 11,
    color: 'white',
    platform: 'MarketPlace',
  },
  {
    id: '61532fe0a7a7fbc6853d0e7b',
    name: '8gb laptop',
    description:
      'Intel Core i7 8th Gen\nQuad Core, 1.8 GHz Clock Speed\n8 GB RAM\n512 GB Hard Disk\nIntel UHD Graphics 620\n13.3 inches, 1920 x 1080 pixels\nWindows 10 OS\n3 Year Warranty',
    category: 'Computer, Office & Security',
    categoryId: 'ComputerOfficeSecurity',
    stock: 40,
    ratings: 4,
    price: 550,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632841693/ecommerceAPI/2021-09-28T15-07-39.447Zalejandro-escamilla-ABDTiLqDhJA-unsplash.jpg.jpg',
    sales: 49,
    color: 'grey',
    platform: 'MarketPlace',
  },
  {
    id: '61532ec7a7a7fbc6853d0e79',
    name: 'washing machine',
    description:
      'Energy Saving for Money.\nSuper Quick Wash for Time Saving\nIntelligent LED Display \nSnowflake Drum for Clothes Protecting \nSmart Spin Balance control.\nDrum Self Clean',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 80,
    ratings: 4,
    price: 140,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632841414/ecommerceAPI/2021-09-28T15-03-33.574Zdryer_600.png.png',
    sales: 90,
    color: 'white',
    platform: 'MarketPlace',
  },
  {
    id: '61532e20a7a7fbc6853d0e77',
    name: 'Coffee maker',
    description: 'This is a really handy coffee maker. Easy to use.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 12,
    ratings: 3,
    price: 70,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632841247/ecommerceAPI/2021-09-28T15-00-47.050Zcoffeemachine_600.png.png',
    sales: 30,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '6152ffca257cffd39315c49e',
    name: 'grey couch',
    description:
      'A brilliant take on urban chic styling, the Enderlin sofa in vibrant grey makes high design highly affordable. Distinctive elements include quilted channel stitching for clean-lined allure and a velvety soft fabric you\'ll love living with. Sculptural track arms up the wow factor. If you’re looking for big style on more modest scale, you’re sure to appreciate this sofa’s space-conscious 82" wide profile.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 69,
    ratings: 4,
    price: 290,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632829386/ecommerceAPI/2021-09-28T11-43-05.534ZSofa-Bed-Transparent-PNG.png.png',
    sales: 139,
    color: 'grey',
    platform: 'MarketPlace',
  },
  {
    id: '6152ff64257cffd39315c49c',
    name: 'light brown sette',
    description:
      'This settee is a great addition for any home.\nFeaturing comfort and style, The contemporary two seater Sofa is perfect for a home office or living room.\nThe slightly curved back helps provide extra comfort and gives the settee a softer look.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 200,
    ratings: 3,
    price: 120,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632829283/ecommerceAPI/2021-09-28T11-41-22.041ZSofa-Bed.png.png',
    sales: 107,
    color: 'brown',
    platform: 'MarketPlace',
  },
  {
    id: '6152feca257cffd39315c49a',
    name: 'Zardoni sofa',
    description:
      'Feed your mid-century modern nostalgia with a contemporary twist in the Zardoni sofa. Colored in an attractive yellow, it’s upholstered in a timeless texture. Classic tufted back and tapered peg legs are a nice revival. Linear profile with two toss pillows adds plenty of fresh style, perfect for small spaces.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 100,
    ratings: 4,
    price: 300,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632829129/ecommerceAPI/2021-09-28T11-38-46.692ZYellow-Sofa-PNG-Image.png.png',
    sales: 170,
    color: 'yellow',
    platform: 'MarketPlace',
  },
  {
    id: '6152fe6b257cffd39315c498',
    name: 'bright yellow sofa',
    description:
      "Classic, clean comfort, all in one package. Featuring ergonomic pocket coil seating with extra padded cushions and a sinuous spring foundation. Whether you're curling up to read a novel, sinking into it for some nap time or lounging for a movie marathon, this sofa will serve its purpose",
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 58,
    ratings: 2,
    price: 120,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632829034/ecommerceAPI/2021-09-28T11-37-14.103ZYellow-Sofa-PNG-Photos.png.png',
    sales: 70,
    color: 'yellow',
    platform: 'MarketPlace',
  },
  {
    id: '6152fe31257cffd39315c496',
    name: 'yellow couch',
    description:
      "Classic, clean comfort, all in one package. This Regency-style sofa is upholstered in yellow linen, featuring ergonomic pocket coil seating with extra padded cushions and a sinuous spring foundation. Whether you're curling up to read a novel, sinking into it for some nap time or lounging for a movie marathon, this sofa will serve its purpose",
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 101,
    ratings: 4,
    price: 290,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632828975/ecommerceAPI/2021-09-28T11-36-14.431ZYellow-Sofa-Transparent-PNG.png.png',
    sales: 140,
    color: 'yellow',
    platform: 'MarketPlace',
  },
  {
    id: '6152fdf3257cffd39315c494',
    name: 'black sette',
    description:
      'This settee is a great addition for any home.\nFeaturing comfort and style, The contemporary two seater Sofa is perfect for a home office or living room.\nThe slightly curved back helps provide extra comfort and gives the settee a softer look.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 60,
    ratings: 3,
    price: 90,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632828913/ecommerceAPI/2021-09-28T11-35-13.184ZFuton-PNG-File.png.png',
    sales: 108,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '6152f9dd257cffd39315c492',
    name: 'blue couch',
    description:
      "Classic, clean comfort, all in one package. This Regency-style sofa is upholstered in gray linen, featuring ergonomic pocket coil seating with extra padded cushions and a sinuous spring foundation. Whether you're curling up to read a novel, sinking into it for some nap time or lounging for a movie marathon, this sofa will serve its purpose. Pair it with the matching loveseat (sold separately).",
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 200,
    ratings: 4,
    price: 280,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632827868/ecommerceAPI/2021-09-28T11-17-48.216ZVelvet-Sofa-PNG-Photos.png.png',
    sales: 190,
    color: 'blue',
    platform: 'MarketPlace',
  },
  {
    id: '6152f9a7257cffd39315c490',
    name: 'green couch',
    description:
      'Mixing mid-century inspiration with modern attitude, the Lyman green sofa is as retro chic as it is fashion forward. Loaded with multi-tonal interest, the granite upholstery is the essence of earthy elegance. Design elements include 2-over-2 cushion styling, t-cushions wrapping around slim track arms and tapered accent legs that are right on point.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 56,
    ratings: 4,
    price: 280,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632827814/ecommerceAPI/2021-09-28T11-16-54.068ZSofa-PNG-File.png.png',
    sales: 193,
    color: 'green',
    platform: 'MarketPlace',
  },
  {
    id: '6152f72d257cffd39315c48e',
    name: 'blue sofa',
    description:
      'Mixing mid-century inspiration with modern attitude, the Lyman sofa is as retro chic as it is fashion forward. Loaded with multi-tonal interest, the granite gray upholstery is the essence of earthy elegance. Design elements include 2-over-2 cushion styling, t-cushions wrapping around slim track arms and tapered accent legs that are right on point.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 46,
    ratings: 3,
    price: 192,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632827180/ecommerceAPI/2021-09-28T11-06-05.360ZSofa-Bed-Transparent-Background.png.png',
    sales: 30,
    color: 'blue',
    platform: 'MarketPlace',
  },
  {
    id: '6152f642257cffd39315c48c',
    name: 'red Sciolo sofa',
    description:
      'Bring home an effortlessly chic sense of style with the red Sciolo sofa in cobalt blue. Its decidedly contemporary profile sports a 2-over-2 cushion design for a crisp and clean aesthetic. Four feather-filled toss pillows are an added indulgence.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 67,
    ratings: 5,
    price: 240,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632826944/ecommerceAPI/2021-09-28T11-01-40.891ZSofa-Bed-Transparent.png.png',
    sales: 172,
    color: 'red',
    platform: 'MarketPlace',
  },
  {
    id: '6152f642257cffd39315c48a',
    name: 'red Sciolo sofa',
    description:
      'Bring home an effortlessly chic sense of style with the red Sciolo sofa. Its decidedly contemporary profile sports a 2-over-2 cushion design for a crisp and clean aesthetic. Four feather-filled toss pillows are an added indulgence.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 67,
    ratings: 5,
    price: 240,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632826944/ecommerceAPI/2021-09-28T11-02-15.497ZSofa-Bed-Transparent.png.png',
    sales: 172,
    color: 'red',
    platform: 'MarketPlace',
  },
  {
    id: '6152f639257cffd39315c488',
    name: 'red Sciolo sofa',
    description:
      'Bring home an effortlessly chic sense of style with the red Sciolo sofa. Its decidedly contemporary profile sports a 2-over-2 cushion design for a crisp and clean aesthetic. Four feather-filled toss pillows are an added indulgence.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 67,
    ratings: 5,
    price: 240,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632826935/ecommerceAPI/2021-09-28T11-01-47.360ZSofa-Bed-Transparent.png.png',
    sales: 172,
    color: 'red',
    platform: 'MarketPlace',
  },
  {
    id: '6152f577257cffd39315c486',
    name: 'Arroyo sofa',
    description:
      'For a fresh spot in your space, turn to the Arroyo sofa. This invigorating piece breathes warmth into your home with its striking caramel faux leather upholstery, modern bolster pillows and tapered legs. Wind down at the end of a long day when you sink into this canyon of comfort.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 40,
    ratings: 4,
    price: 130,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632826737/ecommerceAPI/2021-09-28T10-58-29.482ZSleeper-Sofa-Transparent-Images-PNG.png.png',
    sales: 111,
    color: 'brown',
    platform: 'MarketPlace',
  },
  {
    id: '6152e9dd8c089ec921d52810',
    name: 'maimz couch',
    description:
      'The Maimz sofa is mid-century revival done to perfection. Linear and minimalistic, the beautifully edited profile has all the retro elements you love, like sheltering arms, bolster pillows and tapered splayed legs. So casually cool, the caramel faux leather upholstery brings the look right into the present.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 89,
    ratings: 1,
    price: 100,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632823772/ecommerceAPI/2021-09-28T10-09-31.710ZSleeper-Sofa-Transparent-Background.png.png',
    sales: 40,
    color: 'grey',
    platform: 'MarketPlace',
  },
  {
    id: '6152e9998c089ec921d5280e',
    name: 'Dorsten sofa',
    description:
      'The Dorsten sofa chaise has the corner on ultra-contemporary style made for easy, everyday living. Upholstered in a plush slate chenille, it takes neutral sophistication to another level. And talk about accommodating. Thanks to a versatile chaise with movable ottoman and reversible seat cushions, you can enjoy the chaise on either side to suit your space.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 29,
    ratings: 4,
    price: 400,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632823704/ecommerceAPI/2021-09-28T10-08-22.768ZSleeper-Sofa-PNG-Image.png.png',
    sales: 108,
    color: 'blue',
    platform: 'MarketPlace',
  },
  {
    id: '6152e9368c089ec921d5280c',
    name: 'Melding couch',
    description:
      'Melding the contemporary style you love with the cozy feel you crave, the Kennewick sofa turns easy living into an art form. The sofa’s ultra-linear frame is enriched with generous bolster arm pillows and an indulgent velvet upholstery that’s the stuff dreams are made of. Slim track arms, sleek tapered feet and distinctive accent stitching are among the finer details that set this sofa apart.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 22,
    ratings: 4,
    price: 333,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632823605/ecommerceAPI/2021-09-28T10-06-45.006ZSleeper-Sofa-PNG-Transparent-Image.png.png',
    sales: 35,
    color: 'green',
    platform: 'MarketPlace',
  },
  {
    id: '6152e8cf8c089ec921d5280a',
    name: 'Nemolina couch',
    description:
      'The Nemoli sofa sets the scene for a modern space full of casual flair. Its textured chenille with solid microfiber upholstery provides a luxuriously soft feel that’s inviting. Gently flared arms and plush seat cushions welcome comfort and relaxation. The on-trend slate-colored upholstery offers a perfect background for the four decorative pillows to pop with beauty.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 39,
    ratings: 4,
    price: 330,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632823502/ecommerceAPI/2021-09-28T10-05-01.300ZSleeper-Sofa-PNG-HD.png.png',
    sales: 200,
    color: 'brown',
    platform: 'MarketPlace',
  },
  {
    id: '6152e85c8c089ec921d52808',
    name: 'Sciolo couch',
    description:
      'Bring home an effortlessly chic sense of style with the Sciolo sofa in brown. Its decidedly contemporary profile sports a 2-over-2 cushion design for a crisp and clean aesthetic. Four feather-filled toss pillows are an added indulgence.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 77,
    ratings: 2,
    price: 239,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632823386/ecommerceAPI/2021-09-28T10-03-05.614ZSleeper-Sofa-Background-PNG.png.png',
    sales: 35,
    color: 'brown',
    platform: 'MarketPlace',
  },
  {
    id: '6152e7f08c089ec921d52806',
    name: 'Enderlin Sofa',
    description:
      'A brilliant take on urban chic styling, the Enderlin sofa in vibrant blue makes high design highly affordable. Distinctive elements include quilted channel stitching for clean-lined allure and a velvety soft fabric you\'ll love living with. Sculptural track arms up the wow factor. If you’re looking for big style on more modest scale, you’re sure to appreciate this sofa’s space-conscious 82" wide profile.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 20,
    ratings: 4,
    price: 300,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632823279/ecommerceAPI/2021-09-28T10-01-17.308ZSettee-PNG-Image.png.png',
    sales: 180,
    color: 'blue',
    platform: 'MarketPlace',
  },
  {
    id: '6152e7548c089ec921d52804',
    name: 'dark brown sofa',
    description:
      'This Sofa is the perfect combination of functionality, simplicity and elegance.\nMade from the finest American Fabrics\nThe oversized cushions and the deep seater give extra comfort to your back while sitting.\nWhether in your home or office, this sofa adds beauty and class to your environment.\nIt consist of 2 throw pillows which gives you a smooth experience when you are sitting and laying.\nDimension Length 60 inches", Breath 32 inches", Height 36 inches.\n Available in different color shape and sizes',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 11,
    ratings: 2,
    price: 100,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632823123/ecommerceAPI/2021-09-28T09-58-43.213ZSettee-PNG-Clipart.png.png',
    sales: 56,
    color: 'brown',
    platform: 'MarketPlace',
  },
  {
    id: '6152e7048c089ec921d52802',
    name: 'patterned couch',
    description:
      'This Sofa is the perfect combination of functionality and elegance.\nMade from the finest American Fabrics\nThe oversized cushions and the deep seater give extra comfort to your back while sitting.\nWhether in your home or office, this sofa adds beauty and class to your environment.\nIt consist of  3 throw pillows which gives you a smooth experience when you are sitting and laying.\nDimension Length 60 inches", Breath 32 inches", Height 36 inches.\n Available in different color shape and sizes',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 10,
    ratings: 3,
    price: 120,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632823042/ecommerceAPI/2021-09-28T09-57-19.921ZPrinted-Sofa-PNG-Image.png.png',
    sales: 99,
    color: 'red, blue, green',
    platform: 'MarketPlace',
  },
  {
    id: '6152e67d8c089ec921d52800',
    name: 'light brown recliner',
    description:
      "【SUPERIOR COMFORT】Covered by the breathable wearproof cotton & linen fabric, no pilling, and padded with the soft recycled cotton, excellent resilience, this floor chair is comfortable and safe. The pillow are providing comfortable rest for you.\n【ERGONOMIC DESIGN】This fully adjustable sofa chair can be adjusted at 6 different angles, which is the most comfortable angle for your body spine line. It also can be laid flat on the ground as a single bed or folded into a small piece to store it in your closet, it's easy to storage.",
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 10,
    ratings: 4,
    price: 90,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632822908/ecommerceAPI/2021-09-28T09-55-07.597ZRecliner-PNG-Transparent.png.png',
    sales: 29,
    color: 'brown',
    platform: 'MarketPlace',
  },
  {
    id: '6152e64a8c089ec921d527fe',
    name: 'brown recliner',
    description:
      "【SUPERIOR COMFORT】Covered by the breathable wearproof cotton & linen fabric, no pilling, and padded with the soft recycled cotton, excellent resilience, this floor chair is comfortable and safe. The pillow are providing comfortable rest for you.\n【ERGONOMIC DESIGN】This fully adjustable sofa chair can be adjusted at 6 different angles, which is the most comfortable angle for your body spine line. It also can be laid flat on the ground as a single bed or folded into a small piece to store it in your closet, it's easy to storage.",
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 30,
    ratings: 2,
    price: 190,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632822857/ecommerceAPI/2021-09-28T09-54-16.049ZRecliner.png.png',
    sales: 21,
    color: 'brown',
    platform: 'MarketPlace',
  },
  {
    id: '6152e5f58c089ec921d527fc',
    name: 'blue couch',
    description:
      "【SUPERIOR COMFORT】Covered by the breathable wearproof cotton & linen fabric, no pilling, and padded with the soft recycled cotton, excellent resilience, this floor chair is comfortable and safe. The pillow are providing comfortable rest for you.\n【ERGONOMIC DESIGN】This fully adjustable sofa chair can be adjusted at 6 different angles, which is the most comfortable angle for your body spine line. It also can be laid flat on the ground as a single bed or folded into a small piece to store it in your closet, it's easy to storage.\n【EASY TO STORAGE & CARRYING】It can be folded into a small piece to store in your closet easily when you don't need it. Also, you can easily carry it around wherever you want, and set it up on any surfaces that is dry & clean.",
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 23,
    ratings: 4,
    price: 261,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632822773/ecommerceAPI/2021-09-28T09-52-52.957ZFuton-PNG-Transparent.png.png',
    sales: 109,
    color: 'blue',
    platform: 'MarketPlace',
  },
  {
    id: '6152e5928c089ec921d527fa',
    name: 'yellow futon',
    description:
      '100% Easy to Care for Polyester\nFrom Chair to Chaise and Lounge; there 4 different and comfortable positions to choose from\nConverting is a breeze; additional legs are hidden inside, simply unzip and fold out for lounging\nIdeal for apartments and small spaces but functional for any room\nExtra soft with high density foam and easy to care for 100% polyester fabric upholstery',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 11,
    ratings: 4,
    price: 120,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632822674/ecommerceAPI/2021-09-28T09-51-12.637ZFuton-PNG-HD.png.png',
    sales: 57,
    color: 'yellow',
    platform: 'MarketPlace',
  },
  {
    id: '6152e4e98c089ec921d527f8',
    name: 'sleeper sofa',
    description:
      'This Fabric Fabric Sofa  is the perfect combination of class, functionality and elegance American Fabrics, Mart)\nThe oversized cushions and the deep seater give extra comfort to your back while sitting.\nWhether in your home or office, this seater give you class.\nIt consist of 3 seater, 2 seater and a single seater\nIt comes throw pillows which gives you a smooth experience when you are sitting.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 34,
    ratings: 3,
    price: 249,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632822504/ecommerceAPI/2021-09-28T09-48-23.859ZSleeper-Sofa-Background-PNG.png.png',
    sales: 111,
    color: 'brown',
    platform: 'MarketPlace',
  },
  {
    id: '6152e4328c089ec921d527f6',
    name: 'light blue sofa',
    description:
      'This Sofa is the perfect combination of functionality and elegance.\nMade from the finest American Fabrics\nThe oversized cushions and the deep seater give extra comfort to your back while sitting.\nWhether in your home or office, this sofa adds beauty and class to your environment.\nIt consist of  3 throw pillows which gives you a smooth experience when you are sitting and laying.\nDimension Length 60 inches", Breath 32 inches", Height 36 inches.\n Available in different color shape and sizes',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 23,
    ratings: 4,
    price: 320,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632822321/ecommerceAPI/2021-09-28T09-45-20.377ZFive-Seater-Sofa.png.png',
    sales: 240,
    color: 'blue',
    platform: 'MarketPlace',
  },
  {
    id: '6152e3b18c089ec921d527f4',
    name: 'classic sofa',
    description:
      'The is a new sofa that is guaranteed to become a classic. Its aesthetic contours lend it a timeless and elegant appearance.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 33,
    ratings: 4,
    price: 380,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632822192/ecommerceAPI/2021-09-28T09-43-08.941Zcouch9.png.png',
    sales: 190,
    color: 'green',
    platform: 'MarketPlace',
  },
  {
    id: '6152e3548c089ec921d527f2',
    name: 'accent sofa',
    description:
      'This Sofa is the perfect combination of functionality and elegance.\n\nMade from the finest American Fabrics\n\nThe oversized cushions and the deep seater give extra comfort to your back while sitting.\n\nWhether in your home or office, this sofa adds beauty and class to your environment.\n\nIt consist of  3 throw pillows which gives you a smooth experience when you are sitting and laying.\n\nDimension Length 60 inches", Breath 32 inches", Height 36 inches.\n\n Available in different color shape and sizes',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 11,
    ratings: 4,
    price: 390,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632822099/ecommerceAPI/2021-09-28T09-41-34.516ZFive-Seater-Sofa2.png.png',
    sales: 49,
    color: 'gray',
    platform: 'MarketPlace',
  },
  {
    id: '6152e2e28c089ec921d527f0',
    name: 'modular sofa',
    description:
      'The Sofa brings a modern perspective to the typology, allowing for its user to customize the sofa for their needs. The Modular Sofa comes in four different modules and can be upholstered with Kvadrat textiles. The sofa is designed with long, elegant lines and with beautiful details as the stitching that creates a modern exclusive look. Choose between 90° corner or round comer for a more relaxed look. The Modular Sofa can be used for a deep, modern comfort in any home, workplace, lounge area or hospitality setting.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 20,
    ratings: 4,
    price: 300,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632821985/ecommerceAPI/2021-09-28T09-39-42.792Zcouch8.png.png',
    sales: 22,
    color: 'grey',
    platform: 'MarketPlace',
  },
  {
    id: '6152e2608c089ec921d527ee',
    name: 'dark sofa',
    description:
      'Made from the finest American Fabrics with a top notch finishing, this sofa set  is a Unique Modern Assorted Furniture as a signature blend of quality, value and neo city style for an exquisite Living Room.\nThe oversized cushions and the deep seater give extra comfort to your back while sitting.\nWhether in your home or office, this seater give you class.\nDimension for sofa , Lenght 70 Inches, Breath 32 inches Height 34\nUpholstrey material- Hardwood.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 12,
    ratings: 5,
    price: 200,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632821855/ecommerceAPI/2021-09-28T09-37-35.206ZBlack-Sofa-PNG-File.png.png',
    sales: 36,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '6152e23a8c089ec921d527ec',
    name: 'black sofa',
    description:
      'Made from the finest American Fabrics with a top notch finishing, this sofa set  is a Unique Modern Assorted Furniture as a signature blend of quality, value and neo city style for an exquisite Living Room.\nThe oversized cushions and the deep seater give extra comfort to your back while sitting.\nWhether in your home or office, this seater give you class.\nDimension for sofa , Lenght 70 Inches, Breath 32 inches Height 34\nUpholstrey material- Hardwood.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 35,
    ratings: 4,
    price: 250,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632821816/ecommerceAPI/2021-09-28T09-36-56.161ZBlack-Sofa-PNG-Clipart.png.png',
    sales: 68,
    color: 'black',
    platform: 'MarketPlace',
  },
  {
    id: '61504ce5fe9090eb9ac43424',
    name: 'yellow sofa',
    description:
      'This Fabric Sofa is a Unique Modern Assorted Furniture as a signature blend of quality, value and neo city style for an exquisite Living Room and interiors.\n\nCool Multi-pillows give this transitional set a trendy, designer look & semi-attached back pillows are hassle free! High quality durable Fabric, Classy look, Great feel, great value -all at an unbeatable price!\n\nAvailable in different colors, shape and sizes.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 23,
    ratings: 5,
    price: 90,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632652516/ecommerceAPI/2021-09-26T10-35-15.159ZYellow-Sofa-Transparent-PNG.png.png',
    sales: 45,
    color: 'yellow',
    platform: 'MarketPlace',
  },
  {
    id: '615049b2fe9090eb9ac43417',
    name: 'green couch',
    description:
      'This is a really beautiful couch that would complement the designs of your living room whilst not being that expensive.',
    category: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    stock: 30,
    ratings: 2,
    price: 158,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632651696/ecommerceAPI/2021-09-26T10-21-32.198Zcouch9.png.png',
    sales: 99,
    color: 'green',
    platform: 'MarketPlace',
  },
];

const initialState = {
  products: temp,
  status: STATUS.IDLE,
  message: '',
};

const marketPlaceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case marketPlaceAction.MARKETPLACE_PRODUCTS_STATUS:
      return { ...state, status: action.payload.status };
    case marketPlaceAction.MARKETPLACE_PRODUCTS_FAILED:
      return { ...state, message: action.payload.message };
    case marketPlaceAction.FETCH_MARKETPLACE_PRODUCTS:
      return { ...state, products: action.payload.products };

    default:
      return state;
  }
};

export default marketPlaceReducer;
