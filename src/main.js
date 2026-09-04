import * as THREE from 'https://unpkg.com/three@0.178.0/build/three.module.js'

const vehicles = [
  { name: 'Tata Nexon', type: 'Manual / Automatic', tag: 'City confidence', color: '#c9973e', image: 'cars/sai-car-10.jpeg' },
  { name: 'Maruti Brezza', type: 'Manual / Automatic', tag: 'Easy first car', color: '#b8c0c0', image: 'cars/sai-car-01.jpeg' },
  { name: 'Kia Seltos', type: 'Automatic', tag: 'Smooth & spacious', color: '#e9e5d7', image: 'cars/sai-car-03.jpeg' },
]

const app = document.querySelector('#app')
app.innerHTML = `
  <header class="topbar">
    <a class="brand" href="#top"><span class="brand-mark">S</span><span><strong>Sai Sandhya</strong><small>Motor Driving School</small></span></a>
    <nav><a href="#about">About</a><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></nav>
    <a class="call-link" href="tel:9000111622"><span>Call us</span><b>9000111622</b></a>
  </header>
  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow"><span class="pulse"></span> Trusted driving school · Hyderabad</p>
        <h1>Learn safe.<br><em>Drive confident.</em></h1>
        <p class="intro">Patient trainers, practical four-wheeler lessons, and complete license support for every kind of learner.</p>
        <div class="hero-actions"><a class="button button-primary" href="#contact">Contact us <span>↗</span></a><a class="text-link" href="#pricing">See plans <span>↓</span></a></div>
        <div class="rating"><strong>20+</strong><span class="hero-stat">Years of training</span><strong>5000+</strong><span class="hero-stat">Happy customers</span></div>
      </div>
      <div class="scene-wrap"><div id="scene"></div><img class="hero-car-image" src="cars/sai-car-10.jpeg" onerror="this.onerror=null;this.src='cars/sai-car-01.jpeg'" alt="Sai Sandhya Tata Nexon training car"><div class="scene-note"><span class="live-dot"></span> Real Sai Sandhya training car</div><div class="scene-label">NEXON <small>01 / 03</small></div></div>
      <div class="hero-strip"><span>100% focus on safety</span><i></i><span>Nizampet · Bachupally · Pragathi Nagar · Miyapur · KPHB</span></div>
    </section>
    <section id="about" class="about-section"><div><p class="eyebrow">About Sai Sandhya</p><h2>Professional lessons for <em>confident drivers.</em></h2></div><div class="about-copy"><p>Sai Sandhya Motor Driving School offers practical four-wheeler training, license guidance, and full support for all RTA-related work.</p><ul><li>Experienced and patient trainers</li><li>Flexible pickup and drop support</li><li>Beginner-friendly, step-by-step coaching</li><li>Quick learner and permanent license help</li></ul></div></section>
    <section id="services" class="services-section"><div class="section-heading"><div><p class="eyebrow">Our services</p><h2>Everything you need<br>to <em>start driving.</em></h2></div><p class="section-note">Real skills. Clear guidance.<br>Support from first lesson to license.</p></div><div class="service-grid"><article><span>01</span><h3>Driving Training</h3><p>Four-wheeler lessons for beginners and refresher learners.</p></article><article><span>02</span><h3>License Assistance</h3><p>Support for learner permits, permanent licenses, and documents.</p></article><article><span>03</span><h3>RTA Works</h3><p>Complete help with all kinds of RTA procedures and applications.</p></article></div></section>
    <section id="fleet" class="fleet-section">
      <div class="section-heading"><div><p class="eyebrow">Our training cars</p><h2>Normal cars.<br><em>Real confidence.</em></h2></div><p class="section-note">Practice in familiar Indian cars<br>that feel easy on everyday roads.</p></div>
      <div class="fleet-grid">${vehicles.map((v, i) => `<article class="car-card ${i === 0 ? 'active' : ''}" data-index="${i}"><div class="car-image"><img src="${v.image}" onerror="this.onerror=null;this.src='cars/sai-car-01.jpeg'" alt="Sai Sandhya ${v.name} training car" loading="lazy"><span class="car-number">0${i + 1}</span><span class="car-ad">SAI SANDHYA · TRAINING CAR</span></div><div class="car-info"><div><h3>${v.name}</h3><p>${v.type} · ${v.tag}</p></div><span class="arrow">↗</span></div></article>`).join('')}</div>
    </section>
    <section id="pricing" class="pricing-section"><div class="section-heading"><div><p class="eyebrow">Affordable plans</p><h2>Simple pricing for<br>your <em>driving journey.</em></h2></div></div><div class="pricing-grid"><article><span>Driving only</span><strong>₹6,000</strong><p>Practical driving sessions<br>Vehicle support<br>Road safety training</p><a href="tel:9000111622">Choose plan ↗</a></article><article class="popular"><span>Most popular</span><strong>₹10,000</strong><h3>Driving + License</h3><p>All driving lessons<br>License assistance<br>Documentation support</p><a href="tel:9000111622">Choose plan ↗</a></article><article><span>Advanced package</span><strong>₹12,000</strong><p>Extra practice sessions<br>Road confidence coaching<br>Priority support</p><a href="tel:9000111622">Choose plan ↗</a></article></div></section>
    <section id="method" class="method-section"><div class="method-intro"><p class="eyebrow">How it works</p><h2>From first start<br>to <em>full confidence.</em></h2><a class="button button-dark" href="tel:9000111622">Start your journey <span>↗</span></a></div><div class="steps"><div class="step"><b>01</b><div><h3>Book a trial</h3><p>Discuss your driving needs and available slots.</p></div></div><div class="step"><b>02</b><div><h3>Learn practically</h3><p>Train with real roads and step-by-step coaching.</p></div></div><div class="step"><b>03</b><div><h3>Get license support</h3><p>We help with documentation and RTA formalities.</p></div></div></div></section>
    <section id="gallery" class="gallery-section"><div class="section-heading"><div><p class="eyebrow">Gallery</p><h2>Our real <em>training cars.</em></h2></div></div><div class="gallery-grid"><img src="cars/sai-car-01.jpeg" alt="Sai Sandhya Maruti Brezza training car"><img src="cars/sai-car-02.jpeg" alt="Sai Sandhya driving school car"><img src="cars/sai-car-03.jpeg" alt="Sai Sandhya Kia training car"><img src="cars/sai-car-04.jpeg" alt="Sai Sandhya training car on road"></div></section>
    <section id="reviews" class="review-section"><div class="review-mark">“</div><blockquote>Very patient trainers and clear instructions. I felt confident driving within a few lessons.</blockquote><div class="review-byline"><span class="avatar">RK</span><span><strong>Ravi K.</strong><small>Student testimonial</small></span><span class="review-stars">★★★★★</span></div></section>
    <section id="contact" class="contact-section"><div><p class="eyebrow">Contact us</p><h2>Ready to start your<br><em>driving journey?</em></h2><div class="contact-details"><p>Call today for lessons, license support, or RTA assistance.</p><a href="tel:9000111622">📞 9000111622</a><a href="tel:9000111530">📞 9000111530</a><a class="office-location" href="https://share.google/e1ii2LoGx7KAHNjAH" target="_blank" rel="noreferrer">📍 Office location ↗</a><span>🕒 Open 5:30 AM - 9:00 PM</span></div></div><form class="lead-form" id="lead-form"><p class="form-title">Tell us how we can help</p><label>Name<input name="name" type="text" placeholder="Your name" required></label><label>Contact number<input name="phone" type="tel" placeholder="90000 00000" required></label><label>Reason for contact<select name="reason"><option>Driving training</option><option>RTA works</option><option>License assistance</option></select></label><label>Preferred area<input name="area" type="text" placeholder="Nizampet, Miyapur, KPHB..." required></label><label>Message<textarea name="message" rows="3" placeholder="Tell us about your requirement"></textarea></label><div class="form-actions"><button class="button button-primary" type="submit" data-channel="whatsapp">Send on WhatsApp ↗</button><button class="button button-mail" type="submit" data-channel="email">Send by Email ↗</button></div><small class="form-note">Your details open in WhatsApp or your email app for sending.</small></form></section>
  </main>
  <footer><span>© 2026 Sai Sandhya Motor Driving School</span><span>Learn Safe. Drive Smart. Drive Confident.</span></footer>
`

