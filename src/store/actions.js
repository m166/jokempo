export const PLAYER_CHANGED = "PLAYER_CHANGED"
export const PLAYER_CHANGED_CLEAR = "PLAYER_CHANGED_CLEAR"


const doClearHeroi = () => {
    return {
        type: PLAYER_CHANGED_CLEAR
    }
}

const toggleEscolha = heroi => {
    return {
        type: 'PLAYER_CHANGED',
        payload: {
            heroi
        }
    }
}

export { toggleEscolha, doClearHeroi }