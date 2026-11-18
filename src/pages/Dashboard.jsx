import React from 'react';
import { PlusCircle, LayoutGrid } from 'lucide-react';

export default function Dashboard({ onCreateNew }) {
  return (
    <div className="page-fade">
      {/* Uvítací sekce */}
      <section className="hero-banner">
        <div>
          <h1>Vytvoř si vlastní kvíz</h1>
          <p>
            Vytvářej přehledné kvízy během chvilky, procvičuj znalosti a sleduj své výsledky.
          </p>
        </div>
        <button className="btn btn-primary btn-lg" onClick={onCreateNew}>
          <PlusCircle size={20} />
          <span>Vytvořit nový kvíz</span>
        </button>
      </section>

      {/* Připravená sekce pro karty kvízů (bude napojena ve 2. sprintu) */}
      <section className="quizzes-section">
        <div className="section-header">
          <h2>Dostupné kvízy</h2>
        </div>

        <div className="card empty-state">
          <LayoutGrid size={44} className="empty-icon" />
          <h3>Zatím zde nejsou žádné kvízy</h3>
          <p>
            
          </p>
          <button className="btn btn-primary" onClick={onCreateNew}>
            <PlusCircle size={18} />
            <span>Přejít na návrh formuláře</span>
          </button>
        </div>
      </section>
    </div>
  );
}