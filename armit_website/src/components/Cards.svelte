<!-- These cards will be displayed on the main page -->

<script>
    import {getProductcatalogue} from "../scripts/getProductcatalogue"
</script>

{#await getProductcatalogue("en")}
<div class="flex h-screen w-screen items-center justify-center text-center font-semibold text-3xl">Loading Content...</div>

{:then data}
<section class="mx-auto justify-center justify-items-center 
                grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4   
                md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1240px]
                gap-x-[50px] gap-y-[50px]">
    
    <!-- First Card -->
    <div class="relative bg-[#1F43FF] overflow-hidden rounded-3xl
                w-full h-full max-w-[200px] max-h-[240px] xl:min-w-[240px] xl:min-h-[300px] xl:max-w-[300px] xl:max-h-[360px]
                duration-500 hover:scale-105 hover:shadow-xl">
        
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/circle.png" alt="" class="max-w-full"/>
            </div>

            <img draggable="false"  src="{data.products[0].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

            <div class="relative text-center mx-auto px-4 mb-2 -mt-4 
                        w-full h-fit">
                <p class="text-xl xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].itemName}</p>
                
                <div class="text-left items-center line-clamp-4">
                    <p class="text-xs xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].description}</p>
                </div>
            </div>
        </a>
    </div>

    <!-- Second Card -->
    <div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
                w-full h-full max-w-[200px] max-h-[240px] xl:min-w-[240px] xl:min-h-[300px] xl:max-w-[300px] xl:max-h-[360px]
                duration-500 hover:scale-105 hover:shadow-xl">
        
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0 w-full">
                <img src="/bg_hackatons.png" alt="" class="w-full max-w-full"/>
            </div>

            <img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

            <div class="relative text-center mx-auto px-4 mb-2 -mt-4 
                        w-full h-fit">
                <p class="text-xl xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
                
                <div class="text-left items-center line-clamp-4">
                    <p class="text-xs xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
                </div>
            </div>
        </a>
    </div>


    <div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
                w-full h-full max-w-[200px] max-h-[240px] xl:min-w-[240px] xl:min-h-[300px] xl:max-w-[300px] xl:max-h-[360px]
                duration-500 hover:scale-105 hover:shadow-xl">
        
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0 w-full">
                <img src="/bg_hackatons.png" alt="" class="w-full max-w-full"/>
            </div>

            <img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

            <div class="relative text-center mx-auto px-4 mb-2 -mt-4 
                        w-full h-fit">
                <p class="text-xl xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
                
                <div class="text-left items-center line-clamp-4">
                    <p class="text-xs xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
                </div>
            </div>
        </a>
    </div><div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
    w-full h-full max-w-[200px] max-h-[240px] xl:min-w-[240px] xl:min-h-[300px] xl:max-w-[300px] xl:max-h-[360px]
    duration-500 hover:scale-105 hover:shadow-xl">

<a href="/" draggable="false" class="flex-1">
<div class="z-0 absolute bottom-0 w-full">
    <img src="/bg_hackatons.png" alt="" class="w-full max-w-full"/>
</div>

<img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

<div class="relative text-center mx-auto px-4 mb-2 -mt-4 
            w-full h-fit">
    <p class="text-xl xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>
    
    <div class="text-left items-center line-clamp-4">
        <p class="text-xs xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
    </div>
</div>
</a>
</div><div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
w-full h-full max-w-[200px] max-h-[240px] xl:min-w-[240px] xl:min-h-[300px] xl:max-w-[300px] xl:max-h-[360px]
duration-500 hover:scale-105 hover:shadow-xl">

<a href="/" draggable="false" class="flex-1">
<div class="z-0 absolute bottom-0 w-full">
<img src="/bg_hackatons.png" alt="" class="w-full max-w-full"/>
</div>

<img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

<div class="relative text-center mx-auto px-4 mb-2 -mt-4 
        w-full h-fit">
<p class="text-xl xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>

<div class="text-left items-center line-clamp-4">
    <p class="text-xs xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
</div>
</div>
</a>
</div><div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
w-full h-full max-w-[200px] max-h-[240px] xl:min-w-[240px] xl:min-h-[300px] xl:max-w-[300px] xl:max-h-[360px]
duration-500 hover:scale-105 hover:shadow-xl">

<a href="/" draggable="false" class="flex-1">
<div class="z-0 absolute bottom-0 w-full">
<img src="/bg_hackatons.png" alt="" class="w-full max-w-full"/>
</div>

<img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

<div class="relative text-center mx-auto px-4 mb-2 -mt-4 
        w-full h-fit">
<p class="text-xl xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>

<div class="text-left items-center line-clamp-4">
    <p class="text-xs xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
