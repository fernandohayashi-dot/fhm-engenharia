import Link from "next/link";
import Header from "@/components/Header";
import {
  Workflow,
  Search,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function CompatibilizacaoBIMPage() {
  return (
    <main
      style={{
        background: "#0D1116",
        color: "#F5F6F7",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Header active="servicos" />
      {/* HERO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px",
        }}
      >
        <div
          style={{
            color: "#00A8E8",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Compatibilização BIM
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
lineHeight: "1.1",
            maxWidth: "1500px",
            marginBottom: "30px",
          }}
        >
          Compatibilização entre disciplinas antes do início da obra
        </h1>

        <p
          style={{
            color: "#A8B3C7",
            fontSize: "clamp(16px, 2vw, 22px)",
            lineHeight: "1.8",
            maxWidth: "1500px",
            marginBottom: "50px",
          }}
        >
          Identificação antecipada de interferências entre arquitetura,
          estrutura e instalações para reduzir retrabalho, evitar improvisos
          em campo e aumentar a previsibilidade da execução.
        </p>

        <a
          href="https://wa.me/5519983577250"
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
      </section>

      {/* DESAFIO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px, 5vw, 56px)",
lineHeight: "1.2",
            marginBottom: "40px",
          }}
        >
          O problema das incompatibilidades em obra
        </h2>

        <p
          style={{
            color: "#A8B3C7",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: "2",
            maxWidth: "1500px",
          }}
        >
          Tubulações atravessando vigas, eletrodutos ocupando o mesmo espaço
          das redes hidrossanitárias, equipamentos sem área técnica adequada e
          alterações durante a execução são situações comuns quando os projetos
          são desenvolvidos de forma isolada.
        </p>

        <p
          style={{
            color: "#A8B3C7",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: "2",
            maxWidth: "1500px",
            marginTop: "30px",
          }}
        >
          Essas incompatibilidades aumentam custos, atrasam cronogramas e
          geram retrabalho para todas as equipes envolvidas.
        </p>
      </section>

      {/* COMO FUNCIONA */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px, 5vw, 56px)",
            marginBottom: "60px",
          }}
        >
          Como realizamos a compatibilização BIM
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
  "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              icon: <Layers size={32} />,
              title: "Integração dos modelos",
              text: "Arquitetura, estrutura e instalações reunidas em ambiente BIM.",
            },
            {
              icon: <Search size={32} />,
              title: "Análise de interferências",
              text: "Identificação antecipada de conflitos entre disciplinas.",
            },
            {
              icon: <Workflow size={32} />,
              title: "Coordenação técnica",
              text: "Ajustes coordenados para garantir compatibilidade executiva.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#111821",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "36px",
height: "100%",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "rgba(0,168,232,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00A8E8",
                  marginBottom: "30px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#A8B3C7",
                  lineHeight: "1.9",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px, 5vw, 56px)",
            marginBottom: "50px",
          }}
        >
          Benefícios para a obra
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
  "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            "Redução de retrabalho",
            "Menor ocorrência de improvisos",
            "Maior previsibilidade da execução",
            "Melhor aproveitamento dos espaços técnicos",
            "Documentação coordenada entre disciplinas",
            "Maior confiabilidade das informações executivas",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#111821",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "28px",
                display: "flex",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <CheckCircle2
  size={20}
  color="#00A8E8"
  style={{ flexShrink: 0 }}
/>
              <span style={{ fontSize: "18px" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CASES */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px, 5vw, 56px)",
            marginBottom: "40px",
          }}
        >
          Cases relacionados
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/cases/santa-casa-marilia"
            style={{
              color: "#00A8E8",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Santa Casa de Marília
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/cases/residencia-alto-padrao"
            style={{
              color: "#00A8E8",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Residência Alto Padrão
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/cases/galpao-comercial"
            style={{
              color: "#00A8E8",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Galpão Comercial
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "120px auto",
          padding: "0 40px 120px",
        }}
      >
        <div
  style={{
    background:
      "linear-gradient(135deg,#0F1C2D 0%,#182B48 100%)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "32px",
    padding: "clamp(40px, 6vw, 80px)",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "clamp(32px, 5vw, 54px)",
      lineHeight: "1.15",
      marginBottom: "24px",
      maxWidth: "900px",
      margin: "0 auto 24px",
    }}
  >
      Precisa de compatibilização BIM?

  </h2>

  <p
    style={{
      color: "#A8B3C7",
      maxWidth: "800px",
      margin: "0 auto 40px",
      lineHeight: "1.9",
      fontSize: "clamp(16px, 2vw, 18px)",
    }}
  >
    Coordenamos arquitetura, estrutura e instalações em ambiente BIM para
    identificar interferências antes da execução e proporcionar maior
    previsibilidade para a obra.
  </p>

  <a
    href="https://wa.me/5519983577250"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "#00A8E8",
      color: "#FFF",
      textDecoration: "none",
      padding: "18px 34px",
      borderRadius: "14px",
      fontWeight: 600,
    }}
  >
    Solicitar orçamento
    <ArrowRight size={18} />
  </a>
</div>
      </section>
    </main>
  );
}