<template>
    <div id="djws-footer">
        <div class="navbar fixed-bottom">
            <v-footer class="pa-3">
                <v-spacer></v-spacer>
                <p class="navbar-nav ml-auto">
                    <small><a href="vimm0.github.io">Vimm0</a> Powered by Django</small>
                </p>
                <div>&copy; {{ new Date().getFullYear() }}</div>
            </v-footer>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'djws-footer',
    }
</script>
<style lang="scss">

</style>
