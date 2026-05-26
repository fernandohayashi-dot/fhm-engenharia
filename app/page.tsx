import Link from "next/link";
import styles from "./home.module.css";
import Header from "@/components/Header";
import {
  FileDown,
  Building2,
  Workflow,
  ShieldCheck,
  PackageCheck,
  Zap,
  Puzzle,
  Droplets,
} from "lucide-react";
export default function Home() {
  return (
    <main
      style={{
        background: "#0D1116",
        color: "#F5F6F7",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Header active="home" />
 
      {/* HERO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "90px 40px 60px",
        }}
      >
        <div className={styles.hero}>
          {/* TEXTO */}

          <div
            style={{
              maxWidth: "620px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 18px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                marginBottom: "20px",
              }}
            >
              Engenharia complementar BIM
            </div>

            <div
              style={{
                color: "#9CA3AF",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Projetos complementares • BIM • Compatibilização
            </div>

            <h1 className={styles.heroTitle}>
              Engenharia complementar BIM para obras executadas com mais previsibilidade.
            </h1>

            <p
              style={{
                color: "#A8B3C7",
                fontSize: "18px",
                lineHeight: "1.8",
                maxWidth: "540px",
                marginBottom: "40px",
              }}
            >
              Desenvolvidos para reduzir interferências em obra, aumentar a
              previsibilidade dos custos e melhorar a execução.
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
    style={{
      background: "#00A8E8",
      color: "#FFFFFF",
      padding: "18px 42px",
      borderRadius: "14px",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "600",
      boxShadow: "0 10px 30px rgba(0,168,232,0.25)",
    }}
  >
    Falar no WhatsApp
  </a>

 <Link
  href="/cases"
  style={{
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#F5F6F7",
    padding: "18px 42px",
    borderRadius: "14px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    display: "inline-block",
  }}
>
  Conhecer projetos
</Link>
</div>
          </div>

          {/* IMAGEM */}

          <div
            style={{
              background: "#111821",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "14px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <img
              src="/bim.png"
              alt="Compatibilização BIM"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                display: "block",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "30px 0",
        }}
      >
        <div
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    color: "#A8B3C7",
    fontSize: "18px",
    textAlign: "center",
  }}
>
  <span>✓ Compatibilização BIM</span>
  <span>✓ Projetos Elétricos</span>
  <span>✓ Projetos Hidrossanitários</span>
  <span>✓ Coordenação Multidisciplinar</span>
</div>
      </section>

      {/* MÉTRICAS */}

      <section
  style={{
    width: "80%",
    maxWidth: "1200px",
    margin: "70px auto",
    background: "#111821",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "15px",
    boxSizing: "border-box",
  }}
>
        <div className={styles.metricsGrid}>
          <div>
            <div
              style={{
                fontSize: "60px",
                fontWeight: "700",
                color: "#00A8E8",
              }}
            >
              +150
            </div>

            <div
              style={{
                color: "#A8B3C7",
                marginTop: "10px",
              }}
            >
              Projetos desenvolvidos
            </div>
          </div>

         <div className={styles.metricCenter}>
            <div
              style={{
                fontSize: "60px",
                fontWeight: "700",
                color: "#00A8E8",
              }}
            >
              +100
            </div>

            <div
              style={{
                color: "#A8B3C7",
                marginTop: "10px",
              }}
            >
              Compatibilizações realizadas
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "60px",
                fontWeight: "700",
                color: "#00A8E8",
              }}
            >
              100%
            </div>

            <div
              style={{
                color: "#A8B3C7",
                marginTop: "10px",
              }}
            >
              Projetos modelados em BIM
            </div>
          </div>
        </div>
      </section>

      {/* CASES SELECIONADOS */}

<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "120px 40px",
  }}
