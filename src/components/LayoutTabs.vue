<script setup>
import LayoutSection from '@/components/LayoutSection.vue';
import LayoutView from '@/components/LayoutView.vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const networkIds = ['GIEIP', 'EP', 'IP', 'ANE'];
const route = useRoute();
const router = useRouter();
const selectedIndex = computed(() => {
  let index = networkIds.indexOf((route.query?.network ?? 'GIEIP').toUpperCase());
  if (index === -1) index = 0;
  return index;
});
const onSelect = (index) =>
  router.push({
    query: {
      network: networkIds[index]
    },
    maintainScroll: true
  });
</script>
<template>
  <div class="networks">
    <LayoutView class="mt-20 text-xl font-normal text-gray-600">
      <template #body>
        <LayoutSection class="mt-20 mb-20">
          <template #body>
            <h1 class="mb-20">DigiQ Mobility Funding - Financial Support for Students</h1>
            <h2>General</h2>
            <p>
              Students can apply for financial support throughout the year to take part in the
              following DigiQ activities:
            </p>
            <ul>
              <li>Attending in-person networking events</li>
              <li>DigiQ Exchange Program</li>
              <li>DigiQ Internship Program</li>
            </ul>
            <p>
              In order to receive funding, students must be part of a DigiQ network or be committed
              to joining a DigiQ network at the next possible date. Applications will be evaluated
              based on the student’s activity in the DigiQ environment as well as the student’s
              academic performance in- and outside of the DigiQ Environment.
            </p>
          </template>
        </LayoutSection>
        <LayoutSection>
          <template #body>
            <div class="lResourceCards">
              <div class="flex items-center text-center pl-10 font-bold">
                Click the network for more information
              </div>
              <div class="flex flex-col h8:flex-row">
                <div class="flex-none h8:flex-1">
                  <div class="cards p-4 flex flex-col gap-4 font-bold tracking-tight">
                    <div
                      class="CostumCard cursor-pointer"
                      @click="() => onSelect(0)"
                      :class="[{ active: selectedIndex === 0 }]"
                    >
                      <div class="acronym text-2xl">GIEIP</div>
                      <div class="name font-normal">
                        General information for the Exchange and Internship Program
                      </div>
                    </div>
                    <div
                      class="CostumCard cursor-pointer"
                      @click="() => onSelect(1)"
                      :class="[{ active: selectedIndex === 1 }, 'text-[var(--myWhite)]']"
                    >
                      <div class="acronym font-2xl">EP</div>
                      <div class="name font-normal">Exchange Program</div>
                    </div>
                    <div
                      class="CostumCard cursor-pointer"
                      @click="() => onSelect(2)"
                      :class="[{ active: selectedIndex === 2 }, 'text-[var(--myWhite)]']"
                    >
                      <div class="acronym font-2xl">IP</div>
                      <div class="name font-normal">Internship Program</div>
                    </div>
                    <div
                      class="CostumCard cursor-pointer"
                      @click="() => onSelect(3)"
                      :class="[{ active: selectedIndex === 3 }, 'text-[var(--myWhite)]']"
                    >
                      <div class="acronym font-2xl">ANE</div>
                      <div class="name font-normal">Attending Networking Events</div>
                    </div>
                  </div>
                </div>
                <div class="flex p-4 gap-4 flex-shrink-0 md:w-2/3">
                  <div class="details">
                    <div v-if="selectedIndex === 0" class="page AQISS CostumCard p-8">
                      <h2>General information for the Exchange and Internship Program (GIEIP)</h2>
                      <p>
                        The funding available will depend on the country of the student's host
                        institution for internships and exchanges. In addition, depending on the
                        funding institution, the funding received will either be based on
                        reimbursement of actual costs or in the form of a stipend.
                      </p>
                      <p>
                        For mobility support for exchanges and internships, institutional mobility
                        is required, i.e., the home and host institutions must be different. The
                        host institution does not need to be a partner of the DigiQ consortium, it
                        may be an external entity. Additionally, there are different types of
                        mobility support, depending on whether you receive ECTS for the
                        participation (Curricular vs Extracurricular mobility) and whether you need
                        to move to take part in the program (Living vs Non-living mobility).
                      </p>
                      <ul class="font-medium">
                        Curricular mobility: in case you receive ECTS credits from the program
                      </ul>
                      <ul>
                        <li>
                          Non-living mobility payment: in case you do not need to move to a new
                          address in order to take part in the program: up to 300 EUR monthly
                        </li>
                        <li>
                          Living mobility payment: In case you do need to move to a new address in
                          order to attend the program: payment up to regional maximum (full-time
                          equivalent) either as stipend or as refund
                        </li>
                      </ul>
                      <ul class="font-medium">
                        Extracurricular mobility: in case you do not receive ECTS credits from the
                        program
                      </ul>
                      <ul>
                        <li>
                          Payment up to the regional maximum (full-time equivalent) depending on
                          payment capabilities of the paying institution.
                        </li>
                      </ul>
                      <ul class="font-medium">
                        Regional maximum financial support that correspond to a full-time equivalent
                        for the internship and exchange program:
                      </ul>
                      <ul>
                        <li>
                          Up to 900 EUR per month for group 1 countries (Destinations: Denmark,
                          Finland, Iceland, Ireland, Luxembourg, Sweden, United Kingdom,
                          Liechtenstein, Norway) or
                        </li>
                        <li>
                          Up to 800 EUR per month for group 2 countries (Destinations: Austria,
                          Belgium, Germany, France, Italy, Greece, Spain, Cyprus, Netherlands,
                          Malta, Portugal) or
                        </li>
                        <li>
                          Up to 700 EUR per month for group 3 countries (Destinations: Bulgaria,
                          Croatia, Czech Republic, Estonia, Latvia, Lithuania, Hungary, Poland,
                          Romania, Serbia, Slovakia, Slovenia, former Yugoslav Republic of
                          Macedonia, Turkey)
                        </li>
                      </ul>
                      <ul class="font-medium">
                        Additional Considerations:
                      </ul>
                      <li>
                        Disadvantaged students receive an additional 120 EUR per month on top of
                        this grant amount.
                      </li>
                      <li>
                        If students already receive financial support by other programs or
                        organisations, they can receive a top-up up to 100 EUR above the maximum
                        rate of the country of the host institution.
                      </li>
                    </div>

                    <div v-if="selectedIndex === 1" class="page AQT CostumCard p-8">
                      <h2>Exchange Program (EP)</h2>
                      <p>
                        The DigiQ Exchange Program enables students to either undertake exchange semesters at partner institutions or have access to thesis projects from partner universities.

                      </p>
                      
                      <p>
                        How to apply:
                      </p>
                    <ul>
                      <li>
                        Exchange opportunities are available flexibly on a case-by-case basis, therefore students should contact their local DigiQ Coordinator to discuss possibilities, how to apply, eligibility rules and selection processes.


                      </li>
                      <ul class="list-circle">
                        Documentation that may be required:
                        <li class="list-disc">
                          Motivation letter stating the value of the exchange for themselves and for the network (justification for funding)

                        </li>
                        <li>CV</li>
                        <li>Course plan + Learning Agreement</li>
                        <li>Please check the information on the host institution for specific additionally required documents and information with the local coordinator</li>

                      </ul>
                    </ul>
                    </div>
                    <div v-if="selectedIndex === 2" class="page EFEQT CostumCard p-8">
                      <h2>
                        Internship Program
                        (IP)
                      </h2>
                      <p>
                        The DQ-Internship program will run year-round and will be based at nodes in the research and industry centres of the Munich Quantum Valley (TUM, LMU), the Catalonia Quantum Community (ICFO, UB, ICN2), the Cluster of Excellence Matter and Light for Quantum Computing (Aachen) and the Dutch Quantum Delta (AUAS).
                      </p>
                      <p>
                        For the first round of the internship program, applications must be submitted between 22nd January and 1st April 2024.

                      </p>
                      <p>
                        How to apply:

                      </p>
                      
                      <ul>
                        <li>
                          Internship opportunities will be advertised through DigiQ Track, via the DigiQ networks, and by local coordinators

                        </li>
                        <ul>
                          Documentation required:
                          <li>
                            Motivation letter stating the value of the exchange for themselves and for the network (justification for funding)

                          </li>
                          <li>CV</li>
                          <li>Statement of support from the host group</li>

                          <li>Please check the information on the host institution for specific additionally required documents and information with the local coordinator.</li>

                        </ul>
                      </ul>
                      
                      
                    </div>
                    <div v-if="selectedIndex === 3" class="page QNC CostumCard p-8">
                      <h2>Attending Networking Events (ANE)</h2>
                      <p>
                        Each student can receive funding to attend up to two in-person networking events per year independent of the paying institution. Therefore previous funding received by the student must be disclosed during the application process.

                      </p>
                        <p>
                          Funding available:

                        </p>
                        <p>Students will be able to claim for travel expenses and accommodation.</p>
                        <p>How to apply:</p>
                      <ul>
                        <li>
                          Networking events will be advertised by the institution hosting the event to the relevant DigiQ networks.

                        </li>
                        <li>
                          Event host will indicate if funding is available from them to attend the event, and the application process, eligibility rules and selection process.

                        </li>
                        <li>
                          If no funding is available from the event host DigiQ students should contact their local coordinator to enquire about available funding to attend the networking event, the application process, eligibility rules and selection process.
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </LayoutSection>
      </template>
    </LayoutView>
  </div>
