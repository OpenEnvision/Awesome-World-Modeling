<div align="center">

# 🌍 Awesome World Models

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-blue.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

**A scope-aware, paper-first curated list of world model research.**  
Organized by paradigm first, then by domain, representation, and downstream use.

*Latest curation pass verified against arXiv on April 29, 2026.*

</div>

| Historical wave map |
| --- |
| <img src="image/world_qa.png" alt="world model historical waves" width="100%"> |

## Definition and scope

### A short working definition

A **world model** is an internal predictive model of an environment that helps an agent answer:

> **What will happen if I act, wait, intervene, or imagine an alternative future?**

That definition is intentionally broader than model-based RL, but narrower than "any model that understands the world".

### World model vs. nearby concepts

| Concept | Core question | Typical output |
| --- | --- | --- |
| world model | what happens next under state, action, or intervention? | future observations, latent states, occupancy, trajectories, or executable rollouts |
| simulator | can the environment be replayed or executed? | environment transitions, often hand-built or learned |
| planner / policy | what should the agent do? | actions, plans, control sequences |
| perception model | what is in the scene now? | labels, detections, depth, segmentation |

### A practical boundary

A paper is strongest as a world-model entry when it does at least two of the following:

1. models state,
2. predicts state evolution under action or intervention,
3. supports imagination, planning, evaluation, or controllable simulation.

If it only renders plausible video frames without state, action, or decision relevance, it is usually better treated as a neighboring generative model rather than a core world model.

## 📖 Table of Contents
- [Taxonomic Overview](#-taxonomic-overview)
- [0 · Mind World Models — Biological Origins & Foundational Definitions](#0--mind-world-models--biological-origins--foundational-definitions)
- [1 · Generative World Models](#1--generative-world-models)
  - [1.1 Game & Interactive World Simulation](#11-game--interactive-world-simulation)
  - [1.2 Autonomous Driving — Generative](#12-autonomous-driving--generative)
  - [1.3 Embodied AI & Robotics — Generative](#13-embodied-ai--robotics--generative)
  - [1.4 3D / 4D Scene Generation](#14-3d--4d-scene-generation)
  - [1.5 Scientific & Physical World Modeling](#15-scientific--physical-world-modeling)
- [2 · Representational World Models](#2--representational-world-models)
  - [2.1 Latent Dynamics Models (RSSM / Dreamer Family)](#21-latent-dynamics-models-rssm--dreamer-family)
  - [2.2 Joint Embedding Predictive Architectures (JEPA)](#22-joint-embedding-predictive-architectures-jepa)
  - [2.3 Occupancy & BEV Representations](#23-occupancy--bev-representations)
  - [2.4 Multimodal & Acoustic Sensory World Models](#24-multimodal--acoustic-sensory-world-models)
  - [2.5 Symbolic & Knowledge-Graph World Models](#25-symbolic--knowledge-graph-world-models)
- [3 · Agentic World Models](#3--agentic-world-models)
  - [3.1 Model-Based Reinforcement Learning (MBRL)](#31-model-based-reinforcement-learning-mbrl)
  - [3.2 World-Model-Guided Planning](#32-world-model-guided-planning)
  - [3.3 Closed-Loop Simulation & Evaluation](#33-closed-loop-simulation--evaluation)
  - [3.4 Multi-Agent World Models](#34-multi-agent-world-models)
  - [3.5 Safety-Aware Agentic World Models](#35-safety-aware-agentic-world-models)
  - [3.6 LLM / VLM Agents with World Models](#36-llm--vlm-agents-with-world-models)
- [Surveys & Position Papers](#-surveys--position-papers)
- [Benchmarks & Evaluation](#-benchmarks--evaluation)
- [Workshops & Challenges](#-workshops--challenges)
- [Citation](#-citation)

---

## 🗺 Taxonomic Overview

```
World Models
│
├── 0. Mind World Models (Cognitive / Biological Grounding)
│       └── Neuroscience, Predictive Coding, Cognitive Science
│
├── 1. Generative World Models  [focus: synthesizing plausible futures]
│   │
│   ├── By Domain / Task
│   │   ├── 1.1 Game & Interactive Simulation
│   │   ├── 1.2 Autonomous Driving
│   │   ├── 1.3 Embodied AI & Robotics
│   │   ├── 1.4 3D / 4D Scene Generation
│   │   └── 1.5 Scientific & Physical World Modeling
│   │
│   └── By Architecture (cross-domain)
│       ├── Diffusion-based
│       ├── Autoregressive Transformer
│       ├── VAE / VQ-VAE + Latent Prediction
│       └── Gaussian / NeRF / Mesh-based
│
├── 2. Representational World Models  [focus: learning structured internal state]
│   │
│   ├── 2.1 Latent Dynamics Models (RSSM / Dreamer)
│   ├── 2.2 Joint Embedding Predictive Architectures (JEPA)
│   ├── 2.3 Occupancy & BEV Representations
│   ├── 2.4 Multimodal & Acoustic Sensory World Models
│   └── 2.5 Symbolic & Knowledge-Graph World Models
│
└── 3. Agentic World Models  [focus: acting, planning, decision-making]
    │   (= World Foundation Model + Agentic Framework)
    ├── 3.1 Model-Based Reinforcement Learning (MBRL)
    ├── 3.2 World-Model-Guided Planning
    ├── 3.3 Closed-Loop Simulation & Evaluation
    ├── 3.4 Multi-Agent World Models
    ├── 3.5 Safety-Aware Agentic World Models
    └── 3.6 LLM / VLM Agents with World Models
```


---
### Working definitions

- **Mind World Model**: the biological and cognitive intuition that an intelligent system carries an internal model of the world and uses it for prediction, imagination, and counterfactual reasoning.
- **Generative World Model**: predicts or synthesizes plausible future observations, often pixels, video, occupancy, or point clouds.
- **Representational World Model**: predicts future *state* or *latent structure* without requiring photorealistic decoding.
- **World Foundation Model (WFM)**: a pretrained model of environment structure and dynamics that can support simulation, planning, forecasting, or data generation across downstream tasks.
- **Agentic World Model**: a WFM coupled with action selection, planning, memory, tool use, or policy optimization in a closed loop.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 0 · Mind World Models — Biological Origins & Foundational Definitions

> The concept of a "world model" originates in cognitive science and neuroscience. An agent's internal model of its environment allows it to predict sensory consequences of its own actions—the computational substrate of planning, imagination, and counterfactual reasoning. The papers below form the intellectual backbone of modern machine world models.
> This section is intentionally narrow: it keeps only biological, cognitive, and direct formative foundations, and does **not** absorb later engineering papers that belong in generative, representational, or agentic sections.

### 0.1 Foundational Cognitive & Neuroscientific Works

- **Occupancy Grids** — Elfes, A. "Using Occupancy Grids for Mobile Robot Perception and Navigation." *Computer* (1989). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](http://www.sci.brooklyn.cuny.edu/~parsons/courses/3415-fall-2011/papers/elfes.pdf)  
  > First computational formalization of a spatial world model for a physical agent.

- **World Models (Ha & Schmidhuber)** — Ha, D. & Schmidhuber, J. "World Models." *arXiv* 1803.10122 (2018). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1803.10122) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldmodels.github.io/)  
  > Seminal work: learn a compressed (V) perception model + recurrent (M) world model, train a small controller (C) entirely inside imagination. Introduced MDN-RNN for stochastic world model.

- **A Path Towards Autonomous Machine Intelligence (LeCun)** — LeCun, Y. "A Path Towards Autonomous Machine Intelligence." *OpenReview* (2022). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://openreview.net/pdf?id=BZ5a1r-kVsf)  
  > Proposes a modular architecture centered on a **Joint Embedding Predictive Architecture (JEPA)** world model for energy-efficient reasoning without pixel-level generation.

- **Predictive Coding / Free Energy Principle** — Friston, K. "The free-energy principle: a unified brain theory?" *Nature Reviews Neuroscience* (2010). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/nrn2787)  
  > Neuro-scientific grounding: the brain as a hierarchical Bayesian inference machine minimizing prediction error.

- **Successor Representations** — Dayan, P. "Improving Generalization for Temporal Difference Learning: The Successor Representation." *Neural Computation* (1993).  
  > Foundational representation: encode the future occupancy of states rather than immediate reward.

- **Mental Simulation / Theory of Mind** — Battaglia, P. et al. "Simulation as an engine of physical scene understanding." *PNAS* (2013). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.pnas.org/doi/10.1073/pnas.1306572110)  
  > Humans use fast approximate physics simulators as a world model for intuitive physics.

### 0.2 Formative Computational World Model Papers

- **Recurrent World Models Facilitate Policy Evolution** — Ha, D. & Schmidhuber, J. *NeurIPS* 2018. [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://papers.nips.cc/paper_files/paper/2018/hash/2de5d16682c3c35007e4bbd7153108d1-Abstract.html) [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1809.01999)

- **Learning Latent Dynamics for Planning (PlaNet)** — Hafner, D. et al. *ICML* 2019. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1811.04551) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/google-research/planet)  
  > Introduced RSSM (Recurrent State-Space Model): separate deterministic and stochastic latent paths; latent-space cross-entropy planning.

- **Dream to Control (Dreamer)** — Hafner, D. et al. *ICLR* 2020. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01603) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/google-research/dreamer)  
  > Actor-critic entirely trained in latent-dream world; strong Atari & continuous control benchmark results.

- **Mastering Atari with Discrete World Models (DreamerV2)** — Hafner, D. et al. *ICLR* 2021. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2010.02193) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv2)  
  > Discrete latent variables via straight-through gradients; matches Rainbow DQN with no environment interaction during policy training.

- **Mastering Diverse Domains with World Models (DreamerV3)** — Hafner, D. et al. (2023). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv3)  
  > Single fixed hyperparameter set generalizing across continuous control, Atari, DMLab, Minecraft, ProcGen, and BSuite.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 1 · Generative World Models
<img src="image/generative_wm.png" alt="Generative World Model" width="100%">

> Generative world models explicitly synthesize sensory observations (pixels, point clouds, tokens) of plausible futures conditioned on actions or language. Their primary value is as **learned simulators** and **data augmenters**.

---

### 1.1 Game & Interactive World Simulation

> These models simulate game environments frame-by-frame conditioned on player actions, essentially replacing traditional game engines with neural networks.

#### 1.1.1 Pixel-Space Diffusion Models

- **GameNGen** — Valevski, D. et al. "Diffusion Models Are Real-Time Game Engines." *arXiv* 2408.14837 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.14837)  
  > First real-time neural game engine simulating DOOM at >20 FPS; diffusion model conditioned on action history.

- **DIAMOND** — Alonso, E. et al. "Diffusion for World Modeling: Visual Details Matter in Atari." *NeurIPS* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.12399) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/eloialonso/diamond)  
  > Diffusion-based world model trained on Atari achieving state-of-the-art imagination quality; highlights visual fidelity for downstream RL.

- **Matrix-Game** — "Matrix-Game: Interactive World Foundation Model." *arXiv* 2506.18701 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.18701) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SkyworkAI/Matrix-Game)  
  > Open-source interactive world foundation model for gaming; controllable action-conditioned video generation.

- **Matrix-Game 2.0** — "Matrix-Game 2.0: An Open-Source, Real-Time, and Streaming Interactive World Model." *arXiv* 2508.13009 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.13009) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://matrix-game-v2.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SkyworkAI/Matrix-Game/tree/main/Matrix-Game-2)  
  > Streaming real-time extension with improved consistency and interactivity.

- **A Frame is Worth One Token** — "A Frame is Worth One Token: Efficient Generative World Modeling with Delta Tokens." *arXiv* 2604.04913 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.04913) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://deltatok.github.io)  
  > Compresses frame-to-frame change into delta tokens, a practical direction for cheaper long-horizon rollout. CVPR 2026.

#### 1.1.2 Autoregressive Transformer Models

- **Genie** — "Genie: Generative Interactive Environments." *arXiv* 2402.15391 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.15391) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sites.google.com/view/genie-24/home)  
  > One of the most influential post-World-Models papers for open-ended interactive video environments.

- **Oasis** — "Oasis: A Universe in a Transformer." (2024). [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://oasis-model.github.io/)  
  > Transformer world model generating Minecraft interactively, token by token, without a game engine.

- **MineWorld** — "MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft." *arXiv* 2504.07257 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.07257) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://aka.ms/mineworld)  
  > Real-time interactive world model; open-sourced for the Minecraft environment.

- **Solaris** — "Solaris: Building a Multiplayer Video World Model in Minecraft." *arXiv* 2602.22208 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.22208) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://solaris-wm.github.io/)  
  > Pushes interactive world modeling from single-player rollouts toward shared multiplayer Minecraft dynamics.

- **GameFactory** — Wen, Y. et al. "GameFactory: Creating New Games with Generative Interactive Videos." *arXiv* 2501.08325 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.08325) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://yujiwen.github.io/gamefactory/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/KwaiVGI/GameFactory)  
  > Generates entirely new game experiences via generative interactive video. ICCV 2025 Highlight.

- **AnimeGamer** — "AnimeGamer: Infinite Anime Life Simulation with Next Game State Prediction." *arXiv* 2504.01014 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.01014) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://howe125.github.io/AnimeGamer.github.io/)

#### 1.1.3 Memory-Augmented & Long-Horizon Game Worlds

- **WorldMem** — "WorldMem: Long-term Consistent World Simulation with Memory." *arXiv* 2504.12369 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.12369) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://xizaoqu.github.io/worldmem/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/xizaoqu/WorldMem)  
  > Addresses long-term consistency through an explicit memory module; enables coherent multi-minute gameplay.

- **Matrix-Game 3.0** — "Matrix-Game 3.0: Real-Time and Streaming Interactive World Model with Long-Horizon Memory." *arXiv* 2604.08995 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.08995) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://matrix-game-v3.github.io/)  
  > Extends open interactive world models with real-time streaming and explicit long-horizon memory.

- **WorldCam** — "WorldCam: Interactive Autoregressive 3D Gaming Worlds with Camera Pose as a Unifying Geometric Representation." *arXiv* 2603.16871 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.16871) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://cvlab-kaist.github.io/WorldCam/)  
  > Brings 3D camera geometry into game-world autoregression for more stable interactive navigation.

