// 1. Data Store: 12 Brands with their models
const fleetData = {
    mercedes: {
        title: "Mercedes-Benz, Maybach & Brabus",
        brandImg1: "images/Mercedes logo.jpeg",
        brandImg2: "images/Mercedes.jpeg",
        models: [
            { name: "Mercedes-AMG GT Black Series", hp: "720 HP", price: "$325,000 | $1,800/day", img: "images/Mercedes AMG GT black series.jpg", tech: "4.0L V8 Biturbo, Active Aero", maint: "AMG Master Mechanic certified" },
            { name: "Mercedes-Maybach S 680 4MATIC", hp: "621 HP", price: "$230,000 | $1,300/day", img: "images/Mercedes maybach.jpg", tech: "6.0L V12 Biturbo, Executive Rear Suite", maint: "Maybach VIP Priority Service" },
            { name: "Mercedes-Brabus 900 Rocket Edition", hp: "900 HP", price: "$550,000 | $2,500/day", img: "images/Brabus.jpg", tech: "4.5L V8, Custom Carbon Bodywork", maint: "Brabus Telemetry Refresh" },
            { name: "Mercedes-Maybach GLS 600 SUV", hp: "550 HP", price: "$170,000 | $1,100/day", img: "images/maybach GLS.jpg", tech: "4.0L V8 Biturbo, AIRMATIC", maint: "Quarterly inspection package" },
            { name: "Mercedes-AMG ONE", hp: "1049 HP", price: "$2,720,000 | $8,500/day", img: "images/mercedes amg.jpg", tech: "1.6L V6 Turbo + 4 Electric Motors (F1 Tech)", maint: "AMG F1 Powertrain Specialist" },
            { name: "Mercedes-AMG G 63 4x4²", hp: "577 HP", price: "$350,000 | $1,900/day", img: "images/mercedes g63.jpg", tech: "4.0L Biturbo V8, Portal Axles", maint: "Heavy Duty Suspension Inspection" }
        ]
    },
    porsche: {
        title: "Porsche Performance Lineup",
        brandImg1: "images/porsche logo.jpeg",
        brandImg2: "images/porsche.jpeg",
        models: [
            { name: "Porsche 911 GT3 RS (992)", hp: "518 HP", price: "$241,300 | $1,400/day", img: "images/porsche gt3 rs.jpg", tech: "4.0L Flat-6 NA, Active DRS", maint: "Porsche Approved Warranty" },
            { name: "Porsche Taycan Turbo S", hp: "750 HP", price: "$194,900 | $1,000/day", img: "images/porsche taycan turbo.jpg", tech: "Dual Electric Motors, 800V Architecture", maint: "EV System Check" },
            { name: "Porsche 718 Cayman GT4 RS", hp: "493 HP", price: "$160,700 | $850/day", img: "images/porsche 718 cayman.jpg", tech: "Mid-mounted 4.0L Flat-6", maint: "Scheduled track prep" },
            { name: "Porsche Panamera Turbo S", hp: "620 HP", price: "$186,400 | $900/day", img: "images/porsche panamera.jpg", tech: "4.0L Twin-Turbo V8", maint: "Annual fluids & brakes" },
            { name: "Porsche 918 Spyder", hp: "887 HP", price: "$1,600,000 | $6,000/day", img: "images/porsche 918.avif", tech: "4.6L V8 Hybrid, Weissach Package", maint: "Porsche Classic Hybrid Service" },
            { name: "Porsche Carrera GT", hp: "603 HP", price: "$1,200,000 | $5,000/day", img: "images/porsche carrera.webp", tech: "5.7L NA V10, Manual Transmission", maint: "V10 Valve & Clutch Calibration" }
        ]
    },
    bmw: {
        title: "BMW M Performance Series",
        brandImg1: "images/BMW logo.jpeg",
        brandImg2: "images/about section bmw.jpg",
        models: [
            { name: "BMW M4 Competition xDrive", hp: "503 HP", price: "$86,300 | $450/day", img: "images/BMW M4.jpg", tech: "3.0L TwinPower Turbo I6", maint: "Complimentary service" },
            { name: "BMW M5 CS Limited Edition", hp: "627 HP", price: "$143,000 | $750/day", img: "images/BMW M5.jpg", tech: "4.4L Twin-Turbo V8", maint: "Track-use telemetry check" },
            { name: "BMW M8 Competition Coupe", hp: "617 HP", price: "$138,800 | $700/day", img: "images/BMW M8.jpg", tech: "M xDrive 2WD mode", maint: "M-Power drivetrain check" },
            { name: "BMW XM Label Red SUV", hp: "738 HP", price: "$185,000 | $950/day", img: "images/BMW XM.jpg", tech: "M Hybrid V8 Powertrain", maint: "Dual drivetrain maintenance" },
            { name: "BMW M4 CSL", hp: "543 HP", price: "$140,000 | $800/day", img: "images/bmw m4 csl.jpg", tech: "3.0L Twin-Turbo I6, Track Weight Reduction", maint: "Carbon-ceramic Brake Inspection" },
            { name: "BMW M3 CS", hp: "543 HP", price: "$118,700 | $650/day", img: "images/bmw m3.jpg", tech: "3.0L Inline-6 Turbo, M xDrive", maint: "M Differential Fluids Refresh" }
        ]
    },
    mclaren: {
        title: "McLaren Supercar Series",
        brandImg1: "images/MCLaren logo.jpeg",
        brandImg2: "images/MCLaren.jpeg",
        models: [
            { name: "McLaren 720S Performance", hp: "710 HP", price: "$310,500 | $1,750/day", img: "images/mclaren 720.jpg", tech: "4.0L Twin-Turbo V8, Monocage II", maint: "McLaren Qualified Check" },
            { name: "McLaren 750S Spider", hp: "740 HP", price: "$345,000 | $1,900/day", img: "images/mclaren 750s+.jpg", tech: "Retractable Hardtop, Proactive Chassis", maint: "Hydraulic System Service" },
            { name: "McLaren Artura Hybrid", hp: "671 HP", price: "$237,500 | $1,200/day", img: "images/mclaren artura.jpg", tech: "3.0L V6 Hybrid Powertrain", maint: "High-voltage battery service" },
            { name: "McLaren GT", hp: "612 HP", price: "$208,490 | $950/day", img: "images/mclaren gt.webp", tech: "Grand Tourer Chassis", maint: "Annual synthetic oil service" },
            { name: "McLaren Senna", hp: "789 HP", price: "$1,050,000 | $4,500/day", img: "images/mclaren senna.jpg", tech: "4.0L Twin-Turbo V8, Active Aero Canopy", maint: "McLaren Special Operations Service" },
            { name: "McLaren P1 Hybrid", hp: "903 HP", price: "$1,350,000 | $5,500/day", img: "images/mclaren p1.avif", tech: "3.8L V8 Twin-Turbo + IPAS Electric", maint: "Ultimate Series Diagnostics" }
        ]
    },
    toyota: {
        title: "Toyota GR Performance & Luxury",
        brandImg1: "images/toyota logo.jpeg",
        brandImg2: "images/toyota.jpeg",
        models: [
            { name: "Toyota GR Supra 3.0 Manual", hp: "382 HP", price: "$58,500 | $300/day", img: "images/toyota gt supra.jpg", tech: "3.0L Turbocharged Inline-6", maint: "GR Performance Maintenance" },
            { name: "Toyota GR Yaris Circuit Pack", hp: "268 HP", price: "$42,000 | $220/day", img: "images/toyota yaris.jpg", tech: "GR-FOUR AWD System", maint: "Rally-spec AWD service" },
            { name: "Toyota Century SUV Luxury", hp: "406 HP", price: "$170,000 | $900/day", img: "images/toyota century.jpg", tech: "3.5L V6 Plug-in Hybrid", maint: "VIP Chauffeur Inspection" },
            { name: "Toyota Land Cruiser 300 GR-S", hp: "409 HP", price: "$110,000 | $550/day", img: "images/toyota cruiser.jpg", tech: "3.5L Twin-Turbo V6", maint: "Heavy-duty off-road check" },
            { name: "Toyota LFA V10 Legend", hp: "552 HP", price: "$850,000 | $3,500/day", img: "images/toyota lfa.jpg", tech: "4.8L NA V10, Carbon Monocoque", maint: "LFA Master Technician Inspection" },
            { name: "Toyota GR Corolla MORIZO", hp: "300 HP", price: "$52,000 | $280/day", img: "images/toyota gr.jpg", tech: "1.6L Turbocharged 3-Cylinder, AWD", maint: "GR Track Telemetry Check" }
        ]
    },
    bentley: {
        title: "Bentley Ultra-Luxury Lineup",
        brandImg1: "images/Bently Logo.jpeg",
        brandImg2: "images/Bently.jpeg",
        models: [
            { name: "Bentley Continental GT Speed", hp: "650 HP", price: "$302,900 | $1,500/day", img: "images/bently continental.jpg", tech: "6.0L Twin-Turbo W12", maint: "Bentley Specialist Inspection" },
            { name: "Bentley Flying Spur Mulliner", hp: "542 HP", price: "$315,000 | $1,600/day", img: "images/bently spur.jpg", tech: "V8 / Hybrid Executive Cabin", maint: "Full bespoke interior check" },
            { name: "Bentley Bentayga EWB", hp: "542 HP", price: "$229,000 | $1,200/day", img: "images/bently bentayga.jpg", tech: "Airline Seat Specification SUV", maint: "Air suspension calibration" },
            { name: "Bentley Batur Limited Edition", hp: "730 HP", price: "$2,100,000 | VIP Only", img: "images/bently batur.webp", tech: "Handcrafted W12 Coachbuilt", maint: "Factory-direct team service" },
            { name: "Bentley Bacalar Coachbuilt", hp: "650 HP", price: "$1,900,000 | VIP Only", img: "images/bentely bacalar.jpg", tech: "Custom 6.0L W12 Roofless Barchetta", maint: "Mulliner Bespoke Maintenance" },
            { name: "Bentley Continental GTC Convertible", hp: "542 HP", price: "$280,000 | $1,400/day", img: "images/bentely gtc.jpg", tech: "4.0L Twin-Turbo V8 Convertible", maint: "Roof Mechanism & Seals Check" }
        ]
    },
    audi: {
        title: "Audi Sport & e-tron Series",
        brandImg1: "images/Audi logo.jpeg",
        brandImg2: "images/Audi.jpeg",
        models: [
            { name: "Audi R8 V10 Performance quattro", hp: "602 HP", price: "$209,700 | $1,100/day", img: "images/audi r8.jpg", tech: "5.2L Naturally Aspirated V10", maint: "Audi Sport Certified Check" },
            { name: "Audi RS6 Avant Performance", hp: "621 HP", price: "$125,800 | $650/day", img: "images/audi rs6.webp", tech: "4.0L Twin-Turbo V8 Estate", maint: "Dynamic Ride Control check" },
            { name: "Audi RS e-tron GT", hp: "637 HP", price: "$147,100 | $750/day", img: "images/audi etron.jpg", tech: "Quattro All-Wheel EV", maint: "High-voltage diagnostics" },
            { name: "Audi RS Q8 SUV", hp: "591 HP", price: "$125,800 | $600/day", img: "images/audi rs.jpg", tech: "4.0L V8 Twin-Turbo SUV", maint: "Quarterly suspension test" },
            { name: "Audi R8 GT RWD Limited", hp: "602 HP", price: "$249,900 | $1,300/day", img: "images/audi r8 gt.jpg", tech: "5.2L NA V10, Lightweight RWD", maint: "Audi Sport Track Prep" },
            { name: "Audi RS3 Sportback", hp: "401 HP", price: "$61,700 | $350/day", img: "images/audi rs3.avif", tech: "2.5L 5-Cylinder Turbo, Torque Splitter", maint: "Differential & Clutch Service" }
        ]
    },
    ferrari: {
        title: "Ferrari Italian Exotic Fleet",
        brandImg1: "images/Ferrari logo.jpeg",
        brandImg2: "images/Ferrari.jpeg",
        models: [
            { name: "Ferrari SF90 Stradale Assetto Corsa", hp: "986 HP", price: "$524,000 | $2,800/day", img: "images/ferrari sf90.jpg", tech: "4.0L V8 Turbo + 3 Electric Motors", maint: "Ferrari Genuine Maintenance" },
            { name: "Ferrari 296 GTB Hybrid", hp: "819 HP", price: "$338,000 | $1,800/day", img: "images/ferrari 296.jpg", tech: "120-degree V6 Turbo PHEV", maint: "Hybrid Powertrain check" },
            { name: "Ferrari Purosangue V12", hp: "715 HP", price: "$398,000 | $2,200/day", img: "images/ferrari v12.jpg", tech: "6.5L NA V12 Active Suspension", maint: "Full V12 fluids refresh" },
            { name: "Ferrari 812 GTS Spider", hp: "789 HP", price: "$429,000 | $2,100/day", img: "images/ferrari 812.jpg", tech: "Front-Mid 6.5L V12 Engine", maint: "Complimentary 7-year plan" },
            { name: "Ferrari Daytona SP3", hp: "829 HP", price: "$2,250,000 | VIP Only", img: "images/ferrari daytona.webp", tech: "6.5L Mid-Mounted NA V12, Icona Series", maint: "Ferrari Classiche Certification" },
            { name: "Ferrari 812 Competizione", hp: "819 HP", price: "$600,000 | $3,000/day", img: "images/ferrari 812 competizione.jpg", tech: "6.5L NA V12 (9,500 RPM Redline)", maint: "High-RPM Valvetrain Service" }
        ]
    },
    lamborghini: {
        title: "Lamborghini V10 & V12 Supercars",
        brandImg1: "images/Lamborghini logo.jpeg",
        brandImg2: "images/lamborghini.jpeg",
        models: [
            { name: "Lamborghini Revuelto V12 PHEV", hp: "1001 HP", price: "$604,000 | $3,200/day", img: "images/lambo revuelto.jpg", tech: "6.5L V12 + 3 Electric Motors", maint: "Official Factory Diagnostics" },
            { name: "Lamborghini Huracán Sterrato", hp: "602 HP", price: "$278,000 | $1,500/day", img: "images/lambo sterrato.webp", tech: "5.2L V10 All-Terrain Supercar", maint: "Dust & filter protection check" },
            { name: "Lamborghini Urus Performante", hp: "657 HP", price: "$260,000 | $1,300/day", img: "images/lambo urus.jpg", tech: "4.0L Twin-Turbo V8 Super SUV", maint: "Brake & tire wear inspection" },
            { name: "Lamborghini Aventador SVJ", hp: "759 HP", price: "$517,000 | $2,700/day", img: "images/lambo svj.jpg", tech: "ALA 2.0 Active Aerodynamics", maint: "ALA System Recalibration" },
            { name: "Lamborghini Sian FKP 37", hp: "808 HP", price: "$3,700,000 | VIP Only", img: "images/lambo sian.jpg", tech: "6.5L V12 + Supercapacitor Hybrid", maint: "Supercapacitor System Check" },
            { name: "Lamborghini Huracán STO", hp: "631 HP", price: "$330,000 | $1,800/day", img: "images/lambo sto.jpg", tech: "5.2L NA V10, Rear-Wheel Drive Track Spec", maint: "Carbon Cofango Bodywork Inspection" }
        ]
    },
    nissan: {
        title: "Nissan NISMO & GT-R Series",
        brandImg1: "images/Nissan logo.jpeg",
        brandImg2: "images/Nissan.jpeg",
        models: [
            { name: "Nissan GT-R NISMO (R35)", hp: "600 HP", price: "$221,000 | $1,100/day", img: "images/nissan gtr.jpg", tech: "3.8L Twin-Turbo V6 Handbuilt", maint: "GT-R Certified Specialist Check" },
            { name: "Nissan Z NISMO", hp: "420 HP", price: "$65,000 | $350/day", img: "images/nissan znismo.jpg", tech: "3.0L Twin-Turbo V6", maint: "NISMO Track prep" },
            { name: "Nissan Skyline GT-R R34 V-Spec II", hp: "327 HP", price: "$180,000 | $900/day", img: "images/nissan r34.webp", tech: "RB26DETT Twin-Turbo I6 ATTESA", maint: "Heritage Classic Car Service" },
            { name: "Nissan Patrol NISMO V8", hp: "428 HP", price: "$105,000 | $500/day", img: "images/nissan patrol.jpg", tech: "5.6L V8 Performance SUV", maint: "Heavy Duty Powertrain Check" },
            { name: "Nissan GT-R T-Spec", hp: "565 HP", price: "$141,000 | $800/day", img: "images/nissan gtr tspec.jpg", tech: "3.8L Twin-Turbo V6, Carbon Ceramic Brakes", maint: "ATTESA E-TS AWD Service" },
            { name: "Nissan Skyline GT-R R33 Nismo 400R", hp: "400 HP", price: "$350,000 | $1,500/day", img: "images/nissan r33.jpg", tech: "2.8L RB-X GT2 Twin-Turbo I6", maint: "Nismo Heritage Restoration Check" }
        ]
    },
    bugatti: {
        title: "Bugatti Hypercar Fleet",
        brandImg1: "images/bugatti logo.jpg",
        brandImg2: "images/bugatti.jpg",
        models: [
            { name: "Bugatti Chiron Super Sport 300+", hp: "1578 HP", price: "$3,900,000 | VIP Only", img: "images/bugatti chiron.jpg", tech: "8.0L Quad-Turbo W16 Engine", maint: "Bugatti Flying Doctor Service" },
            { name: "Bugatti Tourbillon V16", hp: "1775 HP", price: "$4,100,000 | VIP Only", img: "images/bugatti tourbillon.jpg", tech: "8.3L NA V16 + 3 Electric Motors", maint: "Factory High-Voltage Diagnostics" },
            { name: "Bugatti Divo Limited Edition", hp: "1479 HP", price: "$5,800,000 | VIP Only", img: "images/bugatti divo.jpg", tech: "8.0L W16, High-Downforce Aero", maint: "Bespoke Chassis Recalibration" },
            { name: "Bugatti Centodieci", hp: "1578 HP", price: "$9,000,000 | VIP Only", img: "images/bugatti centodieci.jpg", tech: "8.0L W16 Tribute to EB110 (1 of 10)", maint: "Exclusive Heritage Maintenance" },
            { name: "Bugatti Bolide Track Hypercar", hp: "1825 HP", price: "$4,400,000 | VIP Only", img: "images/bugatti bolide.webp", tech: "8.0L Quad-Turbo W16, Track Only", maint: "Full Race-spec Telemetry Check" },
            { name: "Bugatti Veyron 16.4 Grand Sport Vitesse", hp: "1200 HP", price: "$2,200,000 | $8,000/day", img: "images/bugatti veyron.jpg", tech: "8.0L Quad-Turbo W16 Roadster", maint: "Quad-Turbo System Refresh" }
        ]
    },
    rollsroyce: {
        title: "Rolls-Royce Prestige Collection",
        brandImg1: "images/RR logo.jpg",
        brandImg2: "images/RR.webp",
        models: [
            { name: "Rolls-Royce Phantom VIII EWB", hp: "563 HP", price: "$540,000 | $2,500/day", img: "images/rr phantom.jpg", tech: "6.75L Twin-Turbo V12, Architecture of Luxury", maint: "Rolls-Royce White Glove Service" },
            { name: "Rolls-Royce Spectre Electric", hp: "577 HP", price: "$420,000 | $2,000/day", img: "images/rr spectre.avif", tech: "Dual-Motor Electric Ultra-Luxury Coupe", maint: "EV System & Starlight Headliner Check" },
            { name: "Rolls-Royce Cullinan Black Badge", hp: "592 HP", price: "$450,000 | $2,200/day", img: "images/rr cullinan.jpg", tech: "6.75L Twin-Turbo V12 All-Terrain", maint: "Air Suspension & AWD System Check" },
            { name: "Rolls-Royce Ghost Series II", hp: "563 HP", price: "$350,000 | $1,800/day", img: "images/rr ghost.jpg", tech: "Planar Suspension System, Illuminated Grille", maint: "Whisper-Quiet Cabin Inspection" },
            { name: "Rolls-Royce Wraith Black Badge", hp: "624 HP", price: "$380,000 | $1,900/day", img: "images/rr wraith.jpg", tech: "6.75L Twin-Turbo V12 Fastback Coupe", maint: "Maint-Free Sport Suspension Check" },
            { name: "Rolls-Royce Droptail Coachbuilt", hp: "593 HP", price: "$30,000,000 | VIP Only", img: "images/rr droptail.jpg", tech: "Bespoke V12 2-Seater Roadster (1 of 4)", maint: "Goodwood Master Craftsmen Service" }
        ]
    }
};

