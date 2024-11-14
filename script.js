// Dados do Quiz sobre Robótica
const perguntas = [
    {
        pergunta: "O que é um robô?",
        respostas: [
            { texto: "Uma máquina programável que pode realizar tarefas", correta: true },
            { texto: "Um brinquedo", correta: false },
            { texto: "Um ser vivo", correta: false },
            { texto: "Uma ferramenta de escritório", correta: false }
        ]
    },
    {
        pergunta: "Qual é o principal objetivo da robótica?",
        respostas: [
            { texto: "Construir robôs para substituir os humanos", correta: false },
            { texto: "Ajudar os humanos a realizar tarefas com eficiência", correta: true },
            { texto: "Aumentar a produção industrial", correta: false },
            { texto: "Criar entretenimento", correta: false }
        ]
    },
    {
        pergunta: "O que é um sensor em um robô?",
        respostas: [
            { texto: "Um dispositivo que permite ao robô perceber o ambiente", correta: true },
            { texto: "Um motor que move o robô", correta: false },
            { texto: "O sistema de controle do robô", correta: false },
            { texto: "Uma peça decorativa", correta: false }
        ]
    },
    {
        pergunta: "Qual linguagem de programação é popular em robótica?",
        respostas: [
            { texto: "HTML", correta: false },
            { texto: "Python", correta: true },
            { texto: "CSS", correta: false },
            { texto: "PHP", correta: false }
        ]
    },
    {
        pergunta: "O que é um atuador em robótica?",
        respostas: [
            { texto: "Um dispositivo que permite ao robô realizar ações físicas", correta: true },
            { texto: "Um sensor de movimento", correta: false },
            { texto: "Um tipo de software", correta: false },
            { texto: "Um componente elétrico", correta: false }
        ]
    }
];

let pontuacao = 0;

// Função para exibir perguntas e respostas
function carregarQuiz() {
    const perguntasContainer = document.getElementById('perguntas');
    perguntas.forEach((q, index) => {
        const perguntaEl = document.createElement('div');
        perguntaEl.classList.add('pergunta');
        
        perguntaEl.innerHTML = `<h3>${index + 1}. ${q.pergunta}</h3>`;
        
        q.respostas.forEach((resposta) => {
            const respostaEl = document.createElement('button');
            respostaEl.innerText = resposta.texto;
            respostaEl.classList.add('resposta');
            respostaEl.onclick = () => responder(resposta.correta, respostaEl);
            perguntaEl.appendChild(respostaEl);
        });

        perguntasContainer.appendChild(perguntaEl);
    });
}

// Função para processar a resposta e atualizar a pontuação
function responder(correta, respostaEl) {
    if (correta) {
        pontuacao++;
        respostaEl.style.backgroundColor = "#28a745"; // Verde para resposta correta
    } else {
        respostaEl.style.backgroundColor = "#dc3545"; // Vermelho para resposta incorreta
    }

    // Desativa os botões após a escolha
    const botoes = respostaEl.parentNode.querySelectorAll('button');
    botoes.forEach(botao => botao.disabled = true);
}

// Função para exibir o resultado final
function mostrarResultado() {
    const resultadoEl = document.getElementById('resultado');
    resultadoEl.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas sobre robótica!`;
}

// Carrega o quiz na página ao carregar o script
carregarQuiz();
