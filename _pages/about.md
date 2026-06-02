---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

Hi! I am **Hao Lin** (Chinese: 林浩), an undergraduate student majoring in **Software Engineering** at the [School of Software Engineering, Huazhong University of Science and Technology](https://www.hust.edu.cn/), Wuhan, China.

My current research interests lie in **multimodal foundation models**, **video reasoning**, **efficient autoregressive video generation**, and **dynamic world models**. I am especially interested in making vision-language and video models reason more reliably, use long-range context more efficiently, and preserve grounded temporal dynamics.

I have maintained a strong academic record at HUST, with a five-semester GPA of **93.06 / 100**, ranking **2 / 116**. Selected coursework includes Machine Learning, Deep Learning, Digital Image Processing, Algorithms, Computer Organization, Database Systems, Probability and Statistics, and Discrete Mathematics.

# 🔥 News

- *2026.02*: Our paper [**Not Just What's There: Enabling CLIP to Comprehend Negated Visual Descriptions Without Fine-tuning**](https://arxiv.org/abs/2602.21035) was released on arXiv.
- *2026*: **Not Just What's There** was accepted to **AAAI 2026**. I contributed as a core contributor.
- *2026*: Our first-author work **VISD: Enhancing Video Reasoning via Structured Self-Distillation** is under review at **NeurIPS 2026**.
- *2026*: **Focused Forcing: Content-Aware Per-Frame KV Selection for Efficient Autoregressive Video Diffusion** is under review at **NeurIPS 2026**.
- *2026*: **MemeSleuth-Bench: Can Models Detect Chinese Internet Meme Origins Through Web Retrieval?** is under review at **ACM MM 2026**.
- *2025.07*: Started an internship at **Baidu PaddlePaddle AI Technology Ecosystem Department**, working on multimodal document understanding and OCR benchmark construction.
- *2024-2025*: Received the **National Scholarship twice** and won national-level awards in AI and robotics competitions.

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><img src='images/paper-placeholder.svg' alt="CLIP negation paper figure" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Not Just What's There: Enabling CLIP to Comprehend Negated Visual Descriptions Without Fine-tuning**](https://arxiv.org/abs/2602.21035)

Junhao Xiao, Zhiyu Wu, **Hao Lin**, Yi Chen, Yahui Liu, Xiaoran Zhao, Zixu Wang, Zejiang He

**Role:** Core Contributor<br>
**Venue:** AAAI 2026, Poster

- We study how CLIP handles negated visual descriptions such as "no", "not", and "without", and propose a plug-and-play framework that improves negation comprehension without fine-tuning the CLIP backbone.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2026</div><img src='images/paper-placeholder.svg' alt="VISD paper figure" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**VISD: Enhancing Video Reasoning via Structured Self-Distillation**

**Hao Lin**

**Role:** First Author<br>
**Status:** Under Review

- VISD introduces a structured on-policy self-distillation framework for video reasoning RLVR, using teacher feedback on student rollouts to provide fine-grained credit assignment and improve temporal grounding.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2026</div><img src='images/paper-placeholder.svg' alt="Focused Forcing paper figure" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Focused Forcing: Content-Aware Per-Frame KV Selection for Efficient Autoregressive Video Diffusion**

Author list pending public release; **Hao Lin** as core contributor.

**Role:** Core Contributor<br>
**Status:** Under Review

- Focused Forcing studies training-free, content-aware KV cache selection for long autoregressive video diffusion, reducing attention and memory cost while preserving visual quality and text alignment.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2026</div><img src='images/paper-placeholder.svg' alt="MemeSleuth-Bench paper figure" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**MemeSleuth-Bench: Can Models Detect Chinese Internet Meme Origins Through Web Retrieval?**

Author list pending public release; **Hao Lin** as core contributor.

**Role:** Core Contributor<br>
**Status:** Under Review

- MemeSleuth-Bench evaluates whether multimodal models can trace Chinese internet meme origins through web retrieval, focusing on culturally grounded visual understanding and evidence-seeking behavior.

</div>
</div>

# 🔬 Research Projects

**VISD: Structured Self-Distillation for Video Reasoning**<br>
VISD targets the weak token-level credit assignment problem in video reasoning RLVR. It builds a video-aware judge feedback mechanism, injects feedback, verified answers, and grounding evidence into teacher replay, and stabilizes learning through direction-magnitude decoupling.

**CLIP Negation Understanding**<br>
We study why CLIP-style VLMs map affirmative and negated captions into nearby feature spaces. The proposed CLIPGlasses framework decouples negated concepts and predicts dynamic repulsion strength at inference time while keeping the CLIP backbone frozen.

**Focused Forcing for Long Video Generation**<br>
This project explores content-aware KV cache management for autoregressive video diffusion. It uses head-wise intervention, query-frame-wise history selection, attention-key diversity scoring, and variable-length FlashAttention to improve long video generation efficiency.

**Dynamic World Model**<br>
I am exploring world models that separate global state maintenance from view-conditioned rendering, so dynamic objects can continue evolving outside the current field of view and re-enter with updated states.

# 🎖 Honors and Awards

- *2024 & 2025*: **National Scholarship** × 2
- *2024 & 2025*: Merit Student Scholarship, Academic Excellence Scholarship, Freshman Self-Reliance Scholarship
- *2024 & 2025*: **National First Prize**, China Robotics and Artificial Intelligence Competition, AI Innovation Track
- *2024 & 2025*: National Third Prize, China Robotics and Artificial Intelligence Competition
- *2024 & 2025*: **National Second Prize**, Challenge Cup "AI+" Special Competition
- *2025*: National Third Prize, Lanqiao Cup AI Practical Competition
- *2024 & 2025*: First Prize in Hubei Province, Chinese Mathematics Competition

# 📖 Educations

- *2023.09 - 2027.06*: B.Eng. in Software Engineering, School of Software Engineering, Huazhong University of Science and Technology.
- **GPA:** 93.06 / 100, Rank 2 / 116 across the first five semesters.
- **Selected courses:** Machine Learning 99, Deep Learning 99, Digital Image Processing 99, Algorithm Design and Analysis 97, Computer Organization 97, Database Systems 97, Probability and Statistics 100, Discrete Mathematics 98 / 97.

# 💻 Internships

- *2025.07 - 2025.08*: **Baidu PaddlePaddle AI Technology Ecosystem Department**, Beijing.
  - Worked on multimodal document understanding and OCR benchmark construction.
  - Helped build evaluation data for complex tables and mathematical formulas, analyzed PaddleOCR pipeline weaknesses, and refined evaluation labels for future model improvement.

# 🛠 Skills

- **Programming:** Python, C/C++, PyTorch, Hugging Face, Git, Docker
- **Research tooling:** Weights & Biases, TensorBoard, Pandas, NumPy
- **Languages:** Chinese, English (CET-4: 555, CET-6: 501)
