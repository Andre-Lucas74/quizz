const questions = [
  {
    question: "O que é reciclagem?",
    detail: "A reciclagem é fundamental para reduzir a quantidade de resíduos nos aterros e reaproveitar recursos naturais.",
    answers: [
      { text: "Reutilizar resíduos para criar novos produtos", correct: true },
      { text: "Queimar lixo para gerar energia", correct: false },
      { text: "Enterrar resíduos no solo", correct: false },
      { text: "Descartar resíduos em rios", correct: false }
    ]
  },
  {
    question: "Qual destes materiais demora mais tempo para se decompor na natureza?",
    detail: "O vidro pode levar mais de 4.000 anos para se decompor, enquanto o papel se decompõe em poucos meses.",
    answers: [
      { text: "Papel", correct: false },
      { text: "Vidro", correct: true },
      { text: "Casca de fruta", correct: false },
      { text: "Pano de algodão", correct: false }
    ]
  },
  {
    question: "Qual atitude ajuda a economizar água?",
    detail: "Reaproveitar a água da chuva é uma ótima forma de conservar os recursos hídricos.",
    answers: [
      { text: "Lavar calçada com mangueira", correct: false },
      { text: "Tomar banhos demorados", correct: false },
      { text: "Reaproveitar água da chuva", correct: true },
      { text: "Deixar a torneira aberta ao escovar os dentes", correct: false }
    ]
  },
  {
    question: "O que é efeito estufa?",
    detail: "O efeito estufa é natural e essencial para a vida, mas o excesso de gases intensifica o aquecimento global.",
    answers: [
      { text: "Aquecimento natural da Terra por gases na atmosfera", correct: true },
      { text: "Aquecimento causado apenas pelos vulcões", correct: false },
      { text: "Aquecimento causado pela rotação da Terra", correct: false },
      { text: "Resfriamento do planeta", correct: false }
    ]
  },
  {
    question: "Qual das opções NÃO é uma fonte de energia renovável?",
    detail: "A energia nuclear, apesar de ser limpa em emissão de gases, utiliza recursos finitos e gera resíduos radioativos.",
    answers: [
      { text: "Energia solar", correct: false },
      { text: "Energia eólica (vento)", correct: false },
      { text: "Energia hidrelétrica", correct: false },
      { text: "Energia nuclear", correct: true }
    ]
  },
  {
    question: "A coleta seletiva é importante porque:",
    detail: "Separar o lixo facilita a reciclagem e reduz a poluição do solo, da água e do ar.",
    answers: [
      { text: "Facilita a reciclagem dos materiais", correct: true },
      { text: "Aumenta o lixo nos aterros", correct: false },
      { text: "Polui mais o meio ambiente", correct: false },
      { text: "Reduz a vida útil dos produtos", correct: false }
    ]
  },
  {
    question: "Qual a principal causa do desmatamento da Amazônia?",
    detail: "A expansão da agropecuária (criação de gado e agricultura) é o principal motor do desmatamento na Amazônia.",
    answers: [
      { text: "Construção de cidades", correct: false },
      { text: "Expansão agropecuária", correct: true },
      { text: "Turismo", correct: false },
      { text: "Pesca esportiva", correct: false }
    ]
  },
  {
    question: "Plantio de árvores ajuda a:",
    detail: "Árvores absorvem gás carbônico e liberam oxigênio, melhorando a qualidade do ar e o equilíbrio climático.",
    answers: [
      { text: "Aumentar a poluição do ar", correct: false },
      { text: "Reduzir o gás carbônico da atmosfera", correct: true },
      { text: "Destruir habitats naturais", correct: false },
      { text: "Aumentar erosão do solo", correct: false }
    ]
  },
  {
    question: "O que significa sustentabilidade?",
    detail: "A sustentabilidade busca equilibrar o uso dos recursos naturais com a preservação para as próximas gerações.",
    answers: [
      { text: "Usar recursos naturais de forma consciente, pensando no futuro", correct: true },
      { text: "Usar todos os recursos rapidamente", correct: false },
      { text: "Produzir lixo sem reciclar", correct: false },
      { text: "Desmatar florestas para agricultura", correct: false }
    ]
  },
  {
    question: "Qual animal é símbolo da preservação ambiental no Brasil?",
    detail: "O mico-leão-dourado é símbolo da luta pela conservação da Mata Atlântica.",
    answers: [
      { text: "Lobo-guará", correct: false },
      { text: "Tartaruga-marinha", correct: false },
      { text: "Mico-leão-dourado", correct: true },
      { text: "Papagaio", correct: false }
    ]
  },
  {
    question: "O descarte incorreto do óleo de cozinha pode causar:",
    detail: "O óleo pode poluir milhares de litros de água e causar entupimentos e proliferação de pragas.",
    answers: [
      { text: "Poluição da água e do solo", correct: true },
      { text: "Transformação em oxigênio", correct: false },
      { text: "Aumento da fertilidade do solo", correct: false },
      { text: "Nenhum impacto ambiental", correct: false }
    ]
  },
  {
    question: "Como podemos ajudar a combater o aquecimento global?",
    detail: "Economizar energia e optar por fontes renováveis reduz a emissão de gases do efeito estufa.",
    answers: [
      { text: "Economizando energia elétrica", correct: true },
      { text: "Desmatando florestas", correct: false },
      { text: "Desperdiçando água", correct: false },
      { text: "Aumentando o uso de combustíveis fósseis", correct: false }
    ]
  },
  {
    question: "O que é compostagem?",
    detail: "A compostagem transforma resíduos orgânicos em adubo natural, reduzindo o lixo e enriquecendo o solo.",
    answers: [
      { text: "Processo de transformação do lixo orgânico em adubo", correct: true },
      { text: "Produção de energia elétrica a partir do lixo", correct: false },
      { text: "Separação do lixo reciclável", correct: false },
      { text: "Queima de resíduos para gerar calor", correct: false }
    ]
  },
  {
    question: "Qual o principal gás responsável pelo aquecimento global?",
    detail: "O dióxido de carbono (CO₂) é o gás do efeito estufa mais emitido pelas atividades humanas.",
    answers: [
      { text: "Oxigênio", correct: false },
      { text: "Dióxido de carbono (CO₂)", correct: true },
      { text: "Nitrogênio", correct: false },
      { text: "Hélio", correct: false }
    ]
  }
];