// 2. Hero 8-Car Slideshow Data
const heroSlides = [
    { name: "Mercedes-AMG GT", img: "images/Mercedes.jpeg" },
    { name: "Porsche 911 GT3 RS", img: "images/porsche.jpeg" },
    { name: "BMW M5 CS Limited", img: "images/BMW.jpeg" },
    { name: "Ferrari SF90 Stradale", img: "images/Ferrari.jpeg" },
    { name: "Lamborghini Revuelto V12", img: "images/lamborghini.jpeg" },
    { name: "McLaren 750S Spider", img: "images/MCLaren.jpeg" },
    { name: "Bentley Continental GT Speed", img: "images/Bently.jpeg" },
    { name: "Nissan GT-R NISMO", img: "images/Nissan.jpeg" }
];

// 3. About Section: 5 Rotating Cars
const aboutCars = [
    { name: "Mercedes-AMG GT", img: "images/about section mercedes.avif" },
    { name: "Porsche 911 GT3 RS", img: "images/about section porsche.webp" },
    { name: "Ferrari SF90 Stradale", img: "images/about section ferrari.jpg" },
    { name: "Lamborghini Revuelto", img: "images/about section lambo.jpg" },
    { name: "BMW M4 Competition", img: "images/about section bmw.jpg" }
];

