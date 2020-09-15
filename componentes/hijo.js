Vue.component('hijo', {
    template: //html 
        `
    <div class="py-5 bg-success">
    <h4>componente hijo: {{numero}}</h4>
    </div>
    `,
    props: ['numero']

})