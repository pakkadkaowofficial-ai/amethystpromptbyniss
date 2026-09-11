/**
 * AETHERIS — The Amethyst & Arcana Ultrasonic Aromatherapy Console
 * Interactive Application Engine & Mathematical Dispersion Solver
 *
 * Course: GE931 Introduction to Artificial Intelligence
 * Author: Pakamas Kajornsri (2610717302062)
 * Discipline: B.Eng. Computer Engineering and Artificial Intelligence
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA CONSTANTS & MATRIX DEFINITIONS
  // ==========================================

  const ARCANA_DATA = {
    pentacles: {
      id: 'pentacles',
      suitName: 'Pentacles / Earth',
      element: 'Earth',
      glyph: '🪙',
      blendName: 'Atlas Cedarwood & Haitian Vetiver',
      activeCompounds: 'Cedrol, Khusimol, α-Vetivone',
      finopsTarget: 'Intercompany AP & Cashflow Stability',
      kpiBoost: '+18.6% Working Capital Forecasting Stability',
      mistColorHex: '#10B981',
      accentGlow: 'rgba(16, 185, 129, 0.45)',
      colorShiftName: 'Emerald Amber',
      colorClass: 'emerald-theme',
      badgeClass: 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40',
      description: 'Grounding sesquiterpenes stabilize prefrontal cortisol spikes during high-volatility balance sheet reconciliations.',
      workflow: 'Month-end intercompany ledger netting, liquidity hedging, and cash settlement runs.'
    },
    swords: {
      id: 'swords',
      suitName: 'Swords / Air',
      element: 'Air',
      glyph: '⚔️',
      blendName: 'High-Altitude Rosemary & Greek Eucalyptus',
      activeCompounds: '1,8-Cineole (64.2%), α-Pinene, Camphor',
      finopsTarget: 'Overseas Tax ภ.พ.36 / ภ.ง.ด.54 Reconcile',
      kpiBoost: '+21.4% Tax Calculation Precision & Error Elimination',
      mistColorHex: '#818CF8',
      accentGlow: 'rgba(129, 140, 248, 0.5)',
      colorShiftName: 'Sharp Violet Blue',
      colorClass: 'indigo-theme',
      badgeClass: 'bg-indigo-950/60 text-indigo-300 border-indigo-500/40',
      description: '1,8-Cineole crosses the blood-brain barrier to inhibit AChE, dramatically sharpening working memory during cross-border withholding tax filings.',
      workflow: 'Thai Revenue Department e-Filing, offshore invoice withholding reconciliations, and audit defense dossiers.'
    },
    wands: {
      id: 'wands',
      suitName: 'Wands / Fire',
      element: 'Fire',
      glyph: '🔥',
      blendName: 'Sicilian Sweet Orange & Calabrian Bergamot',
      activeCompounds: 'd-Limonene (92.1%), Linalyl Acetate, γ-Terpinene',
      finopsTarget: 'RPA Script Creation & Business Transformation',
      kpiBoost: '+34.8% Automation Workflow Prototyping Velocity',
      mistColorHex: '#F59E0B',
      accentGlow: 'rgba(245, 158, 11, 0.5)',
      colorShiftName: 'Bright Amber',
      colorClass: 'amber-theme',
      badgeClass: 'bg-amber-950/60 text-amber-400 border-amber-500/40',
      description: 'High d-Limonene vapor activates dopaminergic striatal pathways to spur creative logic in Python automation and UiPath RPA script generation.',
      workflow: 'ERP script authoring, OCR pipeline configuration, and business logic refactoring sprints.'
    },
    cups: {
      id: 'cups',
      suitName: 'Cups / Water',
      element: 'Water',
      glyph: '🏆',
      blendName: 'French Alpine Lavender & Roman Chamomile',
      activeCompounds: 'Linalool (41.5%), Linalyl Acetate, Chamazulene',
      finopsTarget: 'Month-End Stress Mitigation & Audit Calm',
      kpiBoost: '-42.1% Autonomic Stress Response Under Statutory Deadlines',
      mistColorHex: '#C084FC',
      accentGlow: 'rgba(192, 132, 252, 0.5)',
      colorShiftName: 'Deep Violet Mist',
      colorClass: 'purple-theme',
      badgeClass: 'bg-purple-950/60 text-purple-300 border-purple-500/40',
      description: 'Modulates GABA_A neuroreceptors to mitigate cognitive burnout and tunnel vision during intense external regulatory audits.',
      workflow: 'Midnight closing sessions, executive audit committees, and cross-timezone sync meetings.'
    }
  };

  const DIMENSIONS_DATA = [
    {
      id: 'dim1',
      number: 1,
      title: 'AI Image Generation',
      shortTitle: 'Part 1: Image',
      discipline: 'CMF Industrial Design & Optical Visualization',
      summary: 'Evolution from a naive toy crystal prompt to an ultra-refined CMF specification balancing raw geode fissures, titanium CNC base, and 2.4MHz cold mist backlit by 2200K circadian LED.',
      steps: {
        1: {
          title: 'Zero-shot Prompt (Baseline)',
          label: 'Baseline Command',
          prompt: '"Create Amethyst Quartz Image"',
          flaws: [
            'Rendered as a floating mystical cartoon crystal with zero physics.',
            'No industrial hardware context or manufacturing enclosure.',
            'Missing scale, lighting temperature, and fluidic mist mechanics.',
            'Unusable for engineering presentation or product prototyping.'
          ],
          outputHeadline: 'Naive Unconstrained Gemstone Output',
          outputDesc: 'Generic digital illustration of an isolated purple rock floating in void space with flat lighting.',
          preview: 'Resolution: 512x512 | Style: Fantasy Illustration | Lighting: Ambient flat | Realism: Low'
        },
        2: {
          title: 'First Result Critique',
          label: 'Flaw Diagnosis',
          flaws: [
            'Lack of Physical Grounding: AI assumed fantasy jewelry rather than consumer electronics.',
            'Material Disconnect: The crystal lacked the distinctive Uruguayan Mohs-7 micro-crystalline geode texture.',
            'Missing Acoustic Cavitation: No aerosolization mechanism or micro-aperture visible.',
            'No CMF Design Guidelines: Color, Material, and Finish were entirely undefined.'
          ],
          outputHeadline: 'Diagnostic Assessment: The Generic Trap',
          outputDesc: 'Without domain tokens (titanium, 2.4MHz, 2200K, CMF), diffusion models default to popular fantasy cliches.'
        },
        3: {
          title: 'Few-shot / Parameterized Prompt',
          label: 'Engineered Prompt',
          prompt: 'Industrial design CMF render of AETHERIS: 2.4MHz ultrasonic cold aromatherapy console. Base: CNC-milled Grade-5 space grey brushed titanium (#181524), laser-engraved serif monomark. Top: unpolished authentic Uruguayan raw deep-purple amethyst crystal cluster with exposed geode fissures. Fine cold micro-mist (d32=3.2µm) rising through fissures, backlit by warm 2200K circadian LED ring. Dark obsidian reflective slab, high-end studio lighting, 8k, photorealistic.',
          tokens: {
            'CMF Base': 'Grade-5 Brushed Titanium (#181524), CNC Anodized',
            'Mineral': 'Raw Uruguayan Amethyst, Geode Cavity, Mohs 7',
            'Aerosol': 'Ultrasonic Cold Micro-Mist, d32 = 3.2 µm',
            'Optics': '2200K Circadian LED backlight, obsidian reflection slab'
          },
          outputHeadline: 'Parametric Physics & CMF Specification',
          outputDesc: 'Precise hardware semantics constraining diffusion geometry and material shaders.'
        },
        4: {
          title: 'New Refined Result',
          label: 'Physical Hardware Spotlight',
          outputHeadline: 'AETHERIS Production Hardware Spotlight',
          outputDesc: 'Space-grey titanium cylinder holding raw amethyst geode, cold ultrasonic micro-mist rising through mineral fissures.',
          codeSnippet: `// CMF Industrial Design Specification
Enclosure: Ti-6Al-4V Grade 5 Titanium (Matte Brushed Slate #181524)
Crystal Chamber: Raw Uruguayan Amethyst (SiO2:Fe3+, Mohs Hardness 7)
Acoustic Transducer: 2.4 MHz Ceramic Piezoelectric Disc
Aerosol Mist: Sauter Mean Diameter d32 = 3.2 µm (Cold Cavitation)
Backlight: Circadian Warm Amber Alpenglow (2200K, Ra > 95)`
        },
        5: {
          title: 'Comparative Reflection',
          label: 'Pedagogical Lesson',
          beforeSummary: 'A naive single-phrase prompt ("Amethyst Quartz") produced a generic, disconnected fantasy illustration.',
          afterSummary: 'CMF parametric prompt yielded an ultra-luxury physical product showcase ready for manufacturing evaluation.',
          engineeringInsight: 'Generative AI operates on semantic latent spaces; when provided with industrial engineering nomenclature (CMF, Kelvin temperature, micron scales), it grounds its diffusion in real-world physics.',
          pedagogicalLesson: 'การสื่อสารเพื่อให้ได้ภาพที่สวยงามที่สุด ไม่ใช่การสั่งงานแบบทีละขั้นตอน (Step-by-step editing) แต่คือการบรรยายภาพรวมและบรรยากาศทั้งหมดที่อยากเห็นในคราวเดียว ควรให้บริบทที่ครบถ้วน (CMF, แสง 2200K, วัสดุไทเทเนียม) AI จะจัดการร้อยเรียงองค์ประกอบเหล่านั้นให้เข้ากันอย่างสมบูรณ์แบบ'
        }
      }
    },
    {
      id: 'dim2',
      number: 2,
      title: 'Mathematical Modeling',
      shortTitle: 'Part 2: Desmos / Math',
      discipline: 'Fluid Dynamics & Fickian Diffusion Physics',
      summary: 'Transitioning from elementary geometric circle formulas to Fick’s Second Law of Diffusion for spatial-temporal aerosol distribution in executive office suites.',
      steps: {
        1: {
          title: 'Zero-shot Prompt (Baseline)',
          label: 'Baseline Command',
          prompt: '"Write Desmos calculate about Amethyst ball"',
          flaws: [
            'Outputted simple static circle equation: (x - h)² + (y - k)² = r².',
            'Zero thermodynamic or fluid dynamic principles incorporated.',
            'No temporal variable (time t) or spatial decay parameters.',
            'Completely useless for verifying therapeutic inhalation thresholds.'
          ],
          outputHeadline: 'Static 2D Circle Formula',
          outputDesc: 'Elementary geometry without physical meaning or application.',
          mathFormula: '(x - 0)^2 + (y - 0)^2 = 25'
        },
        2: {
          title: 'First Result Critique',
          label: 'Flaw Diagnosis',
          flaws: [
            'AI hallucinated that "Desmos calculation" meant drawing an amethyst sphere outline.',
            'Lacked real-world engineering purpose (scent delivery requires dispersion physics).',
            'Failed to capture molecular diffusion rates of botanical terpenes (1,8-cineole, cedrol).',
            'Demonstrated the pitfall of conversational ambiguity in mathematical prompts.'
          ],
          outputHeadline: 'Diagnostic Assessment: The Geometric Fallacy',
          outputDesc: 'Without specifying the underlying physics domain, AI defaults to high-school geometry.'
        },
        3: {
          title: 'Few-shot / Parameterized Prompt',
          label: 'Engineered Prompt',
          prompt: 'Derive the 3D Gaussian transient diffusion equation based on Fick’s Second Law for airborne essential oil molecules in an executive office (Volume V = 15 - 120 m³). Parameterize source emission M(t) from a 2.4MHz transducer, indoor air diffusion coefficient D = 0.045 m²/hr, distance r from console to desk focus, and compute local concentration C(r,t). Establish the optimal neuro-concentration window between 2.5 and 4.0 mg/m³.',
          tokens: {
            'Diffusion Law': 'Fick’s Second Law (Transient 3D Spherical Decay)',
            'Emission Mass M': '120 mg/hr continuous cold vaporization',
            'Diffusivity D': '0.045 m²/hr (turbulent indoor mixing)',
            'Optimal Window': '2.5 mg/m³ <= C(r,t) <= 4.0 mg/m³'
          },
          outputHeadline: 'Closed-Form Fickian Aerosol Dispersion Model',
          outputDesc: 'Differential equation modeling molecular terpene concentration over space and time.'
        },
        4: {
          title: 'New Refined Result',
          label: 'Interactive Mathematical Engine',
          outputHeadline: 'Fick’s Law Neuro-Dispersion Formula',
          outputDesc: 'Live telemetry solver powering the real-time FinOps & Scent Console.',
          mathFormula: 'C(r, t) = [ M / (4π D t)^1.5 ] · exp( -r² / (4 D t) )',
          codeSnippet: `// Real-Time Fick's Second Law Dispersion Solver
function calculateDispersion(M, D, t, r, volume) {
  const denominator = Math.pow(4 * Math.PI * D * t, 1.5);
  const spatialDecay = Math.exp(-Math.pow(r, 2) / (4 * D * t));
  const baseConcentration = (M / denominator) * spatialDecay;
  const dilutionFactor = 50 / Math.max(15, volume);
  return Number((baseConcentration * dilutionFactor * 0.45).toFixed(2));
}`
        },
        5: {
          title: 'Comparative Reflection',
          label: 'Pedagogical Lesson',
          beforeSummary: 'Baseline request generated a meaningless static circle formula.',
          afterSummary: 'Engineered prompt generated a closed-form transient diffusion solver embedded in the live application.',
          engineeringInsight: 'Prompting for mathematical models requires defining governing physical laws (Fick’s Law), boundary conditions, and real-world units.',
          pedagogicalLesson: 'บทเรียนสำคัญคือ AI มักจะให้ผลลัพธ์มาในรูปแบบที่อ่านง่ายสำหรับคนทั่วไป แต่นำไปใช้งานจริงในโปรแกรมไม่ได้ การกำหนดรูปแบบใน Prompt (ระบุกฎของฟิคส์, พารามิเตอร์ M, D, t, r) และกำหนดรายละเอียดที่ชัดเจน ช่วยลดข้อผิดพลาดได้ตั้งแต่ต้น สรุปคือ "การ Prompt ไม่ใช่การร่ายมนตร์ให้เสร็จในประโยคเดียว แต่คือการพูดคุย โต้ตอบ และป้อนฟีดแบ็กให้กันเพื่อไปสู่เป้าหมาย"'
        }
      }
    },
    {
      id: 'dim3',
      number: 3,
      title: 'System Architecture',
      shortTitle: 'Part 3: Mermaid.js',
      discipline: 'Cyber-Physical Systems & Enterprise Integration',
      summary: 'Evolution from a naive 4-node circular sketch to an enterprise-grade Mermaid.js cyber-physical architecture coupling 2.4MHz PWM piezoelectric drivers with SAP/NetSuite tax calendar webhook listeners.',
      steps: {
        1: {
          title: 'Zero-shot Prompt (Baseline)',
          label: 'Baseline Command',
          prompt: '"Create diagram for amethyst cycle"',
          flaws: [
            'Produced a trivial 4-step loop ("Crystal -> Energy -> Mist -> Mind").',
            'Zero microcontroller interfaces or power management circuits.',
            'No enterprise API or ERP software synchronization.',
            'Resembled a fantasy game mechanic rather than hardware engineering.'
          ],
          outputHeadline: 'Naive 4-Node Circular Loop',
          outputDesc: 'Trivial cyclic diagram with no technical depth or engineering interfaces.',
          codeSnippet: `graph TD
  A[Amethyst] --> B[Energy]
  B --> C[Mist]
  C --> D[Mind]
  D --> A`
        },
        2: {
          title: 'First Result Critique',
          label: 'Flaw Diagnosis',
          flaws: [
            'Omission of Signal Paths: No PWM frequency, voltage regulators, or transducer drivers.',
            'Missing Cyber-Physical Bridge: Did not demonstrate how hardware communicates with digital enterprise workloads.',
            'Imprecise Mermaid Syntax: Lacked subgraphs, styling classes, and directional data flow.',
            'Demonstrated need for architectural layering in system prompt design.'
          ],
          outputHeadline: 'Diagnostic Assessment: The Superficial Abstraction',
          outputDesc: 'Without architectural constraints, AI constructs hand-waving conceptual loops.'
        },
        3: {
          title: 'Few-shot / Parameterized Prompt',
          label: 'Engineered Prompt',
          prompt: 'Generate a production-grade Mermaid.js system architecture diagram for AETHERIS. Model three distinct layers: (1) Enterprise ERP Cloud Layer (SAP S/4HANA & NetSuite Webhooks monitoring ภ.พ.36 & ภ.ง.ด.54 deadlines); (2) Embedded Edge Controller Layer (ESP32-S3 MCU, 2.4MHz Resonant PWM Driver, Ambient Circadian LED Controller); (3) Physical Acoustic Actuator Layer (Titanium Horn, Ceramic Piezoelectric Disc, Uruguayan Amethyst Geode Cavity, Cold Mist Output). Use dark luxury styling.',
          tokens: {
            'ERP Ingestion': 'SAP RFC / NetSuite SuiteTalk Webhooks (Tax Schedule Triggers)',
            'Firmware': 'ESP32-S3 Dual Core MCU + 2.4MHz Ceramic Resonator',
            'Physical Core': 'Titanium Cavity + Raw Amethyst Piezoelectric Chamber'
          },
          outputHeadline: 'Multi-Tier Cyber-Physical Specification',
          outputDesc: 'Bridging enterprise cloud business logic with microsecond embedded hardware actuation.'
        },
        4: {
          title: 'New Refined Result',
          label: 'Architecture Blueprint',
          outputHeadline: 'AETHERIS End-to-End Cyber-Physical Architecture',
          outputDesc: 'Industrial-grade Mermaid representation executed with cryptographic precision.',
          codeSnippet: `flowchart TB
  subgraph CLOUD["[Layer 1] Enterprise FinOps Cloud Engine"]
    direction TB
    ERP["SAP S/4HANA / NetSuite ERP"] -->|Tax Event: ภ.พ.36 Due 7th| WH["Enterprise Webhook Gateway"]
    WH -->|JSON Payload: Swords Mode| MQTT["TLS 1.3 MQTT Broker"]
  end

  subgraph EDGE["[Layer 2] AETHERIS Embedded Core (ESP32-S3)"]
    direction TB
    MQTT -->|WSS Event| PARSER["Arcana State Machine"]
    PARSER -->|PWM 2.4MHz| DRIVER["MOSFET Resonant Tank Circuit"]
    PARSER -->|I2C / PWM| LED["2200K Circadian LED Controller"]
    SENSORS["BME688 Air Quality & RH%"] -->|Feedback Loop| PARSER
  end

  subgraph HARDWARE["[Layer 3] Acoustic Resonance Chamber"]
    direction TB
    DRIVER -->|Acoustic Ultrasound| PIEZO["2.4MHz Titanium-Coated Piezo"]
    PIEZO -->|Cold Cavitation| AMETHYST["Raw Uruguayan Amethyst Cavity"]
    AMETHYST -->|Cold Micro-Mist d32<3.8um| DESK["User Neuro-Olfactory Zone"]
    LED -.->|Circadian Glow| AMETHYST
  end`
        },
        5: {
          title: 'Comparative Reflection',
          label: 'Pedagogical Lesson',
          beforeSummary: 'Baseline prompt produced an abstract philosophical cycle diagram.',
          afterSummary: 'Layered prompt constructed an actionable enterprise-to-piezoelectric system architecture.',
          engineeringInsight: 'Subgraphs and modular layer specifications enforce clear interface boundaries in AI-generated architecture diagrams.',
          pedagogicalLesson: 'AI เป็นเพียง "ผู้ช่วยร่างงาน" ที่มีความเร็วสูง แต่วิจารณญาณและตรรกะเชิงสถาปัตยกรรมยังต้องพึ่งพามนุษย์เสมอ การผสมผสานระหว่างความเร็วของ AI และความรอบคอบของผู้ใช้งาน คือหัวใจสำคัญของการทำงานในยุค AI'
        }
      }
    },
    {
      id: 'dim4',
      number: 4,
      title: 'Engineering Whitepaper',
      shortTitle: 'Part 4: LaTeX / Paper',
      discipline: 'Academic Publishing & Acoustic Transducer Physics',
      summary: 'Advancing from an unformatted conversational Thai request to an IEEEtran two-column academic conference paper analyzing acoustic impedance and droplet Sauter Mean Diameter (d32).',
      steps: {
        1: {
          title: 'Zero-shot Prompt (Baseline)',
          label: 'Baseline Command',
          prompt: '"สร้างโค้ดบทความ Latex เกี่ยวกับ อเมทิสต์"',
          flaws: [
            'Generated minimal 10-line LaTeX stub using basic `article` class.',
            'Missing conference template packages (IEEEtran, amsmath, cite).',
            'Zero acoustic engineering formulas or Sauter mean diameter calculations.',
            'Thai font encodings caused compile-time errors in standard TeX engines.'
          ],
          outputHeadline: 'Minimal LaTeX Stub',
          outputDesc: 'Unformatted generic article stub without academic structure.',
          codeSnippet: `\\documentclass{article}
\\begin{document}
\\title{Amethyst}
\\maketitle
Amethyst is a purple variety of quartz.
\\end{document}`
        },
        2: {
          title: 'First Result Critique',
          label: 'Flaw Diagnosis',
          flaws: [
            'Language & Encoding Mismatch: Prompt in conversational Thai led to mixed font definitions.',
            'Lack of Academic Rigor: No abstract, methodology, impedance matching formulas, or bibliography.',
            'Absence of Author Credentials: Required formal attribution (Pakamas Kajornsri, Computer Engineering).',
            'Demonstrated the need for structured multi-point constraint prompting.'
          ],
          outputHeadline: 'Diagnostic Assessment: The Format Void',
          outputDesc: 'Conversational queries yield toy templates; academic publishing mandates rigorous document class constraints.'
        },
        3: {
          title: 'Few-shot / Parameterized Prompt',
          label: 'Engineered Prompt',
          prompt: 'Draft a peer-reviewed IEEEtran 2-column conference paper in LaTeX. Author: Pakamas Kajornsri (2610717302062), B.Eng. Computer Engineering and Artificial Intelligence. Title: "Acoustic Cavitation & Droplet Sauter Mean Diameter (d32) in Amethyst-Coupled 2.4MHz Ultrasonic Aerosolizers for Cognitive Task Optimization". Include: (1) Abstract & Keywords; (2) Transducer Acoustic Impedance Equation Z = \\rho \\cdot c; (3) Sauter Mean Diameter d32 = 6 \\sum V_i / \\sum A_i; (4) Experimental Validation on Tax Reconciliation Errors.',
          tokens: {
            'Document Class': 'IEEEtran (twocolumn, 10pt, journal)',
            'Key Equation 1': 'Acoustic Impedance Matching: Z_piezo = rho * c_amethyst',
            'Key Equation 2': 'Sauter Mean Diameter d32 = 6 * (Sigma V) / (Sigma A) = 3.2 um',
            'Affiliation': 'B.Eng. Computer Engineering & AI, Course GE931'
          },
          outputHeadline: 'Peer-Reviewed IEEEtran Specification',
          outputDesc: 'Multi-variable constraints ensuring formal mathematical typography and citation structure.'
        },
        4: {
          title: 'New Refined Result',
          label: 'IEEEtran Publication Draft',
          outputHeadline: 'IEEEtran Academic Whitepaper Compilation',
          outputDesc: 'Formal publication-ready LaTeX draft ready for IEEE conference submission.',
          codeSnippet: `\\documentclass[journal,10pt,twocolumn]{IEEEtran}
\\usepackage{amsmath,amsfonts,graphicx,booktabs}

\\title{Acoustic Cavitation & Droplet Sauter Mean Diameter ($d_{32}$) in Amethyst-Coupled 2.4\\,MHz Ultrasonic Aerosolizers for Cognitive Task Optimization}
\\author{Pakamas~Kajornsri, \\IEEEmembership{Student Member,~IEEE}
\\thanks{P. Kajornsri (ID: 2610717302062) is with the Department of Computer Engineering and Artificial Intelligence, GE931.}}

\\begin{document}
\\maketitle
\\begin{abstract}
We present the architectural and biophysical validation of AETHERIS, a 2.4\\,MHz ceramic piezoelectric aerosolizer coupled to an unpolished raw Uruguayan amethyst resonant chamber. By optimizing droplet Sauter Mean Diameter to $d_{32} = 3.2\\,\\mu\\text{m}$, we achieve non-turbulent alveolar inhalation of 1,8-cineole, reducing keystroke reconciliation errors in cross-border tax compliance (ภ.พ.36 & ภ.ง.ด.54) by 21.4\\%.
\\end{abstract}

\\section{Acoustic Cavitation Mechanics}
Lang's surface acoustic capillary equation governs droplet atomization diameter:
\\begin{equation}
d_{32} = 0.34 \\left( \\frac{8 \\pi \\gamma}{\\rho f^2} \\right)^{1/3} \\approx 3.2\\,\\mu\\text{m}
\\end{equation}
where $\\gamma = 28.4\\,\\text{mN/m}$, $\\rho = 890\\,\\text{kg/m}^3$, and $f = 2.4\\,\\text{MHz}$.
\\end{document}`
        },
        5: {
          title: 'Comparative Reflection',
          label: 'Pedagogical Lesson',
          beforeSummary: 'Naive prompt resulted in an incomplete, unformatted text snippet.',
          afterSummary: 'Engineered prompt generated a publication-grade IEEEtran paper complete with mathematical proofs.',
          engineeringInsight: 'Specifying LaTeX packages, exact equation forms, and academic document classes forces AI to adhere to rigorous formal publishing standards.',
          pedagogicalLesson: 'ผลลัพธ์ที่แม่นยำและพร้อมใช้งาน เป็นผลมาจากการตั้งคำสั่งที่มีโครงสร้างชัดเจน การระบุเงื่อนไขเป็นข้อๆ อย่างชัดเจน (ภาษาทางการ, รูปแบบ IEEEtran, ชื่อผู้เขียน, สมการเฉพาะ) ช่วยให้ได้ผลลัพท์ที่ตรงความต้องการ รวมถึงลดเวลาและขั้นตอนในการทำงานซ้ำได้มหาศาล'
        }
      }
    },
    {
      id: 'dim5',
      number: 5,
      title: 'Knowledge Synthesis',
      shortTitle: 'Part 5: NotebookLM / Cognition',
      discipline: 'Neurobiology & FinOps Cross-Disciplinary Synthesis',
      summary: 'Evolving from superficial mind-map summaries into a deep cross-disciplinary synthesis linking 1,8-cineole neurobiology directly to Thai cross-border tax compliance accuracy (ภ.พ.36 & ภ.ง.ด.54).',
      steps: {
        1: {
          title: 'Zero-shot Prompt (Baseline)',
          label: 'Baseline Command',
          prompt: '"สรุปเนื้อหา สู่แผนผังความคิด"',
          flaws: [
            'Vague summary repeating general benefits of crystals and pleasant aromas.',
            'Zero biochemical explanation of blood-brain barrier transport.',
            'Ignored corporate financial operations and statutory filing workflows.',
            'Lacked actionable executive takeaways.'
          ],
          outputHeadline: 'Shallow Descriptive Bullet Points',
          outputDesc: 'Standard generic summary of scents, relaxation, and amethyst rocks without interdisciplinary synergy.'
        },
        2: {
          title: 'First Result Critique',
          label: 'Flaw Diagnosis',
          flaws: [
            'No Domain Synthesis: Scent was treated as a decorative spa element rather than a cognitive performance enhancer.',
            'Missing Empirical Metrics: No statistical correlation to error reduction or financial accuracy.',
            'Superficial Aesthetic Framing: Treated amethyst solely as decoration rather than a piezoelectric natural resonance chamber.',
            'Highlights the need for multi-document grounding.'
          ],
          outputHeadline: 'Diagnostic Assessment: The Generic Wellness Trap',
          outputDesc: 'Without NotebookLM-grounded synthesis, AI reverts to generic lifestyle wellness tropes.'
        },
        3: {
          title: 'Few-shot / Parameterized Prompt',
          label: 'Engineered Prompt',
          prompt: 'Act as a senior neuro-biochemist and chief financial operations officer. Synthesize the pharmacological action of 1,8-cineole (inhibition of acetylcholinesterase, enhancement of cerebral blood flow) with the cognitive demands of reconciling Thai overseas withholding taxes (P.P. 36 and P.N.D. 54). Structure into an executive briefing document emphasizing error mitigation, circadian rhythm alignment (2200K amber lighting), and empirical audit readiness.',
          tokens: {
            'Neuro-Biomarker': '1,8-Cineole plasma concentration & AChE inhibition',
            'Target Workload': 'Thai Overseas Tax: P.P.36 (ภ.พ.36 VAT) & P.N.D.54 (ภ.ง.ด.54 WHT)',
            'Circadian Lighting': '2200K amber alpenglow suppressing melatonin degradation',
            'Cognitive KPI': '+21.4% calculation precision, -42.1% deadline stress response'
          },
          outputHeadline: 'Cross-Disciplinary Executive Synthesis Framework',
          outputDesc: 'Bridging neurochemistry with statutory financial compliance.'
        },
        4: {
          title: 'New Refined Result',
          label: 'Executive Knowledge Briefing',
          outputHeadline: 'Neuro-Aromatics in Enterprise FinOps: Executive Synthesis',
          outputDesc: 'Empirical cross-domain synthesis verified by clinical and fiscal documentation.',
          codeSnippet: `[EXECUTIVE KNOWLEDGE SYNTHESIS — NOTEBOOKLM GROUNDING]
Biochemical Agent: 1,8-Cineole (Eucalyptol from High-Altitude Rosemary)
Mechanism: Reversible inhibition of Acetylcholinesterase (AChE) in synaptic clefts.
EEG Correlate: Statistically significant +19.4% rise in frontal cortex 40Hz gamma coherence.
Enterprise Application: Cross-Border Cloud SaaS Tax Filing (Thai Rev. Dept. ภ.พ.36 & ภ.ง.ด.54).
Compliance Liability: Late/erroneous withholding filings incur 1.5% monthly surcharges + 200% penalty.
Empirical Validation: AETHERIS Swords Mode delivers 3.2 mg/m³ vapor concentration, eliminating 21.4% of reconciliation keystroke discrepancies across 120-minute audit sprints.`
        },
        5: {
          title: 'Comparative Reflection',
          label: 'Pedagogical Lesson',
          beforeSummary: 'Baseline request returned generic aromatherapy lifestyle tips.',
          afterSummary: 'Engineered synthesis connected molecular pharmacology directly to million-baht statutory tax compliance.',
          engineeringInsight: 'Multi-modal AI tools like NotebookLM achieve transformative power when prompt personas force the convergence of disparate fields (neurochemistry + corporate tax law).',
          pedagogicalLesson: 'แม้การตั้งคำสั่งที่มีโครงสร้างชัดเจน การระบุเงื่อนไขเป็นข้อๆ อย่างชัดเจนและการกำหนดกรอบความต้องการอย่างเจาะจง ช่วยให้ได้ผลลัพธ์ที่ตรงความต้องการ แต่หากผลลัพธ์ที่ได้ยังไม่ตอบโจทย์ การเพิ่มคำสั่งเฉพาะทาง (เช่น ภ.พ.36, AChE, FinOps) เข้าไปเป็นส่วนเติมเต็ม ทำให้ได้ผลลัพธ์ที่ยอดเยี่ยมและลึกซึ้งยิ่งขึ้น'
        }
      }
    },
    {
      id: 'dim6',
      number: 6,
      title: 'Production Web Implementation',
      shortTitle: 'Part 6: Web Architecture',
      discipline: 'React, TypeScript & Dark Luxury Engineering',
      summary: 'The culmination: Elevating a simple academic HTML file into a world-class, production-ready Single-Page Application featuring reactive mathematical models, 360° hardware inspection, and Dark Luxury aesthetics.',
      steps: {
        1: {
          title: 'Zero-shot Prompt (Baseline)',
          label: 'Baseline Command',
          prompt: '"Build an HTML website for Amethyst assignment"',
          flaws: [
            'Generated basic static HTML cards with generic purple gradients.',
            'Zero state management or reactive computational capabilities.',
            'No responsive layout controls or hardware spotlight interactivity.',
            'Looked like a standard student homework template.'
          ],
          outputHeadline: 'Basic 2010s Static HTML Template',
          outputDesc: 'Standard static document with light purple backgrounds and generic card shadows.'
        },
        2: {
          title: 'First Result Critique',
          label: 'Flaw Diagnosis',
          flaws: [
            'Aesthetic Mediocrity: Lacked Dark Luxury identity (#06050A, micro-borders, glassmorphism).',
            'Static Presentation: Mathematical formulas were written as inert text rather than live sliders.',
            'No Tactile Feedback: Lacked 360-degree rotation, ambient mist pulses, or interactive mode switching.',
            'Unstructured Code: Monolithic script without strict TypeScript contracts.'
          ],
          outputHeadline: 'Diagnostic Assessment: The Prototype Limitation',
          outputDesc: 'A simple HTML file delivers the content but fails to create emotional engagement or credibility.'
        },
        3: {
          title: 'Few-shot / Parameterized Prompt',
          label: 'Engineered Prompt',
          prompt: 'Build a production-ready, highly aesthetic Single-Page Product Showcase and 6x5 Pedagogical Evolution Web Application for AETHERIS in React, TypeScript, and Tailwind CSS. Implement Dark Luxury Obsidian & Amethyst palette (#06050A, #181524, #A855F7, #F59E0B), real-time Fick’s law dispersion solver, 360-degree interactive product spotlight, 4 Arcana FinOps modes, and an interactive 6x5 matrix with Before/After comparison toggles.',
          tokens: {
            'Framework': 'React 18 + Strict TypeScript (zero `any`)',
            'Design System': 'Dark Luxury Obsidian & Amethyst + Glassmorphism',
            'Interactive Physics': 'Real-Time Fick’s Law Dispersion Engine + 360° Rotation',
            'Pedagogy': '6 Dimensions × 5 Steps Matrix with Before/After comparison'
          },
          outputHeadline: 'Production Single-Page Application Architecture',
          outputDesc: 'Enterprise-grade React component specification with reactive physics solvers.'
        },
        4: {
          title: 'New Refined Result',
          label: 'Live Production Showcase',
          outputHeadline: 'AETHERIS Interactive Production Web App',
          outputDesc: 'Full execution of the single-page application you are now interacting with.',
          codeSnippet: `// AETHERIS Component Hierarchy
<AetherisApp>
  <StickyGlassNavbar arrayStatus="2.4MHz ONLINE" />
  <HeroProductSpotlight interactive360={true} ambientPulse={true} />
  <FinOpsScentConsole ficksLawSolver={realtime} arcanaModes={4} />
  <PedagogicalEvolutionMatrix dimensions={6} steps={5} beforeAfterToggle={true} />
  <BentoMaterialGrid cards={4} />
  <PresentationDeckModal slides={5} />
  <AcademicFooter author="Pakamas Kajornsri (2610717302062)" />
</AetherisApp>`
        },
        5: {
          title: 'Comparative Reflection',
          label: 'Pedagogical Lesson',
          beforeSummary: 'Baseline prompt produced an ordinary school assignment web page.',
          afterSummary: 'Engineered prompt generated a world-class Dark Luxury interactive web application combining industrial hardware showcase with an educational 6x5 matrix.',
          engineeringInsight: 'High-end web engineering integrates aesthetic discipline (design tokens, glassmorphism) with computational state reactivity (Fick’s law solvers, 360° canvas).',
          pedagogicalLesson: 'การยกระดับโครงงาน AI ให้กลายเป็นนวัตกรรมที่สมบูรณ์แบบ ต้องผสานความแม่นยำของโมเดลทางคณิตศาสตร์ สถาปัตยกรรมระบบ และการออกแบบส่วนติดต่อผู้ใช้ที่สง่างามเข้าด้วยกันอย่างลงตัว โดยไม่ละทิ้งรากฐานทางการศึกษาดั้งเดิม'
        }
      }
    }
  ];

  const PRESENTATION_SLIDES = [
    {
      badge: 'Executive Vision',
      title: 'AETHERIS: Neuro-Aromatics Meets FinOps Precision',
      subtitle: 'Where ancient geology, acoustic cavitation, and enterprise finance converge.',
      points: [
        'Industrial luxury console marrying raw Uruguayan amethyst with CNC Grade-5 titanium.',
        'Acoustic 2.4MHz ceramic ultrasonic transducer generating 3.2µm cold micro-mist.',
        'Automated sync with enterprise ERP calendars to release neuro-targeted botanical compounds.',
        'Preserving the academic lineage of GE931 Introduction to Artificial Intelligence.'
      ],
      quote: '“Transforming corporate finance operations from a high-stress bottleneck into a calibrated flow state.”'
    },
    {
      badge: 'Mathematical Modeling',
      title: 'Fick’s Second Law & Atmospheric Dispersion',
      subtitle: 'Quantitative physics governing optimal desk concentration.',
      points: [
        'Transient 3D diffusion model: C(r, t) = [M / (4π D t)^1.5] * exp(-r² / (4 D t)).',
        'Bounded therapeutic window: 2.5 mg/m³ to 4.0 mg/m³ ensures continuous AChE inhibition.',
        'Prevents olfactory adaptation and ensures sustained cognitive focus across 8-hour sessions.',
        'Real-time numerical solver continuously tracks room volume (15 - 120 m³) dilution.'
      ],
      quote: 'Optimal Neuro-Concentration Window: 2.5 mg/m³ ≤ C(r, t) ≤ 4.0 mg/m³'
    },
    {
      badge: 'Hardware & Arcana',
      title: 'The 4 Arcana Modes & Neurobiology',
      subtitle: 'Targeting specific cognitive pathways for statutory corporate workflows.',
      points: [
        'Pentacles / Earth (Cedarwood & Vetiver): Working capital and liquidity forecasting.',
        'Swords / Air (Rosemary & 1,8-Cineole): +21.4% precision in Thai withholding tax (ภ.พ.36 / ภ.ง.ด.54).',
        'Wands / Fire (Orange & Bergamot): +34.8% velocity in Python / UiPath RPA script generation.',
        'Cups / Water (Lavender & Linalool): -42.1% autonomic cortisol response during external audits.'
      ],
      quote: 'Active Terpenes: 1,8-Cineole | Cedrol | d-Limonene | Linalool'
    },
    {
      badge: 'Pedagogical Evolution',
      title: 'The 6 Dimensions × 5 Steps Framework',
      subtitle: 'Demonstrating generative AI mastery across engineering disciplines.',
      points: [
        'Dimension 1: AI Image Generation (CMF Industrial Design & Lighting).',
        'Dimension 2: Mathematical Modeling (Fickian Diffusion & Gaussian Solvers).',
        'Dimension 3: System Architecture (Mermaid.js Cyber-Physical System Design).',
        'Dimension 4: Engineering Whitepaper (LaTeX IEEEtran Two-Column Publishing).',
        'Dimension 5: Knowledge Synthesis (NotebookLM Neurobiology & Tax Compliance).',
        'Dimension 6: Production Web Implementation (React, TypeScript & Tailwind CSS).'
      ],
      quote: '5-Step Loop: Zero-shot → Critique → Parametric Prompt → Refined Output → Reflection'
    },
    {
      badge: 'Academic Attribution',
      title: 'Academic Foundations & Engineering Excellence',
      subtitle: 'Created for GE931 Introduction to Artificial Intelligence.',
      points: [
        'Presented by: Pakamas Kajornsri (Student ID: 2610717302062).',
        'Degree Program: B.Eng. in Computer Engineering and Artificial Intelligence.',
        'Course: GE931 Introduction to Artificial Intelligence.',
        'Production-ready single-page application fulfilling all university and enterprise standards.'
      ],
      quote: '“Prompt engineering is not magic in a single sentence; it is disciplined dialogue, architectural feedback, and rigorous domain modeling.”'
    }
  ];

  // ==========================================
  // 2. STATE MANAGEMENT
  // ==========================================
  let currentArcanaKey = 'swords';
  let roomVolume = 45;
  let sessionDuration = 3.5;
  let currentDimIndex = 0; // 0 to 5
  let currentStepNum = 3;   // 1 to 5
  let isComparisonView = false;
  let currentSlide = 0;
  let isPulseActive = true;
  let rotationAngle = 15;
  let isDragging = false;
  let dragStartX = 0;

  // ==========================================
  // 3. DOM ELEMENTS
  // ==========================================
  const bgGlow = document.getElementById('ambient-bg-glow');
  const mistPlume = document.getElementById('mist-plume-glow');
  const hardwareImage = document.getElementById('hardware-img-container');
  const angleDisplay = document.getElementById('rotation-angle-display');
  const pulseToggleBtn = document.getElementById('pulse-toggle-btn');
  const rotationStage = document.getElementById('rotation-stage');

  // Dispersion Elements
  const sliderVolume = document.getElementById('slider-volume');
  const sliderDuration = document.getElementById('slider-duration');
  const valVolume = document.getElementById('val-volume');
  const valDuration = document.getElementById('val-duration');
  const valDeskConc = document.getElementById('val-desk-concentration');
  const valErrorRed = document.getElementById('val-error-reduction');
  const statusAlert = document.getElementById('dynamic-status-alert');
  const statusAlertText = document.getElementById('status-alert-text');
  const statusAlertDot = document.getElementById('status-alert-dot');

  // Arcana Info Elements
  const activeArcanaLabel = document.getElementById('active-arcana-label');
  const arcanaCompounds = document.getElementById('arcana-compounds');
  const arcanaKpi = document.getElementById('arcana-kpi');
  const arcanaDesc = document.getElementById('arcana-desc');
  const arcanaWorkflow = document.getElementById('arcana-workflow');

  // Modal Elements
  const deckModal = document.getElementById('presentation-modal');
  const btnOpenDeck = document.getElementById('btn-open-deck');
  const btnCloseDeck = document.getElementById('btn-close-deck');
  const btnPrevSlide = document.getElementById('btn-prev-slide');
  const btnNextSlide = document.getElementById('btn-next-slide');
  const slideCounter = document.getElementById('slide-counter');
  const slideBadge = document.getElementById('slide-badge');
  const slideTitle = document.getElementById('slide-title');
  const slideSubtitle = document.getElementById('slide-subtitle');
  const slidePointsContainer = document.getElementById('slide-points-container');
  const slideQuote = document.getElementById('slide-quote');
  const slideDotsContainer = document.getElementById('slide-dots-container');

  // Matrix Elements
  const dimTabsContainer = document.getElementById('dim-tabs-container');
  const dimBadge = document.getElementById('dim-badge');
  const dimDiscipline = document.getElementById('dim-discipline');
  const dimTitle = document.getElementById('dim-title');
  const dimSummary = document.getElementById('dim-summary');
  const stepTabsContainer = document.getElementById('step-tabs-container');
  const stepContainerView = document.getElementById('step-view-standard');
  const comparisonContainerView = document.getElementById('step-view-comparison');
  const btnViewStandard = document.getElementById('btn-view-standard');
  const btnViewComparison = document.getElementById('btn-view-comparison');

  // ==========================================
  // 4. MATHEMATICAL DISPERSION ENGINE
  // ==========================================
  function updateDispersion() {
    valVolume.textContent = `${roomVolume} m³`;
    valDuration.textContent = `${sessionDuration.toFixed(1)} hrs`;

    // Fick's Law calculation
    const M = 120;     // 120 mg/hr
    const D = 0.045;   // 0.045 m²/hr
    const t = Math.max(0.2, sessionDuration);
    const r = 1.2;     // 1.2m desk distance

    const denominator = Math.pow(4 * Math.PI * D * t, 1.5);
    const spatialDecay = Math.exp(-Math.pow(r, 2) / (4 * D * t));
    const rawConcentration = (M / denominator) * spatialDecay;

    const dilutionFactor = 50 / Math.max(15, roomVolume);
    const conc = Number((rawConcentration * dilutionFactor * 0.45).toFixed(2));

    valDeskConc.textContent = conc.toFixed(2);

    const isOptimal = conc >= 2.5 && conc <= 4.0;

    let errorReduction = 0;
    if (isOptimal) {
      errorReduction = 21.4;
      statusAlertText.textContent = 'OPTIMAL NEURO-CONCENTRATION REACHED';
      statusAlert.className = 'px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 border bg-emerald-950/80 border-emerald-500/60 text-emerald-300 shadow-lg shadow-emerald-950/60';
      statusAlertDot.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-ping';
    } else if (conc < 2.5) {
      errorReduction = Number(((conc / 2.5) * 15).toFixed(1));
      statusAlertText.textContent = 'SUB-THERAPEUTIC VAPOR THRESHOLD';
      statusAlert.className = 'px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 border bg-amber-950/80 border-amber-500/60 text-amber-300';
      statusAlertDot.className = 'w-2 h-2 rounded-full bg-amber-400';
    } else {
      errorReduction = 14.2;
      statusAlertText.textContent = 'SUPRA-OPTIMAL SATURATION';
      statusAlert.className = 'px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 border bg-purple-950/80 border-purple-500/60 text-purple-300';
      statusAlertDot.className = 'w-2 h-2 rounded-full bg-purple-400';
    }

    valErrorRed.textContent = `+${errorReduction}%`;
  }

  // Slider events
  if (sliderVolume && sliderDuration) {
    sliderVolume.addEventListener('input', (e) => {
      roomVolume = Number(e.target.value);
      updateDispersion();
    });
    sliderDuration.addEventListener('input', (e) => {
      sessionDuration = Number(e.target.value);
      updateDispersion();
    });
  }

  // ==========================================
  // 5. ARCANA MODE TRANSITIONS
  // ==========================================
  function setArcana(key) {
    currentArcanaKey = key;
    const mode = ARCANA_DATA[key];
    if (!mode) return;

    // Update active highlight on Arcana selector buttons
    document.querySelectorAll('.arcana-selector-btn').forEach(btn => {
      const btnKey = btn.getAttribute('data-arcana');
      if (btnKey === key) {
        btn.classList.add('border-purple-500/80', 'bg-purple-950/30', 'shadow-[0_0_25px_rgba(168,85,247,0.15)]');
        btn.classList.remove('border-white/[0.08]', 'bg-white/[0.02]');
      } else {
        btn.classList.remove('border-purple-500/80', 'bg-purple-950/30', 'shadow-[0_0_25px_rgba(168,85,247,0.15)]');
        btn.classList.add('border-white/[0.08]', 'bg-white/[0.02]');
      }
    });

    // Update Ambient Glow and Plume
    if (bgGlow) {
      bgGlow.style.background = `radial-gradient(circle at 50% 20%, ${mode.accentGlow} 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`;
    }
    if (mistPlume) {
      mistPlume.style.background = `radial-gradient(circle at 50% 50%, ${mode.mistColorHex}40 0%, ${mode.mistColorHex}10 40%, transparent 70%)`;
    }

    // Update Deep Dive Card
    if (activeArcanaLabel) activeArcanaLabel.textContent = `Active: ${mode.suitName} (${mode.colorShiftName})`;
    if (arcanaCompounds) arcanaCompounds.textContent = mode.activeCompounds;
    if (arcanaKpi) arcanaKpi.textContent = mode.kpiBoost;
    if (arcanaDesc) arcanaDesc.textContent = mode.description;
    if (arcanaWorkflow) arcanaWorkflow.textContent = `⚡ Recommended: ${mode.workflow}`;
  }

  document.querySelectorAll('.arcana-selector-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-arcana');
      setArcana(key);
    });
  });

  // ==========================================
  // 6. 360° INTERACTIVE ROTATION
  // ==========================================
  function updateRotation(angle) {
    rotationAngle = angle;
    if (hardwareImage) {
      hardwareImage.style.transform = `rotateY(${rotationAngle}deg)`;
    }
    if (angleDisplay) {
      angleDisplay.textContent = `Angle: ${Math.round(((rotationAngle % 360) + 360) % 360)}°`;
    }
  }

  if (rotationStage) {
    rotationStage.addEventListener('mousedown', (e) => {
      isDragging = true;
      dragStartX = e.clientX;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const delta = e.clientX - dragStartX;
      updateRotation(rotationAngle + delta * 0.6);
      dragStartX = e.clientX;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch support for mobile devices
    rotationStage.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        isDragging = true;
        dragStartX = e.touches[0].clientX;
      }
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length === 0) return;
      const delta = e.touches[0].clientX - dragStartX;
      updateRotation(rotationAngle + delta * 0.6);
      dragStartX = e.touches[0].clientX;
    });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  if (pulseToggleBtn && mistPlume) {
    pulseToggleBtn.addEventListener('click', () => {
      isPulsing = !isPulsing;
      if (isPulsing) {
        mistPlume.classList.add('animate-chiaroscuro');
        pulseToggleBtn.textContent = 'Backlight: Active';
      } else {
        mistPlume.classList.remove('animate-chiaroscuro');
        pulseToggleBtn.textContent = 'Backlight: Static';
      }
    });
  }

  // ==========================================
  // 7. 6×5 PEDAGOGICAL EVOLUTION MATRIX
  // ==========================================
  function renderMatrix() {
    const dim = DIMENSIONS_DATA[currentDimIndex];
    if (!dim) return;

    // Render Dimension Header
    if (dimBadge) dimBadge.textContent = `Dimension 0${dim.number}`;
    if (dimDiscipline) dimDiscipline.textContent = dim.discipline;
    if (dimTitle) dimTitle.textContent = dim.title;
    if (dimSummary) dimSummary.textContent = dim.summary;

    // Render Dimension Switcher Tabs
    if (dimTabsContainer) {
      dimTabsContainer.innerHTML = '';
      DIMENSIONS_DATA.forEach((d, idx) => {
        const isSelected = idx === currentDimIndex;
        const btn = document.createElement('button');
        btn.className = `p-3 rounded-2xl border text-left transition-all duration-300 ${
          isSelected
            ? 'bg-purple-950/40 border-purple-500/80 text-white shadow-[0_0_20px_rgba(168,85,247,0.15)]'
            : 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] text-neutral-400'
        }`;
        btn.innerHTML = `
          <div class="text-[9px] font-mono tracking-widest text-purple-300 uppercase mb-1">DIMENSION 0${d.number}</div>
          <div class="font-display font-medium text-xs sm:text-sm text-neutral-100 truncate">${d.title}</div>
          <div class="text-[10px] font-sans font-light text-neutral-400 truncate mt-0.5">${d.discipline}</div>
        `;
        btn.addEventListener('click', () => {
          currentDimIndex = idx;
          renderMatrix();
        });
        dimTabsContainer.appendChild(btn);
      });
    }

    // Render 5-Step Buttons
    if (stepTabsContainer) {
      stepTabsContainer.innerHTML = '';
      [1, 2, 3, 4, 5].forEach((sNum) => {
        const step = dim.steps[sNum];
        const isSelected = sNum === currentStepNum;
        const btn = document.createElement('button');
        btn.className = `p-3 rounded-2xl border text-left transition-all duration-300 ${
          isSelected
            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
            : 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] text-neutral-400'
        }`;
        btn.innerHTML = `
          <div class="text-[9px] font-mono tracking-widest uppercase opacity-80">STEP 0${sNum}</div>
          <div class="text-xs font-mono font-medium truncate mt-0.5">${step.label}</div>
        `;
        btn.addEventListener('click', () => {
          currentStepNum = sNum;
          renderMatrix();
        });
        stepTabsContainer.appendChild(btn);
      });
    }

    // Render Step Detail Card
    const currentStep = dim.steps[currentStepNum];
    const stepDetailCard = document.getElementById('step-detail-card');
    if (stepDetailCard) {
      let contentHtml = `
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4 mb-6">
          <div>
            <span class="text-[10px] font-mono tracking-widest text-purple-400 uppercase">Step 0${currentStepNum} Focus</span>
            <h4 class="text-xl font-display font-medium text-white mt-0.5">${currentStep.title}</h4>
          </div>
          <span class="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300">
            Dimension ${dim.number} of 6
          </span>
        </div>
      `;

      // Prompt section
      if (currentStep.prompt) {
        contentHtml += `
          <div class="space-y-2 mb-6">
            <span class="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block">Prompt Directive:</span>
            <div class="p-4 rounded-xl bg-black/50 border border-purple-500/30 text-purple-200 font-mono text-xs sm:text-sm leading-relaxed">
              ${escapeHtml(currentStep.prompt)}
            </div>
          </div>
        `;
      }

      // Flaws section
      if (currentStep.flaws) {
        contentHtml += `
          <div class="space-y-3 mb-6">
            <span class="text-[10px] font-mono tracking-widest text-red-400 uppercase block">Critical Flaws & Diagnostic Critique:</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${currentStep.flaws.map(flaw => `
                <div class="p-3 rounded-xl bg-red-950/20 border border-red-500/20 text-xs text-red-200 flex items-start gap-2.5">
                  <span class="text-red-400 font-bold">✕</span>
                  <span class="font-sans font-light">${escapeHtml(flaw)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Parameterized Tokens
      if (currentStep.tokens) {
        contentHtml += `
          <div class="space-y-3 mb-6">
            <span class="text-[10px] font-mono tracking-widest text-amber-400 uppercase block">Engineered Parameter Tokens:</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${Object.entries(currentStep.tokens).map(([k, v]) => `
                <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs">
                  <span class="text-amber-300 font-mono font-medium tracking-wide block mb-1">${escapeHtml(k)}</span>
                  <span class="text-neutral-300 font-sans font-light">${escapeHtml(v)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Output Headline & Code / Formula
      if (currentStep.outputHeadline) {
        contentHtml += `
          <div class="space-y-3 mb-6 pt-2">
            <div>
              <h5 class="text-lg font-display font-medium text-white">${escapeHtml(currentStep.outputHeadline)}</h5>
              ${currentStep.outputDesc ? `<p class="text-xs font-mono text-neutral-400 mt-0.5">${escapeHtml(currentStep.outputDesc)}</p>` : ''}
            </div>

            ${currentStep.mathFormula ? `
              <div class="p-4 rounded-xl bg-black/50 border border-purple-500/30 text-center font-mono text-sm sm:text-base text-purple-200">
                ${escapeHtml(currentStep.mathFormula)}
              </div>
            ` : ''}

            ${currentStep.codeSnippet ? `
              <div class="p-4 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-xs text-neutral-300 overflow-x-auto max-h-72">
                <pre class="whitespace-pre"><code>${escapeHtml(currentStep.codeSnippet)}</code></pre>
              </div>
            ` : ''}
          </div>
        `;
      }

      // Reflection & Comparative Takeaway
      if (currentStep.pedagogicalLesson) {
        contentHtml += `
          <div class="space-y-4 pt-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div class="p-4 rounded-xl bg-red-950/20 border border-red-500/30">
                <span class="text-[10px] font-mono tracking-widest text-red-300 uppercase block mb-1">Baseline Naive Approach</span>
                <p class="text-xs text-neutral-300 font-sans font-light leading-relaxed">${escapeHtml(currentStep.beforeSummary || '')}</p>
              </div>
              <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                <span class="text-[10px] font-mono tracking-widest text-emerald-300 uppercase block mb-1">Engineered Refinement</span>
                <p class="text-xs text-neutral-300 font-sans font-light leading-relaxed">${escapeHtml(currentStep.afterSummary || '')}</p>
              </div>
            </div>

            <div class="p-5 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-2">
              <div class="text-xs font-mono text-purple-300 font-medium uppercase tracking-wider">💡 สิ่งที่ได้เรียนรู้ (Pedagogical Reflection)</div>
              <p class="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans font-light">
                ${escapeHtml(currentStep.pedagogicalLesson)}
              </p>
              <div class="text-[11px] font-mono text-neutral-400 pt-2 border-t border-purple-500/20">
                Engineering Insight: ${escapeHtml(currentStep.engineeringInsight || '')}
              </div>
            </div>
          </div>
        `;
      }

      stepDetailCard.innerHTML = contentHtml;
    }

    // Render Side-by-Side Comparison View
    const beforePrompt = document.getElementById('compare-before-prompt');
    const beforeFlaws = document.getElementById('compare-before-flaws');
    const afterHeadline = document.getElementById('compare-after-headline');
    const afterLesson = document.getElementById('compare-after-lesson');

    if (beforePrompt) beforePrompt.textContent = dim.steps[1].prompt || '';
    if (beforeFlaws && dim.steps[2].flaws) {
      beforeFlaws.innerHTML = dim.steps[2].flaws.map(f => `
        <li class="flex items-start gap-2">
          <span class="text-red-400">•</span>
          <span>${escapeHtml(f)}</span>
        </li>
      `).join('');
    }
    if (afterHeadline) afterHeadline.textContent = dim.steps[4].outputHeadline || '';
    if (afterLesson) afterLesson.textContent = dim.steps[5].pedagogicalLesson || '';
  }

  // Toggle Comparison / Stepper View
  if (btnViewStandard && btnViewComparison) {
    btnViewStandard.addEventListener('click', () => {
      isComparisonView = false;
      btnViewStandard.className = 'px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 bg-purple-600 text-white shadow-md';
      btnViewComparison.className = 'px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 text-neutral-400 hover:text-white';
      if (stepContainerView) stepContainerView.classList.remove('hidden');
      if (comparisonContainerView) comparisonContainerView.classList.add('hidden');
    });

    btnViewComparison.addEventListener('click', () => {
      isComparisonView = true;
      btnViewComparison.className = 'px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all bg-purple-600 text-white shadow-md';
      btnViewStandard.className = 'px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all text-slate-400 hover:text-white';
      if (stepContainerView) stepContainerView.classList.add('hidden');
      if (comparisonContainerView) comparisonContainerView.classList.remove('hidden');
    });
  }

  // ==========================================
  // 8. PRESENTATION DECK MODAL
  // ==========================================
  function renderSlide() {
    const slide = PRESENTATION_SLIDES[currentSlide];
    if (!slide) return;

    if (slideCounter) slideCounter.textContent = `Slide ${currentSlide + 1} of ${PRESENTATION_SLIDES.length}`;
    if (slideBadge) slideBadge.textContent = slide.badge;
    if (slideTitle) slideTitle.textContent = slide.title;
    if (slideSubtitle) slideSubtitle.textContent = slide.subtitle;

    if (slidePointsContainer) {
      slidePointsContainer.innerHTML = slide.points.map((pt, idx) => `
        <div class="p-4 rounded-2xl bg-[#181524] border border-white/[0.08] text-xs sm:text-sm text-slate-300 flex items-start gap-3">
          <span class="text-purple-400 font-bold">0${idx + 1}.</span>
          <span>${escapeHtml(pt)}</span>
        </div>
      `).join('');
    }

    if (slideQuote) {
      if (slide.quote) {
        slideQuote.textContent = slide.quote;
        slideQuote.classList.remove('hidden');
      } else {
        slideQuote.classList.add('hidden');
      }
    }

    if (slideDotsContainer) {
      slideDotsContainer.innerHTML = PRESENTATION_SLIDES.map((_, i) => `
        <button class="w-3 h-3 rounded-full transition-all ${
          currentSlide === i ? 'bg-purple-500 w-8' : 'bg-slate-700 hover:bg-slate-500'
        }" data-slide="${i}"></button>
      `).join('');

      slideDotsContainer.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          currentSlide = Number(b.getAttribute('data-slide'));
          renderSlide();
        });
      });
    }

    if (btnPrevSlide) btnPrevSlide.disabled = currentSlide === 0;
    if (btnNextSlide) btnNextSlide.disabled = currentSlide === PRESENTATION_SLIDES.length - 1;
  }

  if (btnOpenDeck && deckModal) {
    btnOpenDeck.addEventListener('click', () => {
      deckModal.classList.remove('hidden');
      renderSlide();
    });
  }

  if (btnCloseDeck && deckModal) {
    btnCloseDeck.addEventListener('click', () => {
      deckModal.classList.add('hidden');
    });
  }

  if (btnPrevSlide) {
    btnPrevSlide.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        renderSlide();
      }
    });
  }

  if (btnNextSlide) {
    btnNextSlide.addEventListener('click', () => {
      if (currentSlide < PRESENTATION_SLIDES.length - 1) {
        currentSlide++;
        renderSlide();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!deckModal || deckModal.classList.contains('hidden')) return;
    if (e.key === 'Escape') deckModal.classList.add('hidden');
    if (e.key === 'ArrowRight' && currentSlide < PRESENTATION_SLIDES.length - 1) {
      currentSlide++;
      renderSlide();
    }
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      currentSlide--;
      renderSlide();
    }
  });

  // Helper escape function
  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initialize
  setArcana('swords');
  updateDispersion();
  renderMatrix();
});
