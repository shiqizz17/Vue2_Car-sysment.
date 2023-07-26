const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejsi4y64/",
            name: "nodejsi4y64",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejsi4y64/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "汽车租赁系统"
        } 
    }
}
export default base
