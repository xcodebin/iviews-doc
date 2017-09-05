<template>
    <i-article>
        <article>
            <h1>安装</h1>

            <Anchor title="NPM 安装" h2></Anchor>
            <p>推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，我们也推荐使用 ES2015。</p>
            <i-code lang="auto" bg>{{ code.install.install }}</i-code>
            <p>如果您使用了 NPM 安装，并使用 webpack 作为构建工具，请继续阅读快速上手章节。</p>
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