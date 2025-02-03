<script>
    import { openMobileMenu } from "../scripts/toggleMenu"
</script>

<div class="flex flex-col w-full h-screen bg-no-repeat bg-cover lg:bg-header bg-header-mobile absolute overflow-hidden" id="menu">
    <nav class="flex w-full h-24 2xl:h-32 text-white">
        <div class="flex basis-1/3 justify-start items-center p-12 text-xl m-0 font-inter">
            <a href="/" class="flex shrink-0 items-center" draggable="false">
                <img class="2xl:h-28 h-24 pt-2" alt="ArmIT Logo" src="/logos/armit/lg_armit_plain.png" draggable="false"/>
            </a>
        </div>
        <div class="flex-grow justify-end p-12 gap-20 items-center text-xl m-0 font-inter lg:flex hidden">
            <a href="#services" class="hover:opacity-50 transition-opacity drop-shadow-lg" draggable="false">Services</a>
            <a href="#team" class="hover:opacity-50 transition-opacity drop-shadow-lg" draggable="false">Team</a>
            <a href="https://date-it.se/" target="_blank" class="hover:opacity-50 transition-opacity drop-shadow-lg" draggable="false">DatE-IT</a>
            <a href="/contact" class="px-8 py-3 drop-shadow-xl leading-none bg-[#060928] hover:bg-nav transition-all lg:mt-0 rounded-full" draggable="false">Contact</a>
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
                <div class="flex flex-grow justify-end flex-col gap-6 w-full lg:pl-32 2xl:pl-64">
                    <div class="flex 2xl:text-8xl text-6xl lg:justify-start lg:text-start text-center justify-center font-bold">
                       We are ArmIT
                    </div>
                    <div class="flex md:text-2xl text-xl lg:justify-start lg:w-96 w-full lg:text-start text-center justify-center">
                        The corporate relations committee for IT students in Chalmers
                    </div>
                    <div class="flex w-full md:text-start lg:justify-start justify-center items-center">
                        <a href="#services" class="flex justify-center px-8 py-3 pb-4 lg:w-1/3 w-2/5 leading-none drop-shadow-xl hover:bg-[#EDEDED] transition-all bg-white text-navtext lg:mt-0 rounded-full" draggable="false">Our services</a>
                    </div>
                </div>
            </div>
            <div class="row-span-3 lg:flex hidden items-center">
                <img class="w-auto 2xl:pb-12 h-auto z-10" alt="Smurf" sizes="(max-width:1280px) 35vh, 50vh" src="/smurfs/header_smurf.png/" draggable="false"/>
            </div>
            <div class="flex bg-transparent col-span-2 items-center">
                <div class="flex flex-col justify-center lg:justify-end lg:text-start text-center lg:pl-32 2xl:pl-64 gap-2 w-full text-navtext 2xl:text-2xl lg:text-xl">
                    <h3>
                        Trusted by 
                    </h3>
                    <div class="w-full max-w-5xl px-4 md:px-6">
                        <div class="w-3/4 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
                            <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                                <li>
                                    <img class="w-[128px] h-auto" alt="Accenture" src="/logos/company/lg_ericsson.svg"/>
                                </li>
                                <li>
                                    <img class="w-[192px] h-auto" alt="Centiro" src="/logos/company/lg_centiro.png"/>
                                </li>
                                <li>
                                    <img class="w-[192px] h-auto" alt="Cygni" src="/logos/company/lg_cygni.png"/>
                                </li>
                                <li>
                                    <img class="w-[192px] h-auto" alt="Opera" src="/logos/company/lg_opera_gx.png"/>
                                </li>
                            </ul>    
                            <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                                <li>
                                    <img class="w-[192px] h-auto" alt="Accenture" src="/logos/company/lg_ericsson.svg"/>
                                </li>
                                <li>
                                    <img class="w-[192px] h-auto" alt="Centiro" src="/logos/company/lg_centiro.png"/>
                                </li>
                                <li>
                                    <img class="w-[128px] h-auto" alt="Cygni" src="/logos/company/lg_cygni.png"/>
                                </li>
                                <li>
                                    <img class="w-[192px] h-auto" alt="Opera" src="/logos/company/lg_opera_gx.png"/>
                                </li>
                            </ul>               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</div>