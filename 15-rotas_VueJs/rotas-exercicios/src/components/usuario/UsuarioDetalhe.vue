<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong>{{ id }}</p>
        <router-link tag="button" primario
                     :to="`/usuario/${id}/editar`"
        >Editar</router-link>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        beforeRouteEnter(to, from, next) {
          console.log('dentro do componente -> usuário detalhe')
          next(vm => {
              console.log(vm.id)
          })
        },
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //   $route(to, from) {
        //       this.id = to.params.id
        //   }
        // },
    }
</script>

<style scoped>

</style>