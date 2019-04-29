Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text }}</li>'
})
var n = 0
var tours_list = new Vue({
    el: '#tours_list',
    data: {
        input: 'Create a tour!',
        add_tour: function(){
            tours_list.tour_list.push({id:n++,
                text: this.input})
        },
        tour_list:[
            {}
        ]
    }
})

