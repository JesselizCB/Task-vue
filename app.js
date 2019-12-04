const app = new Vue({
el: '#app',
data: {
titulo: 'Reg. de tareas con vue',
tareas: [],
nuevaTarea: ''
},
methods:{
    agregarTarea: function(){
        // console.log(this.nuevaTarea);
        this.tareas.push({
            nombre: this.nuevaTarea,
            estado: false
        });
        // console.log(this.tareas);
        this.nuevaTarea = '';
        localStorage.setItem('gym-vue', JSON.stringfy(this.tareas));
    },
    editarTarea: function(index){
        if (this.tareas[index].estado === false) {
            this.tareas[index].estado = true;
        } else {
            this.tareas[index].estado = false;
        }
        
        localStorage.setItem('gym-vue', JSON.stringfy(this.tareas));
    },
    eliminarTarea: function(index){
        this.tareas.splice(index,1);
        localStorage.setItem('gym-vue', JSON.stringfy(this.tareas));
    }
},
created: function(){
 let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
console.log(datosDB);
if (datosDB === null) {
    this.tareas = [];
}else{
    this.tareas = datosDB;
}
}
});