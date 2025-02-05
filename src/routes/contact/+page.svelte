<!-- https://superforms.rocks/get-started -->

<script>
    import { applyAction } from '$app/forms';
    import { superForm } from 'sveltekit-superforms/client';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
  

    export let data; // : PageData

    let submitButtonText = "Submit"

    const { form, enhance, errors, message, submitting, delayed, constraints} = superForm(data.form, {
        resetForm: true,
        delayMs: 500,
        timeoutMs: 8000,
        multipleSubmits: "prevent"
    });

</script>

<body
    class="
            flex justify-center items-center full-image-bg
            w-screen h-full overflow-scroll"
>
    <div
        class="lg:grid lg:grid-cols-2 flex flex-col justify-items-center align-middle backdrop-blur-md bg-black/60 rounded-[75px]
                w-[90%] min-h-screen max-h-full scroll-smooth"
    >
    
        <!-- GRID 1 - CONTACT INFORMATION -->
        <div class="hidden lg:block w-[85%] h-[85%] self-center">
            <a href="/" class="flex pb-10"><img src="/icons/svg/return.svg" class="hover:opacity-80 transition-opacity" alt="return"></a>
            <div class="max-w-[75%]">
                <p
                    class="uppercase text-white font-bold lg:text-3xl xl:text-5xl"
                >
                    Get in touch
                </p>
                <div
                    class="mt-12 font-medium text-white/75 lg:text-base xl:text-3xl"
                >
                    <p class="">
                        We would love to work with you. Send us a message!
                    </p>
                    <p class="" />
                </div>

                <div
                    class="mt-16 font-normal text-white/75 lg:text-base xl:text-2xl space-y-3"
                >
                    <div class="flex space-x-2 items-center">
                        <img class="max-h-[24px]" src="/icons/png/mail_icon.png" alt=""/>
                        <a href="mailto: armit@chalmers.it" class="hover:underline">armit@chalmers.it</a>
                    </div>
                    <div class="flex space-x-2 items-center">
                        
                            <img
                                class="max-h-[24px]"
                                src="/icons/png/location_icon.png"
                                alt=""
                            />
                            <a href="https://www.google.com/maps/place/Hubben+2.2/@57.6882996,11.9743574,17z/data=!3m1!4b1!4m6!3m5!1s0x464ff30b03281b63:0x17079f6a1c961735!8m2!3d57.6882968!4d11.9792283!16s%2Fg%2F1pp2wwm1_?entry=ttu" target="_blank"><p class="hover:underline">Hörsalsvägen 9, 412 58 Göteborg</p></a>
                    </div>
                </div>
                <div class="mt-16 flex items-center space-x-12">
                    <a href="https://www.linkedin.com/company/armit/about/" target="_blank">
                        <img
                            class="max-w-[40px] max-h-[40px] hover:opacity-50 transition-opacity ease-in"
                            src="/icons/png/linkedin_icon.png"
                            alt="linkedin"
                        />
                    </a>
                    <a href="https://www.instagram.com/armit_chalmers/" target="_blank"><img src="/icons/png/instagram_icon.png" class="hover:opacity-50 transition-opacity ease-in" alt="instagram"  /></a>
                    <a href="https://www.facebook.com/armitchalmers/?locale=sv_SE" target="_blank"><img src="/icons/png/facebook_icon.png" class="hover:opacity-50 transition-opacity ease-in" alt="facebook"/></a>
                </div>
                <div
                    class="mt-12 bg-[#00FFC2] w-[230px] h-[3px] rounded-full"
                />
            </div>
        </div>

   

        
        <!-- GRID 2 - CONTACT FORM -->
        
    </div>
</body>

<style lang="postcss">
  
    .full-image-bg {
        background-image: url("/backgrounds/bg_contact.jpg");
        background-size: cover;
        @apply backdrop-blur-xl;
    }

    .form-label {
        @apply
        block
        text-white/75
        font-normal
        mb-2
    ;
    }

    .form-input {
        @apply
        rounded 
        py-2 
        px-3 
        text-white/75
        mb-6 
        leading-tight 
        
        bg-[#373737]/50
        backdrop-blur-lg
    ;
    }
</style>
