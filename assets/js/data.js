// ===============================
// CITY DATA
// ===============================

const cityExplorerData = {

  // ================= RAJKOT =================
  rajkot: {
  id: "rajkot",
  name: "Rajkot",
  heroImage: "assets/images/cities/Rajkot.jpg",
  description: "Explore parks, temples, cafes, adventure spots and museums in Rajkot.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Race Course Ground", type:"Park", image:"assets/images/Rajkot/Park/RC.webp", mapUrl:"https://maps.google.com/?q=Race+Course+Ground+Rajkot" },
    { id:"p2", name:"Aji Dam Garden", type:"Park", image:"assets/images/Rajkot/Park/AD.jpg", mapUrl:"https://maps.google.com/?q=Aji+Dam+Garden+Rajkot" },
    { id:"p3", name:"Pradhyuman Zoological Park", type:"Park", image:"assets/images/Rajkot/Park/PZP.jpg", mapUrl:"https://maps.google.com/?q=Pradhyuman+Zoological+Park+Rajkot" },
    { id:"p4", name:"Kaba Gandhi No Delo Garden Area", type:"Park", image:"assets/images/Rajkot/Park/KB.webp", mapUrl:"https://maps.google.com/?q=Kaba+Gandhi+No+Delo+Rajkot" },
    { id:"p5", name:"Naulakha Palace Garden (Gondal)", type:"Park", image:"assets/images/Rajkot/Park/NP.jpg", mapUrl:"https://maps.google.com/?q=Naulakha+Palace+Gondal" },
    { id:"p6", name:"Veri Lake (Jetpur)", type:"Park", image:"assets/images/Rajkot/Park/VL.jpg", mapUrl:"https://maps.google.com/?q=Veri+Lake+Jetpur" },
    { id:"p7", name:"Lal Pari Lake", type:"Park", image:"assets/images/Rajkot/Park/LL.jpg", mapUrl:"https://maps.google.com/?q=Lal+Pari+Lake+Rajkot" },
    { id:"p8", name:"Randarda Lake", type:"Park", image:"assets/images/Rajkot/Park/RL.jpg", mapUrl:"https://maps.google.com/?q=Randarda+Lake+Rajkot" },
    { id:"p9", name:"Nyara Village", type:"Park", image:"assets/images/Rajkot/Park/NV.jpg", mapUrl:"https://maps.google.com/?q=Nyara+Village+Rajkot" },

    // ================= TEMPLES =================
    { id:"t1", name:"Swaminarayan Temple", type:"Temple", image:"assets/images/Rajkot/Temple/BAPS.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Rajkot" },
    { id:"t2", name:"ISKCON Temple", type:"Temple", image:"assets/images/Rajkot/Temple/iskcon.jpg", mapUrl:"https://maps.google.com/?q=ISKCON+Temple+Rajkot" },
    { id:"t4", name:"Bhuvaneshwari Temple (Gondal)", type:"Temple", image:"assets/images/Rajkot/Temple/SBP.jpg", mapUrl:"https://maps.google.com/?q=Bhuvaneshwari+Temple+Gondal" },
    { id:"t5", name:"Swaminarayan Mandir (Jetpur)", type:"Temple", image:"assets/images/Rajkot/Temple/SM.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Mandir+Jetpur" },
    { id:"t6", name:"Local Mahadev Temples (Jetpur)", type:"Temple", image:"assets/images/Rajkot/Temple/MM.webp", mapUrl:"https://maps.google.com/?q=Mahadev+Temple+Jetpur" },
    { id:"t7", name:"Shri Ramakrishna Ashrama", type:"Temple", image:"assets/images/Rajkot/Temple/RA.jpg", mapUrl:"https://maps.google.com/?q=Ramakrishna+Ashrama+Rajkot" },
    { id:"t8", name:"Panchnath Mahadev Temple", type:"Temple", image:"assets/images/Rajkot/Temple/PM.jpg", mapUrl:"https://maps.google.com/?q=Panchnath+Mahadev+Temple+Rajkot" },

    // ================= CAFES =================
    { id:"c1", name:"The Grand Thakar", type:"Cafe", image:"assets/images/Rajkot/Cafe/TGT.jpg", mapUrl:"https://maps.google.com/?q=The+Grand+Thakar+Rajkot" },
    { id:"c2", name:"Temptation Restaurant", type:"Cafe", image:"assets/images/Rajkot/Cafe/TT.jpg", mapUrl:"https://maps.google.com/?q=Temptation+Restaurant+Rajkot" },
    { id:"c3", name:"Cafe Coffee Day", type:"Cafe", image:"assets/images/Rajkot/Cafe/CCD.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Rajkot" },
    { id:"c4", name:"The Belgian Waffle Co.", type:"Cafe", image:"assets/images/Rajkot/Cafe/TBW.jpg", mapUrl:"https://maps.google.com/?q=Belgian+Waffle+Co+Rajkot" },
    { id:"c5", name:"Vintage Cafe (Gondal)", type:"Cafe", image:"assets/images/Rajkot/Cafe/CV.jpg", mapUrl:"https://maps.google.com/?q=Vintage+Cafe+Gondal" },

    // ================= ADVENTURE =================
    { id:"a3", name:"Aji Dam Open Area", type:"Adventure", image:"assets/images/Rajkot/Adventure/AD.jpg", mapUrl:"https://maps.google.com/?q=Aji+Dam+Rajkot" },
    { id:"a4", name:"Naulakha Palace Grounds (Gondal)", type:"Adventure", image:"assets/images/Rajkot/Adventure/NP.jpg", mapUrl:"https://maps.google.com/?q=Naulakha+Palace+Gondal" },
    { id:"a5", name:"Jetpur Riverbank Areas", type:"Adventure", image:"assets/images/Rajkot/Adventure/BM.jpg", mapUrl:"https://maps.google.com/?q=Jetpur+Riverbank+Gujarat" },
    { id:"a6", name:"Rampara Wildlife Sanctuary (Wankaner)", type:"Adventure", image:"assets/images/Rajkot/Adventure/RW.jpg", mapUrl:"https://maps.google.com/?q=Rampara+Wildlife+Sanctuary+Wankaner" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Kaba Gandhi No Delo", type:"Museum", image:"assets/images/Rajkot/Museum/KB.webp", mapUrl:"https://maps.google.com/?q=Kaba+Gandhi+No+Delo+Rajkot" },
    { id:"m2", name:"Watson Museum", type:"Museum", image:"assets/images/Rajkot/Museum/WM.png", mapUrl:"https://maps.google.com/?q=Watson+Museum+Rajkot" },
    { id:"m3", name:"Rotary Dolls Museum", type:"Museum", image:"assets/images/Rajkot/Museum/RDM.webp", mapUrl:"https://maps.google.com/?q=Rotary+Dolls+Museum+Rajkot" },
    { id:"m4", name:"Naulakha Palace (Gondal)", type:"Museum", image:"assets/images/Rajkot/Museum/NP.jpg", mapUrl:"https://maps.google.com/?q=Naulakha+Palace+Gondal" },
    { id:"m5", name:"Orchard Palace (Gondal)", type:"Museum", image:"assets/images/Rajkot/Museum/OP.jpg", mapUrl:"https://maps.google.com/?q=Orchard+Palace+Gondal" },
    { id:"m6", name:"Khambhalida Caves (Gondal)", type:"Museum", image:"assets/images/Rajkot/Museum/KC.jpg", mapUrl:"https://maps.google.com/?q=Khambhalida+Caves+Gondal+Rajkot" },
    { id:"m7", name:"Ranjit Vilas Palace (Wankaner)", type:"Museum", image:"assets/images/Rajkot/Museum/RVP.jpg", mapUrl:"https://maps.google.com/?q=Ranjit+Vilas+Palace+Wankaner" },
    { id:"m8", name:"Mahatma Gandhi Museum (Alfred High School)", type:"Museum", image:"assets/images/Rajkot/Museum/MGM.jpg", mapUrl:"https://maps.google.com/?q=Mahatma+Gandhi+Museum+Rajkot" },
    { id:"m9", name:"Rashtriya Shala", type:"Museum", image:"assets/images/Rajkot/Museum/Rs.jpg", mapUrl:"https://maps.google.com/?q=Rashtriya+Shala+Rajkot" },
  ]
},

Mahisagar: {
  id: "Mahisagar",
  name: "Mahisagar",
  heroImage: "assets/images/cities/mahisagar.jpg",
  description: "Explore parks, temples, cafes, waterfalls, adventure spots and museums in Mahisagar.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Riverfront Garden, Lunawada", type:"Park", image:"assets/images/Mahisagar/Park/PL.jpg", mapUrl:"https://maps.google.com/?q=Riverfront+Garden+Lunawada+Mahisagar" },
    { id:"p2", name:"Public Garden, Lunawada", type:"Park", image:"assets/images/Mahisagar/Park/PL1.jpg", mapUrl:"https://maps.google.com/?q=Public+Garden+Lunawada+Mahisagar" },
    { id:"p3", name:"Town Garden, Balasinor", type:"Park", image:"assets/images/Mahisagar/Park/GP.webp", mapUrl:"https://maps.google.com/?q=Town+Garden+Balasinor+Mahisagar" },
    { id:"p4", name:"Children's Park, Balasinor", type:"Park", image:"assets/images/Mahisagar/Park/CP.jpg", mapUrl:"https://maps.google.com/?q=Childrens+Park+Balasinor+Mahisagar" },
    { id:"p5", name:"Panchayat Garden Area, Lunawada outskirts", type:"Park", image:"assets/images/Mahisagar/Park/PG.webp", mapUrl:"https://maps.google.com/?q=Panchayat+Garden+Lunawada+outskirts" },
    { id:"p6", name:"Old Lake Side Walking Zone, Lunawada", type:"Park", image:"assets/images/Mahisagar/Park/JG.webp", mapUrl:"https://maps.google.com/?q=Lake+Side+Walking+Zone+Lunawada" },
    { id:"p7", name:"Government School Green Ground Area, Balasinor", type:"Park", image:"assets/images/Mahisagar/Park/GS.jpg", mapUrl:"https://maps.google.com/?q=Government+School+Ground+Balasinor" },
    { id:"p8", name:"Village Garden Space, Virpur Road side", type:"Park", image:"assets/images/Mahisagar/Park/VG.jpg", mapUrl:"https://maps.google.com/?q=Village+Garden+Virpur+Road+Mahisagar" },
    { id:"p9", name:"Small Community Park, Lunawada residential sectors", type:"Park", image:"assets/images/mahisagar/Park/SC.jpg", mapUrl:"https://maps.google.com/?q=Community+Park+Lunawada+residential" },
    { id:"p10", name:"Kadana Dam Reservoir Viewpoint", type:"Park", image:"assets/images/Mahisagar/Park/KD.jpg", mapUrl:"https://maps.google.com/?q=Kadana+Dam+Mahisagar+Gujarat" },
    { id:"p11", name:"Wanakbori Dam Riverside Area", type:"Park", image:"assets/images/Mahisagar/Park/WD.jpg", mapUrl:"https://maps.google.com/?q=Wanakbori+Dam+Mahisagar+Gujarat" },

    // ================= TEMPLES =================
    { id:"t1", name:"Hanuman Temple, Lunawada", type:"Temple", image:"assets/images/Mahisagar/Temple/HT.jpg", mapUrl:"https://maps.google.com/?q=Hanuman+Temple+Lunawada+Mahisagar" },
    { id:"t2", name:"Mahakali Temple, Lunawada", type:"Temple", image:"assets/images/Mahisagar/Temple/MT.jpg", mapUrl:"https://maps.google.com/?q=Mahakali+Temple+Lunawada+Mahisagar" },
    { id:"t3", name:"Swaminarayan Temple, Balasinor", type:"Temple", image:"assets/images/Mahisagar/Temple/SS.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Balasinor" },
    { id:"t4", name:"Shiva Temple, Balasinor", type:"Temple", image:"assets/images/Mahisagar/Temple/GT.jpg", mapUrl:"https://maps.google.com/?q=Shiva+Temple+Balasinor+Mahisagar" },
    { id:"t5", name:"Ambaji Mata Temple, Lunawada", type:"Temple", image:"assets/images/Mahisagar/Temple/AT.jpg", mapUrl:"https://maps.google.com/?q=Ambaji+Mata+Temple+Lunawada" },
    { id:"t6", name:"Baliyadev Temple, Lunawada rural belt", type:"Temple", image:"assets/images/Mahisagar/Temple/BT.jpeg", mapUrl:"https://maps.google.com/?q=Baliyadev+Temple+Lunawada+rural" },
    { id:"t7", name:"Khodiyar Mata Temple, Balasinor outskirts", type:"Temple", image:"assets/images/Mahisagar/Temple/KM.jpg", mapUrl:"https://maps.google.com/?q=Khodiyar+Mata+Temple+Balasinor" },
    { id:"t8", name:"Hanumanji Temple, Virpur Road side villages", type:"Temple", image:"assets/images/Mahisagar/Temple/GH.webp", mapUrl:"https://maps.google.com/?q=Hanumanji+Temple+Virpur+Road+Mahisagar" },
    { id:"t9", name:"Meldi Mata Temple, Lunawada village belt", type:"Temple", image:"assets/images/Mahisagar/Temple/MM.jpg", mapUrl:"https://maps.google.com/?q=Meldi+Mata+Temple+Lunawada+village" },
    { id:"t10", name:"Mahadev Temple, forest edge areas near Balasinor (Bhim Bhameda Mahadev)", type:"Temple", image:"assets/images/Mahisagar/Temple/BB.webp", mapUrl:"https://maps.google.com/?q=Mahadev+Temple+forest+Balasinor" },
    { id:"t11", name:"Chamunda Mata Temple, rural Balasinor region", type:"Temple", image:"assets/images/Mahisagar/Temple/SCM.jpg", mapUrl:"https://maps.google.com/?q=Chamunda+Mata+Temple+Balasinor+rural" },
    { id:"t12", name:"Galtheshwar Shiva Temple, Sarnal village", type:"Temple", image:"assets/images/Mahisagar/Temple/GT1.jpg", mapUrl:"https://maps.google.com/?q=Galtheshwar+Shiva+Temple+Sarnal+Balasinor" },
    { id:"t13", name:"Kaleshwari Mata Temple, Lavana (Khanpur)", type:"Temple", image:"assets/images/Mahisagar/Temple/KLM.jpg", mapUrl:"https://maps.google.com/?q=Kaleshwari+Temple+Lavana+Khanpur+Mahisagar" },
    { id:"t14", name:"Timba Tua Hot Springs Temple, Timba village", type:"Temple", image:"assets/images/Mahisagar/Temple/TT.jpg", mapUrl:"https://maps.google.com/?q=Timba+Tua+Hot+Springs+Balasinor+Gujarat" },

    // ================= CAFES =================
    { id:"c1", name:"Cafe Coffee Day, Lunawada", type:"Cafe", image:"assets/images/Mahisagar/Cafe/CCD.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Lunawada+Mahisagar" },
    { id:"c2", name:"Local Cafe Point, Lunawada", type:"Cafe", image:"assets/images/Mahisagar/Cafe/LCP.webp", mapUrl:"https://maps.google.com/?q=Local+Cafe+Point+Lunawada" },
    { id:"c3", name:"Tea Post, Lunawada", type:"Cafe", image:"assets/images/Mahisagar/Cafe/TP.jpg", mapUrl:"https://maps.google.com/?q=Tea+Post+Lunawada+Mahisagar" },
    { id:"c4", name:"Small Cafes near Bus Stand, Balasinor", type:"Cafe", image:"assets/images/Mahisagar/Cafe/CS.jpg", mapUrl:"https://maps.google.com/?q=Cafes+Bus+Stand+Balasinor" },
    { id:"c5", name:"Highway Tea Stalls, Lunawada–Godhra road", type:"Cafe", image:"assets/images/Mahisagar/Cafe/TS.webp", mapUrl:"https://maps.google.com/?q=Highway+Tea+Stalls+Lunawada+Godhra+road" },
    { id:"c6", name:"Small Family Cafes near Bus Stand, Lunawada", type:"Cafe", image:"assets/images/Mahisagar/Cafe/SFC.webp", mapUrl:"https://maps.google.com/?q=Family+Cafes+Bus+Stand+Lunawada" },
    { id:"c7", name:"Local Tea Corners, Balasinor market area", type:"Cafe", image:"assets/images/Mahisagar/Cafe/TS1.jpg", mapUrl:"https://maps.google.com/?q=Tea+Corners+Balasinor+market" },
    { id:"c8", name:"Village-side snack points, Lunawada outskirts", type:"Cafe", image:"assets/images/Mahisagar/Cafe/SP.jpg", mapUrl:"https://maps.google.com/?q=Snack+Points+Lunawada+outskirts" },
    { id:"c9", name:"Roadside food stalls near fossil park route, Balasinor", type:"Cafe", image:"assets/images/Mahisagar/Cafe/FS.webp", mapUrl:"https://maps.google.com/?q=Food+Stalls+Fossil+Park+Balasinor" },
    { id:"c10", name:"Small Cafes near school/college zones, Lunawada", type:"Cafe", image:"assets/images/Mahisagar/Cafe/C1.webp", mapUrl:"https://maps.google.com/?q=Cafes+school+college+zone+Lunawada" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Girmal Waterfall (Mahisagar border region, Lunawada side)", type:"Waterfall", image:"assets/images/Mahisagar/Waterfall/GW.jpg", mapUrl:"https://maps.google.com/?q=Girmal+Waterfall+Lunawada+Mahisagar" },
    { id:"w2", name:"Local seasonal stream falls near forest zones, Lunawada", type:"Waterfall", image:"assets/images/Mahisagar/Waterfall/KW.jpg", mapUrl:"https://maps.google.com/?q=Seasonal+Stream+Falls+forest+Lunawada" },
    { id:"w3", name:"Small seasonal cascade zones, Ratanmahal forest belt", type:"Waterfall", image:"assets/images/Mahisagar/Waterfall/SS.jpg", mapUrl:"https://maps.google.com/?q=Ratanmahal+forest+cascade+Mahisagar" },
    { id:"w4", name:"Rain-fed stream falls in hilly forest patches, Balasinor side", type:"Waterfall", image:"assets/images/Mahisagar/Waterfall/WS.jpg", mapUrl:"https://maps.google.com/?q=Rain+fed+stream+falls+Balasinor+forest" },
    { id:"w5", name:"Forest valley runoff falls (monsoon only), Mahisagar interior", type:"Waterfall", image:"assets/images/Mahisagar/Waterfall/WF.webp", mapUrl:"https://maps.google.com/?q=Forest+valley+runoff+falls+Mahisagar" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Ratanmahal Sloth Bear Sanctuary trekking zone, Lunawada", type:"Adventure", image:"assets/images/Mahisagar/Adventure/RS.jpg", mapUrl:"https://maps.google.com/?q=Ratanmahal+Sloth+Bear+Sanctuary+Lunawada" },
    { id:"a2", name:"Riverfront walking & boating area, Lunawada", type:"Adventure", image:"assets/images/Mahisagar/Adventure/RF.jpg", mapUrl:"https://maps.google.com/?q=Riverfront+boating+walking+Lunawada" },
    { id:"a3", name:"Nature trails near forest belt, Balasinor", type:"Adventure", image:"assets/images/Mahisagar/Adventure/TP.jpg", mapUrl:"https://maps.google.com/?q=Nature+trails+forest+belt+Balasinor" },
    { id:"a4", name:"Fossil Park exploration area, Balasinor", type:"Adventure", image:"assets/images/Mahisagar/Adventure/FP.jpg", mapUrl:"https://maps.google.com/?q=Fossil+Park+Balasinor+Mahisagar" },
    { id:"a5", name:"Deep forest trekking trails, Ratanmahal Sanctuary fringe", type:"Adventure", image:"assets/images/Mahisagar/Adventure/RW.jpg", mapUrl:"https://maps.google.com/?q=Ratanmahal+Sanctuary+trekking+fringe" },
    { id:"a6", name:"Rural cycling routes, Lunawada–Virpur stretch", type:"Adventure", image:"assets/images/Mahisagar/Adventure/RC.jpg", mapUrl:"https://maps.google.com/?q=Cycling+routes+Lunawada+Virpur+stretch" },
    { id:"a7", name:"Fossil excavation walking zones, Balasinor", type:"Adventure", image:"assets/images/Mahisagar/Adventure/FE.webp", mapUrl:"https://maps.google.com/?q=Fossil+excavation+walking+zones+Balasinor" },
    { id:"a8", name:"Hill forest walking trails, Mahisagar interior belt", type:"Adventure", image:"assets/images/Mahisagar/Adventure/HF.jpg", mapUrl:"https://maps.google.com/?q=Hill+forest+walking+trails+Mahisagar" },
    { id:"a9", name:"Village safari-style exploration routes, Balasinor outskirts", type:"Adventure", image:"assets/images/mahisagar/adventure/VSS.jpeg", mapUrl:"https://maps.google.com/?q=Village+safari+exploration+Balasinor+outskirts" },
    { id:"a10", name:"Seasonal riverbed walking areas, Lunawada", type:"Adventure", image:"assets/images/mahisagar/adventure/riverbed-walking-lunawada.jpg", mapUrl:"https://maps.google.com/?q=Seasonal+riverbed+walking+Lunawada" },
    { id:"a11", name:"Laliya Luhar Qila Trek, Dhamod (near Balasinor)", type:"Adventure", image:"assets/images/mahisagar/adventure/laliya-luhar-qila-trek.jpg", mapUrl:"https://maps.google.com/?q=Laliya+Luhar+Qila+Dhamod+Balasinor" },
    { id:"a12", name:"Kaleshwari-Ni-Nal Forest Trail, Lavana (Khanpur)", type:"Adventure", image:"assets/images/mahisagar/adventure/kaleshwari-nal-trail-lavana.jpg", mapUrl:"https://maps.google.com/?q=Kaleshwari+Ni+Nal+Lavana+Khanpur+Mahisagar" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Balasinor Dinosaur Fossil Park Museum", type:"Museum", image:"assets/images/Mahisagar/Museum/dinosaur-fossil-park-balasinor.jpg", mapUrl:"https://maps.google.com/?q=Balasinor+Dinosaur+Fossil+Park+Museum" },
    { id:"m2", name:"Fossil & Heritage Display Center, Balasinor", type:"Museum", image:"assets/images/Mahisagar/Museum/fossil-heritage-display-balasinor.jpg", mapUrl:"https://maps.google.com/?q=Fossil+Heritage+Display+Center+Balasinor" },
    { id:"m3", name:"Small Geological Display Corner, Balasinor fossil region", type:"Museum", image:"assets/images/Mahisagar/Museum/geological-display-balasinor.jpg", mapUrl:"https://maps.google.com/?q=Geological+Display+Corner+Balasinor" },
    { id:"m4", name:"Local Heritage Story Room, Balasinor municipality area", type:"Museum", image:"assets/images/Mahisagar/Museum/heritage-story-room-balasinor.jpg", mapUrl:"https://maps.google.com/?q=Heritage+Story+Room+Balasinor+municipality" },
    { id:"m5", name:"School-based fossil learning exhibit corner, Balasinor", type:"Museum", image:"assets/images/Mahisagar/Museum/fossil-learning-exhibit-balasinor.jpg", mapUrl:"https://maps.google.com/?q=Fossil+learning+exhibit+school+Balasinor" },
    { id:"m6", name:"Kaleshwari Group of Monuments, Lavana (Khanpur)", type:"Museum", image:"assets/images/Mahisagar/Museum/kaleshwari-monuments-lavana.jpg", mapUrl:"https://maps.google.com/?q=Kaleshwari+Group+Monuments+Lavana+Khanpur" },
    { id:"m7", name:"Garden Palace Heritage Homestay, Balasinor", type:"Museum", image:"assets/images/Mahisagar/Museum/garden-palace-balasinor.jpg", mapUrl:"https://maps.google.com/?q=Garden+Palace+Heritage+Balasinor" },
    { id:"m8", name:"Lunawada Palace (Princely State Heritage)", type:"Museum", image:"assets/images/Mahisagar/Museum/lunawada-palace.jpg", mapUrl:"https://maps.google.com/?q=Lunawada+Palace+Mahisagar+Gujarat" },
    { id:"m9", name:"Santrampur Palace (Princely State Heritage)", type:"Museum", image:"assets/images/Mahisagar/Museum/santrampur-palace.jpg", mapUrl:"https://maps.google.com/?q=Santrampur+Palace+Mahisagar+Gujarat" },

  ]
},

Banaskantha: {
  id: "Banaskantha",
  name: "Banaskantha",
  heroImage: "assets/images/cities/banaskantha.jpg",
  description: "Explore parks, temples, cafes, hill stations, adventure spots and museums in Banaskantha.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Kirti Stambh Garden – Palanpur", type:"Park", image:"assets/images/banaskantha/parks/kirti-stambh-garden-palanpur.jpg", mapUrl:"https://maps.google.com/?q=Kirti+Stambh+Garden+Palanpur+Banaskantha" },
    { id:"p2", name:"Banas River Riverside – Deesa", type:"Park", image:"assets/images/banaskantha/parks/banas-river-riverside-deesa.jpg", mapUrl:"https://maps.google.com/?q=Banas+River+Riverside+Deesa+Banaskantha" },
    { id:"p3", name:"Sanskar Garden – Palanpur", type:"Park", image:"assets/images/banaskantha/parks/sanskar-garden-palanpur.jpg", mapUrl:"https://maps.google.com/?q=Sanskar+Garden+Palanpur+Banaskantha" },

    // ================= TEMPLES =================
    { id:"t1", name:"Pallaviya Parshwanath Jain Temple – Palanpur", type:"Temple", image:"assets/images/banaskantha/temples/pallaviya-parshwanath-jain-temple-palanpur.jpg", mapUrl:"https://maps.google.com/?q=Pallaviya+Parshwanath+Jain+Temple+Palanpur" },
    { id:"t2", name:"Balaram Mahadev Temple – Palanpur", type:"Temple", image:"assets/images/banaskantha/temples/balaram-mahadev-temple-palanpur.jpg", mapUrl:"https://maps.google.com/?q=Balaram+Mahadev+Temple+Palanpur+Banaskantha" },
    { id:"t3", name:"Ambaji Mata Temple (Local Shrine) – Deesa", type:"Temple", image:"assets/images/banaskantha/temples/ambaji-mata-temple-deesa.jpg", mapUrl:"https://maps.google.com/?q=Ambaji+Mata+Temple+Deesa+Banaskantha" },
    { id:"t4", name:"Neelkanth Mahadev Temple – Deesa", type:"Temple", image:"assets/images/banaskantha/temples/neelkanth-mahadev-temple-deesa.jpg", mapUrl:"https://maps.google.com/?q=Neelkanth+Mahadev+Temple+Deesa+Banaskantha" },

    // ================= CAFES =================
    { id:"c1", name:"The Chocolate Room – Palanpur", type:"Cafe", image:"assets/images/banaskantha/cafes/chocolate-room-palanpur.jpg", mapUrl:"https://maps.google.com/?q=The+Chocolate+Room+Palanpur+Banaskantha" },
    { id:"c2", name:"Cafe Coffee Day – Palanpur", type:"Cafe", image:"assets/images/banaskantha/cafes/cafe-coffee-day-palanpur.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Palanpur+Banaskantha" },
    { id:"c3", name:"Local Street Cafes – Deesa", type:"Cafe", image:"assets/images/banaskantha/cafes/local-street-cafes-deesa.jpg", mapUrl:"https://maps.google.com/?q=Local+Street+Cafes+Deesa+Banaskantha" },

    // ================= HILL STATION =================
    { id:"h1", name:"Balaram Hills Area – Palanpur", type:"Hill Station", image:"assets/images/banaskantha/hillstation/balaram-hills-palanpur.jpg", mapUrl:"https://maps.google.com/?q=Balaram+Hills+Palanpur+Banaskantha" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Balaram Forest Trails – Palanpur", type:"Adventure", image:"assets/images/banaskantha/adventure/balaram-forest-trails-palanpur.jpg", mapUrl:"https://maps.google.com/?q=Balaram+Forest+Trails+Palanpur+Banaskantha" },
    { id:"a2", name:"Banas River Open Grounds – Deesa", type:"Adventure", image:"assets/images/banaskantha/adventure/banas-river-open-grounds-deesa.jpg", mapUrl:"https://maps.google.com/?q=Banas+River+Open+Grounds+Deesa+Banaskantha" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Palanpur Nawab Heritage Structures – Palanpur", type:"Museum", image:"assets/images/banaskantha/museums/palanpur-nawab-heritage-palanpur.jpg", mapUrl:"https://maps.google.com/?q=Palanpur+Nawab+Heritage+Structures+Palanpur" }

  ]
},

kheda: {
  id: "kheda",
  name: "Kheda",
  heroImage: "assets/images/cities/Kheda.webp",
  description: "Explore parks, temples, cafes, and adventure spots in Nadiad and nearby Kheda region.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Santram Garden (Nadiad)", type:"Park", image:"assets/images/kheda/parks/santram-garden-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Santram+Garden+Nadiad+Kheda" },
    { id:"p2", name:"Children's Park (Nadiad)", type:"Park", image:"assets/images/kheda/parks/childrens-park-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Childrens+Park+Nadiad+Kheda" },
    { id:"p3", name:"Public Garden (Kheda)", type:"Park", image:"assets/images/kheda/parks/public-garden-kheda.jpg", mapUrl:"https://maps.google.com/?q=Public+Garden+Kheda+Gujarat" },
    { id:"p4", name:"Lake Garden (Kheda)", type:"Park", image:"assets/images/kheda/parks/lake-garden-kheda.jpg", mapUrl:"https://maps.google.com/?q=Lake+Garden+Kheda+Gujarat" },
    { id:"p5", name:"College Road Green Belt Area (Nadiad)", type:"Park", image:"assets/images/kheda/parks/college-road-greenbelt-nadiad.jpg", mapUrl:"https://maps.google.com/?q=College+Road+Green+Belt+Nadiad" },
    { id:"p6", name:"Vaso Village Garden Area (Kheda)", type:"Park", image:"assets/images/kheda/parks/vaso-village-garden-kheda.jpg", mapUrl:"https://maps.google.com/?q=Vaso+Village+Garden+Kheda+Gujarat" },
    { id:"p7", name:"Pij Lake Side Walking Park Zone (Kheda)", type:"Park", image:"assets/images/kheda/parks/pij-lakeside-walking-zone-kheda.jpg", mapUrl:"https://maps.google.com/?q=Pij+Lake+Side+Walking+Park+Kheda" },
    { id:"p8", name:"Uttarsanda Village Park Area (Nadiad)", type:"Park", image:"assets/images/kheda/parks/uttarsanda-village-park-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Uttarsanda+Village+Park+Nadiad" },
    { id:"p9", name:"Mahudha Old Town Garden Space (Mahudha)", type:"Park", image:"assets/images/kheda/parks/mahudha-old-town-garden.jpg", mapUrl:"https://maps.google.com/?q=Mahudha+Old+Town+Garden+Kheda" },

    // ================= TEMPLES =================
    { id:"t1", name:"Santram Mandir (Nadiad)", type:"Temple", image:"assets/images/kheda/temples/santram-mandir-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Santram+Mandir+Nadiad+Kheda" },
    { id:"t2", name:"Swaminarayan Temple (Nadiad)", type:"Temple", image:"assets/images/kheda/temples/swaminarayan-temple-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Nadiad+Kheda" },
    { id:"t3", name:"Shiva Temple (Kheda)", type:"Temple", image:"assets/images/kheda/temples/shiva-temple-kheda.jpg", mapUrl:"https://maps.google.com/?q=Shiva+Temple+Kheda+Gujarat" },
    { id:"t4", name:"Hanuman Temple (Mahudha)", type:"Temple", image:"assets/images/kheda/temples/hanuman-temple-mahudha.jpg", mapUrl:"https://maps.google.com/?q=Hanuman+Temple+Mahudha+Kheda" },
    { id:"t5", name:"Swaminarayan Temple (Kheda)", type:"Temple", image:"assets/images/kheda/temples/swaminarayan-temple-kheda.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Kheda+Gujarat" },
    { id:"t6", name:"Hanuman Temple (Uttarsanda, Nadiad)", type:"Temple", image:"assets/images/kheda/temples/hanuman-temple-uttarsanda-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Hanuman+Temple+Uttarsanda+Nadiad" },
    { id:"t7", name:"Chamunda Mata Temple (Vaso, Kheda)", type:"Temple", image:"assets/images/kheda/temples/chamunda-mata-temple-vaso-kheda.jpg", mapUrl:"https://maps.google.com/?q=Chamunda+Mata+Temple+Vaso+Kheda" },
    { id:"t8", name:"Baliyadev Temple (Pij Village, Kheda)", type:"Temple", image:"assets/images/kheda/temples/baliyadev-temple-pij-kheda.jpg", mapUrl:"https://maps.google.com/?q=Baliyadev+Temple+Pij+Village+Kheda" },
    { id:"t9", name:"Mahadev Temple (Thasra Road, Kheda District)", type:"Temple", image:"assets/images/kheda/temples/mahadev-temple-thasra-road-kheda.jpg", mapUrl:"https://maps.google.com/?q=Mahadev+Temple+Thasra+Road+Kheda" },
    { id:"t10", name:"Meldi Mata Temple (Mahudha Rural Area)", type:"Temple", image:"assets/images/kheda/temples/meldi-mata-temple-mahudha.jpg", mapUrl:"https://maps.google.com/?q=Meldi+Mata+Temple+Mahudha+Rural+Kheda" },
    { id:"t11", name:"Ramji Mandir (Uttarsanda, Nadiad)", type:"Temple", image:"assets/images/kheda/temples/ramji-mandir-uttarsanda-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Ramji+Mandir+Uttarsanda+Nadiad" },

    // ================= CAFES =================
    { id:"c1", name:"Cafe Coffee Day (Nadiad)", type:"Cafe", image:"assets/images/kheda/cafes/cafe-coffee-day-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Nadiad+Kheda" },
    { id:"c2", name:"The Chocolate Room (Nadiad)", type:"Cafe", image:"assets/images/kheda/cafes/chocolate-room-nadiad.jpg", mapUrl:"https://maps.google.com/?q=The+Chocolate+Room+Nadiad+Kheda" },
    { id:"c3", name:"Local Cafe & Fast Food (Kheda)", type:"Cafe", image:"assets/images/kheda/cafes/local-cafe-fastfood-kheda.jpg", mapUrl:"https://maps.google.com/?q=Local+Cafe+Fast+Food+Kheda+Gujarat" },
    { id:"c4", name:"Tea Post (Nadiad)", type:"Cafe", image:"assets/images/kheda/cafes/tea-post-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Tea+Post+Nadiad+Kheda" },
    { id:"c5", name:"Railway Station Tea Points (Nadiad)", type:"Cafe", image:"assets/images/kheda/cafes/railway-station-tea-points-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Railway+Station+Tea+Points+Nadiad" },
    { id:"c6", name:"College Road Small Cafes (Nadiad)", type:"Cafe", image:"assets/images/kheda/cafes/college-road-cafes-nadiad.jpg", mapUrl:"https://maps.google.com/?q=College+Road+Small+Cafes+Nadiad" },
    { id:"c7", name:"Highway Tea Stalls (Nadiad–Ahmedabad Road)", type:"Cafe", image:"assets/images/kheda/cafes/highway-tea-stalls-nadiad-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Highway+Tea+Stalls+Nadiad+Ahmedabad+Road" },
    { id:"c8", name:"Local Snack Cafes near Bus Stand (Kheda)", type:"Cafe", image:"assets/images/kheda/cafes/snack-cafes-bus-stand-kheda.jpg", mapUrl:"https://maps.google.com/?q=Snack+Cafes+Bus+Stand+Kheda+Gujarat" },
    { id:"c9", name:"Small Village Cafes (Mahudha Main Road)", type:"Cafe", image:"assets/images/kheda/cafes/village-cafes-mahudha-main-road.jpg", mapUrl:"https://maps.google.com/?q=Village+Cafes+Mahudha+Main+Road+Kheda" },
    { id:"c10", name:"Street Tea Corners near Pij Crossroads (Kheda)", type:"Cafe", image:"assets/images/kheda/cafes/tea-corners-pij-crossroads-kheda.jpg", mapUrl:"https://maps.google.com/?q=Street+Tea+Corners+Pij+Crossroads+Kheda" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Children's Park Activities (Nadiad)", type:"Adventure", image:"assets/images/kheda/adventure/childrens-park-activities-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Childrens+Park+Activities+Nadiad+Kheda" },
    { id:"a2", name:"Santram Garden Activity Area (Nadiad)", type:"Adventure", image:"assets/images/kheda/adventure/santram-garden-activity-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Santram+Garden+Activity+Area+Nadiad" },
    { id:"a3", name:"Lake-side Walking & Boating Areas (Kheda)", type:"Adventure", image:"assets/images/kheda/adventure/lakeside-walking-boating-kheda.jpg", mapUrl:"https://maps.google.com/?q=Lake+side+Walking+Boating+Kheda+Gujarat" },
    { id:"a4", name:"Local Sports Grounds (Mahudha)", type:"Adventure", image:"assets/images/kheda/adventure/local-sports-grounds-mahudha.jpg", mapUrl:"https://maps.google.com/?q=Local+Sports+Grounds+Mahudha+Kheda" },
    { id:"a5", name:"Pij Lake Bird Watching Area (Kheda)", type:"Adventure", image:"assets/images/kheda/adventure/pij-lake-bird-watching-kheda.jpg", mapUrl:"https://maps.google.com/?q=Pij+Lake+Bird+Watching+Area+Kheda" },
    { id:"a6", name:"Nadiad Canal Side Cycling Track (Nadiad)", type:"Adventure", image:"assets/images/kheda/adventure/canal-side-cycling-track-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Nadiad+Canal+Side+Cycling+Track" },
    { id:"a7", name:"Rural Farm Walking Routes (Mahudha Outskirts)", type:"Adventure", image:"assets/images/kheda/adventure/rural-farm-walking-mahudha.jpg", mapUrl:"https://maps.google.com/?q=Rural+Farm+Walking+Routes+Mahudha+Outskirts" },
    { id:"a8", name:"Uttarsanda Village Nature Walk Trails (Nadiad)", type:"Adventure", image:"assets/images/kheda/adventure/uttarsanda-nature-walk-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Uttarsanda+Village+Nature+Walk+Nadiad" },
    { id:"a9", name:"Early Morning Jogging Tracks (College Road, Nadiad)", type:"Adventure", image:"assets/images/kheda/adventure/jogging-tracks-college-road-nadiad.jpg", mapUrl:"https://maps.google.com/?q=Jogging+Tracks+College+Road+Nadiad" },
    { id:"a10", name:"Seasonal Wetland Exploration Area (Kheda Region)", type:"Adventure", image:"assets/images/kheda/adventure/seasonal-wetland-exploration-kheda.jpg", mapUrl:"https://maps.google.com/?q=Seasonal+Wetland+Exploration+Kheda+Region" }

  ]
},

