<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do usuário é: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento.js'


export default {
    props: {
      nome: {
          type: String,
          default: 'Anônimo'
      },
      reiniciarFn: Function,
      idade: Number
    },
    methods: {
        reiniciarNome() {
            this.nome = 'Gustavo'
            this.$emit('nomeMudou', this.nome)
        }
    },
    created() {
        barramento.quandoIdadeMudar(idade => {
                    this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
