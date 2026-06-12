<div align="center">

# 🌍 Awesome World Models

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/OpenEnvision/Awesome-World-Models?style=social)](https://github.com/OpenEnvision/Awesome-World-Models/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/OpenEnvision/Awesome-World-Models/pulls)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-blue.svg)](https://github.com/OpenEnvision/Awesome-World-Models/blob/main/LICENSE)
[![Last Updated](https://img.shields.io/badge/Updated-June%202026-green.svg)](https://github.com/OpenEnvision/Awesome-World-Models/commits/main/README.md)

**A scope-aware, paper-first curated list of world model research.**
Organized by paradigm first, then by domain, representation, and downstream use.

*Latest curation pass verified against arXiv on **June 12, 2026**.*

*Badge policy: whenever a paper has an arXiv preprint, show an **arXiv** badge; whenever official code is public, show a **GitHub** badge.*

> This repository prioritizes taxonomic clarity, primary-source links, and reproducible resources over raw volume alone.

</div>

| Internal & External "World Model" | Historical Wave Map |
| :---: | :---: |
| ![internal & external world model](image/lecun_wm.png) | ![Historical wave map](image/world_qa.png) |

---

## ⭐ Why Star This Repo?

- **Taxonomy-aware, not a paper dump.** Entries are organized by research paradigm, then by domain, representation, and downstream use.
- **Primary-source first.** arXiv, official project pages, conference pages, datasets, leaderboards, and official code are prioritized over secondary commentary.
- **Cross-domain coverage.** The list connects generative world models, representational world models, agentic planning, embodied AI, robotics, autonomous driving, 3D/4D scenes, science, and benchmarks.
- **Maintained for recency.** The latest curation pass was checked against arXiv on **June 8, 2026**, with recent 2026 additions distributed throughout the taxonomy.

## 🚀 Start Here

| If you are interested in... | Start with |
| --- | --- |
| The definition and scope of world models | [Definition and Scope](#definition-and-scope), [Taxonomic Overview](#-taxonomic-overview) |
| Classic foundations and cognitive origins | [Mind World Models](#0--mind-world-models--biological-origins--foundational-definitions), [Latent Dynamics Models](#21-latent-dynamics-models-rssm--dreamer-family) |
| Video, games, and interactive simulation | [Game & Interactive World Simulation](#11-game--interactive-world-simulation), [General Video World Models](#16-general-video-world-models--rollout-backbones) |
| Autonomous driving world models | [Autonomous Driving — Generative](#12-autonomous-driving--generative), [Occupancy & BEV Representations](#23-occupancy--bev-representations), [Closed-Loop Simulation & Evaluation](#33-closed-loop-simulation--evaluation) |
| Robotics, VLA, and World Action Models | [Embodied AI & Robotics](#13-embodied-ai--robotics--generative), [VLA & WAM](#134-world-model-based-vision-language-action-vla--world-action-models-wam), [World-Model-Guided Planning](#32-world-model-guided-planning) |
| Benchmarks, datasets, and open toolkits | [Benchmarks & Evaluation](#-benchmarks--evaluation), [Community Resources & Open Repositories](#-community-resources--open-repositories) |

---

<a id="definition-and-scope"></a>

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

### Inclusion heuristics

- Prefer **primary sources**: arXiv, conference/journal pages, official project pages, and official repositories.
- Prefer papers with an explicit **dynamics / future / intervention** component over static perception-only work.
- Include adjacent work only when it materially improves the understanding of world models:
  latent planning, JEPA-style predictive representation learning, embodied evaluation, or physically grounded simulation.
- When a paper is domain-specific, place it by its **main technical role** first and by domain second.

### Deliberate non-goals

- This is **not** a generic list of video generation, VLA, or autonomous driving papers.
- Pure perception, segmentation, or forecasting papers without a genuine world-modeling role are deprioritized.
- Blog posts and secondary commentary are included selectively and are kept separate from the paper taxonomy.

---

## 📖 Table of Contents

- [⭐ Why Star This Repo?](#-why-star-this-repo)
- [🚀 Start Here](#-start-here)
- [🗂️ Definition and Scope](#definition-and-scope)
- [🗺️ Taxonomic Overview](#-taxonomic-overview)
- [0 · 🧠 Mind World Models — Biological Origins](#0--mind-world-models--biological-origins--foundational-definitions)
- [1 · 🎨 Generative World Models](#1--generative-world-models)
  - [1.1 🎮 Game & Interactive World Simulation](#11-game--interactive-world-simulation)
  - [1.2 🚗 Autonomous Driving — Generative](#12-autonomous-driving--generative)
  - [1.3 🤖 Embodied AI & Robotics — Generative](#13-embodied-ai--robotics--generative)
  - [1.4 🌐 3D / 4D Scene Generation](#14-3d--4d-scene-generation)
  - [1.5 🔬 Scientific & Physical World Modeling](#15-scientific--physical-world-modeling)
  - [1.6 🎞️ General Video World Models & Rollout Backbones](#16-general-video-world-models--rollout-backbones)
- [2 · 🏗️ Representational World Models](#2--representational-world-models)
  - [2.1 Latent Dynamics Models (RSSM / Dreamer Family)](#21-latent-dynamics-models-rssm--dreamer-family)
  - [2.2 Joint Embedding Predictive Architectures (JEPA)](#22-joint-embedding-predictive-architectures-jepa)
  - [2.3 Occupancy & BEV Representations](#23-occupancy--bev-representations)
  - [2.4 Multimodal, Text, Acoustic & Memory-Oriented World Models](#24-multimodal-text-acoustic--memory-oriented-world-models)
  - [2.5 Symbolic & Knowledge-Graph World Models](#25-symbolic--knowledge-graph-world-models)
- [3 · 🤖 Agentic World Models](#3--agentic-world-models)
  - [3.1 Model-Based Reinforcement Learning (MBRL)](#31-model-based-reinforcement-learning-mbrl)
  - [3.2 World-Model-Guided Planning](#32-world-model-guided-planning)
  - [3.3 Closed-Loop Simulation & Evaluation](#33-closed-loop-simulation--evaluation)
  - [3.4 Multi-Agent World Models](#34-multi-agent-world-models)
  - [3.5 Safety-Aware Agentic World Models](#35-safety-aware-agentic-world-models)
  - [3.6 LLM / VLM / GUI Agents with World Models](#36-llm--vlm--gui-agents-with-world-models)
- [📚 Surveys & Position Papers](#-surveys--position-papers)
- [📊 Benchmarks & Evaluation](#-benchmarks--evaluation)
- [🔬 Workshops & Challenges](#-workshops--challenges)
- [🌐 Community Resources & Open Repositories](#-community-resources--open-repositories)
- [📝 Selected Technical Blogs & Reports](#-selected-technical-blogs--reports)
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
│   │   ├── 1.5 Scientific & Physical World Modeling
│   │   └── 1.6 General Video World Models & Rollout Backbones
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
│   ├── 2.4 Multimodal, Text, Acoustic & Memory-Oriented World Models
│   └── 2.5 Symbolic & Knowledge-Graph World Models
│
└── 3. Agentic World Models  [focus: acting, planning, decision-making]
    │   (= World Foundation Model + Agentic Framework)
    ├── 3.1 Model-Based Reinforcement Learning (MBRL)
    ├── 3.2 World-Model-Guided Planning
    ├── 3.3 Closed-Loop Simulation & Evaluation
    ├── 3.4 Multi-Agent World Models
    ├── 3.5 Safety-Aware Agentic World Models
    └── 3.6 LLM / VLM / GUI Agents with World Models
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
  > Real-time text-to-world generation at 24 fps / 720p with minutes of coherent play — a decisive shift from passive video generation to live interactive worlds.

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

- **MagicWorld** — "MagicWorld: Interactive Video World Exploration." *arXiv* 2511.18886 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2511.18886-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.18886)
  > Large-scale interactive video-world exploration with a RealWM-style dataset for real-world navigation control.

- **LIVE** — "LIVE: Long-horizon Interactive Video World Modeling." *arXiv* 2602.03747 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.03747-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.03747) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://junchao-cs.github.io/LIVE-demo/)
  > Focuses directly on long-horizon interactive consistency, a core bottleneck for usable video world models.

- **Infinite-World** — "Infinite-World: Scaling Interactive World Models to 1000-Frame Horizons via Pose-Free Hierarchical Memory." *arXiv* 2602.02393 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.02393-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02393) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://rq-wu.github.io/projects/infinite-world/index.html)
  > Pushes interactive world models to 1000+ frame horizons with pose-free hierarchical memory, targeting real-world long-term consistency beyond short synthetic rollouts.

- **SANA-WM** — "SANA-WM: Efficient Minute-Scale World Modeling with Hybrid Linear Diffusion Transformer." *arXiv* 2605.15178 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.15178-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.15178) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://nvlabs.github.io/Sana/WM/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVlabs/Sana)
  > Open 2.6B minute-scale video world model with 720p generation and 6-DoF camera control.

- **minWM** — "minWM: A Full-Stack Open-Source Framework for Real-Time Interactive Video World Models." *arXiv* 2605.30263 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.30263-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30263) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/shengshu-ai/minWM)
  > Converts bidirectional T2V/TI2V video foundation models into controllable, causal, few-step autoregressive world models for low-latency interaction.

- **From Zero to Hero / SPAWN** — "From Zero to Hero: Training-Free Custom Concept Spawning in World Models." *arXiv* 2606.02575 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.02575-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02575)
  > Adds training-free concept spawning for autoregressive interactive world models, improving user control over unseen regions.

- **SCOPE** — "SCOPE: Simulating Cross-game Operations in Playable Environments for FPS World Models." *arXiv* 2605.23345 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.23345-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.23345) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://z2tong.github.io/SCOPE/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/z2tong/SCOPE)
  > Expands playable FPS world models toward cross-game operation and transfer rather than one-map imitation.

- **WorldCraft** — "WorldCraft: Towards Controllable World Creation via Generative Machine." *arXiv* 2605.25077 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.25077-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.25077)
  > Focuses on controllable creation and editing of interactive worlds rather than passive action-conditioned playback.

- **DecMem** — "DecMem: Towards Minute-Long Consistent World Generation with Decoupled Memory." *arXiv* 2605.31336 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.31336-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.31336)
  > Separates short-term and long-term memory for minute-scale world generation consistency.

- **GIM-World** — "GIM-World: Geometry-Aware Implicit Memory for Video World Models." *arXiv* 2606.02436 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.02436-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02436)
  > Adds geometry-aware implicit memory to improve spatial consistency in video world rollouts.

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

- **Xiaomi EV World Model** — "Xiaomi EV World Model: A Joint World Model Integrating Reconstruction and Generation for Autonomous Driving." *arXiv* 2605.18137 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.18137-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.18137)
  > Integrates feed-forward 3D Gaussian reconstruction with online causal video generation for closed-loop simulation and data synthesis.

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

- **NVIDIA OmniDreams** — "NVIDIA OmniDreams: Real-Time Generative World Model for Closed-Loop Autonomous Vehicle Simulation." *arXiv* 2606.03159 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.03159-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.03159) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/sil/projects/omnidreams-blog/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nv-tlabs/omni-dreams)
  > Cosmos-based real-time, action-conditioned driving simulator for closed-loop policy evaluation under novel weather, traffic, and long-tail dynamics.

- **HorizonDrive** — "HorizonDrive: Self-Corrective Autoregressive World Model for Long-horizon Driving Simulation." *arXiv* 2605.11596 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.11596-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.11596) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://zcliangyue.github.io/HorizonDrive/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/zcliangyue/HorizonDrive)
  > Self-corrective autoregressive driving world model that extends teacher rollout supervision for long-horizon closed-loop simulation.

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

- **D$^2$-World** — "D$^2$-World: An Efficient World Model through Decoupled Dynamic Flow." *arXiv* 2411.17027 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2411.17027-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.17027)
  > Decouples dynamic voxel flow from static scene transformation, giving a fast occupancy forecasting baseline for predictive driving world modeling.

- **DLWM** — "DLWM: Dual Latent World Models enable Holistic Gaussian-centric Pre-training in Autonomous Driving." *CVPR* 2026. [![arXiv](https://img.shields.io/badge/arXiv-2604.00969-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.00969)
  > Splits latent dynamics for perception and planning rather than forcing one shared rollout space.

- **OccSim** — "OccSim: Multi-kilometer Simulation with Long-horizon Occupancy World Models." *arXiv* 2603.28887 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.28887-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.28887)
  > Pushes occupancy world models from clip-scale prediction toward open-ended, map-free, multi-kilometer traffic simulation.

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

- **OccDirector** — "OccDirector: Language-Guided Behavior and Interaction Generation in 4D Occupancy Space." *arXiv* 2604.22240 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.22240-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.22240)
  > Uses language to steer multi-agent behavior and interaction generation directly in 4D occupancy space, closing a gap between text control and traffic simulation.

- **HERMES** — "HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation." *ICCV* 2025. [![arXiv](https://img.shields.io/badge/arXiv-2501.14729-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.14729) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/LMD0311/HERMES)

- **HERMES++** — "HERMES++: Toward a Unified Driving World Model for 3D Scene Understanding and Generation." *arXiv* 2604.28196 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.28196-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.28196) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://h-embodvis.github.io/HERMESV2/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/H-EmbodVis/HERMESV2)
  > Extended 2026 update of HERMES that more tightly couples 3D scene understanding with future geometry prediction.

- **UniMLVG** — "UniMLVG: Unified Framework for Multi-view Long Video Generation with Comprehensive Control Capabilities for Autonomous Driving." *arXiv* 2412.04842 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.04842-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.04842) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SenseTime-FVG/OpenDWM) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sensetime-fvg.github.io/UniMLVG/)

- **UniDrive-WM** — "UniDrive-WM: Unified Understanding, Planning and Generation World Model for Autonomous Driving." *arXiv* 2601.04453 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.04453-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04453) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://unidrive-wm.github.io/UniDrive-WM)
  > Recent unified driving world model spanning understanding, generation, and planning.

- **ExploreVLA** — "ExploreVLA: Dense World Modeling and Exploration for End-to-End Autonomous Driving." *arXiv* 2604.02714 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.02714-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.02714)

- **LMGenDrive** — "LMGenDrive: Bridging Multimodal Understanding and Generative World Modeling for End-to-End Driving." *arXiv* 2604.08719 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.08719-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.08719)

- **Learning Vision-Language-Action World Models for Autonomous Driving** — *arXiv* 2604.09059 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.09059-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.09059)
  > A VLA-flavored formulation that explicitly frames driving as joint perception, action, and imagination.

- **Latent-WAM** — "Latent World Action Modeling for End-to-End Autonomous Driving." *arXiv* 2603.24581 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.24581-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.24581)
  > Builds a driving-specific world-action model in latent space to improve planning efficiency while preserving spatial and temporal structure.

- **Discrete-WAM** — "Discrete-WAM: Unified Discrete Vision-Action Token Editing for World-Policy Learning." *arXiv* 2606.05645 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.05645-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.05645)
  > Uses discrete vision-action tokens for autonomous driving, making action-conditioned dynamics more compositional and editable than continuous latent rollouts alone.

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

- **AVID** — "AVID: Adapting Video Diffusion Models to World Models." *arXiv* 2410.12822 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2410.12822-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.12822) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sites.google.com/view/avid-world-model-adapters/home)
  > Adapts pretrained video diffusion models into action-conditioned world models for both games and real-world robotics when action-labeled data is scarce.

- **DreamDojo** — "DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos." *arXiv* 2602.06949 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.06949-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.06949) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://dreamdojo-world.github.io/)
  > A large-scale robot world model explicitly targeting generalist transfer from human videos.

- **PlayWorld** — "PlayWorld: Learning Robot World Models from Autonomous Play." *arXiv* 2603.09030 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.09030-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.09030) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://robot-playworld.github.io/)
  > Stands out for learning a robot world model from unsupervised autonomous play rather than success-biased demonstrations.

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

- **Genie Envisioner** — "Genie Envisioner: A Unified World Foundation Platform for Robotic Manipulation." *arXiv* 2508.05635 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.05635-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.05635) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://genie-envisioner.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/AgibotTech/Genie-Envisioner)
  > Unified manipulation platform that combines world-model imagination, evaluation, and robot data generation.

- **OSCAR** — "OSCAR: Omni-Embodiment Action-Conditioned World Model for Robotics." *arXiv* 2606.04463 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.04463-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.04463) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wuzy2115.github.io/oscar-project-page/)
  > Action-conditioned robot video world model that uses kinematic skeleton conditioning to generalize policy evaluation across robot embodiments.

- **WEAVER** — "WEAVER, Better, Faster, Longer: An Effective World Model for Robotic Manipulation." *arXiv* 2606.13672 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.13672-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.13672) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://arnavkj1995.github.io/WEAVER/)
  > Multi-view robotic manipulation world model that jointly targets fidelity, long-horizon consistency, and fast rollout for policy evaluation and planning.

- **EA-WM** — "EA-WM: Event-Aware World Models with Task-Specification Grounding for Long-Horizon Manipulation." *arXiv* 2606.13053 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.13053-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.13053)
  > Adds predicate-level event prediction and verification so imagined manipulation futures can be scored for task progress and physical feasibility.

- **WoW** — "WoW: Towards a World omniscient World model Through Embodied Interaction." *arXiv* 2509.22642 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2509.22642-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.22642) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wow-world-model.github.io) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wow-world-model/wow-world-model)
  > Large embodied-interaction world model that targets broad scene and object dynamics through active interaction.

- **PointWorld** — "PointWorld: Scaling 3D World Models for In-The-Wild Robotic Manipulation." *arXiv* 2601.03782 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.03782-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.03782) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://point-world.github.io)
  > Pretrained 3D world model that represents robot actions as 3D point flows for cross-embodiment manipulation.

- **DexWM** — "World Models for Learning Dexterous Hand-Object Interactions from Human Videos." *arXiv* 2512.13644 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2512.13644-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.13644) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://raktimgg.github.io/dexwm/)
  > Learns dexterous hand-object interaction dynamics from human videos via keypoint-conditioned latent prediction.

- **FLARE** — "FLARE: Robot Learning with Implicit World Modeling." *arXiv* 2505.15659 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.15659-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.15659) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/gear/flare/)
  > Uses implicit world modeling to improve robot learning without requiring a full explicit pixel simulator.

