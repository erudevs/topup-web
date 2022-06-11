import { useEffect } from "react";
import AOS from "aos";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Layout from "../components/organisms/Layout";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
    </Layout>
  );
}
