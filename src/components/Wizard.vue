<script setup lang="js">
import { ref } from 'vue'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import UsernameTab from '@/components/wizard-tabs/UsernameTab.vue'
import EmailTab from '@/components/wizard-tabs/EmailTab.vue'
import DescriptionTab from '@/components/Description.vue'
import FemaleUserImage from '@/assets/images/female-user.svg'
import FemaleEmail from '@/assets/images/female-email.svg'
import FemaleReview from '@/assets/images/female-review.svg'
import { isInputEmpty, isInputUseInvalidChars, isInputLessThan, isInputMoreThan } from '@/utils/validateInputs'

const userInfo = ref({
  username: '',
  email: ''
})

const tabs = ['username', 'email', 'review']
const selectedTab = ref(tabs[0])

const error = ref('')

const usernameValidate = () => {
  error.value = ''
  if (
    isInputEmpty(userInfo.value.username) ||
    isInputLessThan(userInfo.value.username, 3) ||
    isInputMoreThan(userInfo.value.username, 8) ||
    isInputUseInvalidChars(userInfo.value.username)
  ) {
    // error.value = "Username can't be empty!"
    // error.value = "Username length can't be less than 4 characters!"
    // error.value = "Username length can't be more than 7 characters!"
    // error.value = "Username can't included invalid characters!"
    error.value = 'Invalid Username.'
  }
}

const emailValidate = () => {
  error.value = ''
  if (isInputEmpty(userInfo.value.username)) {
    error.value = "Email can't be empty!"
  }
  return !error.value
}

const clickNextButton = () => {
  if (selectedTab.value === 'username') {
    if (!usernameValidate()) return
  } else if (selectedTab.value === 'email') {
    if (!emailValidate()) return
  }

  const index = tabs.findIndex((tab) => tab == selectedTab.value)
  selectedTab.value = tabs[index + 1]
}

const clickPreviousButton = () => {
  const index = tabs.findIndex((tab) => tab == selectedTab.value)
  selectedTab.value = tabs[index - 1]
}
</script>

<template>
  <Card class="mx-auto flex justify-between gap-10 bg-[#1c2641]">
    <div class="flex h-full w-7/12 flex-col justify-between">
      <header class="text-center">
        <Transition name="fade-preset" mode="out-in">
          <p :key="selectedTab" class="text-lg text-white">
            Step:
            <span class="text-xl font-bold">{{ selectedTab }}</span>
          </p>
        </Transition>
      </header>

      <Transition name="fade-preset" mode="out-in">
        <UsernameTab v-if="selectedTab === 'username'" v-model="userInfo.username" :error />
        <EmailTab v-else-if="selectedTab === 'email'" v-model="userInfo.email" :error />
        <DescriptionTab v-else-if="selectedTab === 'review'" v-model="userInfo" />
      </Transition>

      <div aria-label="button-containers" class="mx-auto flex w-9/12 justify-between">
        <Button
          id="btn-prev"
          class="w-36"
          type="button"
          variant="outline"
          :disabled="selectedTab === 'username'"
          @click="clickPreviousButton"
        >
          Previous
        </Button>
        <Button
          id="btn-next"
          class="w-36"
          type="button"
          variant="primary"
          :disabled="selectedTab === 'review'"
          @click="clickNextButton"
        >
          Next
        </Button>
      </div>
    </div>
    <div class="flex w-4/12 items-center justify-center">
      <Transition name="fade-preset" mode="out-in">
        <img v-if="selectedTab === 'username'" :src="FemaleUserImage" alt="sign up illustration" />
        <img v-else-if="selectedTab === 'email'" :src="FemaleEmail" alt="sign up illustration" />
        <img v-else-if="selectedTab === 'review'" :src="FemaleReview" alt="sign up illustration" />
      </Transition>
    </div>
  </Card>
</template>