- **LIVE** — "LIVE: Long-horizon Interactive Video World Modeling." *arXiv* 2602.03747 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.03747) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://junchao-cs.github.io/LIVE-demo/)  
  > Focuses directly on long-horizon interactive consistency, a core bottleneck for usable video world models.

- **RealPlay** — "From Virtual Games to Real-World Play." *arXiv* 2506.18901 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.18901) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wenqsun.github.io/RealPlay/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wenqsun/Real-Play)  
  > Bridges game-world training and real-world embodied play through shared world representations.

- **Waypoint-1** — "The Path to Real-Time Worlds and Why It Matters." *Over.world Blog* (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://over.world/blog/the-path-to-real-time-worlds-and-why-it-matters)  
  > First real-time diffusion world model optimized for consumer GPUs by Overworld.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 1.2 Autonomous Driving — Generative

> Generative driving world models synthesize future sensor observations (camera, LiDAR, radar) conditioned on ego trajectory, agent behaviors, weather, or language commands. They serve as learned simulators for data augmentation, safety evaluation, and closed-loop training.

#### 1.2.1 Multi-View Video Generation (Camera-Based)

- **GAIA-1** — Hu, A. et al. "Introducing GAIA-1: A Cutting-Edge Generative AI Model for Autonomy." *Wayve* (2023). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.17080) [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://wayve.ai/thinking/introducing-gaia1/)  
  > First large-scale autoregressive video world model for driving, conditioned on video, text, and actions; generates realistic multi-camera sequences.

- **GAIA-2** — "GAIA-2: A Controllable Multi-View Generative World Model for Autonomous Driving." *arXiv* 2503.20523 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.20523) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wayve.ai/thinking/gaia-2)  
  > Multi-view extension with fine-grained controllability over agent behaviors and scene attributes.

- **Drive-WM** — "Driving into the Future: Multiview Visual Forecasting and Planning with World Model for Autonomous Driving." *CVPR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.17918) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/BraveGroup/Drive-WM)  
  > One of the early representative driving world models that tightly couples future visual forecasting and planning.

- **DriveDreamer** — "DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving." *ECCV* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.09777) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/JeffWang987/DriveDreamer)

- **MagicDrive** — "MagicDrive: Street View Generation with Diverse 3D Geometry Control." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.02601) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/cure-lab/MagicDrive)  
  > A widely cited controllable street-scene generation baseline that sits close to practical driving world modeling.

- **DriveDreamer-2** — "DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation." *arXiv* 2403.06845 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.06845) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://drivedreamer2.github.io/)

- **Vista** — "Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability." *NeurIPS* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.17398) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/OpenDriveLab/Vista)  
  > A strong 2024 driving baseline with a good balance of fidelity, control, and downstream usefulness.

- **DriveDreamer4D** — "World Models Are Effective Data Machines for 4D Driving Scene Generation." *arXiv* 2410.13571 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.13571)

- **MiLA** — "MiLA: Multi-view Intensive-fidelity Long-term Video Generation World Model for Autonomous Driving." *arXiv* 2503.15875 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.15875) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://github.com/xiaomi-mlab/mila.github.io)

- **Cosmos-Drive-Dreams** — "Cosmos-Drive-Dreams: Scalable Synthetic Driving Data Generation with World Foundation Models." *arXiv* 2506.09042 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09042) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/toronto-ai/cosmos_drive_dreams)  
  > NVIDIA's Cosmos-based large-scale synthetic data pipeline for autonomous driving.

- **PosePilot** — "PosePilot: Steering Camera Pose for Generative World Models with Self-supervised Depth." *arXiv* 2505.01729 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.01729)

- **GEM** — "GEM: A Generalizable Ego-Vision Multimodal World Model for Fine-Grained Ego-Motion, Object Dynamics, and Scene Composition Control." *arXiv* 2412.11198 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.11198) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://vita-epfl.github.io/GEM.github.io/)

- **MAD** — "MAD: Motion Appearance Decoupling for efficient Driving World Models." *arXiv* 2601.09452 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.09452) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://vita-epfl.github.io/MAD-World-Model/)  
  > Separates motion learning from appearance rendering, a useful efficiency recipe for controllable driving rollouts.

- **ReconDreamer** — "ReconDreamer: Crafting World Models for Driving Scene Reconstruction via Online Restoration." *arXiv* 2411.19548 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.19548) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://recondreamer.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/GigaAI-research/ReconDreamer)

- **InfinityDrive** — "InfinityDrive: Breaking Time Limits in Driving World Models." *arXiv* 2412.01522 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.01522) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://metadrivescape.github.io/papers_project/InfinityDrive/page.html)

- **LongDWM** — "LongDWM: Cross-Granularity Distillation for Building a Long-Term Driving World Model." *arXiv* 2506.01546 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01546) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wang-xiaodong1899.github.io/longdwm/)

- **Out of Sight but Not Out of Mind** — "Out of Sight but Not Out of Mind: Hybrid Memory for Dynamic Video World Models." *arXiv* 2603.25716 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.25716) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/H-EmbodVis/HyDRA)  
  > A recent memory-centric update for preserving off-screen dynamics in long driving rollouts.

