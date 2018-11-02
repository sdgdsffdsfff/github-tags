Vue.component('list', {
    props: ['items'],
    template: '<div class=\"search-result-container\"><div class=\"col-12 d-block width-full py-4 border-bottom\" v-for=\"item in items\"><div class=\"d-inline-block mb-1\"><h3 class=\"null __bind_remark\"><a :href=\"item.project_name\">                    {{item.project_name}}</a></h3><div><el-tag                        v-for=\"tag in item.tags\"          size=\"small\"              type=\"success\">                    {{tag}}</el-tag></div></div></div></div>',
    methods: {

    }
});

