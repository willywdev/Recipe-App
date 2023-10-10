import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import fetcher from "@/lib/fetcher";
import Divider from "@/primitives/Divider";
import Spinner from "@/primitives/Spinner";
import useSWR, { SWRConfig } from "swr";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const {
    data: recipes,
    isLoading,
    error,
  } = useSWR("http://localhost:3000/api", fetcher);

  if (isLoading || error) {
    return (
      <>
        <SWRConfig value={{ fetcher }}>
          <GlobalStyle />
          <Header />
          <Hero />
          <Divider />
          <Spinner />
        </SWRConfig>
      </>
    );
  }

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} recipes={recipes} />
        <Footer />
      </SWRConfig>
    </>
  );
}