- **Dreamland** — "Dreamland: Controllable World Creation with Simulator and Generative Models." *arXiv* 2506.08006 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.08006) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://metadriverse.github.io/dreamland/)

- **SimWorld** — "SimWorld: A Unified Benchmark for Simulator-Conditioned Scene Generation via World Model." *arXiv* 2503.13952 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.13952) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Li-Zn-H/SimWorld)

- **UniFuture** — "Seeing the Future, Perceiving the Future: A Unified Driving World Model for Future Generation and Perception." *ICRA* 2026. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.13587) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/dk-liang/UniFuture)

- **UniDriveDreamer** — "UniDriveDreamer: A Single-Stage Multimodal World Model for Autonomous Driving." *arXiv* 2602.02002 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02002)  
  > Unifies multi-camera video and LiDAR generation in a single-stage multimodal driving world model.

- **STAGE** — "STAGE: A Stream-Centric Generative World Model for Long-Horizon Driving-Scene Simulation." *arXiv* 2506.13138 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13138)

- **ReSim** — "ReSim: Reliable World Simulation for Autonomous Driving." *arXiv* 2506.09981 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09981) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/OpenDriveLab/ReSim) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://opendrivelab.com/ReSim)

- **DriVerse** — "DriVerse: Navigation World Model for Driving Simulation via Multimodal Trajectory Prompting and Motion Alignment." *arXiv* 2504.18576 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.18576) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/shalfun/DriVerse)

- **Epona** — "Epona: Autoregressive Diffusion World Model for Autonomous Driving." *arXiv* 2506.24113 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.24113) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://kevin-thu.github.io/Epona/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Kevin-thu/Epona/)

- **MaskGWM** — "MaskGWM: A Generalizable Driving World Model with Video Mask Reconstruction." *arXiv* 2502.11663 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.11663) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SenseTime-FVG/OpenDWM)

- **ResWorld** — "ResWorld: Temporal Residual World Model for End-to-End Autonomous Driving." *arXiv* 2602.10884 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10884) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/mengtan00/ResWorld)  
  > Introduces residual temporal modeling for end-to-end driving, targeting better long-range rollout stability.

#### 1.2.2 Occupancy & BEV-Based Generative Models

- **OccWorld** — "OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving." *ECCV* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.16038) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wzzheng/OccWorld)  
  > Autoregressive generation of 3D occupancy grids as a spatiotemporal world model.

- **Drive-OccWorld** — "Driving in the Occupancy World: Vision-Centric 4D Occupancy Forecasting and Planning via World Models for Autonomous Driving." *arXiv* 2408.14197 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.14197)  
  > A useful bridge between occupancy simulation and planning-oriented driving world models.

- **GaussianWorld** — "GaussianWorld: Gaussian World Model for Streaming 3D Occupancy Prediction." *arXiv* 2412.04380 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.04380) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/zuosc19/GaussianWorld)  
  > 3D Gaussian representation for streaming occupancy prediction; spatially structured world model.

- **DynamicCity** — "DynamicCity: Large-Scale 4D Occupancy Generation from Dynamic Scenes." *arXiv* 2410.18084 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.18084) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://dynamic-city.github.io) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/3DTopia/DynamicCity)

- **SparseWorld** — "SparseWorld: A Flexible, Adaptive, and Efficient 4D Occupancy World Model Powered by Sparse and Dynamic Queries." *AAAI* 2026. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.17482) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/MSunDYY/SparseWorld)

- **COME** — "COME: Adding Scene-Centric Forecasting Control to Occupancy World Model." *arXiv* 2506.13260 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13260) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/synsin0/COME)

- **DOME** — "DOME: Taming Diffusion Model into High-Fidelity Controllable Occupancy World Model." *arXiv* 2410.10429 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.10429) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://gusongen.github.io/DOME)  
  > Important occupancy-side diffusion baseline with controllability emphasis.

- **DLWM** — "DLWM: Dual Latent World Models enable Holistic Gaussian-centric Pre-training in Autonomous Driving." *CVPR* 2026. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.00969)  
  > A recent Gaussian-centric update that splits latent dynamics for perception and planning rather than forcing one shared rollout space.

- **EOT-WM** — "Other Vehicle Trajectories Are Also Needed: A Driving World Model Unifies Ego-Other Vehicle Trajectories in Video Latent Space." *AAAI* 2026. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.09215) [![Paper](https://img.shields.io/badge/Paper-AAAI-4C566A?logo=readthedocs&logoColor=white)](https://ojs.aaai.org/index.php/AAAI/article/view/36941)

- **Semi-Supervised Occupancy WM** — "Semi-Supervised Vision-Centric 3D Occupancy World Model for Autonomous Driving." *arXiv* 2502.07309 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.07309) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/getterupper/PreWorld)

- **Temporal Triplane Transformers** — "Temporal Triplane Transformers as Occupancy World Models." *arXiv* 2503.07338 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.07338)

- **NRSeg** — "NRSeg: Noise-Resilient Learning for BEV Semantic Segmentation via Driving World Models." *arXiv* 2507.04002 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.04002) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/lynn-yu/NRSeg)

#### 1.2.3 LiDAR & 4D Point Cloud Generative Models

- **Copilot4D** — "Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.01017)  
  > Discrete diffusion for LiDAR point cloud prediction; unsupervised 4D world model.

- **AD-L-JEPA** — "AD-L-JEPA: Self-Supervised Spatial World Models with Joint Embedding Predictive Architecture for Autonomous Driving with LiDAR Data." *arXiv* 2501.04969 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.04969) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/HaoranZhuExplorer/AD-L-JEPA-Release)  
  > JEPA-style self-supervised LiDAR world model; predicts future abstract representations (not pixels).

- **LiDARCrafter** — "LiDARCrafter: Dynamic 4D World Modeling from LiDAR Sequences." *arXiv* 2508.03692 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.03692) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://lidarcrafter.github.io) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/lidarcrafter/toolkit)

- **FASTopoWM** — "FASTopoWM: Fast-Slow Lane Segment Topology Reasoning with Latent World Models." *arXiv* 2507.23325 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.23325) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/YimingYang23/FASTopoWM)

- **Towards Foundational LiDAR World Models** — "Towards foundational LiDAR world models with efficient latent flow matching." *arXiv* 2506.23434 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.23434)

#### 1.2.4 Language-Guided & Multimodal Driving World Models

- **DrivingGPT** — "DrivingGPT: Unifying Driving World Modeling and Planning with Multi-modal Autoregressive Transformers." *arXiv* 2412.18607 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.18607) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://rogerchern.github.io/DrivingGPT/)

- **DrivingWorld** — "DrivingWorld: Constructing World Model for Autonomous Driving via Video GPT." *arXiv* 2412.19505 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.19505) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/YvanYin/DrivingWorld) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://huxiaotaostasy.github.io/DrivingWorld/index.html)

- **OccLLaMA** — "OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving." *arXiv* 2409.03272 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.03272)  
  > One of the clearest attempts to unify occupancy, language, and action in a single autoregressive driving world model.

- **HERMES** — "HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation." *ICCV* 2025. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.14729) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/LMD0311/HERMES)

- **UniMLVG** — "UniMLVG: Unified Framework for Multi-view Long Video Generation with Comprehensive Control Capabilities for Autonomous Driving." *arXiv* 2412.04842 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.04842) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SenseTime-FVG/OpenDWM) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sensetime-fvg.github.io/UniMLVG/)  
  > Adds stronger multi-view long-video control, which is especially useful for scalable driving simulation.

- **UniDrive-WM** — "UniDrive-WM: Unified Understanding, Planning and Generation World Model for Autonomous Driving." *arXiv* 2601.04453 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04453) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://unidrive-wm.github.io/UniDrive-WM)  
  > Recent unified driving world model spanning understanding, generation, and planning.

- **ExploreVLA** — "ExploreVLA: Dense World Modeling and Exploration for End-to-End Autonomous Driving." *arXiv* 2604.02714 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.02714)  
  > Pushes world modeling closer to exploration-aware end-to-end driving rather than passive future synthesis only.

- **LMGenDrive** — "LMGenDrive: Bridging Multimodal Understanding and Generative World Modeling for End-to-End Driving." *arXiv* 2604.08719 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.08719)  
  > Combines LLM-style multimodal understanding with a generative driving world model in one closed-loop stack.

- **Learning Vision-Language-Action World Models for Autonomous Driving** — *arXiv* 2604.09059 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.09059)  
  > A recent VLA-flavored formulation that explicitly frames driving as joint perception, action, and imagination.

- **OmniNWM** — "OmniNWM: Omniscient Driving Navigation World Models." *arXiv* 2510.18313 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.18313) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://arlo0o.github.io/OmniNWM/)

- **FutureSightDrive** — "FutureSightDrive: Thinking Visually with Spatio-Temporal CoT for Autonomous Driving." *arXiv* 2505.17685 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.17685) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/MIV-XJTU/FSDrive)

- **SceneDiffuser++** — "SceneDiffuser++: City-Scale Traffic Simulation via a Generative World Model." *arXiv* 2506.21976 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.21976)

- **Orbis** — "Orbis: Overcoming Challenges of Long-Horizon Prediction in Driving World Models." *arXiv* 2507.13162 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.13162) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://lmb-freiburg.github.io/orbis.github.io/)

- **GeoDrive** — "GeoDrive: 3D Geometry-Informed Driving World Model with Precise Action Control." *arXiv* 2505.22421 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.22421) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/antonioo-c/GeoDrive)

- **X-World** — "X-World: Controllable Ego-Centric Multi-Camera World Models for Scalable End-to-End Driving." *arXiv* 2603.19979 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.19979)  
  > Recent large-scale multi-camera driving world model with strong controllability emphasis.

