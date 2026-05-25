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
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "22px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#F5F6F7",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "28px",
            }}
          >
            FHM Engenharia
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "32px",
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
              href="/#servicos"
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
                fontWeight: 600,
              }}
            >
              Portfólio
            </Link>

            <Link
              href="/#contato"
              style={{
                color: "#F5F6F7",
                textDecoration: "none",
              }}
            >
              Contato
            </Link>
          </nav>
        </div>
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
          marginTop: "40px",
          padding: "100px 40px",
          background: "#111821",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "52px",
              marginBottom: "24px",
            }}
          >
            Precisa de projetos elétricos, hidrossanitários ou compatibilização BIM?
          </h2>

          <p
            style={{
              color: "#B8C2D0",
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Desenvolvemos projetos elétricos,
            hidrossanitários e compatibilização BIM para
            arquitetos, construtoras e incorporadoras.
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
              fontWeight: 600,
            }}
          >
            Solicitar orçamento
          </a>
        </div>
      </section>
    </main>
  );
}