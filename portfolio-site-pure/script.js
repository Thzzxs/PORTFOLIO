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
    { type: "bot", message: "Olá! Como posso ajudá-lo hoje?" }
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
        messages.push({ type: "bot", message: "Obrigado pela sua mensagem! Em breve entrarei em contato." });
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
    // Duplicando para efeito contínuo
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
    techDiv.classList.add("flex-shrink-0", tech.color, "rounded-lg", "p-4", "min-w-[150px]", "text-center", "shadow-lg", "hover:shadow-xl", "transition-shadow", "duration-300", "transform", "hover:scale-105");
    techDiv.innerHTML = `
        <div class="text-2xl mb-2">${tech.icon}</div>
        <div class="text-white font-semibold">${tech.name}</div>
    `;
    techCarousel.appendChild(techDiv);
});

// Projects Section
const projectsGrid = document.getElementById("projects-grid");
const projects = [
    {
        title: "Relatório de Email",
        description: "Relatório de email, fiz junto do curso de 1 semanda da pystack week",
        tech: ["Python", "Pandas"],
        image: "https://via.placeholder.com/400x250/2563eb/ffffff?text=E-commerce",
        github: "https://github.com/Thzzxs/cursospython/blob/main/exercicios/relatoriodeemail.py",
    },
    {
        title: "Wise corp",
        description: "Sistema de curriculo feito totalmente em foco em usabilidade",
        tech: ["SQL", "Java", "Html", "CSS", "javascript"],
        image: "https://via.placeholder.com/400x250/1d4ed8/ffffff?text=Mobile+App",
        github: "https://github.com/Thzzxs/WiseCORP",
        
    },
    {
        title: "Site com Chat",
        description: "Site com chat feito com o curso HashProgramação, construimos uma interação dentro de um site, que permite que quando o usuario digite seu nome e coloque algo é compratilhado a todos",
        tech: ["Flet", "HTML", "Python"],
        image: "https://via.placeholder.com/400x250/1e40af/ffffff?text=Dashboard",
        github: "https://github.com/Thzzxs/Chat_Cria-oDeSistemas#",
        

    }
];

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("overflow-hidden", "hover:shadow-2xl", "transition-all", "duration-500", "transform", "hover:-translate-y-3", "group", "bg-white", "rounded-lg", "shadow-md");
    projectCard.innerHTML = `
        <div class="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
            <span class="text-white text-lg font-semibold z-10">${project.title}</span>
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tech.map(tech => `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${tech}</span>`).join("")}
            </div>
            <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="${project.github}" target="_blank" class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg text-center"><i class="fab fa-github mr-2"></i>Código</a>
            </div>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// Skills Badges
const skillsBadges = document.getElementById("skills-badges");
const skills = ["React", "HTML", "TypeScript", "Python", "SQL", "CSS", "Java", "Excel"];

skills.forEach(skill => {
    const badge = document.createElement("span");
    badge.classList.add("bg-blue-600", "hover:bg-blue-700", "transition-colors", "duration-300", "cursor-pointer", "transform", "hover:scale-105", "text-white", "font-medium", "px-3", "py-1", "rounded-full");
    badge.textContent = skill;
    skillsBadges.appendChild(badge);
});

// Parallax effect for Hero Section background
window.addEventListener("scroll", () => {
    const heroBg = document.querySelector("#home > div.absolute.inset-0.opacity-20");
    if (heroBg) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

// Contact Form Submission (basic example)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso! Em breve entrarei em contato.");
        contactForm.reset();
    });
}

// Initial render of chat messages
renderMessages();


