import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const projects = [
  { title: "Graschatium", description: "Projet créatif et innovant", link: "/graschatium" },
  { title: "Legraschat Creative FTN", description: "Développement créatif sur Fortnite", link: "/creative-ftn" },
  { title: "Legraschat Dev. Roblox", description: "Développement de jeux sur Roblox", link: "/dev-roblox" },
  { title: "Legraschat Dev. Discord", description: "Création de bots et services Discord", link: "/dev-discord" },
];

const team = [
  { name: "Membre 1", role: "Développeur" },
  { name: "Membre 2", role: "Designer" },
];

const jobs = [
  { title: "Développeur Web", company: "Entreprise X", description: "Création et maintenance de sites web" },
  { title: "Développeur Backend", company: "Entreprise Y", description: "Développement d'API et gestion des bases de données" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Mon Portfolio</h1>
        <p className="text-lg mt-2">Développeur & Créateur</p>
      </header>
      
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-4 bg-gray-700">
              <CardContent>
                <h3 className="text-xl font-semibold text-yellow-300">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <Button className="mt-4" asChild>
                  <Link to={project.link}>Voir le projet</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="p-4 bg-gray-700">
              <CardContent>
                <h3 className="text-xl font-semibold text-green-300">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-red-400">Emplois</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <Card key={index} className="p-4 bg-gray-700">
              <CardContent>
                <h3 className="text-xl font-semibold text-red-300">{job.title}</h3>
                <p className="text-gray-300">{job.company}</p>
                <p className="text-gray-400">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <footer className="text-center py-10">
        <p className="text-blue-300">Rejoignez-moi sur Discord</p>
        <Button asChild>
          <a href="https://discord.gg/77V3ryPTr3">Rejoindre</a>
        </Button>
      </footer>
    </div>
  );
}

function ProjectPage({ title, description }) {
  return (
    <div className="min-h-screen bg-blue-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{description}</p>
      <Button asChild>
        <Link to="/">Retour au portfolio</Link>
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/graschatium" element={<ProjectPage title="Graschatium" description="Projet créatif et innovant" />} />
        <Route path="/creative-ftn" element={<ProjectPage title="Legraschat Creative FTN" description="Développement créatif sur Fortnite" />} />
        <Route path="/dev-roblox" element={<ProjectPage title="Legraschat Dev. Roblox" description="Développement de jeux sur Roblox" />} />
        <Route path="/dev-discord" element={<ProjectPage title="Legraschat Dev. Discord" description="Création de bots et services Discord" />} />
      </Routes>
    </Router>
  );
}