>
  <h2 className={styles.sectionTitle}>
    Cases Selecionados
  </h2>

  <div className={styles.casesGrid}>

    {/* RESIDÊNCIA */}

    <Link
      href="/cases/residencia-alto-padrao"
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
          height: "100%",
        }}
      >
        <img
          src="/projeto1.png"
          alt="Residência Alto Padrão"
          style={{
            width: "100%",
            height: "240px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "24px",
            minHeight: "240px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#00A8E8",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            Residencial Alto Padrão
          </div>

          <h3 style={{ marginBottom: "10px" }}>
            Residência Alto Padrão
          </h3>

          <div
            style={{
              color: "#A8B3C7",
              fontSize: "13px",
              marginBottom: "12px",
            }}
          >
            350 m² • Projeto Executivo
          </div>

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "14px",
              lineHeight: "1.7",
              flexGrow: 1,
            }}
          >
            Projetos complementares desenvolvidos em ambiente BIM para
            garantir integração entre disciplinas, organização executiva e
            previsibilidade durante a construção.
          </p>

          <div
            style={{
              color: "#00A8E8",
              fontWeight: 600,
              marginTop: "16px",
            }}
          >
            Ver estudo de caso →
          </div>
        </div>
      </div>
    </Link>

    {/* SANTA CASA */}

    <Link
      href="/cases/santa-casa-marilia"
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
          height: "100%",
        }}
      >
        <img
          src="/projeto2.png"
          alt="Santa Casa de Misericórdia de Marília"
          style={{
            width: "100%",
            height: "240px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "24px",
            minHeight: "240px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#00A8E8",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            Hospitalar
          </div>

          <h3 style={{ marginBottom: "10px" }}>
            Santa Casa de Misericórdia de Marília
          </h3>

          <div
            style={{
              color: "#A8B3C7",
              fontSize: "13px",
              marginBottom: "12px",
            }}
          >
            1.894 m² • Projeto Executivo
          </div>

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "14px",
              lineHeight: "1.7",
              flexGrow: 1,
            }}
          >
            Projetos elétricos, hidrossanitários e compatibilização BIM
            desenvolvidos para empreendimento hospitalar.
          </p>

          <div
            style={{
              color: "#00A8E8",
              fontWeight: 600,
              marginTop: "16px",
            }}
          >
            Ver estudo de caso →
          </div>
        </div>
      </div>
    </Link>

    {/* GALPÃO */}

    <Link
      href="/cases/galpao-comercial"
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
          height: "100%",
        }}
      >
        <img
          src="/projeto3.png"
          alt="Galpão Comercial"
          style={{
            width: "100%",
            height: "240px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "24px",
            minHeight: "240px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#00A8E8",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            Comercial
          </div>

          <h3 style={{ marginBottom: "10px" }}>
            Galpão Comercial
          </h3>

          <div
            style={{
              color: "#A8B3C7",
              fontSize: "13px",
              marginBottom: "12px",
            }}
          >
            540,24 m² • Projeto Executivo
          </div>

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "14px",
              lineHeight: "1.7",
              flexGrow: 1,
            }}
          >
            Projetos complementares desenvolvidos em ambiente BIM para
            garantir integração entre disciplinas e maior previsibilidade
            durante a implantação da edificação.
          </p>

          <div
            style={{
              color: "#00A8E8",
              fontWeight: 600,
              marginTop: "16px",
            }}
          >
            Ver estudo de caso →
          </div>
        </div>
      </div>
    </Link>
  </div>
</section>
     
   {/* COMO FUNCIONA */}

