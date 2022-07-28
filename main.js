// const Disciplina = require("./Disciplina")
const ControllerAluno = require("./Controllers/AlunoController")
const ControllerDisciplina = require("./Controllers/DisciplinaController")

const AlunoControl = new ControllerAluno
const DisciplinaControl = new ControllerDisciplina

// const aluno1 = new Aluno("Matheus", 14000, 123, 2019, "Ativo")
//const disciplina1 = new Disciplina("Mat", 14, "Mat")
// const disciplina2 = new Disciplina("Fis", 20, "Mat")

const aluno2 = AlunoControl.createAluno("Matheus", 14000, 123, 2019, "Ativo")

// console.log(aluno1)
// console.log(disciplina1)
// console.log(disciplina2)
console.log(aluno2)

// aluno1.newDisciplina("Mat", 14, "Mat")
// aluno1.newDisciplina("Fis", 20, "Mat")

// console.log(aluno1)
// console.log(aluno1.allDisciplinasInscritas)