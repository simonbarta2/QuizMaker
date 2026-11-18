import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('quizmaker_theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('quizmaker_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app-wrapper">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
      />

      <main className="container main-content">
        {currentPage === 'dashboard' && (
          <Dashboard onCreateNew={() => setCurrentPage('create')} />
        )}

      </main>
    </div>
  );
}