- **InfiniCube** — "InfiniCube: Unbounded and Controllable Dynamic 3D Driving Scene Generation with World-Guided Video Models." *arXiv* 2412.03934 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.03934) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/toronto-ai/infinicube/)

- **Imagine-2-Drive** — "Imagine-2-Drive: High-Fidelity World Modeling in CARLA for Autonomous Vehicles." *arXiv* 2411.10171 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.10171) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://anantagrg.github.io/Imagine-2-Drive.github.io/)

- **Physical Informed Driving WM** — "Physical Informed Driving World Model." *arXiv* 2412.08410 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.08410) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://metadrivescape.github.io/papers_project/DrivePhysica/page.html)

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 1.3 Embodied AI & Robotics — Generative

> Generative world models in embodied AI simulate the visual or physical consequences of robot actions, enabling policy training in imagination and data-efficient learning.

#### 1.3.1 Robotic Manipulation

- **UniSim** — Yang, S. et al. "Learning Interactive Real-World Simulators." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.06114) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://universal-simulator.github.io/)  
  > Universal neural simulator of real-world physics; trained on diverse action-conditioned data to generalize across robot morphologies.

- **IRASim** — "IRASim: Learning Interactive Real-Robot Action Simulators." *arXiv* 2406.14540 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.14540) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/bytedance/IRASim)

- **GROOT** — "GROOT: Learning to Follow Instructions by Watching Gameplay Videos." *arXiv* 2310.08235 (2023). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08235)

- **RoboDreamer** — "RoboDreamer: Learning Compositional World Models for Robot Imagination." *arXiv* 2404.12377 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.12377) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/rainbow979/robodreamer)

- **DreamDojo** — "DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos." *arXiv* 2602.06949 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.06949) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://dreamdojo-world.github.io/)  
  > A recent large-scale robot world model that explicitly targets generalist transfer from human videos.

- **DexWorldModel** — "DexWorldModel: Causal Latent World Modeling towards Automated Learning of Embodied Tasks." *arXiv* 2604.16484 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.16484)  
  > Targets dexterous embodied learning with a more explicitly causal latent dynamics design.

- **STARRY** — "STARRY: Spatial-Temporal Action-Centric World Modeling for Robotic Manipulation." *arXiv* 2604.26848 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.26848)  
  > World-model-enhanced action-generation for embodied manipulation; jointly models future spatial-temporal dynamics and action sequences. 93.8% avg success on RoboTwin 2.0.

- **MoWM** — "MoWM: Mixture-of-World-Models for Embodied Planning via Latent-to-Pixel Feature Modulation." *arXiv* 2602.09679 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.09679)  
  > Fuses representations from hybrid world models for embodied action planning.

- **GigaWorld** — "GigaWorld: A Generalist World Model for Robot Manipulation." *arXiv* 2412.08385 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.08385) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://gigaworld.github.io/)  
  > Large-scale generalist world model for diverse robot manipulation tasks.

- **IRL-VLA** — "IRL-VLA: Training a Vision-Language-Action Policy via Reward World Model." *arXiv* 2508.06571 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.06571)

- **Mask World Model** — "Mask World Model: Predicting What Matters for Robust Robot Policy Learning." *arXiv* 2604.19683 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19683)  
  > Focuses robot world modeling on task-relevant prediction targets rather than pixel-complete reconstruction.

- **Hi-WM** — "Hi-WM: Human-in-the-World-Model for Scalable Robot Post-Training." *arXiv* 2604.21741 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.21741)  
  > Connects human feedback and world-model rollouts for scalable robot post-training.

- **Cortex 2.0** — "Cortex 2.0: Grounding World Models in Real-World Industrial Deployment." *arXiv* 2604.20246 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.20246)  
  > World-model-based planning for industrial robotic manipulation; plan-and-act visual latent space rollouts.

- **WorldScape** — "WorldScape: A Unified Real-time World Model Integrating Locomotion and Manipulation." *Manifold AI Blog* (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://manifoldai.cn/blogs/WorldScape.html)

#### 1.3.2 Navigation & Scene Understanding

- **NWM (Navigation World Model)** — "Navigation World Models." *CVPR* 2025. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.12845) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.amirbar.net/nwm/)  
  > Predicts future egocentric observations conditioned on proposed waypoints; supports planning in novel environments without task-specific fine-tuning.

- **3D-Anchored Lookahead Planning** — "3D-Anchored Lookahead Planning for Persistent Robotic Scene Memory via World-Model-Based MCTS." *arXiv* 2604.11302 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.11302)  
  > Couples persistent 3D scene memory with lookahead planning, useful for long-horizon robotic exploration.

- **SuSIE** — "Zero-Shot Robot Task Planning using Large Language Model and Latent Diffusion Models." *arXiv* 2311.18588 (2023). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.18588)

#### 1.3.3 Locomotion & Full-Body Control

- **DreamerV3 for Minecraft** — Hafner, D. et al. "Mastering Diverse Domains with World Models." (2023). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv3)  
  > First model to achieve diamond collection in Minecraft from scratch using a world model.

- **TD-MPC2** — "TD-MPC2: Scalable, Robust World Models for Continuous Control." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc2)  
  > Temporal Difference Learning with Model Predictive Control; scales across 104 continuous control tasks.

- **Quadrupedal World Model (QWM)** — "Toward Hardware-Agnostic Quadrupedal World Models via Morphology Conditioning." *arXiv* 2604.08780 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.08780)  
  > First world model enabling zero-shot generalization to unseen quadruped morphologies for locomotion.

#### 1.3.4 World-Model-Based Vision-Language-Action (VLA) Models

- **UniSim (Action)** — (see §1.3.1)

- **RealDreamer** — "RealDreamer: Real-World Robotic Manipulation Using Imagination." *arXiv* 2406.12063 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.12063)

- **Do World Action Models Generalize Better than VLAs?** — "Do World Action Models Generalize Better than VLAs? A Robustness Study." *arXiv* 2603.22078 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.22078)  
  > Empirical comparison of world-model-based action policies vs. direct VLA policies under distribution shift.

- **DriveVLA-W0** — "DriveVLA-W0: World Models Amplify Data Scaling Law in Autonomous Driving." *arXiv* 2510.12796 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.12796) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/BraveGroup/DriveVLA-W0)

- **DIAL** — "DIAL: Decoupling Intent and Action via Latent World Modeling for End-to-End VLA." *arXiv* 2604.28324 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28324)  
  > VLM-based System-2 performs latent world modeling by synthesizing visual foresight in the VLM vision encoder's feature space.

- **UniT** — "UniT: Toward a Unified Physical Language for Human-to-Humanoid Policy Learning and World Modeling." *arXiv* 2604.23276 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.23276)  
  > Aligns cross-embodiment dynamics via unified tokens; enables direct human-to-humanoid action transfer.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 1.4 3D / 4D Scene Generation

> Models that generate three-dimensional or four-dimensional (spatial + temporal) world representations, typically as explorable environments.

#### 1.4.1 Neural Radiance Fields & Gaussian-Based

- **EmerNeRF** — "EmerNeRF: Emergent Spatial-Temporal Scene Decomposition via Self-Supervision." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.02077) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVlabs/EmerNeRF)

- **GaussianWorld** — (also in §1.2.2) 3D Gaussian Splatting as a streaming occupancy world model.

- **HunyuanWorld 1.0** — "HunyuanWorld 1.0: Generating Immersive, Explorable, and Interactive 3D Worlds from Words or Pixels." *arXiv* 2507.21809 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.21809) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://3d-models.hunyuan.tencent.com/world/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0)  
  > Text/image-to-3D immersive world generation with mesh-based explorable environments.

- **HY-World 2.0** — "HY-World 2.0: A Multi-Modal World Model for Reconstructing, Generating, and Simulating 3D Worlds." *arXiv* 2604.14268 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.14268) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://3d-models.hunyuan.tencent.com/world/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Tencent-Hunyuan/HY-World-2.0)  
  > A strong 2026 update spanning reconstruction, generation, and simulation in one 3D world stack.

- **GeoWorld** — "GeoWorld: Geometric World Models." *CVPR* 2026. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23058) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://steve-zeyu-zhang.github.io/GeoWorld)  
  > Geometry-first world modeling that sharpens the spatial side of general world-model research.

- **Matrix-3D** — "Matrix-3D: Omnidirectional Explorable 3D World Generation." *arXiv* 2508.08086 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.08086) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://matrix-3d.github.io)  
  > 360° navigable 3D world generation from a single image or text prompt.

#### 1.4.2 Video-to-3D / 4D World Models

- **4D-Scene** — "4D Gaussian Splatting for Real-Time Dynamic Scene Rendering." *CVPR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08528) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/hustvl/4DGaussians)

- **DynamicCity** — (see §1.2.2) 4D occupancy generation from dynamic scenes.

- **VerseCrafter** — "VerseCrafter: Dynamic Realistic Video World Model with 4D Geometric Control." *arXiv* 2601.05138 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.05138) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sixiaozheng.github.io/VerseCrafter_page/)  
  > Adds explicit 4D geometric control to realistic video world modeling.

- **Olaf-World** — "Olaf-World: Orienting Latent Actions for Video World Modeling." *arXiv* 2602.10104 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10104) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://showlab.github.io/Olaf-World/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/showlab/Olaf-World)  
  > A useful recent step toward controllable latent-action video world models.

- **InfiniCube** — (see §1.2.4) Unbounded controllable dynamic 3D scene generation.

- **World-in-World** — "World-in-World: World Models in a Closed-Loop World." *CVPR* 2026.  
  > Explores nested world model paradigms for closed-loop simulation.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 1.5 Scientific & Physical World Modeling

