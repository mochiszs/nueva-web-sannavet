import Image from "next/image"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Equipo() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f3e6]">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-['HelveticaBlack'] text-center mb-12 text-[#09465b]">Nuestro Equipo</h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#09465b] rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="/nuevasfotos/FOTO DOC_Mesa de trabajo 1.jpg"
                    alt="Dr. Carlos Rodríguez"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="text-3xl font-['HelveticaBlack'] text-[#f7f3e6] mb-2">Dra. Carla Pineda Llanos</h2>
                  <p className="text-xl text-[#f7f3e6]/80 font-['HelveticaBold'] mb-6">Director Médico y Fundadora</p>

                  <div className="space-y-4 text-[#f7f3e6]/90 font-['HelveticaRoman']">
                    <p>
                    La Dra. Carla Pineda Llanos es una médico veterinaria egresada de la Universidad Nacional de San Cristóbal de Huamanga, con una destacada trayectoria en el cuidado de animales de compañía. Posee una segunda especialidad en Medicina de Animales de Compañía de la Universidad Cayetano Heredia.

                    </p>
                    <p>
                    Con más de 13 años de experiencia en el ámbito veterinario, la Dra. Pineda se ha dedicado a ofrecer atención médica de alta calidad, integrando conocimientos actualizados, tecnología avanzada y un enfoque humanizado en cada consulta.  

                    </p>
                    <p>
                    En Sanna Vet, lidera un equipo de profesionales comprometidos con la prevención, diagnóstico y tratamiento de diversas patologías, garantizando siempre el mejor cuidado para las mascotas.
                    </p>
                  
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="bg-[#f7f3e6] px-4 py-2 rounded-full text-[#09465b] font-['HelveticaBold']">
                      Cirugía Avanzada
                    </div>
                    <div className="bg-[#f7f3e6] px-4 py-2 rounded-full text-[#09465b] font-['HelveticaBold']">
                      Medicina Interna
                    </div>
                    <div className="bg-[#f7f3e6] px-4 py-2 rounded-full text-[#09465b] font-['HelveticaBold']">
                      Cardiología
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#09465b] rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-['HelveticaBlack'] mb-6 text-center text-[#f7f3e6]">Nuestro Compromiso</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-[#f7f3e6]/90 font-['HelveticaRoman'] mb-4">
                  En nuestra clínica veterinaria, nos comprometemos a proporcionar el más alto nivel de atención médica
                  a cada mascota que atendemos. Entendemos que las mascotas son miembros importantes de la familia, y
                  merecen ser tratadas con el mismo cuidado, respeto y dignidad.
                </p>
                
                <p className="text-[#f7f3e6]/90 font-['HelveticaRoman']">
                  Además de proporcionar atención médica excepcional, nos comprometemos a educar a los dueños de
                  mascotas sobre la prevención de enfermedades, nutrición adecuada y cuidados generales para ayudarles a
                  mantener a sus compañeros felices y saludables durante toda su vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  )
}

