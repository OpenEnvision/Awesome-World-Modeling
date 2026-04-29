# 🌍 Awesome World Models

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-blue.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

> **A comprehensive, academically structured curated list of world model research.**  
> Organized by paradigm (Generative · Representational · Agentic), then by domain/task, then by architecture.  
---
## Definition and scope

### A short working definition

A **world model** is an internal predictive model of an environment that helps an agent answer some version of:

> **What will happen if I act, wait, intervene, or imagine an alternative future?**

That definition is intentionally broader than model-based RL, but narrower than "any model that understands the world".

### World model vs. nearby concepts

| Concept | Core question | Typical output |
| --- | --- | --- |
| world model | what happens next under state, action, or intervention? | future observations, latent states, occupancy, trajectories, or executable rollouts |
| simulator | can the environment be replayed or executed? | environment transitions, often hand-built or learned |
| planner / policy | what should the agent do? | actions, plans, control sequences |
| perception model | what is in the scene now? | labels, detections, depth, segmentation |

### Three consistency checks

These three checks are useful when deciding whether a new paper belongs on the list:

- **Modality consistency**: can the model connect language, perception, action, and state in a coherent way?
- **Spatial consistency**: does it preserve object identity, geometry, layout, and 3D structure?
- **Temporal consistency**: does it model how the world evolves over time, especially under actions or interventions?

### A practical boundary

A paper is strongest as a world-model entry when it does at least two of the following:

1. models state,
2. predicts state evolution under action or intervention,
3. supports imagination, planning, evaluation, or controllable simulation.

If it only renders plausible video frames without state, action, or decision relevance, it is usually better treated as a neighboring generative model rather than a core world model.

---
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
---

## 0 · Mind World Models — Biological Origins & Foundational Definitions

> The concept of a "world model" originates in cognitive science and neuroscience. An agent's internal model of its environment allows it to predict sensory consequences of its own actions—the computational substrate of planning, imagination, and counterfactual reasoning. The papers below form the intellectual backbone of modern machine world models.

### 0.1 Foundational Cognitive & Neuroscientific Works