> World models that simulate physical, biological, or earth-science processes rather than human-scale scenes.

#### 1.5.1 Intuitive & Learned Physics

- **DPI-Net** — Li, Y. et al. "Learning Particle Dynamics for Manipulating Rigid Bodies, Deformable Objects, and Fluids." *ICLR* 2019. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1810.01566)  
  > Graph neural network world model for particle-based physics simulation.

- **FIGNet** — "Learning rigid body physics from videos." (DeepMind, 2023). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.14219)

- **Physics Cognition in Video Generation** — "Exploring the Evolution of Physics Cognition in Video Generation: A Survey." *arXiv* 2503.21765 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.21765) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation)

#### 1.5.2 Climate & Earth System World Models

- **Pangu-Weather** — Bi, K. et al. "Accurate medium-range global weather forecasting with 3D neural networks." *Nature* (2023). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/s41586-023-06185-3)  
  > 3D Earth Transformer for medium-range weather forecasting; faster and more accurate than traditional NWP.

- **GraphCast** — Lam, R. et al. "Learning skillful medium-range global weather forecasting." *Science* (2023). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.science.org/doi/10.1126/science.adi2336)

#### 1.5.3 Molecular & Biological World Models

- **AlphaFold 3** — Abramson, J. et al. "Accurate structure prediction of biomolecular interactions with AlphaFold 3." *Nature* (2024). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/s41586-024-07487-w)  
  > Generative diffusion-based world model of molecular interactions and protein structures.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 2 · Representational World Models

> Representational world models learn **structured internal state representations** of the environment without necessarily generating pixel-faithful observations. The emphasis is on encoding abstract, task-relevant features sufficient for planning and prediction.

---

### 2.1 Latent Dynamics Models (RSSM / Dreamer Family)

> Separate the world into deterministic and stochastic latent components; predict future latent states without decoding to pixels.

| Model | Venue | Key Contribution | Links |
|-------|-------|-----------------|-------|
| **PlaNet** | ICML 2019 | First RSSM; cross-entropy method planning in latent space | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1811.04551) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/google-research/planet) |
| **Dreamer** | ICLR 2020 | Latent actor-critic; learn policy entirely in imagination | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01603) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamer) |
| **DreamerV2** | ICLR 2021 | Discrete latents via categorical distributions | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2010.02193) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv2) |
| **DreamerV3** | Nature 2025 | Single hyperparameter set; generalizes across 7 domains | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv3) |
| **RSSM+** | NeurIPS 2022 | Improved stochastic latent transitions | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2209.14326) |
| **TD-MPC** | ICML 2022 | Temporal-difference learning + MPC in latent space | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2203.04955) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc) |
| **TD-MPC2** | ICLR 2024 | Scales to 104 tasks; shared latent space | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc2) |
| **TWM** | ICLR 2023 | Transformer-based world model replacing RNN | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.03044) |
| **IRIS** | ICLR 2023 | Tokenize frames with discrete autoencoders; GPT-based dynamics | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2209.00588) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/eloialonso/iris) |
| **STORM** | NeurIPS 2023 | Efficient transformer-based latent dynamics | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.09615) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/weipu-zhang/STORM) |
| **DreamZero** | 2026 | World Action Model (WAM); unifies world model + policy into single generative model for zero-shot control | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://dreamzero0.github.io/) |
| **MoW** | ICLR 2026 | Mixture-of-World Models for multi-task visual world model benchmarks | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.15293) |
| **OC-STORM** | ICLR 2026 | Object-centric efficient transformer-based latent dynamics | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.17912) |

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 2.2 Joint Embedding Predictive Architectures (JEPA)

> Instead of generating observations, JEPA models predict abstract *representations* of future states. Inspired by LeCun's energy-based formulation.

- **I-JEPA** — Assran, M. et al. "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture." *CVPR* 2023. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.08243) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/ijepa)  
  > Predicts context representations of masked image patches; strong linear-probe performance without pixel decoding.

- **V-JEPA** — Bardes, A. et al. "V-JEPA: Latent Video Prediction for Visual Representation and World Modeling." *ICLR* 2024 (Spotlight). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.08471) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/jepa)  
  > Extends JEPA to video; predicts abstract future representations of masked video volumes.

- **V-JEPA 2** — Meta AI, 2025. [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://ai.meta.com/blog/v-jepa-2/)  
  > Next-generation V-JEPA with state-of-the-art physical reasoning capabilities; claims to understand physical rules like gravity.

- **MC-JEPA** — "MC-JEPA: A Joint-Embedding Predictive Architecture for Self-Supervised Learning of Motion and Content Features." *arXiv* 2307.12698 (2023). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.12698)

- **A-JEPA** — "Audio-Visual Jointly Embedding Predictive Architecture." *arXiv* 2311.05090 (2023). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.05090)

- **AD-L-JEPA** — (see §1.2.3) JEPA for LiDAR self-supervised learning in autonomous driving.

- **Hierarchical JEPA** — "Hierarchical World Models as Visual Whole-Body Humanoid Controllers." *arXiv* 2405.18418 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.18418)  
  > Multi-level JEPA world models controlling full humanoid body; imagination-based whole-body planning.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 2.3 Occupancy & BEV Representations

> Structured 3D world representations encoding semantic and geometric information for autonomous agents.

- **BEVWorld** — "BEVWorld: A Multimodal World Model for Autonomous Driving via Unified BEV Latent Space." *arXiv* 2407.05679 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.05679) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/zympsyche/BevWorld)

- **OccSora** — "OccSora: 4D Occupancy Generation Models as World Simulators for Autonomous Driving." *arXiv* 2405.20337 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.20337) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wzzheng/OccSora)

- **OccWorld** — (see §1.2.2) GPT-style autoregressive occupancy generation.

- **Think2Drive** — "Think2Drive: Efficient Reinforcement Learning by Thinking in Latent World Model for Quasi-Realistic Autonomous Driving." *arXiv* 2402.16720 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.16720)

- **HoloDrive** — "HoloDrive: Holistic 2D-3D Multi-Modal Street Scene Generation for Autonomous Driving." *arXiv* 2411.18963 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.18963)

- **Enhancing Physical Consistency** — "Enhancing Physical Consistency in Lightweight World Models." *arXiv* 2509.12437 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.12437)  
  > Proposes Physics-Informed BEV World Model (PIWM) for efficient physical interaction modeling.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 2.4 Multimodal & Acoustic Sensory World Models

> World models extending beyond vision to include audio, touch, proprioception, or multimodal fusion.

- **A Survey on World Models Grounded in Acoustic Physical Information** — *arXiv* 2506.13833 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13833)

- **On Memory: A Comparison of Memory Mechanisms in World Models** — *arXiv* 2512.06983 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.06983)

- **DreamerPro** — "DreamerPro: Reconstruction-Free Model-Based Reinforcement Learning with Prototypical Representations." *ICML* 2022. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2110.14565)  
  > Augments Dreamer with prototypical self-supervised objectives; improves representation quality for sparse-reward tasks.

- **Iso-Dream** — "Iso-Dream: Isolating and Leveraging Noncontrollable Visual Dynamics in World Models." *NeurIPS* 2022. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2205.13817)  
  > Disentangles controllable (agent) from non-controllable (background) world dynamics.

- **COMET** — "Better Decisions through the Right Causal World Model." *arXiv* 2504.07257 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.07257)  
  > Causal Object-centric Model Extraction Tool; learns interpretable causal world models with object-centric states and symbolic regression.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 2.5 Symbolic & Knowledge-Graph World Models

> Hybrid approaches combining neural perception with symbolic or graph-structured world representations.

- **Knowledge Graphs as World Models for Autonomous Vehicles** — "Knowledge Graphs as World Models for Semantic Material-Aware Obstacle Handling in Autonomous Vehicles." *arXiv* 2503.21232 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.21232)  
  > Symbolic semantic knowledge graphs providing structured scene understanding for autonomous driving.

- **Grounding Language in World Models** — Andreas, J. et al. "Grounding Language in World Models." *ACL* 2022. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2109.01800)

- **LEAP** — "Language-Enhanced Algorithmic Reasoning for Embodied Agents." *arXiv* (2024).  
  > Symbolic world model grounded in language for abstract planning.

