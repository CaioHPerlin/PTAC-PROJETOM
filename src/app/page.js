import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3001/alunos", {
    next: { revalidate: 1 },
  });
  const data = await req.json();

  return (
    <main className={styles.main}>
      <h1>Alunos</h1>
      <div className={styles.grid}>
        {data.map(el => 
          <div className={styles.card} key={el.id}>
            <h2>{el.nome} #{el.num_inscricao}</h2>
            <span>{el.horas_comp} Horas de AC</span>
            <p>{el.curso}</p>
          </div>
        )}
      </div>
      <Link className={styles.button} href="/cadastro">Cadastro</Link>
    </main>
  )
}
