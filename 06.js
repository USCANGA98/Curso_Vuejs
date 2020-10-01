Vue.component('titulo', {
    template:
        `
        
    <div>
        <h1>
            numero {{$store.state.numero}}
        </h1> 
        <hijo></hijo>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    },

});

Vue.component('hijo', {
    template:
        `
        
    <div>
        <button @click="$store.commit('aumentar')" >+</button>
        <h1>
            numero {{$store.state.numero}}
        </h1> 
    </div>
    `
});


const store = new Vuex.Store({
    state: {
        numero: 10
    },
    mutations: {
        aumentar(state) {
            state.numero++
        }
    }
});



new Vue({
    el: '#app',
    store: store
})