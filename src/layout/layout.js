import Footer from "@/components/Footer";
import Header from "@/components/Header";

 export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}