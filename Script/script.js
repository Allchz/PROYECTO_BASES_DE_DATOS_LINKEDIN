/* Mensajes  */

const chats = {
  'Ana': [
    { sender: 'Ana', text: 'Hola, ¿cómo estás?' },
    { sender: 'Tú', text: 'Bien, gracias. ¿Y tú?' }
  ],
  'Carlos': [
    { sender: 'Carlos', text: '¿Listo para la reunión?' },
    { sender: 'Tú', text: 'Sí, en 5 minutos me conecto.' }
  ]
};

let currentContact = null;

function loadMessages(name) {
  currentContact = name;
  document.getElementById('message-title').innerHTML = `<h6 class="m-0">${name}</h6>`;
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML = '';

  chats[name].forEach(msg => {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'mb-2';
    msgDiv.innerHTML = `<strong>${msg.sender}:</strong> ${msg.text}`;
    chatBox.appendChild(msgDiv);
  });
}

function sendMessage() {
  const input = document.getElementById('messageInput');
  const text = input.value.trim();
  if (!text || !currentContact) return;

  // Agregar al array
  chats[currentContact].push({ sender: 'Tú', text });

  // Mostrar en pantalla
  const chatBox = document.getElementById('chat-box');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'mb-2';
  msgDiv.innerHTML = `<strong>Tú:</strong> ${text}`;
  chatBox.appendChild(msgDiv);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* Notificaciones */

function markAllAsRead() {
  const items = document.querySelectorAll('#notificationList .unread');
  items.forEach(item => {
    item.classList.remove('unread');
  });
}

