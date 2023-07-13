import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

type LayoutProps = {
  bgImage?: string;
  children: React.ReactNode;
  bgAttachment?: string;
  useEffects?: boolean;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main relative bg-base">
      <Head>
        <title>{`Stefan Catalin`}</title>
      </Head>
      <Header />
      <div className="layout-content relative min-h-screen">
        <div className="relative min-h-[60vh]">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
