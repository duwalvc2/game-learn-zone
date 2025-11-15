import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-12 rounded-3xl border border-primary/20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Únete a miles de estudiantes exitosos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Listo para Transformar tu{" "}
            <span className="gradient-text glow-purple">Experiencia Educativa?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comienza hoy mismo tu aventura de aprendizaje. Sin tarjeta de crédito requerida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
              Comenzar Gratis Ahora
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Hablar con Ventas
            </Button>
          </div>

          <div className="pt-6 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-accent">✓</span>
              <span>14 días gratis</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-accent">✓</span>
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-accent">✓</span>
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
