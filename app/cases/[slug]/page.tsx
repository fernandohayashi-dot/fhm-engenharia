import { notFound } from "next/navigation";
import Link from "next/link";
import { cases } from "../../../data/cases";
import Header from "@/components/Header";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const project = cases.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | FHM Engenharia`,
    description: project.headline,
  };
}

export default async function CasePage({
  params,
}: Props) {
  const { slug } = await params;

  const project = cases.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main
    
      style={{
        background: "#0D1116",
        color: "#F5F6F7",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Header active="cases" />
      
      {/* HERO */}

<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "120px 40px 80px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
  "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "60px",
      alignItems: "center",
    }}
  >
    {/* TEXTO */}

    <div>
      <div
        style={{
          color: "#00A8E8",
          marginBottom: "18px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {project.category}
      </div>

      <h1
        style={{
          fontSize: "clamp(36px, 6vw, 64px)",
lineHeight: "1.1",
          marginBottom: "24px",
        }}
      >
        {project.title}
      </h1>

      <p
        style={{
          color: "#A8B3C7",
          fontSize: "clamp(16px, 2vw, 20px)",
          lineHeight: "1.8",
          marginBottom: "32px",
        }}
      >
        {project.headline}
      </p>

      <a
        href="https://wa.me/5519983577250"
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

    {/* IMAGEM */}

    <div
      style={{
        background: "#111821",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <img
  src={project.coverImage}
  alt={project.title}
  style={{
    width: "100%",
    height: "auto",
maxHeight: "500px",
    objectFit: "cover",
    display: "block",
  }}
/>
    </div>
  </div>
</section>
{/* DADOS DO PROJETO */}

<section
  style={{
    maxWidth: "1200px",
    margin: "0 auto 100px",
    padding: "0 40px",
  }}
>
  <div
    style={{
      background: "#111821",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "24px",
      padding: "40px",
      display: "grid",
      gridTemplateColumns:
  "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "30px",
      textAlign: "center",
    }}
  >
    <div>
      <div
        style={{
          color: "#00A8E8",
          fontSize: "14px",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Área
      </div>

      <div
        style={{
          fontSize: "clamp(24px, 4vw, 32px)",
          fontWeight: "700",
        }}
      >
        {project.area}
      </div>
    </div>

    <div>
      <div
        style={{
          color: "#00A8E8",
          fontSize: "14px",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Localização
      </div>

      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        {project.location}
      </div>
    </div>

    <div>
      <div
        style={{
          color: "#00A8E8",
          fontSize: "14px",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Etapa
      </div>

      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        {project.phase}
      </div>
    </div>

    <div>
      <div
        style={{
          color: "#00A8E8",
          fontSize: "14px",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Software
      </div>

      <div
        style={{
          fontSize: "clamp(24px, 4vw, 32px)",
          fontWeight: "600",
        }}
      >
        {project.software}
      </div>
    </div>
  </div>
</section>

      {/* DESAFIO */}

      <ContentSection
        title="Desafio Técnico"
        text={project.challenge}
      />

      {/* SOLUÇÃO */}

      <ContentSection
        title="Solução Desenvolvida"
        text={project.solution}
      />
      {/* GALERIA */}

<section
  style={{
    maxWidth: "1200px",
    margin: "100px auto",
    padding: "0 40px",
  }}
>
  <h2
    style={{
      fontSize: "clamp(24px, 4vw, 32px)",
      marginBottom: "40px",
    }}
  >
    Galeria do Projeto
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
  "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
    }}
  >
    <img
  src={project.gallery[0]}
  alt={project.title}
  style={{
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "20px",
  }}
/>

    <div
      style={{
        display: "grid",
        gap: "20px",
      }}
    >
      <img
  src={project.gallery[1]}
  alt={project.title}
  style={{
    width: "100%",
    height: "240px",
    objectFit: "cover",
    borderRadius: "20px",
  }}
/>

      <img
  src={project.gallery[2]}
  alt={project.title}
  style={{
    width: "100%",
    height: "240px",
    objectFit: "cover",
    borderRadius: "20px",
  }}
/>
    </div>
  </div>
</section>

      {/* ENTREGAS */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 100px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "40px",
          }}
        >
          Entregas
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {project.activities.map((activity) => (
            <div
              key={activity}
              style={{
                background: "#111821",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "24px",
              }}
            >
              ✓ {activity}
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADO */}

      <ContentSection
        title="Resultado"
        text={project.result}
      />

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

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        background: "#111821",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "28px",
      }}
    >
      <div
        style={{
          color: "#7A869A",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function ContentSection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 40px 100px",
      }}
    >
      <h2
        style={{
          fontSize: "56px",
          marginBottom: "30px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#A8B3C7",
          lineHeight: "2",
          fontSize: "20px",
          maxWidth: "1100px",
        }}
      >
        {text}
      </p>
    </section>
  );
}