import { toVars } from "./utils"

export const _colors = {
    white100: '#FFFFFF',
    black100: '#000000',
} 


export const colors: typeof _colors = toVars(_colors)