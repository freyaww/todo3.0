<template>
    <header class="main-header">
        <h1>Todo</h1>
    </header>
</template>

<!--<script>-->
    <!--export default {-->
        <!--computed: {-->
<!--//            用了cssModules之后编译后会生成这么一段-->
            <!--$style() {-->
                <!--return {-->
                    <!--mainHeade: '通过cssModules配置的css类名'-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<style lang="stylus" scoped>
    .main-header
        text-align center
        h1
            font-size 100px
            color rgba(175,47,47,0.4)
            font-weight 400
            margin 20px
</style>

<!--<docs>  这个用法是当自定义组件库的时候，可以自定义标签进行说明之类的，维护公用代码-->
    <!--###1212312312-->
<!--</docs>-->
