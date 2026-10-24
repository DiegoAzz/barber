import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando seed de datos para BarberPlay...");

  // Si ya existe un negocio configurado en PostgreSQL, no sobreescribir datos reales
  const existing = await prisma.business.findFirst();
  if (existing) {
    console.log(`Ya existe el negocio "${existing.name}" en la base de datos. Saltando seed.`);
    return;
  }

  // 1. Crear Negocio Demo
  const business = await prisma.business.create({
    data: {
      name: "Barbería Elite",
      slug: "barberia-elite",
      email: "contacto@barberiaelite.com",
      phone: "+573001234567",
      description: "Cortes modernos, fade degradado, afeitado tradicional y cuidado masculino premium.",
      address: "Av. Principal 123, Zona Rosa",
      currency: "COP",
      plan: "PRO",
      multiBarberEnabled: true,
      category: "BARBERIA",
    },
  });

  // 2. Horarios de Trabajo (Lunes a Sábado 09:00 a 20:00)
  const workingHoursData = [
    { dayOfWeek: 1, openTime: "09:00", closeTime: "20:00", isClosed: false },
    { dayOfWeek: 2, openTime: "09:00", closeTime: "20:00", isClosed: false },
    { dayOfWeek: 3, openTime: "09:00", closeTime: "20:00", isClosed: false },
    { dayOfWeek: 4, openTime: "09:00", closeTime: "20:00", isClosed: false },
    { dayOfWeek: 5, openTime: "09:00", closeTime: "21:00", isClosed: false },
    { dayOfWeek: 6, openTime: "09:00", closeTime: "20:00", isClosed: false },
    { dayOfWeek: 0, openTime: "10:00", closeTime: "15:00", isClosed: false },
  ];

  for (const wh of workingHoursData) {
    await prisma.workingHour.create({
      data: {
        businessId: business.id,
        ...wh,
      },
    });
  }

  // 3. Crear Barberos del Equipo
  const staff1 = await prisma.staffMember.create({
    data: {
      businessId: business.id,
      name: "Juan Master",
      phone: "+573001112233",
      pin: "1111",
      chairNumber: 1,
      chairLabel: "Silla 1 (Master)",
      commissionRate: 60.0,
      active: true,
    },
  });

  const staff2 = await prisma.staffMember.create({
    data: {
      businessId: business.id,
      name: "Carlos Fade",
      phone: "+573004445566",
      pin: "2222",
      chairNumber: 2,
      chairLabel: "Silla 2",
      commissionRate: 50.0,
      active: true,
    },
  });

  // 4. Crear Servicios de Barbería
  const s1 = await prisma.service.create({
    data: {
      businessId: business.id,
      name: "Corte Clásico & Fade Degradado",
      description: "Degradado a elección (low, mid, high taper), tijera superior, peinado y loción estilizadora.",
      durationMinutes: 30,
      price: 25000.0,
      active: true,
    },
  });

  const s2 = await prisma.service.create({
    data: {
      businessId: business.id,
      name: "Afeitado Tradicional con Toalla Caliente",
      description: "Aceite preafeitado, toalla caliente de eucalipto, navaja libre y bálsamo hidratante.",
      durationMinutes: 30,
      price: 18000.0,
      active: true,
    },
  });

  const s3 = await prisma.service.create({
    data: {
      businessId: business.id,
      name: "Combo VIP: Corte + Barba + Mascarilla Black",
      description: "Servicio completo de corte, tratamiento de barba con vapor ozono y mascarilla limpiadora de puntos negros.",
      durationMinutes: 60,
      price: 45000.0,
      active: true,
    },
  });

  const s4 = await prisma.service.create({
    data: {
      businessId: business.id,
      name: "Perfilado de Barba Express",
      description: "Marcado de líneas de mejilla y cuello con máquina de contorno y afeitado en seco.",
      durationMinutes: 20,
      price: 12000.0,
      active: true,
    },
  });

  // 5. Crear Productos de Barbería
  await prisma.product.create({
    data: {
      businessId: business.id,
      name: "Cera Pomada Matte Clay (100g)",
      price: 35000.0,
      stock: 24,
      category: "Ceras y Peinado",
      active: true,
    },
  });

  await prisma.product.create({
    data: {
      businessId: business.id,
      name: "Aceite Hidratante para Barba Wood & Spice (30ml)",
      price: 28000.0,
      stock: 18,
      category: "Cuidado de Barba",
      active: true,
    },
  });

  // 6. Crear Citas de Ejemplo
  const today = new Date();

  await prisma.appointment.create({
    data: {
      businessId: business.id,
      serviceId: s1.id,
      staffMemberId: staff1.id,
      clientName: "Andrés Silva",
      clientPhone: "+573109876543",
      clientEmail: "andres.silva@example.com",
      clientNotes: "Prefiere fade medio número 1",
      date: today,
      startTime: "10:30",
      endTime: "11:00",
      status: "CONFIRMED",
      reminderSent: true,
    },
  });

  await prisma.appointment.create({
    data: {
      businessId: business.id,
      serviceId: s3.id,
      staffMemberId: staff2.id,
      clientName: "David Ramírez",
      clientPhone: "+573117654321",
      clientEmail: "david.r@example.com",
      clientNotes: "Cliente habitual",
      date: today,
      startTime: "11:30",
      endTime: "12:30",
      status: "CONFIRMED",
      reminderSent: false,
    },
  });

  console.log("¡Seed completado con éxito! Barbería demo creada: /p/barberia-elite");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
