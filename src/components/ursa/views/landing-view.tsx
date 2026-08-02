"use client";

import { useState } from "react";
import { ViewHero, ViewSection, Card, DossierLinkBanner } from "../view-shell";
import { BearMark, ArtNouveauDivider, Pill, Callout, CupGlyph, EvidenceTag } from "../ursa-brand";
import { Calculator, Coffee, Cookie, Sunrise, Check, ArrowRight, Clock, MapPin, Sparkles, AlertCircle, BookOpen, ShieldCheck, Target, RotateCcw } from "lucide-react";
import { useNavigate } from "@/lib/ursa-nav";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";

/**
 * Ursa Mañana — a polished, customer-facing subscription landing page mockup.
 * This is a PROTOTYPE for review, not a live sign-up form.
 * Spanish (Peru) copy is customer-facing; English strategic notes are marked.
 */
export function LandingView() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [interest, setInterest] = useState("");

  // --- Science cards (Group A — conversion, Group B — risk reversal) -------
  // Each card resolves source, title, finding, and apply copy via
  // t(`content.landing.science.${id}.{field}`). Icon stays inline; tone is
  // implicit from the group (gold for conversion, forest for risk reversal).
  const SCIENCE_CONVERSION = [
    { id: "headline", icon: Target },
    { id: "above-fold", icon: BookOpen },
    { id: "benchmarks", icon: Sparkles },
  ];
  const SCIENCE_RISK = [
    { id: "guarantee", icon: ShieldCheck },
    { id: "trial", icon: Coffee },
    { id: "cancel-anytime", icon: RotateCcw },
  ];

  const benefits = [
    { icon: Coffee, title: "Café ilimitado", desc: "Una taza cada visita, de 7 a 10am, de lunes a viernes. Sin pensar en el precio.", tone: "forest" as const },
    { icon: Cookie, title: "Acompañamientos con descuento", desc: "Cookie, financier de pera o empanada con 20% off para socios. El oso recomienda el maridaje.", tone: "gold" as const },
    { icon: Sunrise, title: "Tu lugar de la mañana", desc: "Una mesa que se vuelve tuya. La barra te conoce. El ritual empieza con el primer gramo.", tone: "terracotta" as const },
    { icon: Sparkles, title: "Acceso al gramo del mes", desc: "Prueba el microlote en rotación antes que nadie. Una cucharada, una historia.", tone: "forest" as const },
  ];

  const faqs = [
    {
      q: "¿De verdad es ilimitado?",
      a: "Una taza por visita, en el local, de 7 a 10am. Sin leche (espresso, americano, filtrado). El límite es uno por visita para que el modelo sea justo para el oso y para ti.",
    },
    {
      q: "¿Puedo llevar para llevar?",
      a: "La suscripción es para tomar en el local. Para llevar, tienes el 15% de descuento en cualquier bebida. La mañana es para quedarse.",
    },
    {
      q: "¿Qué pasa si no vienen una semana?",
      a: "No acumula. La idea es crear el hábito de la mañana, no acumular café. Si no vienes, no pierdes nada — pero pierdes la mañana.",
    },
    {
      q: "¿Es para turistas o regulares?",
      a: "Para regulares de Miraflores. Si vienes de visita, te conviene una cata o un filtrado del día. La suscripción se diseña para quien vive o trabaja cerca de Alcanfores.",
    },
  ];

  return (
    <>
      <ViewHero
        eyebrow={t("content.view.landing.eyebrow")}
        title={<>{t("content.view.landing.title")}</>}
        lede={
          <>
            Una suscripción mensual para los regulares de Alcanfores 183. Café ilimitado de 7 a 10am, de lunes a
            viernes, en el local. Una taza por visita. Sin leche, sin llevar, sin pensar. El ritual de la mañana
            empieza con un gramo.
          </>
        }
        meta={[
          { label: "Precio", value: "S/. 20 / mes" },
          { label: "Ventana", value: "Lun–Vie · 7–10am" },
          { label: "Modalidad", value: "En el local · 1 taza/visita" },
          { label: "Piloto", value: "Cupo limitado a 50" },
        ]}
        tone="gold"
      />

      {/* The pitch */}
      <ViewSection>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 items-start [grid-template-columns:minmax(0,1fr)]">
          <div>
            <Pill tone="gold">La propuesta</Pill>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ursa-dark-roast mt-3 mb-4">
              La mañana es el mejor momento del día para tomar un buen café. Y la mayoría de cafés en Miraflores no abren a tiempo.
            </h2>
            <p className="text-[1rem] text-foreground/85 leading-relaxed mb-4">
              Ursa abre a las 7:30. El molino ya está caliente. El primer filtrado ya está hecho. Los regulares de la
              mañana entran antes de oficina, piden su Ursagroni o su Filtrado Lonya, y arrancan el día con un café
              que se pesó un gramo a la vez.
            </p>
            <p className="text-[1rem] text-foreground/85 leading-relaxed mb-4">
              <strong className="text-ursa-dark-roast">Ursa Mañana</strong> convierte ese ritual en un hábito sin
              fricción. Pagas S/. 20 al mes. Vienes cuando quieras, de lunes a viernes, entre las 7 y las 10 de la
              mañana. Tomas tu café. Listo. Sin cuenta, sin decidir si hoy sí o hoy no. El oso ya te conoce.
            </p>
            <Callout tone="gold" title="El trato del oso">
              <p className="m-0 text-[0.92rem]">
                El café es ilimitado porque lo tostamos nosotros — el costo de una taza más es bajo. Donde el modelo
                funciona es en el acompañamiento: una cookie, un financier, una empanada. Por eso los socios tienen
                20% off en acompañamientos. La mañana completa, no solo el café.
              </p>
            </Callout>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById("join");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ursa-gold text-ursa-dark-roast font-label text-[0.78rem] tracking-[0.12em] uppercase hover:bg-ursa-gold-soft transition shadow-lg"
              >
                Quiero ser socio <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigate("pilot")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ursa-forest-deep/40 text-ursa-forest-deep font-label text-[0.78rem] tracking-[0.12em] uppercase hover:bg-ursa-dark-roast hover:text-ursa-cream transition"
              >
                <Calculator size={16} /> Ver las matemáticas
              </button>
            </div>
          </div>

          {/* Mock membership card */}
          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, var(--color-ursa-medium-roast) 0%, var(--color-ursa-dark-roast) 100%)" }}>
              {/* Art Nouveau texture */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='%23B8924A' stroke-width='0.5' opacity='0.5'><path d='M0 40 Q20 20 40 40 T80 40'/><path d='M0 60 Q20 40 40 60 T80 60'/><circle cx='40' cy='40' r='1.5'/></g></svg>\")",
                }}
              />
              <div className="relative p-6 md:p-7 text-ursa-cream">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 rounded-full bg-ursa-cream grid place-items-center text-ursa-dark-roast ursa-breathe">
                      <BearMark size={26} />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold leading-none m-0 text-ursa-cream">Ursa Mañana</p>
                      <p className="font-label text-[0.58rem] tracking-[0.2em] uppercase text-ursa-gold-text-soft m-0 mt-1">Socio piloto</p>
                    </div>
                  </div>
                  <span className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-ursa-gold-text-soft border border-ursa-gold/40 rounded-full px-2 py-1">
                    S/. 20 / mes
                  </span>
                </div>

                <div className="border-t border-ursa-gold/20 pt-4 mb-4">
                  <p className="font-label text-[0.58rem] tracking-[0.14em] uppercase text-ursa-sage m-0 mb-1">Socio</p>
                  <p className="font-display text-lg text-ursa-cream m-0">Maria Elena R.</p>
                  <p className="text-[0.72rem] text-ursa-sage m-0 mt-0.5">Miembro desde agosto 2026</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                    <Clock size={14} className="text-ursa-gold-text mx-auto mb-1" />
                    <p className="font-label text-[0.54rem] tracking-[0.1em] uppercase text-ursa-sage m-0">7–10am</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                    <Coffee size={14} className="text-ursa-gold-text mx-auto mb-1" />
                    <p className="font-label text-[0.54rem] tracking-[0.1em] uppercase text-ursa-sage m-0">Ilimitado</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                    <MapPin size={14} className="text-ursa-gold-text mx-auto mb-1" />
                    <p className="font-label text-[0.54rem] tracking-[0.1em] uppercase text-ursa-sage m-0">En el local</p>
                  </div>
                </div>

                <div className="border-t border-ursa-gold/20 pt-3">
                  <p className="font-label text-[0.58rem] tracking-[0.14em] uppercase text-ursa-sage m-0 mb-1">Un gramo a la vez</p>
                  <p className="text-[0.68rem] text-ursa-gold-text-soft m-0 italic">Alcanfores 183, Miraflores</p>
                </div>

                {/* Stamp row */}
                <div className="flex gap-1.5 mt-4">
                  {[1,2,3,4,5,6].map((n) => (
                    <span key={n} className={cn("flex-1 aspect-square rounded-full border-2 grid place-items-center", n <= 3 ? "bg-ursa-gold border-ursa-gold text-ursa-dark-roast" : "border-ursa-gold/30 text-ursa-gold-text/40")}>
                      {n <= 3 && <Check size={12} />}
                    </span>
                  ))}
                </div>
                <p className="font-label text-[0.54rem] tracking-[0.1em] uppercase text-ursa-sage m-0 mt-2 text-center">
                  6 acompañamientos · 1 gratis
                </p>
              </div>
            </div>
            <p className="text-center font-label text-[0.6rem] tracking-[0.12em] uppercase text-muted-foreground mt-2">
              {t("content.landing.member-card.caption")}
            </p>
          </div>
        </div>
      </ViewSection>

      <ArtNouveauDivider />

      {/* Benefits */}
      <ViewSection badge="Beneficios" title="Qué incluye Ursa Mañana" meta="Cuatro razones · una tarifa">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 [grid-template-columns:minmax(0,1fr)]">
          {benefits.map((b) => (
            <Card key={b.title} className="text-center flex flex-col items-center">
              <span className={cn(
                "w-14 h-14 rounded-full grid place-items-center mb-3",
                b.tone === "forest" && "bg-ursa-dark-roast/12 text-ursa-forest-deep",
                b.tone === "gold" && "bg-ursa-gold/18 text-ursa-gold-text",
                b.tone === "terracotta" && "bg-ursa-terracotta/12 text-ursa-terracotta-text"
              )}>
                <b.icon size={26} />
              </span>
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-2">{b.title}</h3>
              <p className="text-[0.86rem] text-muted-foreground m-0 leading-relaxed">{b.desc}</p>
            </Card>
          ))}
        </div>
      </ViewSection>

      {/* How it works */}
      <ViewSection badge="Cómo funciona" title="Tres pasos, una mañana" meta="Sin app · sin código QR · solo el oso">
        <div className="grid md:grid-cols-3 gap-5 [grid-template-columns:minmax(0,1fr)]">
          {[
            { n: "01", title: "Paga S/. 20 al mes", desc: "En la barra o por WhatsApp. Te damos tu tarjeta de socio con tu nombre. Sin app, sin recarga digital — el oso te conoce.", icon: MapPin },
            { n: "02", title: "Ven entre 7 y 10am", desc: "De lunes a viernes. Pides tu café. El barista marca un sello en tu tarjeta. Una taza por visita, en el local.", icon: Coffee },
            { n: "03", title: "Marida un acompañamiento", desc: "Cookie, financier o empanada con 20% off. Acumula 6 sellos y el séptimo acompañamiento va por cuenta del oso.", icon: Cookie },
          ].map((step) => (
            <Card key={step.n} className="relative">
              <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-ursa-dark-roast text-ursa-gold-text-soft grid place-items-center font-display text-base font-semibold shadow-lg">
                {step.n}
              </span>
              <step.icon size={22} className="text-ursa-gold-text mb-3 mt-2" />
              <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-2">{step.title}</h3>
              <p className="text-[0.88rem] text-muted-foreground m-0 leading-relaxed">{step.desc}</p>
            </Card>
          ))}
        </div>
      </ViewSection>

      {/* The offer, in three lenses — outcome, risk reversal, behavioral */}
      <ViewSection badge={t("content.landing.offer.outcome.badge")} title={t("content.landing.offer.outcome.heading")} meta={t("content.landing.offer.behavioral.badge")}>
        <div className="grid md:grid-cols-3 gap-5 [grid-template-columns:minmax(0,1fr)]">
          <Card className="bg-gradient-to-br from-ursa-paper to-ursa-cream">
            <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-gold-text block mb-2">{t("content.landing.offer.outcome.badge")}</span>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.landing.offer.outcome.heading")}</h3>
            <p className="text-[0.88rem] text-foreground/85 leading-relaxed m-0">{t("content.landing.offer.outcome.body")}</p>
          </Card>
          <Card className="bg-ursa-foam">
            <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-forest-deep block mb-2">{t("content.landing.offer.risk-reversal.badge")}</span>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.landing.offer.risk-reversal.heading")}</h3>
            <p className="text-[0.88rem] text-foreground/85 leading-relaxed m-0">{t("content.landing.offer.risk-reversal.body")}</p>
          </Card>
          <Card className="bg-ursa-cream">
            <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-ursa-terracotta-text block mb-2">{t("content.landing.offer.behavioral.badge")}</span>
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.landing.offer.behavioral.heading")}</h3>
            <p className="text-[0.88rem] text-foreground/85 leading-relaxed m-0">{t("content.landing.offer.behavioral.body")}</p>
          </Card>
        </div>
      </ViewSection>

      {/* The math */}
      <ViewSection badge="Transparencia" title="Las matemáticas honestas" meta="Por qué funciona · y dónde está el riesgo">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start [grid-template-columns:minmax(0,1fr)]">
          <Card className="bg-gradient-to-br from-ursa-foam to-ursa-cream">
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <CupGlyph size={20} className="text-ursa-gold-text" /> Por qué S/. 20 funciona
            </h3>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              <li className="flex items-start gap-2.5">
                <Check size={16} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                <span className="text-[0.9rem] text-foreground/85">Ursa tuesta su propio café — el costo de una taza más es de S/. 1.20 a 1.80.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check size={16} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                <span className="text-[0.9rem] text-foreground/85">La ventana 7–10am es cuando los regulares ya vienen — no cannibalizamos, formalizamos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check size={16} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                <span className="text-[0.9rem] text-foreground/85">El acompañamiento (20% off) es donde el modelo gana — el café abre la puerta, la comida paga el oso.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check size={16} className="text-ursa-forest-deep mt-0.5 shrink-0" />
                <span className="text-[0.9rem] text-foreground/85">Piloto limitado a 50 socios para validar antes de escalar.</span>
              </li>
            </ul>
            <button
              onClick={() => navigate("pilot")}
              className="mt-4 inline-flex items-center gap-1.5 font-label text-[0.72rem] tracking-[0.12em] uppercase text-ursa-gold-text hover:text-ursa-dark-roast transition"
            >
              <Calculator size={14} /> Abrir el caso de negocio completo <ArrowRight size={14} />
            </button>
          </Card>

          <Card className="bg-ursa-foam">
            <h3 className="font-display text-lg font-semibold text-ursa-dark-roast mt-0 mb-3 flex items-center gap-2">
              <AlertCircle size={20} className="text-ursa-terracotta-text" /> Dónde está el riesgo
            </h3>
            <ul className="space-y-2.5 m-0 p-0 list-none">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ursa-terracotta mt-2 shrink-0" />
                <span className="text-[0.9rem] text-foreground/85"><strong className="text-ursa-dark-roast">Cannibalización:</strong> si un socio ya gastaba S/. 30/mañana, ahora paga S/. 20. El modelo requiere atraer nuevos regulares, no solo convertir los existentes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ursa-terracotta mt-2 shrink-0" />
                <span className="text-[0.9rem] text-foreground/85"><strong className="text-ursa-dark-roast">Adjuntos:</strong> si el attach rate de acompañamientos baja del 40%, el modelo se adelgza. Por eso el 20% off y el sello gratuito.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ursa-terracotta mt-2 shrink-0" />
                <span className="text-[0.9rem] text-foreground/85"><strong className="text-ursa-dark-roast">Capacidad:</strong> si 50 socios vienen todos a las 8:30am, la barra se satura. El piloto mide esto antes de crecer.</span>
              </li>
            </ul>
            <p className="text-[0.76rem] text-muted-foreground mt-4 m-0 italic">
              Si el piloto no funciona en 60 días, lo cerramos limpio y documentado. Sin hundir el barco.
            </p>
          </Card>
        </div>
      </ViewSection>

      {/* Science — what the research says about this page */}
      <ViewSection badge={t("content.landing.science.badge")} title={t("content.landing.science.title")} meta={t("content.landing.science.meta")}>
        <p className="text-[0.92rem] text-muted-foreground max-w-[78ch] mb-6 m-0">
          {t("content.landing.science.lede")}
        </p>

        {/* Group A — landing page conversion science */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={15} className="text-ursa-gold-text" />
            <span className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-forest-deep">
              {t("content.landing.science.group.conversion")}
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-4 [grid-template-columns:minmax(0,1fr)]">
            {SCIENCE_CONVERSION.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.id} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-8 rounded-md bg-ursa-gold/15 text-ursa-gold-text grid place-items-center shrink-0">
                      <Icon size={16} />
                    </span>
                    <span className="font-label text-[0.56rem] tracking-[0.14em] uppercase text-muted-foreground">
                      {t(`content.landing.science.${s.id}.source`)}
                    </span>
                  </div>
                  <h4 className="font-display text-[1rem] font-semibold text-ursa-dark-roast mt-0 mb-2 leading-tight">
                    {t(`content.landing.science.${s.id}.title`)}
                  </h4>
                  <div className="border-l-2 border-ursa-gold/40 pl-3 py-1 mb-2.5">
                    <p className="text-[0.82rem] italic text-ursa-dark-roast m-0">
                      {t(`content.landing.science.${s.id}.finding`)}
                    </p>
                  </div>
                  <p className="text-[0.86rem] text-foreground/85 leading-relaxed m-0">
                    {t(`content.landing.science.${s.id}.apply`)}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Group B — risk reversal research */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={15} className="text-ursa-forest-deep" />
            <span className="font-label text-[0.66rem] tracking-[0.18em] uppercase text-ursa-forest-deep">
              {t("content.landing.science.group.risk")}
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-4 [grid-template-columns:minmax(0,1fr)]">
            {SCIENCE_RISK.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.id} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-8 rounded-md bg-ursa-forest-deep/12 text-ursa-forest-deep grid place-items-center shrink-0">
                      <Icon size={16} />
                    </span>
                    <span className="font-label text-[0.56rem] tracking-[0.14em] uppercase text-muted-foreground">
                      {t(`content.landing.science.${s.id}.source`)}
                    </span>
                  </div>
                  <h4 className="font-display text-[1rem] font-semibold text-ursa-dark-roast mt-0 mb-2 leading-tight">
                    {t(`content.landing.science.${s.id}.title`)}
                  </h4>
                  <div className="border-l-2 border-ursa-forest-deep/40 pl-3 py-1 mb-2.5">
                    <p className="text-[0.82rem] italic text-ursa-dark-roast m-0">
                      {t(`content.landing.science.${s.id}.finding`)}
                    </p>
                  </div>
                  <p className="text-[0.86rem] text-foreground/85 leading-relaxed m-0">
                    {t(`content.landing.science.${s.id}.apply`)}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        <Callout tone="gold" title={t("content.landing.science.synthesis.title")}>
          <p className="m-0 text-[0.9rem]">{t("content.landing.science.synthesis.body")}</p>
        </Callout>
      </ViewSection>

      {/* FAQ */}
      <ViewSection badge="Preguntas" title="Lo que la gente pregunta" meta="Cinco respuestas honestas">
        <div className="grid md:grid-cols-2 gap-4 [grid-template-columns:minmax(0,1fr)]">
          {faqs.map((f) => (
            <Card key={f.q} className="p-5">
              <h4 className="font-display text-[1rem] font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-start gap-2">
                <span className="text-ursa-gold-text font-label text-[0.7rem] tracking-[0.12em] uppercase shrink-0 mt-1">Q</span>
                {f.q}
              </h4>
              <p className="text-[0.88rem] text-muted-foreground m-0 leading-relaxed pl-6">{f.a}</p>
            </Card>
          ))}
          <Card className="p-5 bg-ursa-dark-roast/6 border-ursa-forest-deep/20">
            <h4 className="font-display text-[1rem] font-semibold text-ursa-dark-roast mt-0 mb-2 flex items-start gap-2">
              <span className="text-ursa-forest-deep font-label text-[0.7rem] tracking-[0.12em] uppercase shrink-0 mt-1">Q</span>
              ¿Y si no me gusta?
            </h4>
            <p className="text-[0.88rem] text-muted-foreground m-0 leading-relaxed pl-6">
              Cancelas cuando quieras — no hay contrato ni permanencia. Si en el primer mes no funciona para ti, te
              devolvemos la parte proporcional. El oso prefiere un socio feliz a un socio atrapado.
            </p>
          </Card>
        </div>
      </ViewSection>

      {/* Join — interest form (prototype) */}
      <ViewSection id="join">
        <Card highlight className="bg-gradient-to-br from-ursa-paper to-ursa-cream text-center max-w-2xl mx-auto">
          <BearMark size={48} className="text-ursa-dark-roast mx-auto mb-4 ursa-breathe" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ursa-dark-roast mt-0 mb-3">
            ¿Te anotas para el piloto?
          </h2>
          <p className="text-[1rem] text-muted-foreground mb-5 max-w-[52ch] mx-auto">
            El primer piloto es para 50 socios. Déjanos tu correo y te avisamos cuando abramos el cupo. Sin spam —
            solo el aviso del oso cuando esté listo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="tu@correo.com"
              aria-label="Email para el piloto"
              className="flex-1 h-12 px-4 rounded-full border border-ursa-line bg-ursa-foam text-ursa-dark-roast placeholder:text-muted-foreground focus:outline-none focus:border-ursa-gold focus:ring-2 focus:ring-ursa-gold/20 transition"
            />
            <button
              onClick={() => {
                if (interest.includes("@")) {
                  setInterest("");
                  alert("¡Anotado! Te avisaremos cuando el piloto abra. — El oso");
                }
              }}
              className="h-12 px-6 rounded-full bg-ursa-gold text-ursa-dark-roast font-label text-[0.78rem] tracking-[0.12em] uppercase hover:bg-ursa-gold-soft transition shadow-lg whitespace-nowrap"
            >
              Anótame
            </button>
          </div>
          <p className="text-[0.72rem] text-muted-foreground mt-4 m-0">
            {t("content.landing.join.caption")}
          </p>
        </Card>
      </ViewSection>

      {/* Strategic context — bilingual via i18n */}
      <ViewSection badge={t("content.landing.strategic.badge")} title={t("content.landing.strategic.title")} meta={t("content.landing.strategic.meta")}>
        <div className="grid md:grid-cols-3 gap-4 [grid-template-columns:minmax(0,1fr)]">
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.landing.strategic.card1.title")}</h4>
            <p className="text-[0.86rem] text-muted-foreground m-0">{t("content.landing.strategic.card1.body")}</p>
          </Card>
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.landing.strategic.card2.title")}</h4>
            <p className="text-[0.86rem] text-muted-foreground m-0">{t("content.landing.strategic.card2.body")}</p>
          </Card>
          <Card>
            <h4 className="font-display text-base font-semibold text-ursa-dark-roast mt-0 mb-2">{t("content.landing.strategic.card3.title")}</h4>
            <p className="text-[0.86rem] text-muted-foreground m-0">{t("content.landing.strategic.card3.body")}</p>
          </Card>
        </div>
        <DossierLinkBanner moduleId="08-subscription-economics-and-calculator" />
      </ViewSection>
    </>
  );
}
