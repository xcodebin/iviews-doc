<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="17">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                  <i-col span="3">
                    <Affix :offset-top="75">
                      <div class="catalogue" v-show="list.length">
                        <card dis-hover>
                          <div class="catalogue-title">
                            <template v-if="lang === 'zh-CN'">目录</template>
                            <template v-else>Catalogue</template>
                          </div>
                          <div class="catalogue-content">
                            <ul>
                              <li v-for="item in list">
                                <a :href="'#' + item.path" @click.stop.prevent="handleClickLink(item.path)">{{ item.title }}</a>
                              </li>
                              <li v-if="need_api">
                                <a href="#API" @click.stop.prevent="handleClickLink('API')">API</a>
                              </li>
                            </ul>
                          </div>
                        </card>
                      </div>
                    </Affix>
                  </i-col>
                </Row>
            </div>
        </div>
        <Modal v-model="donate" v-if="lang === 'zh-CN'" title="支持 iView 的开发" @on-ok="handleModalClose" @on-cancel="handleModalClose" class-name="vertical-center-modal">
            <div class="ivu-article">
                <p>iView 是采用 MIT 许可的开源项目，您可以在个人或企业项目中免费使用。不过，如果您觉得 iView 对您的项目带来了帮助，提高开发效率，可以用捐助来表示您的谢意：)</p>
                <p>您可以用公司的名义进行赞助，赞助信息将在文档页展示。联系邮箱 <a href="mailto:admin@aresn.com">admin@aresn.com</a></p>
                <h3>个人可使用 微信 或 支付宝 捐助：</h3>
                <div>
                    <img src="../images/pay.png" style="width: 100%">
                </div>
            </div>
        </Modal>
        <Modal v-model="donate" v-if="lang !== 'zh-CN'" title="Donate iView project" @on-ok="handleModalClose" @on-cancel="handleModalClose" class-name="vertical-center-modal">
            <div class="ivu-article">
                <p>iView is an open source project with MIT licenses that you can use for free in your personal or business projects. However, if you feel that iView has helped your project to improve development efficiency, you can use donations to express your gratitude: )</p>
                <h3>Use Wechat or Alipay to donate：</h3>
                <div>
                    <img src="../images/pay.png" style="width: 100%">
                </div>
            </div>
        </Modal>
        <Modal v-model="ask" title="提问" @on-ok="handleModalClose" @on-cancel="handleModalClose" :styles="{top: '20px'}">
            <div class="ivu-article">
                <p>如果您在开发中遇到问题，包括但不限于 iView、JavaScript、Vue、Webpack 等相关技术，可以加入小密圈和我们一对一提问，收到问题后，我们会在 30 分钟内解答。</p>
                <p>因为提供高质量的答疑服务，所以我们暂时收费 <span style="color: #f50">￥98/年</span> 。</p>
                <p>如果您不愿意付费，可以在 GitHub 提交与 iView 相关的 issues，或到 <a href="https://segmentfault.com/t/iview" target="_blank">社区</a>讨论。</p>
                <div>
                    <img src="../images/miquan.jpg" style="width: 300px;margin: 0 auto;display: block;">
                </div>
            </div>
        </Modal>
        <!-- todo 提问 -->
        <!--<div class="ask-question" @click="ask = true" v-if="lang === 'zh-CN'">-->
            <!--<Icon type="help-circled"></Icon>-->
            <!--<p>{{ $t('index.ask') }}</p>-->
        <!--</div>-->
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navigate from '../config/navigate';
    import navMenu from './menu.vue';
    import bus from './bus';

    export default {
        components: {
            Navigate,
            navMenu
        },
        data () {
            return {
                list: [],
                need_api: false,
                donate: false,
                ask: false,
                activeKey: '',
                lang: this.$lang
            }
        },
        methods: {
            handleModalClose () {
                this.donate = false;
            },
            handleAskClose () {
                this.ask = false;
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/install-en',
                    '/docs/guide/start',
                    '/docs/guide/start-en',
                    '/docs/guide/i18n',
                    '/docs/guide/i18n-en',
                    '/docs/guide/theme',
                    '/docs/guide/theme-en',
                    '/overview',
                    '/overview-en',
                    '/docs/guide/update',
                    '/docs/guide/update-en'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.activeKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.activeKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.activeKey = 'live';
                }  else {
                    this.activeKey = 'guide';
                }
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            },
            // 控制锚点跳转
            handleClickLink (id) {
                const top = document.getElementById(id).offsetTop;
                window.location.hash = id;
                let scroll_top = top + 15;
                if (id === 'API') scroll_top -= 150;
                window.scrollTo(0, scroll_top);
            }
        },
        created () {
            this.lang = this.$lang;
        },
        mounted () {
            this.updateActiveNav();

            const examples = this.$slots.default[0].elm.querySelectorAll('.example');

            // 有示例时，显示示例的目录，没有，显示标题为目录
            if (examples.length) {
                this.need_api = true;
                for (let i = 0; i < examples.length; i++) {
                    const title = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                    this.list.push({
                        title: title,
                        path: title
                    });
                }
            } else {
                this.need_api = false;
                const headers = this.$slots.default[0].elm.querySelectorAll('.anchor');
                for (let i = 0; i < headers.length; i++) {
                    const title = headers[i].querySelectorAll('h2')[0];
                    if (title) {
                        const title_name = title.innerHTML;
                        const path = headers[i].querySelectorAll('h2')[0].getAttribute('id');
                        this.list.push({
                            title: title_name,
                            path: path
                        });
                    }
                }
            }

            bus.$on('on-donate-show', () => {
                this.donate = true;
            })
        }
    }
</script>
