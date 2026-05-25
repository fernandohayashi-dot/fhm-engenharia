import {
  FileDown,
  Building2,
  Workflow,
  ShieldCheck,
  PackageCheck,
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
        <img
          src="/logo.png"
          alt="FHM Engenharia"
          style={{
            height: "65px",
            display: "block",
          }}
        />

        <nav
          style={{
            display: "flex",
            gap: "32px",
            fontSize: "17px",
            fontWeight: "500",
          }}
        >
          <a
            href="#"
            style={{
              color: "#F5F6F7",
              textDecoration: "none",
            }}
          >
            Home
          </a>

          <a
            href="#"
            style={{
              color: "#F5F6F7",
              textDecoration: "none",
            }}
          >
            Serviços
          </a>

          <a
            href="#"
            style={{
              color: "#F5F6F7",
              textDecoration: "none",
            }}
          >
            Portfólio
          </a>

          <a
            href="#"
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
          padding: "90px 40px 60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
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

            <h1
              style={{
                fontSize: "72px",
                lineHeight: "1.05",
                fontWeight: "700",
                letterSpacing: "-2px",
                marginBottom: "30px",
              }}
            >
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
    href="https://wa.me/5516999999999"
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

  <a
    href="#projetos"
    style={{
      border: "1px solid rgba(255,255,255,0.15)",
      color: "#F5F6F7",
      padding: "18px 42px",
      borderRadius: "14px",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "600",
    }}
  >
    Conhecer projetos
  </a>
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
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            color: "#A8B3C7",
            fontSize: "18px",
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
          maxWidth: "1200px",
          margin: "80px auto",
          background: "#111821",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "50px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            textAlign: "center",
          }}
        >
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

          <div
            style={{
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              borderRight: "1px solid rgba(255,255,255,0.08)",
            }}
          >
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
              Projetos desenvolvidos em BIM
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}

      <section
        id="projetos"
        style={{
          maxWidth: "1200px",
          margin: "0 auto 100px",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "40px",
          }}
        >
          Projetos em destaque
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "#111821",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
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

            <div style={{ padding: "24px" }}>
              <h3>Residência Alto Padrão</h3>
            </div>
          </div>

          <div
            style={{
              background: "#111821",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src="/projeto2.png"
              alt="Santa casa de Misericórdia"
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3>Santa casa de Misericórdia</h3>
            </div>
          </div>

          <div
            style={{
              background: "#111821",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
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

            <div style={{ padding: "24px" }}>
              <h3>Galpão Comercial</h3>
            </div>
          </div>
        </div>
        {/* COMO FUNCIONA */}
        

<section
style={{
  maxWidth: "1400px",
  margin: "120px auto 120px",
  padding: "0 40px",
}}
>
  <h2
    style={{
      fontSize: "48px",
      fontWeight: "700",
      marginBottom: "16px",
    }}
  >
    Como funciona
  </h2>

  <p
    style={{
      color: "#9CA3AF",
      fontSize: "18px",
      maxWidth: "700px",
      lineHeight: "1.7",
      marginBottom: "60px",
    }}
  >
    Processo estruturado para garantir compatibilidade entre disciplinas,
    previsibilidade na execução e documentação técnica completa.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "24px",
    }}
  >
    {/* ETAPA 1 */}

    <div
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "28px 20px",
        textAlign: "center",
      }}
    >
<div
  style={{
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "rgba(0,168,232,0.12)",
    color: "#00A8E8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  }}
>
  <FileDown size={26} />
</div>
      <h3
  style={{
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "600",
  }}
>
        Recebimento
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        Análise do projeto arquitetônico e definição dos requisitos técnicos.
      </p>
    </div>

    {/* ETAPA 2 */}

    <div
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "28px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          margin: "0 auto 20px",
          borderRadius: "50%",
          background: "rgba(0,168,232,0.12)",
          color: "#00A8E8",
          fontSize: "28px",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Building2 size={26} />
      </div>

      <h3
  style={{
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "600",
  }}
>
        Desenvolvimento BIM
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        Modelagem e elaboração dos sistemas elétricos e hidrossanitários.
      </p>
    </div>

    {/* ETAPA 3 */}

    <div
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "28px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          margin: "0 auto 20px",
          borderRadius: "50%",
          background: "rgba(0,168,232,0.12)",
          color: "#00A8E8",
          fontSize: "28px",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <Workflow size={26} />
      </div>

      <h3
  style={{
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "600",
  }}
>
        Compatibilização
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        Verificação de interferências entre arquitetura, estrutura e instalações.
      </p>
    </div>

    {/* ETAPA 4 */}

    <div
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "28px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          margin: "0 auto 20px",
          borderRadius: "50%",
          background: "rgba(0,168,232,0.12)",
          color: "#00A8E8",
          fontSize: "28px",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
    <ShieldCheck size={26} />
      </div>

      <h3
  style={{
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "600",
  }}
>
        Revisão Técnica
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        Conferência final dos modelos e documentação executiva.
      </p>
    </div>

    {/* ETAPA 5 */}

    <div
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "28px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          margin: "0 auto 20px",
          borderRadius: "50%",
          background: "rgba(0,168,232,0.12)",
          color: "#00A8E8",
          fontSize: "28px",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PackageCheck size={26} />
      </div>

      <h3
  style={{
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "600",
  }}
>
        Entrega Executiva
      </h3>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        Entrega dos projetos e modelos BIM prontos para execução da obra.
      </p>
    </div>
  </div>
</section>
      </section>
    </main>
  );
}