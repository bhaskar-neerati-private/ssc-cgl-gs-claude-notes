---
title: "Gas Laws & Thermodynamics — Boyle's, Charles', Ideal Gas & Laws of Thermodynamics"
subject: "Science — Physics"
topic_id: "phys-thermodynamics-gas-laws"
order: 7
---

# Gas Laws & Thermodynamics — Boyle's, Charles', Ideal Gas & Laws of Thermodynamics

## The Steam Engine That Changed History

In 1765, James Watt was repairing a model of Newcomen's steam engine at Glasgow University when he noticed the enormous waste of energy: the cylinder was being heated and cooled alternately every stroke. He spent a winter walking the Glasgow Green thinking about it, and then the solution came: a separate condenser. Keep the cylinder always hot; condense the steam in a separate cold chamber. It doubled the engine's efficiency and launched the Industrial Revolution.

The engineers who built those engines knew they worked — but they didn't know *why*. It fell to Sadi Carnot (1824) to answer: what is the maximum efficiency a heat engine can ever have? His answer — the Carnot theorem — was the seed of thermodynamics, a discipline that describes not just engines but the universe itself. The laws of thermodynamics tell us why time moves in one direction, why coffee never spontaneously gets hot, and what absolute zero really means.

---

## Part 1 — Properties of Gases

A gas has no fixed shape or volume; it fills its container completely. Three state variables describe a gas:
- **Pressure (P)** — force per unit area exerted by gas molecules on container walls
- **Volume (V)** — space occupied by the gas
- **Temperature (T)** — measure of average kinetic energy of molecules (must be in KELVIN for gas laws)

**Standard Temperature and Pressure (STP)**: T = 273.15 K (0°C), P = 1 atm = 101,325 Pa  
**Standard Ambient Temperature and Pressure (SATP)**: T = 298.15 K (25°C), P = 1 bar (newer standard)

---

## Part 2 — Gas Laws

### Boyle's Law (1662)
**"At constant temperature, the pressure of a given mass of gas is inversely proportional to its volume."**

**P ∝ 1/V** (at constant T and n) → **PV = constant**

→ P₁V₁ = P₂V₂

**Examples:**
- Squeezing a balloon: halving volume doubles pressure
- Deep-sea diver ascending: as pressure decreases, air in lungs expands (divers must exhale while ascending to prevent lung rupture)
- Syringe: pulling plunger increases volume, decreases pressure → medicine flows in
- Atmosphere gets less dense with altitude (pressure decreases, volume per mole increases)

### Charles' Law (1787)
**"At constant pressure, the volume of a given mass of gas is directly proportional to its absolute temperature."**

**V ∝ T** (at constant P and n) → **V/T = constant**

→ V₁/T₁ = V₂/T₂ (T must be in Kelvin!)

**Examples:**
- Hot air balloon: heating air increases volume, decreasing density → balloon rises
- Car tyre pressure increases on hot days (if rigid, V constant → P increases; if slightly flexible, both increase)
- Bread rises in oven (CO₂ bubbles expand)

**Extrapolation to V = 0**: Charles' Law predicts volume = 0 at −273.15°C → this defined absolute zero

### Gay-Lussac's Law (Amontons' Law)
**"At constant volume, the pressure of a given mass of gas is directly proportional to its absolute temperature."**

**P ∝ T** (at constant V and n) → **P/T = constant**

→ P₁/T₁ = P₂/T₂

**Examples:**
- Pressure cooker: sealed (constant volume) → as temperature rises, pressure rises
- Tyre pressure warning: as temperature drops in winter, tyre pressure drops; increases on a hot day
- Autoclave (steam steriliser): pressure and temperature both high in sealed chamber

### Combined Gas Law
Combining Boyle's and Charles' Laws:

**P₁V₁/T₁ = P₂V₂/T₂**

### Avogadro's Law
**"At the same temperature and pressure, equal volumes of all gases contain the same number of molecules."**

**V ∝ n** (at constant T and P)

→ At STP, 1 mole of any ideal gas occupies **22.4 litres**

### Ideal Gas Law (Perfect Gas Equation)
**PV = nRT**

Where:
- P = pressure (Pa)
- V = volume (m³)
- n = number of moles
- R = Universal Gas Constant = **8.314 J/(mol·K)**
- T = absolute temperature (K)

Or: **PV = NkT** (where N = number of molecules, k = Boltzmann constant = 1.38 × 10⁻²³ J/K)

**Ideal gas assumptions:**
1. Gas molecules are point particles (no volume)
2. No intermolecular forces (except during collisions)
3. Collisions are perfectly elastic
4. Molecules in random motion

