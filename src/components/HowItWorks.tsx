import { Card } from "@/components/ui/card";
import { UserPlus, Gamepad2, Award, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Regístrate",
    description: "Crea tu cuenta y personaliza tu avatar en minutos",
    step: "01",
  },
  {
    icon: Gamepad2,
    title: "Elige tu Misión",
    description: "Selecciona desafíos según tu nivel y materia favorita",
    step: "02",
  },
  {
    icon: Award,
    title: "Completa y Gana",
    description: "Resuelve desafíos, gana puntos y desbloquea recompensas",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Sube de Nivel",
    description: "Avanza en tu viaje educativo y alcanza nuevas metas",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Cómo <span className="gradient-text">Funciona?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comienza tu aventura educativa en solo 4 simples pasos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border relative group hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
