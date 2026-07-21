---
title: "Properties of Matter — Pressure, Buoyancy, Bernoulli, Surface Tension & Viscosity"
subject: "Science — Physics"
topic_id: "phys-properties-matter"
order: 5
---

# Properties of Matter — Pressure, Buoyancy, Bernoulli, Surface Tension & Viscosity

## Archimedes and the Crown

Around 250 BCE, King Hiero II of Syracuse suspected his goldsmith of cheating — mixing silver into a golden crown. He asked Archimedes to find out without damaging the crown. The answer came while Archimedes was stepping into an overfull bath: water overflowed proportional to the volume of his body submerged. He supposedly ran naked through Syracuse shouting *"Eureka!"* (I have found it!).

His insight: submerge the crown, measure the water displaced; submerge an equal mass of pure gold, compare water displaced. If the crown had silver mixed in (lower density than gold), it would displace more water. The goldsmith was caught. Archimedes' discovery — the buoyant force equals the weight of fluid displaced — remains one of the most elegant and useful principles in all of physics.

---

## Part 1 — Elasticity and Stress-Strain

**Elasticity**: property of a material to regain its original shape and size after deforming forces are removed.

**Stress** = Force / Area (Pa = N/m²) — internal resistance to deformation  
**Strain** = Change in dimension / Original dimension (dimensionless)

### Hooke's Law
Within the elastic limit: Stress ∝ Strain  
→ Stress / Strain = constant = **Modulus of Elasticity**

| Modulus | What It Measures | Formula |
|---------|----------------|---------|
| **Young's Modulus (Y)** | Resistance to stretching/compression | Y = (F/A) / (ΔL/L) |
| **Bulk Modulus (K)** | Resistance to uniform compression | K = −P / (ΔV/V) |
| **Shear/Rigidity Modulus (G)** | Resistance to shear (twisting) | G = Shear stress / Shear strain |

**Elastic limit**: beyond this, material permanently deforms (**plastic deformation**)  
**Breaking stress/Fracture point**: stress at which material breaks  
**Ductile materials** (copper, aluminium): deform significantly before breaking  
**Brittle materials** (glass, cast iron): break without much deformation

---

## Part 2 — Pressure in Fluids

**Pressure** = Force per unit area: **P = F/A** (SI unit: Pascal, Pa = N/m²)

**Hydrostatic pressure** at depth h in a liquid:  
**P = ρgh** (ρ = density, g = acceleration due to gravity, h = depth)

