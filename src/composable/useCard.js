import { ref } from 'vue';

export default function useCard() {
  const cards = ref([
    {
      cardTitle: 'Quantum background',
      title: 'CONCEPTS AND FOUNDATIONS',
      numberColor: 'bg-accordGreen',
      titleColor: 'text-accordGreen',
      contentColor: 'text-accordGreen',
      subTitles: [
        {
          title: 'Basic Quantum Concepts',
          contents: [
            'Stationary states, energy quantisation, wells',
            'Superposition, interference',
            'Unitary time evolution, Schrödinger equation, tunneling'
          ],
          innerSubTitles: [
            {
              title: 'Quantum measurement',
              contents: [
                'Probabilistic nature of quantum physics',
                'Measurement dynamics (state reduction)',
                'No-cloning theorem, incomplete state information from measurement'
              ]
            },
            {
              title: 'Two-state systems (e. g. spin-1/2, polari- sation), qubits',
              contents: [
                'State representation, visualisation (e. g. Bloch/Poincaré sphere)',
                'Dynamics of two-state systems',
                'Physical manipulation with pulses',
                'State evolution, Bloch equation, Larmor precession, Rabi oscillations'
              ]
            },
            {
              title: 'Pure and mixed quantum states',
              contents: []
            },
            {
              title: 'Decoherence and coupling to the environment',
              contents: []
            },
            {
              title: 'Heisenberg principle, complementarity',
              contents: []
            },
            {
              title: 'Entanglement, Bell inequalities, non-locality',
              contents: []
            }
          ],
          beforeColor: '#708b12' // Çizgi rengi
        },
        {
          title: 'Mathematical formalism and information theory',
          contents: [],
          innerSubTitles: [
            {
              title: 'Mathematical foundations',
              contents: [
                'Linear algebra, functional analysis',
                '(Linear) differential equations',
                'Statistics, probability theory, combinatorics',
                'Advanced mathematics, e. g. topology, group theory, symmetry',
                'Perturbation theory'
              ]
            },
            {
              title: 'State space, Dirac notation',
              contents: []
            },
            {
              title: 'Operators, eigenvectors, eigenvalues',
              contents: []
            },
            {
              title: 'Classical information theory, Shannon entropy',
              contents: []
            },
            {
              title: 'Quantum channels, distance measures, von Neumann entropy',
              contents: []
            }
          ],
          beforeColor: '#708b12' // Çizgi rengi
        }
      ]
    },
    {
      // cardTitle: 'lorem ipsum 2',
      title: 'PHYSICAL FOUNDATIONS OF QUANTUM TECHNOLOGIES',
      numberColor: 'bg-accordDarkGreen',
      titleColor: 'text-accordDarkGreen',
      contentColor: 'text-accordDarkGreen',
      subTitles: [
        {
          title: 'Atomic Physics',
          contents: [
            'Electronic levels, quantum numbers, level transitions, Rydberg states',
            'Hyperfine structure, Zeeman effect, Stark effect',
            'Angular momentum (spin, orbital, total), interactions'
          ],
          innerSubTitles: [],
          beforeColor: '#005042' // Çizgi rengi
        },
        {
          title: 'Quantum optics and electrodynamics',
          contents: [
            'Classical, quantum and non-linear optics, polarisation degrees of freedom',
            'Photon statistics, bunching, antibunching',
            'Fock states, coherent states, squeezed states',
            'Quantum optical experiments, interferometry, microscopy and spectroscopy',
            'Quantum electrodynamics (QED)',
            'Light-matter interactions'
          ],

          beforeColor: '#005042' // Çizgi rengi
        },
        {
          title: 'Solid-state physics',
          contents: [
            'Properties (band structure, electrical transport, optical properties, magnetism)',
            'Semiconductor theory',
            'Superconductivity, Josephson effect, Josephson junctions',
            'Mesoscopic phenomena, quantum confinement effects',
            'Topological effects',
            'Magnetometry, spin manipulation experiments'
          ],

          beforeColor: '#005042' // Çizgi rengi
        },
        {
          title: 'Quantum many-body systems and open quantum systems',
          contents: [
            'Pauli principle, bosons, fermions, Fermi gases and Fermi liquids',
            'Quantum degenerate gases, Bose-Einstein condensation',
            'Quantum statistics, entropy',
            'Molecular physics',
            'Open quantum systems',
            'Decoherence mechanisms (relaxation, dephasing, photon loss)'
          ],

          beforeColor: '#005042' // Çizgi rengi
        }
      ]
    },
    {
      cardTitle: 'Core device technologies',
      title: 'ENABLING TECHNOLOGIES AND TECHNIQUES',
      numberColor: 'bg-accordDarkBlue',
      titleColor: 'text-accordDarkBlue',
      contentColor: 'text-accordDarkBlue',
      subTitles: [
        {
          title: 'Laboratory techniques, noise and shielding',
          contents: [
            'Noise analysis',
            'Cryogenic, vacuum and cleanroom technologies',
            'Shielding techniques, housing, magnets'
          ],

          beforeColor: '#00384f' // Çizgi rengi
        },
        {
          title: 'Solid-state technologies, nanotechnologies',
          contents: [],
          innerSubTitles: [
            {
              title: 'Micro- and nanostructuring',
              contents: []
            },
            {
              title: 'Quantum materials design',
              contents: []
            },
            {
              title:
                'Micro- and nanoelectronics, e. g. 2D electron gas and materials, single-electron transistor (SET), spintronics',
              contents: []
            },
            {
              title: 'Semiconductor technologies',
              contents: []
            },
            {
              title: 'Superconducting devices, SQUIDs',
              contents: []
            }
          ],
          beforeColor: '#00384f' // Çizgi rengi
        },
        {
          title: 'Optical technologies',
          contents: [],
          innerSubTitles: [
            {
              title: 'Classical optics',
              contents: []
            },
            {
              title: 'Lasers',
              contents: []
            },
            {
              title: 'Single photon sources',
              contents: []
            },
            {
              title: 'Single photon detectors and cameras',
              contents: []
            },
            {
              title: 'Photonics, fibres',
              contents: []
            }
          ],
          beforeColor: '#00384f' // Çizgi rengi
        },
        {
          title: 'Control technologies',
          contents: [],
          innerSubTitles: [
            {
              title: 'Signal and data processing',
              contents: []
            },
            {
              title:
                'Electronics, microwave and RF (radio frequency) technologies, frequency conversion, modulation and generation',
              contents: []
            },
            {
              title: 'Laser cooling, laser stabilisation',
              contents: []
            },
            {
              title: 'Generation of special quantum states, e. g. Bell states, squeezed states',
              contents: []
            },
            {
              title: 'Resonators',
              contents: []
            },
            {
              title: 'Opto-electronical and opto-mechanical systems',
              contents: []
            }
          ],
          beforeColor: '#00384f'
        },
        {
          title: 'Computers and Software',
          contents: [],
          innerSubTitles: [
            {
              title: 'IT infrastructure and software stack',
              contents: []
            },
            {
              title:
                'Classical programming, algorithm design and software development techniques, mathematical modelling',
              contents: []
            },
            {
              title:
                'Control software: calibration, guide electronics/ optics, error-robust physical operations, tuning and stabilisation of hardware',
              contents: []
            },
            {
              title: 'Quantum control algorithms',
              contents: []
            },
            {
              title: 'Machine learning inspired and integrated approaches',
              contents: []
            }
          ],
          beforeColor: '#00384f' // Cizgi rengi
        }
      ]
    },
    {
      title: 'QUANTUM HARDWARE',
      numberColor: 'bg-accordLightBlue',
      titleColor: 'text-accordLightBlue',
      contentColor: 'text-accordLightBlue',
      subTitles: [
        {
          title: 'Superconducting electronic circuits',
          contents: ['Qubit types, e. g. charge, flux, phase, transmon'],
          innerSubTitles: [],
          beforeColor: '#006f98'
        },
        {
          title: 'Spin-based systems',
          contents: [
            'Electron-spin qubits, nitrogen-vacancy (NV) centres in diamond',
            'Semiconductor quantum dots',
            'Nuclear-spin qubits'
          ],

          beforeColor: '#006f98'
        },
        {
          title: 'Neutral atoms and ions',
          contents: [
            'Trapped ions',
            'Rydberg atoms',
            'Cold atoms, molecules, quantum gases',
            'Neutral atoms in optical lattices'
          ],

          beforeColor: '#006f98'
        },
        {
          title: 'Photonic systems',
          contents: [
            'Linear optical elements and networks, optical instruments for photons as qubits',
            'Boson sampling techniques',
            'Entangled photon sources'
          ],

          beforeColor: '#006f98'
        },
        {
          title: 'Emerging qubit concepts',
          contents: ['Topological qubits', 'Molecular-spin qubits'],

          beforeColor: '#006f98'
        },
        {
          title: 'Quantum state control',
          contents: [
            'State initialisation and readout',
            'State manipulation, realisation of quantum gates',
            'Qubit coupling & interconnectivity',
            'Interconversion of different qubit types'
          ],

          beforeColor: '#006f98'
        },
        {
          title: 'Hybrid quantum-classical systems',
          contents: [
            'High performance computer (HPC) systems',
            'Machine learning integration',
            'Integration of classical and quantum networks',
            'Quantum interfaces'
          ],

          beforeColor: '#006f98'
        },
        {
          title: 'Technology realisation',
          contents: [
            'Noise, general and platform-specific limitations, benchmarking',
            'Miniaturisation, scaling',
            'Integration on a chip, e. g. photonic integrated circuits, atom chips'
          ],

          beforeColor: '#006f98'
        }
      ]
    },
    {
      cardTitle: 'QT systems and applications',
      title: 'QUANTUM COMPUTING AND SIMULATION',
      numberColor: 'bg-accordIndigo',
      titleColor: 'text-accordIndigo',
      contentColor: 'text-accordIndigo',
      subTitles: [
        {
          title: 'Basics',
          contents: [
            'Reversibility, DiVincenzo criteria',
            'Qubits, quantum gates, universal gate set',
            'Universal fault-tolerant quantum computers, NISQ quantum computers',
            'Circuit design, notation, matrix representation',
            'Basic quantum programming techniques',
            'Complexity theory, quantum complexity classes, computational limitations, quantum advantage'
          ],
          innerSubTitles: [],
          beforeColor: '#164194'
        },
        {
          title: 'Quantum simulators',
          contents: [
            'Digital quantum simulators',
            'Analogue quantum simulators and (adiabatic) quantum annealers'
          ],

          beforeColor: '#164194'
        },
        {
          title: 'Quantum programming tools and software stack, error correction',
          contents: [
            'Graphical platforms',
            'Quantum assembler languages and software development kits, quantum circuit simulators',
            'Quantum compilers, high-level program- ming with pre-definded subroutines',
            'Hybrid quantum-classical algorithms and quantum embedding',
            'Cloud platforms',
            'Quantum error correction, quantum error mitigation'
          ],

          beforeColor: '#164194'
        },
        {
          title: 'Quantum computing subroutines',
          contents: [
            'Quantum amplitude amplification',
            'Quantum Fourier Transform (QFT), hidden subgroup finding',
            'Quantum phase estimation',
            'Quantum linear algebra subroutines, quantum singular value decomposition',
            'Other techniques and subroutines, e. g. quantum walks, amplitude estimation'
          ],

          beforeColor: '#164194'
        },

        {
          title: 'Quantum algorithms',
          contents: [
            'Number theory and factorisation (e. g. Shor algorithm)',
            'Oracular algorithms and database search (e. g. Grover algorithm)',
            'Linear algebra (e. g. Harrow-Hassidim-Lloyd algorithm)',
            'IQuantum optimisation',
            'Quantum machine learning, quantum neural networks',
            'Quantum simulation algorithms',
            'Noisy intermediate-scale quantum (NISQ) algorithms: Variational Quantum Eigensolver (VQE), Quantum Approximate Optimisation Algorithm (QAOA)'
          ],

          beforeColor: '#164194'
        },
        {
          title: 'Applications of quantum computing and simulation',
          contents: [],
          innerSubTitles: [
            {
              title: 'Materials science',
              contents: [
                'Manufacturing, e. g. new types of batteries',
                'Pharmaceutical drug discovery',
                'Catalyst discovery (improvement of chemical processes like Haber-Bosch)'
              ],
              beforeColor: '#708b12'
            },
            {
              title: 'Engineering and design',
              contents: [
                'Simulation of complex processes, e. g. aerodynamics, structural dynamics, crash & safety',
                'Computational fluid dynamics, e. g. airflow around aircraft',
                'Surrogate machine learning based models for numerical simulations',
                'Design optimisation'
              ],
              beforeColor: '#708b12'
            },
            {
              title: 'Optimisation in finance, production, network and logistics',
              contents: [
                'Routing',
                'Supply chain management, loading and sizing, production planning',
                'Insurance risk assessment',
                'Financial portfolio optimisation',
                'Satisfiability problems (SAT): possible solutions for a set of constraints',
                'Sequencing problems for op- timal sequence for executing jobs'
              ],
              beforeColor: '#708b12'
            },
            {
              title: 'Data security and cryptography',
              contents: [],
              beforeColor: '#708b12'
            }
          ],

          beforeColor: '#164194'
        }
      ]
    },
    {
      title: 'QUANTUM SENSORS AND IMAGING SYSTEMS',
      numberColor: 'bg-accordBrown',
      titleColor: 'text-accordBrown',
      contentColor: 'text-accordBrown',
      subTitles: [
        {
          title: 'Basics',
          contents: [
            'Fundamental quantum limits (standard quantum limit, Heisenberg limit)',
            'Definition of SI units',
            'Measurement criteria (sensitivity, resolution, etc.), classical alternatives, performance analysis'
          ],
          innerSubTitles: [],
          beforeColor: '#510e33'
        },
        {
          title: 'Electromagnetic field sensors',
          contents: [
            'NV centres, Rydberg atoms, superconducting sensors',
            'Atomic magnetometers and optically pumped magnetometers (OPMs)'
          ],

          beforeColor: '#510e33'
        },
        {
          title: 'Temperature, particle and pressure sensors',
          contents: [
            'Spin-qubit based sensors',
            'Precision spectroscopy gas sensors',
            'Optomechanical sensors'
          ],

          beforeColor: '#510e33'
        },
        {
          title: 'Inertial and gravity sensors',
          contents: [
            'Micro-electromechanical sensors (MEMS)',
            'Atom interferometers',
            'Rotating nanoparticle sensors'
          ],

          beforeColor: '#510e33'
        },

        {
          title: 'Quantum imaging',
          contents: [
            'Interaction-free measurement',
            'Quantum ghost imaging, lithography, imaging with undetected photons, tomographic imagin',
            'Quantum radar, quantum lidar'
          ],

          beforeColor: '#510e33'
        },
        {
          title: 'Atomic clocks',
          contents: [
            'Microwave clocks, atomic fountain clocks, coherent popula- tion trapping (CPT) clocks',
            'Optical clocks, trapped ion clocks, neutral atoms in optical lattices clocks, quantum logic clocks',
            'Nuclear clocks',
            'Transportable atomic clocks'
          ],

          beforeColor: '#510e33'
        },
        {
          title: 'Applications of quantum sensors',
          contents: [],
          innerSubTitles: [
            {
              title: 'Metrology at a single quantum level',
              contents: ['Precision spectroscopy, quantum logic spectroscopy'],
              beforeColor: '#708b12'
            },
            {
              title: 'Medicine and molecular biology',
              contents: [
                'Magnetic detection of neuronal and cardiac signals',
                'Imaging (e. g. living cells)',
                'Microwave diagnostics'
              ],
              beforeColor: '#708b12'
            },
            {
              title: 'Civil and environmental monitoring',
              contents: [
                'Geology, underground surveys, natural resource exploration, archaeology',
                'Civil engineering, infrastructure monitoring',
                'Earth monitoring, natural hazard prevention'
              ],
              beforeColor: '#708b12'
            },
            {
              title: 'Transport and navigation, precise timing and position detection',
              contents: [],
              beforeColor: '#708b12'
            },
            {
              title: 'Control in industrial processes',
              contents: [
                'Inspection in microelectronics',
                'Ultra-precise timing and synchronisation, reference time'
              ],
              beforeColor: '#708b12'
            }
          ],

          beforeColor: '#510e33'
        }
      ]
    },
    {
      title: 'QUANTUM COMMUNICATION AND NETWORKS',
      numberColor: 'bg-accordPink',
      titleColor: 'text-accordPink',
      contentColor: 'text-accordPink',
      subTitles: [
        {
          title: 'Basics',
          contents: [
            'Conventional and post-quantum cryptography, combined cryptographic approaches',
            'Quantum teleportation, Bell state measurement',
            'Security proof, side-channel attacks'
          ],
          innerSubTitles: [],
          beforeColor: '#8e2f88'
        },
        {
          title: 'Quantum Random Number Generators (QRNG)',
          contents: [
            'Secure keys, e. g. for Quantum Key Distribution (QKD)',
            'Random numbers for algorithms, e. g. online gambling'
          ],

          beforeColor: '#8e2f88'
        },
        {
          title: 'Quantum Key Distribution (QKD)',
          contents: [
            'QKD basic protocols, e. g. BB84 (Bennett/Brassard), B92 (Bennett), E91 (Ekert)',
            'QKD advanced protocols, discrete and continuous variable protocols',
            'Measurement-device-independent (MDI) QKD and device-independent (DI) QKD',
            'Quantum key management systems, QKD modules (full devices)'
          ],

          beforeColor: '#8e2f88'
        },
        {
          title: 'Applications of Quantum Cryptography',
          contents: [
            'Sector-specific use cases, e. g. financial transactions, health records, protection of critical infrastructure, e-government, defence, e-commerce, voting',
            'Secure access to cloud-based quantum computing, delegated quantum computing',
            'Protection of quantum data (encryption, authentication), advanced primitives (unclonable data, quantum money etc.)',
            'Quantum remote sensing with secure data transmission'
          ],

          beforeColor: '#8e2f88'
        },

        {
          title: 'Infrastructure for Quantum Information Networks (Quantum Internet)',
          contents: [
            'Quantum network nodes, memories and switches',
            'Quantum repeaters, entanglement swapping, entanglement purification',
            'Quantum channels, free-space communication, fibre-based systems, satellite-based systems'
          ],

          beforeColor: '#8e2f88'
        },
        {
          title: 'System Networks (Composite Systems), Quantum Internet Applications',
          contents: [
            'Full quantum communication network, QKD trusted node networks (secure data transfer)',
            'Quantum enabled synchronisation networks, sensor and clock networks',
            'Connected and distributed quantum computing'
          ],

          beforeColor: '#8e2f88'
        }
      ]
    },
    {
      title: 'VALORISATION',
      numberColor: 'bg-accordBrownLight',
      titleColor: 'text-accordBrownLight',
      contentColor: 'text-accordBrownLight',
      subTitles: [
        {
          title: 'Industry landscape and market analysis',
          contents: [
            'Market size and growth potential',
            'Policy and regulatory environment',
            'Strategic foresight',
            'Customer trends, needs and preferences'
          ],
          innerSubTitles: [],
          beforeColor: '#790920'
        },
        {
          title: 'Business strategy, entrepreneurship and management',
          contents: [
            'Governance, leadership, risk management and strategic decisionmaking',
            'Competitive analysis',
            'Product and service innovation, Technology Readiness Level (TRL), intellectual property, business model innovation',
            'Industrial processes, standardisation, evaluation, compliance, benchmarking (application-driven)',
            'Organisational design, change management and value chain optimisation',
            'Project and resource management'
          ],

          beforeColor: '#790920'
        },
        {
          title: 'Impact',
          contents: [
            'Funding and initiatives landscape',
            'Economic impact',
            'Societal and environmental impact',
            'Scientific impact'
          ],

          beforeColor: '#790920'
        },
        {
          title: 'Responsibility and awareness',
          contents: [
            'Responsibility, ethics',
            'Public communication and outreach, awareness raising',
            'Education and training'
          ],

          beforeColor: '#790920'
        }
      ]
    }
  ]);
  return { cards };
}
