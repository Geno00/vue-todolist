var app = new Vue (
    {
        el: '#app',
        data: {
            newToDo: '',
            
            todos: ['studiare Vue', 'ripassare CSS', 'approfondire Bootstrap']
        },
        methods: {

            eliminaTodo(indice) {
                this.todos.splice(indice, 1);
            },

            addToDo(indice) {
                this.todos.push(this.newToDo);
            }
        }
    }
);