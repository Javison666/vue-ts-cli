import Modal from './default'
import ConfirmModal from './confirm'

export default {
    install: (Vue) => {
        // modal通用组件
        Vue.component('Modal', Modal)
        
        // 确认提示窗挂在body
        let ConfirmModalBox=Vue.extend(ConfirmModal)
        let instance = new ConfirmModalBox({
            el:document.createElement('div')
        })
        document.body.appendChild(instance.$el)
        Vue.prototype.$confirm = (d) => instance.show(d)
    }
}
