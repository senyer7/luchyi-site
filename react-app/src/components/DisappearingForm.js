import React, { useState, useEffect } from 'react';
import './DisappearingForm.css';

function DisappearingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [inputOpacity, setInputOpacity] = useState(1);
  const [shakeInput, setShakeInput] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setInputOpacity(Math.random() > 0.3 ? 1 : 0.3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPassword(!showPassword);
    }, 2000);

    return () => clearInterval(interval);
  }, [showPassword]);

  const handleNameChange = (e) => {
    const value = e.target.value;
    // Случайно меняем направление текста
    if (Math.random() > 0.7) {
      setName(value.split('').reverse().join(''));
    } else {
      setName(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setShakeInput('email');
    setTimeout(() => setShakeInput(''), 300);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Заполните все поля! (Если сможете 😈)');
      return;
    }

    const responses = [
      'Ошибка 404: Форма не найдена',
      'Сервер недоступен (его нет)',
      'Данные успешно удалены!',
      'Пароль слишком слабый (как и ваше терпение)',
      'Email уже используется вашим будущим я',
      'Регистрация завершена! (Шутка)',
      'Ошибка: Успех',
    ];

    alert(responses[Math.floor(Math.random() * responses.length)]);

    // Очищаем форму случайным образом
    if (Math.random() > 0.5) {
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form className="disappearing-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Имя (текст может перевернуться):</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="form-input reverse-random"
          style={{ opacity: inputOpacity }}
          placeholder="Введите имя"
        />
      </div>

      <div className="form-group">
        <label>Email (поле может трястись):</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={`form-input ${shakeInput === 'email' ? 'shake' : ''}`}
          style={{ opacity: inputOpacity }}
          placeholder="email@example.com"
        />
      </div>

      <div className="form-group">
        <label>Пароль (показывается случайно):</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          className="form-input"
          style={{ opacity: inputOpacity }}
          placeholder="Введите пароль"
        />
        <span className="password-hint">
          {showPassword ? '👁️ Все видят твой пароль!' : '🙈 Пароль скрыт... пока'}
        </span>
      </div>

      <button type="submit" className="submit-button">
        ОТПРАВИТЬ (МОЖЕТ СРАБОТАТЬ)
      </button>

      <p className="form-note">
        * Форма может исчезать и поля могут вести себя странно. Это фича!
      </p>
    </form>
  );
}

export default DisappearingForm;