- **Graph World Model (GWM)** — "Graph World Model: A World Model Supporting Unstructured and Graph-Structured States." *ICML* 2025. [![Paper](https://img.shields.io/badge/Paper-ICML-4C566A?logo=readthedocs&logoColor=white)](https://icml.cc/virtual/2025/poster/39221)  
  > Supports both unstructured and graph-structured states with multi-modal information for generation and planning.

- **Web World Model (WWM)** — "Web World Models." *arXiv* 2512.23902 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.23902)  
  > World state and physics implemented in ordinary web code for logical consistency; LLMs generate context on top.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 3 · Agentic World Models

> Agentic world models combine a world foundation model (generative or representational) with an agentic decision-making framework. They enable an AI system to **act**, **plan**, and **reason** using its internal world model—essentially the realization of LeCun's autonomous machine intelligence architecture.

---

### 3.1 Model-Based Reinforcement Learning (MBRL)

> The agent uses an explicit world model to simulate trajectories and update policy without exhaustive environment interaction.

| Model | Venue | Architecture | Domain | Links |
|-------|-------|-------------|--------|-------|
| **MBPO** | NeurIPS 2019 | Ensemble of MLPs; Dyna-style rollouts | Continuous control | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1906.08253) |
| **PETS** | NeurIPS 2018 | Probabilistic ensemble + CEM | Control | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1805.12114) |
| **Dreamer** | ICLR 2020 | RSSM + actor-critic in imagination | Atari/Control | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01603) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamer) |
| **DreamerV3** | Nature 2025 | Discrete RSSM; universal | Multi-domain | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv3) |
| **EfficientZero** | NeurIPS 2021 | MuZero + self-supervised consistency | Atari | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2111.00210) |
| **MuZero** | Nature 2020 | MCTS with learned value & dynamics | Board/Atari | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/s41586-020-03051-4) |
| **TD-MPC2** | ICLR 2024 | Latent MPC, 104 tasks | Continuous | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc2) |
| **DIAMOND** | NeurIPS 2024 | Diffusion WM + RL | Atari | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.12399) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/eloialonso/diamond) |
| **Think2Drive** | 2024 | BEV latent MBRL | Driving | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.16720) |
| **InDRiVE** | 2025 | Curiosity-driven generalized WM | Driving | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.05573) |
| **DreamerAD** | 2026 | Latent world model for autonomous driving RL | Driving | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.24267) |
| **DALI** | 2026 | Dynamics-Aligned Latent Imagination for zero-shot generalization | Continuous control | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://api.scienceopen.com/content/doi/10.48550/arXiv.2601.05833) |
| **FOUNDER** | ICML 2025 | Foundation models + world models for embodied decisions | Embodied | [![Paper](https://img.shields.io/badge/Paper-ICML-4C566A?logo=readthedocs&logoColor=white)](https://openreview.net/forum?id=UTT5OTyIWm) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sites.google.com/view/founder-rl) |

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 3.2 World-Model-Guided Planning

> Use the world model for explicit look-ahead planning (MPC, MCTS, latent rollouts) rather than amortized policy learning.

- **PWM (Policy World Model)** — "From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction." *arXiv* 2510.19654 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.19654) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/6550Zhao/Policy-World-Model)  

- **AdaWM** — "AdaWM: Adaptive World Model based Planning for Autonomous Driving." *arXiv* 2501.13072 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.13072)  

- **Dream to Drive** — "Dream to Drive: Model-Based Vehicle Control Using Analytic World Models." *arXiv* 2502.10012 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.10012)

- **Dream to Drive with Predictive Individual World Model** — *arXiv* 2501.16733 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.16733) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/gaoyinfeng/PIWM)

- **Hierarchical Planning with Latent World Models (HWM)** — *arXiv* 2604.03208 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.03208)  
  > Multi-timescale latent planning for long-horizon embodied control without exploding search cost. NYU & Meta FAIR.

- **ProDrive** — "ProDrive: Proactive Planning for Autonomous Driving via Ego-Environment Co-Evolution." *arXiv* 2604.25329 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.25329)  
  > World-model-based proactive planning with ego-environment co-evolution; query-centric trajectory planner + BEV world model.

- **World4Drive** — "World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model." *arXiv* 2507.00603 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.00603) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/ucaszyp/World4Drive)

- **End-to-End Driving with Online Trajectory Evaluation via BEV World Model** — *arXiv* 2504.01941 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.01941) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/liyingyanUCAS/WoTE)

- **Raw2Drive** — "Raw2Drive: Reinforcement Learning with Aligned World Models for End-to-End Autonomous Driving." *arXiv* 2505.16394 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.16394)

- **Doe-1** — "Doe-1: Closed-Loop Autonomous Driving with Large World Model." *arXiv* 2412.09627 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.09627) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wzzheng.net/Doe/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wzzheng/Doe)

- **Grounded World Model for Semantically Generalizable Planning** — *arXiv* 2604.11751 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.11751)  

- **Dream4Drive** — "Rethinking Driving World Model as Synthetic Data Generator for Perception Tasks." *arXiv* 2510.19195 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.19195) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wm-research.github.io/Dream4Drive/)

- **Gradient-Based Planning for World Models at Longer Horizons** — Robohub Blog (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://robohub.org/gradient-based-planning-for-world-models-at-longer-horizons/)  
  > Robust gradient-based planning with modern world models for long horizons; addresses fragility issues.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 3.3 Closed-Loop Simulation & Evaluation

> The world model serves as a simulator within a closed loop for realistic evaluation of autonomous agents.

- **WorldGym** — "WorldGym: World Model as An Environment for Policy Evaluation." *arXiv* 2506.00613 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.00613) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-model-eval.github.io/)  

- **Imagine-2-Drive** — (see §1.2.4) High-fidelity CARLA world model for closed-loop evaluation.

- **ReSim** — (see §1.2.1) Reliable world simulation for closed-loop autonomous driving.

- **WorldMark** — "WorldMark: A Unified Benchmark Suite for Interactive Video World Models." *arXiv* 2604.21686 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.21686)  

- **RoboWM-Bench** — "RoboWM-Bench: A Benchmark for Evaluating World Models in Robotic Manipulation." *arXiv* 2604.19092 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19092)  

- **dWorldEval** — "dWorldEval: Scalable Robotic Policy Evaluation via Discrete Diffusion World Model." *arXiv* 2604.22152 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.22152)  

- **Ego-Centric Learning of Communicative World Models** — "Ego-centric Learning of Communicative World Models for Autonomous Driving." *arXiv* 2506.08149 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.08149)

- **World Model-Based End-to-End Scene Generation for Accident Anticipation** — *arXiv* 2507.12762 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.12762)

- **SimWorld** — (see §1.2.4) Unified benchmark for simulator-conditioned scene generation.

- **DriveVLA-W0** — (see §1.3.4) World model amplifying data scaling for autonomous driving.

- **WoW-World-Eval** — "Wow, wo, val! A Comprehensive Embodied World Model Evaluation Turing Test." *arXiv* 2601.13206 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.13206)  
  > Embodied Turing Test benchmark for world models; standardized framework spanning 3D prediction and interactive generation.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 3.4 Multi-Agent World Models

> World models that represent or reason over multiple agents simultaneously.

- **AutoWorld** — "AutoWorld: Scaling Multi-Agent Traffic Simulation with Self-Supervised World Models." *arXiv* 2603.28963 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.28963) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://mpourkeshavarz.github.io/AutoWorld/)  
  > Self-supervised world model from unlabeled LiDAR data for multi-agent traffic simulation; #1 on WOSAC leaderboard.

- **MADreamer** — "Multi-Agent World Models for Decentralized Decision Making." (2024).

- **SceneDiffuser++** — (see §1.2.4) City-scale traffic simulation with multi-agent world model.

- **Ego-Other Vehicle Trajectory World Model (EOT-WM)** — (see §1.2.2) Jointly models ego and other vehicle trajectories.

- **InDRiVE** — (see §3.1) Curiosity-driven exploration in multi-agent driving world model.

- **Communicative World Models** — (see §3.3) Ego-centric communicative modeling of other agents.

- **Solaris** — (see §1.1.2) Multiplayer video world model in Minecraft; multi-agent interaction simulation.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 3.5 Safety-Aware Agentic World Models

> Explicitly incorporate safety constraints or uncertainty quantification into world-model-based decision making.

- **VL-SAFE** — "VL-SAFE: Vision-Language Guided Safety-Aware Reinforcement Learning with World Models for Autonomous Driving." *arXiv* 2505.16377 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.16377) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ys-qu.github.io/vlsafe-website/)  

- **World Models: The Safety Perspective** — *ISSREW* 2024. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.07690)  

- **The Safety Challenge of World Models for Embodied AI Agents** — *arXiv* 2510.05865 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.05865)  

- **Safety, Security, and Cognitive Risks in World Models** — *arXiv* 2604.03295 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.03295)  
  > Formal definitions of trajectory persistence and representational risk; five-profile attacker taxonomy; unified threat model.

- **Progressive Robustness-Aware World Models** — *techrXiv* 2025. [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://doi.org/10.36227/techrxiv.176523308.84756413/v1) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/MoyangSensei/AwesomeRobustDWM)

- **Latent Safety Filters** — "Uncertainty-aware Latent Safety Filters for Avoiding Out-of-Distribution Failures." *arXiv* 2025.  
  > Hamilton-Jacobi reachability-based safety in generative world model latent spaces.

- **Safety Certification in the Latent Space** — "Safety Certification in the Latent space using Control Barrier Functions and World Models." *arXiv* 2025. [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.semanticscholar.org/paper/Safety-Certification-in-the-Latent-space-using-and-Zhao-Ray/dfd22d1094d5e6756d00c7b601235f52bc4ce46e)  

- **How Safe Will I Be Given What I Saw?** — "Calibrated Safety Prediction for Image-Controlled Autonomy." *arXiv* 2603.12987 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.12987)  

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

### 3.6 LLM / VLM Agents with World Models

> Large language or vision-language models functioning as or augmented by world models, enabling grounded text-based reasoning about physical dynamics.

- **GROOT** — (see §1.3.1) LLM-guided agent using gameplay video world models.

- **Inner Monologue** — Huang, W. et al. "Inner Monologue: Embodied Reasoning through Planning with Language Models." *CoRL* 2022. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2207.05608)

- **SayCan** — Ahn, M. et al. "Do As I Can, Not As I Say: Grounding Language in Robotic Affordances." *CoRL* 2022. [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2204.01691)

- **Is Sora a World Simulator?** — "Is Sora a World Simulator? A Comprehensive Survey on General World Models and Beyond." *arXiv* 2405.03520 (2024). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.03520) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/GigaAI-research/General-World-Models-Survey)

- **FutureSightDrive** — (see §1.2.4) Spatio-temporal Chain-of-Thought reasoning for driving.

- **World Models in AI: Like a Child** — "World Models in Artificial Intelligence: Sensing, Learning, and Reasoning Like a Child." *arXiv* 2503.15168 (2025). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.15168)

- **KG-as-World-Model** — (see §2.5) Knowledge graphs providing structured world representation for LLM agents in vehicles.

