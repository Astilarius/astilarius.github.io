<script setup>

</script>

<template>
    <footer class="footer flex flex-row gap-14 text-xs font-extralight justify-center underline text-white/30">
        <a class="footer__link" href="#">{{ $t('Terms of Use') }}</a>
        <a class="footer__link" href="#">{{ $t('Privacy Policy') }}</a>
        <a class="footer__link" href="#">{{ $t('Restore') }}</a>
    </footer>
</template>

<style scoped lang="scss">
@use "./../variables";

.footer {
    opacity: 0.3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3.5rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 200;
    text-decoration: underline;
    margin: 1.5rem 0 0.5rem 0;
    @media only screen and (min-height: 844px) {
        margin-bottom: 2.25rem;
    }
    .footer__link {
        color: variables.$white;
        text-decoration-thickness: 1px;
    }

    .ja & {
        @media only screen and (max-height: 667px) {
            font-size: 0.5rem;
        }
    }
    .de & {
        gap: 1rem;
    }
    .es & {
        gap: 2rem;
    }
    .fr & {
        margin: 0.5rem 0 0.5rem 0;
        @media only screen and (min-height: 844px) {
            margin-bottom: 1.25rem;
        }
    }
    .pt & {
        gap: 2.5rem;
    }
}
</style>
