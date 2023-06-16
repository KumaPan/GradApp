<template>
    <div class="">
        
        <DashboardComponent />
        <h2>test page</h2>
        <!-- <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  /> -->

  <!-- <Line :data="data" :options="options" /> -->
  <main class="app">
                        <section class="greeting"
                        v-for="lead in leads"
                        v-bind:key="lead.id">
                            <h4 class="title">
                                <!-- Hello,<input class="form-control" type="text" placeholder="Insert name here" v-model="name"> -->
                               Welcome {{ lead.contact_person }},
                            </h4>
                        </section>
                        <section class="create-todo">
                            <h5>Construct to-do list</h5>


                            <form @submit.prevent="addTodo">
                            <h6>What is on your todo list?</h6>
                            <input type="text" class="form-control" placeholder="e.g. marketing plan for new egg product" v-model="input_content" />

                            <h5>Pick a category</h5>
                            <div class="options">
                                <input type="radio" class="btn-check" name="category" value="business" id="business" v-model="input_category">
                                <label class="btn btn-outline-success" for="business">Business</label>

                                <input type="radio" class="btn-check" name="category" value="personal" id="personal" v-model="input_category">
                                <label class="btn btn-outline-danger ms-2" for="personal">Personal</label>
                            </div>
                            <input type="submit" value="Add Todo" class="btn btn-primary mt-5"/>
                            </form>
                        </section>
                        <section class="todo-list">
                            <h6>ToDo List</h6>
                            <div class="list">
                                <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
                                    <label>
                                        <input type="checkbox" v-model="todo.done"/>
                                        <span :class="`form-check-input ${todo.category}`"></span>
                                    </label>
                                    <div class="todo-content">
                                        <input type="text" v-model="todo.content" />
                                    </div>
                                    <div class="actions">
                                        <button class="btn btn-danger" @click="removeToDo()">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <div class="p-1" style="width: 25rem;">
                    <div class="card mt-3 mb-3">
                    <img src="https://picsum.photos/id/532/600/400" class="card-img-top" alt="">
                        <div class="card-body">
                            <span v-for="lead in leads"
                            :key="lead.id">
                                <h5 class="card-title">Brand name:{{ lead.brand_name }}</h5>
                            </span>
                            <span v-for="lead in leads"
                            :key="lead.id">
                             <p class="card-text">Brand description:{{ lead.brand_description }}</p>
                            </span>
                        </div>
                    </div>
                </div>
    </div>
</template>

<script>
import DashboardComponent from '@/components/layouts/DashboardComponent.vue';

export default {

  components: {
    DashboardComponent
  }
}

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js'
// import { Line } from 'vue-chartjs'
// import * as chartConfig from '@/rawdata/chartConfig.ts'

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// )

// export default {
//   name: 'App',
//   components: {
//     Line
//   },
//   data() {
//     return chartConfig
//   }
// }
</script>

<script setup>

import{ ref, onMounted, computed, watch} from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const todos_asc = computed(() => todos.value.sort((a,b) =>{
    return b.createdAt - a.createdAt
}))

const addTodo = () => {
    if(input_content.value.trim() === '' || input_category.value === null){
        return
    }
    console.log("addTodo");
    todos.value.push({
        content: input_content.value,
        category: input_category.value,
        done: false,
        createdAt: new Date().getTime()
    })
}

const removeToDo = todo => {
    console.log('Item removed')
    todos.value = todos.value.filter(t => t !== todo)
}

watch(todos, newVal => {
    localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })

watch(name, (newVal) => {
    localStorage.setItem('name', newVal)
})

onMounted(() => {
    name.value = localStorage.getItem('name') || ''
    todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>


<style>

</style>