<section
  style={{
    maxWidth: "1400px",
    margin: "140px auto",
    padding: "0 40px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "52px",
      fontWeight: "700",
      marginBottom: "20px",
    }}
  >
    Como funciona
  </h2>

  <p
    style={{
      color: "#9CA3AF",
      maxWidth: "780px",
      margin: "0 auto 80px",
      lineHeight: "1.8",
      fontSize: "18px",
    }}
  >
    Processo estruturado para garantir compatibilidade entre disciplinas,
    previsibilidade na execução e documentação técnica completa.
  </p>

  <div className={styles.processGrid}>

    {/* LINHA CENTRAL */}

    <div className={styles.processLine} />

    {/* ETAPA 01 */}

    <div className={styles.processItem}>
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: "#0F1722",
          border: "2px solid #00A8E8",
          boxShadow: "0 0 20px rgba(0,168,232,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          color: "#00A8E8",
        }}
      >
        <div style={{ fontSize: "11px", marginBottom: "4px" }}>
          01
        </div>

        <FileDown size={36} />
      </div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Recebimento
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.7",
        }}
      >
        Análise do projeto arquitetônico e definição dos requisitos
        técnicos.
      </p>
    </div>

    {/* ETAPA 02 */}

    <div className={styles.processItem}>
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: "#0F1722",
          border: "2px solid #00A8E8",
          boxShadow: "0 0 20px rgba(0,168,232,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          color: "#00A8E8",
        }}
      >
        <div style={{ fontSize: "11px", marginBottom: "4px" }}>
          02
        </div>

        <Building2 size={36} />
      </div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Desenvolvimento BIM
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.7",
        }}
      >
        Modelagem e elaboração dos sistemas elétricos e hidrossanitários.
      </p>
    </div>

    {/* ETAPA 03 */}

    <div className={styles.processItem}>
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: "#0F1722",
          border: "2px solid #00A8E8",
          boxShadow: "0 0 20px rgba(0,168,232,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          color: "#00A8E8",
        }}
      >
        <div style={{ fontSize: "11px", marginBottom: "4px" }}>
          03
        </div>

        <Workflow size={36} />
      </div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Compatibilização
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.7",
        }}
      >
        Verificação de interferências entre arquitetura, estrutura e
        instalações.
      </p>
    </div>

    {/* ETAPA 04 */}

    <div className={styles.processItem}>
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: "#0F1722",
          border: "2px solid #00A8E8",
          boxShadow: "0 0 20px rgba(0,168,232,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          color: "#00A8E8",
        }}
      >
        <div style={{ fontSize: "11px", marginBottom: "4px" }}>
          04
        </div>

        <ShieldCheck size={36} />
      </div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Revisão Técnica
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.7",
        }}
      >
        Conferência final dos modelos e documentação executiva.
      </p>
    </div>

    {/* ETAPA 05 */}

    <div className={styles.processItem}>
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: "#0F1722",
          border: "2px solid #00A8E8",
          boxShadow: "0 0 20px rgba(0,168,232,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          color: "#00A8E8",
        }}
      >
        <div style={{ fontSize: "11px", marginBottom: "4px" }}>
          05
        </div>

        <PackageCheck size={36} />
      </div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Entrega Executiva
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.7",
        }}
      >
        Entrega dos projetos e modelos BIM prontos para execução da obra.
      </p>
    </div>
  </div>
</section>

    {/* SERVIÇOS */}

<section
  style={{
    maxWidth: "1200px",
    margin: "120px auto",
    padding: "0 40px",
  }}
>
  <h2
    style={{
      fontSize: "48px",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "16px",
    }}
  >
    Serviços especializados
  </h2>

  <p
    style={{
      color: "#9CA3AF",
      fontSize: "18px",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto 70px",
      lineHeight: "1.8",
    }}
  >
    Projetos complementares desenvolvidos em ambiente BIM para integrar
    disciplinas, reduzir interferências e proporcionar maior previsibilidade
    durante a execução da obra.
  </p>

  <div className={styles.servicesGrid}>

    {/* ELÉTRICOS */}

    <div
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "40px",
      }}
    >
      <div
        style={{
          color: "#00A8E8",
          marginBottom: "24px",
        }}
      >
        <Zap size={48} />
      </div>

      <h3
        style={{
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "18px",
          lineHeight: "1.2",
        }}
      >
        Projetos Elétricos
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          lineHeight: "1.8",
          marginBottom: "28px",
        }}
      >
        Projetos desenvolvidos para garantir segurança, eficiência e execução
        organizada.
      </p>

      <div
        style={{
          color: "#D1D5DB",
          lineHeight: "2",
        }}
      >
        ✓ Distribuição elétrica<br />
        ✓ Iluminação<br />
        ✓ Dimensionamento<br />
        ✓ Quadros elétricos<br />
        ✓ Infraestrutura para equipamentos
      </div>
    </div>

    {/* BIM - DESTAQUE */}

    <div
      style={{
        position: "relative",
        background: "#111821",
        border: "1px solid rgba(0,168,232,0.45)",
        boxShadow: "0 0 35px rgba(0,168,232,0.15)",
        borderRadius: "24px",
        padding: "40px",
        transform: "translateY(-10px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "18px",
          right: "18px",
          background: "#00A8E8",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "700",
          padding: "6px 12px",
          borderRadius: "999px",
        }}
      >
        DIFERENCIAL FHM
      </div>

      <div
        style={{
          color: "#00A8E8",
          marginBottom: "24px",
        }}
      >
        <Puzzle size={48} />
      </div>

      <h3
        style={{
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "18px",
          lineHeight: "1.2",
        }}
      >
        Compatibilização BIM
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          lineHeight: "1.8",
          marginBottom: "28px",
        }}
      >
        Coordenação multidisciplinar para eliminar interferências antes da obra.
      </p>

      <div
        style={{
          color: "#D1D5DB",
          lineHeight: "2",
        }}
      >
        ✓ Detecção de interferências<br />
        ✓ Coordenação entre disciplinas<br />
        ✓ Organização de shafts<br />
        ✓ Revisão executiva
      </div>
    </div>

    {/* HIDROSSANITÁRIOS */}

    <div
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "40px",
      }}
    >
      <div
        style={{
          color: "#00A8E8",
          marginBottom: "24px",
        }}
      >
        <Droplets size={48} />
      </div>

      <h3
        style={{
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "18px",
          lineHeight: "1.2",
        }}
      >
        Projetos Hidrossanitários
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          lineHeight: "1.8",
          marginBottom: "28px",
        }}
      >
        Sistemas hidráulicos compatibilizados para execução eficiente e
        manutenção simplificada.
      </p>

      <div
        style={{
          color: "#D1D5DB",
          lineHeight: "2",
        }}
      >
        ✓ Água fria<br />
        ✓ Água quente<br />
        ✓ Esgoto sanitário<br />
        ✓ Drenagem pluvial<br />
        ✓ Reservação
         </div>
    </div>

  </div>