let currentSlideIndex = 0;
let currentAboutCarIndex = 0;

// Initialize Hero 8-Car Slideshow

function initHeroSlideshow() {
    const container = document.getElementById("heroSlideshow");
    if (!container) return;

    container.innerHTML = heroSlides.map((slide, idx) => `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}">
            <img src="${slide.img}" alt="${slide.name}">
            <h3 class="ombre-text">${slide.name}</h3>
        </div>
    `).join("");

    document.getElementById("prevSlide").addEventListener("click", () => changeHeroSlide(-1));
    document.getElementById("nextSlide").addEventListener("click", () => changeHeroSlide(1));

    setInterval(() => changeHeroSlide(1), 5000);
}

function changeHeroSlide(direction) {
    const slides = document.querySelectorAll(".hero-slide");
    if (!slides.length) return;

    slides[currentSlideIndex].classList.remove("active");
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add("active");
}

// Initialize About Section 5-Car Rotating Display (Fixed Text Direction)
function initAboutRotation() {
    const imgEl = document.getElementById("rotatingCarImg");
    const titleEl = document.getElementById("rotatingCarTitle");
    if (!imgEl || !titleEl) return;

    setInterval(() => {
        currentAboutCarIndex = (currentAboutCarIndex + 1) % aboutCars.length;
        const nextCar = aboutCars[currentAboutCarIndex];
        
        imgEl.style.opacity = "0.3";
        titleEl.style.opacity = "0.3";
        
        setTimeout(() => {
            imgEl.src = nextCar.img;
            titleEl.textContent = nextCar.name;
            imgEl.style.opacity = "1";
            titleEl.style.opacity = "1";
        }, 400);
    }, 4000);
}

