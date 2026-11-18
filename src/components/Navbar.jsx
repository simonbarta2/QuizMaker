import React from 'react';
import { HelpCircle, PlusCircle, Home, Moon, Sun } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate, darkMode, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <button className="logo-btn" onClick={() => onNavigate('dashboard')}>
          <div className="logo-icon">
            <HelpCircle size={22} />
          </div>
          <span>QuizMaker</span>
        </button>

        <nav className="nav-actions">
          <button
            className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('dashboard')}
          >
            <Home size={18} />
            <span>Domů</span>
          </button>

          <button
            className="btn btn-primary"
            onClick={() => onNavigate('create')}
          >
            <PlusCircle size={18} />
            <span>Nový kvíz</span>
          </button>

          <button
            type="button"
            className="nav-link"
            onClick={onToggleTheme}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}