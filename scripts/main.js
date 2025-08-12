// Main JavaScript file for Alexander Phan's portfolio

// Translation data
const translations = {
  en: {
    intro: "Hi, I'm Alexander Phan",
    location: "Based in Vietnam 🇻🇳",
    location_type: "Student & Intern",
    resume:
      "I'm a Fullstack Developer in training, currently studying at VTC Academy with a focus on modern web technologies. I am passionate about creating websites and applications, and I’m eager to keep learning frontend and backend development. My learning path includes HTML, CSS, JavaScript, Vue.js, Tailwind CSS, PHP (Laravel), Node.js, and MySQL. I’m also improving my English, Japanese, and Chinese skills, and aiming for AWS certification in the future.",
    skills_title: "Skills",
    skills_subtitle: "Technologies I am learning and practicing.",
    bento_title: "Featured Sections",
    bento_subtitle: "Explore my work, studies, and projects.",
    menu_home: "Home",
    menu_about: "About",
    menu_achievements: "Achievements",
    menu_projects: "Projects",
    menu_contact: "Contact",
    bento_projects_title: "Projects Showcase",
    bento_projects_desc:
      "A selection of real apps built to solve real problems.",
    bento_about_title: "About Me",
    bento_about_desc: "Who I am and what I do.",
    bento_skills_title: "Skills & Tools",
    bento_skills_desc: "Covering web, mobile, and backend technologies.",
    bento_achievements_title: "Achievements",
    bento_achievements_desc:
      "Milestones from programs, projects, and communities.",
    bento_contact_title: "Contact",
    bento_contact_desc: "Let's get in touch and collaborate.",
    about_title: "About",
    about_description: "A brief introduction to who I am.",
    about_p1:
      "Hello there! Thank you for visiting my personal website. I'm Phan Nhật Quân, also known as Alexander Phan, from Nam Định, Vietnam. I’m currently a Fullstack programming student at VTC Academy, passionate about technology and eager to learn both frontend and backend development.",
    about_p2:
      "I am focusing on mastering HTML, CSS, JavaScript, Vue.js, Tailwind CSS, PHP (Laravel), Node.js, and MySQL. I enjoy exploring new tools and frameworks to expand my programming skills.",
    about_p3:
      "Besides programming, I am learning English, Japanese, and Chinese, and working towards AWS certification. My goal is to grow step by step into a capable and well-rounded developer.",
    about_p4: "Best regards,<br>Alexander Phan",
    achievements_title: "Achievements",
    achievements_description:
      "Certificates and milestones I have earned during my learning journey.",
    projects_title: "Projects",
    projects_description: "A showcase of my personal and study projects.",
    contact_title: "Contact",
    contact_description: "Let's get in touch and connect.",
    contact_email_label: "Email",
    contact_facebook_label: "Facebook",
    contact_github_label: "GitHub",
    contact_website_label: "Website",
  },
  vi: {
    intro: "Xin chào, tôi là Alexander Phan",
    location: "Đến từ Việt Nam 🇻🇳",
    location_type: "Sinh viên & Thực tập",
    resume:
      "Tôi là một lập trình viên Fullstack đang trong quá trình học tập tại VTC Academy, với định hướng phát triển các kỹ năng lập trình hiện đại. Tôi đam mê tạo ra các trang web và ứng dụng, đồng thời luôn mong muốn học hỏi thêm về cả frontend và backend. Lộ trình học của tôi gồm HTML, CSS, JavaScript, Vue.js, Tailwind CSS, PHP (Laravel), Node.js và MySQL. Tôi cũng đang cải thiện kỹ năng tiếng Anh, tiếng Nhật và tiếng Trung, đồng thời hướng tới chứng chỉ AWS trong tương lai.",
    skills_title: "Kỹ năng",
    skills_subtitle: "Các công nghệ tôi đang học và thực hành.",
    bento_title: "Mục nổi bật",
    bento_subtitle: "Khám phá các sản phẩm và dự án học tập của tôi.",
    menu_home: "Trang chủ",
    menu_about: "Giới thiệu",
    menu_achievements: "Thành tựu",
    menu_projects: "Dự án",
    menu_contact: "Liên hệ",
    bento_projects_title: "Showcase Dự án",
    bento_projects_desc:
      "Tuyển chọn các ứng dụng thực tế được xây dựng để giải quyết vấn đề thực tế.",
    bento_about_title: "Về tôi",
    bento_about_desc: "Tôi là ai và tôi làm gì.",
    bento_skills_title: "Kỹ năng & Công cụ",
    bento_skills_desc: "Bao gồm các công nghệ web, mobile và backend.",
    bento_achievements_title: "Thành tựu",
    bento_achievements_desc: "Các cột mốc từ chương trình, dự án và cộng đồng.",
    bento_contact_title: "Liên hệ",
    bento_contact_desc: "Hãy kết nối và cộng tác cùng nhau.",
    about_title: "Giới thiệu",
    about_description: "Một giới thiệu ngắn gọn về tôi.",
    about_p1:
      "Xin chào! Cảm ơn bạn đã ghé thăm trang web cá nhân của tôi. Tôi là Phan Nhật Quân, hay còn gọi là Alexander Phan, đến từ Nam Định, Việt Nam. Hiện tôi đang theo học chuyên ngành lập trình viên Fullstack tại VTC Academy, với niềm đam mê công nghệ và mong muốn học hỏi cả frontend lẫn backend.",
    about_p2:
      "Tôi đang tập trung học HTML, CSS, JavaScript, Vue.js, Tailwind CSS, PHP (Laravel), Node.js và MySQL. Tôi yêu thích khám phá các công cụ và framework mới để mở rộng kỹ năng lập trình.",
    about_p3:
      "Ngoài lập trình, tôi đang học tiếng Anh, tiếng Nhật và tiếng Trung, đồng thời hướng tới chứng chỉ AWS. Mục tiêu của tôi là phát triển từng bước trở thành một lập trình viên vững vàng và toàn diện.",
    about_p4: "Trân trọng,<br>Alexander Phan",
    achievements_title: "Thành tích",
    achievements_description:
      "Các chứng chỉ và cột mốc tôi đạt được trong quá trình học tập.",
    projects_title: "Dự án",
    projects_description:
      "Giới thiệu các dự án cá nhân và dự án học tập của tôi.",
    contact_title: "Liên hệ",
    contact_description: "Hãy liên lạc và kết nối với tôi.",
    contact_email_label: "Email",
    contact_facebook_label: "Facebook",
    contact_github_label: "GitHub",
    contact_website_label: "Website",
  },
};

