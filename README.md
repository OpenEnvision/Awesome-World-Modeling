<div align="center">

# 🌍 Awesome World Models

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-blue.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
[![Last Updated](https://img.shields.io/badge/Updated-May%202026-green.svg)](https://github.com/)

**A scope-aware, paper-first curated list of world model research.**
Organized by paradigm first, then by domain, representation, and downstream use.

*Latest curation pass verified against arXiv on **May 1, 2026**.*

> ⭐ **Better than the alternatives** — richer taxonomy, blog section, fuller badge coverage, and deeper coverage of 2025–2026 papers.

</div>

| Internal & External "World Model" | Historical Wave Map |
| :---: | :---: |
| ![internal & external world model](image/lecun_wm.png) | ![Historical wave map](image/world_qa.png) |

---

## 🗂️ Definition and Scope

### A short working definition

A **world model** is an internal predictive model of an environment that helps an agent answer:

> **What will happen if I act, wait, intervene, or imagine an alternative future?**

That definition is intentionally broader than model-based RL, but narrower than "any model that understands the world".

### World model vs. nearby concepts

| Concept | Core question | Typical output |
| --- | --- | --- |
| **world model** | what happens next under state, action, or intervention? | future observations, latent states, occupancy, trajectories, or executable rollouts |
| simulator | can the environment be replayed or executed? | environment transitions, often hand-built or learned |
| planner / policy | what should the agent do? | actions, plans, control sequences |
| perception model | what is in the scene now? | labels, detections, depth, segmentation |

### A practical boundary

A paper is strongest as a world-model entry when it does at least **two** of the following:
1. models state,
2. predicts state evolution under action or intervention,
3. supports imagination, planning, evaluation, or controllable simulation.

---

## 📖 Table of Contents

- [🗺️ Taxonomic Overview](#-taxonomic-overview)
- [0 · 🧠 Mind World Models — Biological Origins](#0--mind-world-models--biological-origins--foundational-definitions)
- [1 · 🎨 Generative World Models](#1--generative-world-models)
  - [1.1 🎮 Game & Interactive World Simulation](#11-game--interactive-world-simulation)
  - [1.2 🚗 Autonomous Driving — Generative](#12-autonomous-driving--generative)
  - [1.3 🤖 Embodied AI & Robotics — Generative](#13-embodied-ai--robotics--generative)
  - [1.4 🌐 3D / 4D Scene Generation](#14-3d--4d-scene-generation)
  - [1.5 🔬 Scientific & Physical World Modeling](#15-scientific--physical-world-modeling)
- [2 · 🏗️ Representational World Models](#2--representational-world-models)
  - [2.1 Latent Dynamics Models (RSSM / Dreamer Family)](#21-latent-dynamics-models-rssm--dreamer-family)
  - [2.2 Joint Embedding Predictive Architectures (JEPA)](#22-joint-embedding-predictive-architectures-jepa)
  - [2.3 Occupancy & BEV Representations](#23-occupancy--bev-representations)
  - [2.4 Multimodal & Acoustic Sensory World Models](#24-multimodal--acoustic-sensory-world-models)
  - [2.5 Symbolic & Knowledge-Graph World Models](#25-symbolic--knowledge-graph-world-models)
- [3 · 🤖 Agentic World Models](#3--agentic-world-models)
  - [3.1 Model-Based Reinforcement Learning (MBRL)](#31-model-based-reinforcement-learning-mbrl)
  - [3.2 World-Model-Guided Planning](#32-world-model-guided-planning)
  - [3.3 Closed-Loop Simulation & Evaluation](#33-closed-loop-simulation--evaluation)
  - [3.4 Multi-Agent World Models](#34-multi-agent-world-models)
  - [3.5 Safety-Aware Agentic World Models](#35-safety-aware-agentic-world-models)
  - [3.6 LLM / VLM Agents with World Models](#36-llm--vlm-agents-with-world-models)
- [📚 Surveys & Position Papers](#-surveys--position-papers)
- [📊 Benchmarks & Evaluation](#-benchmarks--evaluation)
- [🔬 Workshops & Challenges](#-workshops--challenges)
- [🌐 Community Resources & Open Repositories](#-community-resources--open-repositories)
- [📝 Curated Blogs & Industry Writing](#-curated-blogs--industry-writing)
- [📖 Citation](#-citation)

---

## 🗺️ Taxonomic Overview

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

### Working definitions

| Term | Definition |
|------|-----------|
| **Mind World Model** | The biological and cognitive intuition that an intelligent system carries an internal model of the world and uses it for prediction, imagination, and counterfactual reasoning. |
| **Generative World Model** | Predicts or synthesizes plausible future observations, often pixels, video, occupancy, or point clouds. |
| **Representational World Model** | Predicts future *state* or *latent structure* without requiring photorealistic decoding. |
| **World Foundation Model (WFM)** | A pretrained model of environment structure and dynamics that can support simulation, planning, forecasting, or data generation across downstream tasks. |
| **Agentic World Model** | A WFM coupled with action selection, planning, memory, tool use, or policy optimization in a closed loop. |

[⬆ Back to Top](#-table-of-contents)

---

## 0 · 🧠 Mind World Models — Biological Origins & Foundational Definitions

> The concept of a "world model" originates in cognitive science and neuroscience. An agent's internal model of its environment allows it to predict sensory consequences of its own actions—the computational substrate of planning, imagination, and counterfactual reasoning. The papers below form the intellectual backbone of modern machine world models.

### 0.1 Foundational Cognitive & Neuroscientific Works

- **Occupancy Grids** — Elfes, A. "Using Occupancy Grids for Mobile Robot Perception and Navigation." *Computer* (1989). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](http://www.sci.brooklyn.cuny.edu/~parsons/courses/3415-fall-2011/papers/elfes.pdf)
  > First computational formalization of a spatial world model for a physical agent.

- **World Models (Ha & Schmidhuber)** — Ha, D. & Schmidhuber, J. "World Models." *arXiv* 1803.10122 (2018). [![arXiv](https://img.shields.io/badge/arXiv-1803.10122-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1803.10122) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldmodels.github.io/)
  > **Seminal work.** Learn a compressed (V) perception model + recurrent (M) world model, train a small controller (C) entirely inside imagination. Introduced MDN-RNN for stochastic world model.

- **A Path Towards Autonomous Machine Intelligence (LeCun)** — LeCun, Y. "A Path Towards Autonomous Machine Intelligence." *OpenReview* (2022). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://openreview.net/pdf?id=BZ5a1r-kVsf)
  > Proposes a modular architecture centered on a **Joint Embedding Predictive Architecture (JEPA)** world model for energy-efficient reasoning without pixel-level generation.

- **Predictive Coding / Free Energy Principle** — Friston, K. "The free-energy principle: a unified brain theory?" *Nature Reviews Neuroscience* (2010). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/nrn2787)
  > Neuro-scientific grounding: the brain as a hierarchical Bayesian inference machine minimizing prediction error.

- **Successor Representations** — Dayan, P. "Improving Generalization for Temporal Difference Learning: The Successor Representation." *Neural Computation* (1993).
  > Foundational representation: encode the future occupancy of states rather than immediate reward.

- **Mental Simulation / Theory of Mind** — Battaglia, P. et al. "Simulation as an engine of physical scene understanding." *PNAS* (2013). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.pnas.org/doi/10.1073/pnas.1306572110)
  > Humans use fast approximate physics simulators as a world model for intuitive physics.

### 0.2 Formative Computational World Model Papers

- **Recurrent World Models Facilitate Policy Evolution** — Ha, D. & Schmidhuber, J. *NeurIPS* 2018. [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://papers.nips.cc/paper_files/paper/2018/hash/2de5d16682c3c35007e4bbd7153108d1-Abstract.html)

- **Learning Latent Dynamics for Planning (PlaNet)** — Hafner, D. et al. *ICML* 2019. [![arXiv](https://img.shields.io/badge/arXiv-1811.04551-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1811.04551) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/google-research/planet)
  > Introduced RSSM (Recurrent State-Space Model): separate deterministic and stochastic latent paths; latent-space cross-entropy planning.

- **Dream to Control (Dreamer)** — Hafner, D. et al. *ICLR* 2020. [![arXiv](https://img.shields.io/badge/arXiv-1912.01603-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01603) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/google-research/dreamer)
  > Actor-critic entirely trained in latent-dream world; strong Atari & continuous control benchmark results.

- **Mastering Atari with Discrete World Models (DreamerV2)** — Hafner, D. et al. *ICLR* 2021. [![arXiv](https://img.shields.io/badge/arXiv-2010.02193-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2010.02193) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv2)
  > Discrete latent variables via straight-through gradients; matches Rainbow DQN with no environment interaction during policy training.

- **Mastering Diverse Domains with World Models (DreamerV3)** — Hafner, D. et al. (2023). [![arXiv](https://img.shields.io/badge/arXiv-2301.04104-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv3)
  > Single fixed hyperparameter set generalizing across continuous control, Atari, DMLab, Minecraft, ProcGen, and BSuite.

[⬆ Back to Top](#-table-of-contents)

---

## 1 · 🎨 Generative World Models

<img src="image/generative_wm.png" alt="Generative World Model" width="100%">

> Generative world models explicitly synthesize sensory observations (pixels, point clouds, tokens) of plausible futures conditioned on actions or language. Their primary value is as **learned simulators** and **data augmenters**.

---

### 1.1 🎮 Game & Interactive World Simulation

> These models simulate game environments frame-by-frame conditioned on player actions, essentially replacing traditional game engines with neural networks.

#### 1.1.1 Pixel-Space Diffusion Models

- **GameNGen** — Valevski, D. et al. "Diffusion Models Are Real-Time Game Engines." *arXiv* 2408.14837 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2408.14837-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.14837)
  > First real-time neural game engine simulating DOOM at >20 FPS; diffusion model conditioned on action history.

- **DIAMOND** — Alonso, E. et al. "Diffusion for World Modeling: Visual Details Matter in Atari." *NeurIPS* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2405.12399-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.12399) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/eloialonso/diamond)
  > Diffusion-based world model trained on Atari achieving state-of-the-art imagination quality; highlights visual fidelity for downstream RL.

- **Matrix-Game** — "Matrix-Game: Interactive World Foundation Model." *arXiv* 2506.18701 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.18701-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.18701) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SkyworkAI/Matrix-Game)
  > Open-source interactive world foundation model for gaming; controllable action-conditioned video generation.

- **Matrix-Game 2.0** — "Matrix-Game 2.0: An Open-Source, Real-Time, and Streaming Interactive World Model." *arXiv* 2508.13009 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.13009-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.13009) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://matrix-game-v2.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SkyworkAI/Matrix-Game/tree/main/Matrix-Game-2)
  > Streaming real-time extension with improved consistency and interactivity.

- **A Frame is Worth One Token** — "A Frame is Worth One Token: Efficient Generative World Modeling with Delta Tokens." *arXiv* 2604.04913 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.04913-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.04913)
  > Compresses frame-to-frame change into delta tokens — a practical direction for cheaper long-horizon rollout.

#### 1.1.2 Autoregressive Transformer Models

- **Genie** — Bruce, J. et al. "Genie: Generative Interactive Environments." *arXiv* 2402.15391 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2402.15391-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.15391) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sites.google.com/view/genie-24/home)
  > One of the most influential post-World-Models papers; learns latent action interfaces from unlabeled internet video to generate controllable 2D environments.

- **Genie 2** — Parker-Holder, J. et al. *DeepMind Blog* (December 2024). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/)
  > Foundation world model generating an endless variety of action-controllable, playable **3D environments** from a single image prompt; playable by humans or AI agents.

- **Genie 3** — Ball, P. et al. *DeepMind Blog* (August 2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/)
  > Real-time text-to-world generation at 24 fps / 720p with minutes of coherent coherent play — a decisive shift from passive video generation to live interactive worlds.

- **Oasis** — "Oasis: A Universe in a Transformer." (2024). [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://oasis-model.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/etched-ai/open-oasis)
  > Transformer world model generating Minecraft interactively, token by token, without a game engine.

- **MineWorld** — "MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft." *arXiv* 2504.07257 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2504.07257-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.07257) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://aka.ms/mineworld)
  > Real-time interactive world model; open-sourced for the Minecraft environment.

- **Solaris** — "Solaris: Building a Multiplayer Video World Model in Minecraft." *arXiv* 2602.22208 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.22208-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.22208) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://solaris-wm.github.io/)
  > Pushes interactive world modeling from single-player rollouts toward shared **multiplayer** Minecraft dynamics.

- **GameFactory** — Wen, Y. et al. "GameFactory: Creating New Games with Generative Interactive Videos." *arXiv* 2501.08325 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2501.08325-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.08325) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://yujiwen.github.io/gamefactory/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/KwaiVGI/GameFactory)
  > Generates entirely new game experiences via generative interactive video.

- **AnimeGamer** — "AnimeGamer: Infinite Anime Life Simulation with Next Game State Prediction." *arXiv* 2504.01014 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2504.01014-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.01014) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://howe125.github.io/AnimeGamer.github.io/)

#### 1.1.3 Memory-Augmented & Long-Horizon Game Worlds

- **WorldMem** — "WorldMem: Long-term Consistent World Simulation with Memory." *arXiv* 2504.12369 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2504.12369-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.12369) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://xizaoqu.github.io/worldmem/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/xizaoqu/WorldMem)
  > Addresses long-term consistency through an explicit memory module; enables coherent multi-minute gameplay.

- **Matrix-Game 3.0** — "Matrix-Game 3.0: Real-Time and Streaming Interactive World Model with Long-Horizon Memory." *arXiv* 2604.08995 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.08995-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.08995) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://matrix-game-v3.github.io/)
  > Extends open interactive world models with real-time streaming and explicit long-horizon memory.

- **WorldCam** — "WorldCam: Interactive Autoregressive 3D Gaming Worlds with Camera Pose as a Unifying Geometric Representation." *arXiv* 2603.16871 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.16871-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.16871) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://cvlab-kaist.github.io/WorldCam/)
  > Brings 3D camera geometry into game-world autoregression for more stable interactive navigation.

- **LIVE** — "LIVE: Long-horizon Interactive Video World Modeling." *arXiv* 2602.03747 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.03747-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.03747) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://junchao-cs.github.io/LIVE-demo/)
  > Focuses directly on long-horizon interactive consistency, a core bottleneck for usable video world models.

- **RealPlay** — "From Virtual Games to Real-World Play." *arXiv* 2506.18901 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.18901-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.18901) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wenqsun.github.io/RealPlay/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wenqsun/Real-Play)
  > Bridges game-world training and real-world embodied play through shared world representations.

- **Waypoint-1** — "The Path to Real-Time Worlds and Why It Matters." *Over.world Blog* (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://over.world/blog/the-path-to-real-time-worlds-and-why-it-matters)

[⬆ Back to Top](#-table-of-contents)

---

### 1.2 🚗 Autonomous Driving — Generative

> Generative driving world models synthesize future sensor observations (camera, LiDAR, radar) conditioned on ego trajectory, agent behaviors, weather, or language commands. They serve as learned simulators for data augmentation, safety evaluation, and closed-loop training.

#### 1.2.1 Multi-View Video Generation (Camera-Based)

- **GAIA-1** — Hu, A. et al. "Introducing GAIA-1: A Cutting-Edge Generative AI Model for Autonomy." *Wayve* (2023). [![arXiv](https://img.shields.io/badge/arXiv-2309.17080-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.17080) [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://wayve.ai/thinking/introducing-gaia1/)
  > First large-scale autoregressive video world model for driving, conditioned on video, text, and actions; generates realistic multi-camera sequences.

- **GAIA-2** — "GAIA-2: A Controllable Multi-View Generative World Model for Autonomous Driving." *arXiv* 2503.20523 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.20523-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.20523) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wayve.ai/thinking/gaia-2)
  > Multi-view extension with fine-grained controllability over agent behaviors and scene attributes.

- **Drive-WM** — "Driving into the Future: Multiview Visual Forecasting and Planning with World Model for Autonomous Driving." *CVPR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2311.17918-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.17918) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/BraveGroup/Drive-WM)
  > One of the early representative driving world models that tightly couples future visual forecasting and planning.

- **DriveDreamer** — "DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving." *ECCV* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2309.09777-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.09777) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/JeffWang987/DriveDreamer)

- **MagicDrive** — "MagicDrive: Street View Generation with Diverse 3D Geometry Control." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2310.02601-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.02601) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/cure-lab/MagicDrive)
  > A widely cited controllable street-scene generation baseline close to practical driving world modeling.

- **DriveDreamer-2** — "DriveDreamer-2: LLM-Enhanced World Models for Diverse Driving Video Generation." *arXiv* 2403.06845 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2403.06845-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.06845) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://drivedreamer2.github.io/)
  > Adds language-enhanced control for more diverse and editable driving rollouts.

- **Vista** — "Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability." *NeurIPS* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2405.17398-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.17398) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/OpenDriveLab/Vista)
  > A strong 2024 driving baseline with a good balance of fidelity, control, and downstream usefulness.

- **Cosmos-Drive-Dreams** — "Cosmos-Drive-Dreams: Scalable Synthetic Driving Data Generation with World Foundation Models." *arXiv* 2506.09042 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.09042-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09042) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/toronto-ai/cosmos_drive_dreams)
  > NVIDIA's Cosmos-based large-scale synthetic data pipeline for autonomous driving.

- **GEM** — "GEM: A Generalizable Ego-Vision Multimodal World Model for Fine-Grained Ego-Motion, Object Dynamics, and Scene Composition Control." *arXiv* 2412.11198 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.11198-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.11198) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://vita-epfl.github.io/GEM.github.io/)

- **MAD** — "MAD: Motion Appearance Decoupling for efficient Driving World Models." *arXiv* 2601.09452 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.09452-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.09452) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://vita-epfl.github.io/MAD-World-Model/)
  > Separates motion learning from appearance rendering — a useful efficiency recipe for controllable driving rollouts.

- **ReconDreamer** — "ReconDreamer: Crafting World Models for Driving Scene Reconstruction via Online Restoration." *arXiv* 2411.19548 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2411.19548-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.19548) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://recondreamer.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/GigaAI-research/ReconDreamer)

- **InfinityDrive** — "InfinityDrive: Breaking Time Limits in Driving World Models." *arXiv* 2412.01522 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.01522-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.01522) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://metadrivescape.github.io/papers_project/InfinityDrive/page.html)

- **LongDWM** — "LongDWM: Cross-Granularity Distillation for Building a Long-Term Driving World Model." *arXiv* 2506.01546 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.01546-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01546) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wang-xiaodong1899.github.io/longdwm/)

- **Out of Sight but Not Out of Mind** — "Out of Sight but Not Out of Mind: Hybrid Memory for Dynamic Video World Models." *arXiv* 2603.25716 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.25716-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.25716) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/H-EmbodVis/HyDRA)
  > A recent memory-centric update for preserving off-screen dynamics in long driving rollouts.

- **MiLA** — "MiLA: Multi-view Intensive-fidelity Long-term Video Generation World Model for Autonomous Driving." *arXiv* 2503.15875 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.15875-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.15875) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://github.com/xiaomi-mlab/mila.github.io)

- **PosePilot** — "PosePilot: Steering Camera Pose for Generative World Models with Self-supervised Depth." *arXiv* 2505.01729 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.01729-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.01729)

- **DriveDreamer4D** — "World Models Are Effective Data Machines for 4D Driving Scene Generation." *arXiv* 2410.13571 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2410.13571-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.13571)

- **SimWorld** — "SimWorld: A Unified Benchmark for Simulator-Conditioned Scene Generation via World Model." *arXiv* 2503.13952 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.13952-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.13952) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Li-Zn-H/SimWorld)

