import factories from "@/assets/factories.svg";
import maintainability_screw from "@/assets/maintainability_screw.svg";
import process_plants from "@/assets/process_plants.svg";
import co2_emissions from "@/assets/co2_emissions.svg";
import compatibility from "@/assets/compatibility.svg";
import low_fuel_consumption from "@/assets/low_fuel_consumption.svg";
import maintainability_gripper from "@/assets/maintainability_gripper.svg";
import reliability_0 from "@/assets/reliability_0.svg";
import reliability_1 from "@/assets/reliability_1.svg";
import heights from "@/assets/heights.svg";
import ease from "@/assets/ease.svg";
import customizable from "@/assets/customizable.svg";
import cost from "@/assets/cost.svg";
import env_benefits from "@/assets/env_benefits.svg";
import waste_red from "@/assets/waste_red.svg";
import canopy_icon from "@/assets/icons/CanopyIcon"
import compactor_icon from "@/assets/icons/CompactorIcon"
import compressor_icon from "@/assets/icons/CompressorIcon"
import gripper_icon from "@/assets/icons/GripeerIcon"
import lift_icon from "@/assets/icons/LiftIcon"

export const constants = {
  categories: [
    {
      categoryId: "generators",
      title: "Generators",
      icon: canopy_icon,
    },
    {
      categoryId: "screwcompressor",
      title: "Stationary Screw Compressor",
      icon: compressor_icon,
    },
    {
      categoryId: "gripper",
      title: "Gripper",
      icon: gripper_icon,
    },
    {
      categoryId: "scissorlift",
      title: "Electric Scissor Lift",
      icon: lift_icon,
    },
    {
      categoryId: "compactor",
      title: "Stationary Compactor",
      icon: compactor_icon,
    },
  ],
  data: [
    {
      categoryId: "generators",
      value: {
        machineId: "GID001",
        title: "Generators",
        description:
          "Introducing our versatile generator solutions, available for both rental and sale, providing you with flexibility and convenience",
        features: [
          {
            image: reliability_1,
            title: "Reliability",
            description:
              "It achieves 90 degrees at 40 degrees ambient conditions.",
          },
          {
            image: low_fuel_consumption,
            title: "Low Fuel Consumption",
            description: "Built with class H insulation for enhanced safety",
          },
          {
            image: co2_emissions,
            title: "Fewer CO2 Emmisions",
            description:
              "Maintains voltage within ±0.5% for stable power output.",
          },
        ],
        specification: [
          {
            item: 'Product',
            value: 'Diesel Generator',
          },
          {
            item: 'Models',
            value: 'THWAINY–EP–15kVA upto THWAINY–EP–600kVA',
          },
          {
            item: 'Capacities (Cont. kVA)',
            value: '15 – 20 – 25 – 35 – 45 – 50 – 60 – 75 – 100 – 125 – 150 – 200 – 300 – 400 – 500 – 600',
          },
          {
            item: 'Voltage',
            value: '190～220/190～240V, 380～440/380～480V',
          },
          {
            item: 'Power Factor',
            value: 'Three Phase 0.8 Power Factor',
          },
          {
            item: 'Engine',
            value: 'Moteurs Baudouin',
          },
          {
            item: 'Alternator',
            value: 'Yanan',
          },
          {
            item: 'Sound',
            value: '50Hz - 60dB, 60Hz - 63dB',
          },
        ],
        options: [
          'Intermediate models can be provided upon request',
          'Greater capacities can be provided upon request',
          'Automatic Transfer Switch',
          'Block Heaters',
        ]
      },
    },
    {
      categoryId: "screwcompressor",
      value: {
        machineId: "SCID001",
        title: "Stationary Screw Compressor",
        description:
          "With high-end designs, advanced features, and technologies that offer cost-effective, long-lasting, reliable, and premium compressed air solutions suitable for light to heavy-duty industrial applications",
        features: [
          {
            image: process_plants,
            title: "Process Plants",
            description:
              "Favored for their ability to deliver a continuous supply of compressed air with high efficiency and low maintenance requirements.",
          },
          {
            image: factories,
            title: "Factories",
            description:
              "Favored for their efficiency, durability, and ability to operate under high demand, help maintain consistent production quality. A cost-effective choice for industrial applications",
          },
          {
            image: maintainability_screw,
            title: "Oil Fields",
            description:
              "Robust design allows them to operate efficiently in harsh environments, delivering high-pressure air for powering pneumatic tools, maintaining pressure in pipelines, and enhancing oil extraction processes.",
          },
        ],
        specification: [
          {
            item: 'Product',
            value: 'Thwainy - SC',
          },
          {
            item: 'Models',
            value: 'THWAINY–SSC, THWAINY–PSC',
          },
          {
            item: 'Pressure',
            value: '5 - 15 Bar',
          },
          {
            item: 'Flow rate',
            value: '0.8 - 14.2 m3/s',
          },
          {
            item: 'Power',
            value: '15 - 90 kW',
          },
        ],
        options: [
          'Interated dryer can be provided upon request',
          'Variable Frequency Drive can be provided upon request',
          'Food grade lubricants can be provided upon request',
          'Post Filtration Systems can be provided upon request',
          'Remote starting can be provided upon request',
        ]
      },
    },
    {
      categoryId: "gripper",
      value: {
        machineId: "GRID001",
        title: "Gripper",
        description:
          "The ultimate tool for handling blocks with ease. Its ergonomic design ensures a secure grip, reducing strain and increasing efficiency. Ideal for construction and landscaping. Thwainy industries' Block Gripper is durable, lightweight and versatile. Make your block-lifting tasks safer and faster with Thwainy Industries' Block Gripper",
        features: [
          {
            image: reliability_0,
            title: "Reliability",
            description:
              "Designed to be highly reliable and robust",
          },
          {
            image: compatibility,
            title: "Compatibility",
            description:
              "Sturdy gripper systems suitable for handling a wide range of parts",
          },
          {
            image: maintainability_gripper,
            title: "Maintainability",
            description:
              "Easy to maintain, saving cost and time for the upcoming uses",
          },
        ],
        specification: [
          {
            item: 'Product',
            value: 'Gripper',
          },
          {
            item: 'Top maximum width',
            value: '1220 - 1850 mm',
          },
          {
            item: 'Distance between jaws',
            value: '780 - 1400 mm',
          },
          {
            item: 'Outer height',
            value: '1090 - 1510 mm',
          },
          {
            item: 'Inner height',
            value: '780 - 1208 mm',
          },
          {
            item: 'Jaw length',
            value: '1200 mm',
          },
          {
            item: 'Maximum load',
            value: '2000 kg',
          },
          {
            item: 'Clamp weight',
            value: '325 kg (average)',
          },
        ],
      },
    },
    {
      categoryId: "scissorlift",
      value: {
        machineId: "SLID001",
        title: "Electric Scissor Lift",
        description:
          "Robust platforms offering great manoeuvrability and maximum versatility for working indoors and outdoors, on construction sites, for fitting out or carrying out maintenance work",
        features: [
          {
            image: heights,
            title: "Access Heights",
            description:
              "Scissor lifts can go up to 32 feet in height, allows your workers to reach spots that would have otherwise been very hard to get to",
          },
          {
            image: ease,
            title: "Ease of Use",
            description:
              "Easy to operate, simple and literally foolproof, decreases the tiredness of operators",
          },
          {
            image: customizable,
            title: "Easily Customizable",
            description:
              "You can fit yours with tilters to minimize falling risk for the operator, fit it with a turntable that allows it to rotate in addition to lifting",
          },
        ],
        specification: [
          {
            item: 'Product',
            value: 'Electric Scissor Lift',
          },
          {
            item: 'Types',
            value: 'TSL 12, TSL 14',
          },
          {
            item: 'Maximum Platform Height (m)',
            value: '12 m - 14 m',
          },
          {
            item: 'Maximum Drive Speed',
            value: '4 km/h',
          },
          {
            item: 'Batteries',
            value: 'Rechargeable 6V',
          },
          {
            item: 'Battery Quantity',
            value: '4 batteries',
          },
        ],
      },
    },
    {
      categoryId: "compactor",
      value: {
        machineId: "SCMID001",
        title: "Stationary Compactor",
        description:
          "Designed to be fixed waste management devices, our stationary compactors are ideal for handling dry waste like cardboard, paper, and other non-organic materials, making them a popular choice for retail outlets, manufacturing facilities, and offices.",
        features: [
          {
            image: waste_red,
            title: "Waste volume reduction",
            description:
              "They can reduce the volume of waste by up to 75%, making waste management more efficient and less frequent",
          },
          {
            image: cost,
            title: "Cost-Effectiveness",
            description:
              "Reduced waste volume means fewer trips for disposal, which translates to lower hauling fees",
          },
          {
            image: env_benefits,
            title: "Environmental Benefits",
            description:
              "By minimizing waste volume, stationary compactors help reduce the carbon footprint associated with waste transport",
          },
        ],
        specification: [
          {
            item: 'Product',
            value: 'Stationary Compactor',
          },
          {
            item: 'Power',
            value: '8.5 kW',
          },
          {
            item: 'Compaction Force',
            value: '340 kN',
          },
          {
            item: 'Volume per stroke',
            value: '1.15 m3',
          },
          {
            item: 'Volume per hour ',
            value: '95 m3 (theoretical)',
          },
          {
            item: 'Cycle time',
            value: '51 seconds (average)',
          },
          {
            item: 'Penetration Depth',
            value: '420 mm',
          },
          {
            item: 'Filling opening',
            value: '960 x 1860 mm (bottom)',
          },
          {
            item: 'Filling opening',
            value: '1470 x 1860 mm (top)',
          },
          {
            item: 'Filling height',
            value: '1400 mm',
          },
        ],
        options: [
          'Lid light on top of filling opening.',
          'Remote controls with 3 metres cable length.',
          'Phase inverter.',
          'Pendulum steel scraper.',
          'Hopper height extensions.',
          'Extra hook-lift systems.',
          'Extra front rollers.',
          'Fold-down hook at the filling opening.',
          'Container lifting system.',
          'Leach component.',
        ]
      },
    },
  ],
};