</section>
{/* SOBRE A FHM */}

<section
  style={{
    maxWidth: "1200px",
    margin: "140px auto",
    padding: "0 40px",
  }}
>
  <div
    style={{
      textAlign: "center",
      maxWidth: "850px",
      margin: "0 auto 70px",
    }}
  >
    <h2
      style={{
        fontSize: "48px",
        fontWeight: "700",
        marginBottom: "20px",
      }}
    >
      Sobre a FHM
    </h2>

    <p
      style={{
        color: "#9CA3AF",
        fontSize: "18px",
        lineHeight: "1.9",
      }}
    >
      Mais de 8 anos de experiência no desenvolvimento de projetos
      complementares, com aproximadamente 150 projetos executados em
      residências, edifícios e empreendimentos comerciais.
      <br />
      <br />
      Atuação especializada em projetos elétricos, hidrossanitários e
      compatibilização BIM, com foco na integração entre disciplinas,
      redução de interferências e maior previsibilidade durante a execução
      da obra.
    </p>
  </div>

{/* INDICADORES */}

<div
  style={{
    background: "#111821",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "50px",
    marginTop: "70px",
    marginBottom: "80px",
  }}
>
  <div className={styles.aboutGrid}>
    <div>
      <div
        style={{
          fontSize: "52px",
          fontWeight: "700",
          color: "#00A8E8",
          marginBottom: "10px",
        }}
      >
        150+
      </div>

      <div
        style={{
          color: "#D1D5DB",
          fontSize: "15px",
        }}
      >
        Projetos desenvolvidos
      </div>
    </div>

    <div>
      <div
        style={{
          fontSize: "52px",
          fontWeight: "700",
          color: "#00A8E8",
          marginBottom: "10px",
        }}
      >
        8+
      </div>

      <div
        style={{
          color: "#D1D5DB",
          fontSize: "15px",
        }}
      >
        Anos de experiência
      </div>
    </div>

    <div>
      <div
        style={{
          fontSize: "52px",
          fontWeight: "700",
          color: "#00A8E8",
          marginBottom: "10px",
        }}
      >
        100%
      </div>

      <div
        style={{
          color: "#D1D5DB",
          fontSize: "15px",
        }}
      >
        Projetos desenvolvidos em BIM
      </div>
    </div>

    <div>
      <div
        style={{
          fontSize: "52px",
          fontWeight: "700",
          color: "#00A8E8",
          marginBottom: "10px",
        }}
      >
        Brasil
      </div>

      <div
        style={{
          color: "#D1D5DB",
          fontSize: "15px",
        }}
      >
        Atendimento remoto
      </div>
    </div>
  </div>