- **AgiBot World Colosseo** — "AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems." *arXiv* 2503.06669 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.06669-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.06669) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://agibot-world.com/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/OpenDriveLab/AgiBot-World)
  > Large-scale manipulation platform and dataset resource supporting embodied world-model training and evaluation.

- **DreamGen** — "DreamGen: Unlocking Generalization in Robot Learning through Video World Models." *arXiv* 2505.12705 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.12705-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.12705) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/gear/dreamgen/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nvidia/GR00T-dreams)
  > Uses video world models to synthesize robot experience and improve policy generalization.

- **Primitive World Models** — "Learning Primitive Embodied World Models: Towards Scalable Robotic Learning." *arXiv* 2508.20840 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.20840-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.20840) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://qiaosun22.github.io/PrimitiveWorld/)
  > Decomposes embodied prediction into primitive-level world-model units for scalable robot learning.

- **GWM** — "GWM: Towards Scalable Gaussian World Models for Robotic Manipulation." *arXiv* 2508.17600 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.17600-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.17600) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://gaussian-world-model.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Gaussian-World-Model/gaussianwm)
  > Uses Gaussian scene representations as a scalable manipulation world model.

- **ORV** — "ORV: 4D Occupancy-centric Robot Video Generation." *arXiv* 2506.03079 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.03079-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.03079) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://orangesodahub.github.io/ORV/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/OrangeSodahub/ORV)
  > Brings 4D occupancy structure into robot video generation for more spatially grounded prediction.

- **LaDi-WM** — "LaDi-WM: A Latent Diffusion-based World Model for Predictive Manipulation." *arXiv* 2505.11528 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.11528-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.11528) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://guhuangai.github.io/LaDiWM.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/GuHuangAI/LaDiWM)
  > Latent diffusion world model for predictive robot manipulation.

- **AdaWorld** — "AdaWorld: Learning Adaptable World Models with Latent Actions." *arXiv* 2503.18938 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.18938-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.18938) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://adaptable-world-model.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Little-Podi/AdaWorld)
  > Learns latent actions that make the world model adaptable across tasks and embodiments.

- **DyWA** — "DyWA: Dynamics-adaptive World Action Model for Generalizable Non-prehensile Manipulation." *arXiv* 2503.16806 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.16806-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.16806) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://pku-epic.github.io/DyWA/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/jiangranlv/DyWA)
  > Dynamics-adaptive WAM for contact-rich, non-prehensile manipulation.

- **KeyWorld** — "KeyWorld: Key Frame Reasoning Enables Effective and Efficient World Models." *arXiv* 2509.21027 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2509.21027-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.21027)
  > Uses key-frame reasoning to reduce manipulation rollout cost while keeping action-relevant futures.

- **SAMPO** — "SAMPO: Scale-wise Autoregression with Motion Prompt for Generative World Models." *arXiv* 2509.15536 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2509.15536-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.15536)
  > Adds scale-wise autoregression and motion prompts for controllable generative world modeling.

- **3DFlowAction** — "3DFlowAction: Learning Cross-Embodiment Manipulation from 3D Flow World Model." *arXiv* 2506.06199 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.06199-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.06199) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Hoyyyaard/3DFlowAction/)
  > Uses 3D flow world modeling as a cross-embodiment manipulation interface.

- **WoMAP** — "WoMAP: World Models For Embodied Open-Vocabulary Object Localization." *arXiv* 2506.01600 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.01600-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01600) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://robot-womap.github.io)
  > Applies embodied world modeling to open-vocabulary object localization.

- **OSVI-WM** — "OSVI-WM: One-Shot Visual Imitation for Unseen Tasks using World-Model-Guided Trajectory Generation." *arXiv* 2505.20425 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.20425-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.20425)
  > Uses world-model-guided trajectory generation for one-shot imitation on unseen tasks.

- **LUMOS** — "LUMOS: Language-Conditioned Imitation Learning with World Models." *arXiv* 2503.10370 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.10370-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.10370) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](http://lumos.cs.uni-freiburg.de/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nematoli/lumos)
  > Language-conditioned imitation learning with a predictive world-model component.

- **Object-Centric World Model** — "Object-Centric World Model for Language-Guided Manipulation." *arXiv* 2503.06170 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.06170-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.06170)
  > Object-centric state abstraction for language-guided manipulation planning.

- **WHALE** — "WHALE: Towards Generalizable and Scalable World Models for Embodied Decision-making." *arXiv* 2411.05619 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2411.05619-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.05619)
  > Scalable embodied world model aimed at generalizable decision making.

- **VisualPredicator** — "VisualPredicator: Learning Abstract World Models with Neuro-Symbolic Predicates for Robot Planning." *arXiv* 2410.23156 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2410.23156-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.23156)
  > Learns abstract predicate-level world models for robot planning.

- **ParticleFormer** — "ParticleFormer: A 3D Point Cloud World Model for Multi-Object, Multi-Material Robotic Manipulation." *CoRL* 2025. [![arXiv](https://img.shields.io/badge/arXiv-2506.23126-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.23126) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://suninghuang19.github.io/particleformer_page/)
  > A strong 3D manipulation world model built directly on point clouds rather than only RGB latent video.

- **RoboScape** — "RoboScape: Physics-informed Embodied World Model." *arXiv* 2506.23135 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.23135-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.23135) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/RoboScape)
  > Brings explicit physics-aware supervision into embodied video world modeling for contact-rich robot scenarios.

- **RoboDream** — "RoboDream: Compositional World Models for Scalable Robot Data Synthesis." *arXiv* 2606.02577 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.02577-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02577) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://junjieye.com/RoboDream/)
  > Uses embodiment-aware video generation to synthesize robot demonstrations with novel objects, scenes, and views for data scaling.

- **3D-VLA** — "3D-VLA: A 3D Vision-Language-Action Generative World Model." *ICML* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2403.09631-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.09631)
  > Unifies 3D scene understanding, language, and action in a single generative world model; predicts goal images and point clouds for embodied planning.

- **EVA** — Chi, X. et al. "EVA: An Embodied World Model for Future Video Anticipation." *ICML* 2025. [![arXiv](https://img.shields.io/badge/arXiv-2410.15461-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.15461) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/litwellchi/EmbodiedVideoAnticipator)
  > Decomposes video prediction into four meta-tasks; introduces EVA-Bench for evaluating world models in embodied scenarios.

- **STARRY** — "STARRY: Spatial-Temporal Action-Centric World Modeling for Robotic Manipulation." *arXiv* 2604.26848 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.26848-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.26848)
  > A recent action-centric manipulation model that explicitly aligns spatial-temporal prediction with downstream action generation.

- **SKIP** — "SKIP: Sparse Keyframe Interpolation Paradigm for Efficient Embodied World Models." *arXiv* 2606.00664 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.00664-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.00664)
  > Reduces pixel-space rollout cost by generating sparse task-relevant keyframes before dense interpolation.

- **Embody4D** — "Embody4D: A Generalist 4D World Model for Embodied AI." *arXiv* 2605.01799 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.01799-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.01799)
  > Extends embodied world modeling from 2D rollouts to multi-view 4D prediction, targeting richer spatial reasoning for manipulation and navigation.

- **TesserAct** — "TesserAct: Learning 4D Embodied World Models." *arXiv* 2504.20995 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2504.20995-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.20995) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://tesseractworld.github.io/)
  > Learns action-conditioned 4D embodied world models from RGB-DN videos, making dynamic 3D scene evolution explicit for embodied prediction and control.

- **WorldScape** — "WorldScape: A Unified Real-time World Model Integrating Locomotion and Manipulation." *Manifold AI Blog* (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://manifoldai.cn/blogs/WorldScape.html)

#### 1.3.2 Navigation & Scene Understanding

- **NWM (Navigation World Model)** — "Navigation World Models." *CVPR* 2025. [![arXiv](https://img.shields.io/badge/arXiv-2412.03572-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.03572) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.amirbar.net/nwm/)
  > Predicts future egocentric observations conditioned on proposed waypoints; supports planning in novel environments without task-specific fine-tuning.

- **EfficientNWM** — "An Efficient and Multi-Modal Navigation System with One-Step World Model." *arXiv* 2601.12277 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.12277-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.12277) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://robotnav-bot.github.io/nav-onestepwm/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/robotnav-bot/NOW)
  > Compresses navigation prediction into a one-step multi-modal world model for faster planning.

- **NavWAM** — "NavWAM: A Navigation World Action Model for Goal-Conditioned Visual Navigation." *arXiv* 2606.13494 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.13494-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.13494) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://dachii-azm.github.io/navwam/)
  > Turns navigation world-model foresight into executable action by jointly modeling future observations, goal progress, and action chunks.

- **MUN** — "Learning World Models for Unconstrained Goal Navigation." *NeurIPS* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2411.02446-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.02446) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/RU-Automated-Reasoning-Group/MUN)
  > A clean goal-navigation formulation where the learned world model supports unconstrained goal reaching rather than one fixed task.

- **Learning 3D Persistent Embodied World Models** — *arXiv* 2505.05495 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.05495-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.05495)
  > Important for persistent scene memory and long-horizon embodied interaction in 3D environments.

- **World-Ego Modeling** — "World-Ego Modeling for Long-Horizon Evolution in Hybrid Embodied Tasks." *arXiv* 2605.19957 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.19957-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.19957)
  > Separates persistent world evolution from robot-centric ego dynamics for hybrid navigation-manipulation tasks.

- **MWM** — "MWM: Mobile World Models for Action-Conditioned Consistent Prediction." *arXiv* 2603.07799 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.07799-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.07799)
  > Learns action-conditioned mobile-environment transitions for GUI/navigation agents, bridging embodied and app-world modeling.

- **WorldVLN** — "WorldVLN: Autoregressive World Action Model for Aerial Vision-Language Navigation." *arXiv* 2605.15964 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.15964-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.15964) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://embodiedcity.github.io/WorldVLN/)
  > Brings explicit world-model prediction into instruction-conditioned navigation rather than treating VLN as pure policy learning.

