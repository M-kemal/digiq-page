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
                      <p class="font-medium">
                        Curricular mobility: in case you receive ECTS credits from the program :
                      </p>
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
                      <p class="font-medium">
                        Curricular mobility: in case you receive ECTS credits from the program :
                      </p>
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
                      <h3>Organisers and Coordinators</h3>
                      <p>Aurél Gábris, gabris.aurel@fjfi.cvut.cz</p>
                      <p>Jonatan Bohr Brask, jobb@fysik.dtu.dk</p>
                      <img src="../../../assets/images/AQISS.png" alt="" />
                      <h3>Core Partners</h3>
                      <div class="logos">
                        <img src="../../../assets/images/CTU.png" alt="" />
                        <img src="../../../assets/images/DTU.png" alt="" />
                        <img src="../../../assets/images/UPS.png" alt="" />
                        <img src="../../../assets/images/UH.png" alt="" />
                        <img src="../../../assets/images/UB.jpg" alt="" />
                      </div>
                      <div class="affiliated">
                        <h3>Affiliated Partners</h3>
                        <div class="logos">
                          <img src="../../../assets/images/AlU.png" alt="" />
                          <img src="../../../assets/images/I.png" alt="" />
                          <img src="../../../assets/images/IDO.jpg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div v-if="selectedIndex === 1" class="page AQT CostumCard p-8">
                      <h2>Advocates for Quantum Technology (AQT)</h2>
                      <p>
                        In 2025, UNESCO will dedicate an International Year of Quantum Science and
                        Technology. This field is growing at an incredible rate, and it will fall to
                        us as Quantum Technologists to ensure that the public and other scientists
                        have an understanding of and fascination for QT.
                      </p>
                      <p>
                        That is where you come in! As an advocate for Quantum Technology, you will
                        be involved in maj international QT events such as World Quantum Day,
                        Italian Quantum Weeks, Pint of Science, an many more, spreading the word of
                        QT.
                      </p>
                      <p>
                        Staff in the AQT network include top researchers in fields of Quantum
                        Simulation & Communication, as well as spearheading Europe’s education and
                        outreach initiatives such as Quantum Technologies Education for Everyone
                        (QuTE4E).
                      </p>
                      <h3>Events</h3>
                      <p>
                        Events in this network will orient around major international activities:
                        Italian Quantum Wee (taking place across 17 cities in Italy over 6 weeks),
                        and World Quantum Day (annually over 4 events).
                      </p>
                      <p>
                        Science Melting Pot will organise several events in Aarhus, Denmark, such as
                        “Pitcher of Quantum”, a several day Quantum Festival, and “Pint of Science”,
                        a global science festival taking place in local bars and cafes.
                      </p>
                      <p>
                        There are many more opportunities to be involved in events, both attending
                        and organising, and this network has travel funding available for up t two
                        events per person per year!
                      </p>
                      <h3>Organisers and Coordinators</h3>
                      <p>Simon Goorney, Aarhus University (simon.goorney@mgmt.au.dk)</p>
                      <p>
                        Co-coordinator, Yasser Omar, Instituto Superior Técnico
                        (yasser.omar@tecnico.ulisboa.pt)
                      </p>
                      <img src="../../../assets/images/img1.png" alt="" />
                      <h3>Core Partners</h3>
                      <div class="logos">
                        <img src="../../../assets/images/marchio_unipi_pant541_288.gif" alt="" />
                        <img src="../../../assets/images/Aarhus_University_logo.svg.png" alt="" />
                        <img src="../../../assets/images/SMP_transparent.6cb95fdc.png" alt="" />
                        <img src="../../../assets/images/IST_A_RGB_POS.png" alt="" />
                        <img src="../../../assets/images/PQI.png" alt="" />
                        <img src="../../../assets/images/Deloitte_black.png" alt="" />
                      </div>
                      <div class="affiliated">
                        <h3>Affiliated Partners</h3>
                        <div class="logos">
                          <img src="../../../assets/images/iqws.png" alt="" />
                          <img src="../../../assets/images/logo_WQD_black.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div v-if="selectedIndex === 2" class="page EFEQT CostumCard p-8">
                      <h2>
                        Empowering the Future Experts in Quantum Science and Technology for Europe
                        (EFEQT)
                      </h2>
                      <p>
                        EFEQT is a one year complementary training programme for students performing
                        their Master studies at a European University. It provides accredited
                        training modules and networking opportunities within the DigiQ Master
                        program.
                      </p>
                      <p>
                        Enhance your Masters degree with international experience leading towards a
                        PhD and be part of a pan-European community preparing you for leadership
                        roles in the emerging quantum workforce.
                      </p>
                      <h3>Events</h3>
                      <ul>
                        <li>Quantum Ideas Factory (science hackathon) in Paris in October 2023</li>
                        <li>Monthly online meetups with top experts from industry and academia</li>
                      </ul>
                      <h3>Organisers and Coordinators</h3>
                      <p>Coordinator: Shannon Whitlock (Strasbourg), whitlock@unistra.fr</p>
                      <p>
                        Co-coordinator: Martin Gärttner (Heidelberg),
                        martin.gaerttner@kip.uni-heidelberg.de
                      </p>
                      <p>Meetups: Rianne Lous (Eindhoven), r.s.lous@tue.nl</p>
                      <h3>Core Partners</h3>
                      <div class="logos">
                        <img src="../../../assets/images/UniH.png" alt="" />
                        <img src="../../../assets/images/US.png" alt="" />
                        <img src="../../../assets/images/SU.png" alt="" />
                        <img src="../../../assets/images/ENS.png" alt="" />
                        <img src="../../../assets/images/PSL.png" alt="" />
                      </div>
                    </div>
                    <div v-if="selectedIndex === 3" class="page QNC CostumCard p-8">
                      <h2>Network for Quantum Computing (QNC)</h2>
                      <p>
                        NQC is a good fit for students interested in quantum computing and quantum
                        information theory Topics covered in NQC include:
                      </p>
                      <ul>
                        <li>
                          Theoretical & Experimental Quantum Computing
                          <ul>
                            <li>Quantum algorithms</li>
                            <li>Software applications</li>
                            <li>Hardware architectures</li>
                            <li>Methods in Quantum Information Theory</li>
                          </ul>
                        </li>
                        <li>Industrial applications & local Start-Ups</li>
                        <li>Entrepreneurship</li>
                      </ul>
                      <h3>Events</h3>
                      <ul>
                        <li>Scientific seminars & workshops</li>
                        <li>Outreach projects</li>
                        <li>Internship matchmaking</li>
                        <li>Platforms for Quantum Technologies School (Aachen, March)</li>
                        <li>QMATH Masterclass (Copenhagen, August)</li>
                      </ul>
                      <h3>Organisers and Coordinators</h3>
                      <p>
                        Coordinator: Albert H. Werner, CPH (werner@math.ku.dk) Co-coordinator: Lisa
                        Otten, RWTH (l.otten@physik.rwth-aachen.de)
                      </p>
                      <h3>Core Partners</h3>
                      <div class="logos">
                        <img src="../../../assets/images/KU.png" alt="" />
                        <img src="../../../assets/images/UAB.png" alt="" />
                        <img src="../../../assets/images/RWTH.png" alt="" />
                        <img src="../../../assets/images/LMU.png" alt="" />
                        <img src="../../../assets/images/Quarks.png" alt="" />
                      </div>
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
 ml-8;
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
  @apply border-0 border-gray-400  rounded-3xl overflow-hidden  bg-gradient-to-b from-[#fff] to-[#F4F7FA] shadow-2xl hover:shadow-lg transition-all duration-300 ease-linear;
  background: url('../images/checkers.png') center / cover no-repeat;
}

.active {
  @apply text-costumWhite border-gray-900 !bg-gradient-to-tr from-gray-950 to-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 ease-linear z-10;
}
</style>
