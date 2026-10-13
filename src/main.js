const content = {
  toolkit: [
    ["Cloud", "AWS: EC2, S3, VPC, Lambda, EKS, RDS, DynamoDB, CloudFormation, IAM, Route 53, Auto Scaling, ELB/ALB, CloudWatch, SNS, SQS, ElastiCache. Azure: Virtual Machines, AKS, Blob Storage, Azure DevOps, ARM Templates."],
    ["Containers & Kubernetes", "Docker, multi-stage builds, image optimization, Kubernetes, cluster management, RBAC, Network Policies, Ingress, StatefulSets, DaemonSets, HPA, PV/PVC, Pod Security, Helm."],
    ["CI/CD & GitOps", "Jenkins, Declarative and Scripted Pipelines, Shared Libraries, ArgoCD, GitOps, Autosync, GitHub Actions."],
    ["Infrastructure as Code", "Terraform, reusable modules, state management, workspaces, S3/DynamoDB backend, Ansible, Playbooks, Roles, Ansible Vault."],
    ["Monitoring & Observability", "Prometheus, PromQL, Alerting, Grafana, ELK Stack, CloudWatch, Alertmanager."],
    ["Security", "SonarQube, Trivy, OWASP, Container Scanning, Vulnerability Management."],
    ["Tools & Scripting", "Git, JFrog Artifactory, Maven, npm, Nginx, Linux (RHEL and Ubuntu), Bash, Python, PowerShell, YAML."]
  ],
  education: [
    ["IN PROGRESS", "Master of Computer Applications (MCA)", "GLA University"],
    ["COMPLETED · 2023 — 2026", "Bachelor of Computer Application (BCA)", "GLA University"],
    ["DEC 2023 — MAY 2024", "DevOps Architect Certification", "Skillfyme"],
    ["SEP — DEC 2023", "AWS and Azure Cloud Certification", "CETPA Infotech Pvt. Ltd."],
    ["2021 — 2022", "Advanced Diploma in Computer Application", "Computer Training Institute"]
  ]
};
document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="./profile.css">');
document.querySelector(".eyebrow").insertAdjacentHTML("beforebegin", '<div class="profile-lockup"><div class="portrait-wrap"><img class="portrait" src="./pawan-kumar.jpg" alt="Pawan Kumar, DevOps Engineer"><span class="portrait-orbit" aria-hidden="true"></span><span class="orbit-dot" aria-hidden="true"></span></div><div class="profile-id"><strong>Pawan Kumar</strong><span>DEVOPS ENGINEER <i>·</i> NOIDA, INDIA</span></div></div>');
document.querySelector(".profile-lockup").insertAdjacentHTML("beforebegin", '<div class="india-clock">INDIA <span>·</span> <time id="india-time" aria-label="Current time in India"></time> IST</div>');
const indiaTime = document.querySelector("#india-time");
const updateIndiaTime = () => { indiaTime.textContent = new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()); };
updateIndiaTime(); setInterval(updateIndiaTime, 1000);
document.querySelector(".hero h1").innerHTML = '<span class="hero-line">I turn <span class="hero-highlight">infrastructure</span></span><span class="hero-line">into reliable</span><span class="hero-line"><span class="hero-underline">production systems.</span></span>';
document.querySelector(".hero .intro").textContent = "Building reliable cloud infrastructure, automating deployments, and making production systems more resilient.";
const heroCursor = document.createElement("span");
heroCursor.className = "hero-cursor";
heroCursor.setAttribute("aria-hidden", "true");
heroCursor.innerHTML = "<i></i>";
document.body.append(heroCursor);
const heroPointer = window.matchMedia("(hover: hover) and (pointer: fine)");
if (heroPointer.matches) {
  const heroHeading = document.querySelector(".hero h1");
  let cursorFrame = 0;
  let cursorX = 0;
  let cursorY = 0;
  heroHeading.addEventListener("pointerenter", () => heroCursor.classList.add("is-visible"));
  heroHeading.addEventListener("pointermove", event => {
    cursorX = event.clientX;
    cursorY = event.clientY;
    if (cursorFrame) return;
    cursorFrame = requestAnimationFrame(() => {
      heroCursor.style.setProperty("--cursor-x", `${cursorX}px`);
      heroCursor.style.setProperty("--cursor-y", `${cursorY}px`);
      cursorFrame = 0;
    });
  });
  heroHeading.addEventListener("pointerleave", () => heroCursor.classList.remove("is-visible"));
}
document.querySelector("#work").insertAdjacentHTML("beforebegin", `<section class="ops-ribbon" aria-label="How I approach reliable delivery"><div class="ops-copy"><span class="kicker">FROM COMMIT TO PRODUCTION</span><p>Reliable delivery is a<br><em>whole-system practice.</em></p></div><div class="ops-sequence"><div><small>01</small><b>PLAN</b><span>Infrastructure as code</span></div><i aria-hidden="true">↗</i><div><small>02</small><b>SHIP</b><span>Automated CI/CD</span></div><i aria-hidden="true">↗</i><div><small>03</small><b>SECURE</b><span>Checks in the pipeline</span></div><i aria-hidden="true">↗</i><div><small>04</small><b>OPERATE</b><span>Observe and improve</span></div></div></section>`);
const monogram = '<svg viewBox="0 0 48 48" role="img" aria-label="PK monogram"><rect class="mark-frame" x="2" y="2" width="44" height="44" rx="13"/><path class="mark-p" d="M12 35V13h9c5.4 0 8.5 2.8 8.5 7.2s-3.1 7.2-8.5 7.2H17"/><path class="mark-k" d="M32.5 13v22m0-10 8-8m-8 8 8 10"/><circle class="mark-spark" cx="39" cy="9" r="2"/></svg>';
document.querySelectorAll(".brand > b").forEach(mark => { mark.innerHTML = monogram; });
document.querySelector("#tool-list").innerHTML = content.toolkit.map(([title, body]) => `<article class="tool-row"><h3>${title}</h3><p>${body}</p></article>`).join("");
document.querySelector("#education-list").innerHTML = content.education.map(([when, title, place]) => `<article><small>${when}</small><h3>${title}</h3><p>${place}</p></article>`).join("");
document.querySelector("#education .heading > p").textContent = "Academic background and technical training.";
document.querySelector("#year").textContent = new Date().getFullYear();
const nav = document.querySelector("#nav"), toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation"); nav.classList.toggle("open", open); });
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation"); }));
const resumeLink = document.createElement("a"); resumeLink.href = "./Pawan-Kumar-Resume.pdf"; resumeLink.textContent = "↓"; resumeLink.className = "resume-download"; resumeLink.setAttribute("download", "Pawan-Kumar-Resume.pdf"); resumeLink.setAttribute("aria-label", "Download resume PDF"); resumeLink.title = "Download resume";
const hireLink = nav.querySelector(".navcta"); hireLink.textContent = "Hire me"; hireLink.setAttribute("aria-label", "Go to contact section");
const headerActions = document.createElement("div"); headerActions.className = "header-actions"; headerActions.append(resumeLink, hireLink);
const header = document.querySelector("header");
const placeHeaderActions = isMobile => { (isMobile ? nav : header).append(headerActions); };
const mobileHeader = window.matchMedia("(max-width: 760px)");
placeHeaderActions(mobileHeader.matches);
mobileHeader.addEventListener("change", event => placeHeaderActions(event.matches));
fetch("./Pawan-Kumar-Resume.pdf", { method: "HEAD" }).then(response => { if (!response.ok) resumeLink.addEventListener("click", event => { event.preventDefault(); document.querySelector("#resume").showModal(); }); }).catch(() => resumeLink.addEventListener("click", event => { event.preventDefault(); document.querySelector("#resume").showModal(); }));
document.querySelector(".project.row.reverse").insertAdjacentHTML("afterend", `
  <article class="project added-project">
    <div class="added-top"><div class="number">04 <small>DEVSECOPS · CI/CD</small></div></div>
    <h3>End-to-end DevSecOps CI/CD pipeline</h3>
    <p class="added-lede">A focused case study of the CI security integrations and Kubernetes delivery documented in my experience.</p>
    <div class="added-columns"><div><small>DOCUMENTED CONTRIBUTION</small><p>Integrated SonarQube and Trivy scanning into CI pipelines, implemented Jenkins and Argo CD pipelines across 8+ microservices, and optimized Docker images with multi-stage builds.</p></div><div><small>ILLUSTRATIVE FLOW</small><div class="illustrative-flow" role="img" aria-label="Conceptual CI/CD flow: Git, Jenkins, SonarQube, container build, Trivy scan, registry, Argo CD, EKS"><span class="flow-stage">Git</span><span class="flow-arrow">→</span><span class="flow-stage">Jenkins</span><span class="flow-arrow">→</span><span class="flow-stage">SonarQube</span><span class="flow-arrow">→</span><span class="flow-stage">Container build</span><span class="flow-arrow">→</span><span class="flow-stage">Trivy scan</span><span class="flow-arrow">→</span><span class="flow-stage">Registry</span><span class="flow-arrow">→</span><span class="flow-stage">Argo CD</span><span class="flow-arrow">→</span><span class="flow-stage">EKS</span></div></div></div>
    <p class="added-note">Conceptual stage sequence; the resume confirms the tools and integrations, not this exact job order or registry.</p>
    <div class="tags project-tools"><span>Jenkins</span><span>SonarQube</span><span>Trivy</span><span>Docker</span><span>Argo CD</span><span>AWS EKS</span></div>
  </article>
  <article class="project added-project gitops-project">
    <div class="added-top"><div class="number">05 <small>GITOPS · RELEASES</small></div></div>
    <h3>GitOps releases with Argo CD</h3>
    <p class="added-lede">Consistent microservice deployments across development, QA, and production, using Helm charts with environment-specific values.</p>
    <div class="gitops-flow"><span>Git desired state</span><b>→</b><span>Argo CD sync</span><b>→</b><span>Helm release</span><b>→</b><span>Dev · QA · Prod</span></div>
    <p class="added-note">Based on the documented GitOps platform and Helm work. The flow above is a conceptual illustration.</p>
    <div class="tags project-tools"><span>Argo CD</span><span>Helm</span><span>Kubernetes</span><span>AWS EKS</span></div>
  </article>`);
