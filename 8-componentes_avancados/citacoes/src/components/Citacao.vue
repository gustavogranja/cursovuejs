<template>
    <div class="citacao"> <!--slot = Concegui exibir o que foi passado no corpo do componente. Pode uasr a versão padrão
                                (slot) ou slot nomeado (slot="autor")-->
        <slot name="autor"></slot>   <!-- tambem pode ser usado: <div><slot></slot></div> -->
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
        created() {
            console.log('created')
        },
        destroyed() {
            console.log('destroyed')
        }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    h1 {
        color: darkslategrey;
    }
</style>