- **WorldFly** — "WorldFly: A World-Model-Based Vision-Language-Action Model for UAV Navigation." *arXiv* 2606.06147 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.06147-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06147)
  > Couples future video prediction and navigation actions for UAVs, targeting severe occlusion and sharp-viewpoint changes in urban canyon traversal.

- **AirDreamer** — "AirDreamer: Generalist Drone Navigation with World Models." *arXiv* 2606.03252 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.03252-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.03252)
  > Uses a world-model-based environment-understanding module to transfer drone navigation to unseen cluttered environments without deployment tuning.

- **MAD / Mapping-Aware Dreamer** — "MAD: Mapping-Aware World Models for Agile Quadrotor Flight." *arXiv* 2606.04534 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.04534-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.04534)
  > Adds geometry-aware memory to Dreamer-style quadrotor flight, improving agile control under partial visibility and tight latency.

- **Quadrotor WM Generalization** — "Generalization of World Models under Environmental Variability for Vision-based Quadrotor Navigation." *arXiv* 2606.05015 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.05015-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.05015)
  > Systematic sim-to-real study showing that SSL-stage world-model robustness predicts real quadrotor deployment better than simulation reward alone.

- **3D Isovist World Model** — "A 3D Isovist World Model: Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature." *arXiv* 2606.03609 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.03609-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.03609)
  > Predicts navigable negative space rather than appearance, giving city-scale agents a lightweight geometric world state for spatial reasoning.

- **RAE-NWM** — "RAE-NWM: Navigation World Model in Dense Visual Representation Space." *arXiv* 2603.09241 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.09241-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.09241) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/20robo/raenwm)
  > Replaces heavily compressed VAE latents with denser visual representations, improving navigation rollouts that depend on fine structural details.

- **MindJourney** — "MindJourney: Test-Time Scaling with World Models for Spatial Reasoning." *arXiv* 2507.12508 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.12508-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.12508) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://umass-embodied-agi.github.io/MindJourney)
  > Uses world-model rollouts at test time for spatial reasoning and navigation-style lookahead.

- **NavMorph** — "NavMorph: A Self-Evolving World Model for Vision-and-Language Navigation in Continuous Environments." *arXiv* 2506.23468 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.23468-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.23468) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Feliciaxyao/NavMorph)
  > Adds self-evolving memory and foresight to continuous-environment VLN, making the navigation world model adaptive online.

- **Language-Conditioned World Modeling for Visual Navigation** — *arXiv* 2603.26741 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.26741-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.26741) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/F1y1113/LCVN)
  > Frames instruction-following visual navigation itself as language-conditioned world modeling, adding an explicit benchmark and open-loop prediction setup.

- **Policy-Guided World Model Planning for Language-Conditioned Visual Navigation** — *arXiv* 2603.25981 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.25981-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.25981)
  > Combines policy priors with latent world-model planning to stabilize long-horizon instruction-conditioned navigation.

- **3D-Anchored Lookahead Planning** — "3D-Anchored Lookahead Planning for Persistent Robotic Scene Memory via World-Model-Based MCTS." *arXiv* 2604.11302 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.11302-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.11302)
  > Couples persistent 3D scene memory with lookahead planning, useful for long-horizon robotic exploration.

- **SIMA** — "Scalable Instructable Multiworld Agent." *Google DeepMind* (2024). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/) [![arXiv](https://img.shields.io/badge/arXiv-2404.10179-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.10179)
  > A generalist AI agent that follows language instructions across diverse 3D virtual environments, including commercial games, using world model pretraining.

- **SuSIE** — "Zero-Shot Robot Task Planning using Large Language Model and Latent Diffusion Models." *arXiv* 2311.18588 (2023). [![arXiv](https://img.shields.io/badge/arXiv-2311.18588-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.18588)

#### 1.3.3 Locomotion & Full-Body Control

- **Hierarchical World Models for Humanoid Control** — "Hierarchical World Models as Visual Whole-Body Humanoid Controllers." *arXiv* 2405.18418 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2405.18418-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.18418)
  > Multi-level JEPA world models controlling full humanoid body; imagination-based whole-body planning.

- **Lifting Embodied World Models for Planning and Control** — *arXiv* 2604.26182 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.26182-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.26182)
  > Lifts low-level action spaces into more interpretable high-level controls, making embodied world-model planning substantially easier.

- **MotionWAM** — "MotionWAM: Towards Foundation World Action Models for Real-Time Humanoid Loco-Manipulation." *arXiv* 2606.09215 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.09215-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.09215)
  > Real-time humanoid WAM that conditions whole-body motion tokens on intermediate denoising features from an egocentric video world model.

- **Ego-VCP** — "Ego-Vision World Model for Humanoid Contact Planning." *arXiv* 2510.11682 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.11682-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.11682) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ego-vcp.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/HybridRobotics/Ego-VCP)
  > Egocentric world model for humanoid contact planning, a useful bridge between vision prediction and full-body control.

- **RWM-O** — "Offline Robotic World Model: Learning Robotic Policies without a Physics Simulator." *arXiv* 2504.16680 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2504.16680-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.16680)
  > Offline robot world model for policy learning when a faithful physics simulator is unavailable.

- **Denoising World Model Learning** — "Advancing Humanoid Locomotion: Mastering Challenging Terrains with Denoising World Model Learning." *arXiv* 2408.14472 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2408.14472-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.14472)
  > Uses denoising world-model learning to improve humanoid locomotion over challenging terrain.

- **Robotic World Model** — "Robotic World Model: A Neural Network Simulator for Robust Policy Optimization in Robotics." *arXiv* 2501.10100 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2501.10100-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.10100)
  > Learns a neural simulator for robot policy optimization, filling the sim-to-real gap with a learned dynamics model.

- **TD-MPC2** — "TD-MPC2: Scalable, Robust World Models for Continuous Control." *ICLR* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2310.16828-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc2)
  > Temporal Difference Learning with Model Predictive Control; scales across 104 continuous control tasks.

#### 1.3.4 World-Model-Based Vision-Language-Action (VLA) & World Action Models (WAM)

- **V-JEPA 2** — Assran, M. et al. "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning." *arXiv* 2506.09985 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.09985-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09985) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ai.meta.com/research/vjepa/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/vjepa2)
  > **Meta's flagship world model.** Pretrained on >1M hours of internet video, then fine-tuned on <62h of robot trajectories for zero-shot manipulation on real Franka arms — no task-specific rewards.

- **WLA** — "World-Language-Action Model for Unified World Modeling, Language Reasoning, and Action Synthesis." *arXiv* 2606.05979 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.05979-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.05979)
  > Defines world-language-action models that jointly predict textual subtasks, subgoal images, and robot actions, bridging WAM-style dynamics and VLA-style language reasoning.

- **World Pilot** — "World Pilot: Steering Vision-Language-Action Models with World-Action Priors." *arXiv* 2606.12403 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.12403-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.12403) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-pilot.github.io/)
  > Injects WAM-derived scene-evolution and trajectory priors into VLA policies, bridging semantic grounding with contact-rich dynamics.

- **Efficient-WAM** — "Efficient-WAM: A 1B-Parameter World-Action Model with Low-Cost Future Imagination." *arXiv* 2606.10040 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.10040-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.10040)
  > Reduces the inference cost of future imagination with sparse video latents and asymmetric video-action denoising for robot deployment.

- **RealDreamer** — "RealDreamer: Real-World Robotic Manipulation Using Imagination." *arXiv* 2406.12063 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2406.12063-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.12063)

- **Scaling Offline Model-Based RL via Jointly-Optimized World-Action Model Pretraining** — *ICLR* 2025. [![arXiv](https://img.shields.io/badge/arXiv-2410.00564-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.00564)
  > Shows that jointly pretraining world and action models improves offline generalization, making world-action models useful beyond pure video prediction.

- **DreamZero** — "World Action Models are Zero-shot Policies." *arXiv* 2602.15922 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.15922-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.15922) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://dreamzero0.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/dreamzero0/dreamzero)
  > One of the clearest recent WAM papers: jointly predicts future video and action, while demonstrating strong zero-shot transfer across tasks and embodiments.

- **VLA-JEPA** — "VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model." *arXiv* 2602.10098 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.10098-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10098) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ginwind.github.io/VLA-JEPA/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/ginwind/VLA-JEPA)
  > Adds a JEPA-style latent world model to VLA training, improving planning without decoding every future frame.

- **GeoSem-WAM** — "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models." *arXiv* 2606.03188 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.03188-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.03188)
  > Adds geometry and semantic prediction branches to WAM training, emphasizing representation learning benefits without requiring test-time video rollout.

- **LingBot-VA** — "LingBot-VA: Causal Video-Action World Model for Generalist Robot Control." *arXiv* 2601.21998 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.21998-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.21998) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://technology.robbyant.com/lingbot-va) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Robbyant/lingbot-va)
  > Causal video-action model that unifies future prediction and robot control in a generalist policy setting.

- **WorldVLA** — "WorldVLA: Towards Autoregressive Action World Model." *arXiv* 2506.21539 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.21539-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.21539) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/alibaba-damo-academy/WorldVLA)
  > Autoregressive action-world-model formulation for robot policies.

- **UWM** — "Unified World Models: Coupling Video and Action Diffusion for Pretraining on Large Robotic Datasets." *arXiv* 2504.02792 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2504.02792-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.02792) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://weirdlabuw.github.io/uwm/)
  > Couples video diffusion and action diffusion during large-scale robot pretraining.

- **UVA** — "Unified Video Action Model." *arXiv* 2503.00200 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.00200-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.00200) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://unified-video-action-model.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/ShuangLI59/unified_video_action)
  > Early unified video-action model that treats action generation and world prediction as one process.

- **LDA-1B** — "LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion." *arXiv* 2602.12215 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.12215-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.12215) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://pku-epic.github.io/LDA/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/jiangranlv/latent-dynamics-action)
  > Scales latent dynamics action modeling with large embodied data ingestion.

- **Motus** — "Motus: A Unified Latent Action World Model." *arXiv* 2512.13030 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2512.13030-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.13030) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://motus-robotics.github.io/motus)
  > Unifies latent action learning and future prediction for manipulation control.

- **Ctrl-World** — "Ctrl-World: A Controllable Generative World Model for Robot Manipulation." *arXiv* 2510.10125 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.10125-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.10125) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ctrl-world.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Robert-gyj/Ctrl-World)
  > Focuses on controllable manipulation world generation rather than passive video prediction.

- **Flow-as-Action** — "Latent Policy Steering with Embodiment-Agnostic Pretrained World Models." *arXiv* 2507.13340 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.13340-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.13340)
  > Uses latent flow-like controls to steer pretrained world models across embodiments.

- **MinD** — "MinD: Unified Visual Imagination and Control via Hierarchical World Models." *arXiv* 2506.18897 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.18897-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.18897) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://manipulate-in-dream.github.io/)
  > Hierarchical world model unifying visual imagination and manipulation control.

- **VideoVLA** — "VideoVLA: Video Generators Can Be Generalizable Robot Manipulators." *arXiv* 2512.06963 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2512.06963-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.06963) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://videovla-nips2025.github.io)
  > Treats video generators as generalizable robot manipulators through action-conditioned prediction.

- **VERA** — "Turning Video Models into Generalist Robot Policies." *arXiv* 2605.27817 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.27817-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27817) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://vera.csail.mit.edu)
  > Decouples an action-free video world model from embodiment-specific inverse dynamics, showing another route to cross-embodiment robot control.

- **AHEAD** — "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation." *arXiv* 2606.02486 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.02486-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02486)
  > Adds latent predictive interception for dynamic manipulation, addressing VLA failures when objects move during execution latency.

- **mimic-video** — "mimic-video: Video-Action Models for Generalizable Robot Control Beyond VLAs." *arXiv* 2512.15692 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2512.15692-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.15692) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://mimic-video.github.io)
  > A video-action modeling route for robot control that goes beyond direct VLA decoding.

- **MotuBrain** — "MotuBrain: An Advanced World Action Model for Robot Control." *arXiv* 2604.27792 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.27792-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.27792)
  > A recent unified multimodal WAM that emphasizes multiple inference modes and real-time robot control deployment.

- **GEM-4D** — "GEM-4D: Generalizable Embodied Manipulation with 4D World Model." *arXiv* 2605.22882 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.22882-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.22882)
  > Uses 4D world-model prediction for manipulation policies that must generalize across objects, scenes, and camera viewpoints.

- **JOPAT** — "Point Tracking Improves World Action Models." *arXiv* 2605.23856 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.23856-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.23856)
  > Adds 2D point tracks and visibility to pixel-action prediction, improving long-horizon manipulation under occlusion.

- **Action Images** — "Action Images: End-to-End Policy Learning via Multiview Video Generation." *arXiv* 2604.06168 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.06168-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.06168) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://actionimages.github.io/)
  > Represents robot actions directly as pixel-grounded multiview action images, reducing the gap between video modeling and control.

- **Fast-WAM** — "Fast-WAM: Do World Action Models Need Test-time Future Imagination?" *arXiv* 2603.16666 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.16666-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.16666) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://yuantianyuan01.github.io/FastWAM/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/yuantianyuan01/FastWAM)
  > Important for teasing apart training-time world modeling from test-time imagination, while keeping real-time control practical.

- **AIM** — "AIM: Intent-Aware Unified world action Modeling with Spatial Value Maps." *arXiv* 2604.11135 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.11135-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.11135)
  > Adds an explicit spatial-value interface between future prediction and action decoding, which makes the WAM formulation more control-oriented.

- **X-WAM** — "Unified 4D World Action Modeling from Video Priors with Asynchronous Denoising." *arXiv* 2604.26694 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.26694-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.26694) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sharinka0715.github.io/X-WAM/)
  > Unifies robot action execution with multi-view RGB-D future synthesis, making the 4D side of WAMs much more explicit.

- **tau0-WM** — "$\tau_0$-WM: A Unified Video-Action World Model for Robotic Manipulation." *arXiv* 2606.01027 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.01027-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01027)
  > Integrates policy learning, video prediction, and action evaluation in one future-predictive manipulation model.

- **WALL-WM** — "WALL-WM: Carving World Action Modeling at the Event Joints." *arXiv* 2606.01955 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.01955-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01955)
  > Adds event-grounded language labels to world-action pretraining so generated futures align more tightly with behaviorally meaningful transitions.

