<template>
    <div class="container-fluid">
        <div class="left">
            <label for="">HTML <i class="fa-brands fa-html5"></i></label>
            <textarea class="form-control" placeholder="html code" id="html-code"></textarea>

            <label for="">CSS <i class="fa-brands fa-css3-alt"></i></label>
            <textarea class="form-control" placeholder="Css code" id="css-code"></textarea>

            <label for="">JavaScript <i class="fa-brands fa-square-js"></i></label>
            <textarea class="form-control" placeholder="js code" id="js-code"></textarea>
            
        </div>
        <div class="right">
            <label>Practice <i class="fa-solid fa-play"></i></label>
            <iframe id="output"></iframe>
        </div>

        <!-- <div class="row " id="editor-nav">
            <div class="col-md-3 mt-3" >
             
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
        </div> -->

        <!-- <div class="row">
            <div class="col">
                
            </div>
            
        </div> -->

    </div>
</template>

<script>

export default {
    name: 'DemoPage'
}




    

</script>



<style scoped>
.container-fluid{
    background-color:#454545 ;
    color: #fff;
    width: 100%;
    height: 100vh;
    padding: 20px;
    display: flex;
}

.left, .right{
    flex-basis: 50%;
    padding: 10px;
}
textarea{
    width: 100%;
    height: 28%;
    background: #1f1f1f;
    color: #fff;
    padding: 10px 20px;
    border: 0;
    outline: 0;
    font-size: 18px;
}

iframe{
    width: 100%;
    height: 95%;
    background: #fff;
    border: 0;
    outline: 0;
}
</style>

