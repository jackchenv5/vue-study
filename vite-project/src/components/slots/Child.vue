<template>
        <slot></slot>
        <div>----------------------</div>
        <slot name="jack"></slot>
        <div>--------------------------------</div>
        <slot name="cc" prop1="test" :prop2="prop"></slot>
</template>
<script setup>
    const prop = ()=> 'test2';
</script>