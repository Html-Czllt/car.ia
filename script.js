
document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const narrative = document.getElementById('narrative');
    const endScreen = document.getElementById('end-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const narrativeText = document.getElementById('narrative-text');
    const choicesContainer = document.getElementById('choices-container');
    const optionsContainer = document.getElementById('options-container');

    const story = [
        // Passo 1
        {
            text: "Você está liderando um projeto inovador para incorporar tecnologias avançadas nos carros da sua empresa. O novo sistema promete melhorar a segurança e a eficiência, mas também apresenta altos custos e desafios técnicos. Como você irá proceder?",
            choices: [
                { text: "Investir na tecnologia e avançar rapidamente para se destacar no mercado.", nextStep: 1 },
                { text: "Realizar uma pesquisa aprofundada para entender os impactos a longo prazo antes de investir.", nextStep: 2 },
                { text: "Adotar uma abordagem cautelosa e monitorar o desenvolvimento de tecnologias semelhantes na concorrência.", nextStep: 3 }
            ]
        },
        // Passo 2
        {
            text: "Você decidiu realizar uma pesquisa detalhada sobre as novas tecnologias. A pesquisa revela tanto benefícios significativos quanto riscos potenciais. O que fazer a seguir?",
            choices: [
                { text: "Iniciar um projeto piloto para testar a tecnologia em um ambiente controlado.", nextStep: 4 },
                { text: "Atualizar a estratégia de desenvolvimento para mitigar os riscos identificados.", nextStep: 5 },
                { text: "Comunicar os resultados da pesquisa aos stakeholders e solicitar feedback adicional.", nextStep: 6 }
            ]
        },
        // Passo 3
        {
            text: "Você optou por monitorar o mercado e a concorrência. Após algum tempo, outras empresas começam a lançar produtos semelhantes. Qual é o próximo passo?",
            choices: [
                { text: "Reavaliar a estratégia de implementação e considerar acelerar o desenvolvimento.", nextStep: 7 },
                { text: "Investigar as abordagens da concorrência e ajustar o plano de acordo.", nextStep: 8 },
                { text: "Manter o plano atual e continuar monitorando tendências e avanços tecnológicos.", nextStep: 9 }
            ]
        },
        // Passo 4
        {
            text: "Você iniciou um projeto piloto e os resultados são promissores. No entanto, a integração da tecnologia com os sistemas existentes apresenta desafios. O que fazer agora?",
            choices: [
                { text: "Contratar consultores especializados para resolver problemas de integração.", nextStep: 10 },
                { text: "Ajustar os sistemas existentes para melhorar a compatibilidade com a nova tecnologia.", nextStep: 11 },
                { text: "Investir em treinamento para a equipe para lidar com os desafios técnicos.", nextStep: 12 }
            ]
        },
        // Passo 5
        {
            text: "Você atualizou a estratégia de desenvolvimento. A implementação é bem-sucedida, mas há resistência interna a mudanças. Qual é o próximo passo?",
            choices: [
                { text: "Organizar workshops e sessões de treinamento para a equipe sobre a nova tecnologia.", nextStep: 13 },
                { text: "Estabelecer um canal de comunicação para abordar as preocupações e responder dúvidas.", nextStep: 14 },
                { text: "Implementar um período de adaptação gradual para a nova tecnologia.", nextStep: 15 }
            ]
        },
        // Passo 6
        {
            text: "Você comunicou os resultados da pesquisa aos stakeholders. A aceitação é positiva, mas ainda há dúvidas sobre a viabilidade da tecnologia. O que fazer agora?",
            choices: [
                { text: "Realizar sessões de esclarecimento e fornecer mais informações sobre os benefícios e desafios.", nextStep: 16 },
                { text: "Estabelecer um programa de feedback para coletar e responder às preocupações dos stakeholders.", nextStep: 17 },
                { text: "Oferecer demonstrações da tecnologia para mostrar seus benefícios em ação.", nextStep: 18 }
            ]
        },
        // Passo 7
        {
            text: "Você reavaliou a estratégia e decidiu acelerar o desenvolvimento. A empresa agora enfrenta um ritmo acelerado de trabalho e prazos mais curtos. Qual é o próximo passo?",
            choices: [
                { text: "Aumentar a equipe e os recursos para atender ao ritmo acelerado.", nextStep: 19 },
                { text: "Revisar e priorizar as metas de desenvolvimento para garantir entregas pontuais.", nextStep: 20 },
                { text: "Reforçar a comunicação interna e coordenar melhor os esforços da equipe.", nextStep: 21 }
            ]
        },
        // Passo 8
        {
            text: "Você investigou as abordagens da concorrência e ajustou o plano de acordo. A nova abordagem está trazendo melhores resultados, mas há novos desafios. O que fazer agora?",
            choices: [
                { text: "Ajustar o plano com base nos novos desafios e continuar o desenvolvimento.", nextStep: 22 },
                { text: "Consultar especialistas para otimizar a abordagem e enfrentar os desafios.", nextStep: 23 },
                { text: "Manter o plano atualizado e continuar monitorando o progresso e as tendências do setor.", nextStep: 24 }
            ]
        },
        // Passo 9
        {
            text: "Você continuou monitorando tendências e avanços tecnológicos. Descobriu novas inovações que podem impactar o projeto. O que fazer agora?",
            choices: [
                { text: "Integrar as novas inovações no projeto e ajustar o cronograma conforme necessário.", nextStep: 25 },
                { text: "Participar de conferências e fóruns sobre novas tecnologias para se manter atualizado.", nextStep: 26 },
                { text: "Reavaliar a estratégia de desenvolvimento para incorporar as novas tendências.", nextStep: 27 }
            ]
        },
        // Passo 10
        {
            text: "Você contratou consultores especializados para resolver problemas de integração. A tecnologia agora está bem integrada, mas a aceitação dos usuários ainda é baixa. Qual é o próximo passo?",
            choices: [
                { text: "Realizar campanhas de sensibilização e treinamentos para aumentar a aceitação.", nextStep: 28 },
                { text: "Coletar feedback dos usuários e fazer ajustes na tecnologia conforme necessário.", nextStep: 29 },
                { text: "Estabelecer um suporte contínuo para resolver problemas e dúvidas dos usuários.", nextStep: 30 }
            ]
        },
        // Passo 11
        {
            text: "Você ajustou os sistemas existentes para melhorar a compatibilidade com a nova tecnologia. A integração está melhorando, mas surgem novos desafios técnicos. O que fazer agora?",
            choices: [
                { text: "Desenvolver soluções para os novos desafios técnicos e continuar a integração.", nextStep: 31 },
                { text: "Revisar a abordagem de integração e ajustar os processos conforme necessário.", nextStep: 32 },
                { text: "Consultar especialistas para resolver os problemas técnicos restantes.", nextStep: 33 }
            ]
        },
        // Passo 12
        {
            text: "Você investiu em treinamento para a equipe. A equipe está mais preparada, mas alguns membros ainda encontram dificuldades. Qual é o próximo passo?",
            choices: [
                { text: "Oferecer suporte adicional e treinamentos personalizados para os membros com dificuldades.", nextStep: 34 },
                { text: "Atualizar o material de treinamento com base no feedback recebido.", nextStep: 35 },
                { text: "Avaliar o progresso da equipe e ajustar o treinamento conforme necessário.", nextStep: 36 }
            ]
        },
        // Passo 13
        {
            text: "Você organizou workshops e sessões de treinamento. A equipe está adaptando bem, mas alguns funcionários ainda têm dúvidas sobre a nova tecnologia. O que fazer agora?",
            choices: [
                { text: "Oferecer suporte individualizado para funcionários com dúvidas persistentes.", nextStep: 37 },
                { text: "Realizar sessões de esclarecimento adicionais para abordar as dúvidas comuns.", nextStep: 38 },
                { text: "Revisar a tecnologia com base no feedback recebido durante o treinamento.", nextStep: 39 }
            ]
        },
        // Passo 14
        {
            text: "Você estabeleceu um canal de comunicação para responder dúvidas. A adesão é boa, mas há questões complexas que precisam de mais atenção. Qual é o próximo passo?",
            choices: [
                { text: "Contratar especialistas para resolver as questões complexas e técnicas.", nextStep: 40 },
                { text: "Expandir o canal para incluir sessões de Q&A com especialistas.", nextStep: 41 },
                { text: "Ajustar a tecnologia com base nas dúvidas e questões recorrentes.", nextStep: 42 }
            ]
        },
        // Passo 15
        {
            text: "Você implementou um período de adaptação para a nova tecnologia. A resistência ainda persiste em alguns setores. O que fazer agora?",
            choices: [
                { text: "Reforçar a comunicação e o suporte durante o período de adaptação.", nextStep: 43 },
                { text: "Reavaliar a tecnologia e considerar ajustes para reduzir a resistência.", nextStep: 44 },
                { text: "Organizar reuniões regulares para abordar preocupações e fornecer atualizações.", nextStep: 45 }
            ]
        }
        // Passos adicionais a partir do 46 em diante devem seguir a mesma estrutura de desenvolvimento.
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