const firstProject = document.querySelector("#work > .project");
const projectStack = document.createElement("div");
projectStack.className = "project-stack";
firstProject.before(projectStack);
document.querySelectorAll("#work > .project").forEach((card, index) => {
  card.style.setProperty("--stack-index", index);
  card.style.zIndex = String(index + 2);
  projectStack.append(card);
});
document.querySelector(".close").addEventListener("click", () => document.querySelector("#resume").close());
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
const motionTargets = document.querySelectorAll(".snapshot .three article, .heading, .project, .tool-row, .four article, .timeline article, .education article, .contact, .ops-ribbon, .ops-sequence > div");
motionTargets.forEach(element => { element.classList.add("scroll-reveal"); observer.observe(element); });
const chapters = [...document.querySelectorAll("main > section[id]")];
let chapterTicking = false;
let themeWashTimer;
const applyChapterPalette = palette => {
  if (document.body.dataset.activeChapter === palette) return;
  document.body.dataset.activeChapter = palette;
  document.body.classList.remove("theme-changing");
  requestAnimationFrame(() => document.body.classList.add("theme-changing"));
  clearTimeout(themeWashTimer);
  themeWashTimer = setTimeout(() => document.body.classList.remove("theme-changing"), 1250);
};
const updateChapter = () => {
  if (chapterTicking) return;
  chapterTicking = true;
  requestAnimationFrame(() => {
    // Switch slightly before the next section reaches the viewport, so the
    // palette transition finishes as its color comes into view.
    const marker = window.innerHeight + Math.max(96, window.innerHeight * .12);
    const current = chapters.filter(section => section.getBoundingClientRect().top <= marker).at(-1) || chapters[0];
    if (current) {
      const chapter = current.id;
      applyChapterPalette(chapter === "contact" ? "violet" : ["work", "toolkit", "education"].includes(chapter) ? "light" : "dark");
    }
    chapterTicking = false;
  });
};
chapters.forEach(chapter => {
  if (["work", "toolkit", "education"].includes(chapter.id)) chapter.classList.add("chapter-light");
  if (chapter.id === "contact") chapter.classList.add("chapter-violet");
});
window.addEventListener("scroll", updateChapter, { passive: true });
window.addEventListener("resize", updateChapter, { passive: true });
updateChapter();
const progressBar = document.createElement("div");
progressBar.className = "page-progress";
progressBar.setAttribute("aria-hidden", "true");
document.body.append(progressBar);
let progressTicking = false;
const updateProgress = () => {
  if (progressTicking) return;
  progressTicking = true;
  requestAnimationFrame(() => {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty("--page-progress", `${range > 0 ? window.scrollY / range * 100 : 0}%`);
    progressTicking = false;
  });
};
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress, { passive: true });
updateProgress();
