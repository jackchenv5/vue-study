<template> 
    <div id="box"></div> 
    <button id="click">click</button>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    function click() {  
        var box:HTMLElement | null  = document.getElementById('box');  
        let click:HTMLElement |null   = document.getElementById('click');
        if(!click || !box ) return;
        click.addEventListener('click',function(){
            Promise.resolve().then(()=>{console.log("p 1")})
            console.log("click1 envet !!!")
            box.style.transform = 'translateX(1000px)';
            box.style.transition = 'transform 2s ease-in-out';
            box.style.transform = 'translateX(500px)';
        })
        click.addEventListener('click',function(){
            Promise.resolve().then(()=>{console.log("p 2")})
            console.log("click2 envet !!!")
        })
        click.click();
    }  
   onMounted(()=>{
    click();

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