- **RAG-World** — "RAG-Enhanced LLM-Based World Models." *ACL* 2025. [![Paper](https://img.shields.io/badge/Paper-ACL-4C566A?logo=readthedocs&logoColor=white)](https://aclanthology.org/2025.acl-long.294/)  
  > Retrieval-Augmented Generation for LLM-based world models; integrates external knowledge for better prediction.

- **World-R1** — "World-R1: Enhancing Video Foundation Models with World Modeling via Reinforcement Learning." *arXiv* 2604.24764 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.24764)  
  > Injects world-modeling capabilities into video models via RL; geometrically consistent world modeling.

- **SWIFT** — "Can Test-Time Scaling Improve World Foundation Model?" *arXiv* 2604.25603 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.25603)  
  > Test-time scaling laws for world foundation models; scalable inference-time improvement without retraining.

- **Foundation World Models for Agents** — "Foundation World Models for Agents that Learn, Verify, and Adapt Reliably Beyond Static Environments." *arXiv* 2602.23152 (2026). [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23152)  
  > Vision paper: persistent compositional representations unifying RL, program synthesis, and abstraction.

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 📚 Surveys & Position Papers

### General Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **Understanding World or Predicting Future?** | ACM CSUR 2025 | Comprehensive taxonomy | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.14499) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/World-Model) |
| **Is Sora a World Simulator?** | arXiv 2024 | Video generation & general world models | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.03520) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/GigaAI-research/General-World-Models-Survey) |
| **Agentic World Modeling** | arXiv 2026 | Agentic capabilities, levels × laws taxonomy | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.22748) |
| **From Specialist to Generalist** | TechRxiv 2026 | Specialist vs. Generalist continuum | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.techrxiv.org/doi/abs/10.36227/techrxiv.176523308.84756413/v1) |
| **Human Cognition in Machines** | arXiv 2026 | Unified cognitive perspective on world models | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.16592) |
| **Video Generation Models as World Models** | arXiv 2026 | Efficient paradigms and algorithms | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.28489) |
| **3D and 4D World Modeling: A Survey** | arXiv 2025 | 3D/4D scene generation survey | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.07996) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/worldbench/awesome-3d-4d-world-models) |
| **From 2D to 3D Cognition** | arXiv 2025 | General world models | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.20134) |
| **From Masks to Worlds** | arXiv 2025 | Hitchhiker's guide + evolutionary roadmap | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.20668) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/M-E-AGI-Lab/Awesome-World-Models) |
| **World Models in AI: Like a Child** | arXiv 2025 | Developmental cognitive perspective | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.15168) |
| **Simulating the Visual World with AI** | arXiv 2025 | Roadmap for visual world modeling | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.08585) |
| **Physics Cognition in Video Generation** | arXiv 2025 | Physical plausibility in generative models | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.21765) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation) |
| **Trinity of Consistency** | arXiv 2026 | Modality-spatial-temporal definition principle | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23152) |
| **When do Neural Networks Learn World Models?** | ICML 2025 | Theoretical analysis of world model emergence | [![Paper](https://img.shields.io/badge/Paper-ICML-4C566A?logo=readthedocs&logoColor=white)](https://proceedings.mlr.press/v267/zhang25s.html) |

### Embodied AI Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **World Models for Embodied AI** | arXiv 2025 | Comprehensive embodied AI survey | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.16732) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Li-Zn-H/AwesomeWorldModels) |
| **Embodied World Models: Physical Simulation** | arXiv 2025 | Physical simulators + world models | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.00917) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NJU3DV-LoongGroup/Embodied-World-Models-Survey) |
| **Embodied AI Agents: Modeling the World** | arXiv 2025 | Agent-centric perspective | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.22355) |
| **Aligning Cyber Space with Physical World** | TMECH 2025 | Embodied AI & Cyberspace | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.06886) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List) |
| **Modeling the Mental World for Embodied AI** | arXiv 2026 | Mental-world modeling for embodied agents | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.02378) |
| **Physical Grounding in World Models** | arXiv 2026 | Imperative of physical grounding | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.15533) |
| **A Step Toward World Models: Robotic Manipulation** | arXiv 2025 | Manipulation-focused survey | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.02097) |
| **Do World Action Models Generalize Better than VLAs?** | arXiv 2026 | Empirical robustness study | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.22078) |
| **World Models for VLA Agents** | TechRxiv 2026 | VLA agent-centric survey | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.techrxiv.org/doi/abs/10.36227/techrxiv.176648325.53001256/v1) |

### Autonomous Driving Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **Role of World Models in Autonomous Driving** | arXiv 2025 | Comprehensive AD survey | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.10498) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/LMD0311/Awesome-World-Model) |
| **World Models for AD: An Initial Survey** | arXiv 2024 | Initial taxonomy | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.02622) |
| **A Survey of World Models for AD** | arXiv 2025 | Recent AD world models | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.11260) |
| **Video Generation & World Models in AD** | arXiv 2024 | Interplay of generation and driving | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.02914) |
| **Progressive Robustness-Aware WMs in AD** | techrXiv 2025 | Robustness perspective | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://doi.org/10.36227/techrxiv.176523308.84756413/v1) |

### Safety & Theory

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **World Models: The Safety Perspective** | ISSREW 2024 | Safety risks in world models | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.07690) |
| **Safety Challenge of WMs for Embodied AI** | arXiv 2025 | Embodied safety review | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.05865) |
| **Safety, Security, and Cognitive Risks in WMs** | arXiv 2026 | Threat model & formal definitions | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.03295) |
| **Trinity of Consistency** | arXiv 2026 | Theoretical framework for GWMs | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23152) |
| **Mechanistic View on Video Generation as WMs** | arXiv 2026 | State-and-dynamics lens on video world models | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.17067) |
| **Survey on Model-Based RL** | Springer 2023 | MBRL foundations | [[Link](https://link.springer.com/article/10.1007/s11432-022-3696-5)] |
| **On Memory in World Models** | arXiv 2025 | Memory mechanism comparison | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.06983) |
| **Acoustic World Models Survey** | arXiv 2025 | Sound-grounded world modeling | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13833) |
| **Natural Building Blocks for Structured World Models** | arXiv 2025 | Hierarchical composition of discrete/continuous processes | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.08162) |

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 📊 Benchmarks & Evaluation

| Benchmark | Domain | Metric Focus | Links |
|-----------|--------|-------------|-------|
| **Atari 100k** | Game | Sample efficiency | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://arxiv.org/abs/2012.15810) |
| **DMControl Suite** | Continuous control | Task performance | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/google-deepmind/dm_control) |
| **nuScenes** | Autonomous driving | Perception + prediction | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.nuscenes.org/) |
| **CARLA** | Autonomous driving | Closed-loop simulation | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://carla.org/) |
| **ProcGen** | Generalization | Generalization across procedurally generated envs | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01588) |
| **ACT-Bench** | Driving | Action controllability of driving world models | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.05337) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://turingmotors.github.io/actbench/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/turingmotors/ACT-Bench) |
| **WorldModelBench** | General | Comprehensive world model evaluation | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldmodelbench.github.io/) [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.16868) |
| **DrivingGen** | Driving | Realism, controllability, and temporal coherence | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.01528) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://drivinggen-bench.github.io/) |
| **WorldSimBench** | Video world models | Video generation as world simulation | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.18072) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://iranqin.github.io/WorldSimBench.github.io/) |
| **WorldArena** | Embodied | Perception and functional utility assessment | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08971) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-arena.ai) |
| **MIND** | Interactive video | Memory consistency and action control | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08025) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/CSU-JPG/MIND) |
| **Omni-WorldBench** | Interactive video | Interaction-centric comprehensive evaluation | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.22212) |
| **WorldMark** | Interactive video | Unified interactive video WM benchmark | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.21686) |
| **WorldLens** | Driving | Full-spectrum driving WM evaluation | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.10958) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldbench.github.io/worldlens) |
| **RoboWM-Bench** | Robotics | Manipulation-oriented world model evaluation | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19092) |
| **Newton** | Interactive video | Small interactive foundation world models; long-context memory & physics | [![Paper](https://img.shields.io/badge/Paper-ICLR-4C566A?logo=readthedocs&logoColor=white)](https://iclr.cc/virtual/2026/poster/22824) |
| **WoW-World-Eval** | Embodied | Embodied Turing Test benchmark | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.13206) |
| **dWorldEval** | Robotics | Discrete diffusion world model for policy evaluation | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.22152) |
| **Minecraft Diamond (DreamerV3)** | Embodied | Hierarchical long-horizon task completion | [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) |

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 🔬 Workshops & Challenges

- **Workshop on 4D World Models: Bridging Generation and Reconstruction @ CVPR 2026** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ivl.cs.brown.edu/4dworldmodels/)
- **2nd Workshop on World Models @ ICLR 2026** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sites.google.com/view/iclr-2026-workshop-world-model/home)
- **Workshop on World Modeling @ Mila 2026** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-model-mila.github.io/)
- **WorldModelBench @ CVPR 2025** — 1st Workshop on Benchmarking World Models. [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldmodelbench.github.io/)
- **OpenDriveLab World Model Track @ CVPR 2025** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://opendrivelab.com/challenge25/#1x-wm)
- **OpenDriveLab Predictive World Model Track @ CVPR 2024** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://opendrivelab.com/challenge24/#predictive_world_model)
- **Argoverse 3D Occupancy Forecasting @ CVPR 2023** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://eval.ai/web/challenges/challenge-page/1977/overview)
- **1x World Model Challenge** — Real-world robot video prediction challenge. [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.1x.tech/discover/1x-world-model-challenge)
- **NeurIPS 2025 World Models Workshop** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldmodels.github.io/)

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 📝 Blogs & Technical Commentary

### English Technical Blogs

