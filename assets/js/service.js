const hizmetData = {
  projelendirme: {
    title: "Elektrik Projelendirme Hizmetleri",
    content: `
      <p>Elektrik projelendirme hizmetimiz kapsamında, yapıların tüm elektrik sistemlerinin güvenli, verimli ve standartlara uygun şekilde tasarlanmasını sağlıyoruz.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> Tüm projelerde ulusal ve uluslararası standartlara uygunluk</li>
        <li><i class="bi bi-check-circle"></i> Proje bazlı mühendislik çözümleri ve danışmanlık</li>
        <li><i class="bi bi-check-circle"></i> Enerji verimliliği ve maliyet optimizasyonu</li>
      </ul>
      <p>Projelerimizin her aşamasında kalite ve mühendislik prensiplerinden ödün vermeden çalışıyoruz.</p>
    `
  },
  ges: {
    title: "Güneş Enerjisi Sistemleri",
    content: `
      <p>GES projeleri için mühendislik, kurulum ve devreye alma hizmetleri sağlıyoruz.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> Anahtar teslim GES çözümleri</li>
        <li><i class="bi bi-check-circle"></i> Devreye alma ve izleme sistemleri</li>
      </ul>
    `
  },
  danismanlik: {
    title: "Proje Danışmanlığı",
    content: `
      <p>Yatırımınıza özel mühendislik ve mali danışmanlık hizmetleri sunuyoruz.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> Fizibilite analizleri</li>
        <li><i class="bi bi-check-circle"></i> Finansal planlama desteği</li>
      </ul>
    `
  },
  verimlilik: {
    title: "Enerji Verimliliği Çözümleri",
    content: `
      <p>Enerji tüketiminizi optimize etmek için tesis özelinde çözümler geliştiriyoruz.</p>
      <ul>
        <li><i class="bi bi-check-circle"></i> Verimlilik analizleri</li>
        <li><i class="bi bi-check-circle"></i> Tüketim optimizasyonu</li>
      </ul>
    `
  }
};

// Sayfaya gelince URL'ye göre başlat
function loadHizmet(type) {
  const data = hizmetData[type];
  const titleEl = document.querySelector("h3");
  const contentEl = document.querySelector(".dynamic-service-content");

  if (data && titleEl && contentEl) {
    titleEl.textContent = data.title;
    contentEl.innerHTML = data.content;
    highlightActiveButton(type);
  }
}

function highlightActiveButton(type) {
  document.querySelectorAll(".services-list a").forEach(el => {
    el.classList.remove("active");
    if (el.dataset.type === type) {
      el.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sayfa URL'ine göre başlat
  const params = new URLSearchParams(window.location.search);
  const typeFromUrl = params.get("type") || "projeler"; // fallback

  if (hizmetData[typeFromUrl]) {
    loadHizmet(typeFromUrl);
  }

  // 2. Sol menü butonlarına tıklanınca içerik değiştir
  document.querySelectorAll(".services-list a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const type = link.dataset.type;
      loadHizmet(type);
      history.replaceState(null, "", `?type=${type}`);
    });
  });
});
