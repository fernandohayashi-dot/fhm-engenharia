"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  active?: "home" | "servicos" | "cases" | "quem-somos" | "contato";
}

export default function Header({ active }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);
  const getColor = (page: string) =>
    active === page ? "#00A8E8" : "#F5F6F7";

  const getWeight = (page: string) =>
    active === page ? 700 : 500;

  return (
  <>
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "sticky",
        top: 0,
        background: "rgba(13,17,22,0.95)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      <Link href="/">
        <img
          src="/logo.png"
          alt="FHM Engenharia"
          style={{
            height: "50px",
            display: "block",
          }}
        />
      </Link>

      <button
        onClick={() => setMenuOpen(true)}
        style={{
          background: "transparent",
          border: "none",
          color: "#F5F6F7",
          cursor: "pointer",
        }}
      >
        <Menu size={32} />
      </button>
    </header>

    {menuOpen && (
      <>
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 1000,
          }}
        />

        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "300px",
            height: "100vh",
            background: "#111821",
            padding: "30px",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              alignSelf: "flex-end",
              background: "transparent",
              border: "none",
              color: "#F5F6F7",
              cursor: "pointer",
              marginBottom: "40px",
            }}
          >
            <X size={30} />
          </button>

          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              fontSize: "22px",
            }}
          >
            <Link href="/">Home</Link>

            <Link href="/servicos">Serviços</Link>

            <Link href="/cases">Portfólio</Link>

            <Link href="/quem-somos">Quem Somos</Link>

            <Link href="/contato">Contato</Link>
          </nav>

          <a
            href="https://wa.me/5519983577250"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "40px",
              textAlign: "center",
              background: "#00A8E8",
              color: "#fff",
              padding: "16px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Solicitar orçamento
          </a>
        </div>
      </>
    )}
  </>
);
}