- **UniFuture** — "Seeing the Future, Perceiving the Future: A Unified Driving World Model for Future Generation and Perception." *ICRA* 2026. [![arXiv](https://img.shields.io/badge/arXiv-2503.13587-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.13587) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/dk-liang/UniFuture)

- **UniDriveDreamer** — "UniDriveDreamer: A Single-Stage Multimodal World Model for Autonomous Driving." *arXiv* 2602.02002 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.02002-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02002)
  > Unifies multi-camera video and LiDAR generation in a single-stage multimodal driving world model.

- **STAGE** — "STAGE: A Stream-Centric Generative World Model for Long-Horizon Driving-Scene Simulation." *arXiv* 2506.13138 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.13138-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13138)

- **ReSim** — "ReSim: Reliable World Simulation for Autonomous Driving." *arXiv* 2506.09981 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.09981-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09981) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/OpenDriveLab/ReSim) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://opendrivelab.com/ReSim)

- **DriVerse** — "DriVerse: Navigation World Model for Driving Simulation via Multimodal Trajectory Prompting and Motion Alignment." *arXiv* 2504.18576 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2504.18576-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.18576)

- **Epona** — "Epona: Autoregressive Diffusion World Model for Autonomous Driving." *arXiv* 2506.24113 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.24113-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.24113) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://kevin-thu.github.io/Epona/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Kevin-thu/Epona/)