- **World Action Verifier** — "World Action Verifier: Self-Improving World Models via Forward-Inverse Asymmetry." *arXiv* 2604.01985 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.01985-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.01985) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-action-verifier.github.io/)
  > Notable for using verification-style asymmetry to self-improve a world-action model rather than only scaling generation quality.

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

- **MRO-GWM** — "Learning Action-Conditional and Object-Centric Gaussian Splatting World Models for Rigid Objects." *arXiv* 2606.01950 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.01950-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01950)
  > Object-centric Gaussian world model for rigid-object dynamics under actions, useful for contact-aware manipulation and simulation.

- **WorldAct** — "WorldAct: Activating Monolithic 3D Worlds into Interactive-Ready Object-Centric Scenes." *arXiv* 2605.15843 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.15843-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.15843)
  > Converts static generated 3D worlds into object-centric, editable, collision-aware scenes for interaction and embodied simulation.

- **Matrix-3D** — "Matrix-3D: Omnidirectional Explorable 3D World Generation." *arXiv* 2508.08086 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.08086-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.08086) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://matrix-3d.github.io)
  > 360° navigable 3D world generation from a single image or text prompt.

- **WorldGrow** — "WorldGrow: Generating Infinite 3D World." *arXiv* 2510.21682 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.21682-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.21682) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/world-grow/WorldGrow)
  > Infinite 3D world generation, complementing bounded explorable-scene models.

- **FantasyWorld** — "FantasyWorld: Geometry-Consistent World Modeling via Unified Video and 3D Prediction." *arXiv* 2509.21657 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2509.21657-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.21657)
  > Unifies video and 3D prediction to improve geometry consistency.

- **Aether** — "Aether: Geometric-Aware Unified World Modeling." *arXiv* 2503.18945 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.18945-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.18945) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://aether-world.github.io/)
  > Geometry-aware unified world modeling for spatially consistent generation.

- **WonderWorld** — "WonderWorld: Interactive 3D Scene Generation from a Single Image." *arXiv* 2406.09394 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2406.09394-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.09394) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://kovenyu.com/wonderworld/)
  > Single-image interactive 3D scene generation, useful as an early 3D world-model baseline.

- **World Labs (Marble)** — "Marble: A Multimodal World Model." *World Labs Blog* (2025). [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://www.worldlabs.ai/blog) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.worldlabs.ai/)
  > Fei-Fei Li's startup; text- and image-driven 3D world generation with explorable geometry and depth.

#### 1.4.2 Video-to-3D / 4D World Models

- **VerseCrafter** — "VerseCrafter: Dynamic Realistic Video World Model with 4D Geometric Control." *arXiv* 2601.05138 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.05138-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.05138) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://sixiaozheng.github.io/VerseCrafter_page/)
  > Adds explicit 4D geometric control to realistic video world modeling.

- **Kinema4D** — "Kinema4D: Kinematic 4D World Modeling for Spatiotemporal Embodied Simulation." *arXiv* 2603.16669 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.16669-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.16669)
  > Couples 4D scene generation with kinematic constraints for embodied simulation rather than static 3D reconstruction alone.

- **Beyond Pixel Histories** — "Beyond Pixel Histories: World Models with Persistent 3D State." *arXiv* 2603.03482 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.03482-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.03482)
  > Introduces persistent 3D state into interactive world modeling, addressing the weak spatial memory of pure video-history approaches.

- **Olaf-World** — "Olaf-World: Orienting Latent Actions for Video World Modeling." *arXiv* 2602.10104 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.10104-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.10104) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://showlab.github.io/Olaf-World/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/showlab/Olaf-World)
  > A useful step toward controllable latent-action video world models.

- **DeepVerse** — "DeepVerse: 4D Autoregressive Video Generation as a World Model." *arXiv* 2506.01103 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.01103-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01103)
  > View-conditioned 4D interactive world modeling with explicit geometry-aware dynamics.

- **TeleWorld** — "TeleWorld: Towards Dynamic Multimodal Synthesis with a 4D World Model." *arXiv* 2601.00051 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.00051-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.00051)
  > Unifies video generation, dynamic scene reconstruction, and long-term world memory for real-time 4D multimodal synthesis.

- **AnchorWorld** — "AnchorWorld: Embodied Egocentric World Simulation with View-based Evolution Customization." *arXiv* 2606.07326 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.07326-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.07326)
  > Uses 3D human motion and anchor-view customization to keep egocentric interactive world simulation spatially grounded and controllable over evolving scenes.

[⬆ Back to Top](#-table-of-contents)

---

### 1.5 🔬 Scientific & Physical World Modeling

> World models that simulate physical, biological, or earth-science processes rather than human-scale scenes.

#### 1.5.1 Physics Simulation & Intuitive Physics

- **DPI-Net** — Li, Y. et al. "Learning Particle Dynamics for Manipulating Rigid Bodies, Deformable Objects, and Fluids." *ICLR* 2019. [![arXiv](https://img.shields.io/badge/arXiv-1810.01566-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/1810.01566)
  > Graph neural network world model for particle-based physics simulation.

- **FIGNet** — "Learning rigid body physics from videos." *DeepMind* (2023). [![arXiv](https://img.shields.io/badge/arXiv-2312.14219-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2312.14219)

- **Physics Cognition in Video Generation** — "Exploring the Evolution of Physics Cognition in Video Generation: A Survey." *arXiv* 2503.21765 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.21765-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.21765) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation)

- **PhyWorld** — "How Far is Video Generation from World Model: A Physical Law Perspective." *arXiv* 2411.02385 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2411.02385-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.02385) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://phyworld.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/phyworld/phyworld)
  > A physically grounded diagnostic that asks whether video generators obey the laws needed for usable world simulation.

- **Physically Native World Models** — "Physically Native World Models: A Hamiltonian Perspective on Generative World Modeling." *arXiv* 2605.00412 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.00412-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.00412)
  > Frames physically grounded world modeling through Hamiltonian-inspired latent dynamics, control, and dissipation.

- **LaWM** — "LaWM: Least Action World Models for Long-Horizon Physical Consistency from Visual Observations." *arXiv* 2605.08279 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.08279-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.08279)
  > Uses a latent variational integrator so long-horizon rollouts are induced by a learned least-action principle.

- **ACWM-Phys** — "ACWM-Phys: Investigating Generalized Physical Interaction in Action-Conditioned Video World Models." *arXiv* 2605.08567 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.08567-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.08567)
  > Probes whether action-conditioned video world models capture generalized physical interactions beyond visual interpolation.

- **Physically Viable World Models** — "Physically Viable World Models: A Case for Query-Conditioned Embodied AI." *arXiv* 2605.30542 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.30542-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30542)
  > Argues for query-conditioned physical abstractions that preserve intervention-relevant structure for planning, control, and verification.

- **OptiWorld** — "OptiWorld: Optimal Control for Video World Generation under Physical Constraints." *arXiv* 2606.00499 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.00499-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.00499) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://yuyuanspace.com/OptiWorld/)
  > Introduces optimal-control guidance for video world generation so generated dynamics satisfy smoother, safer, and more physically plausible constraints.

- **Physical Object Understanding** — "Physical Object Understanding with a Physically Controllable World Model." *CVPR* 2026 Highlight. [![arXiv](https://img.shields.io/badge/arXiv-2606.00439-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.00439) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://neuroailab.github.io/psi-website/blog.html)
  > Learns object-level physical structure from video and exposes controllable interactions, a useful bridge between visual prediction and physical reasoning.

#### 1.5.2 Climate & Earth System World Models

- **Pangu-Weather** — Bi, K. et al. "Accurate medium-range global weather forecasting with 3D neural networks." *Nature* (2023). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/s41586-023-06185-3)
  > 3D Earth Transformer for medium-range weather forecasting; faster and more accurate than traditional NWP.

- **GraphCast** — Lam, R. et al. "Learning skillful medium-range global weather forecasting." *Science* (2023). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.science.org/doi/10.1126/science.adi2336)

#### 1.5.3 Molecular & Biological World Models

- **AlphaFold 3** — Abramson, J. et al. "Accurate structure prediction of biomolecular interactions with AlphaFold 3." *Nature* (2024). [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://www.nature.com/articles/s41586-024-07487-w)
  > Generative diffusion-based world model of molecular interactions and protein structures.

- **CellFlux** — "CellFlux: Simulating Cellular Morphology Changes via Flow Matching." *arXiv* 2502.09775 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2502.09775-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.09775) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://yuhui-zh15.github.io/CellFlux/)
  > Flow-matching world model for simulating cellular morphology dynamics.

- **Medical World Model** — "Medical World Model: Generative Simulation of Tumor Evolution for Treatment Planning." *arXiv* 2506.02327 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.02327-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.02327)
  > Uses generative world simulation to model tumor evolution under treatment interventions.

- **SFP** — "Spatiotemporal Forecasting as Planning: A Model-Based Reinforcement Learning Approach with Generative World Models." *arXiv* 2510.04020 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.04020-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.04020)
  > Casts spatiotemporal forecasting as planning with generative world models.

- **Towards Biomedical World Models** — "Towards World Models in Biomedical Research." *arXiv* 2606.05925 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.05925-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.05925)
  > Position paper arguing for perturbation-aware biomedical world models that predict and control disease, treatment, and cellular dynamics.

---

### 1.6 🎞️ General Video World Models & Rollout Backbones

> Video foundation models and rollout recipes that are repeatedly used as the backbone for interactive, embodied, or long-horizon world models. Generic video generation is still filtered out unless the paper explicitly targets control, causality, memory, or world-model conversion.

- **PAN** — "PAN: A World Model for General, Interactable, and Long-Horizon World Simulation." *arXiv* 2511.09057 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2511.09057-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.09057) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://panworld.ai/)
  > General interactive world simulation backbone emphasizing long-horizon controllability.

- **Cosmos 3** — "Cosmos 3: Omnimodal World Models for Physical AI." *arXiv* 2606.02800 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.02800-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02800) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/cosmos-lab/cosmos3/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVIDIA/Cosmos)
  > NVIDIA's omnimodal Physical AI backbone unifying language, image, video, audio, and action generation/understanding in one world-model family.

- **iVideoGPT** — "iVideoGPT: Interactive VideoGPTs are Scalable World Models." *arXiv* 2405.15223 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2405.15223-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.15223) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://thuml.github.io/iVideoGPT/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/thuml/iVideoGPT)
  > Early scalable interactive VideoGPT framing that directly connects video prediction and world modeling.

- **Diffusion Forcing** — "Diffusion Forcing: Next-token Prediction Meets Full-Sequence Diffusion." *arXiv* 2407.01392 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2407.01392-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2407.01392) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://boyuan.space/diffusion-forcing)
  > A backbone objective for causal, controllable sequence generation that later world models build on.

- **DFoT** — "History-Guided Video Diffusion." *arXiv* 2502.06764 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2502.06764-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.06764) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.boyuan.space/history-guidance/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/kwsong0113/diffusion-forcing-transformer)
  > Extends diffusion forcing with history conditioning, useful for longer world-model rollouts.

- **Self-Forcing** — "Self Forcing: Bridging the Train-Test Gap in Autoregressive Video Diffusion." *arXiv* 2506.08009 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.08009-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.08009) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://self-forcing.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/guandeh17/Self-Forcing)
  > Addresses rollout drift in autoregressive video diffusion, a core bottleneck for interactive world models.

- **Causal Forcing** — "Causal Forcing: Autoregressive Diffusion Distillation Done Right for High-Quality Real-Time Interactive Video Generation." *arXiv* 2602.02214 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.02214-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02214) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://thu-ml.github.io/CausalForcing.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/thu-ml/Causal-Forcing)
  > Distills causal video generation into a real-time interactive rollout recipe.

- **Causal Forcing++** — "Causal Forcing++: Efficient Autoregressive Video Diffusion for Interactive World Models." *arXiv* 2605.15141 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.15141-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.15141)
  > Updates causal-forcing-style video diffusion with more efficient interactive rollout training and inference.

- **Helios** — "Helios: Real Real-Time Long Video Generation Model." *arXiv* 2603.04379 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.04379-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.04379) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://pku-yuangroup.github.io/Helios-Page/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/PKU-YuanGroup/Helios)
  > Real-time long-video generation system relevant to live neural simulators.

- **Vid2World** — "Vid2World: Crafting Video Diffusion Models to Interactive World Models." *arXiv* 2505.14357 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.14357-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.14357) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](http://knightnemo.github.io/vid2world/)
  > A direct conversion recipe from pretrained video diffusion to interactive world models.

- **Learning World Models for Interactive Video Generation** — *arXiv* 2505.21996 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.21996-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.21996)
  > Introduces VRAG-style action grounding and evaluation for interactive video generation as world modeling.

- **Owl-1** — "Owl-1: Omni World Model for Consistent Long Video Generation." *arXiv* 2412.09600 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.09600-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.09600)
  > Targets consistent long-video generation as a stepping stone toward general visual world simulation.

- **Long-Context State-Space Video World Models** — *arXiv* 2505.20171 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.20171-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.20171) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ryanpo.com/ssm_wm)
  > Brings state-space long-context modeling to video world rollouts.

- **StateSpaceDiffuser** — "StateSpaceDiffuser: Bringing Long Context to Diffusion World Models." *arXiv* 2505.22246 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.22246-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.22246)
  > A long-context diffusion formulation aimed at temporally stable world modeling.

