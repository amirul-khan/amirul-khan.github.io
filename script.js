document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

/* ---------- certifications data ---------- */
const certs = [
  "Cisco Certified Network Professional – CCNP Data Center",
  "Cisco Certified Specialist – Data Center Core",
  "Cisco Certified Specialist – Data Center ACI",
  "Cisco Certified Network Associate (CCNA)",
  "Huawei Certified ICT Associate (HCIA-RS)",
  "JNCIP – Juniper Networks Certified Professional, Security",
  "JNCIS x3 – Enterprise Routing & Switching, Security, Mist",
  "JNCIA x5 – Junos, Security, Design, Cloud, Mist",
  "Fortinet Network Security Expert",
  "Check Point Certified Security Administrator R81",
  "Palo Alto Network System Engineer",
  "VMware Certified Professional – Network Virtualization 2022",
  "VMware Certified Advanced Professional – Network Virtualization Design 2022",
  "ICSI Certified Network Security Specialist (CNSS)"
];
const certGrid = document.getElementById('certGrid');
certGrid.innerHTML = certs.map((c, i) => `
  <div class="cert-card reveal-up">
    <span class="cert-slot">module ${String(i + 1).padStart(2, '0')}</span>
    <span class="cert-name">${c}</span>
    <span class="cert-status">active</span>
  </div>
`).join('');

/* ---------- clients / cdp neighbors data ---------- */
const clients = [
  ["City Bank Ltd", "Banking", "Gi0/1", "R S"],
  ["HSBC Bank", "Banking", "Gi0/2", "R S"],
  ["Habib Bank Private Ltd", "Banking", "Gi0/3", "R S"],
  ["Grameenphone", "Telecom", "Te1/1", "R S I"],
  ["British American Tobacco", "Manufacturing", "Gi0/4", "R S"],
  ["Dhaka Bank Ltd", "Banking", "Gi0/5", "R S"],
  ["Bangladesh Television (BTV)", "Broadcast/Gov", "Gi0/6", "R S"],
  ["United Commercial Bank Ltd", "Banking", "Gi0/7", "R S"],
  ["Union Bank", "Banking", "Gi0/8", "R S"],
  ["Banglalink Digital Communication Ltd", "Telecom", "Te1/2", "R S I"],
  ["Tesco Bangladesh", "Retail", "Gi0/9", "R S"],
  ["Japan Medical College Hospital", "Healthcare", "Gi0/10", "R S"],
  ["ICD Custom House", "Government", "Gi0/11", "R S"]
];
document.getElementById('cdpBody').innerHTML = clients.map(([name, sector, ifc, cap]) => `
  <tr>
    <td>${name}</td>
    <td>${sector}</td>
    <td>${ifc}</td>
    <td>${cap}</td>
  </tr>
`).join('');

/* ---------- toolbox / interfaces data ---------- */
const ifaces = [
  ["Firewall", "Cisco FTD/FMC, Palo Alto, ASA 55xx-X, FortiGate, Sophos XG, Juniper SRX, Check Point, Linux UFW, IPTables, UDM Pro, pfSense, Barracuda"],
  ["Security Sol.", "Cisco ISE, F5 WAF, F5 LB, Cisco APIC, Huawei iMaster, MFA, DDoS mitigation, Proxy"],
  ["Router", "Cisco ISR 4K, Cisco ASR, MikroTik, Edge Router, Cisco Meraki, Fortinet, Juniper MX"],
  ["L3/L2 Switch", "Cisco Catalyst 9500/9300/9200, Nexus 5K/7K/9K, Cisco Meraki MS, HPE, Huawei"],
  ["Wireless", "Cisco WLC-3504/9800, Cisco Meraki MR, Juniper Mist, Cambium, UniFi AP"],
  ["NMS", "Cisco Prime Infrastructure, ManageEngine, SolarWinds"]
];
document.getElementById('ifaceList').innerHTML = ifaces.map(([name, desc]) => `
  <div class="iface-row reveal-up">
    <span class="iface-name">${name}</span>
    <span class="iface-status">up/up</span>
    <span class="iface-desc">${desc}</span>
  </div>
`).join('');

/* ---------- hero boot sequence ---------- */
const bootLines = [
  { text: "$ ssh portfolio@amirulkhan.dev", cls: "" },
  { text: "Connecting to 203.0.113.12 ...", cls: "dim" },
  { text: "Authenticating ...", cls: "dim" },
  { text: "Access granted.", cls: "" },
  { text: "Welcome, Amirul Alam Khan.", cls: "" }
];

function typeLine(el, text, speed, done) {
  let i = 0;
  el.classList.add('show');
  const iv = setInterval(() => {
    el.textContent = text.slice(0, i + 1);
    i++;
    if (i >= text.length) { clearInterval(iv); done && done(); }
  }, speed);
}

function runBoot() {
  const body = document.getElementById('termBody');
  body.innerHTML = '';
  const heroName = document.getElementById('heroName');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    body.innerHTML = bootLines.map(l => `<p class="term-line show ${l.cls}">${l.text}</p>`).join('');
    heroName.classList.add('reveal');
    return;
  }

  let idx = 0;
  function next() {
    if (idx >= bootLines.length) {
      heroName.classList.add('reveal');
      return;
    }
    const line = bootLines[idx];
    const p = document.createElement('p');
    p.className = `term-line ${line.cls}`;
    body.appendChild(p);
    typeLine(p, line.text, 22, () => { idx++; setTimeout(next, 220); });
  }
  next();
}
runBoot();

/* ---------- scroll reveal ---------- */
document.querySelectorAll('.config-block, .log-entry, .contact-card').forEach(el => el.classList.add('reveal-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
