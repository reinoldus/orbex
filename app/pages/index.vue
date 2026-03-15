<script setup lang="ts">
const form = reactive({
  email: ''
})

const toast = useToast()
const loading = ref(false)
const submitted = ref(false)

const benefits = [
  {
    title: 'Reply from WhatsApp',
    description: 'New review comes in, you get a WhatsApp message with a ready-to-send AI reply. Tap once, done.',
    icon: 'i-lucide-message-circle'
  },
  {
    title: 'Always on top of reviews',
    description: 'Every Google review triggers an instant WhatsApp alert. You stay informed wherever you are.',
    icon: 'i-lucide-bell'
  },
  {
    title: 'Grow your reputation',
    description: 'Fast, professional replies boost your Google Maps ranking and attract more clients.',
    icon: 'i-lucide-trending-up'
  }
]

const howItWorks = [
  { step: '1', title: 'A customer leaves a review', description: 'On your Google Maps listing' },
  { step: '2', title: 'You get a WhatsApp message', description: 'With the review and a suggested AI reply' },
  { step: '3', title: 'Tap to reply', description: 'One tap sends a professional response' }
]

const reviews = [
  { name: 'Sarah M.', rating: 5, text: 'Amazing experience! The staff was so friendly and professional. Will definitely come back.', time: '2 hours ago' },
  { name: 'James R.', rating: 4, text: 'Great service overall. Really loved the atmosphere and attention to detail.', time: '5 hours ago' },
  { name: 'Lisa T.', rating: 5, text: 'Best salon in town! Love the attention to detail and the warm atmosphere.', time: '1 day ago' }
]