Real gases deviate from ideal behaviour at high pressure and low temperature (van der Waals equation corrects for this).

---

## Part 3 — Kinetic Theory of Gases

The macroscopic gas laws emerge from the microscopic behaviour of molecules:

- Pressure arises from molecular collisions with container walls
- Temperature is proportional to average kinetic energy: **KE_avg = (3/2)kT**
- Higher temperature → molecules move faster → more energetic collisions → higher pressure

**Root Mean Square (rms) speed**: v_rms = √(3RT/M) (M = molar mass)
- Lighter molecules (H₂, He) move faster at the same temperature
- v_rms increases with temperature

**Dalton's Law of Partial Pressures**: total pressure of a mixture of non-reacting gases = sum of partial pressures of each gas.  
P_total = P₁ + P₂ + P₃ + ...

---

## Part 4 — Laws of Thermodynamics

Thermodynamics describes energy transformations in macroscopic systems.

### Zeroth Law of Thermodynamics
**"If two bodies are each in thermal equilibrium with a third body, they are in thermal equilibrium with each other."**

- Basis for the concept of temperature
- Allows thermometers to work: a thermometer is the "third body" in equilibrium with whatever it measures

### First Law of Thermodynamics (Law of Conservation of Energy)
**"The total energy of an isolated system is constant. Heat absorbed by a system = increase in internal energy + work done by the system."**

**Q = ΔU + W**

Where Q = heat added, ΔU = change in internal energy, W = work done by gas (= PΔV for constant pressure)

- Cannot create energy from nothing (rules out "perpetual motion machine of the first kind")
- Heat added to a gas goes partly to raising its internal energy (temperature) and partly to doing work (expanding)

### Second Law of Thermodynamics
Several equivalent statements:

**Kelvin-Planck**: "No heat engine can convert all the heat absorbed from a heat source into work; some heat must always be rejected to a cold sink."

**Clausius**: "Heat never flows spontaneously from a cold body to a hot body."

**Entropy statement**: "In any irreversible process, the total entropy of an isolated system increases."

- Rules out "perpetual motion machine of the second kind" (100% efficient heat engine)
- Defines the arrow of time — processes go in the direction of increasing entropy
- A refrigerator CAN transfer heat from cold to hot, but only by doing work (entropy of surroundings increases)

**Entropy (S)**: measure of disorder. ΔS = Q/T (for reversible processes)

- Melting ice → entropy increases (solid → disordered liquid)
- Gas expanding into vacuum → entropy increases (more disorder)
- Coffee cooling → entropy of universe increases (heat disperses)

### Third Law of Thermodynamics
**"The entropy of a perfect crystal at absolute zero is zero."**

- As T → 0 K, S → 0
- It is impossible to reach absolute zero in a finite number of steps

### Carnot Engine and Efficiency

Sadi Carnot (1824) proved that the maximum efficiency of any heat engine operating between a hot reservoir (T_H) and cold reservoir (T_C) is:

**η_Carnot = 1 − T_C/T_H** (temperatures in Kelvin)

- Real engines are always less efficient than Carnot
- To get 100% efficiency: T_C = 0 K (impossible) or T_H = ∞ (impossible)
- Example: a steam engine with T_H = 500 K, T_C = 300 K → η_max = 1 − 300/500 = 0.4 = 40%

---

## Part 5 — Thermodynamic Processes

