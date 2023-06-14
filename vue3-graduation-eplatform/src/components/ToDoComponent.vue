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
      <th scope="col" class="text-center">##</th>
      <th scope="col" class="text-center">##</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index">
      <!-- <th scope="row">1</th> -->
      <td>
        <span :class="{'finished': task.status==='completed'}">
            {{task.name}}
        </span>
      </td>
      <td class="fitted">
        <span class="pointer" @click="changeStatus(index)"
        :class="{'text-danger': task.status==='to-do',
                'text-warning': task.status==='in-progress',
                'text-success': task.status==='completed'}">
            {{ firstCharUpper(task.status) }}
        </span>
    </td>
      <td>
        <div class="text-center" @click="editTask(index)">
            <span class="fa fa-pen"></span>
        </div>
    </td>
      <td>
        <div class="text-center" @click="deleteTask(index)">
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
            editedTask: null,
            availableStatuses: ['to-do', 'in-progress', 'completed'],
            tasks: [
                {
                    name: 'Steal diploma and run for the hills',
                    status: 'to-do'
                },
                {
                    name: 'Finish this project for grad',
                    status: 'in-progress'
                }
            ]
        }
    },

    methods: {
        submitTask() {
      if (this.task.length === 0) return;

      
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
      
        this.tasks.push({
          name: this.task,
          status: "todo",
        });
      }

      this.task = "";
    },
        deleteTask(index){
            this.tasks.splice(index, 1);

        },
        editTask(index){
            this.task = this.tasks[index].name;
            this.editedTask = index
        },
        changeStatus(index){
            let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
            if (++newIndex > 2) newIndex = 0;
            this.tasks[index].status = this.availableStatuses[newIndex];
        },

        firstCharUpper(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }
}
</script>

<style>
.pointer{
    cursor: pointer;
}

.fitted{
    width: 120px;
}

.finished{
    text-decoration: line-through;
}
</style>