- **Geometry Forcing** — "Geometry Forcing: Marrying Video Diffusion and 3D Representation for Consistent World Modeling." *arXiv* 2507.07982 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.07982-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.07982) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://GeometryForcing.github.io)
  > Couples video diffusion with 3D representations to improve geometric consistency during rollouts.

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
| **M^3** | arXiv 2025 | Modular world model over streams of tokens | [![arXiv](https://img.shields.io/badge/arXiv-2502.11537-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.11537) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/leor-c/M3) |
| **LPWM** | ICLR 2026 | Latent particle world models for object-centric stochastic dynamics | [![arXiv](https://img.shields.io/badge/arXiv-2603.04553-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.04553) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://taldatech.github.io/lpwm-web/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/taldatech/lpwm) |
| **RLVR-World** | arXiv 2025 | Reinforcement learning with verifiable rewards for world-model training | [![arXiv](https://img.shields.io/badge/arXiv-2505.13934-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.13934) |
| **RLA-WM** | arXiv 2026 | Residual latent action prediction in visual feature space | [![arXiv](https://img.shields.io/badge/arXiv-2605.07079-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.07079) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://mlzxy.github.io/rla-wm/) |
| **TC-WM** | arXiv 2026 | Task-centric compact latents from visual foundation features | [![arXiv](https://img.shields.io/badge/arXiv-2605.25620-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.25620) |

---

### 2.2 Joint Embedding Predictive Architectures (JEPA)

> Instead of generating observations, JEPA models predict abstract *representations* of future states. Inspired by LeCun's energy-based formulation.

- **I-JEPA** — Assran, M. et al. "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture." *CVPR* 2023. [![arXiv](https://img.shields.io/badge/arXiv-2301.08243-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2301.08243) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/ijepa)
  > Predicts context representations of masked image patches; strong linear-probe performance without pixel decoding.

- **V-JEPA** — Bardes, A. et al. "V-JEPA: Latent Video Prediction for Visual Representation and World Modeling." *ICLR* 2024 (Spotlight). [![arXiv](https://img.shields.io/badge/arXiv-2404.08471-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.08471) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/jepa)
  > Extends JEPA to video; predicts abstract future representations of masked video volumes.

- **V-JEPA 2** — Assran, M. et al. "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning." *arXiv* 2506.09985 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.09985-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.09985) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ai.meta.com/research/vjepa/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/vjepa2)
  > **Milestone.** Pretrains on >1M hours of video, enables zero-shot robotic manipulation via latent action-conditioned planning with <62h robot video.

- **V-JEPA 2.1** — "V-JEPA 2.1: Unlocking Dense Features in Video Self-Supervised Learning." *arXiv* 2603.14482 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.14482-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.14482) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/vjepa2)
  > Updates V-JEPA with denser video features, improving its usefulness as a predictive representation backbone.

- **LeJEPA Theory** — Klindt, D., LeCun, Y. & Balestriero, R. "When Does LeJEPA Learn a World Model?" *arXiv* 2605.26379 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.26379-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.26379)
  > Provides identifiability conditions under which JEPA-style embeddings recover latent world variables useful for planning.

- **V-JEPA Learns Intuitive Physics** — "Intuitive physics understanding emerges from self-supervised pretraining on natural videos." *arXiv* 2502.11831 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2502.11831-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.11831) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/jepa-intuitive-physics)
  > Evidence that JEPA-style video pretraining can induce physical prediction useful for world modeling.

- **DINO-World** — "Back to the Features: DINO as a Foundation for Video World Models." *arXiv* 2507.19468 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.19468-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.19468)
  > Shows that strong pretrained visual features can serve as the foundation for video world modeling.

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

- **Unified Driving Tokens** — "Unified Driving Tokens: Representation- and Geometry-Guided Discrete Tokenizer for Driving World Models and Planning." *arXiv* 2606.01935 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.01935-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01935)
  > Builds a driving-specific tokenizer that preserves geometric and planning-relevant information for token-based world modeling.

---

### 2.4 Multimodal, Text, Acoustic & Memory-Oriented World Models

- **LLM-Sim** — "Can Language Models Serve as Text-Based World Simulators?" *arXiv* 2406.06485 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2406.06485-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.06485) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/cognitiveailab/GPT-simulator)
  > A clean text-world-simulation formulation that broadens world models beyond visual rollouts.

- **LWM** — "World Model on Million-Length Video And Language With RingAttention." *arXiv* 2402.08268 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2402.08268-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.08268) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/LargeWorldModel/LWM)
  > Long-context video-language world modeling that is useful as a multimodal memory substrate even beyond classical action-conditioned simulation.

- **Pandora** — "Pandora: Towards General World Model with Natural Language Actions and Video States." *arXiv* 2406.09455 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2406.09455-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.09455) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/maitrix-org/Pandora)
  > A useful multimodal bridge between language actions and video-state world modeling.

- **A Survey on World Models Grounded in Acoustic Physical Information** — *arXiv* 2506.13833 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.13833-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.13833)

- **On Memory: A Comparison of Memory Mechanisms in World Models** — *arXiv* 2512.06983 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2512.06983-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.06983)

- **Context as Memory** — "Context as Memory: Scene-Consistent Interactive Long Video Generation with Memory Retrieval." *arXiv* 2506.03141 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.03141-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.03141) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://context-as-memory.github.io/)
  > Uses memory retrieval to preserve scene consistency in interactive long-video generation.

- **Mixture of Contexts** — "Mixture of Contexts for Long Video Generation." *arXiv* 2508.21058 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.21058-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.21058) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://primecai.github.io/moc/)
  > Long-video context mixture mechanism that can support longer world-model rollouts.

- **Spatial Memory** — "Video World Models with Long-term Spatial Memory." *arXiv* 2506.05284 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.05284-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.05284) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://spmem.github.io)
  > Adds explicit long-term spatial memory to video world models for persistent scene state.

- **CLAW** — "CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization." *arXiv* 2606.04130 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.04130-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.04130)
  > Learns continuous latent actions from action-free videos, broadening latent-action world modeling beyond labeled robotics and games.

- **World Models Meet Language Models** — "World Models Meet Language Models: On the Complementarity of Concrete and Abstract Reasoning." *arXiv* 2606.03603 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.03603-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.03603) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/yczhou001/PF-OPSD)
  > Studies how concrete visual rollouts from world models and abstract reasoning from MLLMs complement each other on future-outcome prediction.

---

### 2.5 Symbolic & Knowledge-Graph World Models

- **Knowledge Graphs as World Models for Autonomous Vehicles** — "Knowledge Graphs as World Models for Semantic Material-Aware Obstacle Handling in Autonomous Vehicles." *arXiv* 2503.21232 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2503.21232-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.21232)

- **Grounding Language in World Models** — Andreas, J. et al. "Grounding Language in World Models." *ACL* 2022. [![arXiv](https://img.shields.io/badge/arXiv-2109.01800-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2109.01800)

- **PoE-World** — "PoE-World: Compositional World Modeling with Products of Programmatic Experts." *arXiv* 2505.10819 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.10819-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.10819) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://topwasu.github.io/poe-world)
  > A representative programmatic/symbolic world-modeling direction focused on compositional structure rather than pixels.

- **Generating Symbolic World Models via Test-time Scaling of Large Language Models** — *arXiv* 2502.04728 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2502.04728-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.04728) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://vmlpddl.github.io/)

- **Text2World** — "Text2World: Benchmarking Large Language Models for Symbolic World Model Generation." *arXiv* 2502.13092 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2502.13092-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.13092) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://text-to-world.github.io/)

- **STRIPS-WM** — "STRIPS-WM: Learning Grounded Propositional STRIPS-style World Models from Images." *arXiv* 2606.06832 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.06832-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06832)
  > Learns image-grounded predicates and STRIPS operators from visual transitions, connecting raw perception to classical symbolic planning.

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
| **DreamerV4** | arXiv 2025 | Scalable world-model training for agents | Multi-domain | [![arXiv](https://img.shields.io/badge/arXiv-2509.24527-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.24527) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://danijar.com/project/dreamer4/) |
| **TD-MPC2** | ICLR 2024 | Latent MPC, 104 tasks | Continuous | [![arXiv](https://img.shields.io/badge/arXiv-2310.16828-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2310.16828) |
| **DIAMOND** | NeurIPS 2024 | Diffusion WM + RL | Atari | [![arXiv](https://img.shields.io/badge/arXiv-2405.12399-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.12399) |
| **Think2Drive** | 2024 | BEV latent MBRL | Driving | [![arXiv](https://img.shields.io/badge/arXiv-2402.16720-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2402.16720) |
| **InDRiVE** | 2025 | Curiosity-driven generalized WM | Driving | [![arXiv](https://img.shields.io/badge/arXiv-2503.05573-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.05573) |
| **Planning with an Ensemble of World Models** | ICLR 2024 | Ensemble planning under model uncertainty | Control | [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://openreview.net/forum?id=cvGdPXaydP) |
| **Adaptive World Models** | NeurIPSW 2024 | Latent imagination under non-stationarity | Control | [![arXiv](https://img.shields.io/badge/arXiv-2411.01342-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.01342) |
| **Dreaming of Many Worlds** | arXiv 2024 | Contextual world models for zero-shot generalization | Control | [![arXiv](https://img.shields.io/badge/arXiv-2403.10967-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2403.10967) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/sai-prasanna/dreaming_of_many_worlds) |
| **State-Space World Models for MBRL** | arXiv 2025 | State-space acceleration for model-based RL | Control | [![arXiv](https://img.shields.io/badge/arXiv-2502.20168-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.20168) |
| **MoSim** | arXiv 2025 | Neural motion simulator for RL world models | Motion / RL | [![arXiv](https://img.shields.io/badge/arXiv-2504.07095-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.07095) |
| **Continual RL with Online WMs** | arXiv 2025 | Planning with online world models for continual RL | Control | [![arXiv](https://img.shields.io/badge/arXiv-2507.09177-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.09177) |

---

### 3.2 World-Model-Guided Planning

- **PWM (Policy World Model)** — "From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction." *arXiv* 2510.19654 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.19654-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.19654) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/6550Zhao/Policy-World-Model)

- **AdaWM** — "AdaWM: Adaptive World Model based Planning for Autonomous Driving." *arXiv* 2501.13072 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2501.13072-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.13072)
  > Adaptive world model that adjusts planning horizon based on uncertainty.

- **Dream to Drive** — "Dream to Drive: Model-Based Vehicle Control Using Analytic World Models." *arXiv* 2502.10012 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2502.10012-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.10012)

- **Dream to Drive with Predictive Individual World Model** — *arXiv* 2501.16733 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2501.16733-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.16733) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/gaoyinfeng/PIWM)

- **Hierarchical Planning with Latent World Models** — *arXiv* 2604.03208 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.03208-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.03208)
  > Multi-timescale latent planning for long-horizon embodied control without exploding search cost.

- **H-WM** — "H-WM: Robotic Task and Motion Planning Guided by Hierarchical World Model." *arXiv* 2602.11291 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.11291-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.11291)
  > Uses a hierarchical world model to guide task-and-motion planning for robots.

- **HiP** — "Compositional Foundation Models for Hierarchical Planning." *arXiv* 2309.08587 (2023). [![arXiv](https://img.shields.io/badge/arXiv-2309.08587-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2309.08587) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://hierarchical-planning-foundation-model.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/anuragajay/hip/tree/main)
  > Composes foundation models for long-horizon hierarchical planning; useful context for agentic world-model planners.

- **DriveVA** — "DriveVA: Video Action Models are Zero-Shot Drivers." *arXiv* 2604.04198 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.04198-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.04198)
  > Couples future video forecasting and action generation in one latent process, explicitly targeting cross-domain driving generalization.

- **PLAN-S** — "PLAN-S: Bridging Planning with Latent Style Dynamics for Autonomous Driving World Models." *arXiv* 2606.06014 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.06014-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06014)
  > Separates latent style dynamics from planning cost, giving driving world models a more explicit bridge from imagined futures to safe trajectories.

- **World4Drive** — "World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model." *arXiv* 2507.00603 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.00603-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.00603) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/ucaszyp/World4Drive)

- **Doe-1** — "Doe-1: Closed-Loop Autonomous Driving with Large World Model." *arXiv* 2412.09627 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2412.09627-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.09627) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wzzheng.net/Doe/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/wzzheng/Doe)

- **WorldDrive** — "Bridging Scene Generation and Planning: Driving with World Model via Unifying Vision and Motion Representation." *arXiv* 2603.14948 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.14948-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.14948) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/TabGuigui/WorldDrive)
  > A strong 2026 example of coupling scene generation, motion representation, and real-time planning in one framework.

- **Raw2Drive** — "Raw2Drive: Reinforcement Learning with Aligned World Models for End-to-End Autonomous Driving." *arXiv* 2505.16394 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.16394-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.16394)

- **ImagiDrive** — "ImagiDrive: A Unified Imagination-and-Planning Framework for Autonomous Driving." *arXiv* 2508.11428 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2508.11428-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.11428)
  > Integrates a VLM-style driving agent with a driving world model in an iterative imagination-and-refinement loop.

- **Dream4Drive** — "Rethinking Driving World Model as Synthetic Data Generator for Perception Tasks." *arXiv* 2510.19195 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.19195-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.19195) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wm-research.github.io/Dream4Drive/)

- **ProDrive** — "ProDrive: Proactive Planning for Autonomous Driving via Ego-Environment Co-Evolution." *arXiv* 2604.25329 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.25329-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.25329)
  > A recent planning-oriented paper where the planner and BEV world model are optimized jointly for proactive evaluation of candidate futures.

- **Grounded World Model for Semantically Generalizable Planning** — *arXiv* 2604.11751 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.11751-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.11751)

- **DINO-WM** — "World Models on Pre-trained Visual Features Enable Zero-shot Planning." *arXiv* 2411.04983 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2411.04983-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.04983)
  > A strong representation-first planning result showing that good pretrained visual features can substantially simplify world-model learning.

- **IMWM** — "IMWM: Intuition Models Complement World Models for Latent Planning." *arXiv* 2606.01626 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.01626-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01626)
  > Pairs a learned latent world model with an intuition model to reduce finite-budget planning failures from raw pixels.

---

### 3.3 Closed-Loop Simulation & Evaluation

- **WorldGym** — "WorldGym: World Model as An Environment for Policy Evaluation." *arXiv* 2506.00613 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.00613-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.00613) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-model-eval.github.io/)
  > Uses an action-conditioned world model as an evaluation environment for real-robot policies.

- **WorldEval** — "WorldEval: World Model as Real-World Robot Policies Evaluator." *arXiv* 2505.19017 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.19017-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.19017) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldeval.github.io)
  > Evaluates real-robot policies through a learned world model rather than only offline prediction metrics.

- **GE-Sim 2.0** — "GE-Sim 2.0: A Roadmap Towards Comprehensive Closed-loop Video World Simulators for Robotic Manipulation." *arXiv* 2605.27491 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.27491-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27491) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ge-sim-v2.github.io/)
  > Upgrades action-conditioned robot video simulation with proprioceptive state decoding, rollout scoring, and fast policy-in-the-loop evaluation.

