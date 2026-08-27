export const projects = [
  {
    id: "neuro-matched-filter",
    title: "Matched-Filter for Stimulus Onset Prediction",
    highlight:
      "Designed a matched-filter to determine flash onset based on neural responses in the mouse visual cortex.",
    tags: ["Matched-filter", "Allen Data Set", "Cross-correlation"],
    tech: "SciPy, Matplotlib, NumPy, data visualization",
    images: [
      { src: "/images/projects/neuro-matched/result.png", alt: "Result from Matched Filter" },
      { src: "/images/projects/neuro-matched/spike-timing.png", alt: "Spike-timing from one VISP unit" }
    ],
    links: [
      { label: "Repo", href: "https://github.com/kreeethi/allen-matched-filter" },
      { label: "Report", href: "/projects/neuro-matched-filter/allen-matched-filter.pdf" },
    ],
    sections: [
      {
        heading: "What I did",
        bullets: [
          "Explored strength of individual neuronal responses to full-field flash stimuli.",
          "Calculated population neural responses to full-field flash stimuli.",
          "Designed and thresholded a matched-filter.",
          "Validated predicted flash times against actual flash times.",
        ],
      },
      {
        heading: "Why it was hard",
        bullets: [
          "Biological data can be very noisy. It was difficult to find a final 'stopping point' where the matched-filter couldn't be improved anymore due to noise.",
          "Version compatibility issues between the python version I had and the versions the Allen Dataset required was a huge roadblock in starting the project.",
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      paragraphs: [
        "I switched to EE from BME so I could build the technical skills that would help me become a better neuroengineer (particularly with a focus in neural signal processing and neural prosthetics). I really don’t think I was that prepared for how math-heavy and difficult EE would be, and I often found myself missing the neuroscience theory and biological side of everything.",
        "This project helped me merge my fascination with neuroscience with the signal processing skills I have learned throughout my coursework. I read a lot more papers than I referenced in this document, and watched a lot more YouTube videos. I’m really excited to carry on with doing different experiments with this dataset, now that the hard part of actually downloading it is done.",
      ],
    },
  },
  {
    id: "fsr",
    title: "FSR Calibration for Prosthetic Grip Sensing",
    highlight:
      "Designed a calibration workflow to translate noisy FSR voltage readings into interpretable grip-force estimates.",
    tags: ["Circuits", "Calibration", "Prosthetics", "Protocols"],
    tech: "Arduino, FSRs, voltage divider, data calibration",
    images: [
      { src: "/images/projects/fsr/set_up_with_clamp.webp", alt: "Clamp set-up" }
    ],
    links: [
      { label: "Repo", href: "https://github.com/kreeethi/fsr-calibration" },
      { label: "Demo Video", href: "https://youtu.be/62SAwx68mfI?si=2xxjBSnZVEQOxt-A" },
    ],
    sections: [
      {
        heading: "What I did",
        bullets: [
          "Owned planning + task breakdown so calibration became a reusable workflow.",
          "Designed the circuit from the FSR documentation and sensor behavior.",
          "Derived voltage-divider equations to compute resistance from measured voltage.",
          "Wrote a calibration protocol and created a tracking sheet for repeatable runs.",
        ],
      },
      {
        heading: "Why it was hard",
        bullets: [
          "FSRs are finicky: nonlinearity + variability makes “accurate” calibration difficult.",
          "The goal was a stable, repeatable process that can be improved, rather than a perfect curve once.",
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      paragraphs: [
        "The hard part of this project wasn't getting a reading (though sometimes getting an accurate one was difficult); the hard part was calibrating this finicky sensor into something we could trust enough to build on.",
        "I also realized the importance of workflows: having task breakdowns, a clean protocol, and a well-organized tracking sheet were about as important as the circuit itself, especially if future teammates need to calibrate consistently.",
        "Going forward, I’m thinking less in terms of perfect accuracy and more in terms of robustness: what’s the most stable signal we can extract for control and feedback?",
      ],
    },
  },

  {
    id: "iv-alert",
    title: "Multi-sensor Gravity IV Integrity Monitor",
    highlight:
      "Prototyped a multi-sensor IV monitoring concept to distinguish failure modes for early, actionable alerts.",
    tags: ["Sensors", "Prototyping", "Healthcare"],
    tech: "Arduino, sensor fusion, thresholding + predictive logic",
    images: [
      { src: "/images/projects/iv/circuit-close-up.jpeg", alt: "Circuit Close Up" },
      { src: "/images/projects/iv/full-set-up.jpeg", alt: "Full Set Up" },
      { src: "/images/projects/iv/group-pic.jpeg", alt: "Group Picture!" }
    ],
    links: [
      { label: "Repo", href: "https://github.com/kreeethi/final-mth-code-2026" },
      { label: "Presentation", href: "/projects/iv-alert/iv-presentation.pdf" },
      { label: "Video", href: "https://youtu.be/rf8NxCiG18U" },
    ],
    sections: [
      {
        heading: "What I did",
        bullets: [
          "Defined failure modes (leak, occlusion) and translated them into measurable signals.",
          "Designed a multi-sensor (water level sensor & photoresistor) approach to increase reliability compared to single-sensor detection.",
          "Built and iterated on the circuit design.",
          "Implemented early alert logic aimed at reducing nurse workload.",
        ],
      },
      {
        heading: "Why it was hard",
        bullets: [
          "Photoresistors are slow and finicky. Our initial plan was to detect drip rate, but we had to pivot to using it to determine whether there was water flow or not.",
          "Each sensor has edge cases. We had to decide how to combine signals without overfitting to one.",
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      paragraphs: [
        "This project pushed me toward the kind of engineering I like most: extracting a trustworthy signal from messy reality and designing a system around failure modes rather than ideal behavior.",
        "It also made the limits of single-sensor solutions more obvious. Sensor redundancy doesn't just mean more signals, it means more reliability.",
      ],
    },
  },

  {
    id: "cat-toy",
    title: "PIR-based Interactive Cat Toy",
    highlight:
      "Designed a PIR sensor-driven cat toy using a state machine to create responsive behavior based on motion detection.",
    tags: ["Embedded Systems", "PIR Sensor", "State Machines"],
    tech: "Arduino, PIR sensor, servo motor, finite state machine logic",
    images: [
      { src: "/images/projects/pir/final-circuit.png", alt: "Final PIR circuit" }
    ],
    links: [
      { label: "State Diagram", href: "/projects/cat-toy/cat-toy-state-diagram.pdf" },
      { label: "Prototyping Process (PDF)", href: "/projects/cat-toy/cat-toy-prototyping-process-2.pdf" },
      { label: "Demo Video", href: "https://youtu.be/BjBKAhAz6ts?si=Je_egIbfmNa8WPfo" },
    ],
    sections: [
      {
        heading: "The Problem",
        bullets: [
          "Most interactive toys fall into predictable loops, and can lose engagement quickly.",
          "The goal with this cat toy was to create interactions that responded to the behavior of the cats to retain engagement.",
        ],
      },
      {
        heading: "The Process",
        bullets: [
          "Set-up servo motor originally with FSR-based circuit.",
          "FSR had too slow of a response, and was too finicky so I switched to a PIR sensor",
          "Designed a finite state machine to structure behavior across idle, attract, and active engagement states",
          "Shifted from loop-based control to event-driven logic so behavior was responding to real-time input",
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      paragraphs: [
        "Rather than the behavior of the servo motor being a loop of actions, its behavior depended on a system of states and transitions",
        "I am excited to test a more developed version on my cats - I suspect that there's a lot I can do to make the design more interactive, such as adjusting the timing and variability",
      ],
    },
  },
  {
    id: "arm-band",
    title: "Integration of Vibration Motors for Prosthetic Haptic Feedback",
    highlight:
      "Prototyped spring-cord lock mechanism and an iteratively fabricated arm band for haptic feedback integration.",
    tags: ["CAD", "Integration", "Prosthetics", "Prototyping"],
    tech: "Fusion 360, Neoprene, 3D Printing, Bambu Studio, Sewing",
    images: [
      { src: "/images/projects/arm-band/cad.png", alt: "CAD model for arm-band clasp" }
    ],
    links: [
      { label: "Design Sketches", href: "/projects/arm-band/prototype-design.pdf" },
    ],
    sections: [
      {
        heading: "What I did",
        bullets: [
          "Brainstormed spring-cord locking mechanism for secure and adjustable integration of vibration motors.",
          "Created initial design sketches and prototyping diagrams.",
          "Modified a related CAD model to meet functional constraints.",
          "Sewed and iterated through multiple arm-band prototypes, adapting techniques to handle neoprene's material qualities.",
        ],
      },
      {
        heading: "Design challenges",
        bullets: [
          "Material trade-offs: Neoprene is ideal for comfort and flexibility, but is difficult to sew.",
          "Comfort vs. stability: Ensuring secure attachment without leading to discomfort or restricted movement.",
          "Integration: Everything was very small. Fitting motors, wiring, and the locking mechanism into something compact was challenging.",
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      paragraphs: [
        "I learned how important designing and documenting different ideas/prototypes was. Even though the spring-cord lock mechanism was not the final version, an earlier design I had developed (sliding track) was used.",
        "Small mechanical and material decisions compound in wearable systems.",
        "We made changes to the arm band almost weekly. Iterating both physically and in CAD was essential to understand comfort and functionality.",
      ],
    },
  },
];
