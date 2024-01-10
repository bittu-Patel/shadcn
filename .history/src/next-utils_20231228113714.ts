const Port = Number(process.env.PORt) || 3000


export const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
    Port: Port,

})

export const nextHandler