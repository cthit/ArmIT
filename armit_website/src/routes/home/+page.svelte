<script>
    import Menu from "../../components/Menu.svelte"
    import MobileMenu from '../../components/MobileMenu.svelte';
    import Cards from '../../components/Cards.svelte'
    import Partners from "../../components/Partners.svelte";
    import Divider from "../../components/Divider.svelte";
    import Footer from "../../components/Footer.svelte";
    import OurCoreValues from "../../components/OurCoreValues.svelte"
    import {menuToggler} from "../../store/menuStore";
    import { onDestroy } from "svelte";
    let visible = false;

    const unsubscribe = menuToggler.subscribe(value => {
        visible = value;
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="flex flex-col h-auto w-full max-w-full max-h-full">
    <div class="flex w-full h-screen">
        <Menu/>
        {#if visible}
            <MobileMenu/>
        {/if}  
    </div>
    <Divider/>
    <!-- <div class="flex flex-col gap-10 justify-center w-full h-screen">
        <div class="flex justify-center item-center font-inter font-bold text-5xl lg:text-6xl text-[#1F1F3A]">
            Our services
        </div>
        <Cards/>
    </div> -->
    <Cards/>
    <OurCoreValues/>
    <div class="flex w-full h-screen">
        <Partners/>
    </div>
    <div class="custom-shape-divider-bottom-1706465473 w-full overflow-hidden block fill-[#060928] bg-[#FFF] h-[24px] lg:h-[48px] w-[calc(100% + 1.3px)]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
    </div>
    <div class="flex w-full h-[40vh]">
        <Footer/>
    </div>
</div>

