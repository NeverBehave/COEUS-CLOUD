<template>
    <div>newTask</div>
</template>
<template>
    <el-row>
        <el-col>
            <NewTaskCard/>
        </el-col>
    </el-row>
</template>

<script>
import NewTaskCard from '../components/Cards/NewTask'

export default {
  name: 'NewTask',
  components: {
    NewTaskCard
  }
}
</script>
