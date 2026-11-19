"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  ["/", "Hoje"],
  ["/tarefas", "Tarefas"],
  ["/conteudo", "Conteúdo"],
  ["/docs", "Documentos"],
];

export default function Nav() {
  const atual = usePathname();
  return (
    <nav className="nav">
      <div className="marca">Central <span>@brunorib3</span></div>
      {LINKS.map(([href, nome]) => (
        <Link key={href} href={href} className={(href === "/" ? atual === "/" : atual.startsWith(href)) ? "on" : ""}>{nome}</Link>
      ))}
    </nav>
  );
}