document.querySelectorAll('a[href="tel:9000111622"]').forEach(link => { link.href = 'tel:+919000111622' })
document.querySelectorAll('a[href="tel:9000111530"]').forEach(link => { link.href = 'tel:+919000111530' })

document.querySelector('#lead-form').addEventListener('submit', event => {
  event.preventDefault()
  const form = new FormData(event.currentTarget)
  const message = `New enquiry for Sai Sandhya Motor Driving School%0AName: ${encodeURIComponent(form.get('name'))}%0AContact: ${encodeURIComponent(form.get('phone'))}%0AReason: ${encodeURIComponent(form.get('reason'))}%0AArea: ${encodeURIComponent(form.get('area'))}%0AMessage: ${encodeURIComponent(form.get('message') || 'Not provided')}`
  const channel = event.submitter.dataset.channel
  if (channel === 'whatsapp') window.location.href = `https://wa.me/919000111530?text=${message}`
  else window.location.href = `mailto:drivingschool829@gmail.com?subject=Sai%20Sandhya%20Driving%20School%20Enquiry&body=${message}`
})

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
camera.position.set(0, 1.2, 6)
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(640, 540)
renderer.shadowMap.enabled = true
document.querySelector('#scene').appendChild(renderer.domElement)
scene.add(new THREE.HemisphereLight(0xf2e6d5, 0x162426, 2.2))
const key = new THREE.DirectionalLight(0xffd3a5, 3)
key.position.set(-4, 6, 5); key.castShadow = true; scene.add(key)
const car = new THREE.Group()
const body = new THREE.Mesh(new THREE.BoxGeometry(2.8, .65, 1.45), new THREE.MeshStandardMaterial({ color: 0xd8ff35, roughness: .28, metalness: .35 }))
body.position.y = .9; body.castShadow = true; car.add(body)
const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.55, .65, 1.25), new THREE.MeshStandardMaterial({ color: 0x193033, roughness: .2, metalness: .2 }))
cabin.position.set(.1, 1.48, 0); cabin.rotation.z = -.08; cabin.castShadow = true; car.add(cabin)
const bumper = new THREE.Mesh(new THREE.BoxGeometry(2.95, .18, 1.5), new THREE.MeshStandardMaterial({ color: 0x222727, roughness: .2, metalness: .6 })); bumper.position.set(0, .63, 0); car.add(bumper)
for (const x of [-1, 1]) for (const z of [-.78, .78]) { const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.36, .36, .2, 24), new THREE.MeshStandardMaterial({ color: 0x15191a, roughness: .7 })); wheel.rotation.x = Math.PI / 2; wheel.position.set(x, .48, z); car.add(wheel) }
scene.add(car)
const floor = new THREE.Mesh(new THREE.CircleGeometry(4, 64), new THREE.MeshStandardMaterial({ color: 0x244044, roughness: 1 })); floor.rotation.x = -Math.PI / 2; floor.position.y = .08; floor.scale.set(1, .42, 1); floor.receiveShadow = true; scene.add(floor)
function resize() { const el = document.querySelector('#scene'); const { width, height } = el.getBoundingClientRect(); camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height) }
window.addEventListener('resize', resize); resize()
function animate(time) { car.rotation.y = Math.sin(time * .00045) * .25 - .25; car.position.y = Math.sin(time * .0012) * .035; renderer.render(scene, camera); requestAnimationFrame(animate) }
requestAnimationFrame(animate)

document.querySelectorAll('.car-card').forEach(card => card.addEventListener('click', () => { document.querySelectorAll('.car-card').forEach(c => c.classList.remove('active')); card.classList.add('active'); const v = vehicles[card.dataset.index]; document.querySelector('.scene-label').innerHTML = `${v.name.split(' ')[1].toUpperCase()} <small>0${Number(card.dataset.index) + 1} / 03</small>`; document.querySelector('.hero-car-image').src = v.image; document.querySelector('.hero-car-image').alt = `Sai Sandhya ${v.name} training car`; body.material.color.set(v.color) }))