Anand: {
  id: "Anand",
  name: "Anand",
  heroImage: "assets/images/cities/Anand.webp",
  description: "Explore parks, temples, cafes, museums, and adventure spots in Anand.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Children's Park", type:"Park", image:"assets/images/anand/parks/childrens-park-anand.jpg", mapUrl:"https://maps.google.com/?q=Childrens+Park+Anand+Gujarat" },
    { id:"p2", name:"Sardar Patel Park", type:"Park", image:"assets/images/anand/parks/sardar-patel-park-anand.jpg", mapUrl:"https://maps.google.com/?q=Sardar+Patel+Park+Anand+Gujarat" },
    { id:"p3", name:"Town Hall Garden", type:"Park", image:"assets/images/anand/parks/town-hall-garden-anand.jpg", mapUrl:"https://maps.google.com/?q=Town+Hall+Garden+Anand+Gujarat" },
    { id:"p4", name:"Petlad Garden", type:"Park", image:"assets/images/anand/parks/petlad-garden-anand.jpg", mapUrl:"https://maps.google.com/?q=Petlad+Garden+Anand+Gujarat" },
    { id:"p5", name:"Vithal Udyog Nagar Green Belt Park", type:"Park", image:"assets/images/anand/parks/vithal-udyog-nagar-greenbelt-anand.jpg", mapUrl:"https://maps.google.com/?q=Vithal+Udyog+Nagar+Green+Belt+Park+Anand" },
    { id:"p6", name:"Gamdi Village Garden", type:"Park", image:"assets/images/anand/parks/gamdi-village-garden-anand.jpg", mapUrl:"https://maps.google.com/?q=Gamdi+Village+Garden+Anand+Gujarat" },
    { id:"p7", name:"Karamsad Public Garden", type:"Park", image:"assets/images/anand/parks/karamsad-public-garden-anand.jpg", mapUrl:"https://maps.google.com/?q=Karamsad+Public+Garden+Anand+Gujarat" },
    { id:"p8", name:"Mogri Lake Side Park Area", type:"Park", image:"assets/images/anand/parks/mogri-lakeside-park-anand.jpg", mapUrl:"https://maps.google.com/?q=Mogri+Lake+Side+Park+Anand+Gujarat" },

    // ================= TEMPLES =================
    { id:"t1", name:"Swaminarayan Temple (Anand)", type:"Temple", image:"assets/images/anand/temples/swaminarayan-temple-anand.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Anand+Gujarat" },
    { id:"t2", name:"ISKCON Temple (Vallabh Vidyanagar)", type:"Temple", image:"assets/images/anand/temples/iskcon-temple-vallabh-vidyanagar.jpg", mapUrl:"https://maps.google.com/?q=ISKCON+Temple+Vallabh+Vidyanagar+Anand" },
    { id:"t3", name:"Swaminarayan Temple (Borsad)", type:"Temple", image:"assets/images/anand/temples/swaminarayan-temple-borsad.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Borsad+Anand" },
    { id:"t4", name:"Shiva Temple (Petlad)", type:"Temple", image:"assets/images/anand/temples/shiva-temple-petlad-anand.jpg", mapUrl:"https://maps.google.com/?q=Shiva+Temple+Petlad+Anand+Gujarat" },
    { id:"t5", name:"Hanuman Temple (Karamsad)", type:"Temple", image:"assets/images/anand/temples/hanuman-temple-karamsad-anand.jpg", mapUrl:"https://maps.google.com/?q=Hanuman+Temple+Karamsad+Anand" },
    { id:"t6", name:"Shiv Mandir (Mogri)", type:"Temple", image:"assets/images/anand/temples/shiv-mandir-mogri-anand.jpg", mapUrl:"https://maps.google.com/?q=Shiv+Mandir+Mogri+Anand+Gujarat" },
    { id:"t7", name:"Bhramani Mata Temple (Petlad Rural)", type:"Temple", image:"assets/images/anand/temples/bhramani-mata-temple-petlad-rural.jpg", mapUrl:"https://maps.google.com/?q=Bhramani+Mata+Temple+Petlad+Rural+Anand" },
    { id:"t8", name:"Nilkanth Mahadev Temple (Borsad Rural)", type:"Temple", image:"assets/images/anand/temples/nilkanth-mahadev-temple-borsad-rural.jpg", mapUrl:"https://maps.google.com/?q=Nilkanth+Mahadev+Temple+Borsad+Rural+Anand" },
    { id:"t9", name:"Chamunda Mata Temple (VV Nagar Outskirts)", type:"Temple", image:"assets/images/anand/temples/chamunda-mata-temple-vv-nagar.jpg", mapUrl:"https://maps.google.com/?q=Chamunda+Mata+Temple+VV+Nagar+Anand" },

    // ================= CAFES =================
    { id:"c1", name:"Cafe Coffee Day", type:"Cafe", image:"assets/images/anand/cafes/cafe-coffee-day-anand.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Anand+Gujarat" },
    { id:"c2", name:"The Chocolate Room", type:"Cafe", image:"assets/images/anand/cafes/chocolate-room-anand.jpg", mapUrl:"https://maps.google.com/?q=The+Chocolate+Room+Anand+Gujarat" },
    { id:"c3", name:"Chai Sutta Bar", type:"Cafe", image:"assets/images/anand/cafes/chai-sutta-bar-anand.jpg", mapUrl:"https://maps.google.com/?q=Chai+Sutta+Bar+Anand+Gujarat" },
    { id:"c4", name:"Biggies Burger Cafe", type:"Cafe", image:"assets/images/anand/cafes/biggies-burger-cafe-anand.jpg", mapUrl:"https://maps.google.com/?q=Biggies+Burger+Cafe+Anand+Gujarat" },
    { id:"c5", name:"Highway Tea Cafe (Karamsad)", type:"Cafe", image:"assets/images/anand/cafes/highway-tea-cafe-karamsad.jpg", mapUrl:"https://maps.google.com/?q=Highway+Tea+Cafe+Karamsad+Anand" },
    { id:"c6", name:"University Road Cafes (VV Nagar)", type:"Cafe", image:"assets/images/anand/cafes/university-road-cafes-vv-nagar.jpg", mapUrl:"https://maps.google.com/?q=University+Road+Cafes+VV+Nagar+Anand" },
    { id:"c7", name:"Amul Dairy Road Cafes", type:"Cafe", image:"assets/images/anand/cafes/amul-dairy-road-cafes-anand.jpg", mapUrl:"https://maps.google.com/?q=Amul+Dairy+Road+Cafes+Anand+Gujarat" },
    { id:"c8", name:"Garden View Tea Cafes (Petlad)", type:"Cafe", image:"assets/images/anand/cafes/garden-view-tea-cafes-petlad.jpg", mapUrl:"https://maps.google.com/?q=Garden+View+Tea+Cafes+Petlad+Anand" },
    { id:"c9", name:"Station Road Tea Points (Borsad)", type:"Cafe", image:"assets/images/anand/cafes/station-road-tea-points-borsad.jpg", mapUrl:"https://maps.google.com/?q=Station+Road+Tea+Points+Borsad+Anand" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Sardar Patel Memorial", type:"Museum", image:"assets/images/anand/museums/sardar-patel-memorial-anand.jpg", mapUrl:"https://maps.google.com/?q=Sardar+Patel+Memorial+Anand+Gujarat" },
    { id:"m2", name:"Amul Dairy Museum", type:"Museum", image:"assets/images/anand/museums/amul-dairy-museum-anand.jpg", mapUrl:"https://maps.google.com/?q=Amul+Dairy+Museum+Anand+Gujarat" },
    { id:"m3", name:"Amul Heritage Exhibition Corner", type:"Museum", image:"assets/images/anand/museums/amul-heritage-exhibition-anand.jpg", mapUrl:"https://maps.google.com/?q=Amul+Heritage+Exhibition+Corner+Anand" },
    { id:"m4", name:"Dairy Cooperative Display Gallery", type:"Museum", image:"assets/images/anand/museums/dairy-cooperative-display-gallery-anand.jpg", mapUrl:"https://maps.google.com/?q=Dairy+Cooperative+Display+Gallery+Anand" },
    { id:"m5", name:"Rural History Display Room (VV Nagar)", type:"Museum", image:"assets/images/anand/museums/rural-history-display-vv-nagar.jpg", mapUrl:"https://maps.google.com/?q=Rural+History+Display+Room+VV+Nagar+Anand" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Sardar Patel Park Activities", type:"Adventure", image:"assets/images/anand/adventure/sardar-patel-park-activities-anand.jpg", mapUrl:"https://maps.google.com/?q=Sardar+Patel+Park+Activities+Anand+Gujarat" },
    { id:"a2", name:"Children's Park Recreation", type:"Adventure", image:"assets/images/anand/adventure/childrens-park-recreation-anand.jpg", mapUrl:"https://maps.google.com/?q=Childrens+Park+Recreation+Anand+Gujarat" },
    { id:"a3", name:"Mogri Lake Walking & Fishing Zone", type:"Adventure", image:"assets/images/anand/adventure/mogri-lake-walking-fishing-anand.jpg", mapUrl:"https://maps.google.com/?q=Mogri+Lake+Walking+Fishing+Zone+Anand" },
    { id:"a4", name:"Karamsad–Anand Cycling Routes", type:"Adventure", image:"assets/images/anand/adventure/karamsad-anand-cycling-routes.jpg", mapUrl:"https://maps.google.com/?q=Karamsad+Anand+Cycling+Routes+Gujarat" },
    { id:"a5", name:"Petlad Canal Side Walking Track", type:"Adventure", image:"assets/images/anand/adventure/petlad-canal-side-walking-track.jpg", mapUrl:"https://maps.google.com/?q=Petlad+Canal+Side+Walking+Track+Anand" },
    { id:"a6", name:"Borsad Village Trails", type:"Adventure", image:"assets/images/anand/adventure/borsad-village-trails-anand.jpg", mapUrl:"https://maps.google.com/?q=Borsad+Village+Trails+Anand+Gujarat" },
    { id:"a7", name:"AAU Morning Fitness Tracks", type:"Adventure", image:"assets/images/anand/adventure/aau-morning-fitness-tracks-anand.jpg", mapUrl:"https://maps.google.com/?q=AAU+Morning+Fitness+Tracks+Anand+Gujarat" }

  ]
},

  // ================= AHMEDABAD =================
