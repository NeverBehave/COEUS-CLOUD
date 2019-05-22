export default {
    images: state => state.images,
    deviceNum: state => state.data.devices,
    onlineDeviceNum: state => state.data.online,
    taskNum: state => state.data.tasks,
    runedTaskNum: state => state.data.runed,
    resourceNum: state => state.data.resources,
    passedResourceNum: state => state.data.passed
}
