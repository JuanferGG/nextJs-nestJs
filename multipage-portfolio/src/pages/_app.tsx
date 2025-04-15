import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/layout";
import Transition from "@/components/Transition";

import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={router.route} style={{ height: '100%' }}>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