ahmedabad: {
  id: "ahmedabad",
  name: "Ahmedabad",
  heroImage: "assets/images/cities/ahmedabad.webp",
  description: "Explore cafes, parks, temples, museums, and adventure spots in Ahmedabad.",
  places: [

    // ================= CAFES =================
    { id:"c1", name:"The Messy Door Cafe - HL College Road", type:"Cafe", image:"assets/images/ahmedabad/cafes/messy-door-cafe-hl-college-road.jpg", mapUrl:"https://maps.google.com/?q=The+Messy+Door+Cafe+HL+College+Road+Ahmedabad" },
    { id:"c2", name:"The Project Cafe", type:"Cafe", image:"assets/images/ahmedabad/cafes/the-project-cafe-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=The+Project+Cafe+Ahmedabad" },
    { id:"c3", name:"Crazy Plant Lady Cafe", type:"Cafe", image:"assets/images/ahmedabad/cafes/crazy-plant-lady-cafe-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Crazy+Plant+Lady+Cafe+Ahmedabad" },
    { id:"c4", name:"The House of Makeba", type:"Cafe", image:"assets/images/ahmedabad/cafes/house-of-makeba-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=The+House+of+Makeba+Ahmedabad" },
    { id:"c5", name:"Koffee Stories Cafe", type:"Cafe", image:"assets/images/ahmedabad/cafes/koffee-stories-cafe-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Koffee+Stories+Cafe+Ahmedabad" },
    { id:"c6", name:"Tent Rooftop Restro Cafe", type:"Cafe", image:"assets/images/ahmedabad/cafes/tent-rooftop-restro-cafe-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Tent+Rooftop+Restro+Cafe+Ahmedabad" },
    { id:"c7", name:"The Barnyard Co.", type:"Cafe", image:"assets/images/ahmedabad/cafes/barnyard-co-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=The+Barnyard+Co+Ahmedabad" },
    { id:"c8", name:"Mocha CG Road", type:"Cafe", image:"assets/images/ahmedabad/cafes/mocha-cg-road-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Mocha+CG+Road+Ahmedabad" },
    { id:"c9", name:"Ristretto Behind the Rods", type:"Cafe", image:"assets/images/ahmedabad/cafes/ristretto-behind-the-rods-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Ristretto+Behind+the+Rods+Ahmedabad" },
    { id:"c10", name:"Roastery Cultur - The Coffee Company", type:"Cafe", image:"assets/images/ahmedabad/cafes/roastery-cultur-coffee-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Roastery+Cultur+The+Coffee+Company+Ahmedabad" },
    { id:"c11", name:"Little French House", type:"Cafe", image:"assets/images/ahmedabad/cafes/little-french-house-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Little+French+House+Ahmedabad" },
    { id:"c12", name:"Karma Cafe", type:"Cafe", image:"assets/images/ahmedabad/cafes/karma-cafe-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Karma+Cafe+Ahmedabad" },
    { id:"c13", name:"The Mad House", type:"Cafe", image:"assets/images/ahmedabad/cafes/the-mad-house-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=The+Mad+House+Cafe+Ahmedabad" },
    { id:"c14", name:"Prithvi Art Celebration", type:"Cafe", image:"assets/images/ahmedabad/cafes/prithvi-art-celebration-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Prithvi+Art+Celebration+Ahmedabad" },
    { id:"c15", name:"Zen Cafe", type:"Cafe", image:"assets/images/ahmedabad/cafes/zen-cafe-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Zen+Cafe+Ahmedabad" },
    { id:"c16", name:"Cafe Native Stories", type:"Cafe", image:"assets/images/ahmedabad/cafes/cafe-native-stories-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Native+Stories+Ahmedabad" },
    { id:"c17", name:"At Good Place", type:"Cafe", image:"assets/images/ahmedabad/cafes/at-good-place-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=At+Good+Place+Cafe+Ahmedabad" },
    { id:"c18", name:"Surkhi Cafe", type:"Cafe", image:"assets/images/ahmedabad/cafes/surkhi-cafe-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Surkhi+Cafe+Ahmedabad" },
    { id:"c19", name:"Unlocked Cafe", type:"Cafe", image:"assets/images/ahmedabad/cafes/unlocked-cafe-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Unlocked+Cafe+Ahmedabad" },
    { id:"c20", name:"The Half Story (Chandkheda)", type:"Cafe", image:"assets/images/ahmedabad/cafes/half-story-chandkheda-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=The+Half+Story+Chandkheda+Ahmedabad" },
    { id:"c21", name:"Xia Rooftop Bistro (Chandkheda)", type:"Cafe", image:"assets/images/ahmedabad/cafes/xia-rooftop-bistro-chandkheda-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Xia+Rooftop+Bistro+Chandkheda+Ahmedabad" },

    // ================= PARKS =================
    { id:"p1", name:"Sabarmati Riverfront Flower Park", type:"Park", image:"assets/images/ahmedabad/parks/sabarmati-riverfront-flower-park.jpg", mapUrl:"https://maps.google.com/?q=Sabarmati+Riverfront+Flower+Park+Ahmedabad" },
    { id:"p2", name:"BounceUp", type:"Park", image:"assets/images/ahmedabad/parks/bounceup-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=BounceUp+Ahmedabad" },
    { id:"p3", name:"One Tree Hill Garden", type:"Park", image:"assets/images/ahmedabad/parks/one-tree-hill-garden-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=One+Tree+Hill+Garden+Ahmedabad" },
    { id:"p4", name:"Jadeshwar Forest Park", type:"Park", image:"assets/images/ahmedabad/parks/jadeshwar-forest-park-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Jadeshwar+Forest+Park+Ahmedabad" },
    { id:"p5", name:"Parimal Garden", type:"Park", image:"assets/images/ahmedabad/parks/parimal-garden-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Parimal+Garden+Ahmedabad" },
    { id:"p6", name:"Usmanpura Garden", type:"Park", image:"assets/images/ahmedabad/parks/usmanpura-garden-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Usmanpura+Garden+Ahmedabad" },
    { id:"p7", name:"Monte Carlo Oxygen Park", type:"Park", image:"assets/images/ahmedabad/parks/monte-carlo-oxygen-park-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Monte+Carlo+Oxygen+Park+Ahmedabad" },
    { id:"p8", name:"Butterfly Park", type:"Park", image:"assets/images/ahmedabad/parks/butterfly-park-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Butterfly+Park+Ahmedabad" },
    { id:"p9", name:"Riverfront Park", type:"Park", image:"assets/images/ahmedabad/parks/riverfront-park-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Riverfront+Park+Ahmedabad" },
    { id:"p10", name:"Jogger's Park", type:"Park", image:"assets/images/ahmedabad/parks/joggers-park-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Joggers+Park+Ahmedabad" },
    { id:"p11", name:"Symphony Forest Park", type:"Park", image:"assets/images/ahmedabad/parks/symphony-forest-park-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Symphony+Forest+Park+Ahmedabad" },
    { id:"p12", name:"Bopal Ecological Park", type:"Park", image:"assets/images/ahmedabad/parks/bopal-ecological-park-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Bopal+Ecological+Park+Ahmedabad" },
    { id:"p13", name:"Atlantic Fun World", type:"Park", image:"assets/images/ahmedabad/parks/atlantic-fun-world-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Atlantic+Fun+World+Ahmedabad" },
    { id:"p14", name:"Nagina Wadi", type:"Park", image:"assets/images/ahmedabad/parks/nagina-wadi-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Nagina+Wadi+Ahmedabad" },
    { id:"p15", name:"Sukan Park", type:"Park", image:"assets/images/ahmedabad/parks/sukan-park-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Sukan+Park+Ahmedabad" },
    { id:"p16", name:"Sundarvan", type:"Park", image:"assets/images/ahmedabad/parks/sundarvan-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Sundarvan+Ahmedabad" },
    { id:"p17", name:"Ajit Garden", type:"Park", image:"assets/images/ahmedabad/parks/ajit-garden-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Ajit+Garden+Ahmedabad" },

    // ================= TEMPLES =================
    { id:"t1", name:"BAPS Shri Swaminarayan Mandir", type:"Temple", image:"assets/images/ahmedabad/temples/baps-swaminarayan-mandir-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=BAPS+Shri+Swaminarayan+Mandir+Ahmedabad" },
    { id:"t2", name:"Nagardevi Shri Bhadrakali Mata", type:"Temple", image:"assets/images/ahmedabad/temples/nagardevi-bhadrakali-mata-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Nagardevi+Shri+Bhadrakali+Mata+Ahmedabad" },
    { id:"t3", name:"Shri Jagannathji Mandir", type:"Temple", image:"assets/images/ahmedabad/temples/shri-jagannathji-mandir-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Shri+Jagannathji+Mandir+Ahmedabad" },
    { id:"t4", name:"Hutheesing Jain Temple", type:"Temple", image:"assets/images/ahmedabad/temples/hutheesing-jain-temple-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Hutheesing+Jain+Temple+Ahmedabad" },
    { id:"t5", name:"ISKCON Temple", type:"Temple", image:"assets/images/ahmedabad/temples/iskcon-temple-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=ISKCON+Temple+Ahmedabad" },
    { id:"t6", name:"BAPS Akshardham Gandhinagar", type:"Temple", image:"assets/images/ahmedabad/temples/baps-akshardham-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=BAPS+Akshardham+Gandhinagar+Ahmedabad" },
    { id:"t7", name:"Swaminarayan Mandir Kalupur", type:"Temple", image:"assets/images/ahmedabad/temples/swaminarayan-mandir-kalupur-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Mandir+Kalupur+Ahmedabad" },
    { id:"t8", name:"Shri Balaki Temple", type:"Temple", image:"assets/images/ahmedabad/temples/shri-balaki-temple-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Shri+Balaki+Temple+Ahmedabad" },
    { id:"t9", name:"Koteshwar Mahadev Temple", type:"Temple", image:"assets/images/ahmedabad/temples/koteshwar-mahadev-temple-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Koteshwar+Mahadev+Temple+Ahmedabad" },
    { id:"t10", name:"Shri Devendrashwar Mahadev Temple", type:"Temple", image:"assets/images/ahmedabad/temples/devendrashwar-mahadev-temple-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Shri+Devendrashwar+Mahadev+Temple+Ahmedabad" },
    { id:"t11", name:"Camp Hanumanji Mandir", type:"Temple", image:"assets/images/ahmedabad/temples/camp-hanumanji-mandir-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Camp+Hanumanji+Mandir+Ahmedabad" },
    { id:"t12", name:"Bahuchraji Mata Temple Navapura", type:"Temple", image:"assets/images/ahmedabad/temples/bahuchraji-mata-temple-navapura-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Bahuchraji+Mata+Temple+Navapura+Ahmedabad" },
    { id:"t13", name:"Lambha Baliyadev Temple", type:"Temple", image:"assets/images/ahmedabad/temples/lambha-baliyadev-temple-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Lambha+Baliyadev+Temple+Ahmedabad" },
    { id:"t14", name:"Maa Vaishnodevi Temple", type:"Temple", image:"assets/images/ahmedabad/temples/maa-vaishnodevi-temple-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Maa+Vaishnodevi+Temple+Ahmedabad" },
    { id:"t15", name:"Kameshwar Mahadev Temple", type:"Temple", image:"assets/images/ahmedabad/temples/kameshwar-mahadev-temple-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Kameshwar+Mahadev+Temple+Ahmedabad" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Sabarmati Ashram", type:"Museum", image:"assets/images/ahmedabad/museums/sabarmati-ashram-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Sabarmati+Ashram+Ahmedabad" },
    { id:"m2", name:"Calico Museum of Textiles", type:"Museum", image:"assets/images/ahmedabad/museums/calico-museum-textiles-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Calico+Museum+of+Textiles+Ahmedabad" },
    { id:"m3", name:"Auto World Vintage Car Museum", type:"Museum", image:"assets/images/ahmedabad/museums/auto-world-vintage-car-museum-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Auto+World+Vintage+Car+Museum+Ahmedabad" },
    { id:"m4", name:"Sardar Vallabhbhai Patel National Memorial", type:"Museum", image:"assets/images/ahmedabad/museums/sardar-vallabhbhai-patel-national-memorial.jpg", mapUrl:"https://maps.google.com/?q=Sardar+Vallabhbhai+Patel+National+Memorial+Ahmedabad" },
    { id:"m5", name:"Lalbhai Dalpatbhai Museum", type:"Museum", image:"assets/images/ahmedabad/museums/lalbhai-dalpatbhai-museum-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Lalbhai+Dalpatbhai+Museum+Ahmedabad" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Sabarmati Riverfront Activities", type:"Adventure", image:"assets/images/ahmedabad/adventure/sabarmati-riverfront-activities-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Sabarmati+Riverfront+Activities+Ahmedabad" },
    { id:"a2", name:"Shanku's Water Park", type:"Adventure", image:"assets/images/ahmedabad/adventure/shankus-water-park-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Shankus+Water+Park+Ahmedabad" },
    { id:"a3", name:"Splash The Fun World", type:"Adventure", image:"assets/images/ahmedabad/adventure/splash-the-fun-world-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Splash+The+Fun+World+Ahmedabad" },
    { id:"a4", name:"Kankaria Lake Activities", type:"Adventure", image:"assets/images/ahmedabad/adventure/kankaria-lake-activities-ahmedabad.jpg", mapUrl:"https://maps.google.com/?q=Kankaria+Lake+Activities+Ahmedabad" }

  ]
},

gandhinagar: {
  id: "gandhinagar",
  name: "Gandhinagar",
  heroImage: "assets/images/cities/Gandhinagar.jpg",
  description: "Explore parks, temples, cafes, museums, and peaceful adventure spots in Gandhinagar.",
  places: [

    // ================= CAFES =================
    { id:"c1", name:"Cafe Coffee Day, Gandhinagar", type:"Cafe", image:"assets/images/gandhinagar/cafes/cafe-coffee-day-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Gandhinagar" },
    { id:"c2", name:"The Chocolate Room, Gandhinagar", type:"Cafe", image:"assets/images/gandhinagar/cafes/chocolate-room-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=The+Chocolate+Room+Gandhinagar" },
    { id:"c3", name:"Mocha Cafe, Gandhinagar", type:"Cafe", image:"assets/images/gandhinagar/cafes/mocha-cafe-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Mocha+Cafe+Gandhinagar" },
    { id:"c4", name:"Highway Tea Points, Chiloda", type:"Cafe", image:"assets/images/gandhinagar/cafes/highway-tea-points-chiloda.jpg", mapUrl:"https://maps.google.com/?q=Highway+Tea+Points+Chiloda+Gandhinagar" },
    { id:"c5", name:"Cafes near PDPU Road, Raysan", type:"Cafe", image:"assets/images/gandhinagar/cafes/cafes-pdpu-road-raysan.jpg", mapUrl:"https://maps.google.com/?q=Cafes+PDPU+Road+Raysan+Gandhinagar" },
    { id:"c6", name:"Cafes near Infocity Road", type:"Cafe", image:"assets/images/gandhinagar/cafes/cafes-infocity-road-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Cafes+Infocity+Road+Gandhinagar" },
    { id:"c7", name:"Tea Stalls near Kalol Railway Station", type:"Cafe", image:"assets/images/gandhinagar/cafes/tea-stalls-kalol-railway-station.jpg", mapUrl:"https://maps.google.com/?q=Tea+Stalls+Kalol+Railway+Station+Gandhinagar" },
    { id:"c8", name:"Village-side Cafes, Dehgam Road", type:"Cafe", image:"assets/images/gandhinagar/cafes/village-cafes-dehgam-road.jpg", mapUrl:"https://maps.google.com/?q=Village+Cafes+Dehgam+Road+Gandhinagar" },

    // ================= PARKS =================
    { id:"p1", name:"Indroda Nature Park", type:"Park", image:"assets/images/gandhinagar/parks/indroda-nature-park-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Indroda+Nature+Park+Gandhinagar" },
    { id:"p2", name:"Sarita Udyan", type:"Park", image:"assets/images/gandhinagar/parks/sarita-udyan-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Sarita+Udyan+Gandhinagar" },
    { id:"p3", name:"Children's Park", type:"Park", image:"assets/images/gandhinagar/parks/childrens-park-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Childrens+Park+Gandhinagar" },
    { id:"p4", name:"Sector 28 Garden", type:"Park", image:"assets/images/gandhinagar/parks/sector-28-garden-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Sector+28+Garden+Gandhinagar" },
    { id:"p5", name:"Sector 11 Riverfront Green Area", type:"Park", image:"assets/images/gandhinagar/parks/sector-11-riverfront-green-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Sector+11+Riverfront+Green+Area+Gandhinagar" },
    { id:"p6", name:"Randesan Village Park Area", type:"Park", image:"assets/images/gandhinagar/parks/randesan-village-park-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Randesan+Village+Park+Gandhinagar" },
    { id:"p7", name:"Chiloda Lake Side Green Zone", type:"Park", image:"assets/images/gandhinagar/parks/chiloda-lakeside-green-zone-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Chiloda+Lake+Side+Green+Zone+Gandhinagar" },
    { id:"p8", name:"Kalol Town Garden", type:"Park", image:"assets/images/gandhinagar/parks/kalol-town-garden-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Kalol+Town+Garden+Gandhinagar" },

    // ================= TEMPLES =================
    { id:"t1", name:"Akshardham Temple", type:"Temple", image:"assets/images/gandhinagar/temples/akshardham-temple-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Akshardham+Temple+Gandhinagar" },
    { id:"t2", name:"Dholeshwar Mahadev Temple", type:"Temple", image:"assets/images/gandhinagar/temples/dholeshwar-mahadev-temple-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Dholeshwar+Mahadev+Temple+Gandhinagar" },
    { id:"t3", name:"Hanuman Temple, Dehgam", type:"Temple", image:"assets/images/gandhinagar/temples/hanuman-temple-dehgam-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Hanuman+Temple+Dehgam+Gandhinagar" },
    { id:"t4", name:"Ranchhodrai Temple, Kalol", type:"Temple", image:"assets/images/gandhinagar/temples/ranchhodrai-temple-kalol-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Ranchhodrai+Temple+Kalol+Gandhinagar" },
    { id:"t5", name:"Bahuchar Mata Temple, Chiloda", type:"Temple", image:"assets/images/gandhinagar/temples/bahuchar-mata-temple-chiloda-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Bahuchar+Mata+Temple+Chiloda+Gandhinagar" },
    { id:"t6", name:"Meldi Mata Temple, Randesan", type:"Temple", image:"assets/images/gandhinagar/temples/meldi-mata-temple-randesan-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Meldi+Mata+Temple+Randesan+Gandhinagar" },
    { id:"t7", name:"Khodiyar Mata Temple, Dehgam Rural Area", type:"Temple", image:"assets/images/gandhinagar/temples/khodiyar-mata-temple-dehgam-rural.jpg", mapUrl:"https://maps.google.com/?q=Khodiyar+Mata+Temple+Dehgam+Rural+Gandhinagar" },
    { id:"t8", name:"Hanumanji Temple, Kalol Highway", type:"Temple", image:"assets/images/gandhinagar/temples/hanumanji-temple-kalol-highway.jpg", mapUrl:"https://maps.google.com/?q=Hanumanji+Temple+Kalol+Highway+Gandhinagar" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Dandi Kutir (Salt Mount Museum)", type:"Museum", image:"assets/images/gandhinagar/museums/dandi-kutir-salt-mount-museum-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Dandi+Kutir+Salt+Mount+Museum+Gandhinagar" },
    { id:"m2", name:"Science Exhibition Corner (Gujarat Science City Extension)", type:"Museum", image:"assets/images/gandhinagar/museums/science-exhibition-corner-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Science+Exhibition+Gujarat+Science+City+Gandhinagar" },
    { id:"m3", name:"Government Cultural Display Hall, Sector 17", type:"Museum", image:"assets/images/gandhinagar/museums/government-cultural-display-hall-sector17.jpg", mapUrl:"https://maps.google.com/?q=Government+Cultural+Display+Hall+Sector+17+Gandhinagar" },
    { id:"m4", name:"Local Heritage Display Room, Kalol", type:"Museum", image:"assets/images/gandhinagar/museums/local-heritage-display-room-kalol.jpg", mapUrl:"https://maps.google.com/?q=Local+Heritage+Display+Room+Kalol+Gandhinagar" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Randesan Cycling Route", type:"Adventure", image:"assets/images/gandhinagar/adventure/randesan-cycling-route-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Randesan+Cycling+Route+Gandhinagar" },
    { id:"a2", name:"Chiloda Lake Walking & Bird Spotting Area", type:"Adventure", image:"assets/images/gandhinagar/adventure/chiloda-lake-walking-bird-spotting.jpg", mapUrl:"https://maps.google.com/?q=Chiloda+Lake+Walking+Bird+Spotting+Gandhinagar" },
    { id:"a3", name:"Dehgam Rural Farm Trails", type:"Adventure", image:"assets/images/gandhinagar/adventure/dehgam-rural-farm-trails-gandhinagar.jpg", mapUrl:"https://maps.google.com/?q=Dehgam+Rural+Farm+Trails+Gandhinagar" },
    { id:"a4", name:"Kalol Industrial Area Walking Routes", type:"Adventure", image:"assets/images/gandhinagar/adventure/kalol-industrial-area-walking-routes.jpg", mapUrl:"https://maps.google.com/?q=Kalol+Industrial+Area+Walking+Routes+Gandhinagar" },
    { id:"a5", name:"Sector 30–32 Green Belt Jogging Tracks", type:"Adventure", image:"assets/images/gandhinagar/adventure/sector-30-32-greenbelt-jogging-tracks.jpg", mapUrl:"https://maps.google.com/?q=Sector+30+32+Green+Belt+Jogging+Tracks+Gandhinagar" }

  ]
},

morbi: {
  id: "morbi",
  name: "Morbi",
  heroImage: "assets/images/cities/Morbi.jpg",
  description: "Explore parks, temples, cafes, nature spots, waterfalls, adventure areas and heritage places in Morbi.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Green Chowk Garden", type:"Park", image:"assets/images/morbi/parks/green-chowk-garden-morbi.jpg", mapUrl:"https://maps.google.com/?q=Green+Chowk+Garden+Morbi+Gujarat" },
    { id:"p2", name:"Ravapar Lake Garden", type:"Park", image:"assets/images/morbi/parks/ravapar-lake-garden-morbi.jpg", mapUrl:"https://maps.google.com/?q=Ravapar+Lake+Garden+Morbi+Gujarat" },
    { id:"p3", name:"Machhu River Bank Open Area", type:"Park", image:"assets/images/morbi/parks/machhu-river-bank-morbi.jpg", mapUrl:"https://maps.google.com/?q=Machhu+River+Bank+Open+Area+Morbi" },
    { id:"p4", name:"Residential Colony Gardens", type:"Park", image:"assets/images/morbi/parks/residential-colony-gardens-morbi.jpg", mapUrl:"https://maps.google.com/?q=Residential+Colony+Gardens+Morbi+Gujarat" },

    // ================= TEMPLES =================
    { id:"t1", name:"Morpeshwar Mahadev Temple", type:"Temple", image:"assets/images/morbi/temples/morpeshwar-mahadev-temple-morbi.jpg", mapUrl:"https://maps.google.com/?q=Morpeshwar+Mahadev+Temple+Morbi+Gujarat" },
    { id:"t2", name:"Jadeshwar Mahadev Temple", type:"Temple", image:"assets/images/morbi/temples/jadeshwar-mahadev-temple-morbi.jpg", mapUrl:"https://maps.google.com/?q=Jadeshwar+Mahadev+Temple+Morbi+Gujarat" },
    { id:"t3", name:"Swaminarayan Temple Morbi", type:"Temple", image:"assets/images/morbi/temples/swaminarayan-temple-morbi.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Morbi+Gujarat" },
    { id:"t4", name:"Local Hanuman Temples", type:"Temple", image:"assets/images/morbi/temples/local-hanuman-temples-morbi.jpg", mapUrl:"https://maps.google.com/?q=Hanuman+Temple+Morbi+Gujarat" },
    { id:"t5", name:"Jain Derasar (Old City Area)", type:"Temple", image:"assets/images/morbi/temples/jain-derasar-old-city-morbi.jpg", mapUrl:"https://maps.google.com/?q=Jain+Derasar+Old+City+Morbi+Gujarat" },

    // ================= CAFES =================
    { id:"c1", name:"Honest Restaurant", type:"Cafe", image:"assets/images/morbi/cafes/honest-restaurant-morbi.jpg", mapUrl:"https://maps.google.com/?q=Honest+Restaurant+Morbi+Gujarat" },
    { id:"c2", name:"Sankalp Restaurant", type:"Cafe", image:"assets/images/morbi/cafes/sankalp-restaurant-morbi.jpg", mapUrl:"https://maps.google.com/?q=Sankalp+Restaurant+Morbi+Gujarat" },
    { id:"c3", name:"Shreeji Cafe", type:"Cafe", image:"assets/images/morbi/cafes/shreeji-cafe-morbi.jpg", mapUrl:"https://maps.google.com/?q=Shreeji+Cafe+Morbi+Gujarat" },
    { id:"c4", name:"Street Tea Cafes (Market Area)", type:"Cafe", image:"assets/images/morbi/cafes/street-tea-cafes-market-morbi.jpg", mapUrl:"https://maps.google.com/?q=Street+Tea+Cafes+Market+Area+Morbi" },

    // ================= HILL STATION / NATURE =================
    { id:"h1", name:"Machhu River Riverside Walk", type:"Hill Station", image:"assets/images/morbi/hillstation/machhu-river-riverside-walk-morbi.jpg", mapUrl:"https://maps.google.com/?q=Machhu+River+Riverside+Walk+Morbi+Gujarat" },
    { id:"h2", name:"Ravapar Lake Surroundings", type:"Hill Station", image:"assets/images/morbi/hillstation/ravapar-lake-surroundings-morbi.jpg", mapUrl:"https://maps.google.com/?q=Ravapar+Lake+Surroundings+Morbi+Gujarat" },
    { id:"h3", name:"Village Farmland Views", type:"Hill Station", image:"assets/images/morbi/hillstation/village-farmland-views-morbi.jpg", mapUrl:"https://maps.google.com/?q=Village+Farmland+Views+Morbi+Gujarat" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Monsoon Drain Flow Points", type:"Waterfall", image:"assets/images/morbi/waterfalls/monsoon-drain-flow-points-morbi.jpg", mapUrl:"https://maps.google.com/?q=Monsoon+Drain+Flow+Points+Morbi+Gujarat" },
    { id:"w2", name:"Small Rainwater Falls (Outskirts)", type:"Waterfall", image:"assets/images/morbi/waterfalls/small-rainwater-falls-outskirts-morbi.jpg", mapUrl:"https://maps.google.com/?q=Small+Rainwater+Falls+Outskirts+Morbi+Gujarat" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Machhu River Cycling Route", type:"Adventure", image:"assets/images/morbi/adventure/machhu-river-cycling-route-morbi.jpg", mapUrl:"https://maps.google.com/?q=Machhu+River+Cycling+Route+Morbi+Gujarat" },
    { id:"a2", name:"Open Industrial Outskirts Roads", type:"Adventure", image:"assets/images/morbi/adventure/industrial-outskirts-roads-morbi.jpg", mapUrl:"https://maps.google.com/?q=Industrial+Outskirts+Roads+Morbi+Gujarat" },
    { id:"a3", name:"Ravapar Lake Walking Trails", type:"Adventure", image:"assets/images/morbi/adventure/ravapar-lake-walking-trails-morbi.jpg", mapUrl:"https://maps.google.com/?q=Ravapar+Lake+Walking+Trails+Morbi+Gujarat" },
    { id:"a4", name:"Rural Village Dirt Roads", type:"Adventure", image:"assets/images/morbi/adventure/rural-village-dirt-roads-morbi.jpg", mapUrl:"https://maps.google.com/?q=Rural+Village+Dirt+Roads+Morbi+Gujarat" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Morbi Palace", type:"Museum", image:"assets/images/morbi/museums/morbi-palace-morbi.jpg", mapUrl:"https://maps.google.com/?q=Morbi+Palace+Morbi+Gujarat" },
    { id:"m2", name:"Old Suspension Bridge Area", type:"Museum", image:"assets/images/morbi/museums/old-suspension-bridge-morbi.jpg", mapUrl:"https://maps.google.com/?q=Old+Suspension+Bridge+Morbi+Gujarat" },
    { id:"m3", name:"Darbargadh Area", type:"Museum", image:"assets/images/morbi/museums/darbargadh-area-morbi.jpg", mapUrl:"https://maps.google.com/?q=Darbargadh+Area+Morbi+Gujarat" },
    { id:"m4", name:"Machhu River Old Embankments", type:"Museum", image:"assets/images/morbi/museums/machhu-river-old-embankments-morbi.jpg", mapUrl:"https://maps.google.com/?q=Machhu+River+Old+Embankments+Morbi+Gujarat" }

  ]
},

amreli: {
  id: "amreli",
  name: "Amreli",
  heroImage: "assets/images/cities/Amreli.jpg",
  description: "Explore parks, temples, cafes, nature spots, waterfalls, adventure areas and heritage places in Amreli.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Amreli Town Garden", type:"Park", image:"assets/images/amreli/parks/amreli-town-garden.jpg", mapUrl:"https://maps.google.com/?q=Amreli+Town+Garden+Amreli+Gujarat" },
    { id:"p2", name:"Nagnath Temple Lake Garden", type:"Park", image:"assets/images/amreli/parks/nagnath-temple-lake-garden-amreli.jpg", mapUrl:"https://maps.google.com/?q=Nagnath+Temple+Lake+Garden+Amreli+Gujarat" },
    { id:"p3", name:"Shetrunjay River Bank Area", type:"Park", image:"assets/images/amreli/parks/shetrunjay-river-bank-amreli.jpg", mapUrl:"https://maps.google.com/?q=Shetrunjay+River+Bank+Area+Amreli+Gujarat" },
    { id:"p4", name:"Residential Colony Small Gardens", type:"Park", image:"assets/images/amreli/parks/residential-colony-gardens-amreli.jpg", mapUrl:"https://maps.google.com/?q=Residential+Colony+Gardens+Amreli+Gujarat" },

    // ================= TEMPLES =================
    { id:"t1", name:"Nagnath Mahadev Temple", type:"Temple", image:"assets/images/amreli/temples/nagnath-mahadev-temple-amreli.jpg", mapUrl:"https://maps.google.com/?q=Nagnath+Mahadev+Temple+Amreli+Gujarat" },
    { id:"t2", name:"Swaminarayan Temple Amreli", type:"Temple", image:"assets/images/amreli/temples/swaminarayan-temple-amreli.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Amreli+Gujarat" },
    { id:"t3", name:"Hanuman Temple Amreli", type:"Temple", image:"assets/images/amreli/temples/hanuman-temple-amreli.jpg", mapUrl:"https://maps.google.com/?q=Hanuman+Temple+Amreli+Gujarat" },
    { id:"t4", name:"Gayatri Mandir", type:"Temple", image:"assets/images/amreli/temples/gayatri-mandir-amreli.jpg", mapUrl:"https://maps.google.com/?q=Gayatri+Mandir+Amreli+Gujarat" },
    { id:"t5", name:"Jain Derasar (Old Area)", type:"Temple", image:"assets/images/amreli/temples/jain-derasar-old-area-amreli.jpg", mapUrl:"https://maps.google.com/?q=Jain+Derasar+Old+Area+Amreli+Gujarat" },
    { id:"t6", name:"Local Mahadev Temples", type:"Temple", image:"assets/images/amreli/temples/local-mahadev-temples-amreli.jpg", mapUrl:"https://maps.google.com/?q=Local+Mahadev+Temples+Amreli+Gujarat" },

    // ================= CAFES =================
    { id:"c1", name:"Honest Restaurant", type:"Cafe", image:"assets/images/amreli/cafes/honest-restaurant-amreli.jpg", mapUrl:"https://maps.google.com/?q=Honest+Restaurant+Amreli+Gujarat" },
    { id:"c2", name:"Sankalp Restaurant", type:"Cafe", image:"assets/images/amreli/cafes/sankalp-restaurant-amreli.jpg", mapUrl:"https://maps.google.com/?q=Sankalp+Restaurant+Amreli+Gujarat" },
    { id:"c3", name:"Shreeji Cafe", type:"Cafe", image:"assets/images/amreli/cafes/shreeji-cafe-amreli.jpg", mapUrl:"https://maps.google.com/?q=Shreeji+Cafe+Amreli+Gujarat" },
    { id:"c4", name:"Street Tea Cafes (Station Road Area)", type:"Cafe", image:"assets/images/amreli/cafes/street-tea-cafes-station-road-amreli.jpg", mapUrl:"https://maps.google.com/?q=Street+Tea+Cafes+Station+Road+Amreli+Gujarat" },

    // ================= HILL STATION / NATURE =================
    { id:"h1", name:"Shetrunjay River Side Views", type:"Hill Station", image:"assets/images/amreli/hillstation/shetrunjay-river-side-views-amreli.jpg", mapUrl:"https://maps.google.com/?q=Shetrunjay+River+Side+Views+Amreli+Gujarat" },
    { id:"h2", name:"Village Farmland Green Belts", type:"Hill Station", image:"assets/images/amreli/hillstation/village-farmland-green-belts-amreli.jpg", mapUrl:"https://maps.google.com/?q=Village+Farmland+Green+Belts+Amreli+Gujarat" },
    { id:"h3", name:"Outskirts Windmill Fields", type:"Hill Station", image:"assets/images/amreli/hillstation/outskirts-windmill-fields-amreli.jpg", mapUrl:"https://maps.google.com/?q=Outskirts+Windmill+Fields+Amreli+Gujarat" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Monsoon Drain Flow Areas", type:"Waterfall", image:"assets/images/amreli/waterfalls/monsoon-drain-flow-areas-amreli.jpg", mapUrl:"https://maps.google.com/?q=Monsoon+Drain+Flow+Areas+Amreli+Gujarat" },
    { id:"w2", name:"Small Rural Rainfall Cascades", type:"Waterfall", image:"assets/images/amreli/waterfalls/small-rural-rainfall-cascades-amreli.jpg", mapUrl:"https://maps.google.com/?q=Small+Rural+Rainfall+Cascades+Amreli+Gujarat" },

    // ================= ADVENTURE =================
    { id:"a1", name:"River Bank Cycling Trails", type:"Adventure", image:"assets/images/amreli/adventure/river-bank-cycling-trails-amreli.jpg", mapUrl:"https://maps.google.com/?q=River+Bank+Cycling+Trails+Amreli+Gujarat" },
    { id:"a2", name:"Village Dirt Road Exploration", type:"Adventure", image:"assets/images/amreli/adventure/village-dirt-road-exploration-amreli.jpg", mapUrl:"https://maps.google.com/?q=Village+Dirt+Road+Exploration+Amreli+Gujarat" },
    { id:"a3", name:"Open Fields Walking Routes", type:"Adventure", image:"assets/images/amreli/adventure/open-fields-walking-routes-amreli.jpg", mapUrl:"https://maps.google.com/?q=Open+Fields+Walking+Routes+Amreli+Gujarat" },
    { id:"a4", name:"Outskirts Road Bike Rides", type:"Adventure", image:"assets/images/amreli/adventure/outskirts-road-bike-rides-amreli.jpg", mapUrl:"https://maps.google.com/?q=Outskirts+Road+Bike+Rides+Amreli+Gujarat" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Old Amreli Town Area", type:"Museum", image:"assets/images/amreli/museums/old-amreli-town-area.jpg", mapUrl:"https://maps.google.com/?q=Old+Amreli+Town+Area+Amreli+Gujarat" },
    { id:"m2", name:"Darbargadh Area", type:"Museum", image:"assets/images/amreli/museums/darbargadh-area-amreli.jpg", mapUrl:"https://maps.google.com/?q=Darbargadh+Area+Amreli+Gujarat" },
    { id:"m3", name:"Old Market Streets", type:"Museum", image:"assets/images/amreli/museums/old-market-streets-amreli.jpg", mapUrl:"https://maps.google.com/?q=Old+Market+Streets+Amreli+Gujarat" },
    { id:"m4", name:"Temple Heritage Structures", type:"Museum", image:"assets/images/amreli/museums/temple-heritage-structures-amreli.jpg", mapUrl:"https://maps.google.com/?q=Temple+Heritage+Structures+Amreli+Gujarat" }

  ]
},

bhavnagar: {
  id: "bhavnagar",
  name: "Bhavnagar",
  heroImage: "assets/images/cities/Bhavnagar.jpg",
  description: "Explore parks, temples, cafes, nature spots, waterfalls, adventure areas, heritage sites and beaches in Bhavnagar.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Victoria Park", type:"Park", image:"assets/images/bhavnagar/parks/victoria-park-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Victoria+Park+Bhavnagar+Gujarat" },
    { id:"p2", name:"Gaurishankar Lake Garden", type:"Park", image:"assets/images/bhavnagar/parks/gaurishankar-lake-garden-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Gaurishankar+Lake+Garden+Bhavnagar+Gujarat" },
    { id:"p3", name:"Hill Drive Garden", type:"Park", image:"assets/images/bhavnagar/parks/hill-drive-garden-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Hill+Drive+Garden+Bhavnagar+Gujarat" },
    { id:"p4", name:"Local Residential Gardens", type:"Park", image:"assets/images/bhavnagar/parks/local-residential-gardens-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Residential+Gardens+Bhavnagar+Gujarat" },

    // ================= TEMPLES =================
    { id:"t1", name:"Takhteshwar Temple", type:"Temple", image:"assets/images/bhavnagar/temples/takhteshwar-temple-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Takhteshwar+Temple+Bhavnagar+Gujarat" },
    { id:"t2", name:"Khodiyar Mata Temple", type:"Temple", image:"assets/images/bhavnagar/temples/khodiyar-mata-temple-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Khodiyar+Mata+Temple+Bhavnagar+Gujarat" },
    { id:"t3", name:"Ganga Deri Temple", type:"Temple", image:"assets/images/bhavnagar/temples/ganga-deri-temple-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Ganga+Deri+Temple+Bhavnagar+Gujarat" },
    { id:"t4", name:"Local Mahadev Temples", type:"Temple", image:"assets/images/bhavnagar/temples/local-mahadev-temples-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Local+Mahadev+Temples+Bhavnagar+Gujarat" },

    // ================= CAFES =================
    { id:"c1", name:"Rangoli The Delicacy Restaurant", type:"Cafe", image:"assets/images/bhavnagar/cafes/rangoli-delicacy-restaurant-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Rangoli+The+Delicacy+Restaurant+Bhavnagar+Gujarat" },
    { id:"c2", name:"Sankalp Restaurant", type:"Cafe", image:"assets/images/bhavnagar/cafes/sankalp-restaurant-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Sankalp+Restaurant+Bhavnagar+Gujarat" },
    { id:"c3", name:"Small Local Cafes (Waghawadi Road Area)", type:"Cafe", image:"assets/images/bhavnagar/cafes/local-cafes-waghawadi-road-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Local+Cafes+Waghawadi+Road+Bhavnagar+Gujarat" },
    { id:"c4", name:"Street Tea Cafes", type:"Cafe", image:"assets/images/bhavnagar/cafes/street-tea-cafes-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Street+Tea+Cafes+Bhavnagar+Gujarat" },

    // ================= HILL STATION =================
    { id:"h1", name:"Victoria Park Nature Trail", type:"Hill Station", image:"assets/images/bhavnagar/hillstation/victoria-park-nature-trail-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Victoria+Park+Nature+Trail+Bhavnagar+Gujarat" },
    { id:"h2", name:"Hill Drive Area", type:"Hill Station", image:"assets/images/bhavnagar/hillstation/hill-drive-area-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Hill+Drive+Area+Bhavnagar+Gujarat" },
    { id:"h3", name:"Small Forest Trails (Victoria Park Side)", type:"Hill Station", image:"assets/images/bhavnagar/hillstation/forest-trails-victoria-park-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Forest+Trails+Victoria+Park+Side+Bhavnagar" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Local Monsoon Streams (Victoria Park Area)", type:"Waterfall", image:"assets/images/bhavnagar/waterfalls/monsoon-streams-victoria-park-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Monsoon+Streams+Victoria+Park+Bhavnagar+Gujarat" },
    { id:"w2", name:"Small Rainfall Water Points (Hill Drive Side)", type:"Waterfall", image:"assets/images/bhavnagar/waterfalls/rainfall-water-points-hill-drive-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Rainfall+Water+Points+Hill+Drive+Bhavnagar+Gujarat" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Victoria Park Cycling Trails", type:"Adventure", image:"assets/images/bhavnagar/adventure/victoria-park-cycling-trails-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Victoria+Park+Cycling+Trails+Bhavnagar+Gujarat" },
    { id:"a2", name:"Hill Drive Road Riding", type:"Adventure", image:"assets/images/bhavnagar/adventure/hill-drive-road-riding-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Hill+Drive+Road+Riding+Bhavnagar+Gujarat" },
    { id:"a3", name:"Local Open Grounds Exploration", type:"Adventure", image:"assets/images/bhavnagar/adventure/local-open-grounds-exploration-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Local+Open+Grounds+Exploration+Bhavnagar+Gujarat" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Gandhi Smriti Museum", type:"Museum", image:"assets/images/bhavnagar/museums/gandhi-smriti-museum-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Gandhi+Smriti+Museum+Bhavnagar+Gujarat" },
    { id:"m2", name:"Barton Library and Museum", type:"Museum", image:"assets/images/bhavnagar/museums/barton-library-museum-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Barton+Library+and+Museum+Bhavnagar+Gujarat" },
    { id:"m3", name:"Old City (Pol Area)", type:"Museum", image:"assets/images/bhavnagar/museums/old-city-pol-area-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Old+City+Pol+Area+Bhavnagar+Gujarat" },

    // ================= BEACHES =================
    { id:"b1", name:"Nishkalank Mahadev Beach", type:"Beach", image:"assets/images/bhavnagar/beaches/nishkalank-mahadev-beach-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Nishkalank+Mahadev+Beach+Bhavnagar+Gujarat" },
    { id:"b2", name:"Koliyak Beach", type:"Beach", image:"assets/images/bhavnagar/beaches/koliyak-beach-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Koliyak+Beach+Bhavnagar+Gujarat" },
    { id:"b3", name:"Ghogha Coastline", type:"Beach", image:"assets/images/bhavnagar/beaches/ghogha-coastline-bhavnagar.jpg", mapUrl:"https://maps.google.com/?q=Ghogha+Coastline+Bhavnagar+Gujarat" }

  ]
},

botad: {
  id: "botad",
  name: "Botad",
  heroImage: "assets/images/cities/Botad.jpg",
  description: "Explore parks, temples, cafes, nature spots, waterfalls, adventure areas and heritage places in Botad.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Botad Town Garden", type:"Park", image:"assets/images/botad/parks/botad-town-garden.jpg", mapUrl:"https://maps.google.com/?q=Botad+Town+Garden+Botad+Gujarat" },
    { id:"p2", name:"Nagar Palika Garden", type:"Park", image:"assets/images/botad/parks/nagar-palika-garden-botad.jpg", mapUrl:"https://maps.google.com/?q=Nagar+Palika+Garden+Botad+Gujarat" },
    { id:"p3", name:"Lake Side Open Area", type:"Park", image:"assets/images/botad/parks/lake-side-open-area-botad.jpg", mapUrl:"https://maps.google.com/?q=Lake+Side+Open+Area+Botad+Gujarat" },
    { id:"p4", name:"Residential Colony Gardens", type:"Park", image:"assets/images/botad/parks/residential-colony-gardens-botad.jpg", mapUrl:"https://maps.google.com/?q=Residential+Colony+Gardens+Botad+Gujarat" },

    // ================= TEMPLES =================
    { id:"t1", name:"Salangpur Hanuman Temple", type:"Temple", image:"assets/images/botad/temples/salangpur-hanuman-temple-botad.jpg", mapUrl:"https://maps.google.com/?q=Salangpur+Hanuman+Temple+Botad+Gujarat" },
    { id:"t2", name:"Swaminarayan Temple Botad", type:"Temple", image:"assets/images/botad/temples/swaminarayan-temple-botad.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Botad+Gujarat" },
    { id:"t3", name:"Gayatri Mandir", type:"Temple", image:"assets/images/botad/temples/gayatri-mandir-botad.jpg", mapUrl:"https://maps.google.com/?q=Gayatri+Mandir+Botad+Gujarat" },
    { id:"t4", name:"Local Mahadev Temples", type:"Temple", image:"assets/images/botad/temples/local-mahadev-temples-botad.jpg", mapUrl:"https://maps.google.com/?q=Local+Mahadev+Temples+Botad+Gujarat" },
    { id:"t5", name:"Jain Derasar (Old Area)", type:"Temple", image:"assets/images/botad/temples/jain-derasar-old-area-botad.jpg", mapUrl:"https://maps.google.com/?q=Jain+Derasar+Old+Area+Botad+Gujarat" },

    // ================= CAFES =================
    { id:"c1", name:"Honest Restaurant", type:"Cafe", image:"assets/images/botad/cafes/honest-restaurant-botad.jpg", mapUrl:"https://maps.google.com/?q=Honest+Restaurant+Botad+Gujarat" },
    { id:"c2", name:"Sankalp Restaurant", type:"Cafe", image:"assets/images/botad/cafes/sankalp-restaurant-botad.jpg", mapUrl:"https://maps.google.com/?q=Sankalp+Restaurant+Botad+Gujarat" },
    { id:"c3", name:"Shreeji Cafe", type:"Cafe", image:"assets/images/botad/cafes/shreeji-cafe-botad.jpg", mapUrl:"https://maps.google.com/?q=Shreeji+Cafe+Botad+Gujarat" },
    { id:"c4", name:"Street Tea & Snack Cafes", type:"Cafe", image:"assets/images/botad/cafes/street-tea-snack-cafes-botad.jpg", mapUrl:"https://maps.google.com/?q=Street+Tea+Snack+Cafes+Botad+Gujarat" },

    // ================= HILL STATION =================
    { id:"h1", name:"Open Farmland Areas", type:"Hill Station", image:"assets/images/botad/hillstation/open-farmland-areas-botad.jpg", mapUrl:"https://maps.google.com/?q=Open+Farmland+Areas+Botad+Gujarat" },
    { id:"h2", name:"Village Side Green Fields", type:"Hill Station", image:"assets/images/botad/hillstation/village-side-green-fields-botad.jpg", mapUrl:"https://maps.google.com/?q=Village+Side+Green+Fields+Botad+Gujarat" },
    { id:"h3", name:"Small Lake Surroundings", type:"Hill Station", image:"assets/images/botad/hillstation/small-lake-surroundings-botad.jpg", mapUrl:"https://maps.google.com/?q=Small+Lake+Surroundings+Botad+Gujarat" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Local Rainwater Flow Areas", type:"Waterfall", image:"assets/images/botad/waterfalls/local-rainwater-flow-areas-botad.jpg", mapUrl:"https://maps.google.com/?q=Local+Rainwater+Flow+Areas+Botad+Gujarat" },
    { id:"w2", name:"Small Village Side Water Spots", type:"Waterfall", image:"assets/images/botad/waterfalls/small-village-water-spots-botad.jpg", mapUrl:"https://maps.google.com/?q=Small+Village+Side+Water+Spots+Botad+Gujarat" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Open Grounds Exploration", type:"Adventure", image:"assets/images/botad/adventure/open-grounds-exploration-botad.jpg", mapUrl:"https://maps.google.com/?q=Open+Grounds+Exploration+Botad+Gujarat" },
    { id:"a2", name:"Village Dirt Trails Cycling", type:"Adventure", image:"assets/images/botad/adventure/village-dirt-trails-cycling-botad.jpg", mapUrl:"https://maps.google.com/?q=Village+Dirt+Trails+Cycling+Botad+Gujarat" },
    { id:"a3", name:"Lake Side Walking Routes", type:"Adventure", image:"assets/images/botad/adventure/lake-side-walking-routes-botad.jpg", mapUrl:"https://maps.google.com/?q=Lake+Side+Walking+Routes+Botad+Gujarat" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Old Botad Town Area", type:"Museum", image:"assets/images/botad/museums/old-botad-town-area.jpg", mapUrl:"https://maps.google.com/?q=Old+Botad+Town+Area+Botad+Gujarat" },
    { id:"m2", name:"Darbar Area (Local)", type:"Museum", image:"assets/images/botad/museums/darbar-area-local-botad.jpg", mapUrl:"https://maps.google.com/?q=Darbar+Area+Botad+Gujarat" },
    { id:"m3", name:"Old Market Streets", type:"Museum", image:"assets/images/botad/museums/old-market-streets-botad.jpg", mapUrl:"https://maps.google.com/?q=Old+Market+Streets+Botad+Gujarat" }

  ]
},

girsomnath: {
  id: "girsomnath",
  name: "Gir Somnath",
  heroImage: "assets/images/cities/GS.jpg",
  description: "Explore parks, temples, cafes, nature spots, waterfalls, adventure areas, heritage sites and beaches in Gir Somnath.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Somnath Garden", type:"Park", image:"assets/images/girsomnath/parks/somnath-garden-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Somnath+Garden+Somnath+Gujarat" },
    { id:"p2", name:"Veraval Public Garden", type:"Park", image:"assets/images/girsomnath/parks/veraval-public-garden-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Public+Garden+Veraval+Gujarat" },
    { id:"p3", name:"Temple Side Green Lawns (Somnath)", type:"Park", image:"assets/images/girsomnath/parks/temple-side-green-lawns-somnath.jpg", mapUrl:"https://maps.google.com/?q=Temple+Side+Green+Lawns+Somnath+Gujarat" },
    { id:"p4", name:"Coastal Open Garden Areas (Veraval)", type:"Park", image:"assets/images/girsomnath/parks/coastal-open-garden-veraval.jpg", mapUrl:"https://maps.google.com/?q=Coastal+Open+Garden+Areas+Veraval+Gujarat" },

    // ================= TEMPLES =================
    { id:"t1", name:"Somnath Temple", type:"Temple", image:"assets/images/girsomnath/temples/somnath-temple-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Somnath+Temple+Somnath+Gujarat" },
    { id:"t2", name:"Bhalka Tirth", type:"Temple", image:"assets/images/girsomnath/temples/bhalka-tirth-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Bhalka+Tirth+Somnath+Gujarat" },
    { id:"t3", name:"Triveni Sangam Temple", type:"Temple", image:"assets/images/girsomnath/temples/triveni-sangam-temple-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Triveni+Sangam+Temple+Somnath+Gujarat" },
    { id:"t4", name:"Gita Mandir", type:"Temple", image:"assets/images/girsomnath/temples/gita-mandir-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Gita+Mandir+Somnath+Gujarat" },
    { id:"t5", name:"Suraj Mandir", type:"Temple", image:"assets/images/girsomnath/temples/suraj-mandir-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Suraj+Mandir+Somnath+Gujarat" },
    { id:"t6", name:"Local Mahadev Temples (Veraval)", type:"Temple", image:"assets/images/girsomnath/temples/local-mahadev-temples-veraval.jpg", mapUrl:"https://maps.google.com/?q=Local+Mahadev+Temples+Veraval+Gujarat" },

    // ================= CAFES =================
    { id:"c1", name:"Hotel Sun Plaza Restaurant (Veraval)", type:"Cafe", image:"assets/images/girsomnath/cafes/hotel-sun-plaza-restaurant-veraval.jpg", mapUrl:"https://maps.google.com/?q=Hotel+Sun+Plaza+Restaurant+Veraval+Gujarat" },
    { id:"c2", name:"Shubh Suvidha Restaurant (Somnath)", type:"Cafe", image:"assets/images/girsomnath/cafes/shubh-suvidha-restaurant-somnath.jpg", mapUrl:"https://maps.google.com/?q=Shubh+Suvidha+Restaurant+Somnath+Gujarat" },
    { id:"c3", name:"Sea View Cafes (Somnath Area)", type:"Cafe", image:"assets/images/girsomnath/cafes/sea-view-cafes-somnath.jpg", mapUrl:"https://maps.google.com/?q=Sea+View+Cafes+Somnath+Gujarat" },
    { id:"c4", name:"Local Tea & Snack Cafes (Veraval)", type:"Cafe", image:"assets/images/girsomnath/cafes/local-tea-snack-cafes-veraval.jpg", mapUrl:"https://maps.google.com/?q=Local+Tea+Snack+Cafes+Veraval+Gujarat" },

    // ================= HILL STATION / NATURE =================
    { id:"h1", name:"Coastal Cliff Walking Area (Somnath)", type:"Hill Station", image:"assets/images/girsomnath/hillstation/coastal-cliff-walking-somnath.jpg", mapUrl:"https://maps.google.com/?q=Coastal+Cliff+Walking+Area+Somnath+Gujarat" },
    { id:"h2", name:"Gir National Park", type:"Hill Station", image:"assets/images/girsomnath/hillstation/gir-national-park-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Gir+National+Park+Gujarat" },
    { id:"h3", name:"Hirakot Fort Area (Veraval)", type:"Hill Station", image:"assets/images/girsomnath/hillstation/hirakot-fort-area-veraval.jpg", mapUrl:"https://maps.google.com/?q=Hirakot+Fort+Area+Veraval+Gujarat" },
    { id:"h4", name:"Riverbank Areas (Triveni Side)", type:"Hill Station", image:"assets/images/girsomnath/hillstation/riverbank-areas-triveni-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Riverbank+Areas+Triveni+Somnath+Gujarat" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Monsoon Water Streams (Gir Region Side)", type:"Waterfall", image:"assets/images/girsomnath/waterfalls/monsoon-water-streams-gir-region.jpg", mapUrl:"https://maps.google.com/?q=Monsoon+Water+Streams+Gir+Region+Gujarat" },
    { id:"w2", name:"Small Rainwater Flow Areas (Veraval)", type:"Waterfall", image:"assets/images/girsomnath/waterfalls/small-rainwater-flow-veraval.jpg", mapUrl:"https://maps.google.com/?q=Small+Rainwater+Flow+Areas+Veraval+Gujarat" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Somnath Sea Walking Area", type:"Adventure", image:"assets/images/girsomnath/adventure/somnath-sea-walking-area.jpg", mapUrl:"https://maps.google.com/?q=Somnath+Sea+Walking+Area+Somnath+Gujarat" },
    { id:"a2", name:"Veraval Port Exploration Area", type:"Adventure", image:"assets/images/girsomnath/adventure/veraval-port-exploration-area.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Port+Exploration+Area+Veraval+Gujarat" },
    { id:"a3", name:"Gir Forest Safari (Nearby)", type:"Adventure", image:"assets/images/girsomnath/adventure/gir-forest-safari-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Gir+Forest+Safari+Gujarat" },
    { id:"a4", name:"Coastal Cycling Routes (Somnath)", type:"Adventure", image:"assets/images/girsomnath/adventure/coastal-cycling-routes-somnath.jpg", mapUrl:"https://maps.google.com/?q=Coastal+Cycling+Routes+Somnath+Gujarat" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Prabhas Patan Museum", type:"Museum", image:"assets/images/girsomnath/museums/prabhas-patan-museum-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Prabhas+Patan+Museum+Somnath+Gujarat" },
    { id:"m2", name:"Hirakot Fort", type:"Museum", image:"assets/images/girsomnath/museums/hirakot-fort-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Hirakot+Fort+Veraval+Gujarat" },
    { id:"m3", name:"Old Veraval Port Area", type:"Museum", image:"assets/images/girsomnath/museums/old-veraval-port-area.jpg", mapUrl:"https://maps.google.com/?q=Old+Veraval+Port+Area+Veraval+Gujarat" },
    { id:"m4", name:"Somnath Old Temple Ruins Area", type:"Museum", image:"assets/images/girsomnath/museums/somnath-old-temple-ruins-area.jpg", mapUrl:"https://maps.google.com/?q=Somnath+Old+Temple+Ruins+Area+Gujarat" },

    // ================= BEACHES =================
    { id:"b1", name:"Somnath Beach", type:"Beach", image:"assets/images/girsomnath/beaches/somnath-beach-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Somnath+Beach+Somnath+Gujarat" },
    { id:"b2", name:"Veraval Beach", type:"Beach", image:"assets/images/girsomnath/beaches/veraval-beach-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Beach+Veraval+Gujarat" },
    { id:"b3", name:"Chorwad Beach", type:"Beach", image:"assets/images/girsomnath/beaches/chorwad-beach-girsomnath.jpg", mapUrl:"https://maps.google.com/?q=Chorwad+Beach+Gujarat" },
    { id:"b4", name:"Hidden Coastal Stretches (Veraval–Somnath)", type:"Beach", image:"assets/images/girsomnath/beaches/hidden-coastal-stretches-veraval-somnath.jpg", mapUrl:"https://maps.google.com/?q=Hidden+Coastal+Stretches+Veraval+Somnath+Gujarat" }

  ]
},

porbandar: {
  id: "porbandar",
  name: "Porbandar",
  heroImage: "assets/images/cities/Porbandar.jpg",
  description: "Explore parks, temples, cafes, beaches, adventure spots and museums in Porbandar.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Bharat Mandir Garden – Porbandar", type:"Park", image:"assets/images/porbandar/parks/bharat-mandir-garden-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Bharat+Mandir+Garden+Porbandar+Gujarat" },
    { id:"p2", name:"Chowpatty Garden – Porbandar", type:"Park", image:"assets/images/porbandar/parks/chowpatty-garden-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Chowpatty+Garden+Porbandar+Gujarat" },
    { id:"p3", name:"Sudama Garden Area – Porbandar", type:"Park", image:"assets/images/porbandar/parks/sudama-garden-area-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Sudama+Garden+Area+Porbandar+Gujarat" },
    { id:"p4", name:"Local Residential Gardens – Porbandar", type:"Park", image:"assets/images/porbandar/parks/local-residential-gardens-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Local+Residential+Gardens+Porbandar+Gujarat" },

    // ================= TEMPLES =================
    { id:"t1", name:"Sudama Temple – Porbandar", type:"Temple", image:"assets/images/porbandar/temples/sudama-temple-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Sudama+Temple+Porbandar+Gujarat" },
    { id:"t2", name:"Bharat Mandir – Porbandar", type:"Temple", image:"assets/images/porbandar/temples/bharat-mandir-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Bharat+Mandir+Porbandar+Gujarat" },
    { id:"t3", name:"Gayatri Temple – Porbandar", type:"Temple", image:"assets/images/porbandar/temples/gayatri-temple-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Gayatri+Temple+Porbandar+Gujarat" },
    { id:"t4", name:"Local Mahadev Temples – Porbandar", type:"Temple", image:"assets/images/porbandar/temples/local-mahadev-temples-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Local+Mahadev+Temples+Porbandar+Gujarat" },
    { id:"t5", name:"Old Jain Derasar – Porbandar", type:"Temple", image:"assets/images/porbandar/temples/old-jain-derasar-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Old+Jain+Derasar+Porbandar+Gujarat" },

    // ================= CAFES =================
    { id:"c1", name:"Hotel Harmony Restaurant – Porbandar", type:"Cafe", image:"assets/images/porbandar/cafes/hotel-harmony-restaurant-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Hotel+Harmony+Restaurant+Porbandar+Gujarat" },
    { id:"c2", name:"Sankalp Restaurant – Porbandar", type:"Cafe", image:"assets/images/porbandar/cafes/sankalp-restaurant-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Sankalp+Restaurant+Porbandar+Gujarat" },
    { id:"c3", name:"Chowpatty Street Cafes – Porbandar", type:"Cafe", image:"assets/images/porbandar/cafes/chowpatty-street-cafes-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Chowpatty+Street+Cafes+Porbandar+Gujarat" },
    { id:"c4", name:"Small Local Cafes (City Area) – Porbandar", type:"Cafe", image:"assets/images/porbandar/cafes/small-local-cafes-city-area-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Small+Local+Cafes+City+Area+Porbandar+Gujarat" },

    // ================= HILL STATION =================
    { id:"h1", name:"Coastal Walking Area (Chowpatty Side) – Porbandar", type:"Hill Station", image:"assets/images/porbandar/hillstation/coastal-walking-area-chowpatty-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Coastal+Walking+Area+Chowpatty+Porbandar+Gujarat" },
    { id:"h2", name:"Creek Side Nature Areas – Porbandar", type:"Hill Station", image:"assets/images/porbandar/hillstation/creek-side-nature-areas-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Creek+Side+Nature+Areas+Porbandar+Gujarat" },
    { id:"h3", name:"Bird Watching Spots (Porbandar outskirts wetlands) – Porbandar", type:"Hill Station", image:"assets/images/porbandar/hillstation/bird-watching-spots-wetlands-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Bird+Watching+Spots+Wetlands+Porbandar+Gujarat" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Monsoon Drainage Flow Areas – Porbandar", type:"Waterfall", image:"assets/images/porbandar/waterfalls/monsoon-drainage-flow-areas-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Monsoon+Drainage+Flow+Areas+Porbandar+Gujarat" },
    { id:"w2", name:"Small Rainwater Falls (Outskirts Side) – Porbandar", type:"Waterfall", image:"assets/images/porbandar/waterfalls/small-rainwater-falls-outskirts-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Small+Rainwater+Falls+Outskirts+Porbandar+Gujarat" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Porbandar Chowpatty Beach – Porbandar", type:"Adventure", image:"assets/images/porbandar/adventure/porbandar-chowpatty-beach-adventure.jpg", mapUrl:"https://maps.google.com/?q=Porbandar+Chowpatty+Beach+Porbandar+Gujarat" },
    { id:"a2", name:"Coastal Cycling Routes – Porbandar", type:"Adventure", image:"assets/images/porbandar/adventure/coastal-cycling-routes-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Coastal+Cycling+Routes+Porbandar+Gujarat" },
    { id:"a3", name:"Open Ground Exploration (City Edge) – Porbandar", type:"Adventure", image:"assets/images/porbandar/adventure/open-ground-exploration-city-edge-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Open+Ground+Exploration+City+Edge+Porbandar+Gujarat" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Kirti Mandir – Porbandar", type:"Museum", image:"assets/images/porbandar/museums/kirti-mandir-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Kirti+Mandir+Porbandar+Gujarat" },
    { id:"m2", name:"Darbar Gadh – Porbandar", type:"Museum", image:"assets/images/porbandar/museums/darbar-gadh-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Darbar+Gadh+Porbandar+Gujarat" },
    { id:"m3", name:"Old City Streets – Porbandar", type:"Museum", image:"assets/images/porbandar/museums/old-city-streets-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Old+City+Streets+Porbandar+Gujarat" },
    { id:"m4", name:"Coastal Old Port Area – Porbandar", type:"Museum", image:"assets/images/porbandar/museums/coastal-old-port-area-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Coastal+Old+Port+Area+Porbandar+Gujarat" },

    // ================= BEACHES =================
    { id:"b1", name:"Porbandar Beach – Porbandar", type:"Beach", image:"assets/images/porbandar/beaches/porbandar-beach-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Porbandar+Beach+Porbandar+Gujarat" },
    { id:"b2", name:"Chowpatty Beach – Porbandar", type:"Beach", image:"assets/images/porbandar/beaches/chowpatty-beach-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Chowpatty+Beach+Porbandar+Gujarat" },
    { id:"b3", name:"Miyani Coastline – Porbandar", type:"Beach", image:"assets/images/porbandar/beaches/miyani-coastline-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Miyani+Coastline+Porbandar+Gujarat" },
    { id:"b4", name:"Tukda Gosa Beach – Porbandar", type:"Beach", image:"assets/images/porbandar/beaches/tukda-gosa-beach-porbandar.jpg", mapUrl:"https://maps.google.com/?q=Tukda+Gosa+Beach+Porbandar+Gujarat" }

  ]
},

surendranagar: {
  id: "surendranagar",
  name: "Surendranagar",
  heroImage: "assets/images/cities/Surendranagar.jpg",
  description: "Explore parks, temples, cafes, nature spots, adventure areas and museums in Surendranagar.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Surendranagar City Garden – Surendranagar", type:"Park", image:"assets/images/surendranagar/parks/surendranagar-city-garden.jpg", mapUrl:"https://maps.google.com/?q=Surendranagar+City+Garden+Surendranagar+Gujarat" },
    { id:"p2", name:"Rangoli Park Area – Surendranagar", type:"Park", image:"assets/images/surendranagar/parks/rangoli-park-area-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Rangoli+Park+Area+Surendranagar+Gujarat" },
    { id:"p3", name:"Nal Sarovar Road Green Stretch – Surendranagar", type:"Park", image:"assets/images/surendranagar/parks/nal-sarovar-road-green-stretch-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Nal+Sarovar+Road+Green+Stretch+Surendranagar+Gujarat" },
    { id:"p4", name:"Residential Colony Small Gardens – Surendranagar", type:"Park", image:"assets/images/surendranagar/parks/residential-colony-gardens-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Residential+Colony+Gardens+Surendranagar+Gujarat" },

    // ================= TEMPLES =================
    { id:"t1", name:"Chamunda Mata Temple – Surendranagar", type:"Temple", image:"assets/images/surendranagar/temples/chamunda-mata-temple-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Chamunda+Mata+Temple+Surendranagar+Gujarat" },
    { id:"t2", name:"Swaminarayan Temple Surendranagar – Surendranagar", type:"Temple", image:"assets/images/surendranagar/temples/swaminarayan-temple-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Surendranagar+Gujarat" },
    { id:"t3", name:"Hanuman Temple Surendranagar – Surendranagar", type:"Temple", image:"assets/images/surendranagar/temples/hanuman-temple-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Hanuman+Temple+Surendranagar+Gujarat" },
    { id:"t4", name:"Gayatri Mandir – Surendranagar", type:"Temple", image:"assets/images/surendranagar/temples/gayatri-mandir-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Gayatri+Mandir+Surendranagar+Gujarat" },
    { id:"t5", name:"Jain Derasar (Old City Area) – Surendranagar", type:"Temple", image:"assets/images/surendranagar/temples/jain-derasar-old-city-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Jain+Derasar+Old+City+Surendranagar+Gujarat" },
    { id:"t6", name:"Local Mahadev Temples – Surendranagar", type:"Temple", image:"assets/images/surendranagar/temples/local-mahadev-temples-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Local+Mahadev+Temples+Surendranagar+Gujarat" },

    // ================= CAFES =================
    { id:"c1", name:"Honest Restaurant – Surendranagar", type:"Cafe", image:"assets/images/surendranagar/cafes/honest-restaurant-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Honest+Restaurant+Surendranagar+Gujarat" },
    { id:"c2", name:"Sankalp Restaurant – Surendranagar", type:"Cafe", image:"assets/images/surendranagar/cafes/sankalp-restaurant-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Sankalp+Restaurant+Surendranagar+Gujarat" },
    { id:"c3", name:"Shreeji Cafe – Surendranagar", type:"Cafe", image:"assets/images/surendranagar/cafes/shreeji-cafe-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Shreeji+Cafe+Surendranagar+Gujarat" },
    { id:"c4", name:"Street Tea Cafes (Main Market Area) – Surendranagar", type:"Cafe", image:"assets/images/surendranagar/cafes/street-tea-cafes-main-market-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Street+Tea+Cafes+Main+Market+Surendranagar+Gujarat" },

    // ================= HILL STATION =================
    { id:"h1", name:"Nal Sarovar Route Green Belt – Surendranagar", type:"Hill Station", image:"assets/images/surendranagar/hillstation/nal-sarovar-route-green-belt-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Nal+Sarovar+Route+Green+Belt+Surendranagar+Gujarat" },
    { id:"h2", name:"Lake Side Open Areas – Surendranagar", type:"Hill Station", image:"assets/images/surendranagar/hillstation/lake-side-open-areas-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Lake+Side+Open+Areas+Surendranagar+Gujarat" },
    { id:"h3", name:"Village Farmland Views – Surendranagar", type:"Hill Station", image:"assets/images/surendranagar/hillstation/village-farmland-views-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Village+Farmland+Views+Surendranagar+Gujarat" },
    { id:"h4", name:"Little Desert Edge Views (towards Rann side) – Surendranagar", type:"Hill Station", image:"assets/images/surendranagar/hillstation/little-desert-edge-views-rann-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Little+Desert+Edge+Views+Rann+Side+Surendranagar+Gujarat" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Monsoon Drain Flow Areas – Surendranagar", type:"Waterfall", image:"assets/images/surendranagar/waterfalls/monsoon-drain-flow-areas-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Monsoon+Drain+Flow+Areas+Surendranagar+Gujarat" },
    { id:"w2", name:"Rural Rainwater Cascades – Surendranagar", type:"Waterfall", image:"assets/images/surendranagar/waterfalls/rural-rainwater-cascades-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Rural+Rainwater+Cascades+Surendranagar+Gujarat" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Open Desert Edge Cycling – Surendranagar", type:"Adventure", image:"assets/images/surendranagar/adventure/open-desert-edge-cycling-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Open+Desert+Edge+Cycling+Surendranagar+Gujarat" },
    { id:"a2", name:"Village Dirt Road Exploration – Surendranagar", type:"Adventure", image:"assets/images/surendranagar/adventure/village-dirt-road-exploration-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Village+Dirt+Road+Exploration+Surendranagar+Gujarat" },
    { id:"a3", name:"Lake Side Walking Trails – Surendranagar", type:"Adventure", image:"assets/images/surendranagar/adventure/lake-side-walking-trails-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Lake+Side+Walking+Trails+Surendranagar+Gujarat" },
    { id:"a4", name:"Highway Night Drives – Surendranagar", type:"Adventure", image:"assets/images/surendranagar/adventure/highway-night-drives-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Highway+Night+Drives+Surendranagar+Gujarat" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Old Surendranagar Town Area – Surendranagar", type:"Museum", image:"assets/images/surendranagar/museums/old-surendranagar-town-area.jpg", mapUrl:"https://maps.google.com/?q=Old+Surendranagar+Town+Area+Surendranagar+Gujarat" },
    { id:"m2", name:"Darbargadh Area – Surendranagar", type:"Museum", image:"assets/images/surendranagar/museums/darbargadh-area-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Darbargadh+Area+Surendranagar+Gujarat" },
    { id:"m3", name:"Old Market Streets – Surendranagar", type:"Museum", image:"assets/images/surendranagar/museums/old-market-streets-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Old+Market+Streets+Surendranagar+Gujarat" },
    { id:"m4", name:"Railway Heritage Area – Surendranagar", type:"Museum", image:"assets/images/surendranagar/museums/railway-heritage-area-surendranagar.jpg", mapUrl:"https://maps.google.com/?q=Railway+Heritage+Area+Surendranagar+Gujarat" }

  ]
},

aravalli: {
  id: "aravalli",
  name: "Aravalli",
  heroImage: "assets/images/cities/Aravali.webp",
  description: "Explore parks, temples, cafes, adventure spots and museums in Aravalli.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Modasa Town Garden", type:"Park", image:"assets/images/aravalli/parks/modasa-town-garden.jpg", mapUrl:"https://maps.google.com/?q=Modasa+Town+Garden" },
    { id:"p2", name:"Shamlaji Road Green Stretch (Modasa)", type:"Park", image:"assets/images/aravalli/parks/shamlaji-road-green.jpg", mapUrl:"https://maps.google.com/?q=Shamlaji+Road+Modasa" },
    { id:"p3", name:"Local Lake Area (Modasa)", type:"Park", image:"assets/images/aravalli/parks/modasa-lake.jpg", mapUrl:"https://maps.google.com/?q=Modasa+Lake" },

    // ================= TEMPLES =================
    { id:"t1", name:"Swaminarayan Temple (Modasa)", type:"Temple", image:"assets/images/aravalli/temples/swaminarayan-modasa.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Modasa" },
    { id:"t2", name:"Gayatri Mandir (Modasa)", type:"Temple", image:"assets/images/aravalli/temples/gayatri-mandir.jpg", mapUrl:"https://maps.google.com/?q=Gayatri+Mandir+Modasa" },
    { id:"t3", name:"Mahadev Temple (Modasa)", type:"Temple", image:"assets/images/aravalli/temples/mahadev-modasa.jpg", mapUrl:"https://maps.google.com/?q=Mahadev+Temple+Modasa" },
    { id:"t4", name:"Jain Derasar (Modasa)", type:"Temple", image:"assets/images/aravalli/temples/jain-derasar.jpg", mapUrl:"https://maps.google.com/?q=Jain+Derasar+Modasa" },

    // ================= CAFES =================
    { id:"c1", name:"Honest Restaurant (Modasa)", type:"Cafe", image:"assets/images/aravalli/cafes/honest-restaurant.jpg", mapUrl:"https://maps.google.com/?q=Honest+Restaurant+Modasa" },
    { id:"c2", name:"Local Street Cafes (Modasa)", type:"Cafe", image:"assets/images/aravalli/cafes/street-cafes.jpg", mapUrl:"https://maps.google.com/?q=Street+Food+Modasa" },
    { id:"c3", name:"Shreeji Cafe (Modasa)", type:"Cafe", image:"assets/images/aravalli/cafes/shreeji-cafe.jpg", mapUrl:"https://maps.google.com/?q=Shreeji+Cafe+Modasa" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Open Grounds & Outskirts Trails (Modasa)", type:"Adventure", image:"assets/images/aravalli/adventure/outskirts-trails.jpg", mapUrl:"https://maps.google.com/?q=Modasa+Outskirts" },
    { id:"a2", name:"Lake Side Walk Areas (Modasa)", type:"Adventure", image:"assets/images/aravalli/adventure/lake-walk.jpg", mapUrl:"https://maps.google.com/?q=Modasa+Lake+Walk" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Old Modasa Town Area", type:"Museum", image:"assets/images/aravalli/museums/old-town.jpg", mapUrl:"https://maps.google.com/?q=Old+Modasa+Town" }

  ]
},

Sabarkantha: {
  id: "Sabarkantha",
  name: "Sabarkantha",
  heroImage: "assets/images/cities/Sabarkantha.jpg",
  description: "Explore parks, temples, cafes, adventure spots and museums in Sabarkantha.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Indira Gandhi Garden (Himatnagar)", type:"Park", image:"assets/images/sabarkantha/parks/indira-garden.jpg", mapUrl:"https://maps.google.com/?q=Indira+Gandhi+Garden+Himatnagar" },
    { id:"p2", name:"Himmat Van Area (Himatnagar)", type:"Park", image:"assets/images/sabarkantha/parks/himmat-van.jpg", mapUrl:"https://maps.google.com/?q=Himmat+Van+Himatnagar" },
    { id:"p3", name:"Local Lake Area (Prantij)", type:"Park", image:"assets/images/sabarkantha/parks/prantij-lake.jpg", mapUrl:"https://maps.google.com/?q=Prantij+Lake" },

    // ================= TEMPLES =================
    { id:"t1", name:"Swaminarayan Temple (Himatnagar)", type:"Temple", image:"assets/images/sabarkantha/temples/swaminarayan-himatnagar.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Himatnagar" },
    { id:"t2", name:"Gayatri Mandir (Himatnagar)", type:"Temple", image:"assets/images/sabarkantha/temples/gayatri-mandir.jpg", mapUrl:"https://maps.google.com/?q=Gayatri+Mandir+Himatnagar" },
    { id:"t3", name:"Local Mahadev Temple (Prantij)", type:"Temple", image:"assets/images/sabarkantha/temples/mahadev-prantij.jpg", mapUrl:"https://maps.google.com/?q=Mahadev+Temple+Prantij" },
    { id:"t4", name:"Jain Derasar (Himatnagar)", type:"Temple", image:"assets/images/sabarkantha/temples/jain-derasar.jpg", mapUrl:"https://maps.google.com/?q=Jain+Derasar+Himatnagar" },

    // ================= CAFES =================
    { id:"c1", name:"Cafe Coffee Day (Himatnagar)", type:"Cafe", image:"assets/images/sabarkantha/cafes/cafe-coffee-day.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Himatnagar" },
    { id:"c2", name:"Honest Restaurant (Himatnagar)", type:"Cafe", image:"assets/images/sabarkantha/cafes/honest-restaurant.jpg", mapUrl:"https://maps.google.com/?q=Honest+Restaurant+Himatnagar" },
    { id:"c3", name:"Local Tea Cafes (Prantij)", type:"Cafe", image:"assets/images/sabarkantha/cafes/tea-cafes.jpg", mapUrl:"https://maps.google.com/?q=Tea+Stalls+Prantij" },
    { id:"c4", name:"Small Street Cafes (Himatnagar)", type:"Cafe", image:"assets/images/sabarkantha/cafes/street-cafes.jpg", mapUrl:"https://maps.google.com/?q=Street+Food+Himatnagar" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Himmat Van Walking Trails (Himatnagar)", type:"Adventure", image:"assets/images/sabarkantha/adventure/himmat-van-trails.jpg", mapUrl:"https://maps.google.com/?q=Himmat+Van+Walking+Trails" },
    { id:"a2", name:"Open Grounds & Riverside Areas (Prantij)", type:"Adventure", image:"assets/images/sabarkantha/adventure/riverside-prantij.jpg", mapUrl:"https://maps.google.com/?q=Prantij+Riverside" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Idar Gate (Himatnagar)", type:"Museum", image:"assets/images/sabarkantha/museums/idar-gate.jpg", mapUrl:"https://maps.google.com/?q=Idar+Gate+Himatnagar" },
    { id:"m2", name:"Old Town Structures (Himatnagar)", type:"Museum", image:"assets/images/sabarkantha/museums/old-town.jpg", mapUrl:"https://maps.google.com/?q=Old+Town+Himatnagar" }

  ]
},

Patan: {
  id: "Patan",
  name: "Patan",
  heroImage: "assets/images/cities/Patan.jpg",
  description: "Explore parks, temples, cafes, adventure spots and museums in Patan.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Sahastralinga Talav", type:"Park", image:"assets/images/patan/parks/sahastralinga-talav.jpg", mapUrl:"https://maps.google.com/?q=Sahastralinga+Talav+Patan" },
    { id:"p2", name:"Patan City Garden", type:"Park", image:"assets/images/patan/parks/patan-city-garden.jpg", mapUrl:"https://maps.google.com/?q=Patan+City+Garden" },
    { id:"p3", name:"Saraswati River Ghats (Siddhpur)", type:"Park", image:"assets/images/patan/parks/saraswati-ghats.jpg", mapUrl:"https://maps.google.com/?q=Saraswati+River+Ghats+Siddhpur" },

    // ================= TEMPLES =================
    { id:"t1", name:"Rani ki Vav", type:"Temple", image:"assets/images/patan/temples/rani-ki-vav.jpg", mapUrl:"https://maps.google.com/?q=Rani+ki+Vav+Patan" },
    { id:"t2", name:"Panchasara Parshwanath Jain Temple", type:"Temple", image:"assets/images/patan/temples/panchasara-jain.jpg", mapUrl:"https://maps.google.com/?q=Panchasara+Parshwanath+Jain+Temple+Patan" },
    { id:"t3", name:"Brahma Temple (Siddhpur)", type:"Temple", image:"assets/images/patan/temples/brahma-temple.jpg", mapUrl:"https://maps.google.com/?q=Brahma+Temple+Siddhpur" },
    { id:"t4", name:"Siddheshwar Mahadev Temple (Siddhpur)", type:"Temple", image:"assets/images/patan/temples/siddheshwar-mahadev.jpg", mapUrl:"https://maps.google.com/?q=Siddheshwar+Mahadev+Temple+Siddhpur" },

    // ================= CAFES =================
    { id:"c1", name:"Honest Restaurant", type:"Cafe", image:"assets/images/patan/cafes/honest-restaurant.jpg", mapUrl:"https://maps.google.com/?q=Honest+Restaurant+Patan" },
    { id:"c2", name:"Local Tea & Snack Cafes (Siddhpur)", type:"Cafe", image:"assets/images/patan/cafes/tea-snacks.jpg", mapUrl:"https://maps.google.com/?q=Tea+Snacks+Siddhpur" },
    { id:"c3", name:"Shreeji Dining & Cafe", type:"Cafe", image:"assets/images/patan/cafes/shreeji-cafe.jpg", mapUrl:"https://maps.google.com/?q=Shreeji+Dining+Patan" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Sahastralinga Talav Open Area", type:"Adventure", image:"assets/images/patan/adventure/talav-open-area.jpg", mapUrl:"https://maps.google.com/?q=Sahastralinga+Talav+Patan" },
    { id:"a2", name:"Saraswati Riverbanks (Siddhpur)", type:"Adventure", image:"assets/images/patan/adventure/saraswati-riverbank.jpg", mapUrl:"https://maps.google.com/?q=Saraswati+Riverbank+Siddhpur" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Patan Patola Heritage Museum", type:"Museum", image:"assets/images/patan/museums/patola-museum.jpg", mapUrl:"https://maps.google.com/?q=Patan+Patola+Heritage+Museum" },
    { id:"m2", name:"Bohra Havelis (Siddhpur)", type:"Museum", image:"assets/images/patan/museums/bohra-havelis.jpg", mapUrl:"https://maps.google.com/?q=Bohra+Havelis+Siddhpur" }

  ]
},

Mehsana: {
  id: "Mehsana",
  name: "Mehsana",
  heroImage: "assets/images/cities/Mehsana.jpg",
  description: "Explore parks, temples, cafes, adventure spots and museums in Mehsana.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Tirupati Nature Park – Mehsana City", type:"Park", image:"assets/images/mehsana/parks/tirupati-nature-park.jpg", mapUrl:"https://maps.google.com/?q=Tirupati+Nature+Park+Mehsana" },
    { id:"p2", name:"Sanskar Garden – Mehsana City", type:"Park", image:"assets/images/mehsana/parks/sanskar-garden.jpg", mapUrl:"https://maps.google.com/?q=Sanskar+Garden+Mehsana" },
    { id:"p3", name:"Visnagar Town Garden – Visnagar", type:"Park", image:"assets/images/mehsana/parks/visnagar-garden.jpg", mapUrl:"https://maps.google.com/?q=Visnagar+Town+Garden" },
    { id:"p4", name:"Dudhsagar Dairy Green Area – Mehsana City", type:"Park", image:"assets/images/mehsana/parks/dudhsagar-dairy.jpg", mapUrl:"https://maps.google.com/?q=Dudhsagar+Dairy+Mehsana" },

    // ================= TEMPLES =================
    { id:"t1", name:"Simandhar Swami Jain Temple – Mehsana City", type:"Temple", image:"assets/images/mehsana/temples/simandhar-swami.jpg", mapUrl:"https://maps.google.com/?q=Simandhar+Swami+Jain+Temple+Mehsana" },
    { id:"t2", name:"Hatkeshwar Mahadev Temple – Visnagar", type:"Temple", image:"assets/images/mehsana/temples/hatkeshwar-mahadev.jpg", mapUrl:"https://maps.google.com/?q=Hatkeshwar+Mahadev+Temple+Visnagar" },
    { id:"t3", name:"Bahuchar Mata Temple (Local Shrine) – Mehsana City", type:"Temple", image:"assets/images/mehsana/temples/bahuchar-mata.jpg", mapUrl:"https://maps.google.com/?q=Bahuchar+Mata+Temple+Mehsana" },
    { id:"t4", name:"Swaminarayan Mandir – Visnagar", type:"Temple", image:"assets/images/mehsana/temples/swaminarayan-visnagar.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Mandir+Visnagar" },

    // ================= CAFES =================
    { id:"c1", name:"Cafe Coffee Day – Mehsana City", type:"Cafe", image:"assets/images/mehsana/cafes/cafe-coffee-day.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Mehsana" },
    { id:"c2", name:"Honest Cafe – Mehsana City", type:"Cafe", image:"assets/images/mehsana/cafes/honest-cafe.jpg", mapUrl:"https://maps.google.com/?q=Honest+Cafe+Mehsana" },
    { id:"c3", name:"Local Street Cafes – Visnagar", type:"Cafe", image:"assets/images/mehsana/cafes/street-cafes.jpg", mapUrl:"https://maps.google.com/?q=Street+Food+Visnagar" },
    { id:"c4", name:"Shreeji Cafe – Mehsana City", type:"Cafe", image:"assets/images/mehsana/cafes/shreeji-cafe.jpg", mapUrl:"https://maps.google.com/?q=Shreeji+Cafe+Mehsana" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Tirupati Nature Park Activity Area – Mehsana City", type:"Adventure", image:"assets/images/mehsana/adventure/tirupati-activity.jpg", mapUrl:"https://maps.google.com/?q=Tirupati+Nature+Park+Mehsana" },
    { id:"a2", name:"Open Grounds & Lake Areas – Visnagar", type:"Adventure", image:"assets/images/mehsana/adventure/visnagar-lake.jpg", mapUrl:"https://maps.google.com/?q=Visnagar+Lake" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Kirti Toran – Visnagar", type:"Museum", image:"assets/images/mehsana/museums/kirti-toran.jpg", mapUrl:"https://maps.google.com/?q=Kirti+Toran+Visnagar" },
    { id:"m2", name:"Rajmahal Area (Old Structures) – Mehsana City", type:"Museum", image:"assets/images/mehsana/museums/rajmahal-area.jpg", mapUrl:"https://maps.google.com/?q=Rajmahal+Area+Mehsana" }

  ]
},

jamnagar: {
  id: "jamnagar",
  name: "Jamnagar",
  heroImage: "assets/images/cities/Jamnagar.webp",
  description: "Explore parks, temples, cafes, beaches, waterfalls, adventure spots and museums in Jamnagar.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Ranmal Lake Park - Jamnagar", type:"Park", image:"assets/images/jamnagar/parks/ranmal-lake.jpg", mapUrl:"https://maps.google.com/?q=Ranmal+Lake+Jamnagar" },
    { id:"p2", name:"Joggers Park - Jamnagar", type:"Park", image:"assets/images/jamnagar/parks/joggers-park.jpg", mapUrl:"https://maps.google.com/?q=Joggers+Park+Jamnagar" },
    { id:"p3", name:"Azad Park - Jamnagar", type:"Park", image:"assets/images/jamnagar/parks/azad-park.jpg", mapUrl:"https://maps.google.com/?q=Azad+Park+Jamnagar" },
    { id:"p4", name:"Lakhota Lake Backside Garden - Jamnagar", type:"Park", image:"assets/images/jamnagar/parks/lakhota-backside.jpg", mapUrl:"https://maps.google.com/?q=Lakhota+Lake+Jamnagar" },
    { id:"p5", name:"Patel Colony Small Garden - Jamnagar", type:"Park", image:"assets/images/jamnagar/parks/patel-colony.jpg", mapUrl:"https://maps.google.com/?q=Patel+Colony+Garden+Jamnagar" },
    { id:"p6", name:"Ranjit Sagar Dam Garden Area - Jamnagar", type:"Park", image:"assets/images/jamnagar/parks/ranjit-sagar.jpg", mapUrl:"https://maps.google.com/?q=Ranjit+Sagar+Dam+Jamnagar" },

    // ================= TEMPLES =================
    { id:"t1", name:"Bala Hanuman Temple - Jamnagar", type:"Temple", image:"assets/images/jamnagar/temples/bala-hanuman.jpg", mapUrl:"https://maps.google.com/?q=Bala+Hanuman+Temple+Jamnagar" },
    { id:"t2", name:"BAPS Shri Swaminarayan Mandir - Jamnagar", type:"Temple", image:"assets/images/jamnagar/temples/baps-swaminarayan.jpg", mapUrl:"https://maps.google.com/?q=BAPS+Swaminarayan+Mandir+Jamnagar" },
    { id:"t3", name:"Trimandir - Jamnagar", type:"Temple", image:"assets/images/jamnagar/temples/trimandir.jpg", mapUrl:"https://maps.google.com/?q=Trimandir+Jamnagar" },
    { id:"t4", name:"Local Mahadev Temples - Jamnagar", type:"Temple", image:"assets/images/jamnagar/temples/mahadev.jpg", mapUrl:"https://maps.google.com/?q=Mahadev+Temple+Jamnagar" },
    { id:"t5", name:"Siddhnath Mahadev Temple - Jamnagar", type:"Temple", image:"assets/images/jamnagar/temples/siddhnath.jpg", mapUrl:"https://maps.google.com/?q=Siddhnath+Mahadev+Jamnagar" },
    { id:"t6", name:"Jadeshwar Mahadev Temple - Jamnagar", type:"Temple", image:"assets/images/jamnagar/temples/jadeshwar.jpg", mapUrl:"https://maps.google.com/?q=Jadeshwar+Mahadev+Jamnagar" },
    { id:"t7", name:"Old Jain Derasar (Darbargadh Area) - Jamnagar", type:"Temple", image:"assets/images/jamnagar/temples/jain-derasar.jpg", mapUrl:"https://maps.google.com/?q=Jain+Derasar+Darbargadh+Jamnagar" },
    { id:"t8", name:"Ramapir Temple (Local Area) - Jamnagar", type:"Temple", image:"assets/images/jamnagar/temples/ramapir.jpg", mapUrl:"https://maps.google.com/?q=Ramapir+Temple+Jamnagar" },

    // ================= CAFES =================
    { id:"c1", name:"Jam Sham Rooftop Cafe - Jamnagar", type:"Cafe", image:"assets/images/jamnagar/cafes/jamsham.jpg", mapUrl:"https://maps.google.com/?q=Jam+Sham+Cafe+Jamnagar" },
    { id:"c2", name:"Special's Restro & Cafe - Jamnagar", type:"Cafe", image:"assets/images/jamnagar/cafes/specials-cafe.jpg", mapUrl:"https://maps.google.com/?q=Specials+Restro+Cafe+Jamnagar" },
    { id:"c3", name:"Cafe Coffee Day - Jamnagar", type:"Cafe", image:"assets/images/jamnagar/cafes/cafe-coffee-day.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Jamnagar" },
    { id:"c4", name:"Local Rooftop Cafes - Jamnagar", type:"Cafe", image:"assets/images/jamnagar/cafes/rooftop.jpg", mapUrl:"https://maps.google.com/?q=Rooftop+Cafe+Jamnagar" },
    { id:"c5", name:"Local Street Tea Cafes (Town Area) - Jamnagar", type:"Cafe", image:"assets/images/jamnagar/cafes/tea.jpg", mapUrl:"https://maps.google.com/?q=Tea+Stalls+Jamnagar" },
    { id:"c6", name:"Small Rooftop Cafes (Patel Colony Area) - Jamnagar", type:"Cafe", image:"assets/images/jamnagar/cafes/patel-rooftop.jpg", mapUrl:"https://maps.google.com/?q=Patel+Colony+Cafe+Jamnagar" },
    { id:"c7", name:"College Area Snack Cafes - Jamnagar", type:"Cafe", image:"assets/images/jamnagar/cafes/college-snacks.jpg", mapUrl:"https://maps.google.com/?q=College+Area+Cafe+Jamnagar" },

    // ================= HILL =================
    { id:"h1", name:"Abhapara Hill - Jamnagar", type:"Hill Station", image:"assets/images/jamnagar/hills/abhapara.jpg", mapUrl:"https://maps.google.com/?q=Abhapara+Hill+Jamnagar" },
    { id:"h2", name:"Barda Hills - Jamnagar", type:"Hill Station", image:"assets/images/jamnagar/hills/barda.jpg", mapUrl:"https://maps.google.com/?q=Barda+Hills+Jamnagar" },
    { id:"h3", name:"Khijadiya Bird Sanctuary - Jamnagar", type:"Hill Station", image:"assets/images/jamnagar/hills/khijadiya.jpg", mapUrl:"https://maps.google.com/?q=Khijadiya+Bird+Sanctuary" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Khad Khambhaliya Waterfall - Jamnagar", type:"Waterfall", image:"assets/images/jamnagar/waterfalls/khad.jpg", mapUrl:"https://maps.google.com/?q=Khad+Khambhaliya+Waterfall" },
    { id:"w2", name:"Ravashiya Waterfall - Jamnagar", type:"Waterfall", image:"assets/images/jamnagar/waterfalls/ravashiya.jpg", mapUrl:"https://maps.google.com/?q=Ravashiya+Waterfall" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Marine National Park - Jamnagar", type:"Adventure", image:"assets/images/jamnagar/adventure/marine-park.jpg", mapUrl:"https://maps.google.com/?q=Marine+National+Park+Jamnagar" },
    { id:"a2", name:"Infinite Adventure Park - Jamnagar", type:"Adventure", image:"assets/images/jamnagar/adventure/infinite-park.jpg", mapUrl:"https://maps.google.com/?q=Infinite+Adventure+Park+Jamnagar" },
    { id:"a3", name:"Narara Reef Walking Zones - Jamnagar", type:"Adventure", image:"assets/images/jamnagar/adventure/narara.jpg", mapUrl:"https://maps.google.com/?q=Narara+Reef+Jamnagar" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Lakhota Palace and Museum - Jamnagar", type:"Museum", image:"assets/images/jamnagar/museums/lakhota.jpg", mapUrl:"https://maps.google.com/?q=Lakhota+Palace+Jamnagar" },
    { id:"m2", name:"Pratap Vilas Palace - Jamnagar", type:"Museum", image:"assets/images/jamnagar/museums/pratap-vilas.jpg", mapUrl:"https://maps.google.com/?q=Pratap+Vilas+Palace" },

    // ================= BEACHES =================
    { id:"b1", name:"Balachadi Beach - Jamnagar", type:"Beach", image:"assets/images/jamnagar/beaches/balachadi.jpg", mapUrl:"https://maps.google.com/?q=Balachadi+Beach" },
    { id:"b2", name:"Narara Marine Beach - Jamnagar", type:"Beach", image:"assets/images/jamnagar/beaches/narara.jpg", mapUrl:"https://maps.google.com/?q=Narara+Beach+Jamnagar" },
    { id:"b3", name:"Rozi Island Coast - Jamnagar", type:"Beach", image:"assets/images/jamnagar/beaches/rozi.jpg", mapUrl:"https://maps.google.com/?q=Rozi+Island+Jamnagar" }

  ]
},

kutch: {
  id: "kutch",
  name: "Kutch",
  heroImage: "assets/images/cities/Kutch.jfif",
  description: "Explore parks, temples, cafes, beaches, desert landscapes, adventure spots and museums in Kutch.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Hill Garden - Bhuj", type:"Park", image:"assets/images/kutch/parks/hill-garden.jpg", mapUrl:"https://maps.google.com/?q=Hill+Garden+Bhuj" },
    { id:"p2", name:"Hamirsar Lake Garden - Bhuj", type:"Park", image:"assets/images/kutch/parks/hamirsar-lake.jpg", mapUrl:"https://maps.google.com/?q=Hamirsar+Lake+Bhuj" },
    { id:"p3", name:"Mandvi Beach Garden - Mandvi", type:"Park", image:"assets/images/kutch/parks/mandvi-beach-garden.jpg", mapUrl:"https://maps.google.com/?q=Mandvi+Beach+Garden" },
    { id:"p4", name:"Lake Backside Open Area - Bhuj", type:"Park", image:"assets/images/kutch/parks/lake-backside.jpg", mapUrl:"https://maps.google.com/?q=Hamirsar+Lake+Backside" },
    { id:"p5", name:"Residential Gardens - Mandvi", type:"Park", image:"assets/images/kutch/parks/residential-garden.jpg", mapUrl:"https://maps.google.com/?q=Mandvi+Residential+Garden" },

    // ================= TEMPLES =================
    { id:"t1", name:"Swaminarayan Temple Bhuj - Bhuj", type:"Temple", image:"assets/images/kutch/temples/swaminarayan-bhuj.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Bhuj" },
    { id:"t2", name:"Aina Mahal Temple Area - Bhuj", type:"Temple", image:"assets/images/kutch/temples/aina-mahal-temple.jpg", mapUrl:"https://maps.google.com/?q=Aina+Mahal+Bhuj" },
    { id:"t3", name:"Rukmavati River Temple - Mandvi", type:"Temple", image:"assets/images/kutch/temples/rukmavati-temple.jpg", mapUrl:"https://maps.google.com/?q=Rukmavati+River+Mandvi" },
    { id:"t4", name:"Bhadreshwar Jain Temple - Bhuj", type:"Temple", image:"assets/images/kutch/temples/bhadreshwar.jpg", mapUrl:"https://maps.google.com/?q=Bhadreshwar+Jain+Temple" },
    { id:"t5", name:"Local Mahadev Temples - Bhuj", type:"Temple", image:"assets/images/kutch/temples/mahadev.jpg", mapUrl:"https://maps.google.com/?q=Mahadev+Temple+Bhuj" },
    { id:"t6", name:"Jain Derasar (Old Bhuj Area) - Bhuj", type:"Temple", image:"assets/images/kutch/temples/jain-derasar.jpg", mapUrl:"https://maps.google.com/?q=Jain+Derasar+Bhuj" },

    // ================= CAFES =================
    { id:"c1", name:"Sankalp Restaurant Bhuj - Bhuj", type:"Cafe", image:"assets/images/kutch/cafes/sankalp.jpg", mapUrl:"https://maps.google.com/?q=Sankalp+Restaurant+Bhuj" },
    { id:"c2", name:"Hotel Prince Restaurant - Bhuj", type:"Cafe", image:"assets/images/kutch/cafes/prince.jpg", mapUrl:"https://maps.google.com/?q=Hotel+Prince+Bhuj" },
    { id:"c3", name:"Mandvi Beach Shack Cafes - Mandvi", type:"Cafe", image:"assets/images/kutch/cafes/mandvi-shacks.jpg", mapUrl:"https://maps.google.com/?q=Mandvi+Beach+Cafe" },
    { id:"c4", name:"Local Tea Cafes (Bhuj Market Area) - Bhuj", type:"Cafe", image:"assets/images/kutch/cafes/tea.jpg", mapUrl:"https://maps.google.com/?q=Tea+Stalls+Bhuj" },
    { id:"c5", name:"Small Rooftop Cafes - Mandvi", type:"Cafe", image:"assets/images/kutch/cafes/rooftop.jpg", mapUrl:"https://maps.google.com/?q=Rooftop+Cafe+Mandvi" },

    // ================= HILL =================
    { id:"h1", name:"Kala Dungar - Bhuj", type:"Hill Station", image:"assets/images/kutch/hills/kala-dungar.jpg", mapUrl:"https://maps.google.com/?q=Kala+Dungar+Kutch" },
    { id:"h2", name:"White Rann of Kutch - Bhuj", type:"Hill Station", image:"assets/images/kutch/hills/white-rann.jpg", mapUrl:"https://maps.google.com/?q=White+Rann+of+Kutch" },
    { id:"h3", name:"Hamirsar Lake - Bhuj", type:"Hill Station", image:"assets/images/kutch/hills/hamirsar.jpg", mapUrl:"https://maps.google.com/?q=Hamirsar+Lake+Bhuj" },
    { id:"h4", name:"Rukmavati River Front - Mandvi", type:"Hill Station", image:"assets/images/kutch/hills/rukmavati.jpg", mapUrl:"https://maps.google.com/?q=Rukmavati+River+Mandvi" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Rann Utsav Area - Bhuj", type:"Adventure", image:"assets/images/kutch/adventure/rann-utsav.jpg", mapUrl:"https://maps.google.com/?q=Rann+Utsav+Kutch" },
    { id:"a2", name:"Desert Jeep Safari - Bhuj", type:"Adventure", image:"assets/images/kutch/adventure/jeep-safari.jpg", mapUrl:"https://maps.google.com/?q=Desert+Safari+Kutch" },
    { id:"a3", name:"ATV Rides (Rann Area) - Bhuj", type:"Adventure", image:"assets/images/kutch/adventure/atv.jpg", mapUrl:"https://maps.google.com/?q=ATV+Rides+Kutch" },
    { id:"a4", name:"Mandvi Beach Water Activities - Mandvi", type:"Adventure", image:"assets/images/kutch/adventure/water-activities.jpg", mapUrl:"https://maps.google.com/?q=Mandvi+Beach+Activities" },
    { id:"a5", name:"Coastal Cycling Routes - Mandvi", type:"Adventure", image:"assets/images/kutch/adventure/cycling.jpg", mapUrl:"https://maps.google.com/?q=Mandvi+Cycling+Route" },
    { id:"a6", name:"Hidden Desert Night Sky Spots - Bhuj", type:"Adventure", image:"assets/images/kutch/adventure/night-sky.jpg", mapUrl:"https://maps.google.com/?q=Kutch+Night+Sky" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Aina Mahal - Bhuj", type:"Museum", image:"assets/images/kutch/museums/aina-mahal.jpg", mapUrl:"https://maps.google.com/?q=Aina+Mahal+Bhuj" },
    { id:"m2", name:"Prag Mahal - Bhuj", type:"Museum", image:"assets/images/kutch/museums/prag-mahal.jpg", mapUrl:"https://maps.google.com/?q=Prag+Mahal+Bhuj" },
    { id:"m3", name:"Kutch Museum - Bhuj", type:"Museum", image:"assets/images/kutch/museums/kutch-museum.jpg", mapUrl:"https://maps.google.com/?q=Kutch+Museum+Bhuj" },
    { id:"m4", name:"Vijay Vilas Palace - Mandvi", type:"Museum", image:"assets/images/kutch/museums/vijay-vilas.jpg", mapUrl:"https://maps.google.com/?q=Vijay+Vilas+Palace" },
    { id:"m5", name:"Old Bhuj City Streets - Bhuj", type:"Museum", image:"assets/images/kutch/museums/old-bhuj.jpg", mapUrl:"https://maps.google.com/?q=Old+Bhuj+City" },
    { id:"m6", name:"Mandvi Old Port Area - Mandvi", type:"Museum", image:"assets/images/kutch/museums/mandvi-port.jpg", mapUrl:"https://maps.google.com/?q=Mandvi+Port" },

    // ================= BEACHES =================
    { id:"b1", name:"Mandvi Beach - Mandvi", type:"Beach", image:"assets/images/kutch/beaches/mandvi.jpg", mapUrl:"https://maps.google.com/?q=Mandvi+Beach" },
    { id:"b2", name:"Vijay Vilas Beach - Mandvi", type:"Beach", image:"assets/images/kutch/beaches/vijay-vilas.jpg", mapUrl:"https://maps.google.com/?q=Vijay+Vilas+Beach" },
    { id:"b3", name:"Wind Farm Beach - Mandvi", type:"Beach", image:"assets/images/kutch/beaches/wind-farm.jpg", mapUrl:"https://maps.google.com/?q=Wind+Farm+Beach+Mandvi" },
    { id:"b4", name:"Rukmavati River Mouth Coast - Mandvi", type:"Beach", image:"assets/images/kutch/beaches/rukmavati-coast.jpg", mapUrl:"https://maps.google.com/?q=Rukmavati+River+Mouth+Mandvi" }

  ]
},

surat: {
  id: "surat",
  name: "Surat",
  heroImage: "assets/images/cities/Surat.jpeg",
  description: "Explore gardens, temples, beaches, waterfalls, cafes, and adventure spots in Surat and nearby Bardoli region.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Dutch Garden - Surat", type:"Park", description:"Historic garden with colonial-era tombs and peaceful greenery.", image:"assets/images/surat/parks/dutch-garden.jpg", mapUrl:"https://maps.google.com/?q=Dutch+Garden+Surat" },
    { id:"p2", name:"Sneh Rashmi Botanical Garden - Surat", type:"Park", description:"Well-maintained botanical garden ideal for nature lovers.", image:"assets/images/surat/parks/sneh-rashmi.jpg", mapUrl:"https://maps.google.com/?q=Sneh+Rashmi+Botanical+Garden" },
    { id:"p3", name:"Gandhi Baug - Surat", type:"Park", description:"Popular city garden with a small zoo and family-friendly space.", image:"assets/images/surat/parks/gandhi-baug.jpg", mapUrl:"https://maps.google.com/?q=Gandhi+Baug+Surat" },
    { id:"p4", name:"Rang Upvan - Surat", type:"Park", description:"Open-air theatre garden known for cultural events.", image:"assets/images/surat/parks/rang-upvan.jpg", mapUrl:"https://maps.google.com/?q=Rang+Upvan+Surat" },
    { id:"p5", name:"Gavier Lake - Surat", type:"Park", description:"Hidden lake area perfect for bird watching and quiet nature time.", image:"assets/images/surat/parks/gavier-lake.jpg", mapUrl:"https://maps.google.com/?q=Gavier+Lake+Surat" },
    { id:"p6", name:"Swaraj Ashram - Bardoli", type:"Park", description:"Historic green space linked with India's freedom movement.", image:"assets/images/surat/parks/swaraj-ashram.jpg", mapUrl:"https://maps.google.com/?q=Swaraj+Ashram+Bardoli" },

    // ================= TEMPLES =================
    { id:"t1", name:"Ambika Niketan Temple - Surat", type:"Temple", description:"Famous temple on Tapi riverbank dedicated to Goddess Ambika.", image:"assets/images/surat/temples/ambika-niketan.jpg", mapUrl:"https://maps.google.com/?q=Ambika+Niketan+Temple+Surat" },
    { id:"t2", name:"Chintamani Jain Temple - Surat", type:"Temple", description:"Ancient Jain temple known for intricate carvings.", image:"assets/images/surat/temples/chintamani-jain.jpg", mapUrl:"https://maps.google.com/?q=Chintamani+Jain+Temple+Surat" },
    { id:"t3", name:"ISKCON Temple Surat - Surat", type:"Temple", description:"Spiritual center dedicated to Lord Krishna with peaceful ambiance.", image:"assets/images/surat/temples/iskcon.jpg", mapUrl:"https://maps.google.com/?q=ISKCON+Temple+Surat" },
    { id:"t4", name:"Swaminarayan Temple Surat - Surat", type:"Temple", description:"Major temple known for its architecture and devotion.", image:"assets/images/surat/temples/swaminarayan.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Surat" },
    { id:"t5", name:"Modi Atash Behram - Surat", type:"Temple", description:"Parsi fire temple (view-only), historically significant.", image:"assets/images/surat/temples/atash-behram.jpg", mapUrl:"https://maps.google.com/?q=Modi+Atash+Behram+Surat" },
    { id:"t6", name:"Kedareshwar Temple - Bardoli", type:"Temple", description:"Peaceful Shiva temple surrounded by natural calm.", image:"assets/images/surat/temples/kedareshwar.jpg", mapUrl:"https://maps.google.com/?q=Kedareshwar+Temple+Bardoli" },
    { id:"t7", name:"Nageshwar Temple - Bardoli", type:"Temple", description:"Local spiritual temple with a calm environment.", image:"assets/images/surat/temples/nageshwar.jpg", mapUrl:"https://maps.google.com/?q=Nageshwar+Temple+Bardoli" },
    { id:"t8", name:"Govindashram Temple - Bardoli", type:"Temple", description:"Ashram-style temple known for spiritual activities.", image:"assets/images/surat/temples/govindashram.jpg", mapUrl:"https://maps.google.com/?q=Govindashram+Temple+Bardoli" },
    { id:"t9", name:"Panchmukhi Hanuman Mandir - Bardoli", type:"Temple", description:"Temple dedicated to five-faced Hanuman idol.", image:"assets/images/surat/temples/panchmukhi-hanuman.jpg", mapUrl:"https://maps.google.com/?q=Panchmukhi+Hanuman+Mandir+Bardoli" },

    // ================= CAFES =================
    { id:"c1", name:"Gopi Talav - Surat", type:"Cafe", description:"Lakefront hangout with food stalls and evening vibe.", image:"assets/images/surat/cafes/gopi-talav.jpg", mapUrl:"https://maps.google.com/?q=Gopi+Talav+Surat" },
    { id:"c2", name:"Tapi Riverfront - Surat", type:"Cafe", description:"Popular riverside spot for walking, snacks, and relaxation.", image:"assets/images/surat/cafes/tapi-riverfront.jpg", mapUrl:"https://maps.google.com/?q=Tapi+Riverfront+Surat" },
    { id:"c3", name:"SMC Library - Surat", type:"Cafe", description:"Quiet hidden spot ideal for reading and peaceful time.", image:"assets/images/surat/cafes/smc-library.jpg", mapUrl:"https://maps.google.com/?q=SMC+Library+Surat" },
    { id:"c4", name:"Local Cafés & Street Food Zones - Surat", type:"Cafe", description:"Hidden food spots across the city with local flavors.", image:"assets/images/surat/cafes/street-food.jpg", mapUrl:"https://maps.google.com/?q=Street+Food+Surat" },

    // ================= BEACHES =================
    { id:"b1", name:"Dumas Beach - Surat", type:"Beach", description:"Famous black-sand beach known for sunsets and local legends.", image:"assets/images/surat/beaches/dumas.jpg", mapUrl:"https://maps.google.com/?q=Dumas+Beach+Surat" },
    { id:"b2", name:"Suvali Beach - Surat", type:"Beach", description:"Clean and less crowded beach ideal for peaceful visits.", image:"assets/images/surat/beaches/suvali.jpg", mapUrl:"https://maps.google.com/?q=Suvali+Beach+Surat" },
    { id:"b3", name:"Ubharaat Beach - Surat", type:"Beach", description:"Popular beach with food stalls and tourist activities.", image:"assets/images/surat/beaches/ubharaat.jpg", mapUrl:"https://maps.google.com/?q=Ubharaat+Beach+Surat" },
    { id:"b4", name:"Dandi Beach - Near Surat", type:"Beach", description:"Historic beach linked to Dandi March, less crowded.", image:"assets/images/surat/beaches/dandi.jpg", mapUrl:"https://maps.google.com/?q=Dandi+Beach+Gujarat" },

    // ================= HILL STATION =================
    { id:"h1", name:"Saputara - Near Surat", type:"Hill Station", description:"Only hill station of Gujarat, popular for tourism and views.", image:"assets/images/surat/hills/saputara.jpg", mapUrl:"https://maps.google.com/?q=Saputara+Hill+Station" },
    { id:"h2", name:"Wilson Hills - Near Surat", type:"Hill Station", description:"Hidden hill station with cool climate and scenic viewpoints.", image:"assets/images/surat/hills/wilson-hills.jpg", mapUrl:"https://maps.google.com/?q=Wilson+Hills+Gujarat" },
    { id:"h3", name:"Vansda National Park - Near Surat", type:"Hill Station", description:"Dense forest area rich in biodiversity and nature trails.", image:"assets/images/surat/hills/vansda.jpg", mapUrl:"https://maps.google.com/?q=Vansda+National+Park" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Gira Waterfalls - Near Surat", type:"Waterfall", description:"Famous seasonal waterfall best visited during monsoon.", image:"assets/images/surat/waterfalls/gira.jpg", mapUrl:"https://maps.google.com/?q=Gira+Waterfalls" },
    { id:"w2", name:"Gaumukh Waterfall - Near Surat", type:"Waterfall", description:"Hidden waterfall with peaceful surroundings.", image:"assets/images/surat/waterfalls/gaumukh.jpg", mapUrl:"https://maps.google.com/?q=Gaumukh+Waterfall+Gujarat" },
    { id:"w3", name:"Ukai Dam - Near Surat", type:"Waterfall", description:"Large dam with scenic water views and picnic spots.", image:"assets/images/surat/waterfalls/ukai.jpg", mapUrl:"https://maps.google.com/?q=Ukai+Dam" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Amaazia Water Park - Surat", type:"Adventure", description:"Popular water park with rides and entertainment.", image:"assets/images/surat/adventure/amaazia.jpg", mapUrl:"https://maps.google.com/?q=Amaazia+Water+Park+Surat" },
    { id:"a2", name:"Blues Adventure - Surat", type:"Adventure", description:"Adventure park offering fun outdoor activities.", image:"assets/images/surat/adventure/blues.jpg", mapUrl:"https://maps.google.com/?q=Blues+Adventure+Surat" },
    { id:"a3", name:"Kilad Eco Tourism - Near Surat", type:"Adventure", description:"Eco-tourism site with jungle trails and nature exploration.", image:"assets/images/surat/adventure/kilad.jpg", mapUrl:"https://maps.google.com/?q=Kilad+Eco+Tourism" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Sardar Patel Museum - Surat", type:"Museum", description:"Museum showcasing history, art, and cultural exhibits.", image:"assets/images/surat/museums/sardar-patel.jpg", mapUrl:"https://maps.google.com/?q=Sardar+Patel+Museum+Surat" },
    { id:"m2", name:"Surat Castle - Surat", type:"Museum", description:"Historic fort built to protect city from invasions.", image:"assets/images/surat/museums/surat-castle.jpg", mapUrl:"https://maps.google.com/?q=Surat+Castle" },
    { id:"m3", name:"Science Centre Surat - Surat", type:"Museum", description:"Modern science museum with interactive exhibits.", image:"assets/images/surat/museums/science-centre.jpg", mapUrl:"https://maps.google.com/?q=Science+Centre+Surat" },
    { id:"m4", name:"Sardar Vallabhbhai Patel National Museum - Bardoli", type:"Museum", description:"Museum dedicated to Sardar Patel and freedom movement.", image:"assets/images/surat/museums/patel-bardoli.jpg", mapUrl:"https://maps.google.com/?q=Sardar+Patel+Museum+Bardoli" },
    { id:"m5", name:"Bardoli Satyagraha Site - Bardoli", type:"Museum", description:"Historic site of India's freedom struggle.", image:"assets/images/surat/museums/bardoli-satyagraha.jpg", mapUrl:"https://maps.google.com/?q=Bardoli+Satyagraha+Site" }

  ]
},

tapi: {
  id: "tapi",
  name: "Tapi",
  heroImage: "assets/images/cities/Tapi.webp",
  description: "Explore tribal culture, forests, hills, waterfalls, spiritual places, and hidden nature spots in Tapi district.",

  places: [

    // ================= PARKS =================
    { id:"p1", name:"Vyara Garden - Vyara", type:"Park", description:"Main public garden in Vyara, ideal for relaxation and family outings.", image:"assets/images/tapi/parks/vyara-garden.jpg", mapUrl:"https://maps.google.com/?q=Vyara+Garden" },
    { id:"p2", name:"Songadh Eco Park - Tapi District", type:"Park", description:"Eco-friendly park surrounded by greenery, perfect for nature lovers.", image:"assets/images/tapi/parks/songadh-eco-park.jpg", mapUrl:"https://maps.google.com/?q=Songadh+Eco+Park" },
    { id:"p3", name:"Tribal Village Green Spaces - Tapi District", type:"Park", description:"Hidden peaceful green areas inside tribal villages, offering a calm natural vibe.", image:"assets/images/tapi/parks/tribal-green.jpg", mapUrl:"https://maps.google.com/?q=Tapi+Tribal+Village" },

    // ================= TEMPLES =================
    { id:"t1", name:"Gayatri Temple - Vyara", type:"Temple", description:"Peaceful and spiritual temple in Vyara town.", image:"assets/images/tapi/temples/gayatri.jpg", mapUrl:"https://maps.google.com/?q=Gayatri+Temple+Vyara" },
    { id:"t2", name:"Shabari Dham - Tapi District", type:"Temple", description:"Famous pilgrimage site associated with Ramayana history.", image:"assets/images/tapi/temples/shabari-dham.jpg", mapUrl:"https://maps.google.com/?q=Shabari+Dham+Dang+Gujarat" },
    { id:"t3", name:"Baba Ramdev Temple - Songadh", type:"Temple", description:"Popular temple attracting local devotees in Songadh region.", image:"assets/images/tapi/temples/ramdev.jpg", mapUrl:"https://maps.google.com/?q=Ramdev+Temple+Songadh" },
    { id:"t4", name:"Tribal Forest Temples - Tapi District", type:"Temple", description:"Hidden temples deep inside forests reflecting tribal spiritual culture.", image:"assets/images/tapi/temples/forest-temple.jpg", mapUrl:"https://maps.google.com/?q=Forest+Temple+Tapi" },

    // ================= CAFES =================
    { id:"c1", name:"Vyara Town Market Hangouts - Vyara", type:"Cafe", description:"Local market area with small eateries and casual hangout spots.", image:"assets/images/tapi/cafes/vyara-market.jpg", mapUrl:"https://maps.google.com/?q=Vyara+Market" },
    { id:"c2", name:"Local Tea Stalls & Food Joints - Vyara", type:"Cafe", description:"Authentic street food and tea stalls offering local flavors.", image:"assets/images/tapi/cafes/tea-stalls.jpg", mapUrl:"https://maps.google.com/?q=Tea+Stalls+Vyara" },
    { id:"c3", name:"Riverside Chill Spots - Tapi District", type:"Cafe", description:"Hidden relaxing spots along the Tapi River, perfect for peaceful evenings.", image:"assets/images/tapi/cafes/riverside.jpg", mapUrl:"https://maps.google.com/?q=Tapi+River+Vyara" },

    // ================= NATURE =================
    { id:"h1", name:"Songadh Hills - Tapi District", type:"Nature", description:"Scenic hill area with natural beauty and trekking opportunities.", image:"assets/images/tapi/nature/songadh-hills.jpg", mapUrl:"https://maps.google.com/?q=Songadh+Hills+Gujarat" },
    { id:"h2", name:"Ukai Forest Region - Tapi District", type:"Nature", description:"Dense forest area rich in biodiversity and natural beauty.", image:"assets/images/tapi/nature/ukai-forest.jpg", mapUrl:"https://maps.google.com/?q=Ukai+Forest+Gujarat" },
    { id:"h3", name:"Tribal Forest Landscapes - Tapi District", type:"Nature", description:"Hidden deep forest zones showcasing untouched tribal nature.", image:"assets/images/tapi/nature/tribal-forest.jpg", mapUrl:"https://maps.google.com/?q=Tapi+Forest+Area" },

    // ================= WATER SPOTS =================
    { id:"w1", name:"Ukai Dam - Tapi District", type:"Waterfall", description:"One of the largest dams in Gujarat, offering scenic views and boating.", image:"assets/images/tapi/water/ukai-dam.jpg", mapUrl:"https://maps.google.com/?q=Ukai+Dam" },
    { id:"w2", name:"Ukai Reservoir - Tapi District", type:"Waterfall", description:"Wide water body ideal for sightseeing and peaceful nature views.", image:"assets/images/tapi/water/ukai-reservoir.jpg", mapUrl:"https://maps.google.com/?q=Ukai+Reservoir" },
    { id:"w3", name:"Seasonal Forest Waterfalls - Tapi District", type:"Waterfall", description:"Hidden waterfalls appearing during monsoon in forest regions.", image:"assets/images/tapi/water/seasonal-waterfall.jpg", mapUrl:"https://maps.google.com/?q=Waterfalls+Tapi+Gujarat" },
    { id:"w4", name:"Jungle Streams - Tapi District", type:"Waterfall", description:"Small hidden streams inside forests, active mostly in rainy season.", image:"assets/images/tapi/water/jungle-stream.jpg", mapUrl:"https://maps.google.com/?q=Forest+Streams+Tapi" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Boating at Ukai Dam - Tapi District", type:"Adventure", description:"Enjoy boating and scenic exploration at Ukai Dam.", image:"assets/images/tapi/adventure/boating.jpg", mapUrl:"https://maps.google.com/?q=Ukai+Dam+Boating" },
    { id:"a2", name:"Songadh Hill Trekking - Tapi District", type:"Adventure", description:"Popular trekking activity in scenic hill terrain.", image:"assets/images/tapi/adventure/trekking.jpg", mapUrl:"https://maps.google.com/?q=Songadh+Trekking" },
    { id:"a3", name:"Jungle Trekking Trails - Tapi District", type:"Adventure", description:"Hidden trekking paths inside dense forests for adventure lovers.", image:"assets/images/tapi/adventure/jungle-trek.jpg", mapUrl:"https://maps.google.com/?q=Tapi+Jungle+Trek" },
    { id:"a4", name:"Rural Cycling Routes - Tapi District", type:"Adventure", description:"Off-road cycling routes through villages and forest areas.", image:"assets/images/tapi/adventure/cycling.jpg", mapUrl:"https://maps.google.com/?q=Rural+Cycling+Tapi" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Songadh Fort - Tapi District", type:"Museum", description:"Historic fort offering panoramic views and cultural heritage.", image:"assets/images/tapi/museums/songadh-fort.jpg", mapUrl:"https://maps.google.com/?q=Songadh+Fort" },
    { id:"m2", name:"Tribal Culture Areas - Tapi District", type:"Museum", description:"Living heritage zones showcasing tribal traditions and lifestyle.", image:"assets/images/tapi/museums/tribal-culture.jpg", mapUrl:"https://maps.google.com/?q=Tapi+Tribal+Culture" },
    { id:"m3", name:"Old Village Architecture - Vyara & Nearby", type:"Museum", description:"Traditional houses and structures reflecting rural history.", image:"assets/images/tapi/museums/village-architecture.jpg", mapUrl:"https://maps.google.com/?q=Vyara+Village" }

  ]
},

dang: {
  id: "dang",
  name: "Dang",
  heroImage: "assets/images/cities/dang.jpg",
  description: "Explore lush forests, waterfalls, hill viewpoints, tribal culture, and peaceful nature spots in the Dang district of Gujarat.",
  places: [

    // ================= PARKS / GARDENS =================
    { id:"p1", name:"Ahwa Garden - Ahwa", type:"Park", description:"Small peaceful garden in Ahwa town surrounded by greenery.", image:"assets/images/dang/parks/ahwa-garden.jpg", mapUrl:"https://maps.google.com/?q=Ahwa+Garden" },
    { id:"p2", name:"Dang Forest Eco Parks - Dang District", type:"Park", description:"Eco parks spread across forest areas offering nature immersion.", image:"assets/images/dang/parks/eco-parks.jpg", mapUrl:"https://maps.google.com/?q=Dang+Eco+Park" },
    { id:"p3", name:"Saputara Lake Garden Area - Dang District", type:"Park", description:"Well-maintained garden near Saputara Lake ideal for relaxation.", image:"assets/images/dang/parks/saputara-garden.jpg", mapUrl:"https://maps.google.com/?q=Saputara+Lake+Garden" },
    { id:"p4", name:"Forest Clearings & Village Greens - Dang District", type:"Park", description:"Hidden natural open spaces in villages and forests.", image:"assets/images/dang/parks/forest-clearing.jpg", mapUrl:"https://maps.google.com/?q=Dang+Forest+Area" },

    // ================= TEMPLES =================
    { id:"t1", name:"Saputara Temple - Dang District", type:"Temple", description:"Local temple visited by tourists and devotees in Saputara.", image:"assets/images/dang/temples/saputara-temple.jpg", mapUrl:"https://maps.google.com/?q=Saputara+Temple" },
    { id:"t2", name:"Hanuman Temple Ahwa - Ahwa", type:"Temple", description:"Popular Hanuman temple in Ahwa town.", image:"assets/images/dang/temples/hanuman-ahwa.jpg", mapUrl:"https://maps.google.com/?q=Hanuman+Temple+Ahwa" },
    { id:"t3", name:"Shabari Dham - Dang District", type:"Temple", description:"Famous religious site associated with Ramayana.", image:"assets/images/dang/temples/shabari-dham.jpg", mapUrl:"https://maps.google.com/?q=Shabari+Dham+Dang" },
    { id:"t4", name:"Tribal Sacred Forest Sites - Dang District", type:"Temple", description:"Hidden sacred spots worshipped by local tribal communities.", image:"assets/images/dang/temples/forest-sacred.jpg", mapUrl:"https://maps.google.com/?q=Tribal+Temple+Dang" },

    // ================= CAFES =================
    { id:"c1", name:"Saputara Lake Front - Dang District", type:"Cafe", description:"Popular lakeside hangout with food stalls and scenic views.", image:"assets/images/dang/cafes/lakefront.jpg", mapUrl:"https://maps.google.com/?q=Saputara+Lake" },
    { id:"c2", name:"Ahwa Town Market - Ahwa", type:"Cafe", description:"Local market area with street food and village vibe.", image:"assets/images/dang/cafes/ahwa-market.jpg", mapUrl:"https://maps.google.com/?q=Ahwa+Market" },
    { id:"c3", name:"Hill Cafés & Tea Stalls - Saputara/Ahwa", type:"Cafe", description:"Small cafés and tea stalls offering scenic hill views.", image:"assets/images/dang/cafes/hill-cafes.jpg", mapUrl:"https://maps.google.com/?q=Saputara+Cafe" },
    { id:"c4", name:"Forest Viewpoints & Roadside Tea Stops - Dang District", type:"Cafe", description:"Hidden chill spots along forest roads.", image:"assets/images/dang/cafes/roadside-tea.jpg", mapUrl:"https://maps.google.com/?q=Tea+Stalls+Dang" },

    // ================= HILL STATIONS =================
    { id:"h1", name:"Saputara - Dang District", type:"Hill Station", description:"Gujarat’s only hill station known for scenic beauty and tourism.", image:"assets/images/dang/hills/saputara.jpg", mapUrl:"https://maps.google.com/?q=Saputara" },
    { id:"h2", name:"Sunset Point Saputara - Dang District", type:"Hill Station", description:"Famous viewpoint for breathtaking sunsets.", image:"assets/images/dang/hills/sunset-point.jpg", mapUrl:"https://maps.google.com/?q=Sunset+Point+Saputara" },
    { id:"h3", name:"Governor Hill - Dang District", type:"Hill Station", description:"High viewpoint offering panoramic forest views.", image:"assets/images/dang/hills/governor-hill.jpg", mapUrl:"https://maps.google.com/?q=Governor+Hill+Saputara" },
    { id:"h4", name:"Table Point Saputara - Dang District", type:"Hill Station", description:"Flat plateau area ideal for sightseeing and relaxation.", image:"assets/images/dang/hills/table-point.jpg", mapUrl:"https://maps.google.com/?q=Table+Point+Saputara" },
    { id:"h5", name:"Dang Forest Region - Dang District", type:"Hill Station", description:"Dense forest landscapes with untouched natural beauty.", image:"assets/images/dang/hills/dang-forest.jpg", mapUrl:"https://maps.google.com/?q=Dang+Forest" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Gira Waterfalls - Dang District", type:"Waterfall", description:"Famous monsoon waterfall and major tourist attraction.", image:"assets/images/dang/waterfalls/gira.jpg", mapUrl:"https://maps.google.com/?q=Gira+Waterfalls" },
    { id:"w2", name:"Purna Waterfalls - Dang District", type:"Waterfall", description:"Less crowded waterfall surrounded by forest.", image:"assets/images/dang/waterfalls/purna.jpg", mapUrl:"https://maps.google.com/?q=Purna+Waterfall" },
    { id:"w3", name:"Seasonal Jungle Waterfalls - Dang District", type:"Waterfall", description:"Hidden waterfalls active during monsoon season.", image:"assets/images/dang/waterfalls/seasonal.jpg", mapUrl:"https://maps.google.com/?q=Waterfalls+Dang" },
    { id:"w4", name:"Forest Streams & Rivers - Dang District", type:"Waterfall", description:"Natural water spots ideal for peaceful visits.", image:"assets/images/dang/waterfalls/streams.jpg", mapUrl:"https://maps.google.com/?q=Dang+River" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Saputara Lake Boating - Dang District", type:"Adventure", description:"Boating activity at Saputara Lake.", image:"assets/images/dang/adventure/boating.jpg", mapUrl:"https://maps.google.com/?q=Saputara+Boating" },
    { id:"a2", name:"Saputara Ropeway - Dang District", type:"Adventure", description:"Cable car ride offering scenic aerial views.", image:"assets/images/dang/adventure/ropeway.jpg", mapUrl:"https://maps.google.com/?q=Saputara+Ropeway" },
    { id:"a3", name:"Saputara Hill Trekking - Dang District", type:"Adventure", description:"Popular trekking trails around Saputara hills.", image:"assets/images/dang/adventure/trekking.jpg", mapUrl:"https://maps.google.com/?q=Saputara+Trekking" },
    { id:"a4", name:"Jungle Trekking & Camping - Dang District", type:"Adventure", description:"Adventure activities in forest areas.", image:"assets/images/dang/adventure/jungle.jpg", mapUrl:"https://maps.google.com/?q=Camping+Dang" },
    { id:"a5", name:"Cycling Routes - Dang District", type:"Adventure", description:"Scenic cycling paths across hill terrain.", image:"assets/images/dang/adventure/cycling.jpg", mapUrl:"https://maps.google.com/?q=Cycling+Dang" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Saputara Tribal Museum - Dang District", type:"Museum", description:"Museum showcasing tribal culture, lifestyle, and artifacts.", image:"assets/images/dang/museums/tribal-museum.jpg", mapUrl:"https://maps.google.com/?q=Saputara+Tribal+Museum" },
    { id:"m2", name:"Tribal Cultural Villages - Dang District", type:"Museum", description:"Living heritage sites representing tribal traditions.", image:"assets/images/dang/museums/tribal-village.jpg", mapUrl:"https://maps.google.com/?q=Dang+Tribal+Village" },
    { id:"m3", name:"Old Ahwa Town Structures - Ahwa", type:"Museum", description:"Hidden historic spots reflecting local history.", image:"assets/images/dang/museums/ahwa-old.jpg", mapUrl:"https://maps.google.com/?q=Ahwa+Town" }

  ]
},

bharuch: {
  id: "bharuch",
  name: "Bharuch",
  heroImage: "assets/images/cities/Bharuch.webp",
  description: "Explore riverfront views, ancient temples, hidden beaches, waterfalls, and historic charm in Bharuch and nearby regions.",
  places: [

    // ================= PARKS / GARDENS =================
    { id:"p1", name:"Narmada Park - Bharuch", type:"Park", description:"Well-known park offering greenery and river views.", image:"assets/images/bharuch/parks/narmada-park.jpg", mapUrl:"https://maps.google.com/?q=Narmada+Park+Bharuch" },
    { id:"p2", name:"Golden Bridge Riverfront Area - Bharuch", type:"Park", description:"Hidden riverside chill spot near the historic bridge.", image:"assets/images/bharuch/parks/golden-bridge-riverfront.jpg", mapUrl:"https://maps.google.com/?q=Golden+Bridge+Bharuch" },
    { id:"p3", name:"Zadeshwar Garden - Bharuch", type:"Park", description:"Lesser-known garden ideal for peaceful visits.", image:"assets/images/bharuch/parks/zadeshwar-garden.jpg", mapUrl:"https://maps.google.com/?q=Zadeshwar+Garden+Bharuch" },

    // ================= TEMPLES =================
    { id:"t1", name:"Bhrigu Rishi Temple - Bharuch", type:"Temple", description:"Ancient temple associated with Sage Bhrigu.", image:"assets/images/bharuch/temples/bhrigu-temple.jpg", mapUrl:"https://maps.google.com/?q=Bhrigu+Rishi+Temple+Bharuch" },
    { id:"t2", name:"Stambheshwar Mahadev Temple - Near Bharuch", type:"Temple", description:"Unique sea temple that disappears during high tide.", image:"assets/images/bharuch/temples/stambheshwar.jpg", mapUrl:"https://maps.google.com/?q=Stambheshwar+Mahadev+Temple" },
    { id:"t3", name:"Swaminarayan Temple Bharuch - Bharuch", type:"Temple", description:"Spiritual temple known for devotion and architecture.", image:"assets/images/bharuch/temples/swaminarayan.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Bharuch" },
    { id:"t4", name:"Nilkantheshwar Temple - Bharuch", type:"Temple", description:"Peaceful Shiva temple in the city.", image:"assets/images/bharuch/temples/nilkantheshwar.jpg", mapUrl:"https://maps.google.com/?q=Nilkantheshwar+Temple+Bharuch" },
    { id:"t5", name:"Dashashwamedh Ghat - Bharuch", type:"Temple", description:"Sacred riverside ghat used for rituals and prayers.", image:"assets/images/bharuch/temples/ghat.jpg", mapUrl:"https://maps.google.com/?q=Dashashwamedh+Ghat+Bharuch" },
    { id:"t6", name:"Kabirvad - Near Bharuch", type:"Temple", description:"Famous banyan tree island with spiritual significance.", image:"assets/images/bharuch/temples/kabirvad.jpg", mapUrl:"https://maps.google.com/?q=Kabirvad" },

    // ================= CAFES =================
    { id:"c1", name:"Narmada Riverfront - Bharuch", type:"Cafe", description:"Popular evening hangout with scenic river views.", image:"assets/images/bharuch/cafes/riverfront.jpg", mapUrl:"https://maps.google.com/?q=Narmada+Riverfront+Bharuch" },
    { id:"c2", name:"Narmada Sunset Points - Bharuch", type:"Cafe", description:"Hidden spots offering peaceful sunset views.", image:"assets/images/bharuch/cafes/sunset.jpg", mapUrl:"https://maps.google.com/?q=Narmada+Sunset+Bharuch" },
    { id:"c3", name:"Golden Bridge - Bharuch", type:"Cafe", description:"Iconic bridge area known for sunset views and walks.", image:"assets/images/bharuch/cafes/golden-bridge.jpg", mapUrl:"https://maps.google.com/?q=Golden+Bridge+Bharuch" },
    { id:"c4", name:"Local Cafés & Street Food Zones - Bharuch", type:"Cafe", description:"Hidden food spots near Zadeshwar and Station Road.", image:"assets/images/bharuch/cafes/street-food.jpg", mapUrl:"https://maps.google.com/?q=Street+Food+Bharuch" },

    // ================= BEACHES =================
    { id:"b1", name:"Dahej Beach - Near Bharuch", type:"Beach", description:"Less crowded beach with industrial yet scenic surroundings.", image:"assets/images/bharuch/beaches/dahej.jpg", mapUrl:"https://maps.google.com/?q=Dahej+Beach" },
    { id:"b2", name:"Alia Bet Beach - Near Bharuch", type:"Beach", description:"Hidden raw beach known for solitude and nature.", image:"assets/images/bharuch/beaches/alia-bet.jpg", mapUrl:"https://maps.google.com/?q=Alia+Bet+Bharuch" },

    // ================= NATURE =================
    { id:"h1", name:"Zarwani Waterfall - Near Bharuch", type:"Nature", description:"Scenic natural spot surrounded by greenery.", image:"assets/images/bharuch/nature/zarwani.jpg", mapUrl:"https://maps.google.com/?q=Zarwani+Waterfall" },
    { id:"h2", name:"Shoolpaneshwar Wildlife Sanctuary - Near Bharuch", type:"Nature", description:"Dense forest area rich in wildlife and nature trails.", image:"assets/images/bharuch/nature/shoolpaneshwar.jpg", mapUrl:"https://maps.google.com/?q=Shoolpaneshwar+Wildlife+Sanctuary" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Zarwani Waterfall - Near Bharuch", type:"Waterfall", description:"Popular waterfall especially during monsoon.", image:"assets/images/bharuch/waterfalls/zarwani.jpg", mapUrl:"https://maps.google.com/?q=Zarwani+Waterfall" },
    { id:"w2", name:"Narmada River Banks - Bharuch", type:"Waterfall", description:"Scenic riverbank areas ideal for relaxation.", image:"assets/images/bharuch/waterfalls/narmada-bank.jpg", mapUrl:"https://maps.google.com/?q=Narmada+River+Bharuch" },
    { id:"w3", name:"Hidden Narmada Ghats - Bharuch", type:"Waterfall", description:"Peaceful lesser-known river access points.", image:"assets/images/bharuch/waterfalls/ghats.jpg", mapUrl:"https://maps.google.com/?q=Narmada+Ghats+Bharuch" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Kabirvad Boating - Near Bharuch", type:"Adventure", description:"Boat rides to the famous Kabirvad island.", image:"assets/images/bharuch/adventure/boating.jpg", mapUrl:"https://maps.google.com/?q=Kabirvad+Boating" },
    { id:"a2", name:"Shoolpaneshwar Forest Trekking - Near Bharuch", type:"Adventure", description:"Trekking through dense forest trails.", image:"assets/images/bharuch/adventure/trekking.jpg", mapUrl:"https://maps.google.com/?q=Shoolpaneshwar+Trekking" },
    { id:"a3", name:"Rural Cycling Routes - Bharuch Outskirts", type:"Adventure", description:"Hidden cycling paths through villages and countryside.", image:"assets/images/bharuch/adventure/cycling.jpg", mapUrl:"https://maps.google.com/?q=Cycling+Bharuch" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Golden Bridge - Bharuch", type:"Museum", description:"Historic bridge showcasing colonial-era engineering.", image:"assets/images/bharuch/museums/golden-bridge.jpg", mapUrl:"https://maps.google.com/?q=Golden+Bridge+Bharuch" },
    { id:"m2", name:"Old Bharuch Fort Remains - Bharuch", type:"Museum", description:"Ruins reflecting the city’s ancient past.", image:"assets/images/bharuch/museums/fort.jpg", mapUrl:"https://maps.google.com/?q=Bharuch+Fort" },
    { id:"m3", name:"Colonial Riverfront Structures - Bharuch", type:"Museum", description:"Lesser-known historic buildings near the river.", image:"assets/images/bharuch/museums/riverfront-heritage.jpg", mapUrl:"https://maps.google.com/?q=Bharuch+Riverfront" }

  ]
},

narmada: {
  id: "narmada",
  name: "Narmada",
  heroImage: "assets/images/cities/Rajpipla.jpg",
  description: "Explore iconic attractions, lush forests, waterfalls, spiritual temples, and scenic river views in the Narmada district and Rajpipla region.",
  places: [

    // ================= PARKS / GARDENS =================
    { id:"p1", name:"Rajpipla Garden - Rajpipla", type:"Park", description:"Local garden offering greenery and a peaceful environment.", image:"assets/images/narmada/parks/rajpipla-garden.jpg", mapUrl:"https://maps.google.com/?q=Rajpipla+Garden" },
    { id:"p2", name:"Sardar Patel Zoological Park - Narmada", type:"Park", description:"Famous zoological park near Statue of Unity with diverse wildlife.", image:"assets/images/narmada/parks/zoological-park.jpg", mapUrl:"https://maps.google.com/?q=Sardar+Patel+Zoological+Park" },
    { id:"p3", name:"Ekta Nursery - Narmada", type:"Park", description:"Beautiful plant nursery promoting eco-tourism and nature awareness.", image:"assets/images/narmada/parks/ekta-nursery.jpg", mapUrl:"https://maps.google.com/?q=Ekta+Nursery" },
    { id:"p4", name:"Valley of Flowers - Narmada", type:"Park", description:"Very famous floral garden with vibrant seasonal blooms.", image:"assets/images/narmada/parks/valley-of-flowers.jpg", mapUrl:"https://maps.google.com/?q=Valley+of+Flowers+Kevadia" },
    { id:"p5", name:"Kevadia Forest Eco Parks - Narmada", type:"Park", description:"Hidden eco park areas within forest zones, less explored.", image:"assets/images/narmada/parks/eco-parks.jpg", mapUrl:"https://maps.google.com/?q=Kevadia+Eco+Park" },

    // ================= TEMPLES =================
    { id:"t1", name:"Nilkanth Dham Swaminarayan Temple - Narmada", type:"Temple", description:"Famous Swaminarayan temple known for architecture and spirituality.", image:"assets/images/narmada/temples/nilkanth-dham.jpg", mapUrl:"https://maps.google.com/?q=Nilkanth+Dham+Poicha" },
    { id:"t2", name:"Harsiddhi Mata Temple - Rajpipla", type:"Temple", description:"Well-known temple dedicated to Goddess Harsiddhi.", image:"assets/images/narmada/temples/harsiddhi.jpg", mapUrl:"https://maps.google.com/?q=Harsiddhi+Mata+Temple+Rajpipla" },
    { id:"t3", name:"Shoolpaneshwar Mahadev Temple - Narmada", type:"Temple", description:"Hidden Shiva temple located within forest surroundings.", image:"assets/images/narmada/temples/shoolpaneshwar.jpg", mapUrl:"https://maps.google.com/?q=Shoolpaneshwar+Mahadev+Temple" },
    { id:"t4", name:"Kuber Bhandari Temple - Narmada", type:"Temple", description:"Popular temple with scenic river views.", image:"assets/images/narmada/temples/kuber-bhandari.jpg", mapUrl:"https://maps.google.com/?q=Kuber+Bhandari+Temple" },
    { id:"t5", name:"Tribal Forest Temples - Narmada", type:"Temple", description:"Small hidden temples worshipped by local tribal communities.", image:"assets/images/narmada/temples/forest-temple.jpg", mapUrl:"https://maps.google.com/?q=Tribal+Temple+Narmada" },

    // ================= CAFES =================
    { id:"c1", name:"Ekta Cruise Area - Narmada", type:"Cafe", description:"Relaxed riverside area with food and leisure activities.", image:"assets/images/narmada/cafes/ekta-cruise.jpg", mapUrl:"https://maps.google.com/?q=Ekta+Cruise+Kevadia" },
    { id:"c2", name:"Rajpipla Town Market - Rajpipla", type:"Cafe", description:"Casual hangout area with local food and shopping vibe.", image:"assets/images/narmada/cafes/rajpipla-market.jpg", mapUrl:"https://maps.google.com/?q=Rajpipla+Market" },
    { id:"c3", name:"Kevadia Riverside Cafes - Narmada", type:"Cafe", description:"Food stalls and cafés near riverfront areas.", image:"assets/images/narmada/cafes/riverside.jpg", mapUrl:"https://maps.google.com/?q=Kevadia+Riverfront" },
    { id:"c4", name:"Quiet Narmada Riverbanks - Rajpipla/Narmada", type:"Cafe", description:"Hidden peaceful spots along the river.", image:"assets/images/narmada/cafes/riverbank.jpg", mapUrl:"https://maps.google.com/?q=Narmada+River+Rajpipla" },

    // ================= NATURE =================
    { id:"h1", name:"Zarwani Hills - Narmada", type:"Nature", description:"Hidden hill area offering scenic forest views.", image:"assets/images/narmada/nature/zarwani-hills.jpg", mapUrl:"https://maps.google.com/?q=Zarwani+Hills" },
    { id:"h2", name:"Shoolpaneshwar Wildlife Sanctuary - Narmada", type:"Nature", description:"Major forest reserve rich in biodiversity.", image:"assets/images/narmada/nature/shoolpaneshwar.jpg", mapUrl:"https://maps.google.com/?q=Shoolpaneshwar+Wildlife+Sanctuary" },
    { id:"h3", name:"Rajpipla Hills - Rajpipla", type:"Nature", description:"Lesser-known hills with natural beauty.", image:"assets/images/narmada/nature/rajpipla-hills.jpg", mapUrl:"https://maps.google.com/?q=Rajpipla+Hills" },
    { id:"h4", name:"Forest Routes & Viewpoints - Narmada", type:"Nature", description:"Hidden scenic routes across dense forests.", image:"assets/images/narmada/nature/forest-routes.jpg", mapUrl:"https://maps.google.com/?q=Narmada+Forest+Route" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Zarwani Waterfall - Narmada", type:"Waterfall", description:"Famous waterfall especially during monsoon.", image:"assets/images/narmada/waterfalls/zarwani.jpg", mapUrl:"https://maps.google.com/?q=Zarwani+Waterfall" },
    { id:"w2", name:"Sardar Sarovar Dam - Narmada", type:"Waterfall", description:"Iconic dam with massive water views.", image:"assets/images/narmada/waterfalls/sardar-sarovar.jpg", mapUrl:"https://maps.google.com/?q=Sardar+Sarovar+Dam" },
    { id:"w3", name:"Narmada River - Rajpipla/Narmada", type:"Waterfall", description:"Scenic river offering beautiful landscapes.", image:"assets/images/narmada/waterfalls/narmada-river.jpg", mapUrl:"https://maps.google.com/?q=Narmada+River" },
    { id:"w4", name:"Seasonal Forest Waterfalls - Narmada", type:"Waterfall", description:"Hidden waterfalls active during monsoon season.", image:"assets/images/narmada/waterfalls/seasonal.jpg", mapUrl:"https://maps.google.com/?q=Waterfalls+Narmada" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Statue of Unity - Narmada", type:"Adventure", description:"World’s tallest statue and major tourist attraction.", image:"assets/images/narmada/adventure/statue-of-unity.jpg", mapUrl:"https://maps.google.com/?q=Statue+of+Unity" },
    { id:"a2", name:"Jungle Safari Park - Narmada", type:"Adventure", description:"Wildlife safari experience near Kevadia.", image:"assets/images/narmada/adventure/safari.jpg", mapUrl:"https://maps.google.com/?q=Jungle+Safari+Kevadia" },
    { id:"a3", name:"River Rafting Kevadia - Narmada", type:"Adventure", description:"Adventure rafting experience in Narmada waters.", image:"assets/images/narmada/adventure/rafting.jpg", mapUrl:"https://maps.google.com/?q=River+Rafting+Kevadia" },
    { id:"a4", name:"Kevadia Cycling Tracks - Narmada", type:"Adventure", description:"Well-developed cycling routes around tourist zone.", image:"assets/images/narmada/adventure/cycling.jpg", mapUrl:"https://maps.google.com/?q=Kevadia+Cycling+Track" },
    { id:"a5", name:"Forest Trekking Trails - Narmada", type:"Adventure", description:"Hidden trekking routes in interior forest areas.", image:"assets/images/narmada/adventure/trekking.jpg", mapUrl:"https://maps.google.com/?q=Narmada+Trekking" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Statue of Unity Museum - Narmada", type:"Museum", description:"Museum showcasing history and life of Sardar Patel.", image:"assets/images/narmada/museums/sou-museum.jpg", mapUrl:"https://maps.google.com/?q=Statue+of+Unity+Museum" },
    { id:"m2", name:"Rajpipla Palace - Rajpipla", type:"Museum", description:"Historic royal palace reflecting heritage architecture.", image:"assets/images/narmada/museums/rajpipla-palace.jpg", mapUrl:"https://maps.google.com/?q=Rajpipla+Palace" },
    { id:"m3", name:"Old Rajpipla Town Architecture - Rajpipla", type:"Museum", description:"Hidden heritage structures across the old town.", image:"assets/images/narmada/museums/rajpipla-old.jpg", mapUrl:"https://maps.google.com/?q=Rajpipla+Old+Town" }

  ]
},

navsari: {
  id: "navsari",
  name: "Navsari",
  heroImage: "assets/images/cities/Navsari.jpg",
  description: "Explore coastal beaches, historic landmarks, Parsi heritage, temples, and peaceful nature spots in Navsari and nearby regions.",
  places: [

    // ================= PARKS / GARDENS =================
    { id:"p1", name:"Sayaji Baug Navsari - Navsari", type:"Park", description:"Popular garden in Navsari with greenery and relaxation space.", image:"assets/images/navsari/parks/sayaji-baug.jpg", mapUrl:"https://maps.google.com/?q=Sayaji+Baug+Navsari" },
    { id:"p2", name:"Jalalpore Garden - Navsari", type:"Park", description:"Lesser-known garden ideal for quiet visits.", image:"assets/images/navsari/parks/jalalpore-garden.jpg", mapUrl:"https://maps.google.com/?q=Jalalpore+Garden+Navsari" },
    { id:"p3", name:"Dandi Eco Park - Navsari District", type:"Park", description:"Eco-friendly park near the historic Dandi area.", image:"assets/images/navsari/parks/dandi-eco-park.jpg", mapUrl:"https://maps.google.com/?q=Dandi+Eco+Park" },
    { id:"p4", name:"Lakeside Gardens & Local Parks - Navsari Outskirts", type:"Park", description:"Hidden small parks and green spaces near water bodies.", image:"assets/images/navsari/parks/lakeside.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Lake+Garden" },

    // ================= TEMPLES =================
    { id:"t1", name:"Jama Masjid Navsari - Navsari", type:"Temple", description:"Historic mosque known for its architecture and heritage.", image:"assets/images/navsari/temples/jama-masjid.jpg", mapUrl:"https://maps.google.com/?q=Jama+Masjid+Navsari" },
    { id:"t2", name:"Parsi Fire Temple Navsari - Navsari", type:"Temple", description:"Significant Parsi religious site (view-only for visitors).", image:"assets/images/navsari/temples/parsi-fire-temple.jpg", mapUrl:"https://maps.google.com/?q=Parsi+Fire+Temple+Navsari" },
    { id:"t3", name:"Bhadeli Mata Temple - Navsari", type:"Temple", description:"Local temple dedicated to Goddess Bhadeli Mata.", image:"assets/images/navsari/temples/bhadeli-mata.jpg", mapUrl:"https://maps.google.com/?q=Bhadeli+Mata+Temple+Navsari" },
    { id:"t4", name:"Dandi Temple Area - Navsari District", type:"Temple", description:"Spiritual spots around the historic Dandi region.", image:"assets/images/navsari/temples/dandi-temple.jpg", mapUrl:"https://maps.google.com/?q=Dandi+Temple+Navsari" },
    { id:"t5", name:"Village Temples - Navsari District", type:"Temple", description:"Hidden temples across villages with local significance.", image:"assets/images/navsari/temples/village-temples.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Village+Temple" },

    // ================= CAFES =================
    { id:"c1", name:"Navsari Town Market - Navsari", type:"Cafe", description:"Casual hangout with street food and shopping vibe.", image:"assets/images/navsari/cafes/market.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Market" },
    { id:"c2", name:"Dandi Beach Road Cafes - Navsari District", type:"Cafe", description:"Small cafés and food stalls along coastal roads.", image:"assets/images/navsari/cafes/dandi-road.jpg", mapUrl:"https://maps.google.com/?q=Dandi+Beach+Road+Food" },
    { id:"c3", name:"Station Road Food Zones - Navsari", type:"Cafe", description:"Hidden street food spots near station and bazaar.", image:"assets/images/navsari/cafes/station-road.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Station+Road+Food" },
    { id:"c4", name:"Riverside Hangouts - Navsari Outskirts", type:"Cafe", description:"Quiet spots near rivers for relaxation.", image:"assets/images/navsari/cafes/riverside.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Riverbank" },

    // ================= BEACHES =================
    { id:"b1", name:"Dandi Beach - Navsari District", type:"Beach", description:"Famous beach known for historical importance and sunsets.", image:"assets/images/navsari/beaches/dandi.jpg", mapUrl:"https://maps.google.com/?q=Dandi+Beach" },
    { id:"b2", name:"Ubharaat Beach - Navsari District", type:"Beach", description:"Popular beach with local food stalls and activities.", image:"assets/images/navsari/beaches/ubharaat.jpg", mapUrl:"https://maps.google.com/?q=Ubharaat+Beach" },
    { id:"b3", name:"Tithal Beach - Near Navsari", type:"Beach", description:"Well-known beach near district border with tourist facilities.", image:"assets/images/navsari/beaches/tithal.jpg", mapUrl:"https://maps.google.com/?q=Tithal+Beach" },
    { id:"b4", name:"Hidden Coastal Stretches - Navsari District", type:"Beach", description:"Quiet and less explored beach areas near Dandi.", image:"assets/images/navsari/beaches/hidden-coast.jpg", mapUrl:"https://maps.google.com/?q=Dandi+Coastline" },

    // ================= NATURE =================
    { id:"h1", name:"Purna Wildlife Sanctuary - Navsari Side", type:"Nature", description:"Dense forest sanctuary rich in biodiversity.", image:"assets/images/navsari/nature/purna.jpg", mapUrl:"https://maps.google.com/?q=Purna+Wildlife+Sanctuary" },
    { id:"h2", name:"Coastal Green Belts & Villages - Navsari District", type:"Nature", description:"Scenic rural landscapes and greenery.", image:"assets/images/navsari/nature/coastal-green.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Village+Greenery" },

    // ================= WATER SPOTS =================
    { id:"w1", name:"Seasonal Forest Waterfalls - Navsari District", type:"Waterfall", description:"Hidden waterfalls active during monsoon.", image:"assets/images/navsari/waterfalls/seasonal.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Waterfall" },
    { id:"w2", name:"Purna River - Navsari District", type:"Waterfall", description:"Scenic river spots ideal for peaceful visits.", image:"assets/images/navsari/waterfalls/purna-river.jpg", mapUrl:"https://maps.google.com/?q=Purna+River+Navsari" },
    { id:"w3", name:"Village Lakes & Ponds - Navsari Outskirts", type:"Waterfall", description:"Quiet water bodies surrounded by rural beauty.", image:"assets/images/navsari/waterfalls/lakes.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Lake" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Dandi Beach Activities - Navsari District", type:"Adventure", description:"Beachside fun and leisure activities.", image:"assets/images/navsari/adventure/dandi-activity.jpg", mapUrl:"https://maps.google.com/?q=Dandi+Beach+Activities" },
    { id:"a2", name:"Coastal Cycling Routes - Navsari District", type:"Adventure", description:"Scenic cycling along coastal roads.", image:"assets/images/navsari/adventure/cycling.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Cycling+Route" },
    { id:"a3", name:"Rural Trails & Exploration - Navsari District", type:"Adventure", description:"Hidden nature trails across villages.", image:"assets/images/navsari/adventure/trails.jpg", mapUrl:"https://maps.google.com/?q=Navsari+Village+Trail" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Dandi March Site - Navsari District", type:"Museum", description:"Historic site linked to India’s freedom movement.", image:"assets/images/navsari/museums/dandi-march.jpg", mapUrl:"https://maps.google.com/?q=Dandi+March+Site" },
    { id:"m2", name:"Dandi Memorial - Navsari District", type:"Museum", description:"Memorial commemorating the Salt March.", image:"assets/images/navsari/museums/dandi-memorial.jpg", mapUrl:"https://maps.google.com/?q=Dandi+Memorial" },
    { id:"m3", name:"Parsi Heritage Houses - Navsari", type:"Museum", description:"Old homes reflecting rich Parsi culture and history.", image:"assets/images/navsari/museums/parsi-houses.jpg", mapUrl:"https://maps.google.com/?q=Parsi+Heritage+Navsari" }

  ]
},

valsad: {
  id: "valsad",
  name: "Valsad",
  heroImage: "assets/images/cities/Valsad.jpg",
  description: "Explore coastal beaches, scenic hills, temples, waterfalls, and hidden nature spots in Valsad and nearby regions.",
  places: [

    // ================= PARKS / GARDENS =================
    { id:"p1", name:"Sayaji Baug Valsad - Valsad", type:"Park", description:"Popular garden in Valsad city for relaxation and greenery.", image:"assets/images/valsad/parks/sayaji-baug.jpg", mapUrl:"https://maps.google.com/?q=Sayaji+Baug+Valsad" },
    { id:"p2", name:"Parnera Hill Garden - Valsad District", type:"Park", description:"Scenic garden area on Parnera Hill with panoramic views.", image:"assets/images/valsad/parks/parnera-garden.jpg", mapUrl:"https://maps.google.com/?q=Parnera+Hill" },
    { id:"p3", name:"Tithal Beach Garden - Valsad District", type:"Park", description:"Garden area near the beach ideal for evening visits.", image:"assets/images/valsad/parks/tithal-garden.jpg", mapUrl:"https://maps.google.com/?q=Tithal+Beach+Garden" },
    { id:"p4", name:"Coastal Green Patches & Village Parks - Valsad District", type:"Park", description:"Hidden small parks and greenery across coastal villages.", image:"assets/images/valsad/parks/coastal-green.jpg", mapUrl:"https://maps.google.com/?q=Valsad+Village+Garden" },

    // ================= TEMPLES =================
    { id:"t1", name:"Swaminarayan Temple Valsad - Valsad", type:"Temple", description:"Well-known temple with peaceful atmosphere.", image:"assets/images/valsad/temples/swaminarayan.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Valsad" },
    { id:"t2", name:"Sai Baba Temple Valsad - Valsad", type:"Temple", description:"Popular temple visited by devotees regularly.", image:"assets/images/valsad/temples/sai-baba.jpg", mapUrl:"https://maps.google.com/?q=Sai+Baba+Temple+Valsad" },
    { id:"t3", name:"Parnera Hill Temple - Valsad District", type:"Temple", description:"Temple located atop Parnera Hill with scenic surroundings.", image:"assets/images/valsad/temples/parnera-temple.jpg", mapUrl:"https://maps.google.com/?q=Parnera+Hill+Temple" },
    { id:"t4", name:"Shree Tadkeshwar Mahadev Temple - Valsad District", type:"Temple", description:"Ancient Shiva temple with spiritual significance.", image:"assets/images/valsad/temples/tadkeshwar.jpg", mapUrl:"https://maps.google.com/?q=Tadkeshwar+Mahadev+Temple" },
    { id:"t5", name:"Coastal Village Temples - Valsad District", type:"Temple", description:"Hidden temples across coastal villages.", image:"assets/images/valsad/temples/village.jpg", mapUrl:"https://maps.google.com/?q=Valsad+Village+Temple" },

    // ================= CAFES =================
    { id:"c1", name:"Tithal Beach Road - Valsad District", type:"Cafe", description:"Famous hangout with food stalls and beach vibes.", image:"assets/images/valsad/cafes/tithal-road.jpg", mapUrl:"https://maps.google.com/?q=Tithal+Beach+Road" },
    { id:"c2", name:"Valsad City Market - Valsad", type:"Cafe", description:"Casual hangout with local food and shopping.", image:"assets/images/valsad/cafes/market.jpg", mapUrl:"https://maps.google.com/?q=Valsad+Market" },
    { id:"c3", name:"Beachside Cafes & Stalls - Valsad District", type:"Cafe", description:"Food spots along the coastline.", image:"assets/images/valsad/cafes/beachside.jpg", mapUrl:"https://maps.google.com/?q=Tithal+Beach+Food" },
    { id:"c4", name:"Coastal Sunset Points - Valsad District", type:"Cafe", description:"Hidden peaceful spots for sunset views.", image:"assets/images/valsad/cafes/sunset.jpg", mapUrl:"https://maps.google.com/?q=Valsad+Sunset+Point" },

    // ================= BEACHES =================
    { id:"b1", name:"Tithal Beach - Valsad District", type:"Beach", description:"Most famous beach known for black sand and sunset views.", image:"assets/images/valsad/beaches/tithal.jpg", mapUrl:"https://maps.google.com/?q=Tithal+Beach" },
    { id:"b2", name:"Devka Beach - Near Valsad", type:"Beach", description:"Popular beach near district border.", image:"assets/images/valsad/beaches/devka.jpg", mapUrl:"https://maps.google.com/?q=Devka+Beach+Daman" },
    { id:"b3", name:"Jampore Beach - Near Valsad", type:"Beach", description:"Another well-known beach nearby.", image:"assets/images/valsad/beaches/jampore.jpg", mapUrl:"https://maps.google.com/?q=Jampore+Beach+Daman" },
    { id:"b4", name:"Hidden Coastal Stretches - Valsad District", type:"Beach", description:"Less crowded areas along the Tithal coastline.", image:"assets/images/valsad/beaches/hidden.jpg", mapUrl:"https://maps.google.com/?q=Tithal+Coastline" },

    // ================= HILL / NATURE =================
    { id:"h1", name:"Wilson Hills - Valsad District", type:"Nature", description:"Famous hill station with cool climate and scenic views.", image:"assets/images/valsad/nature/wilson-hills.jpg", mapUrl:"https://maps.google.com/?q=Wilson+Hills" },
    { id:"h2", name:"Parnera Hill - Valsad District", type:"Nature", description:"Historic hill with great viewpoints.", image:"assets/images/valsad/nature/parnera.jpg", mapUrl:"https://maps.google.com/?q=Parnera+Hill" },
    { id:"h3", name:"Dharampur Forest Areas - Valsad District", type:"Nature", description:"Hidden forest patches rich in greenery.", image:"assets/images/valsad/nature/dharampur.jpg", mapUrl:"https://maps.google.com/?q=Dharampur+Forest+Valsad" },

    // ================= WATERFALLS =================
    { id:"w1", name:"Shankar Waterfall - Valsad District", type:"Waterfall", description:"Hidden waterfall surrounded by nature.", image:"assets/images/valsad/waterfalls/shankar.jpg", mapUrl:"https://maps.google.com/?q=Shankar+Waterfall+Valsad" },
    { id:"w2", name:"Barumal Waterfall - Valsad District", type:"Waterfall", description:"Scenic waterfall in forest region.", image:"assets/images/valsad/waterfalls/barumal.jpg", mapUrl:"https://maps.google.com/?q=Barumal+Waterfall" },
    { id:"w3", name:"Damanganga River - Valsad District", type:"Waterfall", description:"River spots offering peaceful views.", image:"assets/images/valsad/waterfalls/damanganga.jpg", mapUrl:"https://maps.google.com/?q=Damanganga+River" },
    { id:"w4", name:"Seasonal Jungle Waterfalls - Valsad District", type:"Waterfall", description:"Hidden waterfalls active during monsoon.", image:"assets/images/valsad/waterfalls/seasonal.jpg", mapUrl:"https://maps.google.com/?q=Valsad+Waterfall" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Wilson Hills Trekking - Valsad District", type:"Adventure", description:"Popular trekking trails in hill area.", image:"assets/images/valsad/adventure/wilson-trek.jpg", mapUrl:"https://maps.google.com/?q=Wilson+Hills+Trekking" },
    { id:"a2", name:"Parnera Hill Trekking - Valsad District", type:"Adventure", description:"Short trek with scenic views.", image:"assets/images/valsad/adventure/parnera-trek.jpg", mapUrl:"https://maps.google.com/?q=Parnera+Hill+Trek" },
    { id:"a3", name:"Tithal Beach Activities - Valsad District", type:"Adventure", description:"Beach fun and leisure activities.", image:"assets/images/valsad/adventure/tithal-activity.jpg", mapUrl:"https://maps.google.com/?q=Tithal+Beach+Activities" },
    { id:"a4", name:"Forest Trails & Cycling Routes - Valsad District", type:"Adventure", description:"Hidden routes across forest and rural areas.", image:"assets/images/valsad/adventure/cycling.jpg", mapUrl:"https://maps.google.com/?q=Valsad+Cycling+Route" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Parnera Fort - Valsad District", type:"Museum", description:"Historic fort offering panoramic views and heritage value.", image:"assets/images/valsad/museums/parnera-fort.jpg", mapUrl:"https://maps.google.com/?q=Parnera+Fort" },
    { id:"m2", name:"Old Valsad Town Heritage - Valsad", type:"Museum", description:"Lesser-known historic areas in the city.", image:"assets/images/valsad/museums/old-town.jpg", mapUrl:"https://maps.google.com/?q=Old+Valsad+Town" },
    { id:"m3", name:"Colonial Coastal Structures - Valsad District", type:"Museum", description:"Hidden colonial-era structures along the coast.", image:"assets/images/valsad/museums/colonial.jpg", mapUrl:"https://maps.google.com/?q=Valsad+Colonial+Buildings" }

  ]
},

dwarka: {
  id: "dwarka",
  name: "Dwarka",
  heroImage: "assets/images/cities/Dwarka.jpg",
  description: "Explore temples, beaches, coastal views, spiritual ghats, cafes, and hidden nature spots in Dwarka.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Dwarka Beach Garden – Dwarka", type:"Park", image:"assets/images/dwarka/parks/dwarka-beach-garden.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Beach+Garden" },
    { id:"p2", name:"Gomti Ghat Open Area – Dwarka", type:"Park", image:"assets/images/dwarka/parks/gomti-ghat.jpg", mapUrl:"https://maps.google.com/?q=Gomti+Ghat+Dwarka" },
    { id:"p3", name:"Temple Side Green Areas – Dwarka", type:"Park", image:"assets/images/dwarka/parks/temple-green-area.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Temple+Area" },
    { id:"p4", name:"Residential Small Gardens – Dwarka", type:"Park", image:"assets/images/dwarka/parks/residential-garden.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Residential+Garden" },

    // ================= TEMPLES =================
    { id:"t1", name:"Dwarkadhish Temple – Dwarka", type:"Temple", image:"assets/images/dwarka/temples/dwarkadhish.jpg", mapUrl:"https://maps.google.com/?q=Dwarkadhish+Temple" },
    { id:"t2", name:"Rukmini Devi Temple – Dwarka", type:"Temple", image:"assets/images/dwarka/temples/rukmini-temple.jpg", mapUrl:"https://maps.google.com/?q=Rukmini+Temple+Dwarka" },
    { id:"t3", name:"Nageshwar Jyotirlinga Temple – Dwarka", type:"Temple", image:"assets/images/dwarka/temples/nageshwar.jpg", mapUrl:"https://maps.google.com/?q=Nageshwar+Jyotirlinga" },
    { id:"t4", name:"Gomti Ghat Temples – Dwarka", type:"Temple", image:"assets/images/dwarka/temples/gomti-temples.jpg", mapUrl:"https://maps.google.com/?q=Gomti+Ghat+Temples+Dwarka" },
    { id:"t5", name:"Bhadkeshwar Mahadev Temple – Dwarka", type:"Temple", image:"assets/images/dwarka/temples/bhadkeshwar.jpg", mapUrl:"https://maps.google.com/?q=Bhadkeshwar+Mahadev" },
    { id:"t6", name:"Gita Mandir – Dwarka", type:"Temple", image:"assets/images/dwarka/temples/gita-mandir.jpg", mapUrl:"https://maps.google.com/?q=Gita+Mandir+Dwarka" },
    { id:"t7", name:"Local Mahadev Temples – Dwarka", type:"Temple", image:"assets/images/dwarka/temples/mahadev.jpg", mapUrl:"https://maps.google.com/?q=Mahadev+Temple+Dwarka" },

    // ================= CAFES =================
    { id:"c1", name:"Govinda Multi Cuisine Restaurant – Dwarka", type:"Cafe", image:"assets/images/dwarka/cafes/govinda.jpg", mapUrl:"https://maps.google.com/?q=Govinda+Restaurant+Dwarka" },
    { id:"c2", name:"The Grand Radhe Restaurant – Dwarka", type:"Cafe", image:"assets/images/dwarka/cafes/grand-radhe.jpg", mapUrl:"https://maps.google.com/?q=Grand+Radhe+Restaurant+Dwarka" },
    { id:"c3", name:"Sea View Local Cafes – Dwarka", type:"Cafe", image:"assets/images/dwarka/cafes/sea-view.jpg", mapUrl:"https://maps.google.com/?q=Sea+View+Cafe+Dwarka" },
    { id:"c4", name:"Street Tea Cafes (Temple Area) – Dwarka", type:"Cafe", image:"assets/images/dwarka/cafes/street-tea.jpg", mapUrl:"https://maps.google.com/?q=Tea+Stalls+Dwarka" },

    // ================= HILL STATION =================
    { id:"h1", name:"Coastal Cliff Area (Near Bhadkeshwar) – Dwarka", type:"Hill Station", image:"assets/images/dwarka/hills/coastal-cliff.jpg", mapUrl:"https://maps.google.com/?q=Bhadkeshwar+Coastal+Cliff" },
    { id:"h2", name:"Gomti River Bank Walks – Dwarka", type:"Hill Station", image:"assets/images/dwarka/hills/gomti-walk.jpg", mapUrl:"https://maps.google.com/?q=Gomti+River+Dwarka" },
    { id:"h3", name:"Beyt Dwarka Island – Dwarka", type:"Hill Station", image:"assets/images/dwarka/hills/beyt-dwarka.jpg", mapUrl:"https://maps.google.com/?q=Beyt+Dwarka" },
    { id:"h4", name:"Hidden Coastal Trails – Dwarka", type:"Hill Station", image:"assets/images/dwarka/hills/coastal-trails.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Coastal+Trails" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Dwarka Beach – Dwarka", type:"Adventure", image:"assets/images/dwarka/adventure/dwarka-beach.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Beach" },
    { id:"a2", name:"Boat Ride to Beyt Dwarka – Dwarka", type:"Adventure", image:"assets/images/dwarka/adventure/boat-beyt.jpg", mapUrl:"https://maps.google.com/?q=Beyt+Dwarka+Boat" },
    { id:"a3", name:"Coastal Exploration Routes – Dwarka", type:"Adventure", image:"assets/images/dwarka/adventure/coastal-route.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Coastal+Route" },
    { id:"a4", name:"Lighthouse Area Exploration – Dwarka", type:"Adventure", image:"assets/images/dwarka/adventure/lighthouse.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Lighthouse" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Dwarka Lighthouse – Dwarka", type:"Museum", image:"assets/images/dwarka/museums/lighthouse.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Lighthouse" },
    { id:"m2", name:"Sudama Setu – Dwarka", type:"Museum", image:"assets/images/dwarka/museums/sudama-setu.jpg", mapUrl:"https://maps.google.com/?q=Sudama+Setu" },
    { id:"m3", name:"Old Dwarka City Streets – Dwarka", type:"Museum", image:"assets/images/dwarka/museums/old-city.jpg", mapUrl:"https://maps.google.com/?q=Old+Dwarka+City" },
    { id:"m4", name:"Temple Old Architecture Zones – Dwarka", type:"Museum", image:"assets/images/dwarka/museums/temple-architecture.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Temple+Architecture" },

    // ================= BEACHES =================
    { id:"b1", name:"Dwarka Beach – Dwarka", type:"Beach", image:"assets/images/dwarka/beaches/dwarka-beach.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Beach" },
    { id:"b2", name:"Shivrajpur Beach – Dwarka", type:"Beach", image:"assets/images/dwarka/beaches/shivrajpur.jpg", mapUrl:"https://maps.google.com/?q=Shivrajpur+Beach" },
    { id:"b3", name:"Beyt Dwarka Beach – Dwarka", type:"Beach", image:"assets/images/dwarka/beaches/beyt.jpg", mapUrl:"https://maps.google.com/?q=Beyt+Dwarka+Beach" },
    { id:"b4", name:"Hidden Coastal Stretches – Dwarka", type:"Beach", image:"assets/images/dwarka/beaches/hidden-coast.jpg", mapUrl:"https://maps.google.com/?q=Dwarka+Hidden+Beach" }

  ]
},

  // ================= JUNAGADH =================
junagadh: {
  id: "junagadh",
  name: "Junagadh",
  heroImage: "assets/images/cities/Junagadh.webp",
  description: "Explore parks, temples, cafes, beaches, adventure spots and museums in Junagadh.",
  places: [

    // ================= PARKS =================
    { id:"p1", name:"Sakkarbaug Zoological Garden – Junagadh City", type:"Park", image:"assets/images/junagadh/parks/sakkarbaug.jpg", mapUrl:"https://maps.google.com/?q=Sakkarbaug+Zoo+Junagadh" },
    { id:"p2", name:"Motibaug – Junagadh City", type:"Park", image:"assets/images/junagadh/parks/motibaug.jpg", mapUrl:"https://maps.google.com/?q=Motibaug+Junagadh" },
    { id:"p3", name:"Veraval Chowpatty Area – Veraval", type:"Park", image:"assets/images/junagadh/parks/veraval-chowpatty.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Chowpatty" },
    { id:"p4", name:"Fishery Harbor Walk Area – Veraval", type:"Park", image:"assets/images/junagadh/parks/harbor-walk.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Harbor" },

    // ================= TEMPLES =================
    { id:"t1", name:"Uparkot Fort Temples – Junagadh City", type:"Temple", image:"assets/images/junagadh/temples/uparkot-temple.jpg", mapUrl:"https://maps.google.com/?q=Uparkot+Fort+Junagadh" },
    { id:"t2", name:"Damodar Kund – Junagadh City", type:"Temple", image:"assets/images/junagadh/temples/damodar-kund.jpg", mapUrl:"https://maps.google.com/?q=Damodar+Kund+Junagadh" },
    { id:"t3", name:"Swaminarayan Temple – Junagadh City", type:"Temple", image:"assets/images/junagadh/temples/swaminarayan.jpg", mapUrl:"https://maps.google.com/?q=Swaminarayan+Temple+Junagadh" },
    { id:"t4", name:"Somnath Temple – Veraval", type:"Temple", image:"assets/images/junagadh/temples/somnath.jpg", mapUrl:"https://maps.google.com/?q=Somnath+Temple" },
    { id:"t5", name:"Bhalka Tirth – Veraval", type:"Temple", image:"assets/images/junagadh/temples/bhalka-tirth.jpg", mapUrl:"https://maps.google.com/?q=Bhalka+Tirth" },
    { id:"t6", name:"Local Coastal Temples – Veraval", type:"Temple", image:"assets/images/junagadh/temples/coastal-temple.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Temple" },

    // ================= CAFES =================
    { id:"c1", name:"Petals Restaurant – Junagadh City", type:"Cafe", image:"assets/images/junagadh/cafes/petals.jpg", mapUrl:"https://maps.google.com/?q=Petals+Restaurant+Junagadh" },
    { id:"c2", name:"The Grand Daksh – Junagadh City", type:"Cafe", image:"assets/images/junagadh/cafes/grand-daksh.jpg", mapUrl:"https://maps.google.com/?q=Grand+Daksh+Junagadh" },
    { id:"c3", name:"Cafe Coffee Day – Junagadh City", type:"Cafe", image:"assets/images/junagadh/cafes/ccd.jpg", mapUrl:"https://maps.google.com/?q=Cafe+Coffee+Day+Junagadh" },
    { id:"c4", name:"Local Sea View Cafes – Veraval", type:"Cafe", image:"assets/images/junagadh/cafes/sea-view.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Sea+View+Cafe" },
    { id:"c5", name:"Street Food Stalls – Veraval", type:"Cafe", image:"assets/images/junagadh/cafes/street-food.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Street+Food" },

    // ================= HILL STATION =================
    { id:"h1", name:"Girnar Hills – Junagadh City", type:"Hill Station", image:"assets/images/junagadh/hills/girnar.jpg", mapUrl:"https://maps.google.com/?q=Girnar+Hills" },

    // ================= ADVENTURE =================
    { id:"a1", name:"Girnar Trekking Route – Junagadh City", type:"Adventure", image:"assets/images/junagadh/adventure/girnar-trek.jpg", mapUrl:"https://maps.google.com/?q=Girnar+Trek" },
    { id:"a2", name:"Uparkot Fort Exploration – Junagadh City", type:"Adventure", image:"assets/images/junagadh/adventure/uparkot.jpg", mapUrl:"https://maps.google.com/?q=Uparkot+Fort" },
    { id:"a3", name:"Veraval Beach Walk – Veraval", type:"Adventure", image:"assets/images/junagadh/adventure/veraval-walk.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Beach" },
    { id:"a4", name:"Harbor Exploration Area – Veraval", type:"Adventure", image:"assets/images/junagadh/adventure/harbor.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Harbor" },

    // ================= MUSEUMS =================
    { id:"m1", name:"Uparkot Fort – Junagadh City", type:"Museum", image:"assets/images/junagadh/museums/uparkot.jpg", mapUrl:"https://maps.google.com/?q=Uparkot+Fort" },
    { id:"m2", name:"Darbar Hall Museum – Junagadh City", type:"Museum", image:"assets/images/junagadh/museums/darbar-hall.jpg", mapUrl:"https://maps.google.com/?q=Darbar+Hall+Museum+Junagadh" },
    { id:"m3", name:"Mahabat Maqbara – Junagadh City", type:"Museum", image:"assets/images/junagadh/museums/mahabat.jpg", mapUrl:"https://maps.google.com/?q=Mahabat+Maqbara" },
    { id:"m4", name:"Junagadh Museum – Junagadh City", type:"Museum", image:"assets/images/junagadh/museums/junagadh-museum.jpg", mapUrl:"https://maps.google.com/?q=Junagadh+Museum" },
    { id:"m5", name:"Somnath Museum – Veraval", type:"Museum", image:"assets/images/junagadh/museums/somnath-museum.jpg", mapUrl:"https://maps.google.com/?q=Somnath+Museum" },

    // ================= BEACHES =================
    { id:"b1", name:"Veraval Beach – Veraval", type:"Beach", image:"assets/images/junagadh/beaches/veraval.jpg", mapUrl:"https://maps.google.com/?q=Veraval+Beach" },
    { id:"b2", name:"Somnath Beach – Veraval", type:"Beach", image:"assets/images/junagadh/beaches/somnath.jpg", mapUrl:"https://maps.google.com/?q=Somnath+Beach" }

  ]
}

};


// ===============================
// CATEGORY DETAILS (SAFE)
// ===============================

const categoryDetails = {
  cafe: { title: "Cafes" },
  park: { title: "Parks" },
  temple: { title: "Temples" },
  museum: { title: "Museums" },
  adventure: { title: "Adventure" },
  hillstation: { title: "Hill Stations" },
  waterfall: { title: "Waterfalls" },
  beach: { title: "Beaches" }
};

// ===============================
// FLATTENED DATA (SAFE)
// ===============================

const placeDetailsData = Object.entries(cityExplorerData).flatMap(
  ([cityId, city]) =>
    city.places.map(place => ({
      ...place,
      cityId,
      category: categoryDetails[place.type]?.title || place.type
    }))
);


// ===============================
// HELPERS
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

function getNearbyPlaces(cityId, nearbyIds = []) {
  const city = cityExplorerData[cityId];
  return nearbyIds.map(id =>
    city.places.find(place => place.id === id)
  );
}
