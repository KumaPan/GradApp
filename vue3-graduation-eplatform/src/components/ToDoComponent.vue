<template>
    <div class="container">
        <h2 class="text-center mt-4">This is the todo list</h2>

        <!-- this is the input -->
        <div class="d-flex">
            <input type="text" placeholder="enter text" class="form-control" v-model="task">
            <button class="btn btn-warning ms-2" @click="submitTask">Submit</button>
        </div>

        <!-- table for task -->
        <table class="table table-bordered mt-2">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center">#</th>
      <th scope="col" class="text-center">#</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index">
      <!-- <th scope="row">1</th> -->
      <td>{{task.objective}}</td>
      <td>{{ task.status }}</td>
      <td>
        <div class="text-center">
            <span class="fa fa-pen"></span>
        </div>
    </td>
      <td>
        <div class="text-center">
            <span class="fa fa-trash"></span>
        </div>
    </td>
      
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
export default {
    name: 'ToDoComponent',

    data() {
        return {
            task: '',
            tasks: [
                {
                    objective: 'Steal diploma and run for the hills',
                    status: 'to-do'
                },
                {
                    objective: 'Finish this project for grad',
                    status: 'in-progress'
                }
            ]
        }
    },

    methods: {
        submitTask(){
            console.log( this.task + 'task submitted')

            if(this.task.length === 0 ) return;

            this.tasks.push({
                objective:this.task,
                status: 'to-do'
            })
        }
    }
}
</script>

<style>

</style>