- **Occupancy Grids** — Elfes, A. "Using Occupancy Grids for Mobile Robot Perception and Navigation." *Computer* (1989). [[Paper](http://www.sci.brooklyn.cuny.edu/~parsons/courses/3415-fall-2011/papers/elfes.pdf)]  
  > First computational formalization of a spatial world model for a physical agent.

- **World Models (Ha & Schmidhuber)** — Ha, D. & Schmidhuber, J. "World Models." *arXiv* 1803.10122 (2018). [[arXiv](https://arxiv.org/abs/1803.10122)] [[Website](https://worldmodels.github.io/)]  
  > Seminal work: learn a compressed (V) perception model + recurrent (M) world model, train a small controller (C) entirely inside imagination. Introduced MDN-RNN for stochastic world model.

- **A Path Towards Autonomous Machine Intelligence (LeCun)** — LeCun, Y. "A Path Towards Autonomous Machine Intelligence." *OpenReview* (2022). [[Paper](https://openreview.net/pdf?id=BZ5a1r-kVsf)]  
  > Proposes a modular architecture centered on a **Joint Embedding Predictive Architecture (JEPA)** world model for energy-efficient reasoning without pixel-level generation.

- **Predictive Coding / Free Energy Principle** — Friston, K. "The free-energy principle: a unified brain theory?" *Nature Reviews Neuroscience* (2010). [[Paper](https://www.nature.com/articles/nrn2787)]  
  > Neuro-scientific grounding: the brain as a hierarchical Bayesian inference machine minimizing prediction error.

- **Successor Representations** — Dayan, P. "Improving Generalization for Temporal Difference Learning: The Successor Representation." *Neural Computation* (1993).  
  > Foundational representation: encode the future occupancy of states rather than immediate reward.

- **Mental Simulation / Theory of Mind** — Battaglia, P. et al. "Simulation as an engine of physical scene understanding." *PNAS* (2013). [[Paper](https://www.pnas.org/doi/10.1073/pnas.1306572110)]  
  > Humans use fast approximate physics simulators as a world model for intuitive physics.

### 0.2 Formative Computational World Model Papers

- **Recurrent World Models Facilitate Policy Evolution** — Ha, D. & Schmidhuber, J. *NeurIPS* 2018. [[Paper](https://papers.nips.cc/paper_files/paper/2018/hash/2de5d16682c3c35007e4bbd7153108d1-Abstract.html)]

- **Learning Latent Dynamics for Planning (PlaNet)** — Hafner, D. et al. *ICML* 2019. [[arXiv](https://arxiv.org/abs/1811.04551)] [[Code](https://github.com/google-research/planet)]  
  > Introduced RSSM (Recurrent State-Space Model): separate deterministic and stochastic latent paths; latent-space cross-entropy planning.

- **Dream to Control (Dreamer)** — Hafner, D. et al. *ICLR* 2020. [[arXiv](https://arxiv.org/abs/1912.01603)] [[Code](https://github.com/google-research/dreamer)]  
  > Actor-critic entirely trained in latent-dream world; strong Atari & continuous control benchmark results.

- **Mastering Atari with Discrete World Models (DreamerV2)** — Hafner, D. et al. *ICLR* 2021. [[arXiv](https://arxiv.org/abs/2010.02193)] [[Code](https://github.com/danijar/dreamerv2)]  
  > Discrete latent variables via straight-through gradients; matches Rainbow DQN with no environment interaction during policy training.

- **Mastering Diverse Domains with World Models (DreamerV3)** — Hafner, D. et al. (2023). [[arXiv](https://arxiv.org/abs/2301.04104)] [[Code](https://github.com/danijar/dreamerv3)]  
  > Single fixed hyperparameter set generalizing across continuous control, Atari, DMLab, Minecraft, ProcGen, and BSuite.

---

## 1 · Generative World Models

> Generative world models explicitly synthesize sensory observations (pixels, point clouds, tokens) of plausible futures conditioned on actions or language. Their primary value is as **learned simulators** and **data augmenters**.

---

### 1.1 Game & Interactive World Simulation

> These models simulate game environments frame-by-frame conditioned on player actions, essentially replacing traditional game engines with neural networks.

#### 1.1.1 Pixel-Space Diffusion Models

- **GameNGen** — Valevski, D. et al. "Diffusion Models Are Real-Time Game Engines." *arXiv* 2408.14837 (2024). [[arXiv](https://arxiv.org/abs/2408.14837)]  
  > First real-time neural game engine simulating DOOM at >20 FPS; diffusion model conditioned on action history.

- **DIAMOND** — Alonso, E. et al. "Diffusion for World Modeling: Visual Details Matter in Atari." *NeurIPS* 2024. [[arXiv](https://arxiv.org/abs/2405.12399)] [[Code](https://github.com/eloialonso/diamond)]  
  > Diffusion-based world model trained on Atari achieving state-of-the-art imagination quality; highlights visual fidelity for downstream RL.

- **Matrix-Game** — "Matrix-Game: Interactive World Foundation Model." *arXiv* 2506.18701 (2025). [[arXiv](https://arxiv.org/abs/2506.18701)] [[Code](https://github.com/SkyworkAI/Matrix-Game)]  
  > Open-source interactive world foundation model for gaming; controllable action-conditioned video generation.

- **Matrix-Game 2.0** — "Matrix-Game 2.0: An Open-Source, Real-Time, and Streaming Interactive World Model." *arXiv* 2508.13009 (2025). [[arXiv](https://arxiv.org/abs/2508.13009)] [[Website](https://matrix-game-v2.github.io/)]  
  > Streaming real-time extension with improved consistency and interactivity.

#### 1.1.2 Autoregressive Transformer Models

- **Oasis** — "Oasis: A Universe in a Transformer." (2024). [[Website](https://oasis-model.github.io/)]  
  > Transformer world model generating Minecraft interactively, token by token, without a game engine.

- **MineWorld** — "MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft." *arXiv* 2504.07257 (2025). [[arXiv](https://arxiv.org/abs/2504.07257)] [[Website](https://aka.ms/mineworld)]  
  > Real-time interactive world model; open-sourced for the Minecraft environment.

- **GameFactory** — Wen, Y. et al. "GameFactory: Creating New Games with Generative Interactive Videos." *arXiv* 2501.08325 (2025). [[arXiv](http://arxiv.org/abs/2501.08325)] [[Website](https://yujiwen.github.io/gamefactory/)] [[Code](https://github.com/KwaiVGI/GameFactory)]  
  > Generates entirely new game experiences via generative interactive video.

- **AnimeGamer** — "AnimeGamer: Infinite Anime Life Simulation with Next Game State Prediction." *arXiv* 2504.01014 (2025). [[arXiv](http://arxiv.org/abs/2504.01014)] [[Website](https://howe125.github.io/AnimeGamer.github.io/)]

#### 1.1.3 Memory-Augmented & Long-Horizon Game Worlds

- **WorldMem** — "WorldMem: Long-term Consistent World Simulation with Memory." *arXiv* 2504.12369 (2025). [[arXiv](http://arxiv.org/abs/2504.12369)] [[Website](https://xizaoqu.github.io/worldmem/)] [[Code](https://github.com/xizaoqu/WorldMem)]  
  > Addresses long-term consistency through an explicit memory module; enables coherent multi-minute gameplay.

- **RealPlay** — "From Virtual Games to Real-World Play." *arXiv* 2506.18901 (2025). [[arXiv](https://arxiv.org/abs/2506.18901)] [[Website](https://wenqsun.github.io/RealPlay/)] [[Code](https://github.com/wenqsun/Real-Play)]  
  > Bridges game-world training and real-world embodied play through shared world representations.

- **Waypoint-1** — "The Path to Real-Time Worlds and Why It Matters." *Over.world Blog* (2025). [[Blog](https://over.world/blog/the-path-to-real-time-worlds-and-why-it-matters)]

---

### 1.2 Autonomous Driving — Generative

> Generative driving world models synthesize future sensor observations (camera, LiDAR, radar) conditioned on ego trajectory, agent behaviors, weather, or language commands. They serve as learned simulators for data augmentation, safety evaluation, and closed-loop training.

#### 1.2.1 Multi-View Video Generation (Camera-Based)

- **GAIA-1** — Hu, A. et al. "Introducing GAIA-1: A Cutting-Edge Generative AI Model for Autonomy." *Wayve* (2023). [[arXiv](https://arxiv.org/abs/2309.17080)] [[Blog](https://wayve.ai/thinking/introducing-gaia1/)]  
  > First large-scale autoregressive video world model for driving, conditioned on video, text, and actions; generates realistic multi-camera sequences.

- **GAIA-2** — "GAIA-2: A Controllable Multi-View Generative World Model for Autonomous Driving." *arXiv* 2503.20523 (2025). [[arXiv](https://arxiv.org/abs/2503.20523)] [[Website](https://wayve.ai/thinking/gaia-2)]  
  > Multi-view extension with fine-grained controllability over agent behaviors and scene attributes.

- **DriveDreamer** — "DriveDreamer: Towards Real-world-driven World Models for Autonomous Driving." *ECCV* 2024. [[arXiv](https://arxiv.org/abs/2309.09777)] [[Code](https://github.com/JeffWang987/DriveDreamer)]

- **DriveDreamer4D** — "World Models Are Effective Data Machines for 4D Driving Scene Generation." *arXiv* 2410.13571 (2024). [[arXiv](https://arxiv.org/abs/2410.13571)]

- **MiLA** — "MiLA: Multi-view Intensive-fidelity Long-term Video Generation World Model for Autonomous Driving." *arXiv* 2503.15875 (2025). [[arXiv](https://arxiv.org/abs/2503.15875)] [[Website](https://github.com/xiaomi-mlab/mila.github.io)]

- **Cosmos-Drive-Dreams** — "Cosmos-Drive-Dreams: Scalable Synthetic Driving Data Generation with World Foundation Models." *arXiv* 2506.09042 (2025). [[arXiv](https://arxiv.org/abs/2506.09042)] [[Website](https://research.nvidia.com/labs/toronto-ai/cosmos_drive_dreams)]  
  > NVIDIA's Cosmos-based large-scale synthetic data pipeline for autonomous driving.

- **PosePilot** — "PosePilot: Steering Camera Pose for Generative World Models with Self-supervised Depth." *arXiv* 2505.01729 (2025). [[arXiv](https://arxiv.org/abs/2505.01729)]

- **GEM** — "GEM: A Generalizable Ego-Vision Multimodal World Model for Fine-Grained Ego-Motion, Object Dynamics, and Scene Composition Control." *arXiv* 2412.11198 (2024). [[arXiv](https://arxiv.org/abs/2412.11198)] [[Website](https://vita-epfl.github.io/GEM.github.io/)]

- **ReconDreamer** — "ReconDreamer: Crafting World Models for Driving Scene Reconstruction via Online Restoration." *arXiv* 2411.19548 (2024). [[arXiv](https://arxiv.org/abs/2411.19548)] [[Website](https://recondreamer.github.io/)]

- **InfinityDrive** — "InfinityDrive: Breaking Time Limits in Driving World Models." *arXiv* 2412.01522 (2024). [[arXiv](https://arxiv.org/abs/2412.01522)] [[Website](https://metadrivescape.github.io/papers_project/InfinityDrive/page.html)]

- **LongDWM** — "LongDWM: Cross-Granularity Distillation for Building a Long-Term Driving World Model." *arXiv* 2506.01546 (2025). [[arXiv](https://arxiv.org/abs/2506.01546)] [[Website](https://wang-xiaodong1899.github.io/longdwm/)]

- **Dreamland** — "Dreamland: Controllable World Creation with Simulator and Generative Models." *arXiv* 2506.08006 (2025). [[arXiv](https://arxiv.org/abs/2506.08006)] [[Website](https://metadriverse.github.io/dreamland/)]

- **SimWorld** — "SimWorld: A Unified Benchmark for Simulator-Conditioned Scene Generation via World Model." *arXiv* 2503.13952 (2025). [[arXiv](https://arxiv.org/abs/2503.13952)]

- **UniFuture** — "Seeing the Future, Perceiving the Future: A Unified Driving World Model for Future Generation and Perception." *ICRA* 2026. [[arXiv](https://arxiv.org/abs/2503.13587)]

- **STAGE** — "STAGE: A Stream-Centric Generative World Model for Long-Horizon Driving-Scene Simulation." *arXiv* 2506.13138 (2025). [[arXiv](https://arxiv.org/abs/2506.13138)]

- **ReSim** — "ReSim: Reliable World Simulation for Autonomous Driving." *arXiv* 2506.09981 (2025). [[arXiv](https://arxiv.org/abs/2506.09981)] [[Code](https://github.com/OpenDriveLab/ReSim)] [[Website](https://opendrivelab.com/ReSim)]

- **DriVerse** — "DriVerse: Navigation World Model for Driving Simulation via Multimodal Trajectory Prompting and Motion Alignment." *arXiv* 2504.18576 (2025). [[arXiv](https://arxiv.org/abs/2504.18576)]

- **Epona** — "Epona: Autoregressive Diffusion World Model for Autonomous Driving." *arXiv* 2506.24113 (2025). [[arXiv](https://arxiv.org/abs/2506.24113)] [[Website](https://kevin-thu.github.io/Epona/)]

- **MaskGWM** — "MaskGWM: A Generalizable Driving World Model with Video Mask Reconstruction." *arXiv* 2502.11663 (2025). [[arXiv](https://arxiv.org/abs/2502.11663)]

#### 1.2.2 Occupancy & BEV-Based Generative Models

- **OccWorld** — "OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving." *ECCV* 2024. [[arXiv](https://arxiv.org/abs/2311.16038)] [[Code](https://github.com/wzzheng/OccWorld)]  
  > Autoregressive generation of 3D occupancy grids as a spatiotemporal world model.

- **GaussianWorld** — "GaussianWorld: Gaussian World Model for Streaming 3D Occupancy Prediction." *arXiv* 2412.04380 (2024). [[arXiv](https://arxiv.org/abs/2412.04380)] [[Code](https://github.com/zuosc19/GaussianWorld)]  
  > 3D Gaussian representation for streaming occupancy prediction; spatially structured world model.

- **DynamicCity** — "DynamicCity: Large-Scale 4D Occupancy Generation from Dynamic Scenes." *arXiv* 2410.18084 (2024). [[arXiv](https://arxiv.org/abs/2410.18084)] [[Website](https://dynamic-city.github.io)] [[Code](https://github.com/3DTopia/DynamicCity)]

- **SparseWorld** — "SparseWorld: A Flexible, Adaptive, and Efficient 4D Occupancy World Model Powered by Sparse and Dynamic Queries." *arXiv* 2510.17482 (2025). [[arXiv](https://arxiv.org/abs/2510.17482)] [[Code](https://github.com/MSunDYY/SparseWorld)]

- **COME** — "COME: Adding Scene-Centric Forecasting Control to Occupancy World Model." *arXiv* 2506.13260 (2025). [[arXiv](https://arxiv.org/abs/2506.13260)] [[Code](https://github.com/synsin0/COME)]

- **EOT-WM** — "Other Vehicle Trajectories Are Also Needed: A Driving World Model Unifies Ego-Other Vehicle Trajectories in Video Latent Space." *arXiv* 2503.09215 (2025). [[arXiv](https://arxiv.org/abs/2503.09215)]

- **Semi-Supervised Occupancy WM** — "Semi-Supervised Vision-Centric 3D Occupancy World Model for Autonomous Driving." *arXiv* 2502.07309 (2025). [[arXiv](https://arxiv.org/abs/2502.07309)]

- **Temporal Triplane Transformers** — "Temporal Triplane Transformers as Occupancy World Models." *arXiv* 2503.07338 (2025). [[arXiv](https://arxiv.org/abs/2503.07338)]

- **NRSeg** — "NRSeg: Noise-Resilient Learning for BEV Semantic Segmentation via Driving World Models." *arXiv* 2507.04002 (2025). [[arXiv](https://arxiv.org/abs/2507.04002)] [[Code](https://github.com/lynn-yu/NRSeg)]

#### 1.2.3 LiDAR & 4D Point Cloud Generative Models

- **Copilot4D** — "Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion." *ICLR* 2024. [[arXiv](https://arxiv.org/abs/2311.01017)]  
  > Discrete diffusion for LiDAR point cloud prediction; unsupervised 4D world model.

- **AD-L-JEPA** — "AD-L-JEPA: Self-Supervised Spatial World Models with Joint Embedding Predictive Architecture for Autonomous Driving with LiDAR Data." *arXiv* 2501.04969 (2025). [[arXiv](https://arxiv.org/abs/2501.04969)]  
  > JEPA-style self-supervised LiDAR world model; predicts future abstract representations (not pixels).

- **LiDARCrafter** — "LiDARCrafter: Dynamic 4D World Modeling from LiDAR Sequences." *arXiv* 2508.03692 (2025). [[arXiv](https://arxiv.org/abs/2508.03692)] [[Website](https://lidarcrafter.github.io)] [[Code](https://github.com/lidarcrafter/toolkit)]

- **FASTopoWM** — "FASTopoWM: Fast-Slow Lane Segment Topology Reasoning with Latent World Models." *arXiv* 2507.23325 (2025). [[arXiv](https://arxiv.org/abs/2507.23325)] [[Code](https://github.com/YimingYang23/FASTopoWM)]

- **Towards Foundational LiDAR World Models** — "Towards foundational LiDAR world models with efficient latent flow matching." *arXiv* 2506.23434 (2025). [[arXiv](https://arxiv.org/abs/2506.23434)]

#### 1.2.4 Language-Guided & Multimodal Driving World Models

- **DrivingGPT** — "DrivingGPT: Unifying Driving World Modeling and Planning with Multi-modal Autoregressive Transformers." *arXiv* 2412.18607 (2024). [[arXiv](https://arxiv.org/abs/2412.18607)] [[Website](https://rogerchern.github.io/DrivingGPT/)]

- **DrivingWorld** — "DrivingWorld: Constructing World Model for Autonomous Driving via Video GPT." *arXiv* 2412.19505 (2024). [[arXiv](https://arxiv.org/abs/2412.19505)] [[Code](https://github.com/YvanYin/DrivingWorld)] [[Website](https://huxiaotaostasy.github.io/DrivingWorld/index.html)]

- **HERMES** — "HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation." *ICCV* 2025. [[arXiv](https://arxiv.org/abs/2501.14729)]

- **OmniNWM** — "OmniNWM: Omniscient Driving Navigation World Models." *arXiv* 2510.18313 (2025). [[arXiv](https://arxiv.org/abs/2510.18313)] [[Website](https://arlo0o.github.io/OmniNWM/)]

- **FutureSightDrive** — "FutureSightDrive: Thinking Visually with Spatio-Temporal CoT for Autonomous Driving." *arXiv* 2505.17685 (2025). [[arXiv](https://arxiv.org/abs/2505.17685)] [[Code](https://github.com/MIV-XJTU/FSDrive)]

- **SceneDiffuser++** — "SceneDiffuser++: City-Scale Traffic Simulation via a Generative World Model." *arXiv* 2506.21976 (2025). [[arXiv](https://arxiv.org/abs/2506.21976)]

- **Orbis** — "Orbis: Overcoming Challenges of Long-Horizon Prediction in Driving World Models." *arXiv* 2507.13162 (2025). [[arXiv](https://arxiv.org/abs/2507.13162)] [[Website](https://lmb-freiburg.github.io/orbis.github.io/)]

- **GeoDrive** — "GeoDrive: 3D Geometry-Informed Driving World Model with Precise Action Control." *arXiv* 2505.22421 (2025). [[arXiv](https://arxiv.org/abs/2505.22421)] [[Code](https://github.com/antonioo-c/GeoDrive)]

- **InfiniCube** — "InfiniCube: Unbounded and Controllable Dynamic 3D Driving Scene Generation with World-Guided Video Models." *arXiv* 2412.03934 (2024). [[arXiv](https://arxiv.org/abs/2412.03934)] [[Website](https://research.nvidia.com/labs/toronto-ai/infinicube/)]

- **Imagine-2-Drive** — "Imagine-2-Drive: High-Fidelity World Modeling in CARLA for Autonomous Vehicles." *arXiv* 2411.10171 (2024). [[arXiv](https://arxiv.org/abs/2411.10171)] [[Website](https://anantagrg.github.io/Imagine-2-Drive.github.io/)]

- **Physical Informed Driving WM** — "Physical Informed Driving World Model." *arXiv* 2412.08410 (2024). [[arXiv](https://arxiv.org/abs/2412.08410)] [[Website](https://metadrivescape.github.io/papers_project/DrivePhysica/page.html)]

---

### 1.3 Embodied AI & Robotics — Generative

> Generative world models in embodied AI simulate the visual or physical consequences of robot actions, enabling policy training in imagination and data-efficient learning.

#### 1.3.1 Robotic Manipulation

- **UniSim** — Yang, S. et al. "Learning Interactive Real-World Simulators." *ICLR* 2024. [[arXiv](https://arxiv.org/abs/2310.06114)] [[Website](https://universal-simulator.github.io/)]  
  > Universal neural simulator of real-world physics; trained on diverse action-conditioned data to generalize across robot morphologies.

- **IRASim** — "IRASim: Learning Interactive Real-Robot Action Simulators." *arXiv* 2406.14540 (2024). [[arXiv](https://arxiv.org/abs/2406.14540)] [[Code](https://github.com/bytedance/IRASim)]

- **GROOT** — "GROOT: Learning to Follow Instructions by Watching Gameplay Videos." *arXiv* 2310.08235 (2023). [[arXiv](https://arxiv.org/abs/2310.08235)]

- **RoboDreamer** — "RoboDreamer: Learning Compositional World Models for Robot Imagination." *arXiv* 2404.12377 (2024). [[arXiv](https://arxiv.org/abs/2404.12377)]

- **IRL-VLA** — "IRL-VLA: Training a Vision-Language-Action Policy via Reward World Model." *arXiv* 2508.06571 (2025). [[arXiv](https://arxiv.org/abs/2508.06571)] [[Website](https://lidarcrafter.github.io)] [[Code](https://github.com/lidarcrafter/toolkit)]

- **WorldScape** — "WorldScape: A Unified Real-time World Model Integrating Locomotion and Manipulation." *Manifold AI Blog* (2025). [[Blog](https://manifoldai.cn/blogs/WorldScape.html)]

#### 1.3.2 Navigation & Scene Understanding

- **NWM (Navigation World Model)** — "Navigation World Models." *CVPR* 2025. [[arXiv](https://arxiv.org/abs/2403.12845)] [[Website](https://www.amirbar.net/nwm/)]  
  > Predicts future egocentric observations conditioned on proposed waypoints; supports planning in novel environments without task-specific fine-tuning.

- **SuSIE** — "Zero-Shot Robot Task Planning using Large Language Model and Latent Diffusion Models." *arXiv* 2311.18588 (2023). [[arXiv](https://arxiv.org/abs/2311.18588)]

#### 1.3.3 Locomotion & Full-Body Control

- **DreamerV3 for Minecraft** — Hafner, D. et al. "Mastering Diverse Domains with World Models." (2023). [[arXiv](https://arxiv.org/abs/2301.04104)] [[Code](https://github.com/danijar/dreamerv3)]  
  > First model to achieve diamond collection in Minecraft from scratch using a world model.

- **TD-MPC2** — "TD-MPC2: Scalable, Robust World Models for Continuous Control." *ICLR* 2024. [[arXiv](https://arxiv.org/abs/2310.16828)] [[Code](https://github.com/nicklashansen/tdmpc2)]  
  > Temporal Difference Learning with Model Predictive Control; scales across 104 continuous control tasks.

#### 1.3.4 World-Model-Based Vision-Language-Action (VLA) Models

- **UniSim (Action)** — (see above)

- **RealDreamer** — "RealDreamer: Real-World Robotic Manipulation Using Imagination." *arXiv* 2406.12063 (2024). [[arXiv](https://arxiv.org/abs/2406.12063)]

- **Do World Action Models Generalize Better than VLAs?** — "Do World Action Models Generalize Better than VLAs? A Robustness Study." *arXiv* 2603.22078 (2026). [[arXiv](https://arxiv.org/abs/2603.22078)]  
  > Empirical comparison of world-model-based action policies vs. direct VLA policies under distribution shift.

- **DriveVLA-W0** — "DriveVLA-W0: World Models Amplify Data Scaling Law in Autonomous Driving." *arXiv* 2510.12796 (2025). [[arXiv](https://arxiv.org/abs/2510.12796)] [[Code](https://github.com/BraveGroup/DriveVLA-W0)]

---

### 1.4 3D / 4D Scene Generation

> Models that generate three-dimensional or four-dimensional (spatial + temporal) world representations, typically as explorable environments.

#### 1.4.1 Neural Radiance Fields & Gaussian-Based

- **EmerNeRF** — "EmerNeRF: Emergent Spatial-Temporal Scene Decomposition via Self-Supervision." *ICLR* 2024. [[arXiv](https://arxiv.org/abs/2311.02077)] [[Code](https://github.com/NVlabs/EmerNeRF)]

- **GaussianWorld** — (also in §1.2.2) 3D Gaussian Splatting as a streaming occupancy world model.

- **HunyuanWorld 1.0** — "HunyuanWorld 1.0: Generating Immersive, Explorable, and Interactive 3D Worlds from Words or Pixels." *arXiv* 2507.21809 (2025). [[arXiv](https://arxiv.org/abs/2507.21809)] [[Website](https://3d-models.hunyuan.tencent.com/world/)] [[Code](https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0)]  
  > Text/image-to-3D immersive world generation with mesh-based explorable environments.

- **Matrix-3D** — "Matrix-3D: Omnidirectional Explorable 3D World Generation." *arXiv* 2508.08086 (2025). [[arXiv](https://arxiv.org/abs/2508.08086)] [[Website](https://matrix-3d.github.io)]  
  > 360° navigable 3D world generation from a single image or text prompt.

#### 1.4.2 Video-to-3D / 4D World Models

- **4D-Scene** — "4D Gaussian Splatting for Real-Time Dynamic Scene Rendering." *CVPR* 2024. [[arXiv](https://arxiv.org/abs/2310.08528)] [[Code](https://github.com/hustvl/4DGaussians)]

- **DynamicCity** — (see §1.2.2) 4D occupancy generation from dynamic scenes.

- **InfiniCube** — (see §1.2.4) Unbounded controllable dynamic 3D scene generation.

---

### 1.5 Scientific & Physical World Modeling

> World models that simulate physical, biological, or earth-science processes rather than human-scale scenes.

#### 1.5.1 Physics Simulation & Intuitive Physics

- **DPI-Net** — Li, Y. et al. "Learning Particle Dynamics for Manipulating Rigid Bodies, Deformable Objects, and Fluids." *ICLR* 2019. [[arXiv](https://arxiv.org/abs/1810.01566)]  
  > Graph neural network world model for particle-based physics simulation.

- **FIGNet** — "Learning rigid body physics from videos." (DeepMind, 2023). [[arXiv](https://arxiv.org/abs/2312.14219)]

- **Physics Cognition in Video Generation** — "Exploring the Evolution of Physics Cognition in Video Generation: A Survey." *arXiv* 2503.21765 (2025). [[arXiv](https://arxiv.org/abs/2503.21765)] [[Website](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation)]

#### 1.5.2 Climate & Earth System World Models

- **Pangu-Weather** — Bi, K. et al. "Accurate medium-range global weather forecasting with 3D neural networks." *Nature* (2023). [[Paper](https://www.nature.com/articles/s41586-023-06185-3)]  
  > 3D Earth Transformer for medium-range weather forecasting; faster and more accurate than traditional NWP.

- **GraphCast** — Lam, R. et al. "Learning skillful medium-range global weather forecasting." *Science* (2023). [[Paper](https://www.science.org/doi/10.1126/science.adi2336)]

#### 1.5.3 Molecular & Biological World Models

- **AlphaFold 3** — Abramson, J. et al. "Accurate structure prediction of biomolecular interactions with AlphaFold 3." *Nature* (2024). [[Paper](https://www.nature.com/articles/s41586-024-07487-w)]  
  > Generative diffusion-based world model of molecular interactions and protein structures.

---

## 2 · Representational World Models

> Representational world models learn **structured internal state representations** of the environment without necessarily generating pixel-faithful observations. The emphasis is on encoding abstract, task-relevant features sufficient for planning and prediction.

---

### 2.1 Latent Dynamics Models (RSSM / Dreamer Family)

> Separate the world into deterministic and stochastic latent components; predict future latent states without decoding to pixels.

| Model | Venue | Key Contribution | Links |
|-------|-------|-----------------|-------|
| **PlaNet** | ICML 2019 | First RSSM; cross-entropy method planning in latent space | [[arXiv](https://arxiv.org/abs/1811.04551)] [[Code](https://github.com/google-research/planet)] |
| **Dreamer** | ICLR 2020 | Latent actor-critic; learn policy entirely in imagination | [[arXiv](https://arxiv.org/abs/1912.01603)] |
| **DreamerV2** | ICLR 2021 | Discrete latents via categorical distributions | [[arXiv](https://arxiv.org/abs/2010.02193)] |
| **DreamerV3** | 2023 | Single hyperparameter set; generalizes across 7 domains | [[arXiv](https://arxiv.org/abs/2301.04104)] |
| **RSSM+** | NeurIPS 2022 | Improved stochastic latent transitions | [[arXiv](https://arxiv.org/abs/2209.14326)] |
| **TD-MPC** | ICML 2022 | Temporal-difference learning + MPC in latent space | [[arXiv](https://arxiv.org/abs/2203.04955)] |
| **TD-MPC2** | ICLR 2024 | Scales to 104 tasks; shared latent space | [[arXiv](https://arxiv.org/abs/2310.16828)] |
| **TWM** | ICLR 2023 | Transformer-based world model replacing RNN | [[arXiv](https://arxiv.org/abs/2301.03044)] |
| **IRIS** | ICLR 2023 | Tokenize frames with discrete autoencoders; GPT-based dynamics | [[arXiv](https://arxiv.org/abs/2209.00588)] |
| **STORM** | NeurIPS 2023 | Efficient transformer-based latent dynamics | [[arXiv](https://arxiv.org/abs/2310.09615)] |

---

### 2.2 Joint Embedding Predictive Architectures (JEPA)

> Instead of generating observations, JEPA models predict abstract *representations* of future states. Inspired by LeCun's energy-based formulation.

- **I-JEPA** — Assran, M. et al. "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture." *CVPR* 2023. [[arXiv](https://arxiv.org/abs/2301.08243)] [[Code](https://github.com/facebookresearch/ijepa)]  
  > Predicts context representations of masked image patches; strong linear-probe performance without pixel decoding.

- **V-JEPA** — Bardes, A. et al. "V-JEPA: Latent Video Prediction for Visual Representation and World Modeling." *ICLR* 2024 (Spotlight). [[arXiv](https://arxiv.org/abs/2404.08471)] [[Code](https://github.com/facebookresearch/jepa)]  
  > Extends JEPA to video; predicts abstract future representations of masked video volumes.

- **MC-JEPA** — "MC-JEPA: A Joint-Embedding Predictive Architecture for Self-Supervised Learning of Motion and Content Features." *arXiv* 2307.12698 (2023). [[arXiv](https://arxiv.org/abs/2307.12698)]

- **A-JEPA** — "Audio-Visual Jointly Embedding Predictive Architecture." *arXiv* 2311.05090 (2023). [[arXiv](https://arxiv.org/abs/2311.05090)]

- **AD-L-JEPA** — (see §1.2.3) JEPA for LiDAR self-supervised learning in autonomous driving.

- **Hierarchical JEPA** — "Hierarchical World Models as Visual Whole-Body Humanoid Controllers." *arXiv* 2405.18418 (2024). [[arXiv](https://arxiv.org/abs/2405.18418)]  
  > Multi-level JEPA world models controlling full humanoid body; imagination-based whole-body planning.

---

### 2.3 Occupancy & BEV Representations

> Structured 3D world representations encoding semantic and geometric information for autonomous agents.

- **BEVWorld** — "BEVWorld: A Multimodal World Model for Autonomous Driving via Unified BEV Latent Space." *arXiv* 2407.05679 (2024). [[arXiv](https://arxiv.org/abs/2407.05679)]

- **OccSora** — "OccSora: 4D Occupancy Generation Models as World Simulators for Autonomous Driving." *arXiv* 2405.20337 (2024). [[arXiv](https://arxiv.org/abs/2405.20337)] [[Code](https://github.com/wzzheng/OccSora)]

- **OccWorld** — (see §1.2.2) GPT-style autoregressive occupancy generation.

- **Think2Drive** — "Think2Drive: Efficient Reinforcement Learning by Thinking in Latent World Model for Quasi-Realistic Autonomous Driving." *arXiv* 2402.16720 (2024). [[arXiv](https://arxiv.org/abs/2402.16720)]

- **HoloDrive** — "HoloDrive: Holistic 2D-3D Multi-Modal Street Scene Generation for Autonomous Driving." *arXiv* 2411.18963 (2024). [[arXiv](https://arxiv.org/abs/2411.18963)]

- **Enhancing Physical Consistency** — "Enhancing Physical Consistency in Lightweight World Models." *arXiv* 2509.12437 (2025). [[arXiv](https://arxiv.org/abs/2509.12437)]

---

### 2.4 Multimodal & Acoustic Sensory World Models

> World models extending beyond vision to include audio, touch, proprioception, or multimodal fusion.

- **A Survey on World Models Grounded in Acoustic Physical Information** — *arXiv* 2506.13833 (2025). [[arXiv](https://arxiv.org/abs/2506.13833)]

- **On Memory: A Comparison of Memory Mechanisms in World Models** — *arXiv* 2512.06983 (2025). [[arXiv](https://arxiv.org/abs/2512.06983)]

- **DreamerPro** — "DreamerPro: Reconstruction-Free Model-Based Reinforcement Learning with Prototypical Representations." *ICML* 2022. [[arXiv](https://arxiv.org/abs/2110.14565)]  
  > Augments Dreamer with prototypical self-supervised objectives; improves representation quality for sparse-reward tasks.

- **Iso-Dream** — "Iso-Dream: Isolating and Leveraging Noncontrollable Visual Dynamics in World Models." *NeurIPS* 2022. [[arXiv](https://arxiv.org/abs/2205.13817)]  
  > Disentangles controllable (agent) from non-controllable (background) world dynamics.

---

### 2.5 Symbolic & Knowledge-Graph World Models

> Hybrid approaches combining neural perception with symbolic or graph-structured world representations.

- **Knowledge Graphs as World Models for Autonomous Vehicles** — "Knowledge Graphs as World Models for Semantic Material-Aware Obstacle Handling in Autonomous Vehicles." *arXiv* 2503.21232 (2025). [[arXiv](https://arxiv.org/abs/2503.21232)]  
  > Symbolic semantic knowledge graphs providing structured scene understanding for autonomous driving.

- **Grounding Language in World Models** — Andreas, J. et al. "Grounding Language in World Models." *ACL* 2022. [[arXiv](https://arxiv.org/abs/2109.01800)]

- **LEAP** — "Language-Enhanced Algorithmic Reasoning for Embodied Agents." *arXiv* (2024).  
  > Symbolic world model grounded in language for abstract planning.

---

## 3 · Agentic World Models

> Agentic world models combine a world foundation model (generative or representational) with an agentic decision-making framework. They enable an AI system to **act**, **plan**, and **reason** using its internal world model—essentially the realization of LeCun's autonomous machine intelligence architecture.

---

### 3.1 Model-Based Reinforcement Learning (MBRL)

> The agent uses an explicit world model to simulate trajectories and update policy without exhaustive environment interaction.

| Model | Venue | Architecture | Domain | Links |
|-------|-------|-------------|--------|-------|
| **MBPO** | NeurIPS 2019 | Ensemble of MLPs; Dyna-style rollouts | Continuous control | [[arXiv](https://arxiv.org/abs/1906.08253)] |
| **PETS** | NeurIPS 2018 | Probabilistic ensemble + CEM | Control | [[arXiv](https://arxiv.org/abs/1805.12114)] |
| **Dreamer** | ICLR 2020 | RSSM + actor-critic in imagination | Atari/Control | [[arXiv](https://arxiv.org/abs/1912.01603)] |
| **DreamerV3** | 2023 | Discrete RSSM; universal | Multi-domain | [[arXiv](https://arxiv.org/abs/2301.04104)] |
| **EfficientZero** | NeurIPS 2021 | MuZero + self-supervised consistency | Atari | [[arXiv](https://arxiv.org/abs/2111.00210)] |
| **MuZero** | Nature 2020 | MCTS with learned value & dynamics | Board/Atari | [[Paper](https://www.nature.com/articles/s41586-020-03051-4)] |
| **TD-MPC2** | ICLR 2024 | Latent MPC, 104 tasks | Continuous | [[arXiv](https://arxiv.org/abs/2310.16828)] |
| **DIAMOND** | NeurIPS 2024 | Diffusion WM + RL | Atari | [[arXiv](https://arxiv.org/abs/2405.12399)] |
| **Think2Drive** | 2024 | BEV latent MBRL | Driving | [[arXiv](https://arxiv.org/abs/2402.16720)] |
| **InDRiVE** | 2025 | Curiosity-driven generalized WM | Driving | [[arXiv](https://arxiv.org/abs/2503.05573)] |

---

### 3.2 World-Model-Guided Planning

> Use the world model for explicit look-ahead planning (MPC, MCTS, latent rollouts) rather than amortized policy learning.

- **PWM (Policy World Model)** — "From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction." *arXiv* 2510.19654 (2025). [[arXiv](https://arxiv.org/abs/2510.19654)] [[Code](https://github.com/6550Zhao/Policy-World-Model)]  
  > Jointly predicts future states and actions; decouples world modeling from downstream planning.

- **AdaWM** — "AdaWM: Adaptive World Model based Planning for Autonomous Driving." *arXiv* 2501.13072 (2025). [[arXiv](https://arxiv.org/abs/2501.13072)]  
  > Adaptive world model that adjusts planning horizon based on uncertainty.

- **Dream to Drive** — "Dream to Drive: Model-Based Vehicle Control Using Analytic World Models." *arXiv* 2502.10012 (2025). [[arXiv](https://arxiv.org/abs/2502.10012)]

- **Dream to Drive with Predictive Individual World Model** — *arXiv* 2501.16733 (2025). [[arXiv](https://arxiv.org/abs/2501.16733)] [[Code](https://github.com/gaoyinfeng/PIWM)]

- **World4Drive** — "World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model." *arXiv* 2507.00603 (2025). [[arXiv](https://arxiv.org/abs/2507.00603)] [[Code](https://github.com/ucaszyp/World4Drive)]

- **End-to-End Driving with Online Trajectory Evaluation via BEV World Model** — *arXiv* 2504.01941 (2025). [[arXiv](https://arxiv.org/abs/2504.01941)] [[Code](https://github.com/liyingyanUCAS/WoTE)]

- **Raw2Drive** — "Raw2Drive: Reinforcement Learning with Aligned World Models for End-to-End Autonomous Driving." *arXiv* 2505.16394 (2025). [[arXiv](https://arxiv.org/abs/2505.16394)]

- **Doe-1** — "Doe-1: Closed-Loop Autonomous Driving with Large World Model." *arXiv* 2412.09627 (2024). [[arXiv](https://arxiv.org/abs/2412.09627)] [[Website](https://wzzheng.net/Doe/)] [[Code](https://github.com/wzzheng/Doe)]

- **Dream4Drive** — "Rethinking Driving World Model as Synthetic Data Generator for Perception Tasks." *arXiv* 2510.19195 (2025). [[arXiv](https://arxiv.org/abs/2510.19195)] [[Website](https://wm-research.github.io/Dream4Drive/)]

---

### 3.3 Closed-Loop Simulation & Evaluation

> The world model serves as a simulator within a closed loop for realistic evaluation of autonomous agents.

- **Imagine-2-Drive** — (see §1.2.4) High-fidelity CARLA world model for closed-loop evaluation.

- **ReSim** — (see §1.2.1) Reliable world simulation for closed-loop autonomous driving.

- **Ego-Centric Learning of Communicative World Models** — "Ego-centric Learning of Communicative World Models for Autonomous Driving." *arXiv* 2506.08149 (2025). [[arXiv](https://arxiv.org/abs/2506.08149)]

- **World Model-Based End-to-End Scene Generation for Accident Anticipation** — *arXiv* 2507.12762 (2025). [[arXiv](https://arxiv.org/abs/2507.12762)]

- **SimWorld** — (see §1.2.4) Unified benchmark for simulator-conditioned scene generation.

- **DriveVLA-W0** — (see §1.3.4) World model amplifying data scaling for autonomous driving.

---

### 3.4 Multi-Agent World Models

> World models that represent or reason over multiple agents simultaneously.

- **MADreamer** — "Multi-Agent World Models for Decentralized Decision Making." (2024).

- **SceneDiffuser++** — (see §1.2.4) City-scale traffic simulation with multi-agent world model.

- **Ego-Other Vehicle Trajectory World Model (EOT-WM)** — (see §1.2.2) Jointly models ego and other vehicle trajectories.

- **InDRiVE** — (see §3.1) Curiosity-driven exploration in multi-agent driving world model.

- **Communicative World Models** — (see §3.3) Ego-centric communicative modeling of other agents.

---

### 3.5 Safety-Aware Agentic World Models

> Explicitly incorporate safety constraints or uncertainty quantification into world-model-based decision making.

- **VL-SAFE** — "VL-SAFE: Vision-Language Guided Safety-Aware Reinforcement Learning with World Models for Autonomous Driving." *arXiv* 2505.16377 (2025). [[arXiv](https://arxiv.org/abs/2505.16377)] [[Website](https://ys-qu.github.io/vlsafe-website/)]  
  > Language-conditioned safety constraints integrated into world-model-based RL for driving.

- **World Models: The Safety Perspective** — *ISSREW* 2024. [[arXiv](https://arxiv.org/abs/2411.07690)]  
  > Position/survey: how to make world models safer across embodied AI and autonomous driving.

- **The Safety Challenge of World Models for Embodied AI Agents** — *arXiv* 2510.05865 (2025). [[arXiv](https://arxiv.org/abs/2510.05865)]  
  > Comprehensive review of safety risks introduced by using world models in agentic embodied systems.

- **Progressive Robustness-Aware World Models** — *techrXiv* 2025. [[Paper](https://doi.org/10.36227/techrxiv.176523308.84756413/v1)] [[Code](https://github.com/MoyangSensei/AwesomeRobustDWM)]

---

### 3.6 LLM / VLM Agents with World Models

> Large language or vision-language models functioning as or augmented by world models, enabling grounded text-based reasoning about physical dynamics.

- **GROOT** — (see §1.3.1) LLM-guided agent using gameplay video world models.

- **Inner Monologue** — Huang, W. et al. "Inner Monologue: Embodied Reasoning through Planning with Language Models." *CoRL* 2022. [[arXiv](https://arxiv.org/abs/2207.05608)]

- **SayCan** — Ahn, M. et al. "Do As I Can, Not As I Say: Grounding Language in Robotic Affordances." *CoRL* 2022. [[arXiv](https://arxiv.org/abs/2204.01691)]

- **Is Sora a World Simulator?** — "Is Sora a World Simulator? A Comprehensive Survey on General World Models and Beyond." *arXiv* 2405.03520 (2024). [[arXiv](https://arxiv.org/abs/2405.03520)] [[Code](https://github.com/GigaAI-research/General-World-Models-Survey)]

- **FutureSightDrive** — (see §1.2.4) Spatio-temporal Chain-of-Thought reasoning for driving.

- **World Models in AI: Like a Child** — "World Models in Artificial Intelligence: Sensing, Learning, and Reasoning Like a Child." *arXiv* 2503.15168 (2025). [[arXiv](https://arxiv.org/abs/2503.15168)]

- **KG-as-World-Model** — (see §2.5) Knowledge graphs providing structured world representation for LLM agents in vehicles.

---

## 📚 Surveys & Position Papers

### General Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **Is Sora a World Simulator?** | arXiv 2024 | Video generation & general world models | [[arXiv](https://arxiv.org/abs/2405.03520)] |
| **Understanding World or Predicting Future?** | arXiv 2024 | Comprehensive taxonomy | [[arXiv](https://arxiv.org/abs/2411.14499)] |
| **3D and 4D World Modeling: A Survey** | arXiv 2025 | 3D/4D scene generation | [[arXiv](https://arxiv.org/abs/2509.07996)] |
| **From 2D to 3D Cognition** | arXiv 2025 | General world models | [[arXiv](https://arxiv.org/abs/2506.20134)] |
| **From Masks to Worlds** | arXiv 2025 | Hitchhiker's guide to world models | [[arXiv](https://arxiv.org/abs/2510.20668)] |
| **World Models in AI: Like a Child** | arXiv 2025 | Developmental cognitive perspective | [[arXiv](https://arxiv.org/abs/2503.15168)] |
| **Simulating the Visual World with AI** | arXiv 2025 | Roadmap for visual world modeling | [[arXiv](https://arxiv.org/abs/2511.08585)] |
| **Physics Cognition in Video Generation** | arXiv 2025 | Physical plausibility in generative models | [[arXiv](https://arxiv.org/abs/2503.21765)] |

### Embodied AI Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **World Models for Embodied AI** | arXiv 2025 | Comprehensive embodied AI survey | [[arXiv](https://arxiv.org/abs/2510.16732)] |
| **Embodied World Models: Physical Simulation** | arXiv 2025 | Physical simulators + world models | [[arXiv](https://arxiv.org/abs/2507.00917)] |
| **Embodied AI Agents: Modeling the World** | arXiv 2025 | Agent-centric perspective | [[arXiv](https://arxiv.org/abs/2506.22355)] |
| **Aligning Cyber Space with Physical World** | TMECH 2025 | Embodied AI & Cyberspace | [[arXiv](https://arxiv.org/abs/2407.06886)] |
| **Physical Grounding in World Models** | arXiv 2026 | Imperative of physical grounding | [[arXiv](https://arxiv.org/abs/2601.15533)] |
| **A Step Toward World Models: Robotic Manipulation** | arXiv 2025 | Manipulation-focused survey | [[arXiv](https://arxiv.org/abs/2511.02097)] |
| **Do World Action Models Generalize Better than VLAs?** | arXiv 2026 | Empirical robustness study | [[arXiv](https://arxiv.org/abs/2603.22078)] |

### Autonomous Driving Surveys

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **Role of World Models in Autonomous Driving** | arXiv 2025 | Comprehensive AD survey | [[arXiv](https://arxiv.org/abs/2502.10498)] |
| **World Models for AD: An Initial Survey** | arXiv 2024 | Initial taxonomy | [[arXiv](https://arxiv.org/abs/2403.02622)] |
| **A Survey of World Models for AD** | arXiv 2025 | Recent AD world models | [[arXiv](https://arxiv.org/abs/2501.11260)] |
| **Video Generation & World Models in AD** | arXiv 2024 | Interplay of generation and driving | [[arXiv](https://arxiv.org/abs/2411.02914)] |
| **Progressive Robustness-Aware WMs in AD** | techrXiv 2025 | Robustness perspective | [[Paper](https://doi.org/10.36227/techrxiv.176523308.84756413/v1)] |

### Safety & Theory

| Paper | Venue | Scope | Link |
|-------|-------|-------|------|
| **World Models: The Safety Perspective** | ISSREW 2024 | Safety risks | [[arXiv](https://arxiv.org/abs/2411.07690)] |
| **Safety Challenge of WMs for Embodied AI** | arXiv 2025 | Embodied safety review | [[arXiv](https://arxiv.org/abs/2510.05865)] |
| **Survey on Model-Based RL** | Springer 2023 | MBRL foundations | [[Link](https://link.springer.com/article/10.1007/s11432-022-3696-5)] |
| **On Memory in World Models** | arXiv 2025 | Memory mechanism comparison | [[arXiv](https://arxiv.org/abs/2512.06983)] |
| **Acoustic World Models Survey** | arXiv 2025 | Sound-grounded world modeling | [[arXiv](https://arxiv.org/abs/2506.13833)] |

---

## 📊 Benchmarks & Evaluation

| Benchmark | Domain | Metric Focus | Links |
|-----------|--------|-------------|-------|
| **Atari 100k** | Game | Sample efficiency | [[Paper](https://arxiv.org/abs/2012.15810)] |
| **DMControl Suite** | Continuous control | Task performance | [[Code](https://github.com/google-deepmind/dm_control)] |
| **nuScenes** | Autonomous driving | Perception + prediction | [[Website](https://www.nuscenes.org/)] |
| **CARLA** | Autonomous driving | Closed-loop simulation | [[Website](https://carla.org/)] |
| **ProcGen** | Generalization | Generalization across procedurally generated envs | [[arXiv](https://arxiv.org/abs/1912.01588)] |
| **WorldModelBench** | General | Comprehensive world model evaluation | [[Website](https://worldmodelbench.github.io/)] |
| **WorldLens** | Driving | Full-spectrum driving WM evaluation | [[arXiv](https://arxiv.org/abs/2512.10958)] [[Website](https://worldbench.github.io/worldlens)] |
| **OpenDriveLab WM Track** | Driving | CVPR 2025 world model challenge | [[Website](https://opendrivelab.com/challenge25/#1x-wm)] |
| **1x World Model Challenge** | Robotics | Real-world robot video prediction | [[Website](https://www.1x.tech/discover/1x-world-model-challenge)] |
| **Minecraft Diamond (DreamerV3)** | Embodied | Hierarchical long-horizon task completion | [[arXiv](https://arxiv.org/abs/2301.04104)] |

---

## 🔬 Workshops & Challenges

- **WorldModelBench @ CVPR 2025** — 1st Workshop on Benchmarking World Models. [[Website](https://worldmodelbench.github.io/)]
- **OpenDriveLab World Model Track @ CVPR 2025** — [[Website](https://opendrivelab.com/challenge25/#1x-wm)]
- **World Model Workshop @ Mila (Montreal)** — Keynotes by Yoshua Bengio, Yann LeCun, Jürgen Schmidhuber, Sherry Yang. [[Website](https://world-model-mila.github.io/)]
- **OpenDriveLab Predictive World Model Track @ CVPR 2024** — [[Website](https://opendrivelab.com/challenge24/#predictive_world_model)]
- **Argoverse 3D Occupancy Forecasting @ CVPR 2023** — [[Website](https://eval.ai/web/challenges/challenge-page/1977/overview)]

---

## 🔗 Related Awesome Lists

- [Awesome-World-Models (knightnemo)](https://github.com/knightnemo/Awesome-World-Models) — General world models; embodied AI, driving, NLP
- [Awesome-World-Model for AD (LMD0311)](https://github.com/LMD0311/Awesome-World-Model) — Autonomous driving world models survey companion
- [Awesome-World-Models for Robotics (leofan90)](https://github.com/leofan90/Awesome-World-Models) — Robotics-focused collection
- [Awesome-World-Model-Evolution (OpenRaiser)](https://github.com/OpenRaiser/awesome-world-model-evolution) — Evolutionary taxonomy of world models
- [AwesomeWorldModels (Li-Zn-H)](https://github.com/Li-Zn-H/AwesomeWorldModels) — Companion to embodied AI survey (arXiv 2510.16732)
- [Awesome Physics Cognition in Video Generation](https://github.com/minnie-lin/Awesome-Physics-Cognition-based-Video-Generation)
- [AwesomeRobustDWM](https://github.com/MoyangSensei/AwesomeRobustDWM) — Robustness-aware driving world models

---

## 📝 Citation

If you find this repository useful in your research, please consider citing the key survey papers that underpin it:

```bibtex
@article{hafner2023dreamerv3,
  title={Mastering Diverse Domains with World Models},
  author={Hafner, Danijar and Lillicrap, Timothy and Norouzi, Mohammad and Ba, Jimmy},
  journal={arXiv preprint arXiv:2301.04104},
  year={2023}
}

@misc{lecun2022path,
  title={A Path Towards Autonomous Machine Intelligence},
  author={LeCun, Yann},
  year={2022},
  howpublished={OpenReview}
}

@article{tu2025drivingworldmodel,
  title={The Role of World Models in Shaping Autonomous Driving: A Comprehensive Survey},
  author={Tu, Sifan and Zhou, Xin and Liang, Dingkang and others},
  journal={arXiv preprint arXiv:2502.10498},
  year={2025}
}

@article{ha2018worldmodels,
  title={World Models},
  author={Ha, David and Schmidhuber, J{\"u}rgen},
  journal={arXiv preprint arXiv:1803.10122},
  year={2018}
}
```

---

## ✏️ Contributing

We welcome contributions! Please submit a pull request with:
1. **Paper name** + authors
2. **Venue** and **year**
3. **One-sentence contribution summary**
4. **Links** (arXiv, code, website)
5. **Correct section** following the taxonomy above

For large additions or structural suggestions, please open an issue first.

---

*Last updated: April 2026. Maintained with ❤️ by the world modeling research community.*
