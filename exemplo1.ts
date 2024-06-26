// console.log('Primeira etapa')

// setTimeout(() => {
//     console.log('Segunda etapa')
// },3000);

// console.log('Terceira etapa')

// Promessas (Promises)
// Pending -> Pendente | Fulfiled -> Resolvida | Rejected -> Rejeitada 

console.log('Primeira etapa')

 async function imprimir(texto:string) {
    return new Promise((resolver, rejeitar) => {
        resolver(texto)
    })
}

imprimir('Segunda etapa').then((resultado) => {
    console.log(resultado)
})

console.log('Terceira etapa')