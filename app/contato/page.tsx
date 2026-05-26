import Header from "@/components/Header";
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
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 20px 80px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "10px 24px",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            color: "#F5F6F7",
            marginBottom: "24px",
          }}
        >
          Entre em contato
        </span>

        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Vamos conversar
          <br />
          sobre seu projeto
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#A8B3C7",
            fontSize: "clamp(18px, 2vw, 22px)",
            lineHeight: 1.8,
          }}
        >
          Solicite um orçamento para projetos elétricos,
          hidrossanitários e compatibilização BIM.
          Retornamos com rapidez para entender as necessidades
          do seu empreendimento.
        </p>
      </section>

      {/* FORMULÁRIO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 120px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "#111821",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "50px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
          }}
        >
          {/* ESQUERDA */}

          <div>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "20px",
              }}
            >
              Solicite seu orçamento
            </h2>

            <p
              style={{
                color: "#A8B3C7",
                lineHeight: "1.9",
                marginBottom: "40px",
              }}
            >
              Envie as informações do seu projeto e entraremos
              em contato para analisar a demanda e apresentar a
              melhor solução técnica.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                color: "#A8B3C7",
              }}
            >
              <div>
                <strong style={{ color: "#F5F6F7" }}>
                  WhatsApp
                </strong>
                <br />
                (19) 98357-7250
              </div>

              <div>
                <strong style={{ color: "#F5F6F7" }}>
                  E-mail
                </strong>
                <br />
                contato@fhmengenharia.com
              </div>

              <div>
                <strong style={{ color: "#F5F6F7" }}>
                  Atendimento
                </strong>
                <br />
                Todo o Brasil
              </div>
            </div>
          </div>

          {/* DIREITA */}

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <input
              type="text"
              placeholder="Nome"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="E-mail"
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Telefone"
              style={inputStyle}
            />

            <select
              style={inputStyle}
              defaultValue=""
            >
              <option value="" disabled>
                Tipo de serviço
              </option>

              <option>
                Projeto Elétrico
              </option>

              <option>
                Projeto Hidrossanitário
              </option>

              <option>
                Compatibilização BIM
              </option>

              <option>
                Coordenação de Projetos
              </option>
            </select>

            <textarea
              placeholder="Descreva seu projeto"
              rows={6}
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#00A8E8",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "12px",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                marginTop: "10px",
                boxShadow:
                  "0 0 25px rgba(0,168,232,0.25)",
              }}
            >
              Enviar solicitação
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  background: "#0B111A",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  color: "#F5F6F7",
  fontSize: "16px",
  outline: "none",
} as const;