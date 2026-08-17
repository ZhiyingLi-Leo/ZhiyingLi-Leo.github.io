"use client";

import { useEffect, useState } from "react";

type Language = "en" | "zh";

const publications = [
  {
    venue: "Cyborg and Bionic Systems, 2026",
    title: "Electroencephalography Enables Continuous Decoding of Hand Motion Angles in Polar Coordinates",
    authors: "Xiaohan Lu*, Yifeng Chen*, Zhiying Li, Jinqiu Zhao, Yijie Zhou, Dongrui Wu, Mingming Zhang",
    url: "https://doi.org/10.34133/cbsystems.0469",
  },
  {
    venue: "IEEE Transactions on Fuzzy Systems, 2025",
    title: "WavTSK: An Interpretable Fuzzy Network With Learnable Wavelet-Based Feature Extraction for Motor Imagery EEG Decoding",
    authors: "Zhiying Li*, Yifeng Chen*, Jianhua Yu, Mingming Zhang",
    url: "https://doi.org/10.1109/TFUZZ.2025.3623122",
  },
  {
    venue: "M2VIP, 2024",
    title: "Enhancing Movement Directions Decoding in EEG-BCI through Force Feedback",
    authors: "Zhiying Li, Jinqiu Zhao, Jingwan Yu, Chenyang Sun, Xiaohan Lu, Xuehan Li, Mingming Zhang, Yifeng Chen",
    url: "https://doi.org/10.1109/M2VIP62491.2024.10746111",
  },
];

