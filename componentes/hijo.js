Vue.component('hijo', {
    template: //html 
        `
    <div class="py-5 bg-success">
    <h4>componente hijo: {{numero}}</h4>
    <h4>nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data() {
        return {
            nombre: 'Luis Angel'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    },

})