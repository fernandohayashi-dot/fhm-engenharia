import Link from "next/link";
import { Puzzle, Droplets, Zap } from "lucide-react";
import Header from "@/components/Header";

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

export default function CasesPage() {
  return (
    <main
      style={{
        background: "#0D1116",
        color: "#F5F6F7",
        minHeight: "100vh",
      }}
    >
      <Header active="cases" />
      {/* HERO */}

      <section
  style={{
    maxWidth: "1400px",
    width: "100%",
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "80px 24px 60px",
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
    fontSize: "46px",
    lineHeight: "1.05",
    marginBottom: "30px",
    maxWidth: "100%",
    overflowWrap: "break-word",
    wordBreak: "break-word",
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
          padding:
  typeof window !== "undefined" &&
  window.innerWidth < 768
    ? "0 24px 80px"
    : "0 40px 120px",
        }}
      >
        <h2
  style={{
    fontSize: "clamp(36px, 5vw, 56px)",
    marginBottom: "40px",
    lineHeight: "1.2",
  }}
>
  Especialidades
</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
  "repeat(auto-fit, minmax(320px, 1fr))",

gap:
  typeof window !== "undefined" &&
  window.innerWidth < 768
    ? "20px"
    : "30px",
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
    padding:
      typeof window !== "undefined" &&
      window.innerWidth < 768
        ? "0 24px 80px"
        : "0 40px 120px",
  }}
>
  <h2
    style={{
      fontSize: "clamp(32px, 6vw, 64px)",

      lineHeight: "1.2",

      marginBottom:
        typeof window !== "undefined" &&
        window.innerWidth < 768
          ? "20px"
          : "50px",
    }}
  >
    Por que trabalhar com a FHM?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(320px, 1fr))",
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

          padding:
            typeof window !== "undefined" &&
            window.innerWidth < 768
              ? "18px"
              : "28px",

          fontSize:
            typeof window !== "undefined" &&
            window.innerWidth < 768
              ? "15px"
              : "18px",

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
    padding:
      typeof window !== "undefined" &&
      window.innerWidth < 768
        ? "0 24px 80px"
        : "0 40px 120px",
  }}
>
  <div
    style={{
      background:
        "linear-gradient(135deg,#0D1726 0%, #17263D 100%)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius:
        typeof window !== "undefined" &&
        window.innerWidth < 768
          ? "24px"
          : "32px",

      padding:
        typeof window !== "undefined" &&
        window.innerWidth < 768
          ? "50px 24px"
          : "80px 60px",

      textAlign: "center",
    }}
  >
    <h2
  style={{
    fontSize: "clamp(32px, 6vw, 64px)",

    lineHeight: "1.1",
    marginBottom: "24px",
  }}
>
  {typeof window !== "undefined" && window.innerWidth < 768 ? (
    <>
      Precisa de projetos
      <br />
      complementares?
    </>
  ) : (
    "Precisa de projetos complementares?"
  )}
</h2>

    <p
      style={{
        color: "#A8B3C7",

        maxWidth:
          typeof window !== "undefined" &&
          window.innerWidth < 768
            ? "100%"
            : "800px",

        margin: "0 auto 40px",

        lineHeight: "1.8",

        fontSize:
          typeof window !== "undefined" &&
          window.innerWidth < 768
            ? "16px"
            : "18px",
      }}
    >
      Entre em contato para avaliar seu empreendimento e receber
      uma proposta técnica adequada às necessidades do projeto.
    </p>

    <a
      href="https://wa.me/5519983577250"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        background: "#00A8E8",
        color: "#FFFFFF",

        padding:
          typeof window !== "undefined" &&
          window.innerWidth < 768
            ? "16px 28px"
            : "18px 36px",

        borderRadius: "14px",
        textDecoration: "none",
        fontWeight: 600,

        fontSize:
          typeof window !== "undefined" &&
          window.innerWidth < 768
            ? "16px"
            : "18px",
      }}
    >
      Solicitar orçamento
    </a>
  </div>
</section>
    </main>
  );
}