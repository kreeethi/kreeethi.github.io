// "Experience" covers research and other formative work — it maps to the
// dendrites (inputs) in Unprofessional Mode, and to a conventional list in
// Professional Mode. Research entries live here rather than as a separate
// data file since we decided research is a type of experience, not its own
// category.

export const experienceItems = [
  {
    id: "alzheimers",
    title: "Singer Lab",
    description:
      "3D analysis of microglia, astrocytes, and amyloid beta plaque interactions in mouse models of chronic stress and neurodegeneration. Exploring how noninvasive audiovisual flicker can recruit neuroimmune cells.",
    links: [
      { label: "AAIC 26", href: "/research/singer-lab/aaic26.pdf"},
      { label: "SfN 26", href: "/research/singer-lab/sfn26.pdf"},
      { label: "FA25 Symp.", href: "/research/singer-lab/singer-abstract.pdf" },
    ],
  },
  {
    id: "petasense",
    title: "Petasense",
    description:
      "Developed and tested SNR recovery algorithms for low-RPM machinery use cases.",
  },
  {
    id: "comparative-neuromechanics",
    title: "Comparative Neuromechanics Lab",
    description:
      "Using XMALab to correct incorrectly predicted bony landmark positions from DeepLabCut outputs.",
    links: [
      { label: "Paper", href: "https://www.sciencedirect.com/science/article/pii/S0010482526003471"}
    ]
  },
  {
    id: "sci-moorjani",
    title: "Moorjani Lab",
    description:
      "Creation of a granular scoring system for reach-and-retrieval task in rats with cervical spinal cord contusion injuries to evaluate and monitor motor ability.",
    link: null,
  },
];