const text = {
  en: {
    nav: ["About Me", "News", "Education", "Publications", "Research", "Honors"],
    role: "PhD Student at CUHK",
    location: "Hong Kong SAR",
    about: "About Me",
    bio1: "Hi! I’m Zhiying Li (Leo), a PhD student in Biomedical Engineering at The Chinese University of Hong Kong (CUHK), supervised by Prof. YUAN Wu, Scott in the Advanced Biomedical Imaging Laboratory (ABI Lab). I am also jointly trained with Shenzhen Loop Area Institute (SLAI).",
    bio2: "My research interests include biomedical imaging, surgical robotics, and embodied intelligence.",
    bio3: "Before joining CUHK, I received my bachelor’s degree in Biomedical Engineering from Southern University of Science and Technology (SUSTech), where I worked on EEG decoding, haptic feedback, and rehabilitation robotics.",
    news: "News",
    newsItems: [
      ["08.2026", "Started my PhD in Biomedical Engineering at CUHK."],
      ["01.2026", "Our paper on continuous EEG decoding of hand motion angles was published in Cyborg and Bionic Systems."],
      ["10.2025", "WavTSK was published in IEEE Transactions on Fuzzy Systems."],
      ["10.2024", "Our force-feedback EEG-BCI paper was presented at M2VIP 2024."],
    ],
    publications: "Publications",
    pubNote: "* denotes equal contribution.",
    research: "Research Experience",
    researchItems: [
      ["Interpretable Fuzzy Networks for EEG Signal Decoding", "Research Lead · Aug. 2024 – Jun. 2025", "Developed WavTSK, an end-to-end interpretable fuzzy neural network that combines learnable wavelet feature extraction with a Takagi-Sugeno-Kang fuzzy system."],
      ["Force-feedback EEG-BCI for Movement Direction Decoding", "Research Lead · Apr. 2024 – Jul. 2024", "Designed an EEG-BCI paradigm using a haptic robot and investigated how force feedback improves neural responses and movement-direction decoding."],
      ["Online Walking BCI for Lower-limb Rehabilitation", "Research Assistant · Oct. 2023 – May 2025", "Built an online compound-limb motor-imagery system for natural walking control and managed EEG collection, preprocessing, and decoding."],
      ["Intelligent Cane Robot", "Project Member · Nov. 2023 – Aug. 2024", "Contributed to an omnidirectional human-following cane robot for gait monitoring and walking-stability assistance."],
    ],
    honors: "Honors & Awards",
    honorItems: [
      "Outstanding Graduate, SUSTech, 2026",
      "National Second Prize, 9th National Biomedical Engineering Innovation Design Competition, 2024",
      "National Second Prize, China Undergraduate Mathematical Contest in Modeling, 2024",
      "Outstanding Student, SUSTech, 2024",
      "Guangdong Climbing Program Funding, 2024 and 2025",
    ],
    education: "Education",
    educationItems: [
      ["Aug. 2026 – Present", "PhD in Biomedical Engineering, The Chinese University of Hong Kong", "Hong Kong SAR", "/logos/cuhk-emblem.jpg"],
      ["Aug. 2026 – Present", "Joint Program, Shenzhen Loop Area Institute (SLAI)", "Shenzhen, China", "/logos/slai-emblem.png"],
      ["Sep. 2022 – 2026", "BEng in Biomedical Engineering, Southern University of Science and Technology", "Shenzhen, China", "/logos/sustech-emblem.png"],
    ],
    updated: "Last updated: August 2026",
  },
  zh: {
    nav: ["个人简介", "动态", "教育经历", "论文", "科研经历", "荣誉奖项"],
    role: "香港中文大学博士研究生",
    location: "中国香港",
    about: "个人简介",
    bio1: "你好！我是李志颖（Leo），现为香港中文大学生物医学工程系博士研究生，在先进生物医学成像实验室（ABI Lab）师从袁武教授，同时参与深圳河套学院（SLAI）联合培养项目。",
    bio2: "我的研究兴趣包括生物医学成像、手术机器人和具身智能。",
    bio3: "加入香港中文大学前，我在南方科技大学获得生物医学工程学士学位，主要开展脑电解码、触觉反馈与康复机器人相关研究。",
    news: "最新动态",
    newsItems: [
      ["2026.08", "进入香港中文大学生物医学工程系攻读博士学位。"],
      ["2026.01", "手部运动角度连续脑电解码论文发表于 Cyborg and Bionic Systems。"],
      ["2025.10", "WavTSK 论文发表于 IEEE Transactions on Fuzzy Systems。"],
      ["2024.10", "力反馈脑机接口论文在 M2VIP 2024 发表。"],
    ],
    publications: "论文发表",
    pubNote: "* 表示共同贡献。",
    research: "科研经历",
    researchItems: [
      ["面向脑电信号解码的可解释模糊网络", "研究负责人 · 2024.08 – 2025.06", "开发 WavTSK 端到端可解释模糊神经网络，将可学习小波特征提取与 Takagi-Sugeno-Kang 模糊系统相结合。"],
      ["基于力反馈的运动方向脑电解码", "研究负责人 · 2024.04 – 2024.07", "使用触觉机器人设计脑机接口实验范式，研究力反馈对神经响应和运动方向解码的促进作用。"],
      ["面向下肢康复的在线步行脑机接口", "研究助理 · 2023.10 – 2025.05", "构建复合肢体运动想象在线步行控制系统，负责脑电采集、预处理与解码流程。"],
      ["智能手杖机器人", "项目成员 · 2023.11 – 2024.08", "参与研发具备全向人体跟随能力的智能手杖机器人，用于步态监测与行走稳定性辅助。"],
    ],
    honors: "荣誉与奖项",
    honorItems: [
      "南方科技大学优秀毕业生，2026",
      "第九届全国大学生生物医学工程创新设计竞赛，全国二等奖，2024",
      "全国大学生数学建模竞赛，全国二等奖，2024",
      "南方科技大学优秀学生，2024",
      "广东省攀登计划项目资助，2024、2025",
    ],
    education: "教育经历",
    educationItems: [
      ["2026.08 – 至今", "香港中文大学，生物医学工程博士", "中国香港", "/logos/cuhk-emblem.jpg"],
      ["2026.08 – 至今", "深圳河套学院（SLAI），联合培养", "中国深圳", "/logos/slai-emblem.png"],
      ["2022.09 – 2026", "南方科技大学，生物医学工程学士", "中国深圳", "/logos/sustech-emblem.png"],
    ],
    updated: "最后更新：2026年8月",
  },
};

