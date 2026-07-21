---
title: "Magnetism & Electromagnetism — Magnets, Induction, Motors, Generators & Transformers"
subject: "Science — Physics"
topic_id: "phys-magnetism-em"
order: 12
---

# Magnetism & Electromagnetism — Magnets, Induction, Motors, Generators & Transformers

## The Compass Needle That Shocked a Classroom

On 21 April 1820, Danish physicist Hans Christian Oersted was lecturing students at the University of Copenhagen. As he switched on an electric current through a wire, he noticed something extraordinary: a compass needle nearby twitched. He switched the current off — it settled. On again — it twitched. What nobody had expected was this: electricity and magnetism, long considered completely separate phenomena, were connected. A moving electric charge creates a magnetic field.

Oersted's accidental observation triggered a revolution. Within twelve years, Michael Faraday had shown the reverse: a changing magnetic field creates electricity. These two discoveries — electricity from magnetism, magnetism from electricity — are the twin pillars of electromagnetism. They gave the world electric motors, generators, transformers, radio, MRI machines, and the internet infrastructure that runs on electromagnetic waves.

---

## Part 1 — Natural Magnetism and Magnets

**Magnetite (Fe₃O₄)**: the first known natural magnet, also called lodestone. Used as primitive compasses in ancient China (~200 BC).

### Properties of Magnets
- Every magnet has two poles: **North (N)** and **South (S)**
- **Like poles repel; unlike poles attract**
- Magnetic poles always exist in pairs — you cannot have a single magnetic monopole (if you break a magnet in half, you get two smaller magnets, each with N and S poles)
- Magnets attract ferromagnetic materials: Iron (Fe), Nickel (Ni), Cobalt (Co)

### Magnetic Field
- **Magnetic field lines**: exit from North pole, enter South pole; form closed loops
- The closer the field lines, the stronger the field
- Magnetic field lines never intersect

---

## Part 2 — Earth's Magnetism

Earth behaves like a giant bar magnet — but oriented so that the **geographic North Pole is actually near Earth's magnetic South Pole** (that's why the North-seeking end of a compass needle points geographically north — it is attracted to the magnetic South beneath the geographic North).

| Term | Definition |
|------|-----------|
| **Magnetic North Pole** | Currently located near Ellesmere Island, Canada (not at geographic North) |
| **Magnetic declination** | Angle between geographic north and magnetic north at a location |
| **Magnetic inclination (dip)** | Angle between Earth's magnetic field and horizontal plane at that location |
| **Magnetic equator** | Line of zero dip (horizontal field); approximately follows geographic equator but not exactly |

**Cause of Earth's magnetism**: believed to be caused by convective motion of molten iron in Earth's outer core — a "geodynamo" effect.

**Geographic poles vs magnetic poles**: geographic poles = Earth's rotational axis; magnetic poles shift slowly over decades (magnetic pole wander). Magnetic poles have also completely reversed multiple times over Earth's history (geomagneic reversal — visible in iron-bearing rocks on the ocean floor).

---

## Part 3 — Oersted's Discovery: Current Creates Magnetism

**Oersted (1820)**: an electric current through a wire creates a circular magnetic field around that wire.

**Right-hand thumb rule**: if the right thumb points in the direction of current, the curled fingers show the direction of the magnetic field (counterclockwise when viewed from ahead of current flow).

### Electromagnetic Applications

**Solenoid**: a coil of wire carrying current — behaves like a bar magnet with N and S poles. Used to create strong, controllable magnetic fields.

**Electromagnet**: solenoid with a soft iron core. The iron core massively amplifies the magnetic field. Unlike permanent magnets, the field can be switched on and off by controlling current.

**Applications of electromagnets:**
- Electric bells (vibrating hammer)
- Cranes in scrapyards (lifting iron/steel)
- Maglev trains (suspension and propulsion)
- MRI machines (very strong superconducting electromagnets)
- Loudspeakers (electromagnet moves cone)
- Relays (switches operated by electromagnets)

---