// Skills data
const skills = [
  { name: "HTML", icon: "fab fa-html5", color: "#e34c26" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "#1572b6" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "#f7df1e" },
  { name: "TypeScript", icon: "fab fa-js-square", color: "#3178c6" },
  { name: "React", icon: "fab fa-react", color: "#61dafb" },
  { name: "Next.js", icon: "fas fa-code", color: "#000000" },
  { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
  { name: "Python", icon: "fab fa-python", color: "#3776ab" },
  { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
  { name: "GitHub", icon: "fab fa-github", color: "#181717" },
  { name: "VS Code", icon: "fas fa-code", color: "#007acc" },
  { name: "Firebase", icon: "fas fa-fire", color: "#ffca28" },
  { name: "MongoDB", icon: "fas fa-database", color: "#47a248" },
  { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
  { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
  { name: "AWS", icon: "fab fa-aws", color: "#ff9900" },
  { name: "Tailwind", icon: "fas fa-palette", color: "#06b6d4" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952b3" },
  { name: "Sass", icon: "fab fa-sass", color: "#cc6699" },
  { name: "Vue.js", icon: "fab fa-vuejs", color: "#4fc08d" },
  { name: "Express", icon: "fas fa-server", color: "#000000" },
];

// Bento grid data
const bentoItems = [
  {
    titleKey: "bento_projects_title",
    descKey: "bento_projects_desc",
    icon: "fas fa-folder",
    colSpan: 2,
    rowSpan: 2,
    className: "bento-projects",
    href: "#projects",
  },
  {
    titleKey: "bento_about_title",
    descKey: "bento_about_desc",
    icon: "fas fa-user",
    colSpan: 1,
    rowSpan: 1,
    className: "bento-about",
    href: "#about",
  },
  {
    titleKey: "bento_skills_title",
    descKey: "bento_skills_desc",
    icon: "fas fa-cogs",
    colSpan: 1,
    rowSpan: 1,
    className: "bento-skills",
    href: "#home",
  },
];

// Project data
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
    image: "/imagesAboutMe/esportManagerProject.png",
    technologies: ["C#"],
    github: "https://github.com/AlexanderPhan04/EsportsManager",
    demo: "https://github.com/AlexanderPhan04/EsportsManager",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio showcasing projects and skills.",
    image: "/imagesAboutMe/portfolioProject.png",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
    github: "https://github.com/AlexanderPhan04/AlexanderPhan04.github.io",
    demo: "https://alexanderphan04.github.io",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image: "https://via.placeholder.com/400x250?text=Task+Manager",
    technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    github: "https://github.com/AlexanderPhan04/task-manager",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application with location-based forecasts and analytics.",
    image: "https://via.placeholder.com/400x250?text=Weather+Dashboard",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS"],
    github: "https://github.com/AlexanderPhan04/weather-app",
    demo: "#",
  },
];

// About Me photos data
const aboutPhotos = [
  {
    src: "images/PhanQuan.jpg",
    alt: "Alexander Phan - Professional photo",
  },
  {
    src: "/imagesAboutMe/esportManagerTeamProject.png",
    alt: "Alexander Phan - Casual photo",
  },
];

// Achievement data
const achievements = [
  {
    title: "Frontend Development Certificate",
    issuer: "FreeCodeCamp",
    date: "2023",
    image: "/AlexanderPhan.github.io/images/PhanQuan.jpg",
    link: "#",
  },
];

// Current language
let currentLang = "en";
let currentLanguage = "en";

// DOM elements
let elements = {};

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeElements();
  initializeTheme();
  initializeLanguage();
  renderSkills();
  renderBentoGrid();
  renderProjects();
  renderAchievements();
  initializeEventListeners();
  initializeNavigation();
  initializeAOS();
  hideLoading();
});

// Initialize DOM elements
function initializeElements() {
  elements = {
    themeToggle: document.getElementById("theme-toggle"),
    themeToggleMobile: document.getElementById("theme-toggle-mobile"),
    langToggle: document.getElementById("lang-toggle"),
    langToggleMobile: document.getElementById("lang-toggle-mobile"),
    mobileMenuToggle: document.getElementById("mobile-menu-toggle"),
    mobileMenu: document.getElementById("mobile-menu"),
    loading: document.getElementById("loading"),
  };
}

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  }

  // Wait for DOM to be ready before updating switch
  setTimeout(() => {
    updateThemeSwitch();
  }, 100);
}

