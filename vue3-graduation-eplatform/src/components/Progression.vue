<template>
<div class="">
    <div class="steps-container" :style="cssStyle">
        <ul class="steps-list">
            <li class="step" v-for="(lessons, index) in data.Lesson" 
            :key="index" :class="(index == data.currentStep) ? 
            'step-active' : '', (index < data.currentStep) ? 
            'step-done' : '', (index == 0 && index == data.currentStep) ? 'step-done-in-advance' : ''"> 
                <div class="step-bubble">
                    <div class="step-count">{{ index + 1 }}</div>
                </div>
                <div class="step-label">{{ lessons }}  
                    <div class="card mb-5" style="width: 21rem;">
                        <iframe src="https://www.youtube.com/embed/Mco_Qfs1BgU"></iframe>
                        <div class="card-body">
                            <h5 class="card-title">Fluid design</h5>
                                <p class="card-text">Learn about the following steps to...</p>
                                <a href="#" class="btn btn-success">Start</a>
                        </div>
                    </div>
                </div>
                <div class="step-line"></div>
                    <div class="line-fill"></div>
            </li>
        </ul>
    </div>
</div>
</template>

<script setup>
    import { defineProps, ref, computed, defineExpose } from 'vue';

    const props = defineProps({
        data: Object,
    });

    // console.log(props.data);

    props.data.currentStep--;

    const data = ref(props.data);

    const cssStyle = computed(()=> {
        return {
            '--active-color': data.value.activeColor,
            '--passive-color': data.value.passiveColor
        };
    })

    const nextStep = () => {
        if(data.value.currentStep < data.value.Lesson.length){
            data.value.currentStep++;
        }
    };
    const previousStep = () => {
        if(data.value.currentStep > 0){
            data.value.currentStep--;
        }
    };

    defineExpose({
        nextStep,
        previousStep,
    })
</script>

<style scoped>
.steps-container{
    width: 100%;
    margin: 0 auto;
    /* margin-bottom: 40px; */
}

.steps-list {
    display: flex;
    align-items: none;
}

.step-label {
    font-weight: 400;
    font-size: 20px;
    /* position: absolute; */
    /* bottom: 10px; */
    /* opacity: .1; */
    display: none;
}

.step {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 100%;
    position: relative;
    height: 500px;
}

.step:last-child {
    max-width: 60px;
}

.step-bubble {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--passive-color);
    transition: all .50s ease;
    display: flex;
    justify-content: center;
}

.step-count{
    color: white;
    font-weight: 400;
    font-size: 40px;
    display: none;
    justify-content: center;
}


.step-line{
    width: 100%;
    height: 5px;
    background-color: var(--passive-color);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -10;
}

.line-fill {
    width: 0px;
    height: 5px;
    background-color: var(--active-color);
    transition:  all .50s ease;
}

.step:last-child .step-line {
    display: none;
}

.step-active .step-count {
    display: block;
}

.step-active .step-label {
    display: block;
}

.step-active .step-bubble,
.step-done .step-bubble {
width: 60px;
height: 60px;
background-color: var(--active-color);
}

.step-done .line-fill{
    width: 100%;
}

.step-done-in-advance{
    width: 50%;
}
</style>