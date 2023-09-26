<script>
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { getProductcatalogue } from "../scripts/getProductcatalogue"

    let maintenanceMode = false; 

    if(maintenanceMode == true && browser) {
        goto("/maintenance");
    }
    
</script>


<div>
    {#await getProductcatalogue("sv")}
    <p>Loading...</p>
    {:then data} 
    {#each data.products as product}
    <div class=" grid-cols-3 max-w-sm bg-cyan-800 text-center justify-center">
        <div>
            <h1 class="justify-center text-white font-semibold">{product.itemName}</h1>
            <h1 class="justify-center text-white font-semibold">{product.price}</h1>
            <h1 class="justify-center text-white font-semibold">{product.time}</h1>
        </div>
        
    </div>
    {/each}
    
    {/await}
</div>


  <style lang="postcss">
    :global(html) {
        @apply bg-blue-200;
    }
  </style>