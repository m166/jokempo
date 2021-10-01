import { createStore } from 'redux';


const initialState = {
    heroiPC: null,
    heroiPlayer: null,
    herois: [
        {
            id: 1,
            name: 'Capitão America',
            image: "../img/capitao_america.png"
        },
        {
            id: 2,
            name: 'Homem de Ferro',
            image: "../img/homem_de_ferro.png"
        },
        {
            id: 3,
            name: 'Feiticeira Scarlate',
            image: "../img/feiticeira_scarlate.png"
        },
        {
            id: 4,
            name: 'Thor',
            image: "../img/thor.png"
        },
        {
            id: 5,
            name: 'Viúva Negra',
            image: "../img/viuva_negra.png"
        },
        {
            id: 6,
            name: 'Homem Aranha',
            image: "../img/miranha.png"
        }
    ]
}

function reducer(state = initialState, action) {
    if (action.type === 'PLAYER_CHANGED') {
        return {
            ...state,
            heroiPC: action.payload.heroi,
            heroiPlayer: action.payload.heroi
        }
    }
    return state

}

const store = createStore(reducer);



export default store;

/*// InitialState
const initialState = {
    jogador: []
}

// AppReducer
const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAYER_CHANGED':
            return { ...state, jogador: action.payload.jogador }
        default:
            return state
    }
}



// AppAction
export const doChangeJogador = jogador => {
    return {
        type: 'PLAYER_CHANGED',
        payload: {
            jogador
        }
    }
}




// Reducers
const rootReducer = combineReducers({
    AppState: AppReducer,
})
*/
