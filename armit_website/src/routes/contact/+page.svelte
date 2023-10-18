<!-- https://superforms.rocks/get-started -->

<script>
  import { superForm } from 'sveltekit-superforms/client';
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
  import { enhance } from '$app/forms';

  export let data; // : PageData

  const { form, errors, constraints } = superForm(data.form);

</script>

<div
    class="sm:hidden md:hidden lg:flex
            flex justify-center items-center full-image-bg
            w-screen h-screen"
>
    <!-- flex relative justify-center items-center -->
    <div
        class="grid grid-cols-2 justify-items-center align-middle backdrop-blur-md bg-black/60 rounded-[75px]
                w-[90%] h-[90%]"
    >
        <div class="block w-[85%] h-[85%] self-center">
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
                        <img class="max-h-[24px]" src="/mail_icon.png" alt="" />
                        <p class="">armit@chalmers.it</p>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <img
                            class="max-h-[24px]"
                            src="/location_icon.png"
                            alt=""
                        />
                        <p class="">Hörsalsvägen 9, 412 58 Göteborg</p>
                    </div>
                </div>
                <div class="mt-16 flex items-center space-x-12">
                    <img
                        class="max-w-[40px] max-h-[40px]"
                        src="/linkedin_icon.png"
                        alt=""
                    />
                    <img src="/instagram_icon.png" alt="" />
                    <img src="/facebook_icon.png" alt="" />
                </div>
                <div
                    class="mt-12 bg-[#00FFC2] w-[230px] h-[3px] rounded-full"
                />
            </div>
        </div>

        <!-- GRID 2 - CONTACT FORM -->
        <div class="flex justify-center mx-auto w-[85%] h-[85%] self-center">
            <div class="w-[100%] h-[100%]">
                <div class="w-[85%] h-[100%] float-right">
                    <img class="mx-auto max-h-[100px]" src="/ArmITLogo_plain.png" alt="ArmIT logo" draggable="false">
                    <!-- <SuperDebug data={$form} /> -->
                    <form class="flex flex-col" method="POST" action="?/sendEmail" use:enhance autocomplete="off">
                        <label class="form-label" for="company">*Company</label>
                        <input class="form-input outline-0 focus:outline-white/10 focus:outline-1" 
                        type="text" name="company" required autocomplete="off" bind:value={$form.company} />

                        <label class="form-label" for="name">*Name</label>
                        <input class="form-input outline-0 focus:outline-white/10 focus:outline-1" 
                        type="text" name="name" required autocomplete="off" bind:value={$form.name} />
                      
                        <label class="form-label" for="email">*E-mail</label>
                        <input class="form-input outline-0 focus:outline-white/10 focus:outline-1" 
                        type="email" name="email" required autocomplete="off" bind:value={$form.email} />

                        <label class="form-label" for="phone">Phone number</label>
                        <input class="form-input outline-0 focus:outline-white/10 focus:outline-1" 
                        type="tel" name="phone" autocomplete="off" bind:value={$form.phone} />
                        
                        <label class="form-label" for="message">Message</label>
                        <textarea class="leading-normal resize-none h-48 form-input outline-0 focus:outline-white/10 focus:outline-1" 
                        type="text" name="message" autocomplete="off" bind:value={$form.message} />

                        <div class="flex border-solid rounded h-[50px] bg-black/75 text-white font-bold text-2xl hover:bg-black"><button class="mx-auto w-full" formaction="?/sendEmail">Submit</button></div>
                      </form>
                </div>
                











                
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .full-image-bg {
        background-image: url("bg_contact.jpg");
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