- **NVIDIA Cosmos World Foundation Model Platform** — NVIDIA Technical Blog (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://developer.nvidia.com/blog/advancing-physical-ai-with-nvidia-cosmos-world-foundation-model-platform/)
- **R²D²: Boost Robot Training with World Foundation Models** — NVIDIA Technical Blog (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://developer.nvidia.com/blog/rd2-boost-robot-training-with-world-foundation-models-and-workflows/)
- **V-JEPA 2: The Next Step Toward Physical World Understanding** — Meta AI Blog (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://ai.meta.com/blog/v-jepa-2/)
- **Introducing GAIA-1** — Wayve Blog (2023). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://wayve.ai/thinking/introducing-gaia1/)
- **Global Learning, Local Driving** — Wayve Blog (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://wayve.ai/thinking/global-learning-local-driving-lessons-from-japan/)
- **The Path to Real-Time Worlds** — Over.world Blog (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://over.world/blog/the-path-to-real-time-worlds-and-why-it-matters)
- **World Models: When AI Stops Guessing** — Tulane IT (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://it.tulane.edu/blog/world-models-when-ai-stops-guessing-and-starts-imagining)
- **Dreaming in Blocks — MineWorld** — Towards Data Science (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://towardsdatascience.com/dreaming-in-blocks-mineworld-the-minecraft-world-model/)
- **World Models: The Next Frontier in AI** — Gradient Flow (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://gradientflow.com/the-world-model-minefield-a-guide-for-ai-teams/)
- **AI's Next Scaling Law** — Unite.AI (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://www.unite.ai/ais-next-scaling-law-not-more-data-but-better-world-models/)
- **Gradient-Based Planning for World Models** — Robohub (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://robohub.org/gradient-based-planning-for-world-models-at-longer-horizons/)
- **World Models Should Prioritize Physical and Social Dynamics** — BIGAI (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://eng.bigai.ai/news/2025/1127/130.html)
- **How Smart Do We Want AI to Be?** — CNET (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://www.cnet.com/science/how-smart-do-we-want-ai-to-be-world-models-may-understand-things-better-than-we-do/)
- **World Models Become Auto Autonomy's New Driver** — China Daily (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://subsites.chinadaily.com.cn/auto/2025-12/08/c_1095274.htm)

### 中文技术博客 (Chinese Technical Blogs)

- **世界模型，真的很Awesome** — 知乎 (2025). [![Blog](https://img.shields.io/badge/Blog-知乎-1772F6?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/451179856)
- **世界模型是不是机器人下一个“奇点时刻”？** — 知乎 (2025). [![Blog](https://img.shields.io/badge/Blog-知乎-1772F6?logo=zhihu&logoColor=white)](https://www.zhihu.com/question/667574492)
- **ICML 2025 | 神经网络何时学到世界模型？** — CSDN (2025). [![Blog](https://img.shields.io/badge/Blog-CSDN-FC5531?logo=c&logoColor=white)](https://blog.csdn.net/)
- **在2025年初，浅浅聊一聊世界模型** — CSDN (2025). [![Blog](https://img.shields.io/badge/Blog-CSDN-FC5531?logo=c&logoColor=white)](https://blog.csdn.net/)
- **LeCun亲自出镜打脸质疑者！** — 澎湃新闻 (2025). [![Blog](https://img.shields.io/badge/Blog-澎湃-FF6B35?logo=wechat&logoColor=white)](https://www.thepaper.cn/newsDetail_forward_28345713)
- **Fei-Fei Li vs LeCun: The Debate on World Models** — 36氪 (2025). [![Blog](https://img.shields.io/badge/Blog-36氪-00C4FF?logo=wechat&logoColor=white)](https://36kr.com/p/3112751459316229)
- **Google DeepMind CEO: World Models Are the Future** — IT之家 (2025). [![Blog](https://img.shields.io/badge/Blog-IT之家-FF0033?logo=wechat&logoColor=white)](https://m.ithome.com/html/792514.htm)
- **2025年中国世界模型发展洞察** — 沙利文 (2025). [![Blog](https://img.shields.io/badge/Blog-沙利文-1E3A5F?logo=readthedocs&logoColor=white)](https://www.frostchina.com/)
- **拒绝“黑盒玄学”！2026重磅论文拆解** — CSDN (2026). [![Blog](https://img.shields.io/badge/Blog-CSDN-FC5531?logo=c&logoColor=white)](https://blog.csdn.net/)
- **CVPR 2026 世界模型成果盘点** — CSDN (2026). [![Blog](https://img.shields.io/badge/Blog-CSDN-FC5531?logo=c&logoColor=white)](https://blog.csdn.net/)
- **CVPR 2026 世界模型论文全景梳理** — 网易 (2026). [![Blog](https://img.shields.io/badge/Blog-网易-EA2C2C?logo=wechat&logoColor=white)](https://www.163.com/dy/article/JUQQF1K90511D6RL.html)
- **突破“不可能三角”！** — 知乎 (2026). [![Blog](https://img.shields.io/badge/Blog-知乎-1772F6?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/1910348558452604928)

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 🌐 Community Resources & Open Repositories

| Resource | Focus | Links |
| --- | --- | --- |
| **Awesome World Models (knightnemo)** | Broad cross-domain curation | [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/knightnemo/Awesome-World-Models) |
| **Awesome World Model for AD (LMD0311)** | Driving-specific papers, benchmarks | [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/LMD0311/Awesome-World-Model) |
| **Awesome World Models for Embodied AI** | Embodied AI comprehensive survey companion | [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/Li-Zn-H/AwesomeWorldModels) |
| **Hitchhiker's Guide to World Models** | Evolutionary roadmap companion | [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/M-E-AGI-Lab/Awesome-World-Models) |
| **Awesome World Models for Robotics** | Robotics, embodied AI, VLA-adjacent | [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/leofan90/Awesome-World-Models) |
| **World-Model (tsinghua-fib-lab)** | ACM CSUR 2025 survey companion | [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/World-Model) |
| **Awesome 3D and 4D World Models** | 3D/4D world modeling survey companion | [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/worldbench/awesome-3d-4d-world-models) |
| **Awesome Physics Cognition in VG** | Physical plausibility in generative models | [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation) |
| **Awesome Robust DWM** | Robustness-aware driving world models | [![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github&logoColor=white)](https://github.com/MoyangSensei/AwesomeRobustDWM) |
| **OpenDWM (SenseTime)** | Open-source toolkit for driving world models | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SenseTime-FVG/OpenDWM) |
| **NVIDIA Cosmos** | World foundation model platform for physical AI | [![GitHub](https://img.shields.io/badge/GitHub-Cosmos%202.5-76B900?logo=nvidia&logoColor=white)](https://github.com/nvidia-cosmos) |
| **Cosmos-RL** | Reinforcement learning framework for Physical AI | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nvidia-cosmos/cosmos-rl) |
| **Matrix-Game (SkyworkAI)** | Open interactive game world model stack | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SkyworkAI/Matrix-Game) |
| **HY-World 2.0 (Tencent-Hunyuan)** | Open 3D world generation / simulation stack | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Tencent-Hunyuan/HY-World-2.0) |
| **DreamerV3** | Universal world model for MBRL | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv3) |
| **DIAMOND** | Diffusion-based world model for Atari | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/eloialonso/diamond) |
| **JEPA (Meta)** | Official I-JEPA and V-JEPA implementation | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/jepa) |
| **TD-MPC2** | Scalable latent-space model-based RL | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc2) |
| **Vista** | Generalizable driving world model | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/OpenDriveLab/Vista) |

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 🎙 Podcasts & Talks

- **The World Model Podcast** — Dedicated podcast series on world models. [![Podcast](https://img.shields.io/badge/Podcast-Listen-8A2BE2?logo=applepodcasts&logoColor=white)](https://www.iheart.com/podcast/269-the-world-model-podcast-269173062/)
- **a16z: Fei-Fei Li on Spatial Intelligence & World Models** — (2025). [![Podcast](https://img.shields.io/badge/Podcast-Listen-8A2BE2?logo=applepodcasts&logoColor=white)](https://www.storytel.com/se/sv/books/episode-863-a16z-podcast-23999801)
- **The Information Bottleneck: Yann LeCun** — (2025). [![Podcast](https://img.shields.io/badge/Podcast-Listen-8A2BE2?logo=applepodcasts&logoColor=white)](https://www.the-information-bottleneck.com/e/ep20-yann-lecun/)
- **No Priors: World Models with Sarah and Elad** — (2025). [![Podcast](https://img.shields.io/badge/Podcast-Listen-8A2BE2?logo=applepodcasts&logoColor=white)](https://podscripts.co/podcast/no-priors/ai-consolidation-biotech-opportunities-and-world-models-with-sarah-and-elad)
- **Sequoia Capital: How End-to-End Learning Created Autonomous Driving 2.0** — Alex Kendall. [![Talk](https://img.shields.io/badge/Talk-Listen-F97316?logo=youtube&logoColor=white)](https://www.sequoiacap.com/podcast/training-data-wayve-alex-kendall/)

<p align="right"><a href="#-awesome-world-models">🔝 Back to Top</a></p>

---

## 📝 Citation

If you find this repository useful in your research, please consider citing the key survey papers that underpin it:

```bibtex
@misc{lecun2022path,
  title={A Path Towards Autonomous Machine Intelligence},
  author={LeCun, Yann},
  year={2022},
  howpublished={OpenReview}
}
```

---

## Contribution guide

PRs are welcome. The preferred entry format is:

```markdown
- **Paper / Project Name** (Year) `Task` `Architecture`
  One-sentence reason this entry matters.
  [![arXiv](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/XXXX.XXXXX)
  [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/...)
  [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://...)
```
