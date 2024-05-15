<template>
  <!-- Team -->
  <LayoutView class="mt-20 text-xl font-normal text-gray-600">
    <template #body>
      <LayoutSection class="mt-20 mb-20">
        <template #body>
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Title -->
            <h3 class="mb-6">Further Useful Information</h3>
            <div class="mb-10 lg:mb-14">
              <h2>Contact Details for Local Coordinators</h2>
            </div>
            <!-- End Title -->

            <!-- Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div
                v-for="(contact, index) in contactDetails"
                :key="index"
                class="grid sm:flex sm:items-center justify-center sm:justify-start gap-y-3 gap-x-4 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-linear p-4 rounded-xl"
              >
                <img
                  class="rounded-lg size-24 mx-auto sm:mx-1 aspect-square object-contain"
                  :src="`../images/${contact.imgSrc}.png`"
                  alt="Image Description"
                />
                <div class="border-r w-0.5 bg-gray-600 h-full"></div>
                <div class="sm:flex sm:flex-col sm:h-full">
                  <div>
                    <h3 class="">
                      {{ contact.title }}
                    </h3>
                    <p>{{ contact.name }}</p>
                    <p class="my-1 text-sm flex items-center flex-wrap space-x-2">
                      <span class="">Email :</span>
                      <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
                    </p>
                    <p v-if="contact.name2">{{ contact.name2 }}</p>
                    <p
                      v-if="contact.email2"
                      class="mt-2 text-sm flex items-center flex-wrap space-x-2"
                    >
                      <span class="">Email :</span>
                      <a :href="`mailto:${contact.email2}`">{{ contact.email2 }}</a>
                    </p>
                    <p
                      v-if="contact.email3"
                      class="mt-2 text-sm flex items-center flex-wrap space-x-2"
                    >
                      <span class="">Email :</span>
                      <a :href="`mailto:${contact.email3}`">{{ contact.email3 }}</a>
                    </p>
                  </div>
                </div>
              </div>

              <!-- End Col -->
            </div>
            <!-- End Grid -->
          </div>
        </template>
      </LayoutSection>
    </template>
  </LayoutView>
  <!-- End Team -->
</template>

<script setup>
import LayoutSection from '@/components/LayoutSection.vue';
import LayoutView from '@/components/LayoutView.vue';
import { ref } from 'vue';

