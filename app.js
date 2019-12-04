const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Reg. de tareas con vue',
    tareas: [],
    nuevaTarea: ''
  },
  methods: {
    agregarTarea () {
      // console.log(this.nuevaTarea);
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      });
      // console.log(this.tareas);
      this.nuevaTarea = '';
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },
    editarTarea (index) {
      if (this.tareas[index].estado) {
        this.tareas[index].estado = false;
      } else {
        this.tareas[index].estado = true;
      }

      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    },
    eliminarTarea (index) {
      this.tareas.splice(index, 1);
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    }
  },
  created () {
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
    if (datosDB === null) {
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  }
});