function PublicationAuthors({ authors }: { authors: string }) {
  return <>{authors.split(/(Zhiying Li\*?)/g).map((part, index) =>
    part.startsWith("Zhiying Li") ? <strong key={`${part}-${index}`}>{part}</strong> : part
  )}</>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = text[language];

  useEffect(() => {
    const saved = localStorage.getItem("site-language") as Language | null;
    if (saved === "en" || saved === "zh") setLanguage(saved);
    else if (navigator.language.toLowerCase().startsWith("zh")) setLanguage("zh");
  }, []);

  const changeLanguage = (next: Language) => {
    setLanguage(next);
    localStorage.setItem("site-language", next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  };

  const ids = ["about", "news", "education", "publications", "research", "honors"];

  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="site-name" href="#about">Zhiying Li</a>
          <nav aria-label={language === "zh" ? "主导航" : "Main navigation"}>
            {ids.map((id, index) => <a href={`#${id}`} key={id}>{t.nav[index]}</a>)}
          </nav>
          <div className="language" aria-label="Language selector">
            <button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")}>EN</button>
            <span>/</span>
            <button className={language === "zh" ? "active" : ""} onClick={() => changeLanguage("zh")}>中文</button>
          </div>
        </div>
      </header>

      <div className="layout">
        <aside className="profile">
          <div className="avatar" aria-label={language === "zh" ? "个人照片占位" : "Profile photo placeholder"}>ZL</div>
          <h2>{language === "zh" ? "李志颖" : "Zhiying Li"}</h2>
          <p className="profile-role">{t.role}</p>
          <ul className="profile-links">
            <li>📍 {t.location}</li>
            <li>🏫 <a href="https://www.cuhk.edu.hk/english/index.html" target="_blank" rel="noreferrer">CUHK</a></li>
            <li>🔬 <a href="https://www.bme.cuhk.edu.hk/yuan/index.html" target="_blank" rel="noreferrer">ABI Lab</a></li>
            <li>✉️ <a href="mailto:1155273535@link.cuhk.edu.hk">Email</a></li>
            <li>💻 <a href="https://github.com/ZhiyingLi-Leo" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </aside>

        <main className="content">
          <section id="about">
            <h1>{t.about}</h1>
            <p>{t.bio1}</p><p>{t.bio2}</p><p>{t.bio3}</p>
          </section>

          <section id="news">
            <h1>🔥 {t.news}</h1>
            <ul className="news-list">
              {t.newsItems.map(([date, item]) => <li key={date}><strong>{date}:</strong> {item}</li>)}
            </ul>
          </section>

          <section id="education">
            <h1>📖 {t.education}</h1>
            <ul className="education-list">
              {t.educationItems.map(([date, degree, place, logo]) => (
                <li key={degree}>
                  <img src={logo} alt="" aria-hidden="true" />
                  <div className="education-details">
                    <strong>{date}</strong><span>{degree}</span><em>{place}</em>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="publications">
            <h1>📝 {t.publications}</h1>
            <p className="small-note">{t.pubNote}</p>
            <ol className="publication-list">
              {publications.map((pub) => (
                <li key={pub.title}>
                  <span className="venue">{pub.venue}</span>
                  <a href={pub.url} target="_blank" rel="noreferrer">{pub.title}</a>
                  <p><PublicationAuthors authors={pub.authors} /></p>
                </li>
              ))}
            </ol>
          </section>

          <section id="research">
            <h1>🔬 {t.research}</h1>
            {t.researchItems.map(([title, meta, description]) => (
              <article className="research-item" key={title}>
                <h3>{title}</h3><p className="meta">{meta}</p><p>{description}</p>
              </article>
            ))}
          </section>

          <section id="honors">
            <h1>🎖️ {t.honors}</h1>
            <ul>{t.honorItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <footer><p>© 2026 Zhiying Li · {t.updated}</p></footer>
        </main>
      </div>
    </div>
  );
}
