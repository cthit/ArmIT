<!-- These cards will be displayed on the main page -->

<script>
    import {getProductcatalogue} from "../scripts/getProductcatalogue"
</script>

{#await getProductcatalogue("en")}
<div class="flex h-screen w-screen items-center justify-center text-center font-semibold text-3xl">Loading Content...</div>

{:then data}
<section class="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center justify-center gap-y-10 md:gap-y-8 lg:gap-y-10 gap-x-4 md:gap-x-8 lg:gap-x-10 max-w-screen-xl mt-10 mb-5">   
    
    <!-- First Card - Lunch Seminars -->
    <div class="relative text-clip w-fit max-w-[18rem] bg-[#1F43FF] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl ">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/circle.png" alt="" class="h-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[0].iconPath}" alt="teacher with whiteboard " class="relative h-42 object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-fit max-w-[18rem] mb-2">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].description}</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Second Card - Hackatons -->
    <div class="relative text-clip w-fit max-w-[18rem] bg-[#00FFC2] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl ">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0 w-full">
                <img src="/bg_hackatons.png" alt="" class=" h-40 w-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[1].iconPath}" alt="</>" class="relative h-42 object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-fit max-w-[18rem] mb-2 pb-2">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Third Card - Not Decided -->
    <div class="relative text-clip w-fit max-w-[18rem] bg-[#361497] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl ">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0 w-full">
                <img src="" alt="" class=" h-40 w-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[2].iconPath}" alt="ALT FOR IMAGE" class="relative h-42 object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-fit max-w-[18rem] mb-2 pb-2">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[2].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[2].description}</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Forth Card - Not Decided -->
    <div class="relative text-clip w-fit max-w-[18rem] bg-[#EB8628] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl ">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0 w-full">
                <img src="" alt="" class=" h-40 w-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[2].iconPath}" alt="ALT FOR IMAGE" class="relative h-42 object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-fit max-w-[18rem] mb-2 pb-2">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[2].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[2].description}</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Fifth Card - Not Decided -->
    <div class="relative text-clip w-fit max-w-[18rem] bg-[#BB4DFF] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl ">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/circle.png" alt="" class="h-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[0].iconPath}" alt="teacher with whiteboard " class="relative h-42 object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-fit max-w-[18rem] mb-2">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].description}</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Sixth Card - Not Decided -->
    <div class="relative text-clip w-fit max-w-[18rem] bg-[#FFFA87] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl ">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/circle.png" alt="" class="h-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[0].iconPath}" alt="teacher with whiteboard " class="relative h-42 object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-fit max-w-[18rem] mb-2">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].description}</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Seventh Card - Not Decided -->
    <div class="relative text-clip w-fit max-w-[18rem] bg-[#463C4B] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl ">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0 w-full">
                <img src="" alt="" class=" h-40 w-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[1].iconPath}" alt="</>" class="relative h-42 object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-fit max-w-[18rem] mb-2 pb-2">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Eight Card - Not Decided -->
    <div class="relative text-clip w-fit max-w-[18rem] bg-[#FF6262] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl ">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0 w-full">
                <img src="" alt="" class=" h-40 w-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[1].iconPath}" alt="</>" class="relative h-42 object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-fit max-w-[18rem] mb-2 pb-2">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
                </div>
            </div>
        </a>
    </div>

    

    

    
    
    
    
</section>

{/await}
