<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">
                {{ fruta }}
            </li>
            <input type="text" v-model="fruta" @keydown.enter="add">
        </ul>
    </div>
</template>

<script>
    import frutasMixIn from "./frutasMixIn";

    export default {
        mixins: [frutasMixIn],
    }
</script>

<style scoped>

</style>