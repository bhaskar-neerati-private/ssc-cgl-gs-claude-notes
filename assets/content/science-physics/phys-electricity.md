---
title: "Electricity — Ohm's Law, Resistance, Circuits, Heating Effect & Household Wiring"
subject: "Science — Physics"
topic_id: "phys-electricity"
order: 11
---

# Electricity — Ohm's Law, Resistance, Circuits, Heating Effect & Household Wiring

## The War of Currents

In 1887, Thomas Edison had wired Manhattan with direct current (DC) electricity at 110 volts, and he was determined to keep it that way. When his former employee Nikola Tesla — backed by financier George Westinghouse — began promoting alternating current (AC) as superior, Edison launched a calculated campaign to terrify the public. He publicly electrocuted animals using AC to "prove" it was dangerous. He called for AC execution in place of hanging. He even coined a dark new verb: to be "Westinghoused."

Edison lost. AC current won. The reason: AC can be stepped up to very high voltages using a transformer, transmitted hundreds of kilometres with minimal loss, then stepped down for home use. DC can do none of this efficiently. Today, every home socket in India delivers 220 V, 50 Hz AC — and Tesla's principle supplies power to the entire world.

---

## Part 1 — Electric Charge and Current

**Electric Charge (Q)**: fundamental property of matter. Unit: **Coulomb (C)**.  
Proton carries +1.6 × 10⁻¹⁹ C; Electron carries −1.6 × 10⁻¹⁹ C.

**Electric Current (I)**: rate of flow of electric charge.  
**I = Q/t** (Current = Charge / Time)  
Unit: **Ampere (A)** = Coulomb per second (C/s)

**Conventional current direction**: positive to negative (outside the battery) — opposite to actual electron flow.

**Types of Current:**
- **Direct Current (DC)**: current flows in one direction only. Source: batteries, solar cells, fuel cells
- **Alternating Current (AC)**: current periodically reverses direction. Source: generators, power grid. India: 220 V, 50 Hz

---

## Part 2 — Ohm's Law and Resistance

### Ohm's Law (1827)
**"The current through a conductor is directly proportional to the potential difference (voltage) across it, provided temperature and other physical conditions remain constant."**

**V = IR** (Voltage = Current × Resistance)

Where:
- V = voltage (Volts, V)
- I = current (Amperes, A)
- R = resistance (Ohms, Ω)

**Ohm's Law applies only to Ohmic conductors** (resistors, metal wires at constant temperature). Non-ohmic devices (diodes, LEDs, transistors) do NOT obey Ohm's Law — their V-I graph is not linear.

### Resistance

**Resistance**: opposition to the flow of current.

**Factors affecting resistance:**
- R = ρL/A (R proportional to length L, inversely proportional to cross-sectional area A)
- **ρ (resistivity/specific resistance)**: material property (unit: Ω·m)
- **Temperature**: resistance of metals increases with temperature (more collisions); resistance of semiconductors DECREASES with temperature

| Resistivity (ρ) at 20°C | Value | Category |
|------------------------|-------|----------|
| Silver | 1.59 × 10⁻⁸ Ω·m | Best conductor |
| Copper | 1.72 × 10⁻⁸ Ω·m | |
| Aluminium | 2.82 × 10⁻⁸ Ω·m | |
| Tungsten | 5.60 × 10⁻⁸ Ω·m | Used in bulb filaments (high melting point) |
| Nichrome | ~1.10 × 10⁻⁶ Ω·m | Heating elements |
| Silicon | ~640 Ω·m | Semiconductor |
| Glass | ~10¹⁰–10¹⁴ Ω·m | Insulator |

**Superconductivity**: certain materials below a critical temperature have ZERO resistance — electric current flows without any energy loss. Discovered by Heike Onnes (1911). Used in MRI machines (superconducting magnets).

---

## Part 3 — Electric Circuits

### Series Circuit
Components connected end-to-end in a single path.

- **Same current flows through all components**: I = I₁ = I₂ = I₃
- **Voltages add**: V = V₁ + V₂ + V₃
- **Resistances add**: R_total = R₁ + R₂ + R₃