| Process | Constant | What Happens | Example |
|---------|---------|-------------|---------|
| **Isothermal** | Temperature (T) | PV = constant (Boyle's Law) | Very slow compression in a heat bath |
| **Adiabatic** | Heat (Q = 0) | No heat exchange; T and P change | Rapid compression; sound propagation |
| **Isobaric** | Pressure (P) | V/T = constant (Charles' Law) | Heating gas in a cylinder with frictionless piston |
| **Isochoric (isovolumetric)** | Volume (V) | P/T = constant (Gay-Lussac's Law) | Heating gas in a rigid sealed container |

**Adiabatic process**: in rapid compression (like a diesel engine), no time for heat exchange → temperature rises dramatically → fuel ignites. In rapid expansion (like a refrigerator compressor), temperature drops dramatically.

---

## Part 6 — Refrigerator and Heat Pump

A **refrigerator** is a heat engine run in reverse: it uses work (electricity) to transfer heat from cold (inside fridge) to hot (kitchen).

**Coefficient of Performance (COP)** = Heat removed from cold body / Work done  
COP_fridge = T_C / (T_H − T_C) (for ideal refrigerator)

A heat pump heats a room by extracting heat from outside cold air and pumping it indoors — COP > 1 (delivers more heat than the electrical energy consumed, because it is moving heat, not generating it).

---

## Exam Traps — 16 Things SSC Will Test

1. **Gas law temperatures must ALWAYS be in Kelvin** — using Celsius gives wrong answers. Charles' Law: V/T = constant only when T is absolute temperature. 0°C = 273 K. If a problem says "temperature doubles from 27°C to 54°C," temperatures in Kelvin are 300 K and 327 K (not doubled!) — common exam trap.

2. **Boyle's Law: P inversely proportional to V** at constant T. Halving volume doubles pressure. This is why deep-sea divers ascend slowly — rapid ascent allows dissolved gases to expand and form bubbles in blood (decompression sickness/the bends).

3. **At STP (0°C, 1 atm), 1 mole of ideal gas occupies 22.4 litres**. At SATP (25°C, 1 bar), the molar volume is 24.8 litres. This is Avogadro's Law applied at standard conditions.

4. **The First Law of Thermodynamics is Conservation of Energy** applied to thermodynamic systems. Q = ΔU + W. Heat added to a system goes into internal energy (temperature rise) and/or work done by the system (expansion). Perpetual motion machines of the FIRST kind (creating energy from nothing) violate this law.

5. **The Second Law tells us heat flows from hot to cold spontaneously, never the reverse.** A refrigerator can move heat from cold to hot, but only by doing work (using electricity). The work input increases entropy of surroundings more than the cold body's entropy decreases — total entropy of universe always increases.

6. **Entropy is a measure of disorder (randomness)**. Entropy increases in all natural irreversible processes. Melting ice → more disorder (liquid more disordered than solid) → entropy increases. Mixing hot and cold water → entropy increases. The universe's total entropy is always increasing.

7. **Carnot efficiency = 1 − T_C/T_H** (Kelvin). Maximum possible efficiency of any heat engine. A practical steam turbine operates at maybe 35-45% efficiency; a car engine at 25-35%. No real engine reaches Carnot efficiency due to friction, heat losses, and irreversibilities.

8. **100% efficient heat engine is impossible** (Second Law). A perpetual motion machine of the SECOND kind would extract heat from a single reservoir and convert it entirely to work — impossible. This is why the ocean's vast heat energy cannot be harnessed without a cold sink.

9. **Gay-Lussac's Law**: at constant volume, P ∝ T (Kelvin). A sealed rigid tyre: if temperature increases from 300 K to 330 K (10% increase), pressure also increases by 10%. This is why tyre pressure recommendations specify temperature — always check cold.

10. **Dalton's Law of Partial Pressures**: in a gas mixture, each gas exerts its pressure independently. Atmosphere: total 1 atm = N₂ (0.78 atm) + O₂ (0.21 atm) + Ar (0.009 atm) + others. This is why a diver's oxygen supply must be carefully calculated — pure O₂ at depth has dangerously high partial pressure.

11. **Ideal gas law PV = nRT**: R = 8.314 J/(mol·K). At constant n and T: PV = constant (Boyle's); at constant n and P: V/T = constant (Charles'). The ideal gas law unifies all three gas laws into one equation.

12. **Adiabatic process**: no heat exchange with surroundings (Q = 0). First Law → ΔU = −W (internal energy change equals negative of work done). Rapid compression → T rises. Rapid expansion → T falls. Sound waves propagate adiabatically (too fast for heat exchange) — this is why Newton's incorrect (isothermal) calculation gave a wrong speed of sound, which Laplace corrected by using adiabatic conditions.

13. **Zeroth Law is the foundation of thermometry**: if A is in equilibrium with C, and B is in equilibrium with C, then A is in equilibrium with B. This allows a thermometer (C) to reliably compare temperatures of different objects (A, B) without them being in direct contact.

14. **Third Law**: entropy of a perfect crystal = 0 at absolute zero. This means absolute zero is theoretically achievable only asymptotically — you can get arbitrarily close but never exactly reach 0 K. Modern labs have reached temperatures within a billionth of a degree of absolute zero.

15. **Hot air balloons use Charles' Law**: heating air at constant atmospheric pressure increases its volume, reducing its density. When the average density of balloon + hot air < density of surrounding cool air → net buoyant force upward → balloon rises. Propane burner heats the air inside.

16. **Pressure cooker uses Gay-Lussac's Law** (sealed rigid vessel): as temperature rises, pressure rises proportionally (P ∝ T at constant V). Higher pressure → higher boiling point of water → food cooks faster at higher temperature. Safety valve releases pressure if it gets too high (prevents explosion).
