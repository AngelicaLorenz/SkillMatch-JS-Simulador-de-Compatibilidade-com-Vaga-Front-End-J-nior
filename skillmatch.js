// RF01 - Objeto representando o candidato
const candidato = {
    nome: "Angélica",
    area: "Front-End",
    habilidades: ["HTML", "CSS", "JavaScript", "Github", "Lógica de Programação", "Kanban"],
    experienciaMeses: 8
};

// RF02 - Array com pelo menos 03 vagas fictícias
const vagas = [
    {
        id: 1,
        empresa: "Tech Systems",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["HTML", "CSS", "JavaScript", "Github", "Lógica de Programação"],
        salario: 2900,
        modalidade: "Remoto",
        nivel: "Júnior"
    },

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
