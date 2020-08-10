export default({
    namespaced: true,
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        adicionarProduto(context, payload) { // pode o operador { commit }, assim tirando o 'context.'
            setTimeout(() => {
                context.commit('adicionarProduto', payload)
            }, 1000)
        }
    }
    // adicionarProduto: { ((Outra forma de usar, porem precisa tirar o namespace 'carrinho' do Loja.vue))
    //     root: true,
    //     handler({commit}, payload) {
    //         setTimeout(() => {
    //             commit('adicionarProduto', payload)
    //         }, 1000)
    //     }
    // }

})

