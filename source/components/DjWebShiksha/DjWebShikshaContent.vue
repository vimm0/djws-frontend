<template>
    <div id="main">
        <div class="container">
            <div class="row mt-3">
                <div class="col-md-8 col-lg-8">
                    <main-content></main-content>
                </div>
                <div class="col-md-4 col-lg-3">
                    <sidebar></sidebar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../Sidebar.vue'
    import MainContent from '../MainContent.vue'

    export default {
        name: 'main',
        components: {
            'sidebar': Sidebar,
            'main-content': MainContent,
        }
    }
</script>
<style lang="scss">

</style>