- Pressure increases with depth
- Pressure is same at same horizontal level in a connected fluid at rest
- Pressure does not depend on the shape of the container (Pascal's paradox)

### Pascal's Law
**"Pressure applied to an enclosed fluid is transmitted equally in all directions throughout the fluid."**

**Applications of Pascal's Law:**
- **Hydraulic press/lift**: small force on small piston → same pressure → large force on large piston. F₁/A₁ = F₂/A₂ → F₂ = F₁ × (A₂/A₁). Used in car jacks, hydraulic brakes, dentist chairs.
- **Hydraulic brakes**: foot applies pressure → transmitted equally to all four wheels
- **Blood pressure**: Pascal's law explains how heart pumps blood throughout the body

### Atmospheric Pressure

**Standard atmospheric pressure** = 101,325 Pa = 1 atm = 760 mmHg = 1.013 bar

- Measured by **barometer** (Torricelli, 1643)
- Decreases with altitude (less air above)
- At sea level: supports 760 mm column of mercury

**Gauge pressure** = absolute pressure − atmospheric pressure  
(what a tyre gauge reads — pressure above atmosphere)

---

## Part 3 — Archimedes' Principle and Buoyancy

**Archimedes' Principle:**  
**"When a body is partially or fully submerged in a fluid, it experiences an upward buoyant force equal to the weight of fluid displaced."**

**Buoyant force (F_B) = ρ_fluid × V_submerged × g**

### Conditions for Floating, Sinking, or Hovering

| Condition | Outcome |
|-----------|---------|
| Weight > Buoyant force (body denser than fluid) | **Sinks** |
| Weight = Buoyant force (body same density as fluid) | **Hovers/neutrally buoyant** |
| Weight < Buoyant force (body less dense than fluid) | **Floats** |

**For a floating body**: Weight of body = Weight of fluid displaced  
→ The submerged fraction = ρ_body / ρ_fluid

### Applications
- **Ice floats in water**: ice density (~917 kg/m³) < water density (1000 kg/m³) → floats with ~91.7% submerged
- **Steel ships float**: though steel is denser than water, the hollow ship displaces a large volume of water; total weight < weight of water displaced by total hull volume
- **Submarines**: adjust buoyancy by filling/emptying ballast tanks with water
- **Hot air balloon**: hot air inside is less dense than surrounding cool air → balloon + envelope weight < weight of air displaced
- **Hydrometer**: floats to different depths in liquids of different densities → reads specific gravity directly

**Apparent weight of a body in fluid**:  
W_apparent = W_actual − F_B = W_actual − weight of fluid displaced

A body feels lighter when submerged — the buoyant force reduces apparent weight.

---

## Part 4 — Bernoulli's Theorem

**Daniel Bernoulli (1738):**  
**"For an ideal (non-viscous, incompressible) fluid in steady flow, the total mechanical energy per unit volume is constant along a streamline."**

**P + ½ρv² + ρgh = constant**

Where: P = pressure, ρ = density, v = velocity, h = height

**Continuity equation** (for incompressible fluid):  
A₁v₁ = A₂v₂ (flow rate is constant)  
→ Where pipe narrows, velocity increases → pressure decreases

### Applications of Bernoulli's Theorem

| Phenomenon | Explanation |
|-----------|-------------|
| **Aeroplane wing (Aerofoil)** | Curved upper surface → air moves faster above wing → lower pressure above than below → net upward lift |
| **Cricket ball swing/baseball curveball** | Spinning ball drags air: one side moves faster (lower P), other slower (higher P) → deflects toward low-pressure side |
| **Venturi meter** | Narrowing in pipe → speed increases → pressure drops → pressure difference measures flow rate |
| **Carburetor** | Narrow tube creates low pressure that draws fuel into airstream |
| **Bunsen burner** | Gas flow creates low pressure drawing in air for mixing |
| **Atomiser/perfume spray** | Fast airstream over tube opening creates low pressure, drawing up liquid |
| **Roof blown off in storm** | Wind over roof moves fast (low pressure above) while still air inside has high pressure → net upward force |
| **Tube wells (Bernoulli + Magnus)** | Related principles |

---

## Part 5 — Surface Tension

**Surface tension (T)** = force per unit length along the liquid surface, or energy per unit area  
**SI unit**: N/m or J/m²

Surface tension arises because molecules at the liquid surface have more potential energy than interior molecules (fewer neighbours → unbalanced inward pull). The surface behaves like a stretched elastic skin.

### Effects of Surface Tension
- **Spherical droplets**: surface tension minimises surface area for given volume → sphere
- **Soap bubbles**: two surfaces (inner and outer) → excess pressure inside = 4T/r (twice compared to single surface drop = 2T/r)
- **Capillary action**: liquid rises in narrow tubes against gravity (cohesion + adhesion)
- **Walking on water**: water striders exploit surface tension film
- **Needle floating on water**: if placed carefully, surface tension supports it

### Capillary Rise
**h = 2T·cosθ / (ρgr)**
- h = height of rise, T = surface tension, θ = contact angle, ρ = density, r = radius of tube
- **Wetting liquid** (water in glass, θ < 90°): rises in capillary tube (concave meniscus)
- **Non-wetting liquid** (mercury in glass, θ > 90°): depressed in capillary tube (convex meniscus)

**Applications of capillary action**: rise of water in plant stems, blotting paper, ink in pen nib, oil in lamp wick, damp-proofing in buildings.

### Effect of Temperature on Surface Tension
- Surface tension **decreases with increasing temperature** (thermal agitation weakens intermolecular forces)
- Surface tension = 0 at critical temperature

### Surfactants (surface active agents)
Soaps and detergents **reduce surface tension** of water — this lets the water penetrate fabric fibres better and lift grease.

---

## Part 6 — Viscosity

**Viscosity (η)** = resistance of a fluid to flow (internal friction between fluid layers)  
**SI unit**: Pa·s (Pascal-second) or poise (P); 1 Pa·s = 10 poise

**Newton's law of viscosity**: F = η × A × (dv/dy)  
(shear force = viscosity × area × velocity gradient)

### Comparison of Viscosities
- Gases: very low viscosity (~10⁻⁵ Pa·s)
- Water: 10⁻³ Pa·s (1 mPa·s = 1 cP)
- Honey: ~10 Pa·s
- Glass: extremely high (essentially solid-behaving)

### Effect of Temperature on Viscosity
- **Liquids**: viscosity **decreases with temperature** (thermal energy breaks intermolecular bonds that cause resistance to flow → honey flows more easily when warm)
- **Gases**: viscosity **increases with temperature** (more molecular collisions at higher temperature → more momentum transfer between layers)

**This is opposite between liquids and gases — a classic SSC trap.**

### Stokes' Law and Terminal Velocity

When a sphere falls through a viscous fluid, the drag force on it is:  
**F_drag = 6πηrv** (Stokes' Law; r = radius, v = velocity)

**Terminal velocity**: reached when weight = buoyancy + drag  
**v_t = 2r²(ρ_sphere − ρ_fluid)g / (9η)**

- Larger sphere → higher terminal velocity
- More viscous fluid → lower terminal velocity
- Denser sphere → higher terminal velocity

**Applications**: sedimentation of blood cells, fall of raindrops through air, falling of sand grains in water.

---

## Exam Traps — 16 Things SSC Will Test

1. **Buoyant force = weight of FLUID DISPLACED**, NOT the weight of the submerged body. A 10 kg iron ball submerged in water displaces water weighing less than 10 kg (iron is denser than water) → iron sinks. A 10 kg wooden log displaces water weighing more than 10 kg → wood floats.

2. **A ship is made of steel (denser than water) but floats** because its hollow hull displaces a large volume of water. The weight of water displaced by the entire hull volume exceeds the total weight of the ship. The same steel in a solid block would sink.

3. **Ice floats with ~91.7% submerged** (ice density ≈ 917 kg/m³; water density = 1000 kg/m³; submerged fraction = 917/1000). Icebergs: ~90% below water. This explains the Titanic collision — the massive underwater bulk is much larger than the visible tip.

4. **Bernoulli's principle: higher speed = lower pressure** (along a streamline). This is the opposite of intuition (faster fluid seems "stronger") but is fundamental. The aeroplane wing generates lift because air moves faster over the curved top → lower pressure on top → net upward force.

5. **Pascal's Law is the basis of hydraulic machines**. A small force on a small-area piston generates the same pressure as a large force on a large-area piston. F₁/A₁ = F₂/A₂. Hydraulic brakes, car jacks, hydraulic excavators — all use Pascal's Law.

6. **Pressure at a depth h**: P = ρgh. Pressure does NOT depend on the shape of the container (Pascal's paradox). A tank shaped like a pyramid and a cylinder with the same base area and height of water exert the same pressure at the base.

7. **Atmospheric pressure decreases with altitude** — less air above means less weight pushing down. At sea level = 101,325 Pa = 760 mmHg. At the top of Everest (~8,849 m) ≈ 33 kPa ≈ 253 mmHg (about 1/3 of sea level). Water boils at lower temperature at altitude (lower pressure → lower boiling point).

8. **Surface tension decreases with temperature** — hot water has lower surface tension than cold water. This is why hot water cleans better (combined with detergent reducing surface tension further). Surface tension is zero at the critical temperature of the liquid.

9. **Mercury in glass tubes shows a convex meniscus** (curves upward in the middle) and is DEPRESSED in capillary tubes. Water shows a concave meniscus (curves downward in the middle) and RISES in capillary tubes. The difference is that water wets glass (adhesion > cohesion) while mercury does not wet glass (cohesion > adhesion).

10. **Viscosity of liquids decreases with temperature**; viscosity of gases increases with temperature. This is opposite and frequently tested. Honey pours more easily when warm (lower viscosity). Air's viscosity increases slightly when heated.

11. **Stokes' Law**: drag force on a sphere = 6πηrv. Terminal velocity ∝ r² (larger droplets fall faster). This explains why fine mist (very small droplets) stays suspended in air much longer than large raindrops.

12. **The roof of a house can be blown off in a storm** because wind moves rapidly over the roof (high velocity, low pressure above) while air inside the house is still (high pressure). The pressure difference creates a net upward force on the roof. This is Bernoulli's principle in action.

13. **Spinning ball curves** (Magnus effect + Bernoulli): a cricket ball or tennis ball with topspin creates faster airflow on one side and slower on the other → pressure difference → deflects the ball. This is why a skilled bowler can swing a ball or a tennis player can apply topspin.

14. **Gauge pressure vs absolute pressure**: A car tyre pressure of "30 psi gauge" means 30 psi above atmospheric. Absolute pressure = gauge + atmospheric (≈ 14.7 psi). Gauge reads zero when equal to atmosphere; absolute pressure reads zero in perfect vacuum.

15. **Young's modulus measures resistance to stretching** (tensile/compressive stress). High Young's modulus = rigid material (steel: ~200 GPa, bone: ~20 GPa, rubber: ~0.01 GPa). Rubber has very low Young's modulus but is elastic — it returns to original shape from large strains.

16. **Hydraulic press multiplies force but not work** — conservation of energy requires work input = work output (for ideal machine). Small piston moves large distance; large piston moves small distance. F₁d₁ = F₂d₂. No machine can generate extra energy.
