import { Card } from "@/components/ui/card";
import { GraduationCap, Users2, TrendingUp } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Beneficios para <span className="gradient-text">Todos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una solución completa que transforma la experiencia educativa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur border-border space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Para Estudiantes</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Aprende a tu propio ritmo de forma divertida</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Desarrolla habilidades mientras juegas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Compite sanamente con tus compañeros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Recibe reconocimiento por tus logros</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Users2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Para Profesores</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Herramientas para motivar a tus alumnos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Seguimiento detallado del progreso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Contenido listo para usar y personalizar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Ahorra tiempo en preparación de clases</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Para Instituciones</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Mejora el rendimiento académico general</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Reduce la deserción escolar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Informes y analíticas completas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Diferénciate con tecnología innovadora</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
