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
      'https://physique-ingenierie.unistra.fr/formations/masters/physique/quantum-technologies-european-program-qtep'
  },
  {
    name: 'Engineering Physics',
    university: 'DTU',
    website: 'https://www.dtu.dk/english/education/graduate/msc-programmes/engineering-physics'
  },
  {
    name: 'Quantum Technology',
    university: 'RWTH Aachen',
    website:
      'https://www.physik.rwth-aachen.de/cms/physik/studium/im-studium/master-s-program-physics/~dlxbl/quanten-technologie/?lidx=1'
  },
  {
    name: 'Physics',
    university: 'UNIPI',
    website: 'https://www.df.unipi.it/didattica/en/masters-degree/master-2/'
  },
  {
    name: 'ICFP Master',
    university: 'ENS',
    website: 'https://www.phys.ens.fr/en/formations/master-icfp'
  },
  {
    name: 'Quantum Information Master',
    university: 'SU',
    website:
      'https://qics.sorbonne-universite.fr/second-year-joint-master-program-quantum-information-physics'
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
    website:
      'https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/masters/master-physique-fondamentale-et-applications'
  },
  {
    name: 'Nano-phot',
    university: 'UTT',
    website: 'https://nano-phot.utt.fr/'
  },
  {
    name: 'Quantum Technologies',
    university: 'CTU',
    website: 'https://physics.fjfi.cvut.cz/index.php/en/study/quantum-technologies'
  },
  {
    name: 'Quantum Informatics',
    university: 'CTU',
    website:
      'https://aktualne.cvut.cz/zpravy-z-medii/20221102-na-cvut-bude-novy-magistersky-studijni-program-kvantova-informatika'
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
