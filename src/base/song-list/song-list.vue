<template>
    <div class="song-list">
        <ul>
            <li class="item" @click="selectItem(song,index)" v-for="(song,index) in songs" :key="index">
                <div class="content">
                    <h2 class="name">{{song.name}}</h2>
                    <p class="desc">{{getDesc(song)}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        songs:{
            type:Array,
            default:[]
        }
    },
    methods:{
        selectItem(item,index){
this.$emit('select',item,index)
        },
        getDesc(song){
            return `${song.singer}·${song.album}`
        }
    }
}
</script>
