import { StylesProvider } from "@material-ui/core";
import Link from "next/link";
import styles from "../styles/Success.module.css";
import Layout from "../components/Layout";

const Success = () => {
  return (
    <Layout title="ご連絡ありがとうございます。">
      <div className={styles.container}>
        <h3>ご連絡ありがとうございました。</h3>
        <Link href="/">
          <p>ホームに戻る</p>
        </Link>
      </div>
    </Layout>
  );
};

export default Success;