**If one component fails → ENTIRE circuit breaks** (all go off). Old Christmas/Diwali string lights were series — one bulb fuses, all go dark.

### Parallel Circuit
Components connected between the same two points — multiple paths for current.

- **Same voltage across all components**: V = V₁ = V₂ = V₃
- **Currents add**: I = I₁ + I₂ + I₃
- **Resistances**: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ (total resistance is LESS than smallest individual)

**If one component fails → Others continue working**. Home wiring is parallel — switching off one room's lights doesn't affect others.

### Kirchhoff's Laws
- **KCL (Current Law / Junction Rule)**: the algebraic sum of currents at a junction = 0. (Current in = Current out)
- **KVL (Voltage Law / Loop Rule)**: the algebraic sum of voltages around any closed loop = 0. (Sum of EMF = Sum of voltage drops)

---

## Part 4 — Heating Effect of Electric Current

When current flows through a resistance, electrical energy converts to heat.

**Joule's Law of Heating**:  
**H = I²Rt** (Heat generated = I² × Resistance × Time)

Also: H = VIt = V²t/R

### Applications of Heating Effect

| Application | Component | Why chosen |
|------------|----------|-----------|
| **Electric bulb** (incandescent) | Tungsten filament | High melting point (3422°C), glows at ~2500°C |
| **Electric heater / room heater** | Nichrome coil | High resistance, high melting point, doesn't oxidise easily |
| **Electric iron** | Nichrome element | Converts electricity to heat efficiently |
| **Electric fuse** | Tin-lead alloy (low melting point) | Melts and breaks circuit when current exceeds safe limit |
| **Toaster** | Nichrome wires | Radiates heat to brown bread |
| **Kettle / immersion heater** | Nichrome in sealed metal tube | Transfers heat to water |

### Electric Fuse
A thin wire made of **tin-lead alloy** (melting point ~183°C) that melts when current exceeds the rated limit, breaking the circuit and protecting appliances.

**Fuse ratings**: 1 A, 2 A, 5 A, 15 A, 30 A — selected based on the circuit's maximum safe current.

**MCB (Miniature Circuit Breaker)**: modern replacement for fuse. A switch that automatically trips (opens) when current exceeds limit; can be reset without replacement.

**ELCB/RCB (Earth Leakage Circuit Breaker / Residual Current Breaker)**: detects leakage current to earth (which can indicate current flowing through a person) and trips immediately — protects against electrocution.

---

## Part 5 — Electric Power and Energy

**Electric Power**: rate of doing electrical work.  
**P = VI = I²R = V²/R**  
Unit: **Watt (W)** = Joule per second

**Electric Energy**:  
**E = Pt** (Energy = Power × Time)  
Unit: **Joule (J)** or **kilowatt-hour (kWh)** — 1 kWh = 3.6 × 10⁶ J (this is 1 "unit" of electricity on your bill)

**Examples:**
- A 100 W bulb running for 10 hours uses 1 kWh = 1 unit of electricity
- A 2 kW heater running for 3 hours uses 6 kWh = 6 units

---

## Part 6 — Household Wiring

### Three-Pin Plug and Domestic Wiring

India: 220 V AC, 50 Hz supply

| Wire | Colour (India post-2013) | Function |
|------|--------------------------|---------|
| **Live wire** | Brown (formerly Red) | Carries current at 220 V |
| **Neutral wire** | Light blue (formerly Black) | Returns current; at ~0 V |
| **Earth wire** | Green/Yellow stripe | Safety — provides path to earth for fault current |

**Why three-pin plugs have an Earth pin**: if a fault causes the metal casing of an appliance to become live (e.g., damaged insulation), current flows to earth instead of through a person → ELCB/fuse trips → person is safe.

### Safety Devices

| Device | Action | Protection |
|--------|--------|-----------|
| **Fuse** | Melts on overcurrent | Short circuit / overload |
| **MCB** | Trips (mechanical switch) on overcurrent | Short circuit / overload; resettable |
| **ELCB/RCB** | Trips on earth leakage current | Electrocution / insulation failure |