- **PiL-World** — "PiL-World: A Chunk-Wise World Model for VLA Policy-in-the-Loop Evaluation." *arXiv* 2606.05773 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.05773-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.05773)
  > Moves VLA evaluation from open-loop trajectory replay to chunk-wise policy-in-the-loop world-model rollouts.

- **WorldMark** — "WorldMark: A Unified Benchmark Suite for Interactive Video World Models." *arXiv* 2604.21686 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.21686-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.21686)
  > New benchmark suite targeting interactive video world models rather than passive generation only.

- **RoboWM-Bench** — "RoboWM-Bench: A Benchmark for Evaluating World Models in Robotic Manipulation." *arXiv* 2604.19092 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.19092-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19092)
  > Fills a real gap in manipulation-oriented world-model evaluation.

- **MiraBench** — "MiraBench: Evaluating Action-Conditioned Reliability in Robotic World Models." *arXiv* 2605.29360 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.29360-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.29360)
  > Shifts robotic world-model evaluation from visual fidelity toward physics adherence, action fidelity, and optimism-bias detection.

- **RoboTrustBench** — "RoboTrustBench: Benchmarking the Trustworthiness of Video World Models for Robotic Manipulation." *arXiv* 2606.01600 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.01600-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01600)
  > Tests whether video world models respect constraints, counterfactual states, physical interactions, and unsafe-instruction rejection.

- **What-If World** — "What-If World: A Causal Benchmark for General World Models in Embodied Scenarios." *arXiv* 2605.27589 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2605.27589-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27589)
  > Evaluates counterfactual, intervention-aware prediction in embodied world models rather than only next-frame realism.

- **Beyond Task Success** — "Beyond Task Success: Behavioral and Representational Diagnostics for WAM and VLA." *arXiv* 2606.01095 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.01095-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01095)
  > Diagnoses whether future-prediction WAMs capture behaviorally meaningful consequences, not just visually plausible rollouts.

- **dWorldEval** — "dWorldEval: Scalable Robotic Policy Evaluation via Discrete Diffusion World Model." *arXiv* 2604.22152 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.22152-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.22152)

- **Interactive World Simulator** — "Interactive World Simulator for Robot Policy Training and Evaluation." *arXiv* 2603.08546 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.08546-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08546) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://yixuanwang.me/interactive_world_sim)
  > Builds a faster, more physically consistent interactive simulator for robot policy training and evaluation from moderate-scale real interaction data.

- **Ego-Centric Learning of Communicative World Models** — *arXiv* 2506.08149 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.08149-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.08149)

---

### 3.4 Multi-Agent World Models

- **MultiWorld** — Wu, H. et al. "MultiWorld: Scalable Multi-Agent Multi-View Video World Models." *arXiv* 2604.18564 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2604.18564-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.18564) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/CIntellifusion/MultiWorld)
  > Unified framework for multi-agent, multi-view world modeling; introduces a Multi-Agent Condition Module and Global State Encoder for precise controllability and cross-view consistency.

- **MetaWorld** — "MetaWorld: Scaling Multi-Agent Video World Model from Single-view Video Data." *arXiv* 2606.02753 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.02753-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02753)
  > Extracts shared multi-agent world-state signals from ordinary single-view video, improving cross-view identity and dynamics consistency without dense multi-camera data.

- **Prisma-World** — "Prisma-World: Camera-Controllable Multi-Agent Video World Model." *arXiv* 2606.09507 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.09507-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.09507) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://huiqiang-sun.github.io/prisma-world/)
  > Joint geometry-aware denoising for multiple camera-controlled agents, targeting cross-view consistency in a shared generated world.

- **ShareVerse** — "ShareVerse: Multi-Agent Consistent Video Generation for Shared World Modeling." *arXiv* 2603.02697 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2603.02697-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.02697)
  > Explicitly targets a shared multi-agent world state across viewpoints, filling a gap between single-user interaction and jointly consistent world generation.

- **SceneDiffuser++** — (see §1.2.4) City-scale traffic simulation with multi-agent world model.
- **EOT-WM** — (see §1.2.2) Jointly models ego and other vehicle trajectories.
- **InDRiVE** — (see §3.1) Curiosity-driven exploration in multi-agent driving world model.
- **Communicative World Models** — (see §3.3) Ego-centric communicative modeling of other agents.

---

### 3.5 🛡️ Safety-Aware Agentic World Models

- **VL-SAFE** — "VL-SAFE: Vision-Language Guided Safety-Aware Reinforcement Learning with World Models for Autonomous Driving." *arXiv* 2505.16377 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2505.16377-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.16377) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://ys-qu.github.io/vlsafe-website/)
  > Language-conditioned safety constraints integrated into world-model-based RL for driving.

- **StressDream** — "StressDream: Steering Video World Models for Robust Policy Evaluation and Improvement." *arXiv* 2606.00267 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.00267-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.00267) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://junwon.me/StressDream/)
  > Steers diffusion world-model imaginations toward high-impact plausible outcomes, useful for stress-testing policies beyond nominal rollouts.

- **World Models: The Safety Perspective** — *ISSREW* 2024. [![arXiv](https://img.shields.io/badge/arXiv-2411.07690-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.07690)
  > Position/survey: how to make world models safer across embodied AI and autonomous driving.

- **The Safety Challenge of World Models for Embodied AI Agents** — *arXiv* 2510.05865 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.05865-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.05865)
  > Comprehensive review of safety risks introduced by using world models in agentic embodied systems.

- **Progressive Robustness-Aware World Models** — *techrXiv* 2025. [![Paper](https://img.shields.io/badge/Paper-Link-4C566A?logo=readthedocs&logoColor=white)](https://doi.org/10.36227/techrxiv.176523308.84756413/v1) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/MoyangSensei/AwesomeRobustDWM)

---

### 3.6 LLM / VLM / GUI Agents with World Models

- **Inner Monologue** — Huang, W. et al. "Inner Monologue: Embodied Reasoning through Planning with Language Models." *CoRL* 2022. [![arXiv](https://img.shields.io/badge/arXiv-2207.05608-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2207.05608)

- **SayCan** — Ahn, M. et al. "Do As I Can, Not As I Say: Grounding Language in Robotic Affordances." *CoRL* 2022. [![arXiv](https://img.shields.io/badge/arXiv-2204.01691-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2204.01691)

- **WKM** — "Agent Planning with World Knowledge Model." *arXiv* 2405.14205 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2405.14205-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.14205) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/zjunlp/WKM)
  > Uses an explicit world-knowledge model to improve agent planning rather than relying on one-shot reactive generation.

- **WebDreamer** — "Is Your LLM Secretly a World Model of the Internet? Model-Based Planning for Web Agents." *arXiv* 2411.06559 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2411.06559-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.06559) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/OSU-NLP-Group/WebDreamer)
  > One of the clearest web-agent papers that treats internet interaction as model-based planning over a latent world model.

- **Web Agents with World Models** — "Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation." *arXiv* 2410.13232 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2410.13232-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.13232)
  > Directly formulates web navigation as world-model learning plus dynamics-aware decision making.

- **LLMCWM** — "Language Agents Meet Causality -- Bridging LLMs and Causal World Models." *arXiv* 2410.19923 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2410.19923-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.19923) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/j0hngou/LLMCWM/)
  > A useful bridge between symbolic/causal world models and language-agent reasoning.

- **GLIMO** — "Grounding Large Language Models In Embodied Environment With Imperfect World Models." *arXiv* 2410.02742 (2024). [![arXiv](https://img.shields.io/badge/arXiv-2410.02742-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.02742)
  > Uses imperfect proxy world models to collect grounded embodied experience for LLM reasoning and instruction following.

- **ViMo** — "ViMo: A Generative Visual GUI World Model for App Agent." *arXiv* 2504.13936 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2504.13936-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.13936)
  > Extends world-modeling ideas from robotics and web navigation into app and GUI agents.

- **Dyna-Think** — "Dyna-Think: Synergizing Reasoning, Acting, and World Model Simulation in AI Agents." *arXiv* 2506.00320 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2506.00320-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.00320)
  > Explicitly combines reasoning traces, acting, and simulated rollouts in one agent loop.

- **MobileDreamer** — "MobileDreamer: Generative Sketch World Model for GUI Agent." *arXiv* 2601.04035 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.04035-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04035)
  > Introduces a lightweight sketch-based GUI world model for long-horizon mobile agent planning, trading raw-pixel fidelity for controllable structure.

- **MIRAGE** — "MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models." *arXiv* 2606.04627 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.04627-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.04627)
  > Uses a generative GUI world model to internalize mobile-agent lookahead, reducing reliance on long explicit text reasoning traces.

- **DynaWeb** — "DynaWeb: Model-Based Reinforcement Learning of Web Agents." *arXiv* 2601.22149 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2601.22149-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.22149)
  > Treats web-agent training explicitly as model-based RL, using learned environment dynamics instead of costly live-web interaction.

- **Code2World** — "Code2World: A GUI World Model via Renderable Code Generation." *arXiv* 2602.09856 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.09856-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.09856) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://amap-ml.github.io/Code2World/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/AMAP-ML/Code2World)
  > Represents future GUI states as renderable code, improving structural controllability over text-only or pixel-only app simulators.

- **WebWorld** — "WebWorld: A Large-Scale World Model for Web Agent Training." *arXiv* 2602.14721 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.14721-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.14721)
  > Scales web-agent world modeling to open-web interactions with a large learned simulator rather than a closed handcrafted sandbox.

- **World-Model-Augmented Web Agents with Action Correction** — *arXiv* 2602.15384 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2602.15384-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.15384)
  > Adds predictive action correction to web agents, using a learned world model to anticipate risky or implausible UI transitions.

- **ADWM** — "Autoregressive Diffusion World Models for Off-Policy Evaluation of LLM Agents." *arXiv* 2606.05558 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.05558-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.05558)
  > Learns an action-conditioned world model from logged trajectories to estimate LLM-agent performance without fresh online environment interaction.

- **PaW** — "Policy and World Modeling Co-Training for Language Agents." *arXiv* 2606.02388 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.02388-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02388)
  > Adds auxiliary world-model supervision directly to on-policy RL rollouts, improving language agents without extra inference-time simulators.

- **CoMAP** — "COMAP: Co-Evolving World Models and Agent Policies for LLM Agents." *arXiv* 2606.02372 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.02372-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02372) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/loyiv/CoMAP)
  > Co-trains textual world models and LLM-agent policies so environment dynamics stay aligned with the agent's evolving state-action distribution.

- **Astra** — "Thinking with Imagination: Agentic Visual Spatial Reasoning with World Simulators." *arXiv* 2606.06476 (2026). [![arXiv](https://img.shields.io/badge/arXiv-2606.06476-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06476) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://zcmax.github.io/projects/Thinking-With-Imagination)
  > Lets a VLM actively invoke a world simulator for imagined novel-view evidence during spatial reasoning.

- **RAP** — "Reasoning with Language Model is Planning with World Model." *arXiv* 2305.14992 (2023). [![arXiv](https://img.shields.io/badge/arXiv-2305.14992-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2305.14992)
  > Classic framing that treats language-model reasoning as planning over an implicit world model.

- **CWM** — "CWM: An Open-Weights LLM for Research on Code Generation with World Models." *arXiv* 2510.02387 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.02387-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.02387) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/cwm)
  > Open-weight code-world model resource for studying code generation as world modeling.

- **NeuralOS** — "NeuralOS: Towards Simulating Operating Systems via Neural Generative Models." *arXiv* 2507.08800 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.08800-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.08800) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://neural-os.com/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/yuntian-group/neural-os)
  > Simulates operating-system environments with neural generative models, extending GUI world modeling beyond apps.

- **SimuRA** — "SimuRA: Towards General Goal-Oriented Agent via Simulative Reasoning Architecture with LLM-Based World Model." *arXiv* 2507.23773 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2507.23773-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.23773)
  > Builds an LLM-agent loop around simulated rollouts from an explicit world model.