</div>

{/* ÁREA DE ATUAÇÃO */}

<div
  style={{
    textAlign: "center",
  }}
>
  <div
    style={{
      color: "#00A8E8",
      fontSize: "14px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "18px",
      fontWeight: "600",
    }}
  >
    Áreas de atuação
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "18px",
      color: "#D1D5DB",
      fontSize: "17px",
      lineHeight: "1.8",
    }}
  >
    <span>✓ Residências de médio e alto padrão</span>

    <span>✓ Edificações multifamiliares</span>

    <span>✓ Empreendimentos comerciais</span>

    <span>✓ Atendimento remoto em todo o Brasil</span>
  </div>
</div>
{/* CTA FINAL */}

<section
  style={{
    maxWidth: "1200px",
    margin: "140px auto",
    padding: "0 10px",
  }}
>
  <div
    style={{
      background: "#111821",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "28px",
      padding: "60px 24px",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "clamp(32px, 8vw, 52px)",
        fontWeight: "700",
        marginBottom: "24px",
        lineHeight: "1.15",
      }}
    >
      Vamos conversar sobre seu projeto?
    </h2>

    <p
      style={{
        color: "#9CA3AF",
        fontSize: "clamp(16px, 4vw, 20px)",
        lineHeight: "1.8",
        maxWidth: "850px",
        margin: "0 auto 50px",
      }}
    >
      Projetos elétricos, hidrossanitários e compatibilização BIM
      desenvolvidos para reduzir interferências, integrar disciplinas e
      proporcionar maior previsibilidade durante a execução da obra.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginBottom: "40px",
      }}
    >
      <a
        href="https://wa.me/5519983577250"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#00A8E8",
          color: "#FFFFFF",
          padding: "18px 38px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "18px",
          boxShadow: "0 0 25px rgba(0,168,232,0.25)",
          transition: "0.3s",
        }}
      >
        Falar no WhatsApp
      </a>

      <a
        href="mailto:contato@fhmengenharia.com.br"
        style={{
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#F5F6F7",
          padding: "18px 38px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        Enviar e-mail
      </a>
    </div>

    <div
      style={{
        color: "#9CA3AF",
        fontSize: "16px",
        lineHeight: "1.8",
      }}
    >
      contato@fhmengenharia.com.br
      <br />
      Atendimento remoto para todo o Brasil
    </div>
  </div>
</section>
</section>
{/* RODAPÉ */}

<footer
  style={{
    borderTop: "1px solid rgba(255,255,255,0.08)",
    marginTop: "120px",
    padding: "60px 40px",
  }}
>
  <div
  className={styles.footerContent}
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "40px",
  }}
>
    {/* INFORMAÇÕES */}

    <div>
      <h3
        style={{
          fontSize: "28px",
          marginBottom: "12px",
          fontWeight: "700",
        }}
      >
        FHM Engenharia
      </h3>

      <div
        style={{
          color: "#9CA3AF",
          lineHeight: "1.9",
          fontSize: "15px",
        }}
      >
        Projetos Complementares BIM
        <br />
        CREA-SP 5070410698
      </div>
    </div>

    {/* CONTATOS */}

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        textAlign: "right",
      }}
    >
      <a
        href="https://instagram.com/fhmengenhariabim"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#F5F6F7",
          textDecoration: "none",
        }}
      >
        Instagram
      </a>

      <a
        href="https://wa.me/5519983577250"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#F5F6F7",
          textDecoration: "none",
        }}
      >
        WhatsApp
      </a>

      <a
        href="mailto:contato@fhmengenharia.com.br"
        style={{
          color: "#F5F6F7",
          textDecoration: "none",
        }}
      >
        contato@fhmengenharia.com.br
      </a>
    </div>
  </div>

  {/* COPYRIGHT */}

  <div
    style={{
      textAlign: "center",
      marginTop: "50px",
      color: "#6B7280",
      fontSize: "14px",
    }}
  >
    © 2026 FHM Engenharia. Todos os direitos reservados.
  </div>
</footer>
</main>
);
}