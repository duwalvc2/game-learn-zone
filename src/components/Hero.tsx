import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Educación del Futuro</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Aprende Jugando,{" "}
            <span className="gradient-text glow-purple">
              Triunfa Aprendiendo
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plataforma educativa gamificada que transforma el aprendizaje en una aventura emocionante. 
            Desafíos, logros y recompensas para estudiantes de todas las edades.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
              Comenzar Aventura
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Ver Demo
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-12 text-sm text-muted-foreground">
            <div>
              <div className="text-3xl font-bold text-foreground">50K+</div>
              <div>Estudiantes Activos</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-foreground">1M+</div>
              <div>Misiones Completadas</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div>Escuelas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
