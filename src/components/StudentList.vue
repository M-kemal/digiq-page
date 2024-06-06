<script setup>
import LayoutView from '@/components/LayoutView.vue';
import LayoutSection from '@/components/LayoutSection.vue';
import ProgramCard from '@/components/ProgramCard.vue';
import ProgramList from '@/components/ProgramList.vue';
import { ref } from 'vue';

const programs = ref([
  {
    name: 'Quantum Science and Technology',
    university: 'UAB',
    website: 'https://quantummasterbarcelona.eu/'
  },
  {
    name: 'Quantum Information Science',
    university: 'UCPH and DTU',
    website: 'https://studies.ku.dk/masters/quantum-information-science/'
  },
  {
    name: 'Quantum Technology European Program (QTEP)',
    university: 'UNISTRA',
    website:
      'https://physique-ingenierie.unistra.fr/formation/nos-diplomes/master-physique-parcours-quantum-technologies-european-program'
  },
  {
    name: 'Engineering Physics',
    university: 'DTU',
    website: 'https://www.dtu.dk/english/education/graduate/msc-programmes/engineering-physics'
  },
  {
    name: 'Quantum Technology',
    university: 'RWTH Aachen',
    website: 'https://www.rwth-aachen.de'
  },
  {
    name: 'Physics',
    university: 'UNIPI',
    website: 'https://www.unipi.it'
  },
  {
    name: 'ICFP Master',
    university: 'ENS',
    website: 'https://www.ens.fr'
  },
  {
    name: 'Quantum Information Master',
    university: 'SU',
    website: 'https://qics.sorbonne-universite.fr'
  },
  {
    name: 'QuOM',
    university: 'SU',
    website: 'https://masterquom.fr/'
  },
  {
    name: 'Paris Physics Master',
    university: 'SU and Universite Paris Cite',
    website: 'http://www.parisphysicsmaster.com/'
  },
  {
    name: 'M1 General Physics Master',
    university: 'SU',
    website: 'https://sciences.sorbonne-universite.fr'
  },
  {
    name: 'Nano-phot',
    university: 'UTT',
    website: 'https://utt.fr'
  },
  {
    name: 'Quantum Technologies',
    university: 'CTU',
    website: 'https://physics.fjfi.cvut.cz'
  },
  {
    name: 'Quantum Informatics',
    university: 'CTU',
    website: 'https://cvut.cz'
  }
]);
</script>

<template>
  <LayoutView>
    <template #body>
      <LayoutSection>
        <template #body>
          <!-- Card -->
          <div class="my-10">
            <h1 class="mb-8 text-center text-3xl font-bold">Master Programs</h1>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProgramCard v-for="(program, index) in programs" :key="index" :program="program" />
            </div>

            <!-- List -->
            <div class="my-10">
              <h1 class="text-3xl font-bold text-center mb-8">Master Programs</h1>
              <div class="card">
                <ul class="divide-y divide-gray-200">
                  <ProgramList
                    v-for="(program, index) in programs"
                    :key="index"
                    :program="program"
                  />
                </ul>
              </div>
            </div>
          </div>
        </template>
      </LayoutSection>
    </template>
  </LayoutView>
</template>

<style scoped>
.card {
  @apply border border-transparent  rounded-3xl overflow-hidden  bg-gradient-to-b from-[#fff] to-[#F4F7FA] shadow-2xl hover:shadow-lg transition-all duration-300 ease-linear p-4 sm:p-6;
}
</style>
