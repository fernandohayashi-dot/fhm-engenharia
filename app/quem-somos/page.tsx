import Link from "next/link";
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
          padding: "80px 40px 120px",
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
          Quem Somos
        </div>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1.1",
            maxWidth: "900px",
            marginBottom: "30px",
          }}
        >
          Engenharia orientada
          <br />
          à execução e à
          <br />
          previsibilidade da obra
        </h1>

        <p
          style={{
            color: "#B8C2D0",
            fontSize: "20px",
            lineHeight: "1.8",
            maxWidth: "850px",
          }}
        >
          A FHM Engenharia atua no desenvolvimento de projetos
          elétricos, hidrossanitários e compatibilização BIM,
          oferecendo soluções técnicas voltadas para reduzir
          interferências, aumentar a coordenação entre disciplinas e
          proporcionar maior segurança durante a execução da obra.
        </p>
      </section>

      {/* HISTÓRIA */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        <div
          style={{
            background: "#111821",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "24px",
            }}
          >
            Nossa história
          </h2>

          <p
            style={{
              color: "#A8B3C7",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            A FHM Engenharia nasceu com o objetivo de oferecer projetos
            complementares desenvolvidos com foco na compatibilização
            entre disciplinas e na realidade da execução em campo.

            <br />
            <br />

            Utilizando metodologia BIM e processos de coordenação
            multidisciplinar, buscamos entregar documentação técnica
            clara, organizada e capaz de reduzir retrabalhos,
            incompatibilidades e imprevistos durante a construção.

            <br />
            <br />

            Nosso compromisso é fornecer soluções técnicas confiáveis,
            contribuindo para obras mais eficientes, previsíveis e
            economicamente sustentáveis.
          </p>
        </div>
      </section>

      {/* DIFERENCIAIS */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "40px",
          }}
        >
          Diferenciais
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              titulo: "Modelagem BIM",
              texto:
                "Projetos desenvolvidos utilizando metodologia BIM para maior coordenação e controle das informações.",
            },
            {
              titulo: "Compatibilização Multidisciplinar",
              texto:
                "Integração entre arquitetura, estrutura e instalações para reduzir interferências antes da execução.",
            },
            {
              titulo: "Foco na Execução",
              texto:
                "Soluções pensadas para facilitar a obra, melhorar a comunicação e reduzir retrabalhos.",
            },
            {
              titulo: "Documentação Organizada",
              texto:
                "Pranchas, quantitativos e informações estruturadas para maior produtividade da equipe.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              style={{
                background: "#111821",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "22px",
                padding: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "16px",
                  color: "#00A8E8",
                }}
              >
                {item.titulo}
              </h3>

              <p
                style={{
                  color: "#A8B3C7",
                  lineHeight: "1.8",
                }}
              >
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 120px",
        }}
      >
        <div
          style={{
            background: "#111821",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "30px",
            }}
          >
            Áreas de atuação
          </h2>

          <ul
            style={{
              color: "#A8B3C7",
              lineHeight: "2.2",
              fontSize: "18px",
              paddingLeft: "20px",
            }}
          >
            <li>Projetos Elétricos</li>
            <li>Projetos Hidrossanitários</li>
            <li>Compatibilização BIM</li>
            <li>Coordenação Multidisciplinar</li>
            <li>Modelagem BIM para instalações</li>
            <li>Documentação executiva para obras</li>
          </ul>
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
            Vamos conversar
          </div>

          <h2
            style={{
              fontSize: "72px",
              lineHeight: "1.1",
              maxWidth: "900px",
              margin: "0 auto 24px",
            }}
          >
            Pronto para desenvolver seu próximo projeto?
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
            Entre em contato para solicitar uma proposta e conhecer
            como a metodologia BIM pode contribuir para maior
            previsibilidade, organização e eficiência na execução da
            sua obra.
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