const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const resultDiv = document.getElementById('result');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');
const detailDiv = document.getElementById('question-detail');

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  resultDiv.classList.add('hide');
  restartBtn.classList.add('hide');
  nextBtn.classList.add('hide');
  updateProgress();
  showQuestion();
}

function showQuestion() {
  resetState();
  updateProgress();
  const q = questions[currentQuestion];
  questionContainer.textContent = q.question;
  if (q.detail) {
    detailDiv.style.display = 'block';
    detailDiv.textContent = q.detail;
  } else {
    detailDiv.style.display = 'none';
    detailDiv.textContent = '';
  }
  q.answers.forEach((answer, idx) => {
    const btn = document.createElement('button');
    btn.textContent = answer.text;
    btn.classList.add('answer-btn');
    btn.onclick = () => selectAnswer(btn, answer);
    answersContainer.appendChild(btn);
  });
}

function resetState() {
  nextBtn.classList.add('hide');
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }
  detailDiv.style.display = 'none';
}

function selectAnswer(selectedBtn, answer) {
  const buttons = answersContainer.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.disabled = true;
    const ansObj = questions[currentQuestion].answers.find(a => a.text === btn.textContent);
    if (ansObj.correct) {
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
    }
  });
  if (answer.correct) score++;
  selectedBtn.classList.add(answer.correct ? 'correct' : 'wrong');
  // Exibe o detalhe da pergunta após responder
  if (questions[currentQuestion].detail) {
    detailDiv.style.display = 'block';
    detailDiv.textContent = questions[currentQuestion].detail;
  }
  nextBtn.classList.remove('hide');
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionContainer.textContent = '';
  answersContainer.innerHTML = '';
  detailDiv.style.display = 'none';
  let msg = "";
  if (score === questions.length) {
    msg = "Parabéns! Você acertou todas as perguntas, é um defensor do meio ambiente!";
  } else if (score > questions.length * 0.7) {
    msg = "Ótimo resultado! Você já sabe bastante sobre sustentabilidade.";
  } else if (score > questions.length * 0.4) {
    msg = "Legal! Você já tem algum conhecimento, mas pode aprender ainda mais!";
  } else {
    msg = "Que tal estudar um pouco mais sobre o meio ambiente? O planeta agradece!";
  }
  resultDiv.innerHTML = `Você acertou <b>${score}</b> de <b>${questions.length}</b> perguntas!<br>${msg}`;
  resultDiv.classList.remove('hide');
  restartBtn.classList.remove('hide');
  nextBtn.classList.add('hide');
  updateProgress(true);
}

restartBtn.addEventListener('click', startQuiz);

function updateProgress(forceComplete = false) {
  const progressPercent = forceComplete
    ? 100
    : Math.round((currentQuestion / questions.length) * 100);
  progressBar.style.width = progressPercent + '%';
}

startQuiz();
