import styles from "src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p
          style={{ fontWeight: "300", fontFamily: "Hiragino Kaku Gothic Pro" }}
        >
          フォントはGoogleフォントから選んでいます。
          ダウンロードしてご利用ください。
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
