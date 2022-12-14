import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