// Initialize language
function initializeLanguage() {
  const savedLang = localStorage.getItem("language") || "en";
  currentLang = savedLang;
  currentLanguage = savedLang;
  updateLanguage(currentLang);
  // Wait for DOM to be ready before updating switch
  setTimeout(() => {
    updateLanguageSwitch();
  }, 100);
}

// Update language
function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      if (key.includes("_p4")) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  currentLang = lang;
  currentLanguage = lang; // Update the global currentLanguage variable
  localStorage.setItem("language", lang);

  // Re-render dynamic content
  renderBentoGrid();
}

// Render skills
function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");
  if (!skillsContainer) return;

  skillsContainer.innerHTML = "";

  skills.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.className = "skill-icon";
    skillElement.style.setProperty("--skill-color", skill.color);
    skillElement.innerHTML = `
            <i class="${skill.icon}" style="color: ${skill.color};"></i>
        `;
    skillElement.title = skill.name;

    // Add tooltip functionality
    skillElement.addEventListener("mouseenter", function (e) {
      showTooltip(e, skill.name);
    });

    skillElement.addEventListener("mouseleave", function () {
      hideTooltip();
    });

    skillsContainer.appendChild(skillElement);
  });
}

// Render bento grid
function renderBentoGrid() {
  const bentoContainer = document.getElementById("bento-grid");
  if (!bentoContainer) return;

  bentoContainer.innerHTML = "";

  // Define interactive cards that should not have navigation
  const interactiveCards = ["bento-projects", "bento-about", "bento-skills"];

  bentoItems.forEach((item) => {
    const bentoCard = document.createElement("div");
    const cursorClass = interactiveCards.includes(item.className)
      ? ""
      : "cursor-pointer";
    bentoCard.className =
      `bento-card ${item.className} ${cursorClass} transition-all hover:scale-105`.trim();
    bentoCard.style.gridColumn = `span ${item.colSpan}`;
    bentoCard.style.gridRow = `span ${item.rowSpan}`;

    const currentTranslations =
      translations[currentLanguage] || translations.en;

    // Create different content based on card type
    let cardContent = "";

    if (item.className === "bento-projects") {
      // Projects showcase with horizontal scrolling - enhanced version
      cardContent = `
        <div class="flex flex-col h-full">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-white bg-opacity-20 rounded-lg w-fit p-3">
              <i class="${item.icon} text-white text-lg"></i>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">${
                currentTranslations[item.titleKey]
              }</h3>
              <p class="text-sm text-white text-opacity-80">${
                currentTranslations[item.descKey]
              }</p>
            </div>
          </div>
          
          <div class="projects-preview-container flex-1">
            <div class="grid grid-cols-2 gap-3">
              ${projects
                .slice(0, 4)
                .map(
                  (project, index) => `
                <div class="project-preview-card-large ${
                  index >= 2 ? "hidden md:block" : ""
                }">
                  <img src="${project.image}" alt="${
                    project.title
                  }" class="project-preview-img-large">
                  <div class="project-preview-overlay-large">
                    <span class="project-preview-title-large">${
                      project.title
                    }</span>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
    } else if (item.className === "bento-about") {
      // About me with photo stack - compact version
      cardContent = `
        <div class="flex items-center gap-4 h-full">
          <div class="bg-white bg-opacity-20 rounded-lg p-3 flex-shrink-0">
            <i class="${item.icon} text-white text-lg"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-white mb-1">${
              currentTranslations[item.titleKey]
            }</h3>
            <p class="text-sm text-white text-opacity-80">${
              currentTranslations[item.descKey]
            }</p>
          </div>
          <div class="about-photo-stack-compact" id="bento-photo-stack">
            ${aboutPhotos
              .slice(0, 2)
              .map(
                (photo, index) => `
              <div class="photo-stack-compact-item" style="transform: rotate(${
                (index - 0.5) * 8
              }deg) translateX(${index * 4}px); z-index: ${2 - index};">
                <img src="${photo.src}" alt="${photo.alt}">
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    } else if (item.className === "bento-skills") {
      // Skills with technology icons - compact version
      cardContent = `
        <div class="flex items-center gap-4 h-full">
          <div class="bg-white bg-opacity-20 rounded-lg p-3 flex-shrink-0">
            <i class="${item.icon} text-white text-lg"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-white mb-1">${
              currentTranslations[item.titleKey]
            }</h3>
            <p class="text-sm text-white text-opacity-80 mb-3">${
              currentTranslations[item.descKey]
            }</p>
            <div class="skills-preview-compact">
              ${skills
                .slice(0, 5)
                .map(
                  (skill, index) => `
                <div class="skill-icon-compact" style="animation-delay: ${
                  index * 0.1
                }s;">
                  <i class="${skill.icon}" style="color: ${skill.color};"></i>
                </div>
              `
                )
                .join("")}
              <div class="skill-more">+${skills.length - 5}</div>
            </div>
          </div>
        </div>
      `;
    } else {
      // Default card content for other items
      cardContent = `
        <div class="flex flex-col ${
          item.colSpan === 2 ? "items-start" : "items-center text-center"
        }">
          <div class="bg-white bg-opacity-20 rounded-lg w-fit p-3">
            <i class="${item.icon} text-neutral-800"></i>
          </div>
          <h3 class="mb-1 mt-3 text-sm font-medium text-white">${
            currentTranslations[item.titleKey]
          }</h3>
          <p class="text-xs text-white text-opacity-80">${
            currentTranslations[item.descKey]
          }</p>
        </div>
      `;
    }

    bentoCard.innerHTML = cardContent;

    // Only add navigation for non-interactive cards (achievements, contact)
    // Remove navigation for interactive cards (projects, about, skills)
    if (!interactiveCards.includes(item.className)) {
      bentoCard.addEventListener("click", () => {
        if (item.href.startsWith("#")) {
          navigateToSection(item.href.substring(1));
        } else {
          window.open(item.href, "_blank");
        }
      });
    }

    bentoContainer.appendChild(bentoCard);
  });

  // Initialize interactive features after rendering
  setTimeout(() => {
    initializeBentoInteractions();
  }, 100);
}

