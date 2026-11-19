import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = { title: "Central · @brunorib3" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app">
          <Nav />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