### Electrical Symbols and Concepts
- **Short circuit**: accidental low-resistance path between live and neutral → very high current → fire hazard → fuse blows
- **Overloading**: too many appliances on one circuit → combined current exceeds fuse rating → fuse blows (or MCB trips)
- **Power factor** (AC only): ratio of actual power to apparent power; 1.0 for pure resistive loads (heaters, bulbs); less than 1 for motors and inductors

---

## Exam Traps — 16 Things SSC Will Test

1. **V = IR (Ohm's Law)**: V in volts, I in amperes, R in ohms. If R increases at constant V, current decreases. If V increases at constant R, current increases. Ohm's Law applies only at constant temperature.

2. **Resistance depends on material, length, cross-sectional area, and temperature**. R = ρL/A. Longer wire = more resistance; thicker wire = less resistance; higher temperature = more resistance (for metals).

3. **Series circuit**: resistances add (R_total = R₁ + R₂ + ...). Same current everywhere. If one element fails, all fail.

4. **Parallel circuit**: reciprocal resistances add (1/R = 1/R₁ + 1/R₂ + ...). Total resistance is LESS than any individual. Same voltage across all. If one fails, others work. **Home wiring is parallel** — so each appliance gets full 220 V and can be independently switched.

5. **Joule's Heating Law: H = I²Rt**. More current = much more heat (current is squared). This is why high-resistance nichrome wire in heaters generates more heat than a low-resistance copper wire.

6. **Tungsten is used in incandescent bulb filaments** because it has the highest melting point of all metals (3422°C) and glows white-hot without melting. Nichrome is used in heating elements (heaters, irons, toasters) — high resistance + high melting point + does not oxidise.

7. **1 kWh = 1 unit of electricity** on your bill. 1 kWh = 3.6 × 10⁶ J. A 1000 W appliance running for 1 hour consumes 1 kWh = 1 unit. This is the most common electrical energy calculation in SSC.

8. **The fuse wire has a low melting point** (tin-lead alloy) — it melts first when current is excessive, breaking the circuit before damage occurs. Fuse is always connected to the LIVE wire for safety.

9. **India's domestic electricity supply**: 220 V (volts), 50 Hz (hertz), AC. The US uses 110 V / 60 Hz AC. These numbers are directly asked in SSC.

10. **Live wire is dangerous; neutral is not** (in a correctly wired circuit). The live wire is at 220 V; the neutral is at near zero volts. An electric shock occurs when current flows through your body — possible only if you touch the live wire while grounded.

11. **Earth wire (green/yellow) in a plug is a safety wire** — not part of the normal current path. If the appliance develops a fault and becomes live, current flows through earth wire to ground (low resistance path) instead of through the person touching the appliance. The fuse blows.

12. **ELCB/RCB detects earth leakage current** — even a few milliamperes of current flowing unexpectedly to earth (via a person) can be detected and the circuit is tripped in milliseconds. This is the best protection against fatal electric shock.

13. **Resistance of metals increases with temperature** (positive temperature coefficient). Resistance of semiconductors decreases with temperature (negative temperature coefficient — more free electrons released as temperature increases). Resistors in circuits follow this.

14. **Superconductivity** = zero resistance below critical temperature. Not just very low resistance — exactly zero. Meissner effect (magnetic field expelled). Used in MRI magnets, particle accelerators. Room-temperature superconductivity is an active research goal.

15. **Power = V²/R**: for a given voltage, a high-resistance bulb uses LESS power (dimmer). A 100 W bulb has lower resistance than a 60 W bulb (at the same voltage). P = V²/R → higher P = lower R.

16. **Short circuit**: when live and neutral wires contact (near-zero resistance between them) → very high current flows (V/R with R ≈ 0 → I → very large) → generates extreme heat → fire. Fuse blows to break the circuit. Short circuit is the most dangerous fault in home wiring.
