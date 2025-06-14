import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! Welcome to City Hospital. What is your name?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState('askName');
  const [formData, setFormData] = useState({ name: '', age: '', symptoms: '' });
  const [appointments, setAppointments] = useState([]);

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { id: prev.length + 1, text, sender }]);
  };

  const calculateExpectedTime = () => {
    const now = new Date();
    const todayAppointments = appointments.filter(app => {
      const date = new Date(app.timestamp);
      return date.toDateString() === now.toDateString();
    });

    const minutesToAdd = todayAppointments.length * 15;
    const expectedTime = new Date(now.getTime() + minutesToAdd * 60000);
    return { expectedTime, count: todayAppointments.length };
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');

    if (step === 'askName') {
      setFormData({ ...formData, name: inputValue });
      addMessage(`Nice to meet you, ${inputValue}! How old are you?`, 'bot');
      setStep('askAge');
    } else if (step === 'askAge') {
      const age = parseInt(inputValue);
      if (isNaN(age) || age <= 0 || age > 120) {
        addMessage('Please enter a valid age.', 'bot');
      } else {
        setFormData({ ...formData, age });
        addMessage('What symptoms are you experiencing?', 'bot');
        setStep('askSymptoms');
      }
    } else if (step === 'askSymptoms') {
      const updatedData = { ...formData, symptoms: inputValue };
      const { expectedTime, count } = calculateExpectedTime();

      const newAppointment = {
        ...updatedData,
        timestamp: new Date()
      };

      setAppointments(prev => [...prev, newAppointment]);

      addMessage(
        `Thank you, ${updatedData.name}. Your appointment has been scheduled for approximately ` +
        `${expectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}. ` +
        `There are ${count} patients ahead of you.`,
        'bot'
      );

      setFormData({ name: '', age: '', symptoms: '' });
      setStep('done');
    } else if (step === 'done') {
      addMessage("You've already submitted your info. Refresh to start over.", 'bot');
    }

    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.header}>Hospital Chatbot</h2>
      <div style={styles.messages}>
        {messages.map(msg => (
          <div key={msg.id} style={{
            ...styles.message,
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#007bff' : '#e9ecef',
            color: msg.sender === 'user' ? '#fff' : '#000'
          }}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          style={styles.input}
          placeholder="Type a message..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button style={styles.button} onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
    maxWidth: 500,
    margin: '40px auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 8,
    fontFamily: 'Arial',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    marginBottom: 10,
    textAlign: 'center'
  },
  messages: {
    flexGrow: 1,
    maxHeight: '300px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginBottom: 10
  },
  message: {
    padding: 10,
    borderRadius: 12,
    maxWidth: '80%'
  },
  inputArea: {
    display: 'flex',
    gap: 10
  },
  input: {
    flexGrow: 1,
    padding: 8,
    borderRadius: 4,
    border: '1px solid #ccc'
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    borderRadius: 4,
    cursor: 'pointer'
  }
};

export default Chatbot;