- **MaskGWM** — "MaskGWM: A Generalizable Driving World Model with Video Mask Reconstruction." *arXiv* 2502.11663 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2502.11663-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.11663) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SenseTime-FVG/OpenDWM)

- **ResWorld** — "ResWorld: Temporal Residual World Model for End-to-End Autonomous Driving." *arXiv* 2602.10884 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.10884-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10884) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/mengtan00/ResWorld)
  > Introduces residual temporal modeling for end-to-end driving, targeting better long-range rollout stability.

- **Dreamland** — "Dreamland: Controllable World Creation with Simulator and Generative Models." *arXiv* 2506.08006 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.08006-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.08006) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://metadriverse.github.io/dreamland/)

- **X-World** — "X-World: Controllable Ego-Centric Multi-Camera World Models for Scalable End-to-End Driving." *arXiv* 2603.19979 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.19979-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.19979)
  > Recent large-scale multi-camera driving world model with strong controllability emphasis.

- **InfiniCube** — "InfiniCube: Unbounded and Controllable Dynamic 3D Driving Scene Generation with World-Guided Video Models." *arXiv* 2412.03934 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.03934-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.03934) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/toronto-ai/infinicube/)

- **Physical Informed Driving WM** — "Physical Informed Driving World Model." *arXiv* 2412.08410 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.08410-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.08410) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://metadrivescape.github.io/papers_project/DrivePhysica/page.html)

#### 1.2.2 Occupancy & BEV-Based Generative Models

- **OccWorld** — "OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving." *ECCV* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2311.16038-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.16038) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wzzheng/OccWorld)
  > Autoregressive generation of 3D occupancy grids as a spatiotemporal world model.

- **Drive-OccWorld** — "Driving in the Occupancy World: Vision-Centric 4D Occupancy Forecasting and Planning via World Models for Autonomous Driving." *arXiv* 2408.14197 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2408.14197-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.14197)
  > A useful bridge between occupancy simulation and planning-oriented driving world models.

- **GaussianWorld** — "GaussianWorld: Gaussian World Model for Streaming 3D Occupancy Prediction." *arXiv* 2412.04380 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.04380-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.04380) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/zuosc19/GaussianWorld)
  > 3D Gaussian representation for streaming occupancy prediction; spatially structured world model.

- **DynamicCity** — "DynamicCity: Large-Scale 4D Occupancy Generation from Dynamic Scenes." *arXiv* 2410.18084 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2410.18084-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.18084) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://dynamic-city.github.io) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/3DTopia/DynamicCity)

- **SparseWorld** — "SparseWorld: A Flexible, Adaptive, and Efficient 4D Occupancy World Model Powered by Sparse and Dynamic Queries." *arXiv* 2510.17482 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.17482-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.17482) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/MSunDYY/SparseWorld)

- **COME** — "COME: Adding Scene-Centric Forecasting Control to Occupancy World Model." *arXiv* 2506.13260 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.13260-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13260) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/synsin0/COME)

- **DOME** — "DOME: Taming Diffusion Model into High-Fidelity Controllable Occupancy World Model." *arXiv* 2410.10429 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2410.10429-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.10429) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://gusongen.github.io/DOME)
  > Important occupancy-side diffusion baseline with controllability emphasis.

- **DLWM** — "DLWM: Dual Latent World Models enable Holistic Gaussian-centric Pre-training in Autonomous Driving." *CVPR* 2026. [![arXiv](https://img.shields.io/badge/arXiv-2604.00969-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.00969)
  > Splits latent dynamics for perception and planning rather than forcing one shared rollout space.

- **EOT-WM** — "Other Vehicle Trajectories Are Also Needed: A Driving World Model Unifies Ego-Other Vehicle Trajectories in Video Latent Space." *arXiv* 2503.09215 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.09215-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.09215)

- **Semi-Supervised Occupancy WM** — "Semi-Supervised Vision-Centric 3D Occupancy World Model for Autonomous Driving." *arXiv* 2502.07309 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2502.07309-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.07309) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/getterupper/PreWorld)

- **Temporal Triplane Transformers** — "Temporal Triplane Transformers as Occupancy World Models." *arXiv* 2503.07338 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.07338-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.07338)

- **NRSeg** — "NRSeg: Noise-Resilient Learning for BEV Semantic Segmentation via Driving World Models." *arXiv* 2507.04002 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.04002-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.04002) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/lynn-yu/NRSeg)

#### 1.2.3 LiDAR & 4D Point Cloud Generative Models

- **Copilot4D** — "Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2311.01017-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.01017)
  > Discrete diffusion for LiDAR point cloud prediction; unsupervised 4D world model.

- **AD-L-JEPA** — "AD-L-JEPA: Self-Supervised Spatial World Models with Joint Embedding Predictive Architecture for Autonomous Driving with LiDAR Data." *arXiv* 2501.04969 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2501.04969-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.04969) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/HaoranZhuExplorer/AD-L-JEPA-Release)
  > JEPA-style self-supervised LiDAR world model; predicts future abstract representations (not pixels).

- **LiDARCrafter** — "LiDARCrafter: Dynamic 4D World Modeling from LiDAR Sequences." *arXiv* 2508.03692 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.03692-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.03692) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://lidarcrafter.github.io) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/lidarcrafter/toolkit)

- **FASTopoWM** — "FASTopoWM: Fast-Slow Lane Segment Topology Reasoning with Latent World Models." *arXiv* 2507.23325 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.23325-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.23325) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/YimingYang23/FASTopoWM)

- **Towards Foundational LiDAR World Models** — "Towards foundational LiDAR world models with efficient latent flow matching." *arXiv* 2506.23434 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.23434-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.23434)

#### 1.2.4 Language-Guided & Multimodal Driving World Models

- **DrivingGPT** — "DrivingGPT: Unifying Driving World Modeling and Planning with Multi-modal Autoregressive Transformers." *arXiv* 2412.18607 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.18607-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.18607) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://rogerchern.github.io/DrivingGPT/)

- **DrivingWorld** — "DrivingWorld: Constructing World Model for Autonomous Driving via Video GPT." *arXiv* 2412.19505 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.19505-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.19505) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/YvanYin/DrivingWorld) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://huxiaotaostasy.github.io/DrivingWorld/index.html)

- **OccLLaMA** — "OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving." *arXiv* 2409.03272 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2409.03272-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.03272)
  > One of the clearest attempts to unify occupancy, language, and action in a single autoregressive driving world model.

- **HERMES** — "HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation." *ICCV* 2025. [![arXiv](https://img.shields.io/badge/arXiv-2501.14729-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.14729) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/LMD0311/HERMES)

- **UniMLVG** — "UniMLVG: Unified Framework for Multi-view Long Video Generation with Comprehensive Control Capabilities for Autonomous Driving." *arXiv* 2412.04842 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.04842-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.04842) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SenseTime-FVG/OpenDWM) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sensetime-fvg.github.io/UniMLVG/)

- **UniDrive-WM** — "UniDrive-WM: Unified Understanding, Planning and Generation World Model for Autonomous Driving." *arXiv* 2601.04453 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.04453-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04453) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://unidrive-wm.github.io/UniDrive-WM)
  > Recent unified driving world model spanning understanding, generation, and planning.

- **ExploreVLA** — "ExploreVLA: Dense World Modeling and Exploration for End-to-End Autonomous Driving." *arXiv* 2604.02714 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.02714-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.02714)

- **LMGenDrive** — "LMGenDrive: Bridging Multimodal Understanding and Generative World Modeling for End-to-End Driving." *arXiv* 2604.08719 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.08719-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.08719)

- **Learning Vision-Language-Action World Models for Autonomous Driving** — *arXiv* 2604.09059 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.09059-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.09059)
  > A VLA-flavored formulation that explicitly frames driving as joint perception, action, and imagination.

- **OmniNWM** — "OmniNWM: Omniscient Driving Navigation World Models." *arXiv* 2510.18313 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.18313-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.18313) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://arlo0o.github.io/OmniNWM/)

- **FutureSightDrive** — "FutureSightDrive: Thinking Visually with Spatio-Temporal CoT for Autonomous Driving." *arXiv* 2505.17685 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.17685-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.17685) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/MIV-XJTU/FSDrive)

