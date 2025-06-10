import gasAnalyzer1 from "../assets/images/gas-analyzers/H2,Ar,He-Gas-analyzer-1.jpg";
import gasAnalyzer2 from "../assets/images/gas-analyzers/CEMS-2.jpg";
import gasAnalyzer3 from "../assets/images/gas-analyzers/Moisture-meter-3.jpeg";
import gasAnalyzer4 from "../assets/images/gas-analyzers/Multi-components-analyser-4.jpg";
import gasAnalyzer5 from "../assets/images/gas-analyzers/oxygen-analyzer-5.jpg";
import gasAnalyzer6 from "../assets/images/gas-analyzers/Oxygen-analyzer-6.jpeg";
import gasAnalyzer7 from "../assets/images/gas-analyzers/trace-7.png";

import liquidAnalyzer1 from "../assets/images/liquid-analyzers/conductivity-meter-1.png";
import liquidAnalyzer2 from "../assets/images/liquid-analyzers/ph-meter-2.png";

import sampleHandlingSystem1 from "../assets/images/sample-handling-system/SHS-hydrogen-1.jpeg";
import sampleHandlingSystem2 from "../assets/images/sample-handling-system/SHS-air-seperation-2.jpeg";
import sampleHandlingSystem3 from "../assets/images/sample-handling-system/SHS-process-3.jpeg";
import sampleHandlingSystem4 from "../assets/images/sample-handling-system/SHS-process-3.jpeg";

import swas1 from "../assets/images/SWAS & it's Components/SWAS-Panel-1.png";
import swas2 from "../assets/images/SWAS & it's Components/QCS-Sample-cooler2.jpg";
import swas3 from "../assets/images/SWAS & it's Components/QCS-Dual-Cation-Column-3.jpeg";

import gasAnalyzersComponents1 from "../assets/images/gas-analyzrs-component/3-way-ball-Valve-QCS-1.png";
import gasAnalyzersComponents2 from "../assets/images/gas-analyzrs-component/Dual-Stage-Cylinder-Regulator-QCS-2.png";
import gasAnalyzersComponents3 from "../assets/images/gas-analyzrs-component/Line-Regulator-QCS-3.png";
import gasAnalyzersComponents4 from "../assets/images/gas-analyzrs-component/Male-Connector-QCS-4.png";
import gasAnalyzersComponents5 from "../assets/images/gas-analyzrs-component/Moistrue-Trapper-QCS-5.png";
import gasAnalyzersComponents6 from "../assets/images/gas-analyzrs-component/Needle-Valve-QCS-6.png";
import gasAnalyzersComponents7 from "../assets/images/gas-analyzrs-component/Tee-QCS-7.png";
import gasAnalyzersComponents8 from "../assets/images/gas-analyzrs-component/QCS-Flowmeter-Photoroom-8.png";

import probe1 from "../assets/images/probes&filters/Probe.png";
import probe2 from "../assets/images/probes&filters/Sample-Filter-Housing.png";
import probe3 from "../assets/images/probes&filters/Sample-Probe-For-In-Situ Zirconia Analyzer.png";

import other1 from "../assets/images/other-accessories/Temperature-Sensor.png";
import other2 from "../assets/images/other-accessories/Tabular-Furnace.jpeg";

export interface Service {
  id: number;
  image: string;
  title: string;
  desc: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 1,
    image: gasAnalyzer1,
    title: "Ar,He,H2 TCD-Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    id: 2,
    image: gasAnalyzer2,
    title: "CEMS Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    id: 3,
    image: gasAnalyzer3,
    title: "Moisture Meter",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    id: 4,
    image: gasAnalyzer4,
    title: "Multi-component Gas Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    id: 5,
    image: gasAnalyzer5,
    title: "Oxygen Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    id: 6,
    image: gasAnalyzer6,
    title: "In-situ Oxygen Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    id: 7,
    image: gasAnalyzer7,
    title: "Trace Nitrogen Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    id: 8,
    image: liquidAnalyzer1,
    title: "Conductivity Meter",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Liquid Analyzers",
  },
  {
    id: 9,
    image: liquidAnalyzer2,
    title: "pH Meter",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Liquid Analyzers",
  },
  {
    id: 10,
    image: sampleHandlingSystem1,
    title: "Sample Handling System hydrogen",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Sample Handling System",
  },
  {
    id: 11,
    image: sampleHandlingSystem2,
    title: "Sample Handling System Air Separation",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Sample Handling System",
  },
  {
    id: 12,
    image: sampleHandlingSystem3,
    title: "Sample Handling System Process",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Sample Handling System",
  },
  {
    id: 13,
    image: sampleHandlingSystem4,
    title: "Sample Handling System Process",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Sample Handling System",
  },
  {
    id: 14,
    image: gasAnalyzersComponents1,
    title: "3-Way Ball Valve",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    id: 15,
    image: gasAnalyzersComponents2,
    title: "Dual Stage Cylinder Regulator",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    id: 16,
    image: gasAnalyzersComponents3,
    title: "Line Regulator",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    id: 17,
    image: gasAnalyzersComponents4,
    title: "Male Connector",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    id: 18,
    image: gasAnalyzersComponents5,
    title: "Moisture Trapper",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    id: 19,
    image: gasAnalyzersComponents6,
    title: "Needle Valve",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    id: 20,
    image: gasAnalyzersComponents7,
    title: "Tee",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    id: 21,
    image: gasAnalyzersComponents8,
    title: "Flowmeter",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    id: 22,
    image: swas1,
    title: "SWAS Panel Dry & Wet",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "SWAS & It's Components",
  },
  {
    id: 23,
    image: swas2,
    title: "Sample Cooler",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "SWAS & It's Components",
  },
  {
    id: 24,
    image: swas3,
    title: "Dual Cation Column",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "SWAS & It's Components",
  },
  {
    id: 25,
    image: probe1,
    title: "Probe",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Probes & Filters",
  },
  {
    id: 26,
    image: probe2,
    title: "Sample Gas Filter Housing",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Probes & Filters",
  },
  {
    id: 27,
    image: probe3,
    title: "Sample Probe for In-situ Zirconia Analyzer",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Probes & Filters",
  },
  {
    id: 28,
    image: other1,
    title: "Temperature Sensor",
    desc: "Data-driven marketing campaigns that increase visibility and deliver measurable ROI.",
    category: "Other Accessories",
  },
  {
    id: 29,
    image: other2,
    title: "Tabuler Furnace",
    desc: "Data-driven marketing campaigns that increase visibility and deliver measurable ROI.",
    category: "Other Accessories",
  },
];
