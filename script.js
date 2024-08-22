document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const narrative = document.getElementById('narrative');
    const endScreen = document.getElementById('end-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const narrativeText = document.getElementById('narrative-text');
    const choicesContainer = document.getElementById('choices-container');

    const story = [
        // Passo 1
        {
            text: "Carlos, um experiente engenheiro automotivo, está ponderando sobre uma grande decisão para sua empresa de veículos, AutoTech. Recentemente, ele ficou impressionado com as últimas inovações em tecnologia automotiva, incluindo veículos elétricos, sistemas de condução autônoma e integração inteligente com a internet. Ele sabe que adotar essas tecnologias pode colocar a AutoTech à frente no mercado, mas também representa um investimento alto e alguns riscos.",
            choices: [
                { text: "Investir em tecnologias avançadas", nextStep: 1 },
                { text: "Manter a linha de veículos tradicionais", nextStep: 2 },
            ]
        },
        // Passo 2
        {
            text: "Carlos decidiu investir pesadamente em tecnologias avançadas. Sua empresa agora produz veículos elétricos com baterias de longa duração, sistemas de condução autônoma que permitem um trânsito mais seguro e uma integração inteligente com dispositivos móveis que oferece uma experiência personalizada para cada motorista. Os resultados foram impressionantes: as vendas dispararam, a AutoTech se tornou uma referência em inovação, e os clientes estão encantados com as novas funcionalidades.",
            choices: [
                { text: "O avanço tecnológico foi um sucesso e a empresa prosperou.", nextStep: 4 },
            ]
        },
        // Passo 3
        {
            text: "Carlos optou por manter a linha de veículos tradicionais. Apesar das pressões para adotar tecnologias modernas como veículos elétricos e sistemas autônomos, ele decidiu que a empresa continuaria a produzir os mesmos modelos clássicos de sempre.",
            choices: [
                { text: "A decisão de não adotar novas tecnologias resultou na queda das vendas e a AutoTech perdeu relevância no mercado.", nextStep: 7 },
            ]
        },
        // Passo 4
        {
            text: "Com o sucesso da inovação tecnológica, Carlos continua a expandir sua linha de produtos, explorando novas tecnologias emergentes. A AutoTech tornou-se um líder no setor automotivo, influenciando o mercado e definindo tendências. A decisão de investir no futuro trouxe enormes benefícios e consolidou a posição da empresa como pioneira em tecnologia.",
            choices: [
                { text: "Voltar ao início", nextStep: 0 },
            ]
        },
        // Passo 7
    
    ];

    let currentStep = 0;

    function startGame() {
        home.style.display = 'none';
        narrative.style.display = 'block';
        showStep(currentStep);
    }

    function showStep(step) {
        const currentStory = story[step];
        narrativeText.textContent = currentStory.text;
        choicesContainer.innerHTML = '';
        if (currentStory.choices) {
            currentStory.choices.forEach((choice) => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.addEventListener('click', () => handleChoice(choice.nextStep));
                choicesContainer.appendChild(button);
            });
        }
    }

    function handleChoice(nextStep) {
        if (nextStep >= story.length) {
            showEndScreen();
        } else {
            currentStep = nextStep;
            showStep(currentStep);
        }
    }

    function showEndScreen() {
        narrative.style.display = 'none';
        endScreen.style.display = 'block';
    }

    function restartGame() {
        endScreen.style.display = 'none';
        home.style.display = 'block'; // Exibe a tela inicial
        currentStep = 0; // Reinicia o passo do jogo
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
});
