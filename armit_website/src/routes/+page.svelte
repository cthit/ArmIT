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
        class="relative flex flex-col items-center bg-white text-center pt-10 pb-20 overflow-hidden">
        <p class="font-bold text-5xl mb-12 z-10">Explore Our Products</p>
        <div class="z-10">
            <Cards/>
        </div>
        <a href="/PDF/productcatalogue_en.pdf" target="_blank" class="pt-12 pb-20 z-10">
            <button class="flex gap-x-2 rounded-full px-6 py-4 bg-[#1C72C1]
                        hover:scale-110 hover:shadow-md hover:opacity-75
                        border-black border-2
                        transition duration-300">
                <p class="text-white font-semibold text-lg">Browse the Full Catalogue</p> 
                <img src="/icons/png/openInNewTabIcon.png" alt="open in new tab">
            </button>
        </a>
    </section>

    
    <section 
        id="values"
        class="">
        <OurCoreValues/>
    </section>

    <section 
        id="team"
        class="bg-[#FFF] pb-40">
        <MeetTheTeam/>
    </section>
    
    <section
        id="partners" 
        class="flex w-full h-screen">
        <Partners/>
    </section>

    <div class="custom-shape-divider-bottom-1706465473 w-full overflow-hidden hidden fill-[#060928] bg-[#11528D] h-[24px] md:block lg:h-[48px] w-[calc(100% + 1.3px)]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
    </div>
    <section
        id="footer" 
        class="flex w-full h-[50vh] laptop:h-50vh 2xl:h-[40vh]">
        <Footer/>
    </section>
</div>

