// JavaScript code for chat messenger functionality

// Select necessary elements
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const userElements = document.querySelectorAll('#users li');
const messageInput = document.getElementById('msg');

// Function to add a message to the chat
function addMessage(sender, text) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
        <p class="meta">${sender} <span>${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></p>
        <p class="text">
            ${text}
        </p>
    `;
    chatMessages.appendChild(div);
    autoScroll();
}

// Function to auto-scroll to the latest message
function autoScroll() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for sending a message
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    if (message.trim()) {
        addMessage('You', message);
        messageInput.value = '';
        autoReply(message);
    }
    messageInput.focus();
});

// Function to handle auto-reply
function autoReply(message) {
    const replies = [
        "I'm not sure I understand.",
        "Can you explain that further?",
        "That's interesting!",
        "Sounds good to me!",
        "Let's discuss more about that.",
        "I'll get back to you on that."
    ];
    setTimeout(() => {
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        addMessage('Bot', randomReply);
    }, 1000);
}

// Event listeners for user selection
userElements.forEach(userElement => {
    userElement.addEventListener('click', () => {
        // Remove highlight from all users
        userElements.forEach(el => el.classList.remove('active'));
        // Highlight the selected user
        userElement.classList.add('active');
    });
});
