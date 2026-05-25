export const metadata = {
  title:
    "Santa Casa de Misericórdia de Marília | Compatibilização BIM | FHM Engenharia",
  description:
    "Projeto elétrico, projeto hidrossanitário e compatibilização BIM desenvolvidos pela FHM Engenharia para a Santa Casa de Misericórdia de Marília.",
};

export default function SantaCasaPage() {
  return (
    <main
      style={{
        background: "#0D1116",
        color: "#F5F6F7",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 40px 80px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "10px 18px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "999px",
            marginBottom: "24px",
          }}
        >
          Case de Engenharia
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
          Projeto Elétrico • Projeto Hidrossanitário • Compatibilização BIM
        </div>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1.05",
            fontWeight: "700",
            letterSpacing: "-2px",
            maxWidth: "900px",
            marginBottom: "30px",
          }}
        >
          Santa Casa de Misericórdia de Marília
        </h1>

        <p
          style={{
            color: "#A8B3C7",
            fontSize: "20px",
            lineHeight: "1.9",
            maxWidth: "850px",
            marginBottom: "50px",
          }}
        >
          Desenvolvimento integrado dos projetos elétricos,
          hidrossanitários e compatibilização BIM para uma edificação
          hospitalar com elevada concentração de instalações e necessidade
          de coordenação multidisciplinar.
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
              color: "#FFFFFF",
              padding: "18px 42px",
              borderRadius: "14px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "600",
              boxShadow: "0 10px 30px rgba(0,168,232,0.25)",
            }}
          >
            Solicitar orçamento
          </a>

          <a
            href="mailto:contato@fhmengenharia.com.br"
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
            Enviar e-mail
          </a>
        </div>
      </section>

      {/* MÉTRICAS */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 120px",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            background: "#111821",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "50px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              textAlign: "center",
            }}
          >
            {[
              ["1.894", "m²"],
              ["Projeto", "Executivo"],
              ["3", "Disciplinas"],
              ["100%", "BIM"],
            ].map(([value, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "52px",
                    fontWeight: "700",
                    color: "#00A8E8",
                  }}
                >
                  {value}
                </div>

                <div
                  style={{
                    color: "#A8B3C7",
                    marginTop: "10px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 120px",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            height: "520px",
            background: "#111821",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9CA3AF",
            fontSize: "20px",
          }}
        >
          Imagem principal do projeto
        </div>
      </section>

      {/* RESUMO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 120px",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "40px",
          }}
        >
          Resumo executivo
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px",
          }}
        >
          {[
            ["Cliente", "Santa Casa de Misericórdia"],
            ["Segmento", "Hospitalar"],
            ["Área", "1.894 m²"],
            ["Software", "QiBuilder"],
            ["Escopo", "Elétrico + Hidrossanitário + BIM"],
            ["Fase", "Projeto Executivo"],
          ].map(([title, value]) => (
            <div
              key={title}
              style={{
                background: "#111821",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div
                style={{
                  color: "#00A8E8",
                  marginBottom: "10px",
                }}
              >
                {title}
              </div>

              <div>{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DESAFIO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 120px",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "30px",
          }}
        >
          Desafio técnico
        </h2>

        <div
          style={{
            background: "#111821",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "50px",
          }}
        >
          <p
            style={{
              color: "#A8B3C7",
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            A elevada concentração de instalações exigiu coordenação precisa
            entre sistemas elétricos e hidrossanitários, com atenção especial
            à organização de prumadas, distribuição das redes e
            compatibilização com a arquitetura e estrutura da edificação.
          </p>
        </div>
      </section>

      {/* SOLUÇÃO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 120px",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "40px",
          }}
        >
          Solução desenvolvida
        </h2>

        <p
          style={{
            color: "#A8B3C7",
            fontSize: "18px",
            lineHeight: "2",
          }}
        >
          Desenvolvimento integrado dos projetos em ambiente BIM,
          permitindo a identificação antecipada de interferências,
          otimização dos percursos das instalações e organização dos
          espaços técnicos, resultando em maior previsibilidade e
          eficiência durante a execução da obra.
        </p>
      </section>

      {/* ESCOPO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 120px",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "40px",
          }}
        >
          Principais atividades
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px",
          }}
        >
          {[
            "Modelagem BIM das instalações",
            "Compatibilização entre disciplinas",
            "Organização de shafts e prumadas",
            "Verificação de interferências",
            "Coordenação técnica dos sistemas",
            "Documentação executiva",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#111821",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 120px",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "40px",
          }}
        >
          Galeria técnica
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              style={{
                height: "260px",
                background: "#111821",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9CA3AF",
              }}
            >
              Imagem {item}
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 120px",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "40px",
          }}
        >
          Resultado obtido
        </h2>

        <div
          style={{
            background: "#111821",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "50px",
          }}
        >
          <p
            style={{
              color: "#A8B3C7",
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            A utilização do fluxo BIM permitiu maior integração entre
            disciplinas, redução de conflitos em obra e melhoria da
            qualidade da documentação executiva, proporcionando uma
            execução mais organizada e previsível.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 140px",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            background: "#111821",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "80px 60px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "52px",
              marginBottom: "24px",
            }}
          >
            Precisa desenvolver projetos com o mesmo padrão técnico?
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "20px",
              lineHeight: "1.9",
              maxWidth: "800px",
              margin: "0 auto 50px",
            }}
          >
            Entre em contato e solicite uma proposta para seu
            empreendimento.
          </p>

          <a
            href="https://wa.me/5519983577250"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#00A8E8",
              color: "#FFFFFF",
              padding: "18px 42px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "700",
              display: "inline-block",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}