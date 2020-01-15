<template>
    <div class="b-btn" @click="onClick">
        <slot name="icon"/>
        <slot/>
    </div>
</template>

<script>
    export default {
        methods: {
            onClick(event){
                this.$emit('click',event);
                console.log(event)
            }
        }
    }
</script>
<style>
    .b-btn{
        cursor: pointer;
    }
</style>
