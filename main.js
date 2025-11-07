// 카드/빠른 링크 클릭 이동 + 키보드 접근성
(function () {
  // 카드
  document.querySelectorAll('.card').forEach((card) => {
    const url = card.getAttribute('data-href');
    if (!url) return;

    // 클릭
    card.addEventListener('click', () => {
      window.open(url, '_blank', 'noopener');
    });

    // 키보드
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(url, '_blank', 'noopener');
      }
    });

    // 접근성 라벨
    const title = card.querySelector('.title')?.textContent?.trim() || '바로가기';
    card.setAttribute('aria-label', `${title} 링크`);
  });

  // 하단 빠른 링크
  document.querySelectorAll('.quick a').forEach((a) => {
    const url = a.getAttribute('data-href');
    if (!url) return;

    a.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(url, '_blank', 'noopener');
    });

    a.setAttribute('role', 'link');
    a.setAttribute('tabindex', '0');
    a.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(url, '_blank', 'noopener');
      }
    });
  });
})();
