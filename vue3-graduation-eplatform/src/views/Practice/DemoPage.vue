<template>
    <div class="container-fluid">
        <div class="row align-items-start">
            <div class="col-12">
                <h2>Practice</h2>
                <iframe src="http://localhost:8080" frameborder="0" width="100%" height="500px"></iframe>
            </div>
        </div>

        <div class="row " id="editor-nav">
            <div class="col-md-3 mt-3" >
                <!-- <button class="btn btn-dark me-2 ms-2">Dark mode</button> -->
                <!-- <button class="btn btn-light">Light mode</button> -->
                <!-- <button class="btn btn-success"><i class="bi bi-play-fill"></i>Run</button> -->
                <h5>Editor</h5>
            </div> 
            <div class="col-md-3 mt-3"><h5>Current practice lesson:</h5></div>
                <div class="col-md-3 mt-2 mb-2">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                        <option value="1">Lesson name</option>
                        <option value="2">Lesson name</option>
                        <option value="3">Lesson name</option>
                </select>
           </div>     
           <div class="col-md-3 mt-2">
             <button class="btn btn-dark me-2 ms-2">HTML</button>
                <button class="btn btn-light">CSS</button>
           </div>     
        </div>

        <div class="row">
            <div class="col">
                <div class="editor" contenteditable="">
                    Delete and write your code...
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>

export default {
    name: 'DemoPage'
}

const left = document.querySelector(".left")//the over araching div for editor
const right = document.querySelector(".right")//overachring for iframe
const  editor = document.querySelector(".editor")//contetnt editable
const iframe = document.querySelector("iframe")//second
const button = document.querySelector('button')

// button.addEventListener("click", function(){
//     var html = first.textContent
//     iframe.src ="data:text/html;charset=utf-8," + encodeURI(html)
// })


    

</script>



<style scoped>
#editor-nav{
    background-color: #06AD99;
}

.editor{
    width: 100%;
    height: 500px;
    background-color: #e4e4e4;
}
</style>

