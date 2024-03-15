<template>
    <Child>
        <template #[getSlot2]="data"> parent jack {{ data.prop1 }}</template>
        <!-- <template #cc="prop"> parent cc {{ prop.prop1 }} {{ prop.prop2() }}</template> -->
    </Child>
</template>
<script setup>
    import Child from './Child.vue';
    import { ref } from 'vue';
    // 通过动态插槽名获取插槽 #[Function or ref or string ] v-slot:[[Function or ref or string ]]
    const getSlot = ()=>{
        console.log('i am slot getter ');
        return 'jack'
    };
    function getSlot1(){
        console.log('i am slot getter1');
        return 'jack'
    }
    //ref 获取动态插槽名
    const getSlot2 = ref('jack');
    setTimeout(()=>{getSlot2.value = 'cc'},2000)
</script>
