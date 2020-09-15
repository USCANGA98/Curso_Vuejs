Vue.component('padre', {

    template: //html 
        ` 
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre: {{numeropadre}}</h2>
            <button class="btn btn-danger" @click="numeropadre++">+</button>
            {{nombrePadre}}
            <hijo :numero="numeropadre" @nombreHijo="nombrePadre = $event"></hijo>
        </div>
    `,
    data(){
        return{
            numeropadre: 0,
            nombrePadre: ''
        }
    }
})