<template>
    <div>
        <el-row
            type="flex"
            class="row-bg"
            justify="space-around"
        >
            <el-col
                :xs="2"
                :sm="4"
                :md="4"
                :lg="6"
                :xl="6"
            />
            <el-col
                :xs="14"
                :sm="10"
                :md="10"
                :lg="6"
                :xl="6"
            >
                <div class="grid-content full-width">
                    <router-view/>
                </div>
            </el-col>
            <el-col
                :xs="2"
                :sm="4"
                :md="4"
                :lg="6"
                :xl="6"
            />
        </el-row>
    </div>
</template>


<style lang="sass">
#form-footer 
    display: flex
    padding-top: 12px

#form-footer a 
    color: white
    text-decoration: none

#form-footer__right 
    margin-left: auto
</style>
