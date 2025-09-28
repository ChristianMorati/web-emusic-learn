import React from 'react';
import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <div>
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Curso Gratuito de Violão</h1>
            <p>Aprenda a tocar violão do zero, com aulas práticas e suporte completo!</p>
            <a href="#inscricao" className={styles.ctaButton}>
              Quero me inscrever gratuitamente
            </a>
          </div>
        </section>

        {/* Benefícios */}
        <section className={styles.benefits}>
          <h2>O que você vai aprender:</h2>
          <ul>
            <li>✅ Acordes básicos e progressões</li>
            <li>✅ Ritmos populares e técnicas essenciais</li>
            <li>✅ Toque suas primeiras músicas em poucas aulas</li>
          </ul>
        </section>

        {/* Seção de inscrição */}
        <section id="inscricao" className={styles.signup}>
          <h2>Inscreva-se agora</h2>
          <p>Basta clicar no botão abaixo para garantir sua vaga no curso gratuito!</p>
          <a href="/cadastro" className={styles.ctaButtonLarge}>
            Acessar o Curso Gratuito
          </a>
        </section>
      </main>
    </div>
  );
}
