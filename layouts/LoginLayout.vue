<template>
    <section class=" bg-white min-h-screen overflow-y-hidden">
        <main class="grid h-[85vh] md:h-[100vh] bg-center bg-no-repeat bg-cover" style="background-image: url('https://mediaweb.sfo3.cdn.digitaloceanspaces.com/backgroundFollowme.jpg');">
                <login></login>
        </main>
        <footer class="flex justify-center items-center bg-white h-[15vh] md:hidden">
            <FooterLogin></FooterLogin>
        </footer>
    </section>
</template>

<script lang="ts" setup>
    import login from '~/components/loginCard.vue'
    import FooterLogin from '~/components/footer/footerLogin.vue'

</script>

