import Image from "next/image";
import styles from "./page.module.css";
import Banner from '@/components/Banner'
import CardPanel from "@/components/CardPanel";

export default function Home() {
  return (
    <main style={{backgroundColor:"white"}}>
      <Banner/>
    </main>
  );
}
