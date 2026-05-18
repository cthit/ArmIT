<script>
    import { enhance } from '$app/forms';

    let { form } = $props();
</script>

<div
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
                <div class="mt-12 bg-[#00FFC2] w-[230px] h-[3px] rounded-full"></div>
            </div>
        </div>

   

        <!-- GRID 2 - CONTACT FORM -->
        <form
            method="POST"
            use:enhance
            class="w-[85%] self-center py-16 lg:py-0 mx-auto flex flex-col"
        >
            <a href="/" class="flex pb-10 lg:hidden"><img src="/icons/svg/return.svg" class="hover:opacity-80 transition-opacity" alt="return"></a>

            <p class="uppercase text-white font-bold text-3xl xl:text-5xl mb-10">
                Contact us
            </p>

            {#if form?.success}
                <div class="mb-6 rounded bg-[#00FFC2] px-4 py-3 font-semibold text-nav">
                    Thanks for reaching out. We will get back to you soon.
                </div>
            {/if}

            {#if form?.errors?.form}
                <div class="mb-6 rounded bg-red-500/90 px-4 py-3 font-semibold text-white">
                    {form.errors.form}
                </div>
            {/if}

            <label class="form-label" for="company">Company</label>
            <input class="form-input" id="company" name="company" autocomplete="organization" value={form?.values?.company ?? ''} required />
            {#if form?.errors?.company}<p class="form-error">{form.errors.company}</p>{/if}

            <label class="form-label" for="name">Name</label>
            <input class="form-input" id="name" name="name" autocomplete="name" value={form?.values?.name ?? ''} required />
            {#if form?.errors?.name}<p class="form-error">{form.errors.name}</p>{/if}

            <label class="form-label" for="email">Email</label>
            <input class="form-input" id="email" name="email" type="email" autocomplete="email" value={form?.values?.email ?? ''} required />
            {#if form?.errors?.email}<p class="form-error">{form.errors.email}</p>{/if}

            <label class="form-label" for="phone">Phone</label>
            <input class="form-input" id="phone" name="phone" autocomplete="tel" value={form?.values?.phone ?? ''} />

            <label class="form-label" for="message">Message</label>
            <textarea class="form-input min-h-40 resize-y" id="message" name="message">{form?.values?.message ?? ''}</textarea>

            <button
                type="submit"
                class="mt-4 rounded-full bg-[#00FFC2] px-8 py-4 font-bold text-nav transition hover:opacity-80"
            >
                Submit
            </button>
        </form>
    </div>
</div>

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
        w-full
        rounded 
        py-2 
        px-3 
        text-white
        mb-2 
        leading-tight 
        border
        border-white/20
        bg-[#373737]/50
        backdrop-blur-lg
    ;
    }

    .form-error {
        @apply mb-4 text-sm font-semibold text-red-300;
    }
</style>
