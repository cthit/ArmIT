<script>
    import Menu from '../components/Menu.svelte'
    import MobileMenu from '../components/MobileMenu.svelte'
    import Cards from '../components/Cards.svelte'
    import OurCoreValues from '../components/OurCoreValues.svelte'
    import MeetTheTeam from '../components/MeetTheTeam.svelte'
    import Partners from '../components/Partners.svelte'
    import Footer from '../components/Footer.svelte'
    import Divider from '../components/Divider.svelte'
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { getProductcatalogue } from "../scripts/getProductcatalogue"
    import {menuToggler} from '../store/menuStore'
    import { onDestroy } from "svelte";
    let visible = false;

    const unsubscribe = menuToggler.subscribe(value => {
        visible = value;
    });

    onDestroy(() => {
        unsubscribe();
    });

    let maintenanceMode = false; 

    if(maintenanceMode == true && browser) {
        goto("/maintenance");
    }
    
</script>
<!-- Example of loading items from the product catalogue -->
<!-- <div>
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
</div> -->

<div class="flex flex-col h-auto w-full max-w-full max-h-full overflow-hidden overscroll-contain">
    <section id="home">
    <div class="flex w-full h-screen">
            <Menu/>
            {#if visible}
                <MobileMenu/>
            {/if}  
        </div>
    </section>

    <Divider/>

    <section
        id="services" 
        class="flex flex-col items-center bg-gradient-to-b from-white to-[#dbe7ff] text-center pt-20 pb-20">
        <p class="font-bold text-5xl mb-12">Explore Our Products</p>
        <Cards/>
        <p class="underline text-lg font-bold text-black/75 mt-8">+ and many more!</p>
        <a href="https://www.youtube.com/shorts/2p2HTSUF-NA" class="pt-12 pb-20">
            <button class=" flex gap-x-2 rounded-full px-6 py-4 bg-blue-700 
                            hover:scale-110 hover:shadow-md hover:bg-blue-800
                            transition duration-300
                            ">
                <p class="text-white font-semibold text-lg">Browse the Full Catalogue</p> 
                <img src="/openInNewTabIcon.png" alt="open in new tab">
            </button>
        </a>
    </section>
    
    <section id="values">
        <!-- possible to change so that background is decided here, instead of in component-->
        <OurCoreValues/>
    </section>

    <section 
        id="team"
        class="bg-gradient-to-b from-[#F8FAFE] to-[#C5E6FF] pt-20 pb-40">
        <MeetTheTeam/>
    </section>
    
    <section
        id="partners" 
        class="flex w-full h-screen">
        <Partners/>
    </section>

    <div class="custom-shape-divider-bottom-1706465473 w-full overflow-hidden block fill-[#060928] bg-[#FFF] h-[24px] lg:h-[48px] w-[calc(100% + 1.3px)]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
    </div>
    <section
        id="footer" 
        class="flex w-full h-[40vh]">
        <Footer/>
    </section>
</div>

