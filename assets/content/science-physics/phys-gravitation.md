---
title: "Gravitation — Universal Law, Kepler's Laws, Escape Velocity & Satellites"
subject: "Science — Physics"
topic_id: "phys-gravitation"
order: 4
---

# Gravitation — Universal Law, Kepler's Laws, Escape Velocity & Satellites

## The Apple That Wasn't (And the Moon That Was)

Newton's apple may be embellished, but the insight behind it is real. As Newton later wrote, he saw an apple fall while sitting in his garden and asked: why does the Moon not fall the same way? The answer he realised was: it does fall. The Moon is constantly falling toward Earth — but it's also moving forward so fast that by the time it falls a little, Earth has curved away beneath it. The Moon is perpetually falling around Earth.

This was the revolution: the same force that pulls an apple from a tree holds planets in orbit around the Sun. Gravity is universal. In 1687, Newton published this in *Principia Mathematica*, and two thousand years of Aristotelian cosmology collapsed in one book.

---

## Part 1 — Newton's Universal Law of Gravitation

**"Every particle in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them."**

**F = G × (m₁ × m₂) / r²**

Where:
- F = gravitational force (Newton)
- G = Universal Gravitational Constant = **6.674 × 10⁻¹¹ N·m²/kg²**
- m₁, m₂ = masses of two bodies (kg)
- r = distance between their centres (m)

### Key Properties of Gravitational Force
- Always **attractive** (never repulsive)
- Acts along the line joining the two bodies
- Does not depend on the medium between bodies
- **Long-range force** — acts over infinite distances
- The weakest fundamental force in nature (but dominant at astronomical scales)

**Note**: G is the Universal Gravitational Constant; g is the acceleration due to gravity at Earth's surface (~9.8 m/s²). These are different.

---

## Part 2 — Acceleration Due to Gravity (g)

On Earth's surface: **g = GM/R²** = 9.8 m/s²

where M = mass of Earth = 5.97 × 10²⁴ kg, R = radius of Earth = 6.37 × 10⁶ m

### Variation of g

| Factor | Effect on g |
|--------|------------|
| **Altitude (h above surface)** | g decreases as h increases: g_h = g(1 − 2h/R) for h << R |
| **Depth (d below surface)** | g decreases as d increases: g_d = g(1 − d/R) |
| **Latitude** | g is maximum at poles, minimum at equator (Earth bulges at equator → greater R; also rotation) |
| **Shape of Earth** | Earth is oblate spheroid (flattened at poles, bulging at equator) → R_pole < R_equator → g_pole > g_equator |
| **Rotation of Earth** | Rotation reduces effective g at equator (centrifugal effect) — already included in equator being smaller g |

**g at equator < g at poles** (both due to shape and rotation)  
**g decreases with altitude above surface**  
**g decreases with depth below surface** (reaches zero at Earth's centre)  
**g on Moon ≈ g/6 ≈ 1.63 m/s²** (Moon has smaller mass and radius)  
**g on Moon surface is 1/6 of Earth's** → a 60 kg person weighs 600 N on Earth but 100 N on Moon

---

## Part 3 — Kepler's Laws of Planetary Motion

Johannes Kepler (1571–1630) discovered these laws from Tycho Brahe's painstaking astronomical data, before Newton's mechanics existed to explain them.

### Kepler's First Law — Law of Orbits
**"Every planet revolves around the Sun in an elliptical orbit with the Sun at one of the two foci."**

- Orbits are ellipses, not circles (though many are nearly circular)
- Sun is at one focus of the ellipse, not the centre
- **Perihelion** = point in orbit closest to Sun; **Aphelion** = farthest point

### Kepler's Second Law — Law of Areas
**"The line joining a planet to the Sun sweeps equal areas in equal intervals of time."**

- Planet moves faster when closer to Sun (perihelion) and slower when farther (aphelion)
- This is a consequence of conservation of angular momentum
- The areal velocity (dA/dt) is constant

**Application for Earth**: Earth is closest to Sun in early January (perihelion ~147 million km) and farthest in early July (aphelion ~152 million km). Earth moves slightly faster in January → Northern Hemisphere winters are slightly shorter than Southern Hemisphere winters.

### Kepler's Third Law — Law of Periods (Harmonic Law)
**"The square of the orbital period of a planet is proportional to the cube of its average distance from the Sun."**

**T² ∝ R³** → T² = k × R³ (where k is the same for all planets orbiting the same star)

| Planet | Average Distance (AU) | Period (years) | T²/R³ |
|--------|----------------------|----------------|-------|
| Mercury | 0.387 | 0.241 | ≈ constant |
| Earth | 1 | 1 | 1 |
| Mars | 1.524 | 1.881 | ≈ constant |
| Jupiter | 5.203 | 11.86 | ≈ constant |

Newton derived Kepler's laws from his law of universal gravitation — thereby unifying terrestrial and celestial mechanics.

---

## Part 4 — Orbital Velocity and Escape Velocity

### Orbital Velocity (v₀)

The speed a satellite must have to stay in a circular orbit at height h above Earth's surface:

**v₀ = √(GM/(R+h))**

For orbit just above Earth's surface (h ≈ 0):  
**v₀ = √(gR) ≈ 7.9 km/s = 7,920 m/s**

- At this speed, a body orbits Earth in about 84 minutes
- **All satellites orbit Earth at approximately 7.9 km/s** (near-Earth orbit)

### Escape Velocity (vₑ)

The minimum speed needed to permanently escape a planet's gravitational field (reaches infinity with zero speed):

**vₑ = √(2GM/R) = √(2gR)**

For Earth: **vₑ = √2 × v₀ = 11.2 km/s**

| Body | Escape Velocity |
|------|----------------|
| Earth | 11.2 km/s |
| Moon | 2.37 km/s |
| Jupiter | 59.5 km/s |
| Sun | 618 km/s |

**Black holes**: escape velocity exceeds speed of light (3 × 10⁸ m/s) → nothing can escape.

**Why gases escape from atmosphere**: Light gas molecules (H₂, He) have high thermal speeds that can approach escape velocity → they gradually escape Earth's atmosphere. Heavier molecules (N₂, O₂) are too slow at normal temperatures.

---

## Part 5 — Satellites

### Types of Satellites by Orbit

| Orbit | Altitude | Period | Applications |
|-------|---------|--------|-------------|
| **LEO (Low Earth Orbit)** | 200–2,000 km | 90–120 min | Earth observation, ISS, spy satellites, Starlink |
| **MEO (Medium Earth Orbit)** | 2,000–35,786 km | 2–24 hrs | GPS/GNSS satellites (GPS, GLONASS, Galileo, NavIC) |
| **GEO (Geostationary Orbit)** | **35,786 km** | **24 hours** | Communication satellites, weather satellites |
| **HEO (Highly Elliptical Orbit)** | Varies | Varies | Communication at high latitudes (Molniya orbit) |
| **SSO (Sun-Synchronous Orbit)** | ~600–800 km | ~100 min | Remote sensing, passes same area at same local time |

### Geostationary Satellite

- Orbits at exactly **35,786 km** altitude above equator
- Period = **24 hours** (matches Earth's rotation)
- Appears **stationary** relative to Earth's surface
- **Must orbit above the equator** and in the same direction as Earth's rotation
- 3 geostationary satellites provide global coverage (except polar regions)
- Used for: TV broadcast, weather (INSAT), telecommunication

**Geosynchronous vs Geostationary:**
- Geosynchronous = 24-hour period (may be inclined, traces figure-8 path)
- Geostationary = geosynchronous + equatorial + same direction = truly stationary in sky

### Weightlessness in Space

In an orbiting satellite, both the satellite and the astronauts inside are in **free fall** toward Earth at the same rate. There is no normal reaction from the floor — hence astronauts experience **apparent weightlessness** (zero g condition).

**Weight is NOT zero** (gravity still acts — satellite is falling!). The **apparent weight** (what weighing scale shows) is zero. This is why objects float inside the ISS.

---

## Part 6 — Tides

**Tides** are caused by the differential gravitational pull of the Moon (and Sun) on different parts of Earth's oceans.

- The side of Earth facing the Moon has a **high tide** (Moon's pull is stronger)
- The side of Earth facing away from Moon also has a **high tide** (due to centrifugal effect in Earth-Moon system)
- **Two high tides and two low tides** per day (~12.4-hour cycle, as Moon moves)

| Tide Type | Cause | When |
|-----------|-------|------|
| **Spring tide** (highest tides) | Sun, Moon, Earth aligned (syzygy) | New Moon and Full Moon |
| **Neap tide** (smallest tides) | Sun and Moon at 90° to Earth | First Quarter and Third Quarter Moon |

**The Moon's effect on tides is about 2× the Sun's effect** (though Sun is much more massive, it is much farther away; tidal force ∝ 1/r³, so nearness matters more than mass).

---

## Exam Traps — 16 Things SSC Will Test

1. **G (Universal Gravitational Constant) ≠ g (acceleration due to gravity).** G = 6.674 × 10⁻¹¹ N·m²/kg² (same everywhere in the universe). g = 9.8 m/s² (on Earth's surface, varies with location).

2. **g is MAXIMUM at the poles and MINIMUM at the equator** — because Earth bulges at the equator (R_equator > R_pole) and because rotation provides a centrifugal reduction at the equator. A person weighs slightly more at the poles than at the equator.

3. **g decreases with BOTH altitude (above surface) and depth (below surface)**. At Earth's centre, g = 0. The value of g is maximum at the surface. As you go up or go down, g decreases.

4. **Escape velocity from Earth = 11.2 km/s.** Orbital velocity (near-Earth) = 7.9 km/s. Escape velocity = √2 × orbital velocity. A rocket must reach 11.2 km/s to escape Earth's gravity permanently.

5. **A light year is a unit of distance** (see Units chapter). The Sun is ~8.3 light-minutes from Earth (1 AU = light travel time of 8.3 minutes). The nearest star (Proxima Centauri) is 4.24 light years away.

6. **Kepler's First Law**: planets move in ELLIPSES, not circles. The Sun is at one FOCUS (not the centre). This explained why planets speed up near the Sun (Second Law).

7. **Kepler's Second Law (Equal areas in equal times)** is a consequence of conservation of angular momentum — no external torque acts on the planet. Planet moves FASTER near perihelion (closest to Sun), SLOWER near aphelion (farthest).

8. **Kepler's Third Law (T² ∝ R³)** — if Mars's orbital radius is 1.524 AU, its period = (1.524)^(3/2) = ~1.88 years. Jupiter's orbital radius ~5.2 AU → period ≈ 5.2^(3/2) ≈ 11.86 years.

9. **Geostationary orbit altitude = 35,786 km** (approximately 36,000 km). Period = 24 hours exactly. Must be above the equator. INSAT series, COMSATs, weather satellites use this orbit.

10. **Astronauts in a satellite feel weightless** NOT because there is no gravity, but because they and their spacecraft are both in free fall together. Gravity is very much present (about 0.9g at ISS altitude of 400 km). The apparent weight is zero.

11. **Spring tides occur at New Moon and Full Moon** (Sun, Earth, Moon in a line — called syzygy). They produce the highest high tides and lowest low tides. Neap tides occur at quarter Moons (smallest tidal range).

12. **Moon's tidal effect is stronger than Sun's** despite the Sun being far more massive, because tidal force ∝ M/r³ — the Moon is much closer. Moon's tidal effect ≈ 2.2 times Sun's.

13. **Mass is constant everywhere; weight varies** with gravity. A 60 kg person: weight on Earth = 60 × 9.8 = 588 N; on Moon (g = 1.63 m/s²) = 60 × 1.63 = 97.8 N. Mass remains 60 kg both places.

14. **Perigee and Apogee** are used for satellites orbiting Earth (closest and farthest points). Perihelion and Aphelion are used for bodies orbiting the Sun. Perigee < apogee in LEO satellites — ISS perigee ~408 km.

15. **Gravitational force is always attractive** — two masses always attract. There is no gravitational repulsion. This distinguishes gravity from electrostatic force (which can repel like charges).

16. **Sun-Synchronous Orbit (SSO)** satellites orbit at ~600–800 km and pass over the same area at the same local time each day. This makes them ideal for consistent lighting conditions for remote sensing/Earth observation. ISRO's Cartosat, Resourcesat satellites use SSO.
