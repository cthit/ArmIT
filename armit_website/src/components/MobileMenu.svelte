<script>
    import { fade } from 'svelte/transition';
    import { closeMobileMenu } from "../scripts/toggleMenu"
</script>

<div transition:fade ={{duration: 150}} class="lg:hidden flex flex-col w-full h-full bg-white overflow-y-hidden fixed">
    <nav class="flex w-full h-32 text-white">
        <div class="flex basis-1/2 justify-start items-center p-12 text-xl m-0 font-inter">
            <a href="/" class="flex shrink-0 items-center">
                <img class="h-28" alt="ArmIT Logo" src="/ArmITLogo_smurf.png"/>
            </a>
        </div>
        <div class="flex w-full justify-end p-12 items-center">
            <button on:click={() => closeMobileMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a2d45" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="hover:stroke-[#295891] transition-all feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
    </nav>
    <header class="flex h-full font-inter text-navtext">
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-grow justify-end flex-col gap-8 w-full pl-10">
                <a href="mailto:armit@chalmers.it" class="hover:text-[#295891] transition-all flex text-4xl">
                    Contact us
                </a>
                <a href="https://www.date-it.se" class="hover:text-[#295891] transition-all flex text-4xl">
                    DatE-IT
                </a>
            </div>
            <div class="flex flex-col flex-grow justify-end w-full text-navtext">
                <div class="flex items-center justify-center w-full gap-8 mb-8">
                    <a href="https://www.facebook.com/armitchalmers">
                        <i class="hover:text-[#295891] transition-all fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a href="https://www.instagram.com/armit_chalmers/">
                        <i class="hover:text-[#295891] transition-all fa-brands fa-instagram fa-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/armit/">
                        <i class="hover:text-[#295891] transition-all fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                </div>
            </div> 
        </div>
    </header>
</div>