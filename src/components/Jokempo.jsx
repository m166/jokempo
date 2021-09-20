const jokempo = [
    {
        id: 1,
        desc: "pedra"
    },
    {
        id: 2,
        desc: "tesoura"
    },
    {
        id: 3,
        desc: "papel"
    }
]

function rand() {
    const valor = Math.random() * (sorteio.max - sorteio.min) + sorteio.min
    return Math.floor(valor)
}

function comparar( pc , jogador ) {
    if(pc == jogador){
        return "empate"
    }else if ((pc == "pedra" && jogador == "tesoura") || (pc == "papel" && jogador == "pedra") || (pc == "tesoura" && jogador == "papel")){
        return "derrota"
    }else {
        return "vitoria"
    }       
}

function resultado(a, b) {
    const getValue = value => jokempo.filter(({id}) => id===value)
    
    let pc = Object.values(getValue(a))[0].desc
    let jogador = Object.values(getValue(b))[0].desc
    
    console.log(pc,jogador)   
    return comparar(pc, jogador)
}

const sorteio = { max: 4, min: 1 }
const pc = rand(sorteio)
const jogador = rand(sorteio)
console.log(pc,jogador)
console.log(resultado(pc,jogador))


class Jokempo extends Component {
    render() {

        return (
            <TelaResultado/>
        )
    }
}

export default Jokempo;



