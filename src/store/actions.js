export const PLAYER_CHANGED_PC = "PLAYER_CHANGED_PC"
export const PLAYER_CHANGED_PLAYER = "PLAYER_CHANGED_PLAYER"
export const PLAYER_CHANGED_CLEAR = "PLAYER_CHANGED_CLEAR"

const doClearHeroi = () => {
    return {
        type: PLAYER_CHANGED_CLEAR
    }
}

const setHeroiPlayer = heroi => {
    return {
        type: 'PLAYER_CHANGED_PLAYER',
        payload: {
            heroiPlayer: heroi
        }
    }
}

const setHeroiPC = heroi => {
    return {
        type: 'PLAYER_CHANGED_PC',
        payload: {
            heroiPC: heroi
        }
    }
}

export { setHeroiPlayer, setHeroiPC, doClearHeroi }