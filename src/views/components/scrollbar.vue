<template>
    <i-article>
        <article>
            <h1>虚拟滚动条</h1>
            <Anchor title="概述" h2></Anchor>
            <p>虚拟的滚动条，用于代替原生滚动条</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Scrollbar style="width:400px;height:400px;">
                        <div style="height:500px;width:500px;background-color: #a2ff82"></div>
                    </Scrollbar>
                </div>
                <div slot="desc">
                    <p>基本用法。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Rate props" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>classes</td>
                        <td>样式</td>
                        <td>string</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>滚动速度</td>
                        <td>Number</td>
                        <td>53</td>
                    </tr>
                    <tr>
                        <td>nover</td>
                        <td>是否不要垂直滚动条</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>nohor</td>
                        <td>是否不要横向滚动条</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="Rate events" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>返回值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>scroll</td>
                        <td>滚动时的top值</td>
                        <td>顶部top值</td>
                    </tr>
                    <tr>
                        <td>scrollToEnd</td>
                        <td>滚到底时触发</td>
                        <td>顶部最低位置end</td>
                    </tr>
                    <tr>
                        <td>verticalScr</td>
                        <td>垂直滚动条滚动时顶部位置</td>
                        <td>top</td>
                    </tr>
                    <tr>
                        <td>horizontalScr</td>
                        <td>横向滚动条滚动时左侧位置</td>
                        <td>left</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
	import iArticle from '../../components/article.vue';
	import iCode from 'iCode';
	import Demo from '../../components/demo.vue';
	import Code from '../../code/scrollbar';
	import Anchor from '../../components/anchor.vue';

	export default {
		components: {
			iArticle,
			iCode,
			Demo,
			Anchor
		},
		data () {
			return {
				code: Code,
				value: 0,
				valueHalf: 2.5,
				valueText: 3,
				valueCustomText: 3.8,
				valueDisabled: 2
			}
		},
		methods: {

		}
	};
</script>