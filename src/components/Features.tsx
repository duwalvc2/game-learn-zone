import { Card } from "@/components/ui/card";
import { Trophy, Target, Users, Zap, Star, BookOpen } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Logros y Recompensas",
    description: "Sistema de logros que motiva a los estudiantes a superar sus límites y celebrar cada victoria.",
  },
  {
    icon: Target,
    title: "Misiones Personalizadas",
    description: "Desafíos adaptados al nivel de cada estudiante para mantener el interés y el progreso constante.",
  },
  {
    icon: Users,
    title: "Competencia Sana",
    description: "Tablas de clasificación y torneos que fomentan la competencia amistosa entre compañeros.",
  },
  {
    icon: Zap,
    title: "Aprendizaje Rápido",
    description: "Metodología basada en juegos que acelera la retención y comprensión de conceptos.",
  },
  {
    icon: Star,
    title: "Progreso Visual",
    description: "Avatares, niveles y estadísticas que muestran el crecimiento del estudiante en tiempo real.",
  },
  {
    icon: BookOpen,
    title: "Contenido Interactivo",
    description: "Lecciones multimedia que transforman materias complejas en experiencias divertidas.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Características que <span className="gradient-text">Impulsan el Éxito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas diseñadas para hacer del aprendizaje una experiencia memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
