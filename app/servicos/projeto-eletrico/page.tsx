import Link from "next/link";
import Header from "@/components/Header";
import {
  Zap,
  Workflow,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ProjetoEletricoPage() {
  const beneficios = [
    "Dimensionamento conforme normas técnicas",
    "Maior segurança das instalações",
    "Redução de interferências em obra",
    "Compatibilização com arquitetura e estrutura",
    "Documentação executiva organizada",
    "Maior previsibilidade da execução",
  ];

  const etapas = [
    {
      icon: <Zap size={32} />,
      title: "Dimensionamento",
      text: "Definição de cargas, circuitos, quadros de distribuição, dispositivos de proteção e infraestrutura elétrica conforme as necessidades do empreendimento.",
    },
    {
      icon: <Workflow size={32} />,
      title: "Compatibilização BIM",
      text: "Coordenação das instalações elétricas com arquitetura, estrutura e demais disciplinas para eliminar conflitos antes da execução.",
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Documentação Executiva",
      text: "Pranchas, diagramas, quadros de carga e detalhamentos organizados para apoiar a execução e fiscalização da obra.",
    },
  ];

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
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "120px 40px 100px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "60px",
      alignItems: "center",
    }}
  >
    <div>
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
        Projeto Elétrico
      </div>

      <h1
        style={{
          fontSize: "clamp(36px, 8vw, 72px)",
          lineHeight: "1.1",
          marginBottom: "24px",
        }}
      >
        Projetos elétricos desenvolvidos para garantir segurança,
        eficiência e previsibilidade
      </h1>

      <p
  style={{
    color: "#A8B3C7",
    fontSize: "clamp(16px, 2vw, 20px)",
    lineHeight: "2",
    maxWidth: "1000px",
    marginBottom: "24px",
  }}
>
        Desenvolvemos projetos elétricos em ambiente BIM para
        residências, edifícios comerciais, empreendimentos
        hospitalares e industriais, com foco em organização
        executiva, coordenação entre disciplinas e confiabilidade
        das informações técnicas.
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://wa.me/5519983577250"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#00A8E8",
            color: "#FFF",
            textDecoration: "none",
            padding: "18px 34px",
            borderRadius: "14px",
            fontWeight: 600,
          }}
        >
          Solicitar orçamento
        </a>

        <Link
          href="/cases"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#FFF",
            textDecoration: "none",
            padding: "18px 34px",
            borderRadius: "14px",
            fontWeight: 600,
          }}
        >
          Ver projetos
        </Link>
      </div>
    </div>

    <div
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <img
        src="/residencialelt.png"
        alt="Projeto Elétrico"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  </div>
</section>

      {/* BENEFÍCIOS RÁPIDOS */}

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 24px",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    textAlign: "center",
  }}
>
  <div>✓ Quadros elétricos</div>
  <div>✓ Circuitos e proteção</div>
  <div>✓ Compatibilização BIM</div>
  <div>✓ Documentação executiva</div>
</div>
      </section>

      {/* DESAFIO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "120px auto",
          padding: "0 40px",
        }}
      >
        <h2
  style={{
    fontSize: "clamp(30px, 5vw, 56px)",
    lineHeight: "1.15",
    marginBottom: "32px",
    maxWidth: "900px",
  }}
>
  A importância do planejamento elétrico
</h2>

        <p
          style={{
            color: "#A8B3C7",
            fontSize: "20px",
            lineHeight: "2",
            maxWidth: "1000px",
            marginBottom: "24px",
          }}
        >
          Instalações mal dimensionadas podem gerar sobrecargas,
          incompatibilidades entre sistemas, dificuldades de manutenção e
          alterações durante a execução da obra.
        </p>

        <p
          style={{
            color: "#A8B3C7",
            fontSize: "20px",
            lineHeight: "2",
            maxWidth: "1000px",
          }}
        >
          Um projeto elétrico desenvolvido de forma coordenada proporciona
          maior segurança, melhor distribuição dos circuitos e mais
          previsibilidade para a execução.
        </p>
      </section>

     {/* COMO FUNCIONA */}

<section
  style={{
    maxWidth: "1200px",
    margin: "120px auto",
    padding: "0 24px",
  }}
>
  <h2
    style={{
      fontSize: "clamp(30px, 5vw, 56px)",
      lineHeight: "1.2",
      marginBottom: "40px",
    }}
  >
    Como desenvolvemos nossos projetos elétricos
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px",
    }}
  >
    {etapas.map((item, index) => (
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
            width: "70px",
            height: "70px",
            background: "rgba(0,168,232,0.12)",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00A8E8",
            marginBottom: "24px",
          }}
        >
          {item.icon}
        </div>

        <h3
          style={{
            fontSize: "clamp(24px, 4vw, 30px)",
            lineHeight: "1.2",
            marginBottom: "20px",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            color: "#A8B3C7",
            lineHeight: "1.9",
            fontSize: "clamp(16px, 2vw, 17px)",
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
    margin: "120px auto",
    padding: "0 24px",
  }}
>
  <h2
    style={{
      fontSize: "clamp(30px, 5vw, 56px)",
      lineHeight: "1.2",
      marginBottom: "32px",
    }}
  >
    Benefícios para a obra
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
    }}
  >
    {beneficios.map((item) => (
      <div
        key={item}
        style={{
          background: "#111821",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          minHeight: "90px",
        }}
      >
        <CheckCircle2
          size={20}
          color="#00A8E8"
          style={{ flexShrink: 0 }}
        />

        <span
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "1.6",
          }}
        >
          {item}
        </span>
      </div>
    ))}
  </div>
</section>

      {/* CASES RELACIONADOS */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "120px auto",
          padding: "0 40px",
        }}
      >
        <h2
  style={{
    fontSize: "clamp(30px, 5vw, 56px)",
    lineHeight: "1.2",
    marginBottom: "32px",
  }}
>
          Cases relacionados
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
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
            Santa Casa de Misericórdia de Marília
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
    padding: "0 24px 120px",
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
      Precisa de um projeto elétrico?
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
      Desenvolvemos projetos elétricos completos em ambiente BIM para
      garantir segurança, organização executiva e integração entre
      disciplinas desde a fase de projeto.
    </p>

    <a
      href="https://wa.me/5519983577250"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        background: "#00A8E8",
        color: "#FFF",
        textDecoration: "none",
        padding: "18px 34px",
        borderRadius: "14px",
        fontWeight: 600,
        fontSize: "16px",
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