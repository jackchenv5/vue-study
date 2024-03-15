<template> 
    <div id="box"></div> 
</template>

<script setup>
    import { onMounted } from 'vue';
    function moveBox() {  
        var box = document.getElementById('box');  
        var left = parseInt(box.style.left, 10);  
        if(left >= 1600 || isNaN(left) ){
            box.style.left = '0px';
            left = 0;
        }
        box.style.left = (left + 1) + 'px';  
    }  
    function loop(){
        moveBox()
        setTimeout(loop,500)
    }
   onMounted(()=>{
    loop();
   })
    
</script>

<style>  
#box {  
    position: absolute;  
    width: 20px;  
    height: 20px;  
    background-color: red;  
    left: 0px;  
    top: 0px;  
}  
</style>  