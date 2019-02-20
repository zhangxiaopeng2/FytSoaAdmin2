function alertExtention(_this,content,title="警告"){
    _this.$alert(content, title, {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
}
export {
    alertExtention
}