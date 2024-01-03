<template>
    <div class="container mx-auto">
        <div v-if="!isConnected" class="card md:w-[500px] bg-base-100-50 shadow-xl mx-auto my-[100px] p-10">
            <div class="text-center">
                <h2 class="text-2xl font-bold">Welcome to Deif's Estfor Plaza!</h2>
                <p class="text-lg my-5">Here you'll find all the information about the Kingdom and its inhabitants.</p>
                <p class="text-lg my-5">Maybe you wish to know how long you can survive against the frightening Obgora, or how many hours of mastering smithing Adamantine Shields will unlock the knowledge to craft Runite armour? Then enter the Plaza, friend, you're in good company.</p>
                <p class="text-lg">Connect your wallet below</p>
            </div>
            <div class="text-center my-4">
                <button class="btn btn-primary" @click="open()">Connect Wallet</button>
            </div>
        </div>
        <div v-else-if="loading" class="mx-auto my-[100px] w-[500px] text-center">
            <span class="loading loading-spinner text-primary loading-md mx-auto"></span>
        </div>
        <div v-else>
            {{ globalData }}
            {{ allFullAttireBonuses }}
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { watchAccount } from '@wagmi/core'
import { useWeb3Modal } from '@web3modal/wagmi/vue'
import { onMounted, ref } from 'vue'
import { getGlobalData } from '../utils/api'
import { allFullAttireBonuses } from '../utils/fullAttireBonuses';

const loading = ref(false)
const { open } = useWeb3Modal()
const isConnected = ref(false)
const globalData = ref({})

const init = async () => {
    try {
        loading.value = true
        isConnected.value = true
        globalData.value = (await getGlobalData()).coreData
    } catch (e) {
        console.log(e)  
    } finally {
        loading.value = false
    }
}

onMounted(init)
watchAccount(init)
</script>

<style>
.toast {
    z-index: 99999 !important;
}
</style>
