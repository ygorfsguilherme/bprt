import styles from './App.module.scss';
import Logo from 'assets/logo.svg';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <h1>Hello, W<img className={styles["App-logo"]} src={Logo} alt='Logo React' />rld!</h1>
        
      </header>
    </div>
  );
}

export default App;