- **SceneDiffuser++** — "SceneDiffuser++: City-Scale Traffic Simulation via a Generative World Model." *arXiv* 2506.21976 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.21976-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.21976)

- **Orbis** — "Orbis: Overcoming Challenges of Long-Horizon Prediction in Driving World Models." *arXiv* 2507.13162 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.13162-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.13162) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://lmb-freiburg.github.io/orbis.github.io/)

- **GeoDrive** — "GeoDrive: 3D Geometry-Informed Driving World Model with Precise Action Control." *arXiv* 2505.22421 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.22421-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.22421) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/antonioo-c/GeoDrive)

- **Imagine-2-Drive** — "Imagine-2-Drive: High-Fidelity World Modeling in CARLA for Autonomous Vehicles." *arXiv* 2411.10171 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2411.10171-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.10171) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://anantagrg.github.io/Imagine-2-Drive.github.io/)

- **Drive-JEPA** — "Drive-JEPA: Video JEPA Meets Multimodal Trajectory Distillation for End-to-End Driving." *arXiv* 2601.22032 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.22032-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.22032)
  > Adapts V-JEPA pretraining to the driving domain; achieves SoTA on NAVSIM v1/v2 with a single front-view camera by learning planning-aligned predictive representations.

- **WorldDreamer** — "WorldDreamer: Towards General World Models for Video Generation via Predicting Masked Tokens." *arXiv* 2401.09985 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2401.09985-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2401.09985) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-dreamer.github.io/)
  > Frames world modeling as unsupervised visual sequence modeling; maps visual inputs to discrete tokens and predicts masked ones with multi-modal prompts.

[⬆ Back to Top](#-table-of-contents)

---

### 1.3 🤖 Embodied AI & Robotics — Generative

> Generative world models in embodied AI simulate the visual or physical consequences of robot actions, enabling policy training in imagination and data-efficient learning.

#### 1.3.1 Robotic Manipulation

- **UniSim** — Yang, S. et al. "Learning Interactive Real-World Simulators." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2310.06114-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.06114) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://universal-simulator.github.io/)
  > Universal neural simulator of real-world physics; trained on diverse action-conditioned data to generalize across robot morphologies.

- **IRASim** — "IRASim: Learning Interactive Real-Robot Action Simulators." *arXiv* 2406.14540 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2406.14540-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.14540) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/bytedance/IRASim)

- **RoboDreamer** — "RoboDreamer: Learning Compositional World Models for Robot Imagination." *arXiv* 2404.12377 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2404.12377-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.12377) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/rainbow979/robodreamer)

- **DreamDojo** — "DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos." *arXiv* 2602.06949 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.06949-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.06949) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://dreamdojo-world.github.io/)
  > A large-scale robot world model explicitly targeting generalist transfer from human videos.

- **DexWorldModel** — "DexWorldModel: Causal Latent World Modeling towards Automated Learning of Embodied Tasks." *arXiv* 2604.16484 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.16484-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.16484)
  > Targets dexterous embodied learning with a more explicitly causal latent dynamics design.

- **IRL-VLA** — "IRL-VLA: Training a Vision-Language-Action Policy via Reward World Model." *arXiv* 2508.06571 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.06571-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.06571)

- **Mask World Model** — "Mask World Model: Predicting What Matters for Robust Robot Policy Learning." *arXiv* 2604.19683 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.19683-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19683)
  > Focuses robot world modeling on task-relevant prediction targets rather than pixel-complete reconstruction.

- **Hi-WM** — "Hi-WM: Human-in-the-World-Model for Scalable Robot Post-Training." *arXiv* 2604.21741 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.21741-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.21741)
  > Connects human feedback and world-model rollouts for scalable robot post-training.

- **EnerVerse** — Huang, S. et al. "EnerVerse: Envisioning Embodied Future Space for Robotics Manipulation." *NeurIPS* 2025. [![arXiv](https://img.shields.io/badge/arXiv-2501.01895-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.01895) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sites.google.com/view/enerverse)
  > Generative robotics foundation model (AgiBot) using chunk-wise autoregressive video diffusion + 4D Gaussian splatting data engine; enables robotic policy via the EnerVerse-A policy head.

- **EnerVerse-AC** — Jiang, Y. et al. "EnerVerse-AC: Envisioning Embodied Environments with Action Condition." *arXiv* 2505.09723 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.09723-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.09723) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/AgibotTech/EnerVerse-AC)
  > Action-conditioned extension of EnerVerse; multi-level action conditioning + multi-view generation for robot policy testing without physical robots.

- **3D-VLA** — "3D-VLA: A 3D Vision-Language-Action Generative World Model." *ICML* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2403.09631-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.09631)
  > Unifies 3D scene understanding, language, and action in a single generative world model; predicts goal images and point clouds for embodied planning.

- **EVA** — Chi, X. et al. "EVA: An Embodied World Model for Future Video Anticipation." *ICML* 2025. [![arXiv](https://img.shields.io/badge/arXiv-2410.15461-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.15461) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/litwellchi/EmbodiedVideoAnticipator)
  > Decomposes video prediction into four meta-tasks; introduces EVA-Bench for evaluating world models in embodied scenarios.

- **WorldScape** — "WorldScape: A Unified Real-time World Model Integrating Locomotion and Manipulation." *Manifold AI Blog* (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://manifoldai.cn/blogs/WorldScape.html)

#### 1.3.2 Navigation & Scene Understanding

- **NWM (Navigation World Model)** — "Navigation World Models." *CVPR* 2025. [![arXiv](https://img.shields.io/badge/arXiv-2403.12845-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.12845) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.amirbar.net/nwm/)
  > Predicts future egocentric observations conditioned on proposed waypoints; supports planning in novel environments without task-specific fine-tuning.

- **3D-Anchored Lookahead Planning** — "3D-Anchored Lookahead Planning for Persistent Robotic Scene Memory via World-Model-Based MCTS." *arXiv* 2604.11302 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.11302-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.11302)
  > Couples persistent 3D scene memory with lookahead planning, useful for long-horizon robotic exploration.

- **SIMA** — "Scalable Instructable Multiworld Agent." *Google DeepMind* (2024). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/) [![arXiv](https://img.shields.io/badge/arXiv-2404.10179-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.10179)
  > A generalist AI agent that follows language instructions across diverse 3D virtual environments, including commercial games, using world model pretraining.

- **SuSIE** — "Zero-Shot Robot Task Planning using Large Language Model and Latent Diffusion Models." *arXiv* 2311.18588 (2023). [![arXiv](https://img.shields.io/badge/arXiv-2311.18588-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.18588)

#### 1.3.3 Locomotion & Full-Body Control

- **Hierarchical World Models for Humanoid Control** — "Hierarchical World Models as Visual Whole-Body Humanoid Controllers." *arXiv* 2405.18418 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2405.18418-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.18418)
  > Multi-level JEPA world models controlling full humanoid body; imagination-based whole-body planning.

- **TD-MPC2** — "TD-MPC2: Scalable, Robust World Models for Continuous Control." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2310.16828-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc2)
  > Temporal Difference Learning with Model Predictive Control; scales across 104 continuous control tasks.

#### 1.3.4 World-Model-Based Vision-Language-Action (VLA) Models

- **V-JEPA 2** — Assran, M. et al. "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning." *arXiv* 2506.09985 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.09985-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09985) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ai.meta.com/research/vjepa/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/vjepa2)
  > **Meta's flagship world model.** Pretrained on >1M hours of internet video, then fine-tuned on <62h of robot trajectories for zero-shot manipulation on real Franka arms — no task-specific rewards.

- **RealDreamer** — "RealDreamer: Real-World Robotic Manipulation Using Imagination." *arXiv* 2406.12063 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2406.12063-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.12063)

- **Do World Action Models Generalize Better than VLAs?** — *arXiv* 2603.22078 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.22078-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.22078)
  > Empirical comparison of world-model-based action policies vs. direct VLA policies under distribution shift.

- **DriveVLA-W0** — "DriveVLA-W0: World Models Amplify Data Scaling Law in Autonomous Driving." *arXiv* 2510.12796 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.12796-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.12796) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/BraveGroup/DriveVLA-W0)

[⬆ Back to Top](#-table-of-contents)

---

### 1.4 🌐 3D / 4D Scene Generation

> Models that generate three-dimensional or four-dimensional (spatial + temporal) world representations, typically as explorable environments.

#### 1.4.1 Neural Radiance Fields & Gaussian-Based

- **EmerNeRF** — "EmerNeRF: Emergent Spatial-Temporal Scene Decomposition via Self-Supervision." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2311.02077-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.02077) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVlabs/EmerNeRF)

- **4D Gaussian Splatting** — "4D Gaussian Splatting for Real-Time Dynamic Scene Rendering." *CVPR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2310.08528-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.08528) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/hustvl/4DGaussians)

- **HunyuanWorld 1.0** — "HunyuanWorld 1.0: Generating Immersive, Explorable, and Interactive 3D Worlds from Words or Pixels." *arXiv* 2507.21809 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.21809-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.21809) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://3d-models.hunyuan.tencent.com/world/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0)
  > Text/image-to-3D immersive world generation with mesh-based explorable environments.

- **HY-World 2.0** — "HY-World 2.0: A Multi-Modal World Model for Reconstructing, Generating, and Simulating 3D Worlds." *arXiv* 2604.14268 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.14268-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.14268) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://3d-models.hunyuan.tencent.com/world/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Tencent-Hunyuan/HY-World-2.0)
  > A 2026 update spanning reconstruction, generation, and simulation in one 3D world stack.

