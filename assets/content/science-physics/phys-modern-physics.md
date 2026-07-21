---
title: "Modern Physics — Photoelectric Effect, X-Rays, Semiconductors & Dual Nature of Light"
subject: "Science — Physics"
topic_id: "phys-modern-physics"
order: 13
---

# Modern Physics — Photoelectric Effect, X-Rays, Semiconductors & Dual Nature of Light

## Einstein's Miraculous Year

In 1905, Albert Einstein was a 26-year-old patent clerk in Bern, Switzerland — working his day job reviewing patent applications, and in his spare time, rewriting the laws of physics. That year he published four papers, any one of which would have been a career-defining achievement:

- He explained **Brownian motion** (atoms are real)
- He explained the **photoelectric effect** (light comes in packets — photons)
- He published the **Special Theory of Relativity** (E = mc²)
- He derived the equivalence of mass and energy

For the photoelectric effect paper, he received the **Nobel Prize in Physics in 1921** — not for relativity. The photoelectric effect explained why light sometimes behaves as a particle (photon), not just a wave — fundamentally upending 19th-century physics. The quantum revolution had begun.

---

## Part 1 — Dual Nature of Light and Matter

The central insight of early 20th-century physics: light (and all electromagnetic radiation) behaves **both as a wave and as a particle**, depending on the experiment.

