<script>
	import { page } from '$app/stores';
</script>

<div class="select-none">
    <div class="text-center">
        <img draggable="false" class=" h-1/3  lg:max-h-96 md:max-h-72 sm:max-h-44 mx-auto" alt="ArmIT Logo" src="/logos/armit/lg_armit_plain.png"  />
        
        <p class="text-3xl font-semibold my-4">{$page.status}: {$page.error.message}</p>

        <p class="mb-8">You have visited a non-existent page <a class="underline" href="/home2">take me home</a></p>

        <p class="animate-bounce w-32 text-5xl mx-auto">💃</p>
    </div>
</div>
