// 轮播图功能
const carousel = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.carousel-container img');

let currentIndex = 0;

function showImage(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// 自动轮播
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 5000);

// 聊天功能
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function addMessage(message, isUser = true) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isUser ? 'user-message' : 'ai-message');
    messageElement.textContent = message;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

async function getAIResponse(message) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        const data = await response.json();
        return data.reply;
    } catch (error) {
        console.error('Error:', error);
        return '抱歉，我遇到了一些问题。请稍后再试。';
    }
}

async function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message);
        userInput.value = '';
        
        // 显示正在输入的提示
        const typingIndicator = document.createElement('div');
        typingIndicator.textContent = 'AI 正在输入...';
        typingIndicator.classList.add('typing-indicator');
        chatHistory.appendChild(typingIndicator);
        
        // 获取AI回复
        const aiResponse = await getAIResponse(message);
        chatHistory.removeChild(typingIndicator);
        addMessage(aiResponse, false);
    }
}

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});