- **GeoWorld** — "GeoWorld: Geometric World Models." *CVPR* 2026. [![arXiv](https://img.shields.io/badge/arXiv-2602.23058-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23058) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://steve-zeyu-zhang.github.io/GeoWorld)
  > Geometry-first world modeling that sharpens the spatial side of general world-model research.

- **Matrix-3D** — "Matrix-3D: Omnidirectional Explorable 3D World Generation." *arXiv* 2508.08086 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.08086-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.08086) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://matrix-3d.github.io)
  > 360° navigable 3D world generation from a single image or text prompt.

- **World Labs (Marble)** — "Marble: A Multimodal World Model." *World Labs Blog* (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://www.worldlabs.ai/blog) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.worldlabs.ai/)
  > Fei-Fei Li's startup; text- and image-driven 3D world generation with explorable geometry and depth.

#### 1.4.2 Video-to-3D / 4D World Models

- **VerseCrafter** — "VerseCrafter: Dynamic Realistic Video World Model with 4D Geometric Control." *arXiv* 2601.05138 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.05138-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.05138) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sixiaozheng.github.io/VerseCrafter_page/)
  > Adds explicit 4D geometric control to realistic video world modeling.

- **Olaf-World** — "Olaf-World: Orienting Latent Actions for Video World Modeling." *arXiv* 2602.10104 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.10104-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10104) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://showlab.github.io/Olaf-World/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/showlab/Olaf-World)
  > A useful step toward controllable latent-action video world models.

[⬆ Back to Top](#-table-of-contents)

---

### 1.5 🔬 Scientific & Physical World Modeling

> World models that simulate physical, biological, or earth-science processes rather than human-scale scenes.

#### 1.5.1 Physics Simulation & Intuitive Physics

- **DPI-Net** — Li, Y. et al. "Learning Particle Dynamics for Manipulating Rigid Bodies, Deformable Objects, and Fluids." *ICLR* 2019. [![arXiv](https://img.shields.io/badge/arXiv-1810.01566-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1810.01566)
  > Graph neural network world model for particle-based physics simulation.

- **FIGNet** — "Learning rigid body physics from videos." *DeepMind* (2023). [![arXiv](https://img.shields.io/badge/arXiv-2312.14219-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.14219)

- **Physics Cognition in Video Generation** — "Exploring the Evolution of Physics Cognition in Video Generation: A Survey." *arXiv* 2503.21765 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.21765-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.21765) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation)

#### 1.5.2 Climate & Earth System World Models

- **Pangu-Weather** — Bi, K. et al. "Accurate medium-range global weather forecasting with 3D neural networks." *Nature* (2023). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/s41586-023-06185-3)
  > 3D Earth Transformer for medium-range weather forecasting; faster and more accurate than traditional NWP.

- **GraphCast** — Lam, R. et al. "Learning skillful medium-range global weather forecasting." *Science* (2023). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.science.org/doi/10.1126/science.adi2336)

#### 1.5.3 Molecular & Biological World Models

- **AlphaFold 3** — Abramson, J. et al. "Accurate structure prediction of biomolecular interactions with AlphaFold 3." *Nature* (2024). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/s41586-024-07487-w)
  > Generative diffusion-based world model of molecular interactions and protein structures.

