// RF01 - Objeto representando o candidato
const candidato = {
    nome: "Angélica",
    area: "Front-End",
    habilidades: ["HTML", "JavaScript", "Github", "Lógica de Programação", "Kanban"],
    experienciaMeses: 8
};

// RF09 - Classe Base Vaga
class Vaga {
    constructor(empresa, cargo, requisitos, salario, modalidade){
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
    }
    
    // RF11 - Demonstração do uso do 'this'
    exibirResumo() {
        return `${this.cargo} na empresa ${this.empresa}`;
    }
}

// RF10 - Classe Especializada com Herança
class VagaFrontEnd extends Vaga {
    constructor(empresa, cargo, requisitos, salario, modalidade, nivel){
        super(empresa, cargo, requisitos, salario, modalidade);
        this.nivel = nivel;
    }   
    
    exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
    }
}

// RF02 - Array com pelo menos 03 vagas fictícias
const vagas = [

    new VagaFrontEnd(
        "Tech Systems",
        "Desenvolvedor Front-End Júnior",
        ["HTML", "JavaScript", "Github", "Lógica de Programação"],
        2900,
        "Remoto",
        "Júnior"
    ),

    {
        id: 2,
        empresa: "123 Code",
        cargo: "Estágio Front-End",
        requisitos: ["HTML", "CSS", "JavaScript"],
        salario: 1700,
        modalidade: "Híbrido",
        nivel: "Estágio"
    },

    {
        id: 3,
        empresa: "Web Tech",
        cargo: "Programador Javascript Pleno",
        requisitos: ["JavaScript", "NodeJS", "Github", "Kanban", "Lógica de Programação"],
        salario: 3500,
        modalidade: "Presencial",
        nivel: "Pleno"
    }
];



// RF08 - Função principal de análise usando métodos de array
function analisarVagas(candidato, listaVagas) {
    // RF03 - O .map() vai percorrer cada vaga e retornar um relatório para cada uma
    const relatorios = listaVagas.map(vaga => {
        // RF08 e RF05 - O .filter() cruza os requisitos da vaga com as habilidades do candidato
        // Aqui descobrimos quais requisitos a vaga pede que o candidato JÁ TEM
        const habilidadesCorrespondentes = vaga.requisitos.filter(req => 
            candidato.habilidades.includes(req)
    );

    // RF05 - Aqui filtramos o que o candidato NÃO TEM
    const habilidadesFaltantes = vaga.requisitos.filter(req =>
        !candidato.habilidades.includes(req)
    );

    // RF03 - Cálculo matemático da porcentagem de compatibilidade
    const totalRequisitos = vaga.requisitos.length;
    const totalAcertos = habilidadesCorrespondentes.length;
    const porcentagem = Math.round((totalAcertos / totalRequisitos) * 100);

    // RF04 - Estrutura condicional para classificar a compatibilidade
    let classificacao = "";
    if (porcentagem >= 80) {
        classificacao = "Alta compatibilidade";
    } else if (porcentagem >= 50) {
        classificacao = "Média compatibilidade";        
    } else {
        classificacao = "Baixa compatibilidade";
    }

    // Retorna o objeto do relatório individual desta vaga estruturado
    return {
        vaga: vaga.cargo,
        empresa: vaga.empresa,
        nivelCargo: vaga.nivel || "Não especificado", // Exibe o nível da vaga (Júnior/Pleno/Estágio)
        porcentagem: porcentagem,
        compatibilidade: classificacao,
        faltantes: habilidadesFaltantes
    };
    });

    return relatorios;
}

// RF06 - Identificar a maior compatibilidade usando o método .reduce()
function encontrarMelhorVaga(listaRelatorios) {
    if (listaRelatorios.length === 0) return "Nenhum relatório encontrado.";

    // O .reduce() compara os relatórios e mantém o de maior porcentagem
    const melhorVaga = listaRelatorios.reduce((melhor, atual) => {
        // Se a porcentagem da vaga atual for maior que a do melhor até agora, ela vira a nova melhor
        return atual.porcentagem > melhor.porcentagem ? atual : melhor;
    });

    return melhorVaga;
}

// RF07 - Gerar recomendação de estudo agrupando as habilidades faltantes
function gerarRecomendacaoEstudos(listaRelatorios) {
    let todasAsFalta = [];

    for (const relatorio of listaRelatorios) {
        todasAsFalta = todasAsFalta.concat(relatorio.faltantes);
    }


 // Remove elementos duplicados para a lista ficar limpa (ex: se mais de uma vaga pedir NodeJS)   
const habilidadesUnicas = [...new Set(todasAsFalta)];

if (habilidadesUnicas.length === 0) {
    return "Parabéns! Você atende a todos os requisitos de todas as vagas analisadas!";
}

return `Recomendação de Estudos: Com base nas vagas analisadas, sugerimos focar no aprendizado de: ${habilidadesUnicas.join(", ")}.`;
}

// RF13 - Mecanismo de Closure para contar as análises realizadas
function criarContadorAuditoria(){
    let totalAnalises = 0; //Variável privada protegida pelo closure.
     //Retorna a função interna que tem acesso à variável de cima
     return function(){
        totalAnalises++;
        return `Auditoria: O sistema já processou um total de ${totalAnalises} análises nesta execução.`;
     };
}

// Inicializa a closure criando o mensageiro oficial do contador
const registrarAnalise = criarContadorAuditoria();

// RF14 - Assincronismo: Simula busca de dados de um servidor com Promise e setTimeout
function buscarVagasDoServidor(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vagas); //Devolve a lista de vagas após 1s.
        }, 1000);
    });
}

// RF12 - Callback: Função que recebe outra função (callback) como parâmetro
function finalizarAnalise(mensagemAuditoria, callbackExibicao) {
    console.log("\n Finalizando processo de análise de dados...")
    callbackExibicao(mensagemAuditoria);
}

//Função Principal Assíncrona para orquestrar todo o sistema
async function rodarSimulador() {
    console.log("Conectando ao servidor para buscar as vagas disponíveis...");

    // O 'await' pausa a execução por 1 segundo até a Promise do servidor resolver
    const listaVagasAssincrona = await buscarVagasDoServidor();
    console.log("Dados das vagas carregados com sucesso!\n")

    //1. Executa o motor de análise principal
    const relatorios = analisarVagas(candidato, listaVagasAssincrona);

    //2. Encontra a vaga com maior compatibilidade
    const melhorVaga = encontrarMelhorVaga(relatorios);

    //3. Gera a lista de recomendações de estudo
    const recomendacaoEstudos = gerarRecomendacaoEstudos(relatorios);

    //---EXIBIÇÃO FORMATADA NOS RESULTADOS---
    console.log("===================================");
    console.log("RELATÓRIO GERAL DE COMPATIBILIDADE:");
    console.log("===================================");
    console.table(relatorios);

    console.log("-----------------------------------");
    console.log(`Vaga Ideal: ${melhorVaga.vaga} na empresa ${melhorVaga.empresa} (${melhorVaga.porcentagem}% de match.)`);
    console.log("-----------------------------------");
    console.log(recomendacaoEstudos);
    console.log("===================================");

    //4. Executa a closure para gerar o log do contador
    const logContador = registrarAnalise();

    //5. Executa o callback passando o log e uma função anônima para exibir
    finalizarAnalise(logContador, (textoParaExibir) => {
        console.log(textoParaExibir);
        console.log("\n [SUCESSO] Todos os 14 Requisitos Funcionais foram executados com perfeição.");
    });    
}

//Executa o sistema completo
rodarSimulador();