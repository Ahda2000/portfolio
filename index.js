import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
});

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const projects = [
    { title: "Robotic Arm", description: "Carbon fiber robotic arm with ELRS control.", model: "robotic_arm.glb" },
    { title: "Emotion AI", description: "AI model for biosensor-based emotion analysis.", model: "emotion_ai.glb" },
    { title: "3D Printed Gearbox", description: "Custom gearbox for a mechanical project.", model: "gearbox.glb" },
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen transition-all" style={{ backgroundColor: darkMode ? "#121212" : "#f5f5f5" }}>
      <div className="flex justify-between items-center mb-6">
        <Input
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3"
        />
        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        <Link href="/resume.pdf" target="_blank">
          <Button>Download Resume</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card className="p-4 shadow-md rounded-2xl">
              <h3 className="text-lg font-semibold text-forest-green">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              <ModelViewer src={`/models/${project.model}`} />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