**Wave behaviour of light**: interference, diffraction, polarisation (proved by Thomas Young's double-slit experiment, 1801).

**Particle behaviour of light**: photoelectric effect, Compton scattering — light behaves as discrete packets (photons).

**de Broglie hypothesis (1924)**: matter also has wave character.  
**λ = h/mv** (de Broglie wavelength = Planck's constant / momentum)

For large objects (cricket balls, cars), the wavelength is negligibly small. For electrons and atoms, the wave nature is significant — basis of electron microscopy and quantum mechanics.

**Planck's constant (h)** = 6.626 × 10⁻³⁴ J·s — the fundamental quantum of action.

---

## Part 2 — Photoelectric Effect

**Photoelectric Effect**: when light of sufficient frequency falls on a metal surface, electrons are emitted from the surface.

**Key observations** that classical wave theory could NOT explain:
1. Below a certain frequency (threshold frequency f₀), no electrons are emitted — regardless of light intensity
2. Above f₀, electrons are emitted **instantly** (no time delay)
3. The **kinetic energy of emitted electrons depends on frequency** (not intensity) of light
4. The **number of emitted electrons depends on intensity** of light (not frequency)

**Einstein's explanation (1905)**: light consists of discrete packets called **photons**, each with energy **E = hf = hc/λ**.

- A photon must have minimum energy (hf₀) to knock out an electron — this is the **work function (φ)** of the metal
- Any extra energy goes into kinetic energy of the electron: **KE_max = hf − φ**
- Higher frequency photons → higher energy → more energetic electrons
- Higher intensity → more photons → more electrons (higher current)

**Applications of Photoelectric Effect:**
- Solar cells (photovoltaic cells) — direct conversion of light to electricity
- Photodiodes and CCD sensors in cameras
- Burglar alarms and automatic doors (light beam interrupted)
- Light meters in cameras
- Solar energy generation

---

## Part 3 — X-Rays

**Discovery**: Wilhelm Röntgen, 8 November 1895. He noticed that a cathode ray tube caused a fluorescent screen across the room to glow — even with the tube shielded. A previously unknown ray was passing through the shield. He called them **X-rays** (X = unknown).

**Röntgen received the first Nobel Prize in Physics (1901)** for this discovery.

**Properties of X-rays:**
- Short wavelength electromagnetic radiation (0.01–10 nm)
- **Ionising radiation** — can knock electrons off atoms
- Travel in straight lines at the speed of light
- NOT deflected by electric or magnetic fields (no charge)
- Can penetrate soft tissue but absorbed by dense bone or metal
- Cause fluorescence in some materials
- Blacken photographic film

**Production of X-rays:**
- **X-ray tube**: high-voltage electron beam accelerated from cathode, strikes tungsten (or molybdenum) anode target → X-rays emitted
- Two types: **Bremsstrahlung** (braking radiation — continuous spectrum) and **characteristic X-rays** (discrete spectrum from electron transitions)

**Applications of X-rays:**

| Field | Application |
|-------|------------|
| Medical imaging | Chest X-ray (pneumonia, TB), bone fractures, dental X-rays |
| **CT scan (Computed Tomography)** | Multiple X-ray images from different angles → 3D cross-sections |
| Cancer treatment | High-energy X-rays (radiotherapy) kill tumour cells |
| Airport security | Baggage scanning |
| Industrial testing | Detecting cracks in metal components (non-destructive testing) |
| **Crystallography (X-ray diffraction)** | Determining crystal structure (DNA structure discovered 1953 using X-ray crystallography by Rosalind Franklin; Watson & Crick built the model) |

---

## Part 4 — Atomic Models and Atomic Spectra

### Hydrogen Spectrum
Bohr's model (1913) explained why hydrogen emits light only at specific wavelengths (line spectrum):
- Electrons orbit the nucleus only in specific allowed orbits (energy levels)
- Emission: electron falls from higher to lower level → releases a photon of specific energy/frequency
- Absorption: electron absorbs a photon and jumps to a higher level

**Series in hydrogen spectrum:**
- **Lyman series**: transitions to n=1 (UV region)
- **Balmer series**: transitions to n=2 (visible light region — the pink-red emission lines)
- **Paschen/Brackett/Pfund**: transitions to n=3/4/5 (infrared)

---

## Part 5 — Semiconductors and Electronic Devices

**Conductors**: metals — many free electrons; resistivity ~10⁻⁸ Ω·m  
**Insulators**: non-metals (glass, rubber) — virtually no free electrons; resistivity ~10¹⁰–10¹⁴ Ω·m  
**Semiconductors**: Si, Ge — few free electrons at room temperature; resistivity ~10⁻² to 10⁴ Ω·m; resistivity DECREASES with increasing temperature (opposite to metals)

### Pure (Intrinsic) Semiconductors
- Silicon (Si) and Germanium (Ge) are most common
- At room temperature, some electrons gain enough thermal energy to break free → conduct small current
- As temperature increases → more free electrons → lower resistance → negative temperature coefficient

### Doped (Extrinsic) Semiconductors

**Doping**: adding tiny amounts of impurity to dramatically change conductivity.

| Type | Dopant | Example | Majority Carrier |
|------|--------|---------|-----------------|
| **n-type** | Pentavalent (5 valence electrons) | Phosphorus (P), Arsenic (As), Antimony (Sb) | Electrons (negative) |
| **p-type** | Trivalent (3 valence electrons) | Boron (B), Aluminium (Al), Gallium (Ga) | Holes (positive) |

### p-n Junction Diode
A p-n junction is formed by joining p-type and n-type semiconductor. A **depletion layer** forms at the junction.

**Forward bias** (p connected to +, n to −): depletion layer narrows → current flows
**Reverse bias** (p connected to −, n to +): depletion layer widens → virtually no current (except tiny leakage)

**Application: Rectification** — converting AC to DC. A diode allows current in one direction only → half-wave or full-wave rectifier.

### LED (Light Emitting Diode)
- A p-n junction diode that emits light when forward biased
- Electrons and holes recombine at the junction → release energy as photons
- Colour of emitted light depends on the semiconductor material (bandgap energy)
- GaAs (IR), GaP (green/red), GaN (blue/violet), InGaN (white)
- Very energy-efficient; long lifetime; used in indicators, displays, home lighting (LED bulbs)
- Shuji Nakamura, Isamu Akasaki, and Hiroshi Amano received **Nobel Prize in Physics 2014** for blue LED (which enabled white LED lighting — energy-efficient light sources)

### Solar Cell (Photovoltaic Cell)
- A p-n junction that converts sunlight directly to electricity using the photoelectric effect
- Photons excite electrons across the junction → create a voltage
- Used in calculators, satellites, rooftop solar, India's solar mission

### Transistor
- Made of two p-n junctions (NPN or PNP)
- Acts as an amplifier (small input signal controls large output) or as a switch (on/off)
- Foundation of all modern electronics — computers, smartphones, radios
- John Bardeen, Walter Brattain, William Shockley received **Nobel Prize in Physics 1956** for the transistor

---

## Part 6 — Radioactivity (Brief Review — see also Chemistry Nuclear topic)

**Alpha (α) particle**: helium nucleus (2p + 2n); low penetration (stopped by paper); high ionising power  
**Beta (β) particle**: high-energy electron or positron; medium penetration (stopped by few mm aluminium)  
**Gamma (γ) radiation**: high-energy photons; very penetrating (requires thick lead or concrete)

**Half-life**: time for half the radioactive nuclei to decay. Used in:
- Radiocarbon dating (C-14 half-life ~5,730 years; used for objects up to ~50,000 years old)
- Medical tracers (Tc-99m, half-life 6 hours — short enough to limit patient radiation dose)

---

## Exam Traps — 16 Things SSC Will Test

1. **Einstein received the 1921 Nobel Prize for the Photoelectric Effect** — NOT for the Theory of Relativity. The photoelectric effect explained that light exists as discrete packets (photons) with energy E = hf.

2. **Photoelectric effect**: below threshold frequency → NO electrons emitted (no matter how intense the light). Above threshold → electrons emitted immediately. Kinetic energy of electrons depends on FREQUENCY; number of electrons depends on INTENSITY.

3. **X-rays discovered by Wilhelm Röntgen in 1895**; he received the first Nobel Prize in Physics in 1901. X-rays are ionising electromagnetic radiation — short wavelength, high energy, penetrate soft tissue, absorbed by bone and metal.

4. **DNA's double-helix structure was discovered in 1953** by Watson and Crick based on X-ray crystallography data collected by Rosalind Franklin. Watson and Crick received the Nobel Prize in 1962 (Franklin had died by then).

5. **Semiconductor resistance DECREASES with increasing temperature** (negative temperature coefficient). Metal resistance INCREASES with temperature. This is tested directly in SSC — it is the opposite of what students expect.

6. **n-type semiconductor**: doped with pentavalent impurity (P, As, Sb); majority carriers are ELECTRONS. **p-type**: doped with trivalent impurity (B, Al, Ga); majority carriers are HOLES. Despite the name, n-type is not negatively charged and p-type is not positively charged — both are electrically neutral overall.

7. **p-n junction diode conducts in forward bias only** (conventional current from p to n inside the device). This property makes it useful as a rectifier — converting AC (both directions) to pulsating DC (one direction).

8. **LED emits light** when electrons and holes recombine at forward-biased p-n junction. Different semiconductor materials emit different colours. Nobel 2014 for blue LED (Nakamura, Akasaki, Amano). Without blue LED, white LED (and thus modern efficient lighting) would not exist.

9. **Solar cell (photovoltaic)** converts light → electricity via photoelectric effect at p-n junction. Not to be confused with solar thermal panels (which heat water using sunlight).

10. **Transistor**: Nobel 1956 (Bardeen, Brattain, Shockley). The transistor replaced bulky vacuum tubes, enabled miniaturisation, and is the basis of all digital electronics (computers, smartphones, internet routers). Modern chips contain billions of transistors.

11. **de Broglie wavelength λ = h/mv**: particles have wave character. The smaller the particle's mass and speed, the larger the wavelength. Electrons have measurable wave character → used in electron microscopes (much better resolution than light microscopes, because electrons have shorter wavelengths than visible light).

12. **Radiocarbon dating** uses the C-14 half-life (~5,730 years) to date organic material. Above ~50,000 years, too little C-14 remains for accurate dating. For very old rocks (millions of years), other radioactive isotopes (Uranium-Lead, Potassium-Argon) are used.

13. **Gamma rays vs X-rays**: both are high-energy photons, but gamma rays come from nuclear decay (nucleus transitions), while X-rays are produced by electron transitions or electron deceleration. Gamma rays have shorter wavelength and higher energy than typical X-rays.

14. **CT scan (Computed Tomography)** = multiple X-ray images from different angles processed by computer to give a 3D cross-sectional image. MRI = uses magnetic fields and radio waves (not X-rays; no ionising radiation). PET scan = uses gamma-emitting radioactive tracer injected into body.

15. **Planck's constant h = 6.626 × 10⁻³⁴ J·s**. Appears in: E = hf (photon energy), KE = hf − φ (photoelectric effect), λ = h/mv (de Broglie). It is one of the fundamental constants of nature — so important that the SI kilogram is now defined in terms of h.

16. **Superconductors** = zero electrical resistance below a critical temperature. Nobel 1913 (Kamerlingh Onnes for discovery). Used in MRI machines (strong, stable magnetic fields without heating), particle accelerators (CERN), and potentially in future power transmission lines. High-temperature superconductors (above 77 K = liquid nitrogen temperature) are an active research area.