- **VAGEN** — "VAGEN: Reinforcing World Model Reasoning for Multi-Turn VLM Agents." *arXiv* 2510.16907 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.16907-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.16907) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](http://mll.lab.northwestern.edu/VAGEN/)
  > Reinforces world-model reasoning in multi-turn visual-language agents.

- **Semantic World Models** — *arXiv* 2510.19818 (2025). [![arXiv](https://img.shields.io/badge/arXiv-2510.19818-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.19818) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://weirdlabuw.github.io/swm)
  > Focuses on semantic state prediction as a compact alternative to pixel-heavy agent world models.

[⬆ Back to Top](#-table-of-contents)

---

## 📚 Surveys & Position Papers

### General Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **Is Sora a World Simulator?** | arXiv 2024 | Video generation & general world models | [![arXiv](https://img.shields.io/badge/arXiv-2405.03520-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2405.03520) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/GigaAI-research/General-World-Models-Survey) |
| **Understanding World or Predicting Future?** | ACM 2025 | Comprehensive taxonomy | [![arXiv](https://img.shields.io/badge/arXiv-2411.14499-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.14499) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/World-Model) |
| **Agentic World Modeling** | arXiv 2026 | Agentic capabilities, laws, and systems view | [![arXiv](https://img.shields.io/badge/arXiv-2604.22748-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.22748) |
| **World Models: A Comprehensive Survey** | arXiv 2026 | Architectures, methodologies, reasoning paradigms, applications | [![arXiv](https://img.shields.io/badge/arXiv-2606.00133-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.00133) |
| **Towards Interactive Video World Modeling** | arXiv 2026 | Frontiers, challenges, benchmarks, and future trends for interactive video WMs | [![arXiv](https://img.shields.io/badge/arXiv-2606.01164-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01164) [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/jiliuxing/Awesome-Interactive-World-Model) |
| **Human Cognition in Machines** | arXiv 2026 | Unified cognitive perspective on world models | [![arXiv](https://img.shields.io/badge/arXiv-2604.16592-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.16592) |
| **Video Generation Models as World Models** | arXiv 2026 | Efficient paradigms and algorithms | [![arXiv](https://img.shields.io/badge/arXiv-2603.28489-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.28489) |
| **3D and 4D World Modeling: A Survey** | arXiv 2025 | 3D/4D scene generation | [![arXiv](https://img.shields.io/badge/arXiv-2509.07996-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.07996) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/worldbench/survey) |
| **From 2D to 3D Cognition** | arXiv 2025 | General world models | [![arXiv](https://img.shields.io/badge/arXiv-2506.20134-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.20134) |
| **From Masks to Worlds** | arXiv 2025 | Hitchhiker's guide to world models | [![arXiv](https://img.shields.io/badge/arXiv-2510.20668-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.20668) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/M-E-AGI-Lab/Awesome-World-Models) |
| **World Models in AI: Like a Child** | arXiv 2025 | Developmental cognitive perspective | [![arXiv](https://img.shields.io/badge/arXiv-2503.15168-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.15168) |
| **Simulating the Visual World with AI** | arXiv 2025 | Roadmap for visual world modeling | [![arXiv](https://img.shields.io/badge/arXiv-2511.08585-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.08585) |
| **Physics Cognition in Video Generation** | arXiv 2025 | Physical plausibility in generative models | [![arXiv](https://img.shields.io/badge/arXiv-2503.21765-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.21765) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation) |
| **Simulating the Real World** | arXiv 2025 | Unified survey of multimodal generative world simulation | [![arXiv](https://img.shields.io/badge/arXiv-2503.04641-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.04641) |
| **Digital Twin AI** | arXiv 2026 | World models and digital-twin perspective | [![arXiv](https://img.shields.io/badge/arXiv-2601.01321-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.01321) |
| **World Models for Cognitive Agents** | arXiv 2025 | Edge intelligence and cognitive-agent perspective | [![arXiv](https://img.shields.io/badge/arXiv-2506.00417-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.00417) |

### Embodied AI Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **World Models for Embodied AI** | arXiv 2025 | Comprehensive embodied AI survey | [![arXiv](https://img.shields.io/badge/arXiv-2510.16732-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.16732) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Li-Zn-H/AwesomeWorldModels) |
| **World Model for Robot Learning** | arXiv 2026 | Robot-learning taxonomy, applications, benchmarks | [![arXiv](https://img.shields.io/badge/arXiv-2605.00080-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.00080) |
| **World Models for Robotic Manipulation** | arXiv 2026 | Manipulation representations, action coupling, pipeline roles | [![arXiv](https://img.shields.io/badge/arXiv-2606.00113-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.00113) |
| **World Action Models: The Next Frontier** | arXiv 2026 | WAM definition, taxonomy, data and evaluation protocols | [![arXiv](https://img.shields.io/badge/arXiv-2605.12090-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.12090) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://openmoss.github.io/Awesome-WAM) |
| **Robots Need More than VLA and World Models** | arXiv 2026 | Position paper on memory, verification, causality, and interactive grounding beyond policy scaling | [![arXiv](https://img.shields.io/badge/arXiv-2606.06556-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.06556) |
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
| **Latent State Design for World Models** | arXiv 2026 | Sufficiency constraints for actionable latent states | [![arXiv](https://img.shields.io/badge/arXiv-2605.01694-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.01694) |
| **Physically Viable World Models** | arXiv 2026 | Query-conditioned physical abstraction and verification | [![arXiv](https://img.shields.io/badge/arXiv-2605.30542-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30542) |
| **General Agents Contain World Models** | arXiv 2025 | Agentic world-model emergence and formalization | [![arXiv](https://img.shields.io/badge/arXiv-2506.01622-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.01622) |
| **When Do Neural Networks Learn World Models?** | arXiv 2025 | Conditions for world-model learning in neural networks | [![arXiv](https://img.shields.io/badge/arXiv-2502.09297-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.09297) |
| **Reconstruction or Semantics?** | arXiv 2026 | Latent-space utility for robotic world models | [![arXiv](https://img.shields.io/badge/arXiv-2605.06388-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.06388) |
| **Foundation-Model Inductive Bias Probe** | arXiv 2025 | Probing whether foundation models contain world models | [![arXiv](https://img.shields.io/badge/arXiv-2507.06952-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.06952) |
| **Dynamical Systems Learning for WMs** | arXiv 2025 | When world models learn dynamical systems successfully | [![arXiv](https://img.shields.io/badge/arXiv-2507.04898-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.04898) |
| **Scaling Laws for Agents and WMs** | arXiv 2024 | Scaling laws for pretraining agents and world models | [![arXiv](https://img.shields.io/badge/arXiv-2411.04434-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2411.04434) |
| **Transformers Use Causal WMs** | arXiv 2024 | Causal world models in maze-solving transformers | [![arXiv](https://img.shields.io/badge/arXiv-2412.11867-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.11867) |
| **Causal WM Underlying NTP** | arXiv 2024 | GPT behavior in controlled world-model environments | [![arXiv](https://img.shields.io/badge/arXiv-2412.07446-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2412.07446) |
| **Critiques of World Models** | arXiv 2025 | Critical perspective on world-model claims and limits | [![arXiv](https://img.shields.io/badge/arXiv-2507.05169-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.05169) |
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
| **WorldModelBench** | General | Comprehensive world model evaluation | [![arXiv](https://img.shields.io/badge/arXiv-2502.20694-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.20694) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldmodelbench.github.io/) |
| **DrivingGen** | Driving | Realism, controllability, temporal coherence | [![arXiv](https://img.shields.io/badge/arXiv-2601.01528-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.01528) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://drivinggen-bench.github.io/) |
| **WorldSimBench** | Video world models | Video generation as world simulation | [![arXiv](https://img.shields.io/badge/arXiv-2410.18072-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.18072) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://iranqin.github.io/WorldSimBench.github.io/) |
| **WorldScore** | General generation | Unified evaluation of next-scene world generation | [![arXiv](https://img.shields.io/badge/arXiv-2504.00983-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2504.00983) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://haoyi-duan.github.io/WorldScore/) |
| **EWMBench** | Embodied video generation | Scene, motion, and semantic quality | [![arXiv](https://img.shields.io/badge/arXiv-2505.09694-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.09694) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/AgibotTech/EWMBench) |
| **WorldArena** | Embodied | Perception and functional utility under embodiment | [![arXiv](https://img.shields.io/badge/arXiv-2602.08971-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08971) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-arena.ai) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/WorldArena) |
| **MIND** | Interactive video | Memory consistency and action control | [![arXiv](https://img.shields.io/badge/arXiv-2602.08025-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.08025) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/CSU-JPG/MIND) |
| **MBench** | Video world models | Long-horizon memory capability and internal state stability | [![arXiv](https://img.shields.io/badge/arXiv-2606.00793-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.00793) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://peanutup.github.io/MBench-project/) |
| **Omni-WorldBench** | Interactive video | Interaction-centric comprehensive evaluation | [![arXiv](https://img.shields.io/badge/arXiv-2603.22212-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.22212) |
| **STEVO-Bench** | Video world models | State evolution under occlusion and lookaway control | [![arXiv](https://img.shields.io/badge/arXiv-2603.13215-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.13215) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://glab-caltech.github.io/STEVOBench/) |
| **WorldMark** | Interactive video | Unified interactive video WM benchmark | [![arXiv](https://img.shields.io/badge/arXiv-2604.21686-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.21686) |
| **Toward Stable World Models** | Generative environments | World instability and long-horizon consistency | [![arXiv](https://img.shields.io/badge/arXiv-2503.08122-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.08122) |
| **WBench** | Interactive video | Multi-turn interaction, consistency, physics compliance | [![arXiv](https://img.shields.io/badge/arXiv-2605.25874-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.25874) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://meituan-longcat.github.io/WBench/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/meituan-longcat/WBench) |
| **VRAG Benchmark** | Interactive video | Action grounding and rollout evaluation for interactive video generation | [![arXiv](https://img.shields.io/badge/arXiv-2505.21996-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.21996) |
| **iWorld-Bench** | Interactive world models | Physical interaction and unified action generation | [![arXiv](https://img.shields.io/badge/arXiv-2605.03941-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.03941) |
| **WorldBench** | Physics / reasoning | Diagnostic evaluation of physical understanding in world models | [![arXiv](https://img.shields.io/badge/arXiv-2601.21282-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.21282) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-bench.github.io/) |
| **PhysicsMind** | Physics / mechanics | Sim-and-real mechanics reasoning and prediction | [![arXiv](https://img.shields.io/badge/arXiv-2601.16007-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.16007) |
| **PDI-Bench** | Physics / dynamics | Physical dynamics inference for video world models | [![arXiv](https://img.shields.io/badge/arXiv-2605.15185-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.15185) |
| **WorldPrediction** | General / planning | High-level world modeling and long-horizon procedural planning | [![arXiv](https://img.shields.io/badge/arXiv-2506.04363-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.04363) |
| **Evaluating the World Model Implicit in a Generative Model** | Language / implicit WM | Diagnostic extraction of implicit world knowledge | [![arXiv](https://img.shields.io/badge/arXiv-2406.03689-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.03689) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/keyonvafa/world-model-evaluation) |
| **Toward Memory-Aided World Models** | Memory / spatial consistency | Spatial consistency benchmark for memory-augmented WMs | [![arXiv](https://img.shields.io/badge/arXiv-2505.22976-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.22976) [![HuggingFace](https://img.shields.io/badge/🤗-Dataset-FFD21E)](https://huggingface.co/datasets/kevinLian/LoopNav) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Kevin-lkw/LoopNav) |
| **WM-ABench** | VLM internal world models | Atomic evaluation of internal world-modeling ability | [![arXiv](https://img.shields.io/badge/arXiv-2506.21876-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.21876) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://wm-abench.maitrix.org/) |
| **UNIVERSE** | VLM / video WM evaluation | Adapting VLMs for evaluating world models | [![arXiv](https://img.shields.io/badge/arXiv-2506.17967-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.17967) |
| **WR-Arena** | Reasoning agents | Arena-style benchmark for world reasoning | [![arXiv](https://img.shields.io/badge/arXiv-2603.25887-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.25887) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/MBZUAI-IFM/WR-Arena) |
| **Wow, wo, val!** | Embodied evaluation | Turing-test-style evaluation of embodied world models | [![arXiv](https://img.shields.io/badge/arXiv-2601.04137-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.04137) |
| **CityBench** | Urban / LLM world models | City-scale evaluation of LLMs as world models | [![arXiv](https://img.shields.io/badge/arXiv-2406.13945-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.13945) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/CityBench) |
| **WorldLens** | Driving | Full-spectrum driving WM evaluation | [![arXiv](https://img.shields.io/badge/arXiv-2512.10958-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.10958) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldbench.github.io/worldlens) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/worldbench/WorldLens) |
| **Beyond Simulation** | Driving / planning | Planning and causality in autonomous-driving world models | [![arXiv](https://img.shields.io/badge/arXiv-2508.01922-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.01922) |
| **MobileWorldBench** | Mobile GUI agents | Semantic world modeling for mobile agents | [![arXiv](https://img.shields.io/badge/arXiv-2512.14014-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.14014) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/jacklishufan/MobileWorld) |
| **SmallWorlds** | Controlled dynamics | Isolated-environment dynamics understanding | [![arXiv](https://img.shields.io/badge/arXiv-2511.23465-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.23465) |
| **Imagine the Unseen World** | Visual WM generalization | Systematic generalization in visual world models | [![arXiv](https://img.shields.io/badge/arXiv-2311.09064-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2311.09064) |
| **4DWorldBench** | 3D / 4D generation | Unified evaluation of 3D/4D world generation models | [![arXiv](https://img.shields.io/badge/arXiv-2511.19836-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.19836) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://yeppp27.github.io/4DWorldBench.github.io/) |
| **AeroVerse** | UAV / aerospace embodied WM | Simulation, pretraining, finetuning, and evaluation suite | [![arXiv](https://img.shields.io/badge/arXiv-2408.15511-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2408.15511) |
| **ViewBench** | Multi-view / 3D | Spatial consistency for multi-view world models | [![arXiv](https://img.shields.io/badge/arXiv-2602.07854-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.07854) |
| **WorldCoder-Bench** | 3D / code world synthesis | Executable, physically grounded Three.js world generation | [![arXiv](https://img.shields.io/badge/arXiv-2606.01869-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01869) |
| **World-in-World** | Closed-loop embodied evaluation | Unified benchmark and toolkit for embodied utility | [![arXiv](https://img.shields.io/badge/arXiv-2510.18135-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.18135) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/World-In-World/world-in-world) |
| **RoboWM-Bench** | Robotics | Manipulation-oriented world model evaluation | [![arXiv](https://img.shields.io/badge/arXiv-2604.19092-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.19092) |
| **HTEWorld** | Robotics / embodied | Long-horizon hybrid navigation-manipulation evaluation | [![arXiv](https://img.shields.io/badge/arXiv-2605.19957-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.19957) |
| **What-If World** | Embodied / causal | Causal interventions and counterfactual embodied dynamics | [![arXiv](https://img.shields.io/badge/arXiv-2605.27589-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27589) |
| **MiraBench** | Robotics | Action-conditioned reliability, physical adherence, optimism bias | [![arXiv](https://img.shields.io/badge/arXiv-2605.29360-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.29360) |
| **RoboTrustBench** | Robotics safety | Constraint, counterfactual, physical, and adversarial trustworthiness | [![arXiv](https://img.shields.io/badge/arXiv-2606.01600-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.01600) |
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
| **Awesome Interactive World Model** | Interactive video world modeling papers, benchmarks, datasets, and resources | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/jiliuxing/Awesome-Interactive-World-Model) |
| **Awesome-Physical-AI** | Physical AI: VLA models, world models, embodied robotic foundations | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/keon/awesome-physical-ai) |
| **Awesome-WAM** | World Action Models: survey, taxonomy, papers, data, and evaluation resources | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://openmoss.github.io/Awesome-WAM) |
| **World Model Survey Repo (Tsinghua FIB)** | Survey companion: understanding world or predicting future? | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/World-Model) |
| **Awesome Physics Cognition-based Video Generation** | Physics plausibility in video world models | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation) |
| **Awesome Robust Driving World Models** | Robustness-focused driving world models | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/MoyangSensei/AwesomeRobustDWM) |
| **Awesome World Models: A Hitchhiker's Guide** | Companion repo for *From Masks to Worlds*; emphasizes evolutionary roadmaps and memory-augmented world models | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/M-E-AGI-Lab/Awesome-World-Models) |
| **Learning to Model the World** | Survey-centered repo for a broad AI view of world models | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/JiahuaDong/Awesome-World-Models) |
| **Embodied AI Paper List (HCPLab-SYSU)** | Comprehensive embodied AI + world model papers | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/HCPLab-SYSU/Embodied_AI_Paper_List) |
| **Embodied World Models Survey (NJU3DV)** | Physical simulation + world models for embodied AI | [![GitHub](https://img.shields.io/badge/GitHub-List-181717?logo=github&logoColor=white)](https://github.com/NJU3DV-LoongGroup/Embodied-World-Models-Survey) |

### 🛠️ Open Toolkits & Platforms

| Resource | Focus | Links |
| --- | --- | --- |
| **NVIDIA Cosmos** | World foundation model platform for Physical AI (robots + AD); open-weight under permissive license | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVIDIA/Cosmos) [![arXiv](https://img.shields.io/badge/arXiv-2501.03575-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.03575) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.nvidia.com/en-us/ai/cosmos/) |
| **NVIDIA Cosmos 3** | Open omnimodal WFM unifying reasoning, world generation, simulation, and action modeling | [![arXiv](https://img.shields.io/badge/arXiv-2606.02800-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02800) [![Report](https://img.shields.io/badge/Report-Link-4C566A?logo=readthedocs&logoColor=white)](https://research.nvidia.com/labs/cosmos-lab/cosmos3/technical-report.pdf) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVIDIA/Cosmos) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/cosmos-lab/cosmos3/) |
| **NVIDIA Cosmos-Predict2.5** | Next-gen Cosmos WFM: flow-based, unifies Text/Image/Video2World; open checkpoints | [![arXiv](https://img.shields.io/badge/arXiv-2511.00062-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.00062) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVIDIA/Cosmos) |
| **stable-worldmodel** | Reproducible world-model research platform with data layer, baselines, planners, and OOD tasks | [![arXiv](https://img.shields.io/badge/arXiv-2605.21800-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.21800) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/galilai-group/stable-worldmodel) |
| **minWM** | Full-stack framework for building real-time interactive video world models from open video backbones | [![arXiv](https://img.shields.io/badge/arXiv-2605.30263-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30263) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/shengshu-ai/minWM) |
| **Nano World Models** | Minimalist future-video-prediction codebase with configs, eval scripts, and checkpoints | [![arXiv](https://img.shields.io/badge/arXiv-2605.23993-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.23993) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/simchowitzlabpublic/nano-world-model) |
| **SANA-WM** | Open minute-scale, 720p video world model with 6-DoF camera control | [![arXiv](https://img.shields.io/badge/arXiv-2605.15178-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.15178) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://nvlabs.github.io/Sana/WM/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVlabs/Sana) |
| **Causal Forcing** | Open recipe for real-time autoregressive video diffusion world rollouts | [![arXiv](https://img.shields.io/badge/arXiv-2602.02214-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.02214) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://thu-ml.github.io/CausalForcing.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/thu-ml/Causal-Forcing) |
| **Helios** | Open real-time long-video generation stack relevant to live world modeling | [![arXiv](https://img.shields.io/badge/arXiv-2603.04379-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.04379) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://pku-yuangroup.github.io/Helios-Page/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/PKU-YuanGroup/Helios) |
| **OpenDWM** | Open-source toolkit for driving world models (SenseTime) | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SenseTime-FVG/OpenDWM) |
| **Matrix-Game** | Open interactive game world model stack (SkyworkAI) | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/SkyworkAI/Matrix-Game) |
| **Genie Envisioner** | Open robotic manipulation world foundation platform | [![arXiv](https://img.shields.io/badge/arXiv-2508.05635-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.05635) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://genie-envisioner.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/AgibotTech/Genie-Envisioner) |
| **AgiBot World** | Large-scale manipulation platform and dataset for embodied world models | [![arXiv](https://img.shields.io/badge/arXiv-2503.06669-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.06669) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://agibot-world.com/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/OpenDriveLab/AgiBot-World) |
| **Gaussian World Model** | Gaussian world model codebase for robotic manipulation | [![arXiv](https://img.shields.io/badge/arXiv-2508.17600-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.17600) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://gaussian-world-model.github.io/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Gaussian-World-Model/gaussianwm) |
| **HY-World 2.0** | Open 3D world generation / simulation stack (Tencent) | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Tencent-Hunyuan/HY-World-2.0) |
| **HunyuanWorld 1.0** | Text/image-to-3D explorable world generation (Tencent) | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0) |
| **DreamerV3** | Reference implementation of the Dreamer family | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/danijar/dreamerv3) |
| **TD-MPC2** | Open-source TD-MPC2 codebase, 104 tasks | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/nicklashansen/tdmpc2) |
| **V-JEPA 2** | Meta's latest JEPA world model for video understanding and robotic planning | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/vjepa2) |
| **I-JEPA / V-JEPA** | Meta's original JEPA implementations | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/facebookresearch/jepa) |
| **Open-Oasis** | Open reproduction of Oasis Minecraft world model | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/etched-ai/open-oasis) |
| **DreamZero** | Open-source WAM stack with checkpoints, eval tooling, and embodiment adaptation scripts | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/dreamzero0/dreamzero) [![arXiv](https://img.shields.io/badge/arXiv-2602.15922-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.15922) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://dreamzero0.github.io/) |
| **EnerVerse-AC** | AgiBot's action-conditional embodied world model | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/AgibotTech/EnerVerse-AC) |
| **MultiWorld** | Scalable multi-agent multi-view video world model | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/CIntellifusion/MultiWorld) |
| **WorldLens** | WorldLens benchmark dataset + leaderboard | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/worldbench/WorldLens) |
| **DIAMOND** | Diffusion-based Atari world model + RL agent | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/eloialonso/diamond) |
| **LingBot-World** | Open-source general world simulator with real-time interactivity | [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/robbyant/lingbot-world) [![arXiv](https://img.shields.io/badge/arXiv-2601.20540-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.20540) |
| **Micro-World** | AMD open-source interactive world model for game-like environments | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://www.amd.com/en/developer/resources/technical-articles/introducing-micro-world.html) |

### 📊 Leaderboards & Benchmark Hubs

| Resource | Focus | Links |
| --- | --- | --- |
| **WorldLens Leaderboard** | Full-spectrum driving world model evaluation | [![HuggingFace](https://img.shields.io/badge/🤗-Leaderboard-FFD21E)](https://huggingface.co/spaces/worldbench/WorldLens) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/worldbench/WorldLens) |
| **WorldArena Leaderboard** | Official embodied world model leaderboard | [![HuggingFace](https://img.shields.io/badge/🤗-Leaderboard-FFD21E)](https://huggingface.co/spaces/WorldArena/WorldArena) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-arena.ai) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/WorldArena) |
| **WorldBench Dataset Hub** | Central HuggingFace hub for `videogen`, `occgen`, and `lidargen` resources | [![HuggingFace](https://img.shields.io/badge/🤗-Hub-FFD21E)](https://huggingface.co/worldbench/datasets) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldbench.github.io/) |
| **WorldBench Dataset** | Physics-centric benchmark dataset for world models and VLMs | [![HuggingFace](https://img.shields.io/badge/🤗-Dataset-FFD21E)](https://huggingface.co/datasets/worldbenchmark/WorldBench) |
| **WorldModelBench Dataset** | Benchmark dataset for judging video generation models as world models | [![HuggingFace](https://img.shields.io/badge/🤗-Dataset-FFD21E)](https://huggingface.co/datasets/Efficient-Large-Model/worldmodelbench) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://worldmodelbench.github.io/) |
| **WBench Leaderboard** | Multi-turn interactive video world model evaluation | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://meituan-longcat.github.io/WBench/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/meituan-longcat/WBench) |
| **ViewBench** | Multi-view spatial-consistency benchmark for world models | [![arXiv](https://img.shields.io/badge/arXiv-2602.07854-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.07854) |
| **V-JEPA 2 Model Collection** | Official Meta V-JEPA 2 checkpoints (ViT-L/H/G) | [![HuggingFace](https://img.shields.io/badge/🤗-Models-FFD21E)](https://huggingface.co/collections/facebook/v-jepa-2-6841bad8413014e185b497a6) |

### 🗃️ Datasets & Data Collections

| Resource | Focus | Links |
| --- | --- | --- |
| **WorldArena_Robotwin2.0** | Official dataset behind WorldArena embodied evaluation | [![HuggingFace](https://img.shields.io/badge/🤗-Dataset-FFD21E)](https://huggingface.co/datasets/WorldArena/WorldArena_Robotwin2.0) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/tsinghua-fib-lab/WorldArena) |
| **MobileWorld** | Large-scale semantic world-model dataset for mobile GUI agents | [![arXiv](https://img.shields.io/badge/arXiv-2512.14014-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.14014) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/jacklishufan/MobileWorld) |
| **MotionScape** | Highly dynamic UAV-view dataset for world models | [![arXiv](https://img.shields.io/badge/arXiv-2604.07991-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.07991) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Thelegendzz/MotionScape) |
| **OmniWorld** | Multi-domain, multi-modal 4D world modeling dataset and benchmark | [![arXiv](https://img.shields.io/badge/arXiv-2509.12201-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.12201) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://yangzhou24.github.io/OmniWorld/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/yangzhou24/OmniWorld) [![HuggingFace](https://img.shields.io/badge/🤗-Dataset-FFD21E)](https://huggingface.co/datasets/InternRobotics/OmniWorld) |
| **EgoVerse** | Large-scale egocentric human dataset for robot learning and transfer | [![arXiv](https://img.shields.io/badge/arXiv-2604.07607-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.07607) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://egoverse.ai/) |
| **RealWM / RealWM120K** | Real-world interactive world-model data used by MagicWorld-style exploration | [![arXiv](https://img.shields.io/badge/arXiv-2511.18886-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.18886) |
| **LoopNav** | Spatial-consistency benchmark data for memory-aided world models | [![arXiv](https://img.shields.io/badge/arXiv-2505.22976-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.22976) [![HuggingFace](https://img.shields.io/badge/🤗-Dataset-FFD21E)](https://huggingface.co/datasets/kevinLian/LoopNav) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/Kevin-lkw/LoopNav) |
| **MicroVerse / MicroWorldBench** | Microscale simulation data and rubric-based benchmark | [![arXiv](https://img.shields.io/badge/arXiv-2603.00585-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.00585) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/FreedomIntelligence/MicroVerse) |

[⬆ Back to Top](#-table-of-contents)

---

## 📝 Selected Technical Blogs & Reports

> This section is intentionally selective. It favors official research-lab posts, technical reports, and a small number of high-signal explainers over general-audience trend pieces.

### 🇺🇸 English — Official Labs & Primary Sources

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
| **Cosmos 3: Omnimodal World Models for Physical AI** | NVIDIA Technical Report | 2026 | [![arXiv](https://img.shields.io/badge/arXiv-2606.02800-b31b1b?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02800) [![Report](https://img.shields.io/badge/Report-Link-4C566A?logo=readthedocs&logoColor=white)](https://research.nvidia.com/labs/cosmos-lab/cosmos3/technical-report.pdf) [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://research.nvidia.com/labs/cosmos-lab/cosmos3/) [![GitHub](https://img.shields.io/badge/GitHub-Code-181717?logo=github&logoColor=white)](https://github.com/NVIDIA/Cosmos) |
| **SIMA: A generalist AI agent for 3D virtual environments** | Google DeepMind | 2024 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/) |
| **The Path to Real-Time Worlds and Why It Matters** | Over.world | 2025 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://over.world/blog/the-path-to-real-time-worlds-and-why-it-matters) |
| **Deep Dive into Yann LeCun's JEPA** | Rohit Bandaru | 2024 | [![Blog](https://img.shields.io/badge/Blog-Post-F97316?logo=rss&logoColor=white)](https://rohitbandaru.github.io/blog/JEPA-Deep-Dive/) |
| **World Model Workshop at Mila** | Mila Workshop | 2026 | [![Project](https://img.shields.io/badge/Project-Page-0A66C2?logo=googlechrome&logoColor=white)](https://world-model-mila.github.io/) |

### 🇨🇳 Chinese — 官方解读 / 学术向文章

| Title | Author / Source | Year | Link |
|-------|----------------|------|------|
| **理解世界还是预测未来？清华大学世界模型全面综述** | 清华 FIB Lab / 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/1967697137530832733) |
| **具身智能领域最新世界模型综述：250篇paper梳理主流框架** | 具身智能之心 / 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/1967159024907690109) |
| **从专用模型到通用模型：2025年的最后一篇世界模型综述** | 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/1988591389060124728) |
| **在2025年年初聊一下世界模型（上）** | 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/25896058607) |
| **在2025年年初聊一下世界模型（下）** | 知乎 | 2025 | [![Blog](https://img.shields.io/badge/知乎-Post-0084FF?logo=zhihu&logoColor=white)](https://zhuanlan.zhihu.com/p/26427854460) |
| **ACM综述：理解世界还是预测未来？（清华FIB Lab官方解读）** | 清华FIB Lab 官网 | 2025 | [![Blog](https://img.shields.io/badge/Official-Post-4C566A?logo=readthedocs&logoColor=white)](https://fi.ee.tsinghua.edu.cn/news/20/) |

[⬆ Back to Top](#-table-of-contents)

---

## 📖 Citation

If you find this repository useful in your research, please cite this curated list:

```bibtex
@misc{openenvision2026awesomeworldmodels,
  title={Awesome World Models},
  author={{OpenEnvision Contributors}},
  year={2026},
  howpublished={GitHub repository},
  url={https://github.com/OpenEnvision/Awesome-World-Models},
  note={A scope-aware, paper-first curated list of world model research}
}
```

For background, please also consider citing key foundational works:

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

PRs are welcome. For lightweight suggestions, open a [paper suggestion issue](https://github.com/OpenEnvision/Awesome-World-Models/issues/new?template=paper.yml). For curated additions or taxonomy changes, please open a pull request and follow [CONTRIBUTING.md](CONTRIBUTING.md).

The preferred entry format is:

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
