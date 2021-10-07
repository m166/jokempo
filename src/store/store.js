import {
    PLAYER_CHANGED,
    PLAYER_CHANGED_CLEAR,
} from "./actions"


export const initialState = {
    heroiPC: {},
    heroiPlayer: {},
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_CHANGED_CLEAR:
            return { ...state, ...initialState }
        case PLAYER_CHANGED:
            return { ...state, heroiPC: action.payload.heroiPC }
        case PLAYER_CHANGED:
            return { ...state, heroiPlayer: action.payload.heroiPlayer }
        default:
            return state
    }

}

export default {reducer}