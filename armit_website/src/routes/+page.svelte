<script>
    const getProductcatalogue = async () => {
        const res = await fetch("src/JSON/produktkatalog_sv.json");
        const data = await res.json();
        return data;
    }
</script>

<div class="w-full h-3/4 text-center items-center">
    <div class="flex w-full justify-center items-center py-8">
        <img class="h-1/3 max-h-72" alt="ArmIT Logo" src="/ArmITLogga.png"/>
    </div>

    <h1 class="text-3xl font-bold "> Welcome to ArmIT </h1>
    <p class=" text-sm font-semibold">This site is under construction 🛠️</p>
    <p>In the meantime.. check this out <a class="underline" href="https://chalmers.it">link</a> </p>

    {#await getProductcatalogue()}
    <p>Loading...</p>
    {:then data} 
    {#each data.products as product}
    <div class=" grid-cols-3 max-w-sm bg-cyan-800 text-center justify-center">
        <div>
            <h1 class="justify-center text-white font-semibold">{product.product}</h1>
        </div>
        
    </div>
    {/each}
    
    {/await}
    
</div>  




  <style lang="postcss">
    /*:global(html) {
        @apply bg-blue-200;
    }*/
  </style>