// Render Brand Cards in Showcase Grid

function renderBrands() {
    const grid = document.getElementById('brandsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    Object.keys(fleetData).forEach(key => {
        const brand = fleetData[key];
        grid.innerHTML += `
            <div class="brand-card" data-brand="${key}">
                <div class="image-wrapper">
                    <img class="img-primary" src="${brand.brandImg1}" alt="${brand.title}">
                    <img class="img-hover" src="${brand.brandImg2}" alt="${brand.title}">
                </div>
                <div class="card-details">
                    <h3>${key.toUpperCase()}</h3>
                </div>
            </div>
        `;
    });

    document.querySelectorAll('.brand-card').forEach(card => {
        card.addEventListener('click', () => {
            const brandKey = card.getAttribute('data-brand');
            showBrandModels(brandKey);
        });
    });
}

// Show Models View for Selected Brand

function showBrandModels(brandKey) {
    const brand = fleetData[brandKey];
    if (!brand) return;

    document.getElementById('selectedBrandTitle').innerText = brand.title;
    const grid = document.getElementById('modelsGrid');
    grid.innerHTML = '';

    brand.models.forEach(m => {
        grid.innerHTML += `
            <div class="model-card">
                <div class="image-wrapper">
                    <img src="${m.img}" alt="${m.name}">
                </div>
                <div class="card-details">
                    <h4>${m.name}</h4>
                    <p style="color:var(--accent-blue, #00d2ff); font-weight:700; margin: 0.3rem 0;"><i class="fa-solid fa-bolt"></i> ${m.hp}</p>
                    <p style="font-size:0.9rem;">${m.price}</p>
                    <button class="btn-outline model-spec-btn" style="width:100%; margin-top:1rem;" 
                        data-name="${m.name}" data-tech="${m.tech}" data-maint="${m.maint}" data-price="${m.price}">
                        View Specs
                    </button>
                </div>
            </div>
        `;
    });

    document.getElementById('showcase').classList.add('hidden');
    document.getElementById('models-view').classList.remove('hidden');

    document.querySelectorAll('.model-spec-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const b = e.currentTarget;
            openModal(b.getAttribute('data-name'), `
                <p><strong>Price / Hire:</strong> ${b.getAttribute('data-price')}</p>
                <p style="margin: 0.8rem 0;"><strong>Technology:</strong> ${b.getAttribute('data-tech')}</p>
                <p><strong>Maintenance:</strong> ${b.getAttribute('data-maint')}</p>
            `);
        });
    });
}

function openModal(title, text) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalBody').innerHTML = text;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
    initAboutRotation();
    renderBrands();

    document.getElementById('backToBrandsBtn').addEventListener('click', () => {
        document.getElementById('models-view').classList.add('hidden');
        document.getElementById('showcase').classList.remove('hidden');
    });

    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('modal')) closeModal();
    });

    document.getElementById('bookSessionBtn').addEventListener('click', () => {
        openModal('Book Showroom Session', '<p>Select your preferred slot for an in-person physical walkaround and technical review.</p>');
    });

    document.getElementById('reserveApexBtn').addEventListener('click', () => {
        openModal('Book Apex GT Session', '<p>Apply for a VIP private showroom slot for the Skye Edition Apex GT flagship.</p>');
    });
});