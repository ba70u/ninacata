
import React, { useState } from 'react';
import { Language } from '../types';

interface AdminLoginProps {
  onLogin: () => void;
  language: Language;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, language }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Correct credentials as specified by user
    if (username === 'admin' && password === '100100Hh@') {
      onLogin();
    } else {
      setError(t('اسم المستخدم أو كلمة المرور غير صحيحة', 'Identifiant ou mot de passe incorrect'));
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="size-16 bg-sand rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary">
            <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
          </div>
          <h1 className="text-2xl font-bold text-secondary">{t('لوحة التحكم', 'Espace Admin')}</h1>
          <p className="text-gray-500 text-sm mt-2">{t('يرجى تسجيل الدخول للمتابعة', 'Veuillez vous connecter pour continuer')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">{t('اسم المستخدم', 'Nom d\'utilisateur')}</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              className="w-full rounded-xl border-gray-200 focus:ring-primary focus:border-primary px-4 py-3"
              placeholder="admin"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">{t('كلمة المرور', 'Mot de passe')}</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full rounded-xl border-gray-200 focus:ring-primary focus:border-primary px-4 py-3"
              placeholder="••••••••"
              required
            />
            {error && <p className="mt-2 text-xs text-red-500 font-medium">{error}</p>}
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-secondary text-white rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-secondary/20"
          >
            {t('دخول', 'Se connecter')}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-gray-400">
          {t('الدخول المعتمد للمسؤولين فقط', 'Accès autorisé aux administrateurs uniquement')}
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
