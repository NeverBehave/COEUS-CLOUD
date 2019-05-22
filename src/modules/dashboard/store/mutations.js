export default {
    deviceNum: (state, num) => {
        state.data.devices = num
    },
    onlineDeviceNum: (state, num) => {
        state.data.online = num
    },
    taskNum: (state, num) => {
        state.data.tasks = num
    },
    runedTaskNum: (state, num) => {
        state.data.runed = num
    },
    resourceNum: (state, num) => {
        state.data.resources = num
    },
    passedResourceNum: (state, num) => {
        state.data.passed = num
    }
}