const contactDetails = ref([
  {
    name: 'Jacob Sherson',
    name2: 'Simon Goorney',
    title: 'Aarhus University ',
    email: 'sherson@mgmt.au.dk',
    email2: 'simon.goorney@phys.au.dk',
    imgSrc: 'Aarhus_University'
  },

  {
    name: 'Paul Youngman',
    title: 'Fundacio Institut de Ciencies Fotoniques ',
    email: 'Paul.Youngman@icfo.eu',
    imgSrc: 'ICFO'
  },
  {
    name: 'Jose Hugo Garcia',
    title: 'Fundacia Institute Catala de Nanociencia I nanotechnologia ',
    email: 'josehugo.garcia@icn2.cat',
    imgSrc: 'ICN2'
  },
  {
    name: 'Aurel Gabris',
    name2: 'Shivani SIngh',
    title: 'Ceske Vysoke Uceni Techicke V Praze ',
    email: 'gabris.aurel@fjfi.cvut.cz',
    email2: 'shivani.singh@fjfi.cvut.cz',
    imgSrc: 'CTU'
  },

  {
    name: 'Albert H. Werner',
    title: 'Kobenhavns Univresitet ',
    email: 'werner@math.ku.dk',
    imgSrc: 'Copenhagen'
  },
  {
    name: 'Martin Gärttner',
    title: 'Ruprecht-Karls-Universitaet Heidelberg ',
    email: 'marting@kip.uni-heidelberg.de',
    imgSrc: 'Heidelberg'
  },
  {
    name: 'Shaeema Zaman Ahmed',
    title: 'Science Melting Pot ',
    email: 'shaeema@sciencemeltingpot.com',
    imgSrc: 'Science'
  },
  {
    name: 'Marino Marsi',
    title: 'Universite Paris-Saclay ',
    email: 'marino.marsi@universite-paris-saclay.fr',
    imgSrc: 'Paris-Saclay'
  },
  {
    name: 'Tarik Yefsah',
    title: 'Ecole Normale Superieure ',
    email: 'tarik.yefsah@lkb.ens.fr',
    imgSrc: 'Ecole-Normale'
  },
  {
    name: 'Bruno, (Rob, John)',
    title: 'Universitat de Barcelona ',
    email: 'bruno@fqa.ub.edu',
    email2: 'robert.sewell@icfo.eu',
    email3: 'john.calsamiglia@uab.cat',
    imgSrc: 'UBarcelona'
  },
  {
    name: 'Marilu Chiofalo',
    title: 'Universita Di Pisa ',
    email: 'marilu.chiofalo@unipi.it',
    imgSrc: 'UPisa'
  },
  {
    name: 'Akbar Jafari',
    title: 'Rheinisch-Westfaelische Technische Hochschule Aachen ',
    email: 'akbar.jafari@rwth-aachen.de',
    imgSrc: 'RWTH'
  },
  {
    name: 'Stefan Kuechemann',
    title: 'Ludwig-Maximilians-Universitaet Muenchen ',
    email: 's.kuechemann@lmu.de',
    imgSrc: 'Ludwig'
  },
  {
    name: 'Shannon Whitlock',
    title: 'Universite de Strasbourg ',
    email: 'whitlock@unistra.fr',
    imgSrc: 'Strasbourg'
  },
  {
    name: 'Elina Palmgren',
    title: 'Helsingin Yliopisto ',
    email: 'elina.palmgren@helsinki.fi',
    imgSrc: 'Helsinki'
  },
  {
    name: 'John Costa',
    title: 'Universidad Autonoma de Barcelona',
    email: 'john.calsamiglia@uab.cat',
    imgSrc: 'UAB'
  },
  {
    name: 'Alex Holleitner',
    title: 'Techniche Universitaet Muenchen',
    email: 'Holleitner@wsi.tum.de',
    imgSrc: 'Munchen'
  },
  {
    name: 'Laurentiu Nita',
    title: 'Quarks Interactive',
    email: 'laurentiu_nita@quarksinteractive.com',
    imgSrc: 'Quarks'
  },
  {
    name: 'Christophe Couteau',
    title: 'Universite De Technologie De Troyes',
    email: 'christophe.couteau@utt.fr',
    imgSrc: 'Troyes'
  },
  {
    name: 'Clément Sayrin',
    title: 'Sorbonne Universite',
    email: 'clement.sayrin@lkb.ens.fr',
    imgSrc: 'Sorbonne'
  },
  {
    name: 'Jacqueline Silva',
    title: 'PQI-Assciacao Portuguese Quantum Institute',
    email: 'jaqueline.silva@pqi.pt',
    imgSrc: 'Portuguese'
  },
  {
    name: 'Mario Caldeira',
    title: 'Deloitte Technology',
    email: 'mcaldeira@deloitte.pt',
    imgSrc: 'Deloitte'
  },
  {
    name: 'Yasser Omar',
    title: 'Instituto Superior Tecnico',
    email: 'yasser.omar@tecnico.ulisboa.pt',
    imgSrc: 'Superior'
  },
  {
    name: 'Louise Kindt',
    title: 'Danmarks Tekniske Universitet',
    email: 'louki@dtu.dk',
    email2: ' jonatan.brask@fysik.dtu.dk',
    imgSrc: 'Denmark'
  }
]);
</script>

<style>

.contactDetails h1 {
  @apply text-5xl font-bold text-gray-800
 my-6;
}
.contactDetails h2 {
  @apply text-3xl font-bold text-gray-800
 mb-4;
}
.contactDetails h3 {
  @apply text-2xl font-bold text-gray-800
 
 mb-1.5;
}

.contactDetails .cards > * {
  @apply h-40
 shadow
 p-6;
}
.contactDetails .logos {
  @apply mt-12
 flex flex-wrap items-center gap-8;
}
.contactDetails .affiliated {
  @apply bg-gray-100 mt-12 p-10;
}
.contactDetails .logos img {
  max-height: 200px;
  max-width: 300px;
}
.contactDetails .textblock {
  @apply h8:columns-2
 k12:columns-3
 mb-20;
}
.contactDetails ul {
  @apply list-disc
 ml-8;
}
.contactDetails .textblock div {
  @apply mb-4;
}
.contactDetails em {
  @apply font-black
 tracking-tight
 not-italic;
}
.contactDetails a {
  @apply text-diversity/80
 hover:text-diversity
 transition-colors
 duration-200;
}
</style>