</div>
</div>
</a>
</div><div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
w-full h-full max-w-[200px] max-h-[240px] xl:min-w-[240px] xl:min-h-[300px] xl:max-w-[300px] xl:max-h-[360px]
duration-500 hover:scale-105 hover:shadow-xl">

<a href="/" draggable="false" class="flex-1">
<div class="z-0 absolute bottom-0 w-full">
<img src="/bg_hackatons.png" alt="" class="w-full max-w-full"/>
</div>

<img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

<div class="relative text-center mx-auto px-4 mb-2 -mt-4 
        w-full h-fit">
<p class="text-xl xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>

<div class="text-left items-center line-clamp-4">
    <p class="text-xs xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
</div>
</div>
</a>
</div><div class="relative bg-[#00FFC2] overflow-hidden rounded-3xl
w-full h-full max-w-[200px] max-h-[240px] xl:min-w-[240px] xl:min-h-[300px] xl:max-w-[300px] xl:max-h-[360px]
duration-500 hover:scale-105 hover:shadow-xl">

<a href="/" draggable="false" class="flex-1">
<div class="z-0 absolute bottom-0 w-full">
<img src="/bg_hackatons.png" alt="" class="w-full max-w-full"/>
</div>

<img draggable="false"  src="{data.products[1].iconPath}" alt="teacher with whiteboard " class="relative px-4 mx-auto">

<div class="relative text-center mx-auto px-4 mb-2 -mt-4 
        w-full h-fit">
<p class="text-xl xl:text-2xl font-semibold text-white truncate mb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].itemName}</p>

<div class="text-left items-center line-clamp-4">
    <p class="text-xs xl:text-base font-semibold text-white" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[1].description}</p>
</div>
</div>
</a>
</div>

    

    
</section>


















<!-- BELOW IS INITIAL TEST DESIGN -->

<!-- <section class="mx-auto px-2 md:px-4 lg:px-8 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center justify-center gap-y-10 md:gap-y-8 lg:gap-y-10 gap-x-4 md:gap-x-8 lg:gap-x-10 mt-10 mb-5">    -->
    
    <!-- First Card - Lunch Seminars -->
    <!-- <div class="relative box-border text-clip w-full  md:max-h-[240px] min-w-[200px] m-w-[200px] lg:max-h-[346px]  bg-[#1F43FF] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/circle.png" alt="" class="max-w-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[0].iconPath}" alt="teacher with whiteboard " class="relative w-fit max-w-full object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-full max-w-full mb-4">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].description}</p>
                </div>
            </div>
        </a>
    </div>

    <div class="relative box-border text-clip w-full md:max-h-[240px] lg:min-w-[240px] lg:max-h-[346px]  bg-[#1F43FF] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/circle.png" alt="" class="max-w-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[0].iconPath}" alt="teacher with whiteboard " class="relative w-fit max-w-full object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-full max-w-full mb-4">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].description}</p>
                </div>
            </div>
        </a>
    </div><div class="relative box-border text-clip w-full md:max-h-[240px] lg:min-w-[240px] lg:max-h-[346px]  bg-[#1F43FF] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/circle.png" alt="" class="max-w-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[0].iconPath}" alt="teacher with whiteboard " class="relative w-fit max-w-full object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-full max-w-full mb-4">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].description}</p>
                </div>
            </div>
        </a>
    </div><div class="relative box-border text-clip w-full md:max-h-[240px] lg:min-w-[240px] lg:max-h-[346px]  bg-[#1F43FF] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/" draggable="false" class="flex-1">
            <div class="z-0 absolute bottom-0">
                <img src="/circle.png" alt="" class="max-w-full"/>
            </div>
            
            <img draggable="false"  src="{data.products[0].iconPath}" alt="teacher with whiteboard " class="relative w-fit max-w-full object-scale-down rounded-t-xl mx-auto">
        
            <div class="relative px-4 w-full max-w-full mb-4">
                <p class="text-2xl font-bold text-white truncate block capitalize text-center pb-1" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].itemName}</p>
                <div class="items-center line-clamp-4">
                    <p class="text-white text-base font-semibold drop-shadow-sm" style="text-shadow: 2px 4px 3px rgba(0,0,0,0.3);">{data.products[0].description}</p>
                </div>
            </div>
        </a>
    </div> -->

    <!-- Second Card - Hackatons -->
    <!-- <div class="relative text-clip w-fit max-w-[18rem] bg-[#00FFC2] rounded-3xl duration-500 hover:scale-105 hover:shadow-xl ">
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
    </div> -->

    <!-- Third Card - Not Decided -->
    

    <!-- Forth Card - Not Decided -->
    

    <!-- Fifth Card - Not Decided -->
    

    <!-- Sixth Card - Not Decided -->
    

    <!-- Seventh Card - Not Decided -->
    

    <!-- Eight Card - Not Decided -->
    

    

    

    
    
    
    
<!-- </section> -->

{/await}
