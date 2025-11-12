
const services = [
  {
    id: 1,
    title: "RE100 달성을 위한 에너지 기후 정보 서비스",
    image:
    // "https://images.unsplash.com/photo-1638068110878-c412de93e0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
      "https://images.unsplash.com/photo-1638068110878-c412de93e0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "에너지 수요 반응을 기반하여 신재생에너지 생산과 소비 최적 조율을 돕는 정보 제공 플랫폼",
    href: "http://10.252.219.52:9066/Index/"
  },
  {
    id: 2,
    title: "에너지 최적화된 안전 공조 시스템",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&q=80&w=1200",
    description: "에너지 소비를 최적화하면서 안전한 실내 환경을 제공하는 공조 서비스 시스템",
    href: "http://10.252.219.52:9066/Index/"
  },
  {
    id: 3,
    title: "탄소 배출량 모니터링 플랫폼",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "탄소 중립 정책 대응을 위해 실제 측정량 기반 탄소 배출량 산출하고 확산 분석을 모델링",
    href: "http://10.252.219.52:9066/Index/"
  },
  {
    id: 4,
    title: "기후위기 대응을 위한 농업 기후 정보 서비스",
    image:
    //   "https://images.unsplash.com/photo-1762381157166-f51ac99ab412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=1200",
    description: "농업 분야에 필요한 기상기후 정보를 제공하고 농부의 의사결정을 적극적으로 지원할 수 있는 정보를 제공",
    href: "http://10.252.219.52:9066/Index/"
  },
  {
    id: 5,
    title: "기후정보를 활용한 전기차 인프라 정보 서비스",
    image:
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "전기차 배터리 특성을 고려하여 충전시장 정보를 제공하고 지역 특성을 반영한 전기차 충전소 입지 선정 의사결정 지원",
    href: "http://10.252.219.52:9066/Index/"
  },
  {
    id: 6,
    title: "침수 피해 지역 기준 신고 분석",
    image:
      "https://images.unsplash.com/photo-1760500959977-c3d310ee876c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    description: "기후환경 변화로 인한 재난과 가장 연관성이 깊은 침수 문제의 해결을 돕기 위한 중요 점검 위치 및 신규 문제 지역 발굴",
    href: "http://10.252.219.52:9066/Index/"
  },
];

const platformLinks = [
  { name: "기후환경 데이터 관리/분석", icon: "database", href: "http://10.252.219.52:9066/Index/" },
  { name: "기후환경 데이터 레이블러", icon: "leaf", href: "http://10.252.219.52:5009/Index/" },
];

const el = (tag, cls = "", html = "") => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html) node.innerHTML = html;
  return node;
};

function renderServices() {
  const wrap = document.getElementById("servicesGrid");
  services.forEach((s) => {
    // <a>로 카드 전체 감싸기
    const link = document.createElement("a");
    link.href = s.href || "#";
    link.target = "_blank"; // 같은 탭 이동 원하면 "_self"
    link.rel = "noopener noreferrer";
    link.className = "block group"; // hover 유지

    const card = document.createElement("div");
    card.className =
      "service-card relative overflow-hidden bg-white rounded-2xl shadow-lg " +
      "hover:shadow-2xl transition-all duration-500 cursor-pointer";

    // 이미지
    const imgWrap = document.createElement("div");
    imgWrap.className = "relative h-56 overflow-hidden";
    imgWrap.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/40
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      <img src="${s.image}" alt="${s.title}"
           class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
    `;
    card.appendChild(imgWrap);

    // 본문
    const content = document.createElement("div");
    content.className = "p-6 text-center";
    content.innerHTML = `
      <h3 class="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
        ${s.title}
      </h3>
      <p class="text text-slate-700 leading-relaxed">${s.description}</p>
    `;
    card.appendChild(content);

    // 호버 보더
    const hoverBorder = document.createElement("div");
    hoverBorder.className =
      "absolute inset-0 border-2 border-emerald-500 rounded-2xl opacity-0 " +
      "group-hover:opacity-100 transition-opacity duration-300 pointer-events-none";
    card.appendChild(hoverBorder);

    link.appendChild(card);
    wrap.appendChild(link);
  });
}


function renderPlatformLinks() {
  const wrap = document.getElementById("platformLinks");
  platformLinks.forEach((l) => {
    const btn = document.createElement("a");
    btn.className =
      "platform-link group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-100";
    btn.href = l.href || "#";
    btn.target = "_blank";                 // ✅ 새 창/탭
    btn.rel = "noopener noreferrer";       // ✅ 보안

    btn.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="relative flex items-center gap-3">
        <div class="w-10 h-5 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 shrink-0">
          ${
            l.icon === "database"
              ? `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                   <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                   <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                 </svg>`
              : `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                 </svg>`
          }
        </div>
        <span class="whitespace-nowrap">${l.name}</span>
        <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </div>
      <div class="shine-effect absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
    `;
    wrap.appendChild(btn);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderPlatformLinks();
});
