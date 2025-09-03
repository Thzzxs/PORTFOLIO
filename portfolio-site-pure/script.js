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
// Lista de mensagens iniciais
let messages = [
    { type: "bot", message: "Olá! Sou seu assistente virtual. Como posso ajudá-lo hoje? 😊" }
];

// Função para gerar respostas do bot
function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    // Saudações
    if (msg.includes("olá") || msg.includes("oi") || msg.includes("bom dia") || msg.includes("boa tarde") || msg.includes("boa noite")) {
        const greetings = [
            "Oi! Que bom te ver por aqui 😊",
            "Olá! Como você está hoje?",
            "E aí! Pronto para explorar nossos serviços?",
            "Oi! Espero que seu dia esteja ótimo!"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Serviços
    if (msg.includes("serviço") || msg.includes("site") || msg.includes("manutenção") || msg.includes("análise") || msg.includes("dados")) {
        const services = [
            "Oferecemos criação de sites modernos e responsivos.",
            "Podemos realizar manutenção de sistemas e sites existentes.",
            "Temos serviços de análise de dados para otimizar seu negócio.",
            "Desenvolvemos soluções personalizadas para sua empresa!"
        ];
        return services[Math.floor(Math.random() * services.length)];
    }

    // Contato
    if (msg.includes("contato") || msg.includes("telefone") || msg.includes("email") || msg.includes("falar")) {
        return "Você pode nos contatar pelo email: contato@empresa.com ou pelo telefone (11) 99999-9999. 📞";
    }

    // Preço
    if (msg.includes("preço") || msg.includes("valor") || msg.includes("custo")) {
        return "Os valores dependem do serviço desejado. Me diga qual serviço você quer, que eu informo o preço!";
    }

    // Vagas / trabalho
    if (msg.includes("trabalho") || msg.includes("vaga") || msg.includes("oportunidade") || msg.includes("emprego")) {
        const jobs = [
            "Temos vagas em desenvolvimento, análise de dados e suporte técnico!",
            "Atualmente estamos buscando profissionais para nossa equipe de TI.",
            "Você pode se candidatar enviando seu currículo pelo nosso site."
        ];
        return jobs[Math.floor(Math.random() * jobs.length)];
    }

    // Agradecimentos
    if (msg.includes("obrigado") || msg.includes("valeu") || msg.includes("brigado")) {
        const thanks = [
            "De nada! 😊 Sempre à disposição.",
            "Por nada! Espero ter ajudado.",
            "Imagina! Qualquer coisa é só chamar."
        ];
        return thanks[Math.floor(Math.random() * thanks.length)];
    }

    // Perguntas engraçadas / divertidas
    if (msg.includes("piada") || msg.includes("engraçado") || msg.includes("diversão")) {
        const jokes = [
            "Por que o computador foi ao médico? Porque estava com vírus! 😷💻",
            "O que o JavaScript disse para o HTML? 'Você completa minha tag!' 😂",
            "Sabe por que o programador sempre confunde Halloween com Natal? Porque OCT 31 = DEC 25! 🎃🎄"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // Horário / funcionamento
    if (msg.includes("horário") || msg.includes("funciona") || msg.includes("aberto")) {
        return "Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. ⏰";
    }

    // Mensagem padrão
    const defaultResponses = [
        "Desculpe, não entendi. Pode reformular a pergunta? 🤔",
        "Hmm... não tenho certeza sobre isso, mas posso te ajudar com nossos serviços!",
        "Essa é uma boa pergunta! Por enquanto posso falar sobre nossos serviços e contato."
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Renderiza mensagens no chat
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

// Enviar mensagem do usuário
function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        messages.push({ type: "user", message: userMessage });
        const botReply = getBotResponse(userMessage);
        messages.push({ type: "bot", message: botReply });
        chatInput.value = "";
        renderMessages();
    }
}

// Event listeners
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

chatSend.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

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

// Criando os cards
technologies.forEach(tech => {
    const techDiv = document.createElement("div");
    techDiv.classList.add(
        "flex-shrink-0", tech.color, "rounded-lg", "p-4", 
        "min-w-[150px]", "text-center", "shadow-lg", 
        "hover:shadow-xl", "transition-shadow", "duration-300", 
        "transform", "hover:scale-105"
    );
    techDiv.innerHTML = `
        <div class="text-2xl mb-2">${tech.icon}</div>
        <div class="text-white font-semibold">${tech.name}</div>
    `;
    techCarousel.appendChild(techDiv);
});

// ---------------------------
// Rolagem automática
// ---------------------------
let scrollSpeed = 0.5;      // Velocidade do carrossel (px por passo)
let intervalTime = 20;      // Intervalo entre passos (ms)

function autoScroll() {
    techCarousel.scrollLeft += scrollSpeed;

    // Reinicia o scroll quando chegar na metade (porque duplicamos os cards)
    if (techCarousel.scrollLeft >= techCarousel.scrollWidth / 2) {
        techCarousel.scrollLeft = 0;
    }
}

// Inicia a rolagem automática
setInterval(autoScroll, intervalTime);


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


