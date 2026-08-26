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
document.getElementById('certGrid').innerHTML = certs.map((c, i) => `
  <div class="cert-card reveal-up">
    <span class="cert-slot">CERT ${String(i + 1).padStart(2, '0')}</span>
    <span class="cert-name">${c}</span>
    <span class="cert-status">Verified</span>
  </div>
`).join('');

/* ---------- clients data ---------- */
const clients = [
  ["City Bank Ltd", "Banking"],
  ["HSBC Bank", "Banking"],
  ["Habib Bank Private Ltd", "Banking"],
  ["Grameenphone", "Telecom"],
  ["British American Tobacco", "Manufacturing"],
  ["Dhaka Bank Ltd", "Banking"],
  ["Bangladesh Television (BTV)", "Broadcast / Gov"],
  ["United Commercial Bank Ltd", "Banking"],
  ["Union Bank", "Banking"],
  ["Banglalink Digital Communication Ltd", "Telecom"],
  ["Tesco Bangladesh", "Retail"],
  ["Japan Medical College Hospital", "Healthcare"],
  ["ICD Custom House", "Government"]
];
document.getElementById('cdpBody').innerHTML = clients.map(([name, sector]) => `
  <tr><td>${name}</td><td>${sector}</td></tr>
`).join('');

/* ---------- toolbox data ---------- */
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
    <span class="iface-desc">${desc}</span>
  </div>
`).join('');

/* ---------- scroll reveal ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
