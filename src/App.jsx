// src/App.jsx
import React from 'react';

const App = () => {
  const services = [
    {
      id: 1,
      name: "Fisioterapia Ortopédica",
      price: "R$ 120,00 / sessão",
      image: "/1.svg",
      description: "Recuperação pós-cirúrgica, lesões e dores articulares."
    },
    {
      id: 2,
      name: "Fisioterapia Respiratória",
      price: "R$ 110,00 / sessão",
      image: "/2.svg",
      description: "Melhora da função pulmonar em idosos, bebês e pós-COVID."
    },
    {
      id: 3,
      name: "Reabilitação Neurológica",
      price: "R$ 130,00 / sessão",
      image: "/3.svg",
      description: "Atendimento para AVC, Parkinson, lesões medulares e mais."
    },
    {
      id: 4,
      name: "Fisioterapia Esportiva",
      price: "R$ 125,00 / sessão",
      image: "/4.svg",
      description: "Prevenção e tratamento de lesões em atletas e praticantes."
    },
    {
      id: 5,
      name: "Drenagem Linfática",
      price: "R$ 90,00 / sessão",
      image: "/5.svg",
      description: "Redução de inchaços, pós-operatório e relaxamento corporal."
    },
    {
      id: 6,
      name: "Pilates Terapêutico",
      price: "R$ 85,00 / aula",
      image: "/6.svg",
      description: "Fortalecimento, postura e alívio de dores na coluna."
    },
    {
      id: 7,
      name: "Liberação Miofascial",
      price: "R$ 100,00 / sessão",
      image: "/7.svg",
      description: "Alívio de tensões musculares profundas e pontos de gatilho."
    },
    {
      id: 8,
      name: "Avaliação Postural",
      price: "R$ 150,00 (avaliação completa)",
      image: "/8.svg",
      description: "Análise detalhada da sua postura e plano de tratamento personalizado."
    },
  ];

  const testimonials = [
    {
      name: "Carla R., 34",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "Depois de 3 sessões, minha dor nas costas sumiu! Atendimento humanizado e super profissional.",
    },
    {
      name: "Marcos P., 47",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      text: "Voltei a andar sem dor após lesão no joelho. Recomendo demais o FisioCuidar!",
    },
    {
      name: "Dra. Fernanda, 29",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
      text: "Como médica, indico com confiança. Excelente técnica e empatia no atendimento.",
    },
  ];

  const advantages = [
    {
      icon: "📅",
      title: "Agendamento Flexível",
      desc: "Atendimento de segunda a sábado, inclusive horários noturnos.",
    },
    {
      icon: "🏠",
      title: "Atendimento Domiciliar",
      desc: "Disponível em toda região central (consulte valores).",
    },
    {
      icon: "🧾",
      title: "Nota Fiscal + Reembolso",
      desc: "Emito nota para reembolso em planos de saúde e empresas.",
    },
  ];

  const handleWhatsAppClick = (serviceName) => {
    const message = `Olá, FisioCuidar! Gostaria de agendar: ${serviceName}`;
    const url = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section — COM SUA IMAGEM SVG + FIXADA */}
      <section 
        className="h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: "url('/fisioterapia.svg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-800 to-transparent opacity-90"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            FisioCuidar
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md max-w-2xl mx-auto">
            Seu corpo merece atenção especializada. Tratamentos personalizados com foco na sua recuperação.
          </p>
          <button 
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Conheça os Serviços
          </button>
        </div>
      </section>

      {/* Services Section — mantido como está */}
      <section 
        id="services" 
        className="py-20 px-6 md:px-12 relative overflow-hidden"
        style={{
         backgroundImage: "url('/fisioterapia.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Nossos <span className="text-teal-500">Serviços</span></h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Cada tratamento é pensado para suas necessidades, com técnicas modernas e baseadas em evidências.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white/90 backdrop-blur rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{service.description}</p>
                  <p className="text-teal-500 font-bold text-xl mb-4">{service.price}</p>
                  <button
                    onClick={() => handleWhatsAppClick(service.name)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Agendar via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos — FUNDO ESCURO FIXO (SEM IMAGEM) */}
      <section 
        className="py-20 bg-gray-500 text-white relative overflow-hidden"
        // SEM backgroundImage — só cor sólida escura
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-center mb-4">O que nossos <span className="text-teal-300">pacientes dizem</span></h2>
          <p className="text-center opacity-90 mb-16">Histórias reais de quem confiou e recuperou sua qualidade de vida.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border border-white/20">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-white"
                />
                <h4 className="font-bold text-white mb-2">{testimonial.name}</h4>
                <p className="opacity-90 italic">“{testimonial.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens — com fundo sutil e blur (mantido) */}
      <section 
        className="py-20 bg-white relative overflow-hidden"
        style={{
         backgroundImage: "url('/fisioterapia.svg')",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Por que escolher o <span className="text-teal-500">FisioCuidar?</span></h2>
          <p className="text-gray-600 mb-16">Tudo pensado para seu conforto, recuperação e bem-estar.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {advantages.map((adv, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-500">
                <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300 inline-block">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{adv.title}</h3>
                <p className="text-gray-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Promoção Relâmpago — IMAGEM fisioterapia.svg FIXADA + AVERMELHADO SUAVE */}
<section 
  className="py-20 text-white text-center relative overflow-hidden"
  style={{
    backgroundImage: "url('/fisioterapia.svg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // ✅ IMAGEM FIXA
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay avermelhado SUAVE */}
  <div className="absolute inset-0 bg-red-900 bg-opacity-70 backdrop-blur-sm"></div>

  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
      🔥 PROMOÇÃO RELÂMPAGO 🔥
    </h2>
    <p className="text-xl mb-8">
      Só esta semana: <span className="font-bold text-2xl">5 sessões por R$ 450!</span>
    </p>
    <p className="mb-8 opacity-95">
      Economize R$ 150 — ideal para tratamentos contínuos.
    </p>
    <p className="mb-10 text-sm opacity-90">
      ⏰ Vagas limitadas — agende antes que esgote!
    </p>
    <button
      onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
      className="bg-white/90 backdrop-blur text-red-700 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transform hover:scale-105 transition duration-300 shadow-lg border border-white/30 hover:shadow-xl"
    >
      Garantir meu Pacote
    </button>
  </div>
</section>

      {/* Footer — FUNDO BEM ESCURO (SEM IMAGEM, NÃO FIXADO) */}
      <footer 
        className="bg-black text-white py-12 relative overflow-hidden"
        // SEM backgroundImage — fundo preto sólido
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">FisioCuidar</h3>
          <p className="mb-6 opacity-80">Cuidando de você, com ciência e empatia.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-teal-400 transition">Instagram</a>
            <a href="#" className="hover:text-teal-400 transition">Facebook</a>
            <a href="#" className="hover:text-teal-400 transition">WhatsApp</a>
          </div>

          {/* Créditos profissionais */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <p className="text-xs opacity-60 mb-2">
              ✨ Modelo de site criado por <strong>Saul Developer</strong> — parte do Catálogo de Sites Prontos.
            </p>
            <a 
              href="https://seucatalogo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline text-sm font-medium"
            >
              → Ver mais modelos no catálogo
            </a>
          </div>

          <p className="text-sm opacity-75 mt-6">
            © {new Date().getFullYear()} FisioCuidar. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 opacity-50">
            Feito com ❤️ para quem cuida do próximo.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;