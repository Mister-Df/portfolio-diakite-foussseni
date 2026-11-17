import { Code2, Database, Palette, Smartphone } from "lucide-react";
import image1 from "../assets/co.png";

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "TypeScript",
      "React.js",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    items: ["PHP", "Laravel", "API REST", "MySQL", "Authentification", "CRUD"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "Dart", "Applications Android & iOS"],
  },
  {
    title: "Outils & design",
    icon: Palette,
    items: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Premiere Pro",
    ],
  },
];

export const projects = [
  {
    number: "01",
    category: "APPLICATION WEB",
    title: "Application web moderne",
    description:
      "Interface responsive développée avec React et TypeScript, gestion des états et consommation d’API REST.",
    stack: ["React", "TypeScript", "REST API"],
    icon: Code2,
    image: image1,
    color: "mint",
    details:
      "Projet personnel orienté frontend : construction d'une interface claire, réutilisable et adaptée aux écrans mobiles. Les données sont récupérées depuis une API REST.",
  },
  {
    number: "02",
    category: "BACKEND · API",
    title: "API & back-office",
    description:
      "Back-office Laravel avec authentification, opérations CRUD et gestion des données dans MySQL.",
    stack: ["Laravel", "PHP", "MySQL"],
    icon: Database,
    color: "violet",
    details:
      "Mise en place de la logique serveur, des routes API, de l'authentification et des fonctionnalités de création, lecture, modification et suppression.",
  },
  {
    number: "03",
    category: "APPLICATION MOBILE",
    title: "Application mobile Flutter",
    description:
      "Application cross-platform conçue avec Flutter et Dart, connectée à une API pour échanger des données.",
    stack: ["Flutter", "Dart", "API REST"],
    icon: Smartphone,
    color: "blue",
    details:
      "Projet mobile personnel visant une expérience cohérente sur Android et iOS, avec intégration d'une API distante.",
  },
];

export const timeline = [
  {
    year: "2025 — 2026",
    title: "Licence professionnelle en génie logiciel",
    place: "2IFGT",
    text: "Formation orientée conception, développement et réalisation de solutions logicielles.",
  },
  {
    year: "2024 — 2025",
    title: "BTS en communication visuelle",
    place: "ESMA · Marcory",
    text: "Acquisition de bases solides en création visuelle, composition et communication graphique.",
  },
  {
    year: "2022 — 2023",
    title: "Baccalauréat · série A",
    place: "Lycée Moderne 3 · Agboville",
    text: "Obtention du baccalauréat.",
  },
];