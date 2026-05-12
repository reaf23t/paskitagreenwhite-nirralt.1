import { motion } from 'motion/react';
import {
  BookOpen,
  Landmark,
  Coins,
  Mountain,
  Map as MapIcon,
  ExternalLink,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'geral',
    title: 'Geral',
    icon: BookOpen,
    description: 'Fontes Gerais sobre o Paquistão',
    items: [
      {
        title: 'Wikipedia — Paquistão',
        desc: 'Fonte geral utilizada para informações históricas, culturais, população, localização e dados gerais do país.',
        url: 'https://pt.wikipedia.org/wiki/Paquistão',
      },
      {
        title: 'UNESCO — Patrimônio',
        desc: 'Fonte relacionada aos patrimônios culturais, tradições e locais históricos do Paquistão.',
        url: 'https://whc.unesco.org/en/statesparties/pk',
      },
      {
        title: 'United Nations Data',
        desc: 'Dados internacionais sobre população, economia e indicadores sociais do país.',
        url: 'https://data.un.org/en/iso/pk.html',
      },
      {
        title: 'Encyclopaedia Britannica',
        desc: 'Fonte internacional utilizada para informações geográficas e históricas.',
        url: 'https://www.britannica.com/place/Pakistan',
      },
      {
        title: 'CIA World Factbook',
        desc: 'Dados sobre população, economia, idiomas e localização.',
        url: 'https://www.cia.gov/the-world-factbook/countries/pakistan/',
      },
      {
        title: 'World Bank',
        desc: 'Informações econômicas e dados do país.',
        url: 'https://www.worldbank.org/en/country/pakistan',
      },
      {
        title: 'Government of Pakistan',
        desc: 'Portal oficial do governo paquistanês com informações nacionais e institucionais.',
        url: 'https://www.pakistan.gov.pk/',
      },
    ],
  },
  {
    id: 'cultura',
    title: 'Cultura',
    icon: Landmark,
    description: 'Fontes sobre Cultura e Costumes',
    items: [
      {
        title: 'National Geographic',
        desc: 'Informações sobre cultura, paisagens e turismo.',
        url: 'https://www.nationalgeographic.com/travel/article/pakistan',
      },
      {
        title: 'Britannica — Cultura',
        desc: 'Pesquisas sobre religião, tradições, festas e roupas típicas.',
        url: 'https://www.britannica.com/place/Pakistan/Cultural-life',
      },
      {
        title: 'Wikipedia — Biryani',
        desc: 'Fonte usada para informações sobre a culinária típica do país.',
        url: 'https://pt.wikipedia.org/wiki/Biryani',
      },
      {
        title: 'Tourism Corporation',
        desc: 'Informações culturais, turismo, festivais e tradições do Paquistão.',
        url: 'https://www.tourism.gov.pk/',
      },
      {
        title: 'BBC Travel — Pakistan',
        desc: 'Matérias internacionais sobre cultura, gastronomia e costumes paquistaneses.',
        url: 'https://www.bbc.com/travel/destinations/pakistan',
      },
    ],
  },
  {
    id: 'economia',
    title: 'Economia',
    icon: Coins,
    description: 'Fontes sobre Economia e Indústria',
    items: [
      {
        title: 'Trading Economics',
        desc: 'Informações econômicas e exportações globais.',
        url: 'https://tradingeconomics.com/pakistan/exports',
      },
      {
        title: 'Bureau of Statistics',
        desc: 'Dados econômicos oficiais do Paquistão.',
        url: 'https://www.pbs.gov.pk/',
      },
      {
        title: 'FIFA — Indústria Esportiva',
        desc: 'Fonte relacionada à fabricação de bolas utilizadas internacionalmente.',
        url: 'https://www.fifa.com/',
      },
      {
        title: 'International Trade Admin',
        desc: 'Dados comerciais e exportações do Paquistão para os EUA.',
        url: 'https://www.trade.gov/country-commercial-guides/pakistan-market-overview',
      },
      {
        title: 'Asian Development Bank',
        desc: 'Pesquisas econômicas, agricultura e desenvolvimento industrial do país.',
        url: 'https://www.adb.org/countries/pakistan/main',
      },
    ],
  },
  {
    id: 'natureza',
    title: 'Natureza',
    icon: Mountain,
    description: 'Fontes Naturais e Geográficas',
    items: [
      {
        title: 'Britannica — K2',
        desc: 'Informações detalhadas sobre a montanha K2, a segunda maior do mundo.',
        url: 'https://www.britannica.com/place/K2',
      },
      {
        title: 'Nature Exploration',
        desc: 'Fonte sobre relevo, clima e ecossistemas.',
        url: 'https://www.nationalgeographic.com/environment/article/pakistan',
      },
      {
        title: 'Wikipedia — Rio Indo',
        desc: 'Fonte utilizada para informações sobre a bacia e conservação do Rio Indo.',
        url: 'https://pt.wikipedia.org/wiki/Rio_Indo',
      },
      {
        title: 'Britannica — Himalayas',
        desc: 'Informações sobre o Himalaia, Karakoram e relevo da região.',
        url: 'https://www.britannica.com/place/Himalayas',
      },
      {
        title: 'NASA Earth Observatory',
        desc: 'Imagens de satélite e análises naturais sobre clima e paisagens.',
        url: 'https://earthobservatory.nasa.gov/',
      },
    ],
  },
  {
    id: 'mapas',
    title: 'Mapas',
    icon: MapIcon,
    description: 'Fontes Cartográficas Oficiais',
    items: [
      {
        title: 'Google Maps',
        desc: 'Referência geográfica do país, fronteiras e vizinhanças.',
        url: 'https://maps.google.com/maps?q=Pakistan',
      },
      {
        title: 'Atlas of Pakistan',
        desc: 'Mapas de domínio público usados como referência visual.',
        url: 'https://commons.wikimedia.org/wiki/Atlas_of_Pakistan',
      },
    ],
  },
];

