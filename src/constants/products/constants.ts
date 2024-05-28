import generator_product from "@/assets/generator_product.png";
import canopies_product from "@/assets/canopies_product.png";
import bunded_product from "@/assets/bunded_product.png";
import temp from "@/assets/temp.svg";
import insulation from "@/assets/insulation.svg";
import voltage from "@/assets/voltage.svg";
import frequency from "@/assets/frequency.svg";
import waveform from "@/assets/waveform.svg";
import insulationresistance from "@/assets/insulationresistance.svg";

export const constants = {
  categories: [
    {
      categoryId: "generators",
      title: "Generators",
    },
    {
      categoryId: "canopies",
      title: "Canopies",
    },
    {
      categoryId: "bundedtank",
      title: "Bunded Tank",
    },
  ],
  data: [
    {
      categoryId: "generators",
      value: {
        machineId: "GID001",
        banner: generator_product,
        title: "First Generator",
        description:
          "Introducing our versatile generator solutions, available for both rental and sale, providing you with flexibility and convenience",
        features: [
          {
            image: temp,
            title: "Temperature rise",
            description:
              "Achieves a 900 temperature rise at 400 ambient conditions.",
          },
          {
            image: insulation,
            title: "Insulation",
            description: "Built with class H insulation for enhanced safety",
          },
          {
            image: voltage,
            title: "Voltage regulation",
            description:
              "Maintains voltage within ±0.5% for stable power output.",
          },
          {
            image: frequency,
            title: "Frequency regulation",
            description:
              "Ensures frequency stability within 5.0% from no-load to full load.",
          },
          {
            image: waveform,
            title: "Voltage waveform",
            description:
              "Guarantees a deviation factor of open-circuit terminal voltage below 0.06.",
          },
          {
            image: insulationresistance,
            title: "Insulation resistance",
            description:
              "Provides insulation resistance higher than 3 mega-ohms, ensuring safety and reliability.",
          },
        ],
        specification: {
          title1: "thwainy",
          title2: "40-ep",
          speciality: "50kva class soundproof type",
          components: [
            {
              title: "Alternator",
              properties: [
                {
                  title: "Frequency",
                  value: "60Hz",
                },
                {
                  title: "Output rating (kVA)",
                  values: [
                    {
                      title: "Continuous",
                      value: "42",
                    },
                    {
                      title: "Standby",
                      value: "50",
                    },
                  ],
                },
                {
                  title: "No. Of phases",
                  value: "3,4-Wire",
                },
              ],
            },
            {
              title: "Engine",
              properties: [
                {
                  title: "Maker Model",
                  values: [{ title: "Cummins", value: "4BTA3.9-G2" }],
                },
                {
                  title: "Output Rating",
                  values: [
                    { title: "PS/rpm", value: "53HP" },
                    { title: "kW/rpm", value: "40kW" },
                  ],
                },
                {
                  title: "Fuel",
                  value: "Diesel-130L",
                },
              ],
            },
            {
              title: "Unit",
              properties: [
                {
                  title: "Dimensions(LxWxH)",
                  values: [{ title: "mm", value: "2300x1000x1450" }],
                },
                {
                  title: "Dry Weight",
                  values: [{ title: "Kg", value: "812" }],
                },
              ],
            },
            {
              title: "Sound Level",
              properties: [
                {
                  title: "Dimensions(LxWxH)",
                  values: [
                    { title: "7M dB(A) 1500/1800 rpm (min^-1)", value: "71" },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      categoryId: "canopies",
      value: {
        machineId: "GID001",
        title: "First Canopy",
        banner: canopies_product,
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
          {
            image: frequency,
            title: "Electric Industries",
            description:
              "Vital for continuous power supply during electrical outages, generator canopies maintain optimal working conditions for equipment.",
          },
          {
            image: waveform,
            title: "Voltage waveform",
            description:
              "Guarantees a deviation factor of open-circuit terminal voltage below 0.06.",
          },
          {
            image: insulationresistance,
            title: "Commercial Buildings",
            description:
              "Canopies support critical systems and equipment, extending generator life, and minimizing noise pollution",
          },
          {
            image: insulationresistance,
            title: "Various Plants",
            description:
              "Whether in manufacturing plants or waste water treatment facilities, generator canopies ensure efficient power generation while reducing environmental noise impact.",
          },
        ],
      },
    },
    {
      categoryId: "bundedtank",
      value: {
        machineId: "GID001",
        title: "Bunded Tank",
        banner: bunded_product,
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
      },
    },
  ],
};
