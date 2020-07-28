export default {
    data() {
        return {
            fruta: '',
            frutas: ['melancia', 'maracuja', 'manga']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}