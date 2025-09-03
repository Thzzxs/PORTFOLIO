// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load theme preference from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.querySelector("i").classList.remove("fa-moon");
    themeToggle.querySelector("i").classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.querySelector("i").classList.remove("fa-moon");
        themeToggle.querySelector("i").classList.add("fa-sun");
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.querySelector("i").classList.remove("fa-sun");
        themeToggle.querySelector("i").classList.add("fa-moon");
    }
});

// Chatbot functionality
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotBox = document.getElementById("chatbot-box");
const chatbotClose = document.getElementById("chatbot-close");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

let messages = [
    { type: "bot", message: "👋 Olá! Seja bem-vindo ao meu portfólio." },
    { type: "bot", message: "📌 Aqui você pode conhecer meus projetos, habilidades e experiências." },
    { type: "bot", message: "💻 Já trabalhei com tecnologias como Python, Java, JavaScript, React, SQL e muito mais." },
    { type: "bot", message: "🚀 Me conta, você gostaria de saber mais sobre meus projetos, minhas habilidades ou como posso ajudar a sua empresa?" }
];

function renderMessages() {
    chatMessages.innerHTML = "";
    messages.forEach(msg => {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("chat-message", msg.type);
        msgDiv.textContent = msg.message;
        chatMessages.appendChild(msgDiv);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatbotToggle.addEventListener("click", () => {
    chatbotBox.classList.toggle("hidden");
    chatbotBox.classList.toggle("open");
    chatbotBox.classList.toggle("closed");
    renderMessages();
});

chatbotClose.addEventListener("click", () => {
    chatbotBox.classList.add("hidden");
    chatbotBox.classList.remove("open");
    chatbotBox.classList.add("closed");
});

chatSend.addEventListener("click", () => {
    sendMessage();
});

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        messages.push({ type: "user", message: userMessage });

        // Respostas automáticas personalizadas
        let botReply = "Obrigado pela sua mensagem! Em breve entrarei em contato. 😊";

        if (userMessage.toLowerCase().includes("projeto")) {
            botReply = "Meus projetos envolvem sistemas em Java, Python, automações e até sites com chat interativo. 🚀";
        } else if (userMessage.toLowerCase().includes("habilidade")) {
            botReply = "Tenho habilidades em programação (Java, Python, JS, React), análise de dados e desenvolvimento de sistemas completos. 💻";
        } else if (userMessage.toLowerCase().includes("empresa")) {
            botReply = "Posso ajudar sua empresa desenvolvendo soluções personalizadas, sistemas de currículos, dashboards e automações. 🤝";
        }

        messages.push({ type: "bot", message: botReply });
        chatInput.value = "";
        renderMessages();
    }
}

// Technologies Carousel
const techCarousel = document.getElementById("tech-carousel");
const technologies = [
    { name: 'Python', color: 'bg-yellow-500', icon: '🐍' },
    { name: 'JavaScript', color: 'bg-yellow-400', icon: '⚡' },
    { name: 'Java', color: 'bg-red-500', icon: '☕' },
    { name: 'HTML', color: 'bg-orange-500', icon: '🌐' },
    { name: 'CSS', color: 'bg-blue-500', icon: '🎨' },
    { name: 'React', color: 'bg-cyan-500', icon: '⚛️' },
    { name: 'Node.js', color: 'bg-green-500', icon: '🚀' },
    { name: 'TypeScript', color: 'bg-blue-600', icon: '📘' },
    // Duplicado para efeito contínuo
    { name: 'Python', color: 'bg-yellow-500', icon: '🐍' },
    { name: 'JavaScript', color: 'bg-yellow-400', icon: '⚡' },
    { name: 'Java', color: 'bg-red-500', icon: '☕' },
    { name: 'HTML', color: 'bg-orange-500', icon: '🌐' },
    { name: 'CSS', color: 'bg-blue-500', icon: '🎨' },
    { name: 'React', color: 'bg-cyan-500', icon: '⚛️' },
    { name: 'Node.js', color: 'bg-green-500', icon: '🚀' },
    { name: 'TypeScript', color: 'bg-blue-600', icon: '📘' }
];

technologies.forEach(tech => {
    const techDiv = document.createElement("div");
    techDiv.classList.add("flex-shrink-0", tech.color, "rounded-lg", "p-4", "min-w-[150px]", "text-center", "shadow-lg", "hover:shadow-xl", "transition-transform", "duration-200", "transform", "hover:scale-110");
    techDiv.innerHTML = `
        <div class="text-2xl mb-2">${tech.icon}</div>
        <div class="text-white font-semibold">${tech.name}</div>
    `;
    techCarousel.appendChild(techDiv);
});

// Fazer o carrossel andar mais rápido
let scrollSpeed = 2; // valor maior = mais rápido
setInterval(() => {
    techCarousel.scrollLeft += scrollSpeed;
    if (techCarousel.scrollLeft >= techCarousel.scrollWidth / 2) {
        techCarousel.scrollLeft = 0;
    }
}, 30);

// Initial render of chat messages
renderMessages();
