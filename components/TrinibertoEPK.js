import { useState } from "react";

export default function TrinibertoEPK() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <main className={`${isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-black"} font-sans transition-colors duration-500 min-h-screen`}>
      {/* Toggle Theme */}
      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleTheme} style={{ padding: "0.5rem 1rem", border: "1px solid #fff", background: "transparent", borderRadius: "5px", cursor: "pointer" }}>
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('/texture.jpg')] bg-cover bg-center">
        <h1 className="text-6xl font-bold tracking-wide mb-4">TRINIBERTO</h1>
        <p className="text-lg uppercase tracking-widest">DJ / Productor – Buenos Aires, Argentina</p>
        <div className="mt-6 flex gap-4">
          <a href="https://soundcloud.com/triniberto" target="_blank" rel="noopener noreferrer" style={{ padding: "0.5rem 1rem", backgroundColor: "#FF6F61", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>Escuchar</a>
          <a href="mailto:trinibertomusic@gmail.com" style={{ padding: "0.5rem 1rem", border: "1px solid #fff", borderRadius: "5px", color: isDarkMode ? "#fff" : "#000", textDecoration: "none" }}>Contactar</a>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: isDarkMode ? "#121212" : "#f0f0f0" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem" }}>Bio</h2>
        <p style={{ fontSize: "1.125rem", maxWidth: "720px", lineHeight: "1.6" }}>
          Triniberto es DJ y productor de Buenos Aires, activo desde principios del 2000 en la escena hip hop, electrónica y tropical del under local. Su recorrido se forjó en fiestas autogestivas, eventos independientes y festivales internacionales, donde fue desarrollando una identidad sólida y sin concesiones.
          <br /><br />
          Fue parte de ciclos pioneros como <strong>GOLDIE (2014)</strong>, que impulsó el trap antes de su masividad, y <strong>BAMBAATAA (2015)</strong>, una plataforma clave para el dancehall, los afrobeats y otros ritmos periféricos. Su sonido actual fusiona <strong>afrohouse, latin bass, baile funk, rare house y dancehall</strong>, en sesiones con narrativa, fuerza y baile.
        </p>
      </section>

      {/* Estilo Musical */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: isDarkMode ? "#1e1e1e" : "#e0e0e0" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem" }}>Estilo Musical</h2>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginBottom: "2rem", listStyle: "none", paddingLeft: 0 }}>
          <li>Afrohouse</li>
          <li>Latin Bass</li>
          <li>Rare House</li>
          <li>Baile Funk</li>
          <li>Dancehall</li>
          <li>Drum and Bass</li>
        </ul>
        <blockquote style={{ fontStyle: "italic", fontSize: "1.125rem", borderLeft: "4px solid orange", paddingLeft: "1rem" }}>
          “La pista como territorio de resistencia y goce.”
        </blockquote>
      </section>

      {/* Presentaciones Destacadas */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: isDarkMode ? "#121212" : "#f0f0f0" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem" }}>Presentaciones destacadas</h2>
        <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "1.125rem", lineHeight: "1.6" }}>
          <li><strong>GOLDIE (2014)</strong> — Ciclo pionero del trap</li>
          <li><strong>BAMBAATAA (2015)</strong> — Ritmos afrodiaspóricos y dancehall</li>
          <li><strong>LES PIOLES (2018)</strong> — Fiesta queer autogestiva en CABA</li>
        </ul>
      </section>

      {/* Videos */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: isDarkMode ? "#1e1e1e" : "#e0e0e0" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem" }}>Videos</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/eD0RCiu9yXc?start=1330"
            title="Set en vivo de Triniberto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", aspectRatio: "16 / 9", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
          ></iframe>
        </div>
      </section>

      {/* Galería */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: isDarkMode ? "#121212" : "#f0f0f0" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem" }}>Galería</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1rem" }}>
          {["1vOS0p2ZwrRgBuQ_tA9A6le3eokPo_xrR", "1xzNrbz8apEwAS3qfIUEyuv7w8Mgb_GB_", "1jkDZkAKguuPIAW_0ZUd7v6mD8UY3CB5d"].map((id, idx) => (
            <a
              key={idx}
              href={`https://drive.google.com/uc?id=${id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.3)", display: "block" }}
            >
              <img
                src={`https://drive.google.com/uc?id=${id}`}
                alt={`Triniberto ${idx + 1}`}
                style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.3s", cursor: "pointer" }}
                onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
              />
            </a>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: isDarkMode ? "#1a1a1a" : "#e0e0e0", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}>Booking & Contacto</h2>
        <p style={{ marginBottom: "0.5rem" }}>Disponible para DJ sets, curaduría musical, ciclos temáticos y producción de eventos.</p>
        <p style={{ marginBottom: "1rem" }}>📩 trinibertomusic@gmail.com</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <a href="https://www.instagram.com/triniberto_/" target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? "#fff" : "#000", textDecoration: "underline" }}>Instagram</a>
          <a href="https://soundcloud.com/triniberto" target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? "#fff" : "#000", textDecoration: "underline" }}>SoundCloud</a>
          <a href="https://www.youtube.com/@triniberto_" target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? "#fff" : "#000", textDecoration: "underline" }}>YouTube</a>
        </div>
      </section>
    </main>
  );
}