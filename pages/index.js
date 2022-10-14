import styles from "../styles/Home.module.css";
import { RhButton } from "@rhythm-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <RhButton variant="primary">Hello</RhButton>
      <div className="h-20 text-3xl text-green-500 rounded-md lg:text-red-700 md:text-blue-500">
        Test v1 text-green-500 rounded-md lg:text-red-700 md:text-blue-500
      </div>
    </div>
  );
}
