<script>
    import {menuToggler} from "../store/menuStore"
    function openMobileMenu(){
        document.body.classList.toggle("overflow-hidden");
        menuToggler.set(true);
    }
</script>

<div class="flex flex-col w-full h-screen bg-no-repeat bg-cover lg:bg-header bg-header-mobile absolute overflow-hidden" id="menu">
    <nav class="flex w-full h-32 text-white">
        <div class="flex basis-1/2 justify-start items-center p-12 text-xl m-0 font-inter">
            <a href="/" class="flex shrink-0 items-center">
                <img class="lg:h-28 h-24" alt="ArmIT Logo" src="/ArmITLogo_plain.png"/>
            </a>
        </div>
        <div class="flex-grow justify-end p-12 gap-20 items-center text-xl m-0 font-inter lg:flex hidden">
            <a href="/" class="hover:opacity-50 transition-opacity drop-shadow-lg ">Services</a>
            <a href="#" class="hover:opacity-50 transition-opacity drop-shadow-lg">Team</a>
            <a href="https://date-it.se/" target="_blank" class="hover:opacity-50 transition-opacity drop-shadow-lg">DatE-IT</a>
            <a href="#" class="px-8 py-3 drop-shadow-xl leading-none bg-navtext hover:bg-nav transition-all lg:mt-0 rounded-lg">Contact</a>
        </div>
        <div class="flex-grow justify-end p-12 items-center lg:hidden flex">
            <button on:click={() => openMobileMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:stroke-slate-300 transition-all feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </div>
    </nav>
    <header class="max-h-full h-full overflow-hidden flex font-inter text-white">
        <div class="grid grid-rows-3 grid-cols-2 w-full h-full">
            <div class="flex row-span-3 lg:col-span-1 col-span-2 justify-center items-center">
                <div class="flex flex-grow justify-end flex-col gap-4 w-full lg:pl-40">
                    <div class="flex 2xl:text-7xl text-4xl lg:justify-start lg:text-start text-center justify-center">
                        Chalmers' IT Corporate Relations Committee
                    </div>
                    <div class="flex md:text-2xl text-xl lg:justify-start lg:text-start text-center justify-center">
                        Building meaningful connections that bridge the corporate-student divide
                    </div>
                    <div class="flex w-full md:text-start lg:justify-start justify-center">
                        <a href="/" class="flex justify-center px-8 py-3 w-1/3 leading-none drop-shadow-xl hover:bg-[#EDEDED] transition-all bg-white text-navtext lg:mt-0 rounded-md">Our services</a>
                    </div>
                </div>
            </div>
            <div class="row-span-3 lg:flex hidden items-center">
                <img class="w-auto h-auto z-10" alt="Smurf" src="/smurf.png/"/>
            </div>
            <div class="flex bg-[#C6ECFF] col-span-2 items-center">
                <div class="flex flex-col flex-grow justify-center lg:justify-end lg:text-start text-center lg:pl-40 w-full lg:px-0 px-4 text-navtext 2xl:text-2xl lg:text-xl">
                    <h3 class="mt-2">
                        Trusted by 
                    </h3>
                    <div class="flex items-center lg:justify-start justify-center w-full gap-12">
                        <img class="h-auto w-1/3 md:w-1/6 max-h-full" alt="Centiro" src="/Centiro_logo.png"/>
                        <img class="h-auto w-1/3 md:w-1/6 max-h-full" alt="Opera" src="/Opera_GX_logo.png"/>
                        <img class="h-auto w-1/3 md:w-1/6 max-h-full mb-6" alt="Accenture" src="/Accenture_logo.png"/>
                    </div>
                </div> 
            </div>
        </div>
    </header>
</div>