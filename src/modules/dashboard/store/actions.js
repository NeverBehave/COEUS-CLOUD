import { status } from '@/api/dashboard'

export default {
    updateStatus({ commit }) {
        return status().then(res => {
            let { data } = res.response
            commit("deviceNum", data.devices)
            commit("onlineDeviceNum", data.online)
            commit("taskNum", data.tasks)
            commit("runedTaskNum", data.runed)
            commit("resourceNum", data.resources)
            commit("passedResourceNum", data.passed)
        })
    }
}