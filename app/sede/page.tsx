import Image from "next/image";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Sede() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f3e6]">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-['HelveticaBlack'] text-center mb-12 text-[#09465b]">
            Nuestra Sede
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="lg:col-span-1">
              <Image
                src="/nuevasfotos/UBICACIÓN 1_Mesa de trabajo 1.jpg"
                alt="Exterior de la clínica"
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="lg:col-span-1 bg-[#09465b] rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-['HelveticaBlack'] mb-4 text-[#f7f3e6]">Ubicación</h2>
              <p className="text-[#f7f3e6]/90 font-['HelveticaRoman'] mb-4">
                Estamos ubicados en una zona de fácil acceso:
              </p>
              <p className="text-[#f7f3e6]/90 font-['HelveticaRoman'] mb-6">
                <strong className="font-['HelveticaBold']">Dirección:</strong>
                <br />
                Av. 13 de Enero 2201 La Huayrona, SJL - Lima
                <br />
                Lima, Perú
              </p>
              <p className="text-[#f7f3e6]/90 font-['HelveticaRoman'] mb-6">
                <strong className="font-['HelveticaBold']">Horario de atención:</strong>
                <br />
                Lunes a Sabado: 9:00 am - 8:00 pm
                <br />
                
              </p>
              <p className="text-[#f7f3e6]/90 font-['HelveticaRoman']">
                <strong className="font-['HelveticaBold']">Contacto:</strong>
                <br />
                Teléfono: +51 966 842 258
                <br />
                Email: veterinariasannavet@gmail.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="bg-[#09465b] rounded-lg shadow-md p-6 h-full flex items-center justify-center">
                <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6043298304734!2d-77.02419582400184!3d-12.0755966425538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6f8d48c6eb3%3A0x87c85d3e96f8266f!2sAv.%2013%20de%20Enero%202201%2C%20San%20Juan%20de%20Lurigancho%2015412%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1712047156483!5m2!1ses!2spe"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la clínica veterinaria"
                ></iframe>
              </div>
            </div>
            <div className="lg:col-span-1">
              <Image
                src="/nuevasfotos/FOTO VET_Mesa de trabajo 1.jpg"
                alt="Interior de la clínica"
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton phoneNumber="+51966842258" />
    </main>
  );
}
