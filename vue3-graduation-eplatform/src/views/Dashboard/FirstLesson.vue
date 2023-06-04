<template>
    <div>
    <section class="container-fluid" id="lessonbgColor">
     <div class="row justify-content-md-center pb-5" >
             <h1 class="text-center" id="">Fluid design</h1>
         <div class="col-md-4">
             <img src="https://picsum.photos/id/36/600/400" alt="">
         </div>
         <!-- <div class="col-md-7">
             <p class="mt-4">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                 sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                 Aldus PageMaker including versions of Lorem Ipsum.
             </p>
         </div> -->
     </div> 
 </section>
 <section class="container-fluid">
    <h2 class="text-start mt-3">Subject information</h2>
        <p class="text-black">
            Fluid design, also known as fluid layout, is a web design technique that involves 
            designing a website layout using relative measurements, such as percentages or ems, instead 
            of fixed measurements like pixels. This approach allows web developers to create a flexible and 
            adaptable design that can adjust to various screen sizes and device types.
        </p>
 </section>
 <hr class="hr">

 <section class="container-fluid">
    <h2 class="text-start mt-3">Subject content</h2>
        <p class="text-black">
            1. Understanding CSS Box Model
            2. Creating fluid designs that are accessible to users
            3. Performance Optimization
        </p>
 </section>
 <hr class="hr">

 <section class="container-fluid">
    <h2 class="text-start mt-3">Keywords</h2>
        <p class="text-black">
            fluid design, units, performance, optimization, media, CSS, accessibility 
        </p>
 </section>
 
 <hr class="hr">

    <div class="text-center mt-5">
        <router-link type="button" to="/practice/demo-page" class="btn btn-success">Practice</router-link>
        <router-link type="button" to="/learning/demo-page" class="btn btn-success ms-2">Learning</router-link>
    </div>

</div>
</template>

<script>
export default {  
name: 'FirstLesson'
}
</script>

<style scoped>
#lessonbgColor{
    background-color: rgb(238, 238, 238);
}

.hr{
    width: 400px;
    /* margin-left:700px ; */
    margin: 0 auto;
}

/* #IMG{
    justify-content: center;
} */
</style>