// Render projects
function renderProjects() {
  const projectsContainer = document.querySelector("#projects .grid");
  if (!projectsContainer) return;

  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className =
      "bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all";

    projectCard.innerHTML = `
            <img src="${project.image}" alt="${
      project.title
    }" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                <p class="text-neutral-600 dark:text-neutral-400 mb-4">${
                  project.description
                }</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies
                      .map(
                        (tech) => `
                        <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded text-xs">
                            ${tech}
                        </span>
                    `
                      )
                      .join("")}
                </div>
                <div class="flex gap-4">
                    <a href="${project.github}" target="_blank" 
                       class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <i class="fab fa-github"></i>
                        <span>Code</span>
                    </a>
                    <a href="${project.demo}" target="_blank" 
                       class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        `;

    projectsContainer.appendChild(projectCard);
  });
}

// Render achievements
function renderAchievements() {
  const achievementsContainer = document.querySelector("#achievements .grid");
  if (!achievementsContainer) return;

  achievementsContainer.innerHTML = "";

  achievements.forEach((achievement) => {
    const achievementCard = document.createElement("div");
    achievementCard.className =
      "bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer";

    achievementCard.innerHTML = `
            <img src="${achievement.image}" alt="${achievement.title}" class="w-full h-40 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-1">${achievement.title}</h3>
                <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-2">${achievement.issuer}</p>
                <p class="text-neutral-500 dark:text-neutral-500 text-xs">${achievement.date}</p>
            </div>
        `;

    achievementCard.addEventListener("click", () => {
      if (achievement.link !== "#") {
        window.open(achievement.link, "_blank");
      }
    });

    achievementsContainer.appendChild(achievementCard);
  });
}

