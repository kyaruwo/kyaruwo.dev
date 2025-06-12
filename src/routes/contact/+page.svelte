<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";

  // public access key
  const access_key = "aebed9b1-86f2-4b85-a088-0728dfa68d75";

  let name = $state("");
  let email = $state("");
  let subject = $derived(`${email} sent a message`);
  let message = $state("");
  let rows = $derived(crows(message.split("\n").length));
  function crows(length) {
    return length < 4 ? 4 : length;
  }

  let empty = $derived(!(name && email && message));

  let status = $state("Send");
  async function send(event) {
    event.preventDefault();

    if (status == "Sent") {
      message = "";
      status = "Send";
      return;
    }

    status = "Sending...";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key, name, email, subject, message }),
    });

    const result = await response.json();
    if (result.success) {
      status = "Sent";
    } else {
      status = "Error";
    }
  }
</script>

<Header />

<div class="my-20 flex flex-grow flex-col items-center justify-center gap-4">
  <!-- start of contact -->
  <form
    class="flex w-4/5 flex-col gap-4 sm:w-3/5 md:w-1/2 lg:w-1/3"
    onsubmit={send}
  >
    <!-- start of label -->
    <span class="self-center text-4xl font-extrabold">CONTACT</span>
    <!-- end of label -->

    <!-- start of name -->
    <div class="flex flex-col gap-1">
      <p class="font-semibold text-zinc-200">
        name {#if !name}<span class="text-rose-500">*</span>{/if}
      </p>
      <input
        class="bg-zinc-900 p-2 placeholder:text-zinc-500 focus:outline-dotted"
        bind:value={name}
        placeholder="name"
        type="text"
        required
        disabled={["Sending...", "Sent"].includes(status)}
      />
    </div>
    <!-- end of name -->

    <!-- start of email -->
    <div class="flex flex-col gap-1">
      <p class="font-semibold text-zinc-200">
        email {#if !email}<span class="text-rose-500">*</span>{/if}
      </p>
      <input
        class="bg-zinc-900 p-2 placeholder:text-zinc-500 focus:outline-dotted"
        bind:value={email}
        placeholder="email"
        type="email"
        required
        disabled={["Sending...", "Sent"].includes(status)}
      />
    </div>
    <!-- end of email -->

    <!-- start of message -->
    <div class="flex flex-col gap-1">
      <p class="font-semibold text-zinc-200">
        message {#if !message}<span class="text-rose-500">*</span>{/if}
      </p>
      <textarea
        class="resize-none overflow-hidden bg-zinc-900 p-2 placeholder:text-zinc-500 focus:outline-dotted"
        bind:value={message}
        {rows}
        placeholder="message"
        type="text"
        required
        disabled={["Sending...", "Sent"].includes(status)}
      ></textarea>
    </div>
    <!-- end of message -->

    <!-- start of send button -->
    {#if status == "Send"}
      <button
        class="rounded-lg bg-violet-900 p-2 font-semibold hover:bg-violet-800 disabled:bg-zinc-800"
        type="submit"
        disabled={empty}
      >
        {status}
      </button>
    {/if}
    {#if status == "Sending..."}
      <button
        class="rounded-lg bg-orange-900 p-2 font-semibold"
        type="submit"
        disabled
      >
        {status}
      </button>
    {/if}
    {#if status == "Sent"}
      <button
        class="rounded-lg bg-green-900 p-2 font-semibold hover:bg-violet-900"
        type="submit"
      >
        {status}! Another one?
      </button>
    {/if}
    {#if status == "Error"}
      <button
        class="rounded-lg bg-red-900 p-2 font-semibold hover:bg-violet-900"
        type="submit"
      >
        An {status} occured. Try again?
      </button>
    {/if}
    <!-- end of send button -->

    <!-- start of email -->
    <p class="-mt-2 text-center text-xs text-zinc-400">
      you can also contact me at
      <a class="font-black hover:text-white" href="mailto:dm@kyaruwo.dev">
        dm@kyaruwo.dev
      </a>
    </p>
    <!-- end of email -->
  </form>
  <!-- end of contact -->
</div>

<Footer />