</template>
<style scoped>
h1 {
  @apply text-5xl font-bold text-gray-800
 my-6;
}
h2 {
  @apply text-3xl font-bold text-gray-800
 mb-4;
}
h3 {
  @apply text-2xl font-bold text-gray-800
 mt-8
 mb-2.5;
}
p {
  @apply my-4;
}
.cards > * {
  @apply h-40
 shadow
 p-6;
}
.logos {
  @apply mt-12
 flex flex-wrap items-center gap-8;
}
.affiliated {
  @apply bg-gray-100 mt-12 p-10;
}
.logos img {
  max-height: 200px;
  max-width: 300px;
}
.textblock {
  @apply h8:columns-2
 k12:columns-3
 mb-20;
}
ul {
  @apply list-disc
 ml-8 mb-2;
}
li {
  @apply list-disc
 ml-9 mb-0.5;
}
.textblock div {
  @apply mb-4;
}
em {
  @apply font-black
 tracking-tight
 not-italic;
}
a {
  @apply text-diversity/80
 hover:text-diversity
 transition-colors
 duration-200;
}

.CostumCard {
  @apply border border-transparent  rounded-3xl overflow-hidden  bg-gradient-to-b from-[#fff] to-[#F4F7FA] shadow-2xl hover:shadow-lg transition-all duration-300 ease-linear;
  background: url('../images/checkers.png') center / cover no-repeat;
}

.active {
  @apply border border-gray-900  shadow-lg hover:shadow-2xl transition-all duration-300 ease-linear z-10;
}
</style>