// Initialize event listeners
function initializeEventListeners() {
  // Theme toggle - update to work with new switch design
  const themeContainers = document.querySelectorAll(".theme-switch-container");
  themeContainers.forEach((container) => {
    container.addEventListener("click", toggleTheme);
  });

  // Language toggle - update to work with new switch design
  const langContainers = document.querySelectorAll(".lang-switch-container");
  langContainers.forEach((container) => {
    container.addEventListener("click", toggleLanguage);
  });

  // Mobile menu toggle
  if (elements.mobileMenuToggle) {
    elements.mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  }

  // Menu items
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = item.getAttribute("href");
      if (href.startsWith("#")) {
        navigateToSection(href.substring(1));
      }
    });
  });

  // Mobile menu items
  const mobileMenuItems = document.querySelectorAll("#mobile-menu a");
  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = item.getAttribute("href");
      if (href.startsWith("#")) {
        navigateToSection(href.substring(1));
        updateActiveNavigation(href.substring(1));
        toggleMobileMenu(); // Close mobile menu after navigation
      }
    });
  });

  // Desktop menu items
  const desktopMenuItems = document.querySelectorAll(".desktop-nav-item");
  desktopMenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = item.getAttribute("href");
      if (href.startsWith("#")) {
        navigateToSection(href.substring(1));
        updateActiveNavigation(href.substring(1));
      }
    });
  });
}

// Update active navigation state
function updateActiveNavigation(activeSection) {
  // Remove active class from all navigation items
  const allNavItems = document.querySelectorAll(".modern-nav-item");
  allNavItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Add active class to current section
  const activeNavItems = document.querySelectorAll(
    `[data-section="${activeSection}"]`
  );
  activeNavItems.forEach((item) => {
    item.classList.add("active");
  });
}

// Toggle theme
function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeSwitch();
}

// Toggle language
function toggleLanguage() {
  const newLang = currentLang === "en" ? "vi" : "en";
  updateLanguage(newLang);
  updateLanguageSwitch();
}

// Toggle mobile menu
function toggleMobileMenu() {
  if (elements.mobileMenu) {
    const isCurrentlyHidden =
      elements.mobileMenu.style.display === "none" ||
      !elements.mobileMenu.classList.contains("show");

    if (isCurrentlyHidden) {
      elements.mobileMenu.style.display = "block";
      elements.mobileMenu.classList.add("show");
      elements.mobileMenuToggle.classList.add("active");
    } else {
      elements.mobileMenu.classList.remove("show");
      elements.mobileMenuToggle.classList.remove("active");
      setTimeout(() => {
        elements.mobileMenu.style.display = "none";
      }, 300);
    }
  }
}

