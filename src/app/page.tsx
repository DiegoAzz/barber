"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Scissors,
  CheckCircle,
  MessageCircle,
  Tv,
  Users,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
  Crown,
  Building2,
  Sparkles,
  Volume2,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const target = document.getElementById(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="text-center lg:col-span-7 lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-800 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                  Software SaaS Especializado para Barberías Modernas
                </div>

                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                  Control de Sillas, <br />
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                    Turnero Smart TV
                  </span>{" "}
                  y Cero Enredos.
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
                  Digitaliza tu barbería con <strong>BarberPlay</strong>: pantalla de espera interactiva para Smart TV con llamado por voz, portal propio para cada barbero en su celular, comisiones automáticas y reservas online 24/7.
                </p>

                {/* BADGE PRUEBA GRATUITA */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 border border-emerald-200 text-xs font-semibold text-emerald-800">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  <span>⭐ <strong>Prueba Gratuita PRO de 7 Días:</strong> Acceso total inmediato a todos los módulos sin tarjeta de crédito.</span>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <Link
                    href="/dashboard"
                    style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-slate-900/25 transition hover:bg-slate-800 sm:w-auto"
                  >
                    <span>Empezar Gratis (7 Días PRO)</span>
                    <ArrowRight className="h-5 w-5 text-amber-400" />
                  </Link>
                  <Link
                    href="/p/barberia-elite/turnero"
                    target="_blank"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300 bg-amber-50/60 px-6 py-3.5 text-base font-bold text-amber-900 transition hover:bg-amber-100 sm:w-auto"
                  >
                    <Tv className="h-5 w-5 text-amber-600" />
                    <span>Ver Turnero Smart TV Demo</span>
                    <ExternalLink className="h-4 w-4 text-amber-600" />
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 lg:justify-start">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-600" />
                    <span>Llamado por Voz en TV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-600" />
                    <span>Comisiones por Barbero</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-600" />
                    <span>Venta de Ceras & Productos</span>
                  </div>
                </div>
              </div>

              {/* MOCKUP INTERACTIVO SMART TV & BARBERO */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md rounded-2xl border border-gray-200/80 bg-slate-950 p-6 shadow-2xl text-white">
                  {/* Smart TV Header Demo */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-black">
                        <Tv className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">Pantalla Smart TV</h4>
                        <p className="text-[11px] text-slate-400">Sala de espera en vivo</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      <Volume2 className="h-3 w-3 animate-pulse" />
                      Voz Activa
                    </span>
                  </div>

                  {/* Turno en Silla Card */}
                  <div className="mb-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-4 border border-amber-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">En Sillón 1</span>
                      <span className="text-xs font-bold text-slate-300">Barbero: Juan (Master)</span>
                    </div>
                    <div className="mt-2 flex items-baseline justify-between">
                      <p className="text-2xl font-black text-white">Turno #12</p>
                      <span className="text-xs text-amber-300 font-semibold">Corte Fade & Barba</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-300">Cliente: Carlos Mendoza</p>
                  </div>

                  {/* Siguiente en Cola */}
                  <div className="rounded-xl bg-slate-900/90 p-3.5 border border-slate-800 mb-4">
                    <p className="text-[11px] font-bold uppercase text-slate-400">Siguiente en Espera</p>
                    <div className="mt-1 flex items-center justify-between">
                      <div>
                        <span className="text-base font-bold text-white">Turno #13</span>
                        <span className="ml-2 text-xs text-slate-300">Andrés Ruiz</span>
                      </div>
                      <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                        Silla Libre Próxima
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                    <Link
                      href="/barbero"
                      className="block text-center rounded-lg bg-amber-500 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition"
                    >
                      💈 Portal Barbero
                    </Link>
                    <Link
                      href="/p/barberia-elite"
                      className="block text-center rounded-lg bg-slate-800 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition"
                    >
                      Página Pública →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS ESPECIALIZADOS PARA BARBERÍAS */}
        <section id="caracteristicas" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Herramientas Creadas para Barberías
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Todo lo que necesita tu barbería en un solo lugar
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                Olvídate de las hojas de papel, las discusiones de turno y los conteos manuales de cortes al final de la jornada.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Tv className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Turnero para Smart TV con Voz
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Conecta cualquier televisor o tablet en tu sala de espera. Anuncia el turno por voz y sonido campana diciendo a qué barbero o silla debe pasar el cliente.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Portal Propio para Cada Barbero
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Cada barbero ingresa desde su propio celular a <strong>/barbero</strong> con su PIN. Puede ver sus turnos asignados, marcar &quot;Atendiendo&quot; y finalizar el servicio.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Liquidación de Comisiones Diarias
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Configura el % de comisión pactado con cada barbero (50%, 60%, etc.). El sistema calcula automáticamente el pago exacto del día sin margen de error.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Venta de Productos y Barber Shop
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Controla stock de ceras, pomadas, navajas y minoxidil. Registra ventas al contado o con comisión compartida para el barbero que recomendó el producto.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Avisos por WhatsApp al Cliente
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  El cliente recibe el turno en su celular y puede consultar en tiempo real cuántas personas tiene por delante. Menos aglomeraciones y clientes más satisfechos.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Scissors className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  Elección de Barbero Favorito
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Tus clientes pueden pedir turno con su barbero de confianza, o elegir &quot;Cualquier Barbero Disponible&quot; para que el sistema lo asigne automáticamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section id="como-funciona" className="py-20 bg-white border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                Paso a Paso
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ¿Cómo Funciona BarberPlay?
              </h2>
              <p className="mt-4 text-base text-gray-600">
                Pon en marcha tu barbería en menos de 5 minutos.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              <div className="relative rounded-2xl border border-gray-200/80 bg-gray-50/50 p-8 hover:bg-amber-50/30 transition shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400 font-extrabold text-lg shadow-md">
                  1
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Registra tus Barberos y Sillas
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Crea a tus barberos, asígnales su número de silla y su porcentaje de comisión. Cada barbero tendrá su propio PIN de acceso seguro.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200/80 bg-gray-50/50 p-8 hover:bg-amber-50/30 transition shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400 font-extrabold text-lg shadow-md">
                  2
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Abre la Pantalla en el Smart TV
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Abre el navegador de tu Smart TV y entra a tu enlace de turnero. La pantalla mostrará quién está en cada silla y llamará a los turnos por voz.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200/80 bg-gray-50/50 p-8 hover:bg-amber-50/30 transition shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400 font-extrabold text-lg shadow-md">
                  3
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Atiende y Liquida Comisiones
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Tus barberos atienden desde sus celulares. Al cerrar la jornada, revisa la caja diaria y paga las comisiones con 1 clic sin calculadora.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/dashboard"
                style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/25 hover:bg-slate-800 transition"
              >
                <span>Activar mi Barbería Ahora (7 Días Gratis)</span>
                <ArrowRight className="h-4 w-4 text-amber-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="precios" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                Planes Transparentes
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Precios Justos para Barberías
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                Empieza con nuestra prueba completa de 7 días. Si te gusta y aumenta tus ingresos, elige el plan que mejor se adapte al tamaño de tu equipo.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-3">
              {/* PLAN FREE */}
              <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">Plan Barbero Solo</h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      Gratis
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Para barberos independientes que atienden en 1 sola silla o sillón propio.
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-gray-900">$0</span>
                    <span className="text-sm font-medium text-gray-500"> / siempre</span>
                  </div>

                  <ul className="mt-8 space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      1 Barbero / 1 Silla activa
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      Turnero básico de atención
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      Página de turnos pública personalizada
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      Recordatorios de turnos por WhatsApp
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/dashboard"
                    className="block w-full text-center rounded-xl border border-gray-300 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                  >
                    Empezar Gratis
                  </Link>
                </div>
              </div>

              {/* PLAN PRO */}
              <div className="relative flex flex-col justify-between rounded-2xl border-2 border-amber-500 bg-white p-8 shadow-xl">
                <div className="absolute -top-3.5 right-6 rounded-full bg-amber-500 px-3.5 py-0.5 text-xs font-black text-slate-950 shadow-sm">
                  ⭐ 7 Días de Prueba Gratis
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">Plan Barbería PRO</h3>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                      Más Popular
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Para barberías con múltiples barberos que quieren maximizar su organización y facturación.
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-gray-900">$19</span>
                    <span className="text-sm font-medium text-gray-500"> / mes</span>
                  </div>

                  <ul className="mt-8 space-y-3 text-sm text-gray-700">
                    <li className="flex items-center gap-3 font-semibold text-gray-900">
                      <Zap className="h-4 w-4 text-amber-600" />
                      Múltiples Barberos y Sillas Ilimitadas
                    </li>
                    <li className="flex items-center gap-3 font-semibold text-gray-900">
                      <Zap className="h-4 w-4 text-amber-600" />
                      Pantalla Smart TV con Turnero y Voz
                    </li>
                    <li className="flex items-center gap-3 font-semibold text-gray-900">
                      <Zap className="h-4 w-4 text-amber-600" />
                      Portal Móvil para cada Barbero (/barbero)
                    </li>
                    <li className="flex items-center gap-3 font-medium">
                      <Zap className="h-4 w-4 text-amber-600" />
                      Liquidación Automática de Comisiones
                    </li>
                    <li className="flex items-center gap-3 font-medium">
                      <Zap className="h-4 w-4 text-amber-600" />
                      Control de Inventario de Ceras & Productos
                    </li>
                    <li className="flex items-center gap-3 font-medium">
                      <Zap className="h-4 w-4 text-amber-600" />
                      Elección de Barbero por el Cliente
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/dashboard/suscripcion"
                    className="block w-full text-center rounded-xl bg-amber-500 py-3 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/25 hover:bg-amber-400 transition"
                  >
                    Activar Plan PRO ($19/mes)
                  </Link>
                </div>
              </div>

              {/* PLAN FRANQUICIA SAAS / MARCA BLANCA */}
              <div className="relative flex flex-col justify-between rounded-2xl border-2 border-amber-500 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-8 shadow-2xl">
                <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3.5 py-0.5 text-xs font-black text-slate-950 shadow-md flex items-center gap-1">
                  <Crown className="h-3.5 w-3.5" />
                  <span>Dueño de Franquicia</span>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-amber-400" />
                      <span>Franquicia BarberPlay</span>
                    </h3>
                    <span className="rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 text-[11px] font-bold">
                      Marca Propia
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Sé el dueño de BarberPlay en tu ciudad o país. Afilia tus propias barberías, cobra el 100% y construye tu empresa de software.
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-400 font-medium">Inscripción Inicial:</span>
                      <span className="text-2xl font-black text-amber-400">
                        $99 <span className="text-xs font-normal text-slate-400">USD (única vez)</span>
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between pt-1 border-t border-slate-800">
                      <span className="text-xs text-slate-400 font-medium">Mensualidad Tecnológica:</span>
                      <span className="text-lg font-bold text-emerald-400">
                        $29 <span className="text-xs font-normal text-slate-400">USD / mes</span>
                      </span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-200">
                    <li className="flex items-center gap-2.5 font-medium">
                      <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" />
                      <span><strong>Tú cobras el 100%</strong> directamente a cada barbería</span>
                    </li>
                    <li className="flex items-center gap-2.5 font-medium">
                      <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" />
                      <span><strong>Barberías y barberos ilimitados</strong></span>
                    </li>
                    <li className="flex items-center gap-2.5 font-medium">
                      <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>Soporte, servidores y actualizaciones automáticas</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/afiliados?tipo=franquicia#registro"
                    className="block w-full text-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-3 text-xs font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-orange-400 transition"
                  >
                    Adquirir mi Franquicia Oficial →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
