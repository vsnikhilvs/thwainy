import temp from "@/assets/temp.svg";
import insulation from "@/assets/insulation.svg";
import voltage from "@/assets/voltage.svg";
import canopy_icon from "@/assets/icons/CanopyIcon"
import compactor_icon from "@/assets/icons/CompactorIcon"
import compressor_icon from "@/assets/icons/CompressorIcon"
import generator_icon from "@/assets/icons/GeneratorIcon"
import lift_icon from "@/assets/icons/LiftIcon"
import tank_icon from "@/assets/icons/TankIcon"

export const constants = {
  categories: [
    {
      categoryId: "generators",
      title: "Generators",
      icon: generator_icon,
    },
    {
      categoryId: "screwcompressor",
      title: "Screw Compressor",
      icon: canopy_icon,
    },
    {
      categoryId: "gripper",
      title: "Gripper",
      icon: compressor_icon,
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
            image: temp,
            title: "Reliability",
            description:
              "Achieves a 900 temperature rise at 400 ambient conditions.",
          },
          {
            image: insulation,
            title: "Low Fuel Consumption",
            description: "Built with class H insulation for enhanced safety",
          },
          {
            image: voltage,
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
            value: 'THWAINY–EP–15kVA, THWAINY–EP–600kVA',
          },
          {
            item: 'Capacities (Continuous kVA)',
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
        title: "Screw Compressor",
        description:
          "Discover the convenience of our generator canopies available for sale. Whether it's for events, construction sites, or short-term projects, our reliable and well-maintained canopies provide hassle-free access to enhance your operations.",
        features: [
          {
            image: temp,
            title: "Schools",
            description:
              "Generator canopies guarantee uninterrupted power, noise reduction, extended generator lifespan, and a controlled environment for smooth school operations.",
          },
          {
            image: insulation,
            title: "Parks",
            description:
              "Canopies protect generators used for lighting, water pumps, or park amenities, safeguarding them against weather conditions and minimizing noise pollution.",
          },
          {
            image: voltage,
            title: "Restaurants",
            description:
              "In outdoor settings, generator canopies offer backup power, controlling engine overheating and shielding against rain and sunlight.",
          },
        ],
        specification: [
          {
            item: 'Product',
            value: 'Screw Compressor',
          },
          {
            item: 'Models',
            value: 'THWAINY–EP–15kVA, THWAINY–EP–600kVA',
          },
          {
            item: 'Capacities (Continuous kVA)',
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
      categoryId: "gripper",
      value: {
        machineId: "GRID001",
        title: "Gripper",
        description:
          "Expertly crafted, our Bunded tanks ensure the secure storage and transportation of diesel fuel. These tanks function as auxiliary fuel sources, effectively fueling many engines and additional equipment via a dedicated pump. All enclosed within a lockable access hatch for maximum safety.",
        features: [
          {
            image: temp,
            title: "On-site Fuel Supply",
            description:
              "The Bunded tank range offers the perfect solution for short-term on-site fuel storage needs",
          },
          {
            image: insulation,
            title: "Generator and Auxilliary Equipment",
            description:
              " The Bunded tank can simultaneously connect to a diesel-powered piece of equipment and dispense fuel through a pump.",
          },
          {
            image: voltage,
            title: "Fleet Refuelling",
            description:
              "Fleet refueling becomes seamless with the Bunded tank, minimizing downtime in remote locations or on your site",
          },
        ],
        specification: [
          {
            item: 'Product',
            value: 'Gripper',
          },
          {
            item: 'Power',
            value: '8.5 kW',
          },
          {
            item: 'Volume per Stroke',
            value: '1.15 m3',
          },
          {
            item: 'Volume per Hour',
            value: '95 m3  (Theoretical)',
          },
          {
            item: 'Cycle Time',
            value: '51 seconds (Average)',
          },
          {
            item: 'Penetration Depth',
            value: '420 mm',
          },
          {
            item: 'Filling Opening',
            value: '960 x 1860 mm (bottom), 1470 x 1860 mm (top)',
          },
          {
            item: 'Filling Height',
            value: '1400 mm',
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
          "Expertly crafted, our Bunded tanks ensure the secure storage and transportation of diesel fuel. These tanks function as auxiliary fuel sources, effectively fueling many engines and additional equipment via a dedicated pump. All enclosed within a lockable access hatch for maximum safety.",
        features: [
          {
            image: temp,
            title: "On-site Fuel Supply",
            description:
              "The Bunded tank range offers the perfect solution for short-term on-site fuel storage needs",
          },
          {
            image: insulation,
            title: "Generator and Auxilliary Equipment",
            description:
              " The Bunded tank can simultaneously connect to a diesel-powered piece of equipment and dispense fuel through a pump.",
          },
          {
            image: voltage,
            title: "Fleet Refuelling",
            description:
              "Fleet refueling becomes seamless with the Bunded tank, minimizing downtime in remote locations or on your site",
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
          "Expertly crafted, our Bunded tanks ensure the secure storage and transportation of diesel fuel. These tanks function as auxiliary fuel sources, effectively fueling many engines and additional equipment via a dedicated pump. All enclosed within a lockable access hatch for maximum safety.",
        features: [
          {
            image: temp,
            title: "On-site Fuel Supply",
            description:
              "The Bunded tank range offers the perfect solution for short-term on-site fuel storage needs",
          },
          {
            image: insulation,
            title: "Generator and Auxilliary Equipment",
            description:
              " The Bunded tank can simultaneously connect to a diesel-powered piece of equipment and dispense fuel through a pump.",
          },
          {
            image: voltage,
            title: "Fleet Refuelling",
            description:
              "Fleet refueling becomes seamless with the Bunded tank, minimizing downtime in remote locations or on your site",
          },
        ],
        specification: [
          {
            item: 'Product',
            value: 'Stationary Compactor',
          },
          {
            item: 'Models',
            value: 'TC 16, TC 18, TC 20, TC 22',
          },
          {
            item: 'Capacities (m3)',
            value: '16m3 – 18m3 – 20 m3 – 22 m3 ',
          },
          {
            item: 'Motor Power',
            value: '7.5 kW',
          },
          {
            item: 'Filling Height ',
            value: '1380 mm',
          },
          {
            item: 'Press Force',
            value: '340 kN',
          },
        ],
      },
    },
  ],
};