[⬆ Back to Top](#-table-of-contents)

---

## 2 · 🏗️ Representational World Models

> Representational world models learn **structured internal state representations** without necessarily generating pixel-faithful observations. The emphasis is on encoding abstract, task-relevant features sufficient for planning and prediction.

---

### 2.1 Latent Dynamics Models (RSSM / Dreamer Family)

> Separate the world into deterministic and stochastic latent components; predict future latent states without decoding to pixels.

| Model | Venue | Key Contribution | Links |
|-------|-------|-----------------|-------|
| **PlaNet** | ICML 2019 | First RSSM; cross-entropy method planning in latent space | [![arXiv](https://img.shields.io/badge/arXiv-1811.04551-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1811.04551) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/google-research/planet) |
| **Dreamer** | ICLR 2020 | Latent actor-critic; learn policy entirely in imagination | [![arXiv](https://img.shields.io/badge/arXiv-1912.01603-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01603) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamer) |
| **DreamerV2** | ICLR 2021 | Discrete latents via categorical distributions | [![arXiv](https://img.shields.io/badge/arXiv-2010.02193-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2010.02193) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv2) |
| **DreamerV3** | 2023 | Single hyperparameter set; generalizes across 7 domains incl. Minecraft | [![arXiv](https://img.shields.io/badge/arXiv-2301.04104-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv3) |
| **RSSM+** | NeurIPS 2022 | Improved stochastic latent transitions | [![arXiv](https://img.shields.io/badge/arXiv-2209.14326-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2209.14326) |
| **TD-MPC** | ICML 2022 | Temporal-difference learning + MPC in latent space | [![arXiv](https://img.shields.io/badge/arXiv-2203.04955-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2203.04955) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc) |
| **TD-MPC2** | ICLR 2024 | Scales to 104 tasks; shared latent space | [![arXiv](https://img.shields.io/badge/arXiv-2310.16828-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc2) |
| **TWM** | ICLR 2023 | Transformer-based world model replacing RNN | [![arXiv](https://img.shields.io/badge/arXiv-2301.03044-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.03044) |
| **IRIS** | ICLR 2023 | Tokenize frames with discrete autoencoders; GPT-based dynamics | [![arXiv](https://img.shields.io/badge/arXiv-2209.00588-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2209.00588) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/eloialonso/iris) |
| **STORM** | NeurIPS 2023 | Efficient transformer-based latent dynamics | [![arXiv](https://img.shields.io/badge/arXiv-2310.09615-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.09615) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/weipu-zhang/STORM) |
| **DreamerPro** | ICML 2022 | Prototypical self-supervised objectives for sparse-reward tasks | [![arXiv](https://img.shields.io/badge/arXiv-2110.14565-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2110.14565) |
| **Iso-Dream** | NeurIPS 2022 | Disentangles controllable from non-controllable dynamics | [![arXiv](https://img.shields.io/badge/arXiv-2205.13817-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2205.13817) |

---

### 2.2 Joint Embedding Predictive Architectures (JEPA)

> Instead of generating observations, JEPA models predict abstract *representations* of future states. Inspired by LeCun's energy-based formulation.

- **I-JEPA** — Assran, M. et al. "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture." *CVPR* 2023. [![arXiv](https://img.shields.io/badge/arXiv-2301.08243-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.08243) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/ijepa)
  > Predicts context representations of masked image patches; strong linear-probe performance without pixel decoding.

- **V-JEPA** — Bardes, A. et al. "V-JEPA: Latent Video Prediction for Visual Representation and World Modeling." *ICLR* 2024 (Spotlight). [![arXiv](https://img.shields.io/badge/arXiv-2404.08471-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.08471) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/jepa)
  > Extends JEPA to video; predicts abstract future representations of masked video volumes.

- **V-JEPA 2** — Assran, M. et al. "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning." *arXiv* 2506.09985 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.09985-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09985) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ai.meta.com/research/vjepa/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/vjepa2)
  > **Milestone.** Pretrains on >1M hours of video, enables zero-shot robotic manipulation via latent action-conditioned planning with <62h robot video.

- **MC-JEPA** — "MC-JEPA: A Joint-Embedding Predictive Architecture for Self-Supervised Learning of Motion and Content Features." *arXiv* 2307.12698 (2023). [![arXiv](https://img.shields.io/badge/arXiv-2307.12698-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2307.12698)

- **A-JEPA** — "Audio-Visual Jointly Embedding Predictive Architecture." *arXiv* 2311.05090 (2023). [![arXiv](https://img.shields.io/badge/arXiv-2311.05090-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.05090)

- **AD-L-JEPA** — (see §1.2.3) JEPA for LiDAR self-supervised learning in autonomous driving.

- **Hierarchical JEPA** — "Hierarchical World Models as Visual Whole-Body Humanoid Controllers." *arXiv* 2405.18418 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2405.18418-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.18418)
  > Multi-level JEPA world models controlling full humanoid body; imagination-based whole-body planning.

---

### 2.3 Occupancy & BEV Representations

> Structured 3D world representations encoding semantic and geometric information for autonomous agents.

- **BEVWorld** — "BEVWorld: A Multimodal World Model for Autonomous Driving via Unified BEV Latent Space." *arXiv* 2407.05679 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2407.05679-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.05679) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/zympsyche/BevWorld)

- **OccSora** — "OccSora: 4D Occupancy Generation Models as World Simulators for Autonomous Driving." *arXiv* 2405.20337 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2405.20337-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.20337) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wzzheng/OccSora)

- **Think2Drive** — "Think2Drive: Efficient Reinforcement Learning by Thinking in Latent World Model for Quasi-Realistic Autonomous Driving." *arXiv* 2402.16720 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2402.16720-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.16720)

- **HoloDrive** — "HoloDrive: Holistic 2D-3D Multi-Modal Street Scene Generation for Autonomous Driving." *arXiv* 2411.18963 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2411.18963-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.18963)

- **Enhancing Physical Consistency** — "Enhancing Physical Consistency in Lightweight World Models." *arXiv* 2509.12437 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2509.12437-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.12437)

---

### 2.4 Multimodal & Acoustic Sensory World Models

- **A Survey on World Models Grounded in Acoustic Physical Information** — *arXiv* 2506.13833 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.13833-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13833)

- **On Memory: A Comparison of Memory Mechanisms in World Models** — *arXiv* 2512.06983 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2512.06983-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.06983)

---

### 2.5 Symbolic & Knowledge-Graph World Models

- **Knowledge Graphs as World Models for Autonomous Vehicles** — "Knowledge Graphs as World Models for Semantic Material-Aware Obstacle Handling in Autonomous Vehicles." *arXiv* 2503.21232 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.21232-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.21232)

- **Grounding Language in World Models** — Andreas, J. et al. "Grounding Language in World Models." *ACL* 2022. [![arXiv](https://img.shields.io/badge/arXiv-2109.01800-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2109.01800)

[⬆ Back to Top](#-table-of-contents)

---

## 3 · 🤖 Agentic World Models

> Agentic world models combine a world foundation model with an agentic decision-making framework. They enable an AI system to **act**, **plan**, and **reason** using its internal world model — essentially the realization of LeCun's autonomous machine intelligence architecture.

---

### 3.1 Model-Based Reinforcement Learning (MBRL)

| Model | Venue | Architecture | Domain | Links |
|-------|-------|-------------|--------|-------|
| **MBPO** | NeurIPS 2019 | Ensemble of MLPs; Dyna-style rollouts | Continuous control | [![arXiv](https://img.shields.io/badge/arXiv-1906.08253-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1906.08253) |
| **PETS** | NeurIPS 2018 | Probabilistic ensemble + CEM | Control | [![arXiv](https://img.shields.io/badge/arXiv-1805.12114-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1805.12114) |
| **MuZero** | Nature 2020 | MCTS with learned value & dynamics | Board/Atari | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/s41586-020-03051-4) |
| **EfficientZero** | NeurIPS 2021 | MuZero + self-supervised consistency | Atari | [![arXiv](https://img.shields.io/badge/arXiv-2111.00210-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2111.00210) |
| **Dreamer** | ICLR 2020 | RSSM + actor-critic in imagination | Atari/Control | [![arXiv](https://img.shields.io/badge/arXiv-1912.01603-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01603) |
| **DreamerV3** | 2023 | Discrete RSSM; universal | Multi-domain | [![arXiv](https://img.shields.io/badge/arXiv-2301.04104-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) |
| **TD-MPC2** | ICLR 2024 | Latent MPC, 104 tasks | Continuous | [![arXiv](https://img.shields.io/badge/arXiv-2310.16828-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) |
| **DIAMOND** | NeurIPS 2024 | Diffusion WM + RL | Atari | [![arXiv](https://img.shields.io/badge/arXiv-2405.12399-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.12399) |
| **Think2Drive** | 2024 | BEV latent MBRL | Driving | [![arXiv](https://img.shields.io/badge/arXiv-2402.16720-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.16720) |
| **InDRiVE** | 2025 | Curiosity-driven generalized WM | Driving | [![arXiv](https://img.shields.io/badge/arXiv-2503.05573-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.05573) |

---

### 3.2 World-Model-Guided Planning

- **PWM (Policy World Model)** — "From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction." *arXiv* 2510.19654 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.19654-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.19654) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/6550Zhao/Policy-World-Model)

- **AdaWM** — "AdaWM: Adaptive World Model based Planning for Autonomous Driving." *arXiv* 2501.13072 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2501.13072-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.13072)
  > Adaptive world model that adjusts planning horizon based on uncertainty.

- **Dream to Drive** — "Dream to Drive: Model-Based Vehicle Control Using Analytic World Models." *arXiv* 2502.10012 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2502.10012-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.10012)

- **Dream to Drive with Predictive Individual World Model** — *arXiv* 2501.16733 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2501.16733-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.16733) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/gaoyinfeng/PIWM)

- **Hierarchical Planning with Latent World Models** — *arXiv* 2604.03208 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.03208-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.03208)
  > Multi-timescale latent planning for long-horizon embodied control without exploding search cost.

- **World4Drive** — "World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model." *arXiv* 2507.00603 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.00603-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.00603) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/ucaszyp/World4Drive)

- **Doe-1** — "Doe-1: Closed-Loop Autonomous Driving with Large World Model." *arXiv* 2412.09627 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.09627-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.09627) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wzzheng.net/Doe/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wzzheng/Doe)

- **Raw2Drive** — "Raw2Drive: Reinforcement Learning with Aligned World Models for End-to-End Autonomous Driving." *arXiv* 2505.16394 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.16394-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.16394)

- **Dream4Drive** — "Rethinking Driving World Model as Synthetic Data Generator for Perception Tasks." *arXiv* 2510.19195 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.19195-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.19195) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wm-research.github.io/Dream4Drive/)

- **Grounded World Model for Semantically Generalizable Planning** — *arXiv* 2604.11751 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.11751-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.11751)

---

### 3.3 Closed-Loop Simulation & Evaluation

- **WorldGym** — "WorldGym: World Model as An Environment for Policy Evaluation." *arXiv* 2506.00613 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.00613-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.00613) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-model-eval.github.io/)
  > Uses an action-conditioned world model as an evaluation environment for real-robot policies.

- **WorldMark** — "WorldMark: A Unified Benchmark Suite for Interactive Video World Models." *arXiv* 2604.21686 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.21686-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.21686)
  > New benchmark suite targeting interactive video world models rather than passive generation only.

- **RoboWM-Bench** — "RoboWM-Bench: A Benchmark for Evaluating World Models in Robotic Manipulation." *arXiv* 2604.19092 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.19092-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19092)
  > Fills a real gap in manipulation-oriented world-model evaluation.

- **dWorldEval** — "dWorldEval: Scalable Robotic Policy Evaluation via Discrete Diffusion World Model." *arXiv* 2604.22152 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.22152-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.22152)

- **Ego-Centric Learning of Communicative World Models** — *arXiv* 2506.08149 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.08149-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.08149)

---

### 3.4 Multi-Agent World Models

- **MultiWorld** — Wu, H. et al. "MultiWorld: Scalable Multi-Agent Multi-View Video World Models." *arXiv* 2604.18564 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.18564-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.18564) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/CIntellifusion/MultiWorld)
  > Unified framework for multi-agent, multi-view world modeling; introduces a Multi-Agent Condition Module and Global State Encoder for precise controllability and cross-view consistency.

- **SceneDiffuser++** — (see §1.2.4) City-scale traffic simulation with multi-agent world model.
- **EOT-WM** — (see §1.2.2) Jointly models ego and other vehicle trajectories.
- **InDRiVE** — (see §3.1) Curiosity-driven exploration in multi-agent driving world model.
- **Communicative World Models** — (see §3.3) Ego-centric communicative modeling of other agents.

---

### 3.5 🛡️ Safety-Aware Agentic World Models

- **VL-SAFE** — "VL-SAFE: Vision-Language Guided Safety-Aware Reinforcement Learning with World Models for Autonomous Driving." *arXiv* 2505.16377 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.16377-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.16377) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ys-qu.github.io/vlsafe-website/)
  > Language-conditioned safety constraints integrated into world-model-based RL for driving.

- **World Models: The Safety Perspective** — *ISSREW* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2411.07690-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.07690)
  > Position/survey: how to make world models safer across embodied AI and autonomous driving.

- **The Safety Challenge of World Models for Embodied AI Agents** — *arXiv* 2510.05865 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.05865-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.05865)
  > Comprehensive review of safety risks introduced by using world models in agentic embodied systems.

- **Progressive Robustness-Aware World Models** — *techrXiv* 2025. [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://doi.org/10.36227/techrxiv.176523308.84756413/v1) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/MoyangSensei/AwesomeRobustDWM)

---

### 3.6 LLM / VLM Agents with World Models

- **Inner Monologue** — Huang, W. et al. "Inner Monologue: Embodied Reasoning through Planning with Language Models." *CoRL* 2022. [![arXiv](https://img.shields.io/badge/arXiv-2207.05608-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2207.05608)

- **SayCan** — Ahn, M. et al. "Do As I Can, Not As I Say: Grounding Language in Robotic Affordances." *CoRL* 2022. [![arXiv](https://img.shields.io/badge/arXiv-2204.01691-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2204.01691)

- **Is Sora a World Simulator?** — "Is Sora a World Simulator? A Comprehensive Survey on General World Models and Beyond." *arXiv* 2405.03520 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2405.03520-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.03520) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/GigaAI-research/General-World-Models-Survey)

- **Agentic World Modeling** — "Agentic World Modeling: Emergence, Laws, and the Path to Artificial Superintelligence." *arXiv* 2604.22748 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.22748-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.22748)
  > Systems-level view of agentic world modeling; articulates emergent laws and scaling toward ASI.

- **World Models in AI: Like a Child** — *arXiv* 2503.15168 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.15168-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.15168)

[⬆ Back to Top](#-table-of-contents)

---

## 📚 Surveys & Position Papers

### General Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **Is Sora a World Simulator?** | arXiv 2024 | Video generation & general world models | [![arXiv](https://img.shields.io/badge/arXiv-2405.03520-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.03520) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/GigaAI-research/General-World-Models-Survey) |
| **Understanding World or Predicting Future?** | ACM 2025 | Comprehensive taxonomy | [![arXiv](https://img.shields.io/badge/arXiv-2411.14499-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.14499) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/World-Model) |
| **Agentic World Modeling** | arXiv 2026 | Agentic capabilities, laws, and systems view | [![arXiv](https://img.shields.io/badge/arXiv-2604.22748-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.22748) |
| **Human Cognition in Machines** | arXiv 2026 | Unified cognitive perspective on world models | [![arXiv](https://img.shields.io/badge/arXiv-2604.16592-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.16592) |
| **Video Generation Models as World Models** | arXiv 2026 | Efficient paradigms and algorithms | [![arXiv](https://img.shields.io/badge/arXiv-2603.28489-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.28489) |
| **3D and 4D World Modeling: A Survey** | arXiv 2025 | 3D/4D scene generation | [![arXiv](https://img.shields.io/badge/arXiv-2509.07996-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.07996) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/worldbench/survey) |
| **From 2D to 3D Cognition** | arXiv 2025 | General world models | [![arXiv](https://img.shields.io/badge/arXiv-2506.20134-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.20134) |
| **From Masks to Worlds** | arXiv 2025 | Hitchhiker's guide to world models | [![arXiv](https://img.shields.io/badge/arXiv-2510.20668-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.20668) |
| **World Models in AI: Like a Child** | arXiv 2025 | Developmental cognitive perspective | [![arXiv](https://img.shields.io/badge/arXiv-2503.15168-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.15168) |
| **Simulating the Visual World with AI** | arXiv 2025 | Roadmap for visual world modeling | [![arXiv](https://img.shields.io/badge/arXiv-2511.08585-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.08585) |
| **Physics Cognition in Video Generation** | arXiv 2025 | Physical plausibility in generative models | [![arXiv](https://img.shields.io/badge/arXiv-2503.21765-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.21765) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation) |

### Embodied AI Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **World Models for Embodied AI** | arXiv 2025 | Comprehensive embodied AI survey | [![arXiv](https://img.shields.io/badge/arXiv-2510.16732-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.16732) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Li-Zn-H/AwesomeWorldModels) |
| **Embodied World Models: Physical Simulation** | arXiv 2025 | Physical simulators + world models | [![arXiv](https://img.shields.io/badge/arXiv-2507.00917-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.00917) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NJU3DV-LoongGroup/Embodied-World-Models-Survey) |
| **Embodied AI Agents: Modeling the World** | arXiv 2025 | Agent-centric perspective | [![arXiv](https://img.shields.io/badge/arXiv-2506.22355-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.22355) |
| **Aligning Cyber Space with Physical World** | TMECH 2025 | Embodied AI & Cyberspace | [![arXiv](https://img.shields.io/badge/arXiv-2407.06886-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.06886) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List) |
| **Modeling the Mental World for Embodied AI** | arXiv 2026 | Mental-world modeling for embodied agents | [![arXiv](https://img.shields.io/badge/arXiv-2601.02378-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.02378) |
| **Physical Grounding in World Models** | arXiv 2026 | Imperative of physical grounding | [![arXiv](https://img.shields.io/badge/arXiv-2601.15533-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.15533) |
| **A Step Toward World Models: Robotic Manipulation** | arXiv 2025 | Manipulation-focused survey | [![arXiv](https://img.shields.io/badge/arXiv-2511.02097-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.02097) |
| **Do World Action Models Generalize Better than VLAs?** | arXiv 2026 | Empirical robustness study | [![arXiv](https://img.shields.io/badge/arXiv-2603.22078-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.22078) |

### Autonomous Driving Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **Role of World Models in Autonomous Driving** | arXiv 2025 | Comprehensive AD survey | [![arXiv](https://img.shields.io/badge/arXiv-2502.10498-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.10498) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/LMD0311/Awesome-World-Model) |
| **World Models for AD: An Initial Survey** | arXiv 2024 | Initial taxonomy | [![arXiv](https://img.shields.io/badge/arXiv-2403.02622-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.02622) |
| **A Survey of World Models for AD** | arXiv 2025 | Recent AD world models | [![arXiv](https://img.shields.io/badge/arXiv-2501.11260-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.11260) |
| **Video Generation & World Models in AD** | arXiv 2024 | Interplay of generation and driving | [![arXiv](https://img.shields.io/badge/arXiv-2411.02914-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.02914) |
| **Progressive Robustness-Aware WMs in AD** | techrXiv 2025 | Robustness perspective | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://doi.org/10.36227/techrxiv.176523308.84756413/v1) |

### Safety & Theory

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **World Models: The Safety Perspective** | ISSREW 2024 | Safety risks | [![arXiv](https://img.shields.io/badge/arXiv-2411.07690-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.07690) |
| **Safety Challenge of WMs for Embodied AI** | arXiv 2025 | Embodied safety review | [![arXiv](https://img.shields.io/badge/arXiv-2510.05865-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.05865) |
| **Trinity of Consistency** | arXiv 2026 | Modality-spatial-temporal definition principle | [![arXiv](https://img.shields.io/badge/arXiv-2602.23152-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.23152) |
| **Mechanistic View on Video Generation as WMs** | arXiv 2026 | State-and-dynamics lens on video world models | [![arXiv](https://img.shields.io/badge/arXiv-2601.17067-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.17067) |
| **Survey on Model-Based RL** | Springer 2023 | MBRL foundations | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://link.springer.com/article/10.1007/s11432-022-3696-5) |
| **On Memory in World Models** | arXiv 2025 | Memory mechanism comparison | [![arXiv](https://img.shields.io/badge/arXiv-2512.06983-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.06983) |
| **Acoustic World Models Survey** | arXiv 2025 | Sound-grounded world modeling | [![arXiv](https://img.shields.io/badge/arXiv-2506.13833-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13833) |

[⬆ Back to Top](#-table-of-contents)

---

## 📊 Benchmarks & Evaluation

| Benchmark | Domain | Metric Focus | Links |
|-----------|--------|-------------|-------|
| **Atari 100k** | Game | Sample efficiency | [![arXiv](https://img.shields.io/badge/arXiv-2012.15810-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2012.15810) |
| **DMControl Suite** | Continuous control | Task performance | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/google-deepmind/dm_control) |
| **nuScenes** | Autonomous driving | Perception + prediction | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.nuscenes.org/) |
| **CARLA** | Autonomous driving | Closed-loop simulation | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://carla.org/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/carla-simulator/carla) |
| **ProcGen** | Generalization | Procedurally generated environments | [![arXiv](https://img.shields.io/badge/arXiv-1912.01588-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1912.01588) |
| **ACT-Bench** | Driving | Action controllability of driving world models | [![arXiv](https://img.shields.io/badge/arXiv-2412.05337-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.05337) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://turingmotors.github.io/actbench/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/turingmotors/ACT-Bench) |
| **WorldModelBench** | General | Comprehensive world model evaluation | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldmodelbench.github.io/) |
| **DrivingGen** | Driving | Realism, controllability, temporal coherence | [![arXiv](https://img.shields.io/badge/arXiv-2601.01528-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.01528) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://drivinggen-bench.github.io/) |
| **WorldSimBench** | Video world models | Video generation as world simulation | [![arXiv](https://img.shields.io/badge/arXiv-2410.18072-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.18072) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://iranqin.github.io/WorldSimBench.github.io/) |
| **WorldArena** | Embodied | Perception and functional utility under embodiment | [![arXiv](https://img.shields.io/badge/arXiv-2602.08971-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08971) |
| **MIND** | Interactive video | Memory consistency and action control | [![arXiv](https://img.shields.io/badge/arXiv-2602.08025-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08025) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/CSU-JPG/MIND) |
| **Omni-WorldBench** | Interactive video | Interaction-centric comprehensive evaluation | [![arXiv](https://img.shields.io/badge/arXiv-2603.22212-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.22212) |
| **WorldMark** | Interactive video | Unified interactive video WM benchmark | [![arXiv](https://img.shields.io/badge/arXiv-2604.21686-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.21686) |
| **WorldLens** | Driving | Full-spectrum driving WM evaluation | [![arXiv](https://img.shields.io/badge/arXiv-2512.10958-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.10958) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldbench.github.io/worldlens) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/worldbench/WorldLens) |
| **RoboWM-Bench** | Robotics | Manipulation-oriented world model evaluation | [![arXiv](https://img.shields.io/badge/arXiv-2604.19092-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19092) |
| **OpenDriveLab WM Track** | Driving | CVPR 2025 world model challenge | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://opendrivelab.com/challenge25/#1x-wm) |
| **1x World Model Challenge** | Robotics | Real-world robot video prediction | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.1x.tech/discover/1x-world-model-challenge) |
| **Minecraft Diamond (DreamerV3)** | Embodied | Hierarchical long-horizon task completion | [![arXiv](https://img.shields.io/badge/arXiv-2301.04104-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.04104) |

[⬆ Back to Top](#-table-of-contents)

---

## 🔬 Workshops & Challenges

- **Workshop on 4D World Models: Bridging Generation and Reconstruction @ CVPR 2026** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ivl.cs.brown.edu/4dworldmodels/)
- **2nd Workshop on World Models @ ICLR 2026** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sites.google.com/view/iclr-2026-workshop-world-model/home)
- **Workshop on World Modeling @ Mila 2026** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-model-mila.github.io/)
- **WorldModelBench @ CVPR 2025** — 1st Workshop on Benchmarking World Models. [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldmodelbench.github.io/)
- **OpenDriveLab World Model Track @ CVPR 2025** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://opendrivelab.com/challenge25/#1x-wm)
- **OpenDriveLab Predictive World Model Track @ CVPR 2024** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://opendrivelab.com/challenge24/#predictive_world_model)
- **Argoverse 3D Occupancy Forecasting @ CVPR 2023** — [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://eval.ai/web/challenges/challenge-page/1977/overview)

[⬆ Back to Top](#-table-of-contents)

---

## 🌐 Community Resources & Open Repositories

### 🗂️ Curated Lists & Awesome Repos

| Resource | Focus | Links |
| --- | --- | --- |
| **Awesome World Models** (knightnemo) | Broad cross-domain curation | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/knightnemo/Awesome-World-Models) |
| **Awesome World Models** (leofan90) | General video generation, embodied AI, AD | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/leofan90/Awesome-World-Models) |
| **Awesome World Model for Autonomous Driving** | Driving-specific papers, benchmarks, challenges | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/LMD0311/Awesome-World-Model) |
| **Awesome World Models for Robotics** | Robotics, embodied AI, VLA-adjacent work | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/Li-Zn-H/AwesomeWorldModels) |
| **Awesome-From-Video-Generation-to-World-Model** | Curated trajectory from video gen to world modeling | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/ziqihuangg/Awesome-From-Video-Generation-to-World-Model) |
| **Awesome-Physical-AI** | Physical AI: VLA models, world models, embodied robotic foundations | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/keon/awesome-physical-ai) |
| **World Model Survey Repo (Tsinghua FIB)** | Survey companion: understanding world or predicting future? | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/World-Model) |
| **Awesome Physics Cognition-based Video Generation** | Physics plausibility in video world models | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation) |
| **Awesome Robust Driving World Models** | Robustness-focused driving world models | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/MoyangSensei/AwesomeRobustDWM) |
| **Embodied AI Paper List (HCPLab-SYSU)** | Comprehensive embodied AI + world model papers | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List) |
| **Embodied World Models Survey (NJU3DV)** | Physical simulation + world models for embodied AI | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/NJU3DV-LoongGroup/Embodied-World-Models-Survey) |

### 🛠️ Open Toolkits & Platforms

| Resource | Focus | Links |
| --- | --- | --- |
| **NVIDIA Cosmos** | World foundation model platform for Physical AI (robots + AD); open-weight under permissive license | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVIDIA/Cosmos) [![arXiv](https://img.shields.io/badge/arXiv-2501.03575-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.03575) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.nvidia.com/en-us/ai/cosmos/) |
| **NVIDIA Cosmos-Predict2.5** | Next-gen Cosmos WFM: flow-based, unifies Text/Image/Video2World; open checkpoints | [![arXiv](https://img.shields.io/badge/arXiv-2511.00062-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.00062) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVIDIA/Cosmos) |
| **OpenDWM** | Open-source toolkit for driving world models (SenseTime) | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SenseTime-FVG/OpenDWM) |
| **Matrix-Game** | Open interactive game world model stack (SkyworkAI) | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SkyworkAI/Matrix-Game) |
| **HY-World 2.0** | Open 3D world generation / simulation stack (Tencent) | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Tencent-Hunyuan/HY-World-2.0) |
| **HunyuanWorld 1.0** | Text/image-to-3D explorable world generation (Tencent) | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0) |
| **DreamerV3** | Reference implementation of the Dreamer family | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv3) |
| **TD-MPC2** | Open-source TD-MPC2 codebase, 104 tasks | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc2) |
| **V-JEPA 2** | Meta's latest JEPA world model for video understanding and robotic planning | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/vjepa2) |
| **I-JEPA / V-JEPA** | Meta's original JEPA implementations | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/jepa) |
| **Open-Oasis** | Open reproduction of Oasis Minecraft world model | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/etched-ai/open-oasis) |
| **EnerVerse-AC** | AgiBot's action-conditional embodied world model | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/AgibotTech/EnerVerse-AC) |
| **MultiWorld** | Scalable multi-agent multi-view video world model | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/CIntellifusion/MultiWorld) |
| **WorldLens** | WorldLens benchmark dataset + leaderboard | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/worldbench/WorldLens) |
| **DIAMOND** | Diffusion-based Atari world model + RL agent | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/eloialonso/diamond) |
| **LingBot-World** | Open-source general world simulator with real-time interactivity | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/robbyant/lingbot-world) [![arXiv](https://img.shields.io/badge/arXiv-2601.20540-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.20540) |

### 📊 HuggingFace Leaderboards & Datasets

| Resource | Focus | Links |
| --- | --- | --- |
| **WorldLens Leaderboard** | Full-spectrum driving world model evaluation | [![HuggingFace](https://img.shields.io/badge/🤗-Leaderboard-FFD21E)](https://huggingface.co/spaces/worldbench/WorldLens) |
| **WorldModelBench Dataset** | Benchmark dataset for evaluating video generation as world models | [![HuggingFace](https://img.shields.io/badge/🤗-Dataset-FFD21E)](https://huggingface.co/datasets/Efficient-Large-Model/worldmodelbench) |
| **WorldArena Leaderboard** | Embodied world model evaluation (perception + function) | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-arena.ai) |
| **V-JEPA 2 Model Collection** | Official Meta V-JEPA 2 checkpoints (ViT-L/H/G) | [![HuggingFace](https://img.shields.io/badge/🤗-Models-FFD21E)](https://huggingface.co/collections/facebook/v-jepa-2-6841bad8413014e185b497a6) |

[⬆ Back to Top](#-table-of-contents)

---

## 📝 Curated Blogs & Industry Writing

> Authoritative English and Chinese writing on world models — from key researchers, industry labs, and science journalists. A good reading path before diving into the papers.

### 🇺🇸 English — Research Labs & Industry

| Title | Author / Source | Year | Link |
|-------|----------------|------|------|
| **World Models** (original explainer site) | David Ha & Jürgen Schmidhuber | 2018 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://worldmodels.github.io/) |
| **A Path Towards Autonomous Machine Intelligence** | Yann LeCun, OpenReview | 2022 | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://openreview.net/pdf?id=BZ5a1r-kVsf) |
| **Introducing GAIA-1** | Wayve Blog | 2023 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://wayve.ai/thinking/introducing-gaia1/) |
| **GAIA-2: Pushing the Boundaries of Generative World Models** | Wayve Blog | 2025 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://wayve.ai/thinking/gaia-2) |
| **Video generation models as world simulators (Sora)** | OpenAI | 2024 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://openai.com/research/video-generation-models-as-world-simulators) |
| **Genie 2: A large-scale foundation world model** | Google DeepMind | 2024 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/) |
| **Genie 3: A new frontier for world models** | Google DeepMind | 2025 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) |
| **Introducing V-JEPA 2** | Meta AI | 2025 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://ai.meta.com/research/vjepa/) |
| **Cosmos World Foundation Models** | NVIDIA Developer Blog | 2025 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://developer.nvidia.com/blog/cosmos-world-foundation-model-platform-for-physical-ai/) |
| **SIMA: A generalist AI agent for 3D virtual environments** | Google DeepMind | 2024 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/) |
| **World Models: Computing the Uncomputable** | Not Boring (Packy McCormick) | 2026 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://www.notboring.co/p/world-models) |
| **World Models Are the Next Big Thing In AI** | Built In | 2026 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://builtin.com/articles/ai-world-models-explained) |
| **The Path to Real-Time Worlds and Why It Matters** | Over.world | 2025 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://over.world/blog/the-path-to-real-time-worlds-and-why-it-matters) |
| **Deep Dive into Yann LeCun's JEPA** | Rohit Bandaru | 2024 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://rohitbandaru.github.io/blog/JEPA-Deep-Dive/) |
| **World Models Race 2026** | Introl Blog | 2026 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://introl.com/blog/world-models-race-agi-2026) |
| **World Models Reading List: Papers You Actually Need** | Graison Thomas, Medium | 2025 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://medium.com/@graison/world-models-reading-list-the-papers-you-actually-need-in-2025-882f02d758a9) |
| **Beyond Transformers: The Rise of World Models in AI** | Medium | 2025 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://medium.com/follower-booster-hub/beyond-transformers-the-rise-of-world-models-in-ai-98a40a1a24fc) |
| **World Models: The Next Leap Beyond LLMs** | Graison Thomas, Medium | 2026 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://medium.com/@graison/world-models-the-next-leap-beyond-llms-012504a9c1e7) |

### 🇨🇳 Chinese — 知乎 / CSDN / Academic

| Title | Author / Source | Year | Link |
|-------|----------------|------|------|
| **理解世界还是预测未来？清华大学世界模型全面综述** | 清华 FIB Lab / 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/1967697137530832733) |
| **具身智能领域最新世界模型综述：250篇paper梳理主流框架** | 具身智能之心 / 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/1967159024907690109) |
| **从专用模型到通用模型：2025年的最后一篇世界模型综述** | 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/1988591389060124728) |
| **在2025年年初聊一下世界模型（上）** | 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/25896058607) |
| **在2025年年初聊一下世界模型（下）** | 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/26427854460) |
| **世界模型有望带来机器人与具身智能的下一个"奇点时刻"？** | 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/1971220966181934275) |
| **世界模型崛起：2025年虚拟世界构建的技术前沿** | CSDN | 2025 | [![Blog](https://img.shields.io/badge/CSDN-Post-FC5531?logo=csdn&logoColor=white)](https://blog.csdn.net/yuntongliangda/article/details/148407012) |
| **理解视觉 or 预测未来？到底什么是World Models？** | CSDN | 2025 | [![Blog](https://img.shields.io/badge/CSDN-Post-FC5531?logo=csdn&logoColor=white)](https://blog.csdn.net/CV_Autobot/article/details/145695384) |
| **ACM综述：理解世界还是预测未来？（清华FIB Lab官方解读）** | 清华FIB Lab 官网 | 2025 | [![Blog](https://img.shields.io/badge/Official-Post-4C566A?logo=readthedocs&logoColor=white)](https://fi.ee.tsinghua.edu.cn/news/20/) |

[⬆ Back to Top](#-table-of-contents)

---

## 📖 Citation

If you find this repository useful in your research, please consider citing key foundational works:

```bibtex
@misc{lecun2022path,
  title={A Path Towards Autonomous Machine Intelligence},
  author={LeCun, Yann},
  year={2022},
  howpublished={OpenReview}
}

@article{ha2018world,
  title={World Models},
  author={Ha, David and Schmidhuber, J{\"u}rgen},
  journal={arXiv preprint arXiv:1803.10122},
  year={2018}
}

@article{hafner2023dreamerv3,
  title={Mastering Diverse Domains with World Models},
  author={Hafner, Danijar and Lillicrap, Timothy and Norouzi, Mohammad and Ba, Jimmy},
  journal={arXiv preprint arXiv:2301.04104},
  year={2023}
}
```

---

## 🤝 Contribution Guide

PRs are welcome. The preferred entry format is:

```markdown
- **Paper / Project Name** (Year) `Task` `Architecture`
  One-sentence reason this entry matters.
  [![arXiv](https://img.shields.io/badge/arXiv-XXXX.XXXXX-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/XXXX.XXXXX)
  [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/...)
  [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://...)
```

**Badge conventions:**
- `arXiv` — papers on arxiv.org (include full arXiv ID in badge label)
- `GitHub` — open-source code
- `Project` — project webpage
- `Blog` — blog post or industry write-up
- `Paper` — non-arXiv paper links

[⬆ Back to Top](#-table-of-contents)
