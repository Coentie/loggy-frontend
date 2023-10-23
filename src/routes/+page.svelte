<script>
import "../app.css";
import Input from '../components/ui/form/Input.svelte';
import programming from '$lib/svg/programming.svg';
import blop1 from '$lib/svg/blob1.svg';
import blop2 from '$lib/svg/blob2.svg';
import { goto } from '$app/navigation';
import authService from '../services/user/authService.js';


let email;
let password;

/**
 * Signs in
 */
const signIn = async () => {
    console.log(email, password);
    await authService.signIn(email, password);
    await goto('/app');
};
</script>

<div class="w-full min-h-screen bg-gray-50 flex">
    <div class="w-1/3 relative flex flex-col justify-center items-center">
        <div class="px-16">
            <div class="mb-12 relative">
                <h1 class="text-4xl text-primary font-bold mb-2">Login.</h1>
                <p class="text-gray-400 text-xl">Login with the data you used during your registration</p>
            </div>

            <div class="flex flex-col space-y-4 mb-4">
                <Input
                        bind:value={email}
                        type="email"
                        name="email"
                        label="E-mail"
                        placeholder="Your E-mail address..."
                />

                <Input
                        bind:value={password}
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Your password..."
                />
            </div>

            <div class="flex flex-row mb-2">
                <button on:click={signIn}
                        class="flex-1 cursor-pointer
                bg-primary rounded-lg uppercase
                text-sm text-white py-3
                px-4 hover:bg-primary-400">
                    Sign in
                </button>
            </div>

            <p class="text-gray-400">Forgot your password?
                <span class="text-secondary cursor-pointer hover:text-secondary-600">Click here</span>
                to reset your password.
            </p>
        </div>

    </div>
    <div class="w-2/3 relative overflow-hidden">
        <div class="relative flex min-h-full rounded-l-2xl overflow-hidden"
             style="background-color: rgba(0, 50, 98, 0.2)">
            <div class="flex flex-col w-full items-center justify-center">
                <p class="text-2xl mb-8 tracking-wide text-gray-700">Nice to see you again</p>
                <h1 class=" text-6xl text-primary font-bold mb-16">
                    Welcome back<span class="text-secondary">.</span>
                </h1>

                <img src="{programming}" alt="programming" class="w-1/2"/>
            </div>
        </div>

        <img src="{blop1}" alt="blop1" class="absolute -right-24 -top-24 w-1/2 opacity-20"/>
        <img src="{blop2}" alt="blop2" class="absolute rotate-45 -left-24 -bottom-24 w-1/2 opacity-20"/>
    </div>
</div>
