let code = {};

code.base = `
<template>
     <Scrollbar style="width:400px;height:400px;">
         <div style="height:500px;heigh:500px;background-color: #a2ff82"></div>
     </Scrollbar>
</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
`;

code.half = `
<template>
    <Rate allow-half v-model="valueHalf"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                valueHalf: 2.5
            }
        }
    }
</script>
`;

code.text = `
<template>
    <Row>
        <Col span="12">
            <Rate show-text v-model="valueText"></Rate>
        </Col>
        <Col span="12">
            <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                valueText: 3,
                valueCustomText: 3.8
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Rate disabled v-model="valueDisabled"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                valueDisabled: 2
            }
        }
    }
</script>
`;

export default code;