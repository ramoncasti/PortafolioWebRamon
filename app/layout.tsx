import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Portafolio | Ramón López",
  description: "Portafolio personal de Ramón López",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head></head>
      <body>
        {children}
        <Footer />

        {/* Bootstrap JS debe ir aquí */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
