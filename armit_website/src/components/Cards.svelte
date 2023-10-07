<!-- These cards will be displayed on the main page -->

<script>
    import {getProductcatalogue} from "../scripts/getProductcatalogue"
</script>

{#await getProductcatalogue("en")}
<div class="flex h-screen w-screen items-center justify-center text-center font-semibold text-3xl">Loading Content...</div>

{:then data}
<!-- Remove below h1 later -->
<h1 class="text-black mt-20 text-center w-screen font-bold text-4xl mb-8">Explore Our Products</h1>

<section class="mx-auto justify-center justify-items-center 
                grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4   
                md:max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1240px]
                gap-x-[50px] gap-y-[50px]">
    
    <!-- First Card -->
    <div class="relative bg-[#1F43FF] overflow-hidden rounded-3xl
                w-full h-full max-w-[200px] max-h-[240px] 2xl:min-w-[240px] 2xl:min-h-[300px] 2xl:max-w-[300px] 2xl:max-h-[360px]
                duration-500 hover:scale-110 hover:shadow-xl">
        
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/circle.png" alt="" class="max-w-full"/>
            </div>

            <img draggable="false"  src="{data.products[0].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

            <div class="relative text-center mx-auto px-4 mb-2 -mt-4 
                        w-full h-fit">
                <p class="text-xl 2xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].itemName}</p>
                
                <div class="text-left items-center line-clamp-4">
                    <p class="text-xs 2xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].description}</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Second Card -->
    <div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
                w-full h-full max-w-[200px] max-h-[240px] 2xl:min-w-[240px] 2xl:min-h-[300px] 2xl:max-w-[300px] 2xl:max-h-[360px]
                duration-500 hover:scale-110 hover:shadow-xl">
        
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/bg_hackatons.png" alt="" class="max-w-full"/>
            </div>

            <img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

            <div class="relative text-center mx-auto px-4 mb-2 -mt-4 
                        w-full h-fit">
                <p class="text-xl 2xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
                
                <div class="text-left items-center line-clamp-4">
                    <p class="text-xs 2xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
                </div>
            </div>
        </a>
    </div>

    
    <!-- Placeholders below -->
    <div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
                w-full h-full max-w-[200px] max-h-[240px] 2xl:min-w-[240px] 2xl:min-h-[300px] 2xl:max-w-[300px] 2xl:max-h-[360px]
                duration-500 hover:scale-110 hover:shadow-xl">
        
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/bg_hackatons.png" alt="" class="max-w-full"/>
            </div>

            <img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

            <div class="relative text-center mx-auto px-4 mb-2 -mt-4 
                        w-full h-fit">
                <p class="text-xl 2xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
                
                <div class="text-left items-center line-clamp-4">
                    <p class="text-xs 2xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
                </div>
            </div>
        </a>
    </div>
    <div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
    w-full h-full max-w-[200px] max-h-[240px] 2xl:min-w-[240px] 2xl:min-h-[300px] 2xl:max-w-[300px] 2xl:max-h-[360px]
    duration-500 hover:scale-110 hover:shadow-xl">

<a href="/" draggable="false" class="flex-1">
<div class="z-0 absolute bottom-0">
    <img src="/bg_hackatons.png" alt="" class="max-w-full"/>
</div>

<img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

<div class="relative text-center mx-auto px-4 mb-2 -mt-4 
            w-full h-fit">
    <p class="text-xl 2xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
    
    <div class="text-left items-center line-clamp-4">
        <p class="text-xs 2xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
    </div>
</div>
</a>
</div>
<div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
                w-full h-full max-w-[200px] max-h-[240px] 2xl:min-w-[240px] 2xl:min-h-[300px] 2xl:max-w-[300px] 2xl:max-h-[360px]
                duration-500 hover:scale-110 hover:shadow-xl">
        
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/bg_hackatons.png" alt="" class="max-w-full"/>
            </div>

            <img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

            <div class="relative text-center mx-auto px-4 mb-2 -mt-4 
                        w-full h-fit">
                <p class="text-xl 2xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
                
                <div class="text-left items-center line-clamp-4">
                    <p class="text-xs 2xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
                </div>
            </div>
        </a>
    </div>
    <div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
    w-full h-full max-w-[200px] max-h-[240px] 2xl:min-w-[240px] 2xl:min-h-[300px] 2xl:max-w-[300px] 2xl:max-h-[360px]
    duration-500 hover:scale-110 hover:shadow-xl">

<a href="/" draggable="false" class="flex-1">
<div class="z-0 absolute bottom-0">
    <img src="/bg_hackatons.png" alt="" class="max-w-full"/>
</div>

<img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

<div class="relative text-center mx-auto px-4 mb-2 -mt-4 
            w-full h-fit">
    <p class="text-xl 2xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
    
    <div class="text-left items-center line-clamp-4">
        <p class="text-xs 2xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
    </div>
</div>
</a>
</div>
<div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
                w-full h-full max-w-[200px] max-h-[240px] 2xl:min-w-[240px] 2xl:min-h-[300px] 2xl:max-w-[300px] 2xl:max-h-[360px]
                duration-500 hover:scale-110 hover:shadow-xl md:hidden lg:block">
        
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/bg_hackatons.png" alt="" class="max-w-full"/>
            </div>

            <img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

            <div class="relative text-center mx-auto px-4 mb-2 -mt-4 
                        w-full h-fit">
                <p class="text-xl 2xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
                
                <div class="text-left items-center line-clamp-4">
                    <p class="text-xs 2xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
                </div>
            </div>
        </a>
    </div>
    <div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
    w-full h-full max-w-[200px] max-h-[240px] 2xl:min-w-[240px] 2xl:min-h-[300px] 2xl:max-w-[300px] 2xl:max-h-[360px]
    duration-500 hover:scale-110 hover:shadow-xl md:hidden lg:block">

<a href="/" draggable="false" class="flex-1">
<div class="z-0 absolute bottom-0">
    <img src="/bg_hackatons.png" alt="" class="max-w-full"/>
</div>

<img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

<div class="relative text-center mx-auto px-4 mb-2 -mt-4 
            w-full h-fit">
    <p class="text-xl 2xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
    
    <div class="text-left items-center line-clamp-4">
        <p class="text-xs 2xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
    </div>
</div>
</a>
</div>

    
</section> 

<!-- Remove below button later, should not be in this class -->
<div class="w-screen justify-items-center text-center font-semibold text-white shadow-cyan-400-2xl mb-20">
    <button class="mt-8 w-64 h-14 bg-blue-700 duration-500 hover:bg-blue-800 hover:scale-105 rounded-full">See the Full Catalogue</button>
</div>
{/await}
