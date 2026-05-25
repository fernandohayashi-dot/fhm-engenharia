import Link from "next/link";
import {
  Droplets,
  Workflow,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ProjetoHidrossanitarioPage() {
  const beneficios = [
    "Dimensionamento conforme normas técnicas",
    "Redução de interferências em obra",
    "Maior previsibilidade da execução",
    "Compatibilização com arquitetura e estrutura",
    "Documentação executiva organizada",
    "Facilidade de manutenção futura",
  ];

  const etapas = [
    {
      icon: <Droplets size={32} />,
      title: "Dimensionamento",
      text: "Dimensionamento completo das redes de água fria, água quente, esgoto sanitário, ventilação e águas pluviais conforme normas técnicas.",
    },
    {
  icon: <Workflow size={32} />,
  title: "Modelagem BIM",
  text: "Modelagem coordenada das instalações para identificação antecipada de interferências e melhor integração entre disciplinas.",
},
    {
      icon: <ClipboardCheck size={32} />,
      title: "Documentação Executiva",
      text: "Pranchas, detalhes construtivos e documentação técnica organizada para apoio à execução da obra.",
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
      {/* HERO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
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
            Projeto Hidrossanitário
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.05",
              marginBottom: "32px",
              fontWeight: 700,
            }}
          >
            Projetos hidrossanitários desenvolvidos para garantir eficiência e previsibilidade
          </h1>

          <p
            style={{
              color: "#A8B3C7",
              fontSize: "22px",
              lineHeight: "1.8",
              maxWidth: "720px",
              marginBottom: "40px",
            }}
          >
            Desenvolvemos projetos executivos de água fria, água quente,
            esgoto sanitário, ventilação e águas pluviais em ambiente BIM
            para residências, edifícios comerciais e empreendimentos
            institucionais.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/5514998872510"
              target="_blank"
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
            src="/residenciahid.png"
            alt="Projeto Hidrossanitário"
            style={{
              width: "100%",
              height: "520px",
              objectFit: "cover",
              display: "block",
            }}
          />
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
            padding: "32px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <div>✓ Água fria e água quente</div>
          <div>✓ Esgoto sanitário</div>
          <div>✓ Águas pluviais</div>
          <div>✓ Compatibilização BIM</div>
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
            fontSize: "56px",
            marginBottom: "32px",
          }}
        >
          O impacto de instalações mal planejadas
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
          Dimensionamentos incorretos, interferências com elementos
          estruturais e ausência de coordenação entre disciplinas podem gerar
          retrabalho, atrasos e custos adicionais durante a execução.
        </p>

        <p
          style={{
            color: "#A8B3C7",
            fontSize: "20px",
            lineHeight: "2",
            maxWidth: "1000px",
          }}
        >
          Um projeto hidrossanitário bem desenvolvido reduz riscos de obra,
          facilita a manutenção futura e proporciona maior confiabilidade para
          construtores, arquitetos e proprietários.
        </p>
      </section>

      {/* COMO FUNCIONA */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "120px auto",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            marginBottom: "60px",
          }}
        >
          Como desenvolvemos os projetos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
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
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#A8B3C7",
                  lineHeight: "1.9",
                  fontSize: "17px",
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
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            marginBottom: "50px",
          }}
        >
          Benefícios para a obra
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
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
              }}
            >
              <CheckCircle2 size={20} color="#00A8E8" />
              {item}
            </div>
          ))}
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
            padding: "80px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "54px",
              marginBottom: "24px",
            }}
          >
            Precisa de um projeto hidrossanitário?
          </h2>

          <p
            style={{
              color: "#A8B3C7",
              maxWidth: "800px",
              margin: "0 auto 40px",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            Desenvolvemos projetos completos em ambiente BIM para garantir
            funcionalidade, compatibilidade entre disciplinas e documentação
            técnica organizada para a execução da obra.
          </p>

          <a
            href="https://wa.me/5514998872510"
            target="_blank"
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