async function onSubmit() {
  loading.value = true
  try {
    await $fetch('/api/waitlist', { method: 'POST', body: form })
    submitted.value = true
    toast.add({ title: 'You\'re on the list!', description: 'We\'ll reach out when your spot is ready.', color: 'success' })
  } catch (err: any) {
    const message = err.statusCode === 409
      ? 'This email is already on the waitlist'
      : 'Something went wrong. Please try again.'
    toast.add({ title: message, color: 'error' })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-gradient">
      <UPageHero
        :ui="{
          root: 'py-24 sm:py-32 lg:py-40',
          container: 'text-center',
          title: 'text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight',
          description: 'text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto'
        }"
        title="Your Google reviews, answered on WhatsApp."
        description="Orbex sends every new Google review straight to your WhatsApp with an AI-written reply ready to go. Just tap and respond."
        :links="[
          { label: 'Get Early Access', icon: 'i-lucide-sparkles', size: 'xl' as const, to: '#early-access' },
          { label: 'See how it works', color: 'neutral' as const, variant: 'subtle' as const, trailingIcon: 'i-lucide-arrow-down', size: 'xl' as const, to: '#how-it-works' }
        ]"
      />
    </div>

    <!-- How It Works Section -->
    <UPageSection
      id="how-it-works"
      headline="How it works"
      title="From review to reply in seconds"
      description="Three simple steps. No app to open, no dashboard to check."
      :ui="{
        root: 'py-24',
        headline: 'text-cyan-400',
        title: 'text-white text-3xl sm:text-4xl',
        description: 'text-slate-400'
      }"
    >
      <UPageGrid :ui="{ root: 'grid-cols-1 sm:grid-cols-3' }">
        <UCard
          v-for="item in howItWorks"
          :key="item.step"
          :ui="{ root: 'feature-card', body: 'p-6 sm:p-6 flex flex-col items-center text-center gap-3' }"
        >
          <UBadge :label="item.step" color="primary" variant="solid" size="lg" :ui="{ base: 'rounded-full size-10 items-center justify-center text-lg font-bold' }" />
          <p class="text-white font-semibold">{{ item.title }}</p>
          <p class="text-slate-400 text-sm">{{ item.description }}</p>
        </UCard>
      </UPageGrid>
    </UPageSection>

    <USeparator :ui="{ root: 'border-white/5' }" />

    <!-- Product Preview Section -->
    <UPageSection
      id="product"
      headline="See it in action"
      title="Reply to reviews without leaving WhatsApp"
      description="Your AI assistant delivers the review and a suggested reply right to your phone."
      :ui="{
        root: 'py-24',
        headline: 'text-cyan-400',
        title: 'text-white text-3xl sm:text-4xl',
        description: 'text-slate-400'
      }"
    >
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <!-- WhatsApp Mockup -->
          <div>
            <div class="text-center mb-8">
              <UBadge label="WhatsApp Alerts" color="success" variant="subtle" />
              <p class="text-slate-400 text-sm mt-2">Instant notifications with AI-suggested replies</p>
            </div>
            <div class="dashboard-mockup rounded-2xl p-5 max-w-sm mx-auto">
              <!-- WhatsApp Header -->
              <div class="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                <UAvatar text="O" size="sm" :ui="{ root: 'bg-emerald-600' }" />
                <div>
                  <p class="text-white text-sm font-semibold">Orbex</p>
                  <p class="text-slate-500 text-xs">online</p>
                </div>
              </div>

              <!-- Message Bubbles -->
              <div class="space-y-4">
                <!-- Orbex Message: New Review -->
                <div class="bg-emerald-950/40 border border-emerald-500/15 rounded-xl rounded-tl-none p-4 max-w-[90%]">
                  <div class="flex items-center gap-2 mb-2">
                    <UIcon name="i-lucide-star" class="size-4 text-yellow-400" />
                    <span class="text-white text-xs font-semibold">New 5-star review</span>
                  </div>
                  <p class="text-slate-300 text-xs mb-3">Sarah M.: "Amazing experience! The staff was so friendly and professional. Will definitely come back."</p>
                  <USeparator :ui="{ root: 'border-white/10 my-2' }" />
                  <div class="flex items-center gap-2 mb-2">
                    <UIcon name="i-lucide-sparkles" class="size-3 text-cyan-400" />
                    <span class="text-cyan-400 text-xs font-medium">Suggested reply:</span>
                  </div>
                  <p class="text-slate-400 text-xs">"Thank you so much, Sarah! We're thrilled you had a wonderful experience. Our team truly values your kind words. We look forward to seeing you again!"</p>
                  <p class="text-slate-600 text-[10px] text-right mt-2">9:41 AM</p>
                </div>

                <!-- Owner Reply -->
                <div class="bg-cyan-950/30 border border-cyan-500/15 rounded-xl rounded-tr-none p-3 max-w-[70%] ml-auto">
                  <p class="text-slate-300 text-xs">Send this reply</p>
                  <p class="text-slate-600 text-[10px] text-right mt-1">9:41 AM</p>
                </div>

                <!-- Orbex Confirmation -->
                <div class="bg-emerald-950/40 border border-emerald-500/15 rounded-xl rounded-tl-none p-3 max-w-[80%]">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-check-circle" class="size-4 text-emerald-400" />
                    <span class="text-emerald-400 text-xs font-medium">Reply posted to Google!</span>
                  </div>
                  <p class="text-slate-600 text-[10px] text-right mt-1">9:41 AM</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Dashboard Preview -->
          <div>
            <div class="text-center mb-8">
              <UBadge label="Dashboard" color="primary" variant="subtle" />
              <p class="text-slate-400 text-sm mt-2">Full overview when you need it</p>
            </div>
            <div class="dashboard-mockup rounded-xl overflow-hidden">
              <div class="p-5">
                <!-- Dashboard Header -->
                <div class="flex items-center justify-between mb-5">
                  <div class="flex items-center gap-3">
                    <UIcon name="i-lucide-layout-dashboard" class="size-5 text-cyan-400" />
                    <span class="text-white font-semibold">Reviews</span>
                    <UBadge label="Live" color="success" variant="subtle" size="sm" />
                  </div>
                  <UBadge label="Last 30 days" color="primary" variant="soft" size="sm" />
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-2 gap-3 mb-5">
                  <div class="stat-card rounded-lg p-3">
                    <span class="text-slate-500 text-xs">Total Reviews</span>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="text-white text-lg font-bold">284</span>
                      <UBadge label="+12%" color="success" variant="subtle" size="sm" />
                    </div>
                  </div>
                  <div class="stat-card rounded-lg p-3">
                    <span class="text-slate-500 text-xs">Average Rating</span>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="text-white text-lg font-bold">4.8</span>
                      <div class="flex gap-0.5">
                        <UIcon v-for="s in 5" :key="s" name="i-lucide-star" class="size-3 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Chart -->
                <div class="h-28 relative mb-5">
                  <svg class="w-full h-full" viewBox="0 0 800 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="rgb(6, 182, 212)" stop-opacity="0.2" />
                        <stop offset="100%" stop-color="rgb(6, 182, 212)" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 90 Q 50 70, 100 75 T 200 55 T 300 60 T 400 40 T 500 65 T 600 45 T 700 50 T 800 25" fill="none" stroke="rgb(6, 182, 212)" stroke-width="2" />
                    <path d="M 0 90 Q 50 70, 100 75 T 200 55 T 300 60 T 400 40 T 500 65 T 600 45 T 700 50 T 800 25 L 800 120 L 0 120 Z" fill="url(#chartGradient2)" />
                  </svg>
                </div>

                <!-- Recent Reviews -->
                <div class="space-y-2">
                  <div v-for="review in reviews" :key="review.name" class="stat-card rounded-lg p-3 flex items-start gap-3">
                    <UAvatar :text="review.name.charAt(0)" size="xs" />
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-white text-xs font-medium">{{ review.name }}</span>
                        <div class="flex gap-0.5">
                          <UIcon v-for="s in 5" :key="s" name="i-lucide-star" class="size-2.5" :class="s <= review.rating ? 'text-yellow-400' : 'text-slate-700'" />
                        </div>
                        <span class="text-slate-600 text-[10px] ml-auto">{{ review.time }}</span>
                      </div>
                      <p class="text-slate-400 text-[11px] truncate">{{ review.text }}</p>
                    </div>
                    <UBadge label="Replied" color="success" variant="subtle" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </UPageSection>

    <USeparator :ui="{ root: 'border-white/5' }" />

    <!-- Benefits Section -->
    <UPageSection
      id="benefits"
      headline="Why Orbex"
      title="Stay on top of every review, effortlessly"
      description="Built for salon owners, clinic managers, and local businesses who want to shine online."
      :ui="{
        root: 'py-24',
        headline: 'text-cyan-400',
        title: 'text-white text-3xl sm:text-4xl',
        description: 'text-slate-400'
      }"
    >
      <UPageGrid :ui="{ root: 'grid-cols-1 sm:grid-cols-3' }">
        <UPageCard
          v-for="benefit in benefits"
          :key="benefit.title"
          :title="benefit.title"
          :description="benefit.description"
          :icon="benefit.icon"
          :ui="{
            root: 'feature-card rounded-xl',
            title: 'text-white',
            description: 'text-slate-400',
            icon: 'text-cyan-400'
          }"
        />
      </UPageGrid>
    </UPageSection>

    <USeparator :ui="{ root: 'border-white/5' }" />

    <!-- Early Access Section -->
    <UPageSection
      id="early-access"
      headline="Join the waitlist"
      title="Get early access to Orbex"
      description="We're onboarding a small group of businesses first. Secure your spot."
      :ui="{
        root: 'py-24',
        headline: 'text-cyan-400',
        title: 'text-white text-3xl sm:text-4xl',
        description: 'text-slate-400'
      }"
    >
      <UContainer :ui="{ base: 'max-w-md mx-auto' }">
        <UCard :ui="{ root: 'early-access-card rounded-2xl shadow-2xl', body: 'p-8 sm:p-10' }">
          <UForm v-if="!submitted" :state="form" @submit="onSubmit" class="space-y-6">
            <UFormField label="Email address" name="email" :ui="{ label: 'text-slate-300 text-sm font-medium' }">
              <UInput v-model="form.email" type="email" placeholder="jane@yoursalon.com" icon="i-lucide-mail" size="xl" :ui="{ root: 'w-full bg-white/[0.04] border-white/10 focus-within:border-cyan-500/40 focus-within:ring-cyan-500/20 rounded-lg' }" />
            </UFormField>

            <UButton type="submit" label="Get Early Access" icon="i-lucide-sparkles" size="xl" block trailing-icon="i-lucide-arrow-right" class="mt-2" :loading="loading" />
          </UForm>

          <div v-else class="text-center py-6">
            <UIcon name="i-lucide-check-circle" class="size-12 text-emerald-400 mx-auto mb-4" />
            <p class="text-white font-semibold text-lg">You're on the list!</p>
            <p class="text-slate-400 text-sm mt-2">We'll reach out when your spot is ready.</p>
          </div>

          <p v-if="!submitted" class="text-slate-600 text-xs text-center mt-5">No credit card required. We'll reach out when your spot is ready.</p>
        </UCard>
      </UContainer>
    </UPageSection>
  </div>
</template>
