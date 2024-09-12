import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoJoao = new Mago('João', 5, 'Fogo', 5, 10)
const magaJulia = new Mago('Julia', 3, 'Fogo', 6, 9)
const arqueiroBruno = new Arqueiro('Bruno', 5, 10)
const ArqueiroMagoChico = new ArqueiroMago('Chico',4,5,'luz',5,6)
const ArqueiraMagaAna = new ArqueiroMago('Ana',10,10,'Gelo',10,10)
const guerreiroJorge = new Guerreiro('Jorge', 8)

const personagens = [magoJoao, magaJulia, arqueiroBruno, ArqueiroMagoChico, ArqueiraMagaAna, guerreiroJorge]

new PersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroBruno, ArqueiroMagoChico))