## Part 4 — Faraday's Law of Electromagnetic Induction

**Faraday (1831)**: a changing magnetic field through a conductor induces an EMF (and hence a current) in the conductor. The induced current creates a magnetic field that opposes the change — this is the basis of **Lenz's Law**.

### Faraday's Laws of Electromagnetic Induction

**First Law**: whenever the magnetic flux linking a conductor changes, an EMF is induced in it.

**Second Law**: the magnitude of the induced EMF is proportional to the rate of change of magnetic flux.

**EMF = −dΦ/dt** (negative sign = Lenz's Law: the induced current opposes the cause)

**Magnetic flux (Φ)** = B × A × cosθ (field × area × angle between field and normal to surface)

**Lenz's Law**: the induced current always flows in a direction that opposes the change in magnetic flux that caused it (this is conservation of energy — you have to do work to maintain the changing flux).

---

## Part 5 — Fleming's Rules

**Fleming's Left-Hand Rule** (for Motor action — Force on current-carrying conductor in a magnetic field):
- Index finger = direction of Magnetic field (B)
- Middle finger = direction of Current (I)
- Thumb = direction of Force/Motion (F)
- **"FBI" = Force, B-field, current (I) on Left Hand**
- Used for: DC motors

**Fleming's Right-Hand Rule** (for Generator action — EMF induced by motion in magnetic field):
- Index finger = direction of Magnetic field (B)
- Middle finger = direction of induced EMF/Current
- Thumb = direction of Motion (thumb = movement)
- Used for: AC/DC generators, dynamos

**Memory**: **M**otors = **L**eft (M comes before G in alphabet; L comes before R); **G**enerators = **R**ight

---

## Part 6 — DC Motor

An electric motor converts **electrical energy to mechanical energy**.

**Working principle (DC Motor)**:
1. Current-carrying coil (armature) placed between poles of a permanent magnet
2. Magnetic field exerts force on current-carrying conductors (Fleming's Left-Hand Rule)
3. Opposite forces on opposite sides of the coil create a torque (turning force)
4. **Split-ring commutator** reverses current direction every half revolution → ensures coil continues rotating in one direction

**Components:**
- **Armature/Coil**: current-carrying conductor
- **Field Magnets**: permanent magnets providing magnetic field
- **Commutator** (split-ring): reverses current direction
- **Carbon Brushes**: stationary contacts that provide current to rotating commutator

**Applications**: fans, mixers, power drills, electric vehicles, pumps, lifts.

---

## Part 7 — AC Generator (Dynamo/Alternator)

An AC generator converts **mechanical energy to electrical energy**.

**Working principle**:
1. A coil rotates in a magnetic field (or a magnet rotates inside a coil)
2. Changing flux through the coil induces an EMF (Faraday's Law)
3. **Slip rings** (continuous rings) allow AC current to flow out without reversing direction
4. The induced EMF alternates in direction as the coil rotates → produces AC

**Difference from DC generator**: DC generator uses a split-ring commutator (reverses current to give DC); AC generator uses slip rings (allows natural AC to flow out).

**India's AC power supply**: 220 V, 50 Hz — generated at power stations and transmitted to homes.

---

## Part 8 — Transformer

A **transformer** transfers electrical power from one circuit to another through electromagnetic induction, changing voltage (and correspondingly, current).

**Principle**: mutual induction — changing current in primary coil creates changing magnetic flux, which induces EMF in secondary coil.

**Transformer equation**:
V_s/V_p = N_s/N_p = I_p/I_s

Where V = voltage, N = number of turns, I = current; subscripts p = primary, s = secondary.

| Type | Turns ratio N_s > N_p | Effect | Use |
|------|----------------------|--------|-----|
| **Step-up transformer** | N_s > N_p | Increases voltage, decreases current | Power plant output (increases voltage to 11 kV, 66 kV, 132 kV, 220 kV for long-distance transmission) |
| **Step-down transformer** | N_s < N_p | Decreases voltage, increases current | Consumer substations (reduces 11 kV to 220 V for homes) |

**Why transmit at high voltage?** Power loss in cables = I²R. For fixed power P = VI: higher V → lower I → much lower I²R losses. That's why power lines carry 220 kV or 400 kV — reducing transmission losses by orders of magnitude.

**Transformer only works with AC** — DC creates constant flux, no change, no induction. Transformers are found in phone chargers, stabilisers, and power grids.

---

## Exam Traps — 16 Things SSC Will Test

1. **Oersted (1820)**: first showed that electric current creates a magnetic field. This linked electricity and magnetism for the first time. Faraday (1831) showed the reverse: changing magnetic field creates current. Oersted → Faraday → Maxwell (equations) → Hertz (radio) — the chain that led to wireless communication.

2. **Geographic North Pole is magnetically a South Pole** (Earth's magnetic south pole is near geographic north). A compass North-seeking needle points geographically north because it is attracted to the magnetic south pole beneath geographic north.

3. **Magnetic poles always come in pairs** — you cannot isolate a north or south pole (no magnetic monopoles). Even cutting a magnet atom by atom gives you dipoles.

4. **Ferromagnetic materials**: Iron, Nickel, Cobalt (the "magnetic metals"). Aluminium, copper, and brass are NOT magnetic. Gold and silver are also non-magnetic.

5. **Faraday's Law**: induced EMF ∝ rate of change of magnetic flux. Moving a magnet slowly through a coil → small EMF. Moving faster → larger EMF. This is how all generators work.

6. **Lenz's Law (conservation of energy)**: induced current opposes the motion causing it. To maintain relative motion, you must keep doing work. This is why generators require mechanical energy input.

7. **Fleming's Left-Hand Rule → Motor (current-carrying conductor in magnetic field experiences force)**. Middle finger = current, index finger = field, thumb = force/motion. Used for DC motors.

8. **Fleming's Right-Hand Rule → Generator (conductor moving in magnetic field creates induced EMF)**. Thumb = motion, index finger = field, middle finger = induced EMF direction. Used for generators.

9. **DC Motor requires split-ring commutator** to reverse current every half turn and maintain continuous rotation. If the commutator were not present, the motor would oscillate back and forth rather than rotate continuously.

10. **Transformer works ONLY with AC** — mutual induction requires a changing magnetic flux, which requires changing (AC) current. A DC current produces constant flux → no induction → no output voltage. That is why Edison's DC system could not use transformers and could not be transmitted far.

11. **Step-up transformer**: more turns in secondary → higher voltage out. Step-down: fewer turns in secondary → lower voltage. Power plants step up to very high voltage for transmission; local substations step down to 11 kV (area substation), then to 440 V (distribution), then to 220 V (home).

12. **High voltage transmission reduces losses**: power loss = I²R. Doubling voltage halves current → quarter the power loss. Transmission at 400 kV instead of 400 V reduces current by 1000× → power loss by 10⁶×. This was the decisive advantage of AC over DC in the "War of Currents."

13. **Electromagnets can be switched on/off** — permanent magnets cannot. This makes electromagnets useful for cranes (pick up and drop iron scrap), MRI machines (very precise control), and electric bells (intermittent operation).

14. **Slip rings vs split rings**: AC generators use slip rings (continuous rings — current flows naturally alternating). DC generators/DC motors use split-ring commutators (reversal of current every half turn gives DC out or maintains DC motor rotation).

15. **MRI = Magnetic Resonance Imaging**: uses extremely strong superconducting electromagnets (typically 1.5 T to 3 T, some research magnets up to 20 T). The strong magnetic field aligns protons in body tissue; radio-frequency pulses perturb them; the emitted signals are processed into 3D images. No ionising radiation — safe for repeated use.

16. **Earth's magnetic field protects life**: Earth's magnetosphere deflects the solar wind (stream of charged particles from the Sun). Without this magnetic shield, solar wind would strip away the atmosphere (as happened on Mars, which lost its magnetic field). Aurora Borealis (Northern Lights) / Aurora Australis occur where solar wind particles enter near the magnetic poles.