// Navigate to section
function navigateToSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  // Update menu active state
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${sectionId}`) {
      item.classList.add("active");
    }
  });

  // Scroll to top on mobile
  if (window.innerWidth < 1024) {
    window.scrollTo(0, 0);
  }
}

// Navigate to home
function navigateToHome() {
  navigateToSection("home");
}

// Initialize navigation
function initializeNavigation() {
  // Set initial active section
  navigateToSection("home");
}

// Initialize AOS (Animate On Scroll)
function initializeAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      delay: 50,
      once: true,
    });
  }
}

// Hide loading screen
function hideLoading() {
  setTimeout(() => {
    if (elements.loading) {
      elements.loading.style.opacity = "0";
      setTimeout(() => {
        elements.loading.style.display = "none";
      }, 300);
    }
  }, 1000);
}

// Smooth scroll polyfill for older browsers
function smoothScrollTo(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Utility function to debounce events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle window resize
const handleResize = debounce(() => {
  // Close mobile menu on resize to desktop
  if (window.innerWidth >= 1024 && elements.mobileMenu) {
    elements.mobileMenu.classList.add("hidden");
    if (elements.menuIcon) {
      elements.menuIcon.className = "fas fa-bars";
    }
  }
}, 250);

window.addEventListener("resize", handleResize);

// Update language switch appearance
function updateLanguageSwitch() {
  const sliders = document.querySelectorAll(".lang-switch-slider");
  const tracks = document.querySelectorAll(".lang-switch-track");

  sliders.forEach((slider) => {
    if (currentLang === "vi") {
      slider.classList.add("vietnamese");
    } else {
      slider.classList.remove("vietnamese");
    }
  });

  tracks.forEach((track) => {
    const options = track.querySelectorAll(".lang-option");
    options.forEach((option, index) => {
      // Remove all classes first
      option.classList.remove(
        "text-white",
        "dark:text-neutral-800",
        "text-neutral-400",
        "dark:text-neutral-600"
      );

      if (currentLang === "vi") {
        // VN is active (index 1)
        if (index === 1) {
          option.classList.add("text-white", "dark:text-neutral-800");
        } else {
          option.classList.add("text-neutral-400", "dark:text-neutral-600");
        }
      } else {
        // US is active (index 0)
        if (index === 0) {
          option.classList.add("text-white", "dark:text-neutral-800");
        } else {
          option.classList.add("text-neutral-400", "dark:text-neutral-600");
        }
      }
    });
  });
}

// Update theme switch appearance
function updateThemeSwitch() {
  const sliders = document.querySelectorAll(".theme-switch-slider");
  const tracks = document.querySelectorAll(".theme-switch-track");
  const isDark = document.documentElement.classList.contains("dark");

  sliders.forEach((slider) => {
    if (isDark) {
      slider.classList.add("dark-mode");
    } else {
      slider.classList.remove("dark-mode");
    }
  });

  tracks.forEach((track) => {
    const options = track.querySelectorAll(".theme-option");
    options.forEach((option, index) => {
      // Remove all classes first
      option.classList.remove(
        "text-white",
        "dark:text-neutral-800",
        "text-neutral-400",
        "dark:text-neutral-600"
      );

      if (isDark) {
        // Moon is active (index 1)
        if (index === 1) {
          option.classList.add("text-white", "dark:text-neutral-800");
        } else {
          option.classList.add("text-neutral-400", "dark:text-neutral-600");
        }
      } else {
        // Sun is active (index 0)
        if (index === 0) {
          option.classList.add("text-white", "dark:text-neutral-800");
        } else {
          option.classList.add("text-neutral-400", "dark:text-neutral-600");
        }
      }
    });
  });
}

// Tooltip functions
let tooltip = null;

function showTooltip(event, text) {
  // Remove existing tooltip
  hideTooltip();

  // Create new tooltip
  tooltip = document.createElement("div");
  tooltip.className = "skill-tooltip";
  tooltip.textContent = text;
  document.body.appendChild(tooltip);

  // Position tooltip
  const rect = event.target.closest(".skill-icon").getBoundingClientRect();
  tooltip.style.left =
    rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
  tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + "px";

  // Show tooltip with animation
  setTimeout(() => {
    tooltip.classList.add("show");
  }, 10);
}

function hideTooltip() {
  if (tooltip) {
    tooltip.classList.remove("show");
    setTimeout(() => {
      if (tooltip && tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
      }
      tooltip = null;
    }, 200);
  }
}

// Export functions for global access
window.navigateToHome = navigateToHome;
window.navigateToSection = navigateToSection;

// ========== FEATURED SECTIONS INTERACTIVE FUNCTIONS ==========

// Initialize all bento interactions
function initializeBentoInteractions() {
  initializeProjectsPreview();
  initializePhotoStack();
  initializeSkillsAnimation();
}

// 1. Projects Preview - Horizontal Scrolling with Drag
function initializeProjectsPreview() {
  const container = document.getElementById("bento-projects-scroll");
  if (!container) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse events for drag scrolling
  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.style.cursor = "grabbing";
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.preventDefault();
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.style.cursor = "grab";
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.style.cursor = "grab";
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile
  let touchStartX = 0;
  let touchScrollLeft = 0;

  container.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchScrollLeft = container.scrollLeft;
  });

  container.addEventListener("touchmove", (e) => {
    if (!touchStartX) return;
    const touchX = e.touches[0].clientX;
    const walk = (touchStartX - touchX) * 1.5;
    container.scrollLeft = touchScrollLeft + walk;
    e.preventDefault();
  });

  container.addEventListener("touchend", () => {
    touchStartX = 0;
  });

  // Auto-scroll on hover (for demo purposes)
  const bentoProjectsCard = document.querySelector(".bento-projects");
  if (bentoProjectsCard) {
    let autoScrollInterval;

    bentoProjectsCard.addEventListener("mouseenter", () => {
      autoScrollInterval = setInterval(() => {
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }, 30);
    });

    bentoProjectsCard.addEventListener("mouseleave", () => {
      clearInterval(autoScrollInterval);
    });
  }
}

// 2. Photo Stack Animation in About Card
function initializePhotoStack() {
  const photoStack = document.getElementById("bento-photo-stack");
  if (!photoStack) return;

  const photos = Array.from(photoStack.children);
  let currentIndex = 0;

  photoStack.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent bento card click
    animatePhotoStack();
  });

  function animatePhotoStack() {
    const topPhoto = photos[currentIndex];

    // Add clicked animation
    topPhoto.classList.add("clicked");

    setTimeout(() => {
      // Move to back animation
      topPhoto.classList.remove("clicked");
      topPhoto.classList.add("moving-to-back");

      setTimeout(() => {
        // Reset and move to back in DOM
        topPhoto.classList.remove("moving-to-back");
        photoStack.appendChild(topPhoto);

        // Update photos array order
        photos.push(photos.shift());

        // Reapply z-index and transforms
        photos.forEach((photo, index) => {
          photo.style.zIndex = photos.length - index;
          photo.style.transform = `rotate(${(index - 1) * 5}deg) translateY(${
            index * 2
          }px)`;
        });

        currentIndex = 0;
      }, 300);
    }, 400);
  }
}

// 3. Skills Animation - Slide in from sides
function initializeSkillsAnimation() {
  const skillsContainer = document.getElementById("bento-skills-preview");
  if (!skillsContainer) return;

  // Create intersection observer for the bento skills card
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skills = entry.target.querySelectorAll(".skill-preview-item");
          skills.forEach((skill, index) => {
            skill.style.animationDelay = `${index * 0.1}s`;
            skill.classList.add("animate");
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px 0px -10px 0px",
    }
  );

  const bentoSkillsCard = document.querySelector(".bento-skills");
  if (bentoSkillsCard) {
    observer.observe(bentoSkillsCard);
  }

  // Add hover effect to restart animation
  if (bentoSkillsCard) {
    bentoSkillsCard.addEventListener("mouseenter", () => {
      const skills = skillsContainer.querySelectorAll(".skill-preview-item");
      skills.forEach((skill, index) => {
        skill.style.animation = "none";
        skill.offsetHeight; // Trigger reflow
        skill.style.animation = `skillSlideIn 0.3s ease forwards`;
        skill.style.animationDelay = `${index * 0.05}s`;
      });
    });
  }
}

// Enhanced scroll snap for projects
function snapToProject(container) {
  const cardWidth = 108; // 100px + 8px gap
  const scrollLeft = container.scrollLeft;
  const snapIndex = Math.round(scrollLeft / cardWidth);
  const snapPosition = snapIndex * cardWidth;

  container.scrollTo({
    left: snapPosition,
    behavior: "smooth",
  });
}

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
