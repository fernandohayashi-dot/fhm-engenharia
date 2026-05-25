import Link from "next/link";
import { cases } from "../../data/cases";

export default function CasesPage() {
  return (
    <main
      style={{
        background: "#0D1116",
        color: "#F5F6F7",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}

<header
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 80px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    position: "sticky",
    top: 0,
    background: "rgba(13,17,22,0.95)",
    backdropFilter: "blur(10px)",
    zIndex: 100,
  }}
>
  {/* LOGO */}

  <Link href="/">
    <img
      src="/logo.png"
      alt="FHM Engenharia"
      style={{
        height: "65px",
        display: "block",
        cursor: "pointer",
      }}
    />
  </Link>

  {/* MENU */}

  <nav
  style={{
    display: "flex",
    gap: "32px",
    fontSize: "17px",
    fontWeight: 500,
  }}
>
  <Link
    href="/"
    style={{
      color: "#F5F6F7",
      textDecoration: "none",
    }}
  >
    Home
  </Link>

  <Link
    href="/servicos"
    style={{
      color: "#F5F6F7",
      textDecoration: "none",
    }}
  >
    Serviços
  </Link>

  <Link
    href="/cases"
    style={{
      color: "#00A8E8",
      textDecoration: "none",
      fontWeight: 700,
    }}
  >
    Portfólio
  </Link>

  <a
    href="https://wa.me/5514998872510"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#F5F6F7",
      textDecoration: "none",
    }}
  >
    Contato
  </a>
</nav>
</header>

      {/* HERO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px 100px",
        }}
      >
        <div
          style={{
            color: "#00A8E8",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Portfólio
        </div>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1.1",
            maxWidth: "900px",
            marginBottom: "30px",
          }}
        >
          Projetos desenvolvidos
          <br />
          com metodologia BIM
        </h1>

        <p
          style={{
            color: "#B8C2D0",
            fontSize: "20px",
            lineHeight: "1.8",
            maxWidth: "800px",
            marginBottom: "40px",
          }}
        >
          Projetos elétricos, hidrossanitários e compatibilização BIM
          desenvolvidos para arquitetos, construtoras e incorporadoras
          que buscam maior previsibilidade na execução.
        </p>

        <a
          href="https://wa.me/5516999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#00A8E8",
            color: "#FFFFFF",
            padding: "18px 36px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "600",
            marginBottom: "90px",
          }}
        >
          Solicitar orçamento
        </a>

        {/* CASES */}

        <h2
          style={{
            fontSize: "52px",
            marginBottom: "40px",
          }}
        >
          Cases Selecionados
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px",
          }}
        >
          {cases.map((project) => (
  <Link
    key={project.slug}
    href={`/cases/${project.slug}`}
    style={{
      textDecoration: "none",
      color: "inherit",
    }}
  >
    <div
      className="case-card"
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* IMAGEM */}

      <img
        src={project.coverImage}
        alt={project.title}
        style={{
          width: "100%",
          height: "260px",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* CONTEÚDO */}

      <div
        style={{
          padding: "24px",
          minHeight: "230px",
        }}
      >
        <div
          style={{
            color: "#00A8E8",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {project.category}
        </div>

        <h3
          style={{
            fontSize: "34px",
            marginBottom: "12px",
            lineHeight: "1.2",
          }}
        >
          {project.title}
        </h3>

        <div
          style={{
            color: "#B8C2D0",
            fontSize: "14px",
            marginBottom: "16px",
          }}
        >
          {project.area} • {project.phase}
        </div>

        <p
          style={{
            color: "#9CA3AF",
            lineHeight: "1.7",
            marginBottom: "20px",
          }}
        >
          {project.headline}
        </p>

        <div
          style={{
            color: "#00A8E8",
            fontWeight: 600,
          }}
        >
          Ver estudo de caso →
        </div>
      </div>
    </div>
  </Link>
))}
        </div>
      </section>

      {/* CTA FINAL */}

<section
  style={{
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 40px 120px",
  }}
>
  <div
    style={{
      background:
        "linear-gradient(135deg,#0D1726 0%, #17263D 100%)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "32px",
      padding: "100px 80px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        color: "#00A8E8",
        fontSize: "14px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "20px",
      }}
    >
      Solicite uma proposta
    </div>

    <h2
      style={{
        fontSize: "72px",
        lineHeight: "1.1",
        maxWidth: "950px",
        margin: "0 auto 24px",
      }}
    >
      Precisa de projetos elétricos, hidrossanitários ou compatibilização BIM?
    </h2>

    <p
      style={{
        color: "#A8B3C7",
        maxWidth: "850px",
        margin: "0 auto 40px",
        lineHeight: "1.9",
        fontSize: "20px",
      }}
    >
      Desenvolvemos projetos elétricos, hidrossanitários e
      compatibilização BIM para arquitetos, construtoras e
      incorporadoras que buscam maior previsibilidade,
      redução de interferências e documentação executiva organizada.
    </p>

    <a
      href="https://wa.me/5519983577250"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        background: "#00A8E8",
        color: "#FFFFFF",
        padding: "18px 40px",
        borderRadius: "14px",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "18px",
      }}
    >
      Solicitar orçamento
    </a>
  </div>
</section>
    </main>
  );
}