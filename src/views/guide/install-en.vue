<template>
    <i-article>
        <article>
            <h1>Installation</h1>
            <Anchor title="npm" h2></Anchor>
            <p>Install iView with the node package manager. It can work with webpack and ES2015 very well.</p>
            <i-code lang="auto" bg>{{ code.install.install }}</i-code>
            <p>If you wish to use npm and webpack, please continue to read the next paragraph.</p>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {

        }
    }
</script>
