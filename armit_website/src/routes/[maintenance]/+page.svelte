<script>
    // const getProductcatalogue = async () => {
    //     const res = await fetch("src/JSON/produktkatalog_sv.json");
    //     const data = await res.json();
    //     return data;
    // }

    // UNCOMMENT THIS AND DIV FURTHER DOWN TO SEE SOME A CRAZY ANIMATION
    // let imgElement;

    // function handleMouseMove(event) {
    //     const containerRect = imgElement.getBoundingClientRect();
    //     const containerCenterX = containerRect.left + containerRect.width / 2;
    //     const containerCenterY = containerRect.top + containerRect.height / 2;
    
    //     const angleX = (event.clientY - containerCenterY) * 0.05;
    //     const angleY = (event.clientX - containerCenterX) * -0.05;
    
    //     imgElement.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    // }
  
    // function handleMouseLeave() {
    //     imgElement.style.transform = 'none';
    // }

    // window.addEventListener('mousemove', handleMouseMove);
    // window.addEventListener('mouseleave', handleMouseLeave);
</script>

<div class="relative h-screen mt-2">
    <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <img class="h-1/3  lg:max-h-96 md:max-h-72 sm:max-h-44 mx-auto" alt="ArmIT Logo" src="/ArmITLogga.png"  />
        
        <p class="text-sm font-semibold my-4">This site is under construction</p>

        <p class="mb-8">In the meantime.. check this <a class="underline" href="https://chalmers.it">link</a> out</p>

        <p class="animate-bounce w-32 text-5xl mx-auto">🛠️</p>
    </div>
</div>

<!-- ALSO UNCOMMENT THIS TO SEE THE CRAZY ANIMATION -->
<!-- <div class="flex justify-center items-center h-screen">
    <div class="text-center">
        <img 
            class="h-1/3 max-h-72 mx-auto" 
            alt="ArmIT Logo" 
            src="/ArmITLogga.png" 
            bind:this={imgElement}
        />
        
        <p class="text-sm font-semibold my-4">This site is under construction</p>

        <p class="mb-8">In the meantime.. check this out <a class="underline" href="https://chalmers.it">link</a></p>

        <p class="animate-spin w-32 py-4 text-5xl mx-auto">🛠️</p>
    </div>
</div> -->


<!-- <div> -->
    <!-- {#await getProductcatalogue()}
    <p>Loading...</p>
    {:then data} 
    {#each data.products as product}
    <div class=" grid-cols-3 max-w-sm bg-cyan-800 text-center justify-center">
        <div>
            <h1 class="justify-center text-white font-semibold">{product.itemName}</h1>
        </div>
        
    </div>
    {/each}
    
    {/await} -->
<!-- </div> -->
 




  <style lang="postcss">
    :global(html) {
        @apply bg-blue-200;
    }
  </style>