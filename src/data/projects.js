export const projects = [
  {
    id: "fsr",
    title: "FSR Calibration for Prosthetic Grip Sensing",
    highlight:
      "Designed a calibration workflow to translate noisy FSR voltage readings into interpretable grip-force estimates.",
    tags: ["Circuits", "Calibration", "Prosthetics", "Protocols"],
    tech: "Arduino, FSRs, voltage divider, data calibration",
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
      {
        heading: "Next steps",
        bullets: [
          "Build a modular mounting/integration system for an FSR in a prosthetic finger.",
          "Test how placement affects signal stability and usable force range.",
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
      {
        heading: "Next steps",
        bullets: [
          "Using more predictive modeling (i.e. drip rate) to improve early alerts.",
          "More compact assembly - converting circuit into PCB design.",
          "Implementing a movement-based ML model to determine which patient movements might trigger IV failure.",
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
    links: [
      { label: "State Diagram", href: "/projects/cat-toy/cat-toy-state-diagram.pdf" },
      { label: "Prototyping Process (PDF)", href: "/project/cat-toy/cat-toy-prototyping-process.pdf" },
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
      {
        heading: "The Outcome",
        bullets: [
          "Produced a working prototype with distinct behavioral states and responsive transitions",
          "Achieved more varied and less predictable motion compared to simple loop-based design",
          "Still slightly finicky and may not accurately represent prey like behavior for cats",
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
    id: "neuro",
    title: "Neuronal Modeling & Analysis",
    highlight:
      "Implemented small computational neuroscience tools to connect theory to code and intuition.",
    tags: ["Neuro", "Modeling", "Python"],
    tech: "Python, NumPy, Matplotlib",
    images: [],
    links: [
      { label: "Repo", href: "https://github.com/kreeethi/comp-neuro" }
    ],
    sections: [
      {
        heading: "What it includes (so far)",
        bullets: [
          "Leaky integrate-and-fire neuron simulations",
          "Spike-triggered averaging (STA) experiments",
          "Oja’s rule as a simple plasticity model",
        ],
      },
      {
        heading: "Direction",
        bullets: [
          "Gain conceptual understanding of computational neuroscience topics.",
          "Turn each concept into a notebook-style, reflective writeup with plots.",
          "Build toward population-level models or sensory encoding mini-studies.",
        ],
      },
      {
        heading: "Next steps",
        bullets: [
          "Select a narrative thread and do a 'case-study' deep dive.",
          "Add a small artifact gallery of plots and explanatory figures.",
        ],
      },
    ],
    reflection: {
      heading: "Reflection",
      paragraphs: [
        "I like projects like this because they force clarity: if I can’t explain the behavior with a plot and a few sentences, I don’t really understand it.",
        "This is my sandbox for building intuition that I can later bring into real neural signals and closed-loop systems.",
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
      {
        heading: "Outcome",
        bullets: [
          "Produced a functional prototype that was used for testing of the vibration motors.",
          "Established a modular mechanical design that could be easily further developed for future iterations.",
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