export default function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-800 overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-emerald-900 hidden md:flex flex-col shrink-0 overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-bold text-xl shrink-0">PK</div>
            <h1 className="text-white font-bold leading-tight text-lg">PAKISTAN<br/><span className="font-normal text-emerald-300 text-xs tracking-widest uppercase">Reference Portal</span></h1>
          </div>
          
          <nav className="space-y-2">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className="w-full flex items-center gap-3 px-4 py-3 text-emerald-100/60 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors text-left"
              >
                <div className="text-emerald-400 flex-shrink-0">
                  <cat.icon className="w-5 h-5" />
                </div>
                <span>{cat.title}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-8 border-t border-emerald-800/50">
          <div className="bg-emerald-800/40 p-4 rounded-xl">
            <p className="text-xs text-emerald-200 uppercase tracking-wider font-bold mb-1">Project Info</p>
            <p className="text-sm text-emerald-50/80 leading-relaxed">Portal acadêmico consolidado para referências de pesquisa e folder institucional.</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* We make main overflow-y-auto so the footer sits at the bottom of the content */}
        <div className="flex-1 overflow-y-auto w-full scroll-smooth">
          {/* Header */}
          <header className="sticky top-0 z-20 min-h-24 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 md:px-10 shrink-0 gap-4 shadow-sm relative">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Fontes Gerais e Acadêmicas</h2>
              <p className="text-sm text-slate-500">Pesquisa institucional, demografia e dados históricos</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-100 uppercase tracking-wide">
                v1.4 Updated
              </div>
            </div>
          </header>

          <div className="p-6 md:p-10 space-y-16 max-w-7xl mx-auto">
            {CATEGORIES.map((category) => (
              <section id={category.id} key={category.id} className="scroll-mt-32">
                <div className="mb-8 border-b border-slate-200 pb-4">
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-emerald-700" />
                    {category.description}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {category.items.map((item, index) => {
                    const tagColors = [
                      "bg-blue-50 text-blue-600",
                      "bg-amber-50 text-amber-600",
                      "bg-purple-50 text-purple-600",
                      "bg-emerald-50 text-emerald-600",
                      "bg-rose-50 text-rose-600",
                      "bg-cyan-50 text-cyan-600",
                    ];
                    const tagColor = tagColors[index % tagColors.length];
                    
                    return (
                      <motion.a
                        key={item.title}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group h-full relative overflow-hidden"
                      >
                        <div className="flex justify-between items-start mb-4 relative z-10">
                          <span className={`px-2 py-1 ${tagColor} text-[10px] font-bold uppercase rounded`}>
                            Fonte {index + 1}
                          </span>
                          <span className="text-slate-300 font-mono text-xs">{(index + 1).toString().padStart(2, '0')}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors flex items-center justify-between relative z-10 pr-6">
                          {item.title}
                          <ExternalLink className="h-4 w-4 text-emerald-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all absolute right-0" />
                        </h3>
                        <p className="text-sm text-slate-600 mb-4 flex-1 relative z-10">
                          {item.desc}
                        </p>
                        <div className="text-xs font-mono text-emerald-600 bg-emerald-50 p-2 rounded truncate transition-colors group-hover:bg-emerald-100/50 relative z-10">
                          {item.url.replace(/^https?:\/\/(www\.)?/, '')}
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Status Bar / Footer */}
          <footer className="mt-8 h-12 bg-slate-100 border-t border-slate-200 flex items-center px-6 md:px-10 justify-between shrink-0">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div> LIVE SOURCE
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline">© {new Date().getFullYear()} Projeto Acadêmico Paquistão</span>
            </div>
            <div className="text-[10px] text-slate-400 font-medium italic">
              Developed for GitHub Pages Deployment
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
