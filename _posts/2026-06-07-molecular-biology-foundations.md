---
layout: post
title: "Inside the Cell: A Biomedical Scientist's Guide to Molecular Biology"
subtitle: "The central dogma, glycolysis, the Krebs cycle, and inflammatory signaling explained with precision"
tags: [molecular-biology, biochemistry, cell-biology, metabolism, inflammation, evidence-based]
comments: true
description: "A biomedical scientist explains the four pillars of molecular biology: the central dogma of gene expression, glycolysis, the Krebs cycle, and the NF-kB inflammatory signaling pathway, with detailed diagrams of each."
thumbnail-img: /assets/img/posts/molecular-biology-hero.webp
---

<style>
.bio-box { background:linear-gradient(135deg,#f0f9f4,#e8f5e9);border-left:4px solid #2e7d5e;border-radius:0 10px 10px 0;padding:1rem 1.2rem;margin:1.5rem 0; }
.bio-box p { margin:0 0 0.7rem;font-size:0.92rem;color:#1a2e2a; }
.post-img { max-width:100%; border-radius:8px; display:block; margin:0 auto; }
.post-figure { text-align:center; margin:2rem 0; }
.post-figure figcaption { font-size:0.82rem; color:#666; margin-top:0.5rem; font-style:italic; }
.mol-concept { background:#f3f4f6; border-radius:8px; padding:0.9rem 1.1rem; margin:1.2rem 0; border:1px solid #e0e0e0; }
.mol-concept strong { color:#2e7d5e; }
.diagram-guide { background:#fffde7; border-left:3px solid #f9a825; border-radius:0 8px 8px 0; padding:0.7rem 1rem; margin:0.8rem 0 1.5rem; font-size:0.88rem; color:#5d4037; }
</style>

<figure class="post-figure">
  <img src="/assets/img/posts/molecular-biology-hero.webp" alt="DNA double helix glowing blue against dark background representing molecular biology" class="post-img">
  <figcaption>Every process discussed in health science, from inflammation to energy production to immune response, traces back to molecular events inside individual cells.</figcaption>
</figure>

Every health claim you have ever read, every drug ever developed, and every function your body performs right now depends on molecular events happening inside individual cells. Proteins are being synthesized. Glucose is being broken down. Genes are being switched on and off in response to signals from the environment. Inflammatory molecules are being produced, targeted, and resolved.

Understanding these processes is not just academic curiosity. It is the foundation for understanding why specific lifestyle interventions work, what specific drugs actually do, and how the body maintains health or loses it. This article covers four pillars of molecular and cellular biology with enough depth to be genuinely useful, presented through the lens of someone who has worked in a biochemistry research laboratory.

---

## The Central Dogma: How Genes Become Functions

The central dogma of molecular biology, articulated by Francis Crick in 1958, describes the directional flow of genetic information inside the cell. It remains one of the most powerful organizing principles in all of biology.

<figure class="post-figure">
  <img src="/assets/img/posts/molecular-biology-central-dogma.svg" alt="Diagram of the central dogma showing DNA transcription to mRNA and translation to protein" class="post-img">
  <figcaption>How to read this diagram: follow the flow from left to right. DNA (purple, left panel) is read by RNA Polymerase II (yellow oval) to produce mRNA (teal, center panel), which travels to a ribosome (right panel) that assembles the protein chain one amino acid at a time. Each colored circle in the protein chain represents a different amino acid.</figcaption>
</figure>

<div class="diagram-guide">
<strong>Reading the diagram:</strong> Left panel shows the DNA double helix with its alternating base pairs. The center panel shows the processed mRNA with its triplet codons (AUG, GCU, etc.) ready to be read. The right panel shows the ribosome with a growing polypeptide chain. Each step only flows in one direction: DNA cannot be rewritten from protein, only from other DNA or RNA (with exceptions like retroviruses).
</div>

**DNA** (deoxyribonucleic acid) stores genetic information in a chemically stable form. The double helix structure, with its complementary base pairs (adenine with thymine, guanine with cytosine), allows exact copying during cell division and protects the sequence from chemical modification. In human cells, approximately 3.2 billion base pairs of DNA are packaged into 23 pairs of chromosomes inside the nucleus. Only a fraction of this DNA encodes proteins; the rest regulates gene expression, structures chromatin, or has functions still being characterized.

**Transcription** is the process by which RNA polymerase II reads a DNA template and synthesizes a complementary messenger RNA (mRNA) strand. This occurs in the nucleus. The pre-mRNA undergoes processing before leaving: a 5-prime cap is added for stability, a poly-A tail is appended at the 3-prime end, and introns (non-coding intervening sequences) are removed by a large molecular machine called the spliceosome. The mature mRNA then exits the nucleus through nuclear pore complexes.

**Translation** occurs in the cytoplasm, where ribosomes (composed of ribosomal RNA and over 80 ribosomal proteins) read the mRNA in triplets called codons. Each codon specifies a particular amino acid, delivered by transfer RNA molecules. The ribosome moves along the mRNA, elongating the polypeptide chain one amino acid at a time until it reaches a stop codon. The newly synthesized protein then folds, often assisted by chaperone proteins, into its functional three-dimensional shape.

<div class="mol-concept">
<strong>Why this matters for health:</strong> Gene expression is not fixed. The same DNA sequence produces different outcomes depending on which regulatory proteins activate or repress transcription in a given cell type, developmental stage, or environmental condition. This is the molecular basis of epigenetics, of how early-life experiences affect adult health, and of why lifestyle factors can modulate disease risk even with identical genetic sequences.
</div>

The remarkable implication is that your DNA is not your destiny. It is a library. Which books get read, how often, and in which cells is determined by a dynamic regulatory system that is highly responsive to your environment, your nutrition, your sleep, and your stress levels.

---

## Glycolysis: How Cells Extract Energy from Glucose

Every cell in the body, with the exception of red blood cells, contains mitochondria and can perform oxidative metabolism. But the first stage of glucose breakdown happens outside the mitochondria, in the cytoplasm, and is ancient: glycolysis predates the emergence of oxygen in Earth's atmosphere by hundreds of millions of years.

<figure class="post-figure">
  <img src="/assets/img/posts/molecular-biology-glycolysis.svg" alt="Detailed 10-step diagram of glycolysis showing energy investment and payoff phases with enzymes and products" class="post-img">
  <figcaption>How to read this diagram: the pathway flows top to bottom. Each numbered circle represents one enzymatic step, and the enzyme name appears on the arrow. The red (top) section is the Energy Investment Phase where 2 ATP are consumed. The green (bottom) section is the Energy Payoff Phase where 4 ATP and 2 NADH are produced. The net summary at the bottom shows the overall equation for the complete pathway.</figcaption>
</figure>

<div class="diagram-guide">
<strong>Reading the diagram:</strong> Glucose enters at the top and is progressively modified through 10 steps. Note the color change from red to green at step 6 (Glyceraldehyde-3-P), marking the transition from energy consumption to energy production. The molecule splits in two at step 4 (Aldolase), so steps 6 to 10 run twice per glucose molecule, which explains why the net yield is 2 ATP even though 4 are produced in the payoff phase.
</div>

Glycolysis converts one molecule of glucose (a six-carbon sugar) into two molecules of pyruvate (a three-carbon compound) through 10 enzymatic steps. The pathway divides into two functionally distinct phases.

**The Energy Investment Phase (steps 1 to 5)** consumes 2 ATP molecules to phosphorylate glucose and prepare it for cleavage. The committed step, and the primary regulatory point, is the phosphorylation of fructose-6-phosphate by phosphofructokinase-1 (PFK-1). This enzyme is allosterically inhibited by ATP and citrate (signals that the cell has sufficient energy) and activated by AMP and ADP (signals of energy deficit). This elegant feedback mechanism ensures glycolysis runs only when the cell genuinely needs fuel.

**The Energy Payoff Phase (steps 6 to 10)** processes two molecules of glyceraldehyde-3-phosphate and generates 4 ATP and 2 NADH per glucose. The net yield after subtracting the investment phase is 2 ATP and 2 NADH per glucose molecule, a remarkably small fraction of the energy chemically available in glucose.

<div class="mol-concept">
<strong>Why this matters for health:</strong> Cancer cells preferentially use glycolysis even in the presence of adequate oxygen, producing lactate rather than entering the Krebs cycle. This observation, called the Warburg effect, is the molecular basis for PET scanning (which detects tumors by their high glucose uptake) and is one of the most active areas of cancer metabolism research.
</div>

The NADH produced by glycolysis carries high-energy electrons to the mitochondria, where the electron transport chain uses them to drive ATP synthesis through oxidative phosphorylation. This is where the bulk of cellular energy comes from: not from glycolysis itself, but from the downstream processing of its products.

---

## The Krebs Cycle: The Mitochondrial Hub of Metabolism

The pyruvate generated by glycolysis enters the mitochondria, where it is converted by the pyruvate dehydrogenase complex into acetyl-CoA, a two-carbon compound that feeds into the citric acid cycle, also known as the Krebs cycle or TCA (tricarboxylic acid) cycle.

<figure class="post-figure">
  <img src="/assets/img/posts/molecular-biology-krebs-cycle.svg" alt="Circular diagram of the Krebs cycle with all 8 steps, enzymes, products and net yield summary" class="post-img">
  <figcaption>How to read this diagram: the 8 metabolites are arranged in a clockwise circle, each represented by a colored box. Follow the arrows clockwise from Oxaloacetate. The enzyme catalysing each reaction appears in italic text between the two metabolites it connects. The colored badges (+NADH, +FADH2, +GTP, -CO2) show the products released at each step. Acetyl-CoA enters via the orange dashed arrow at Citrate. The summary panel at the bottom shows the total yield per full glucose molecule (2 cycles).</figcaption>
</figure>

<div class="diagram-guide">
<strong>Reading the diagram:</strong> Oxaloacetate (purple, top) acts as the regenerating molecule that accepts Acetyl-CoA at the beginning and is reformed at the end of each turn. Each clockwise step releases either CO2, NADH, FADH2, or GTP as indicated by the badge on the inner side of each arrow. The centre circle summarises the yield per single turn (half a glucose molecule). The larger badges further from the centre mark the enzyme names.
</div>

The cycle begins when acetyl-CoA (two carbons) condenses with oxaloacetate (four carbons) to form citrate (six carbons), catalyzed by citrate synthase. Over eight enzymatic reactions, the cycle releases two molecules of CO2, regenerates oxaloacetate for the next turn, and produces per turn: 3 NADH, 1 FADH2, and 1 GTP.

The key enzymes of the Krebs cycle are regulated by the energy state of the cell. Isocitrate dehydrogenase and alpha-ketoglutarate dehydrogenase are inhibited by NADH and ATP (signals of energy abundance) and activated by ADP and calcium (signals of energy demand). The cycle thus accelerates automatically during periods of high metabolic activity, such as exercise, and slows during rest.

The NADH and FADH2 produced by the Krebs cycle donate their electrons to Complex I and Complex II of the electron transport chain, respectively. This drives proton pumping across the inner mitochondrial membrane, creating an electrochemical gradient that powers ATP synthase. The total ATP yield from one glucose molecule, including glycolysis, Krebs cycle, and oxidative phosphorylation, is approximately 30 to 32 ATP under physiological conditions.

<div class="mol-concept">
<strong>Why this matters for health:</strong> Mitochondrial dysfunction, characterized by impaired Krebs cycle activity and reduced electron transport chain efficiency, is increasingly recognized as a central feature of aging, metabolic disease, and neurodegeneration. Regular aerobic exercise increases mitochondrial density and efficiency, which is one of the primary mechanisms behind the longevity benefits of physical activity.
</div>

---

## The NF-kB Pathway: Inflammation at the Molecular Level

Of all the signaling pathways relevant to human health, NF-kB (Nuclear Factor kappa-light-chain-enhancer of activated B cells) is among the most studied and most clinically significant. It is the master regulator of the inflammatory response, and its dysregulation connects some of the most prevalent chronic diseases of the modern world.

<figure class="post-figure">
  <img src="/assets/img/posts/molecular-biology-nfkb-pathway.svg" alt="Complete diagram of the NF-kB inflammatory signaling pathway from membrane receptors to gene expression" class="post-img">
  <figcaption>How to read this diagram: the flow is strictly top to bottom. Extracellular signals (red boxes, top) bind to transmembrane receptors (dark grey boxes, just below the cell membrane bar). The intracellular cascade then proceeds downward through the IKK complex, IkB phosphorylation and degradation, NF-kB release, nuclear translocation across the nuclear membrane (blue bar), DNA binding, and finally inflammatory gene expression (green section, bottom). The orange side box shows IkB being degraded by the proteasome as a concurrent event.</figcaption>
</figure>

<div class="diagram-guide">
<strong>Reading the diagram:</strong> Two horizontal bars divide the cell into three zones: extracellular (above the dark grey "CELL MEMBRANE" bar), cytoplasm (between the two bars), and nucleus (below the blue "NUCLEAR MEMBRANE" bar). Three converging arrows from the receptors represent how different signal types all converge on the same IKK complex. The orange side branch shows IkB degradation as a parallel, enabling event. The clinical relevance box at the bottom identifies the therapeutic drugs that target this pathway.
</div>

In resting cells, NF-kB transcription factors (primarily the p65/p50 heterodimer) are held inactive in the cytoplasm by a family of inhibitory proteins called IkB. When the cell receives a signal indicating danger, membrane receptors activate the IKK (IkB kinase) complex. The IKK complex phosphorylates IkB proteins at specific serine residues, targeting them for rapid degradation by the 26S proteasome. This releases the NF-kB dimers, which translocate to the nucleus and bind specific DNA sequences (kB sites) in the promoter and enhancer regions of inflammatory genes. The result is transcription of dozens of genes encoding pro-inflammatory cytokines, adhesion molecules, and enzymes of immune activation.

<div class="mol-concept">
<strong>Why this matters for health:</strong> Virtually every anti-inflammatory strategy known to medicine converges on this pathway. Aspirin inhibits NF-kB activation. Corticosteroids induce IkB expression. Chronic NF-kB activation, driven by obesity, a sedentary lifestyle, chronic stress, poor sleep, and ultra-processed food consumption, creates the persistent low-grade inflammation that underlies cardiovascular disease, type 2 diabetes, Alzheimer's disease, and several cancers. My own research background is in neutrophil biology, and NF-kB signaling is central to how neutrophils respond to infection. Understanding it at this level of detail changes how you think about what lifestyle factors actually do to your biology.
</div>

---

## Connecting Molecular Biology to Your Daily Health Decisions

The pathways described in this article are not abstract. They respond in real time to what you eat, how you sleep, how much you move, and how much chronic stress you carry.

Dietary fiber supports the production of short-chain fatty acids by gut bacteria, which inhibit NF-kB activation in colonic epithelial cells. Regular aerobic exercise increases mitochondrial biogenesis, improving the efficiency of the Krebs cycle and electron transport chain. Adequate sleep enables the glymphatic system to clear metabolic waste products. Chronic psychological stress sustains cortisol release, which maintains receptor-level activation of NF-kB and suppresses the adaptive immune system simultaneously.

None of this means that lifestyle interventions are treatments for established disease. It means that the same molecular mechanisms underlying disease are continuously responsive to the inputs you provide, and that understanding the mechanisms makes the rationale for healthy habits considerably more convincing than generic advice.

Biochemistry is not something that happens in textbooks. It is happening in every cell of your body, right now, in response to everything you are doing.

One of the most significant recent developments in this field is the recognition that lifestyle factors can modify gene expression without changing the underlying DNA sequence — a phenomenon known as epigenetics. DNA methylation, histone modification, and non-coding RNA regulation all respond to diet, exercise, sleep quality, and chronic stress in measurable ways. This means that the same genome can produce profoundly different biological outcomes depending on the environment it operates in. The choices that affect NF-kB activation, mitochondrial efficiency, and glycolytic flux are not incidental. They are epigenetic inputs into a system that was built to be responsive.

---

**References:**

- Alberts B, Heald R, Johnson AD, et al. *Molecular Biology of the Cell*, 7th ed. New York: W.W. Norton and Company; 2022.
- Nelson DL, Cox MM. *Lehninger Principles of Biochemistry*, 8th ed. New York: W.H. Freeman and Company; 2021.
- Berg JM, Tymoczko JL, Gatto GJ Jr, Stryer L. *Biochemistry*, 9th ed. New York: W.H. Freeman and Company; 2019.
- Hayden MS, Ghosh S. Shared principles in NF-kB signaling. *Cell*, 132(3), 344-362, 2008.
- Alegría-Torres JA, Baccarelli A, Bollati V. (2011). Epigenetics and lifestyle. *Epigenomics*, 3(3), 267-277. [PubMed](https://pubmed.ncbi.nlm.nih.gov/22122337/){:target="_blank" rel="noopener"}

---

*Have a question or a topic you would like covered? Leave a comment below or [get in touch](/contact).*
