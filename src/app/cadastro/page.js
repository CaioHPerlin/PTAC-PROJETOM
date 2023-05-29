'use client';

import { useState } from 'react';
import styles from '../page.module.css';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const route = useRouter();
  const [nome, setNome] = useState();
  const [curso, setCurso] = useState();
  const [num_inscricao, setNum_inscricao] = useState();
  const [horas_comp, setHoras_comp] = useState();

  const cadastrar = (e) => {
    e.preventDefault();
    const aluno = {
      nome: nome,
      curso: curso,
      num_inscricao: num_inscricao,
      horas_comp: horas_comp
    };

    const alunoJson = JSON.stringify(aluno);

    fetch('http://localhost:3001/alunos', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: alunoJson,
    })
      .then(function () {
        route.push('/');
      })
      .catch(() => console.log('Não foi possível cadastrar!'));
  };
  return (
    <div className={styles.main}>
    <h1>Cadastrar</h1>
      <form action="" onSubmit={cadastrar}>
        <input
          placeholder="NOME DO ALUNO"
          nome="nome"
          type="text"
          onChange={(e) => setNome(e.target.value)}
          required={true}
        ></input>
        <br />

        <input
          placeholder="CURSO"
          nome="curso"
          type="text"
          onChange={(e) => setCurso(e.target.value)}
          required={true}
        ></input>
        <br />

        <input
          placeholder="Nº DE INSCRIÇÃO"
          nome="num_inscricao"
          type="number"
          onChange={(e) => setNum_inscricao(e.target.value)}
          required={true}
        ></input>
        <br />

        <input
          placeholder="HORAS DE ATIVIDADE COMPLEMENTAR"
          nome="horas_comp"
          type="number"
          onChange={(e) => setHoras_comp(e.target.value)}
          required={true}
        ></input>
        <br />

        <div className={styles.margin}>
            <button className={styles.button} type="submit">CADASTRAR</button>
            <a href="/"> Voltar </a>
        </div>
      </form>
    </div>
  );
}
