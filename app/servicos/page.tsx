import Link from "next/link";
import { Puzzle, Droplets, Zap } from "lucide-react";

const services = [
  {
    title: "Compatibilização BIM",
    description:
      "Identificação antecipada de interferências entre disciplinas para reduzir retrabalho, conflitos em obra e aumentar a previsibilidade da execução.",
    href: "/servicos/compatibilizacao-bim",
    icon: Puzzle,
  },
  {
    title: "Projeto Hidrossanitário",
    description:
      "Projetos executivos de água fria, água quente, esgoto sanitário, ventilação e águas pluviais desenvolvidos em ambiente BIM.",
    href: "/servicos/projeto-hidrossanitario",
    icon: Droplets,
  },
  {
    title: "Projeto Elétrico",
    description:
      "Dimensionamento e documentação executiva de instalações elétricas com foco em segurança, organização e eficiência construtiva.",
    href: "/servicos/projeto-eletrico",
    icon: Zap,
  },
];

export default function ServicosPage() {
  return (
    <main
      style={{
        background: "#0D1116",
        color: "#FFFFFF",
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
              color: "#00A8E8",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Serviços
          </Link>

          <Link
            href="/cases"
            style={{
              color: "#F5F6F7",
              textDecoration: "none",
            }}
          >
            Portfólio
          </Link>

          <Link
            href="/contato"
            style={{
              color: "#F5F6F7",
              textDecoration: "none",
            }}
          >
            Contato
          </Link>
        </nav>
      </header>
      {/* HERO */}

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "120px 40px 100px",
        }}
      >
        <div
          style={{
            color: "#00A8E8",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Serviços
        </div>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1.05",
            maxWidth: "1500px",
            marginBottom: "30px",
          }}
        >
          Projetos complementares desenvolvidos em ambiente BIM
        </h1>

        <p
          style={{
            color: "#A8B3C7",
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "1500px",
            marginBottom: "40px",
          }}
        >
          Desenvolvemos projetos elétricos, hidrossanitários e
          compatibilização BIM para arquitetos, construtoras e
          incorporadoras que buscam maior previsibilidade, redução de
          interferências e documentação executiva organizada.
        </p>

        <a
          href="https://wa.me/5514991002672"
          target="_blank"
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
      </section>

      {/* ESPECIALIDADES */}

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            marginBottom: "50px",
          }}
        >
          Especialidades
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    background: "#111821",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "24px",
                    padding: "36px",
                    height: "100%",
                    transition: "0.3s",
                  }}
                >
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "18px",
                      background: "rgba(0,168,232,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                    }}
                  >
                    <Icon size={34} color="#00A8E8" />
                  </div>

                  <h3
                    style={{
                      fontSize: "34px",
                      lineHeight: "1.2",
                      marginBottom: "20px",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: "#A8B3C7",
                      lineHeight: "1.9",
                      fontSize: "17px",
                      marginBottom: "24px",
                    }}
                  >
                    {service.description}
                  </p>

                  <div
                    style={{
                      color: "#00A8E8",
                      fontWeight: 700,
                    }}
                  >
                    Saiba mais →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* DIFERENCIAIS */}

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            marginBottom: "50px",
          }}
        >
          Por que trabalhar com a FHM?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {[
            "Compatibilização entre disciplinas",
            "Redução de conflitos e retrabalho",
            "Documentação executiva organizada",
            "Maior previsibilidade durante a obra",
            "Projetos desenvolvidos em ambiente BIM",
            "Suporte técnico especializado",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#111821",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "18px",
                padding: "28px",
                fontSize: "18px",
                lineHeight: "1.6",
              }}
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

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
            padding: "80px 60px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "56px",
              lineHeight: "1.2",
              marginBottom: "24px",
            }}
          >
            Precisa de projetos complementares?
          </h2>

          <p
            style={{
              color: "#A8B3C7",
              maxWidth: "800px",
              margin: "0 auto 40px",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Entre em contato para avaliar seu empreendimento e receber
            uma proposta técnica adequada às necessidades do projeto.
          </p>

          <a
            href="https://wa.me/5519983577250"
            target="_blank"
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