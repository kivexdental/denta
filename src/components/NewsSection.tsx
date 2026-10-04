import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, ArrowRight, X, Bookmark, Share2 } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const articles = [
    {
      id: 'news-1',
      title: 'How AI-Guided Scanners & Cold Lasers Eliminated Dental Anxiety',
      category: 'Clinical Technology',
      date: 'Sep 24, 2026',
      readTime: '4 min read',
      image: '/explore/e2.jpg',
      author: 'Dr. Neha Sharma, Clinical Lead',
      excerpt: 'Modern computer-controlled anesthetic delivery and zero-heat cold laser instruments have transformed the patient experience from stressful to serene.',
      content: `For decades, dental visits were associated with sharp drills, vibrations, and high-pitch noise. At Denta, our implementation of cold light Nd:YAG lasers has fundamentally rewritten this protocol.

Cold lasers work at specific biological wavelengths that vaporize decay without heating the surrounding dentin tubules or triggering the pulp's pain fibers. When paired with computerized Wand anesthesia—which delivers local anesthetic at a rate slower than the body's nerve perception threshold—over 96% of our patients report feeling absolutely no sensation whatsoever.

Key clinical benefits include:
• Near-zero post-procedure inflammation or gum bleeding.
• Preservation of healthy enamel structure by up to 40% compared to traditional burs.
• Same-day recovery with no prolonged facial numbness.`,
    },
    {
      id: 'news-2',
      title: 'Porcelain Veneers vs. Composite Bonding: The Definitive 2026 Aesthetic Guide',
      category: 'Smile Aesthetics',
      date: 'Sep 18, 2026',
      readTime: '6 min read',
      image: '/explore/e4.jpg',
      author: 'Dr. Rajat Malhotra, Smile Architect',
      excerpt: 'Confused between ceramic veneers and direct resin bonding? Explore the lifelike optical transmission, stain resistance, and durability of each.',
      content: `When patients request a smile redesign, the fundamental question usually revolves around porcelain veneers versus composite bonding.

While composite bonding provides a rapid, cost-effective single-visit improvement, handcrafted ultra-thin e.max porcelain remains the gold standard for long-term perfection. Porcelain replicates the subtle translucency, natural light refraction, and micro-texture of organic enamel while resisting coffee, tea, and red wine stains for 15 to 20 years.

Key Comparison Factors:
• Durability: Porcelain lasts 15-20 years; Composite averages 4-7 years.
• Stain Resistance: Porcelain is non-porous and virtually stain-proof.
• Enamel Prep: Modern digital veneers require minimal to zero enamel removal (0.2mm to 0.3mm).`,
    },
    {
      id: 'news-3',
      title: 'The Oral-Systemic Connection: Why Healthy Gums Protect Your Heart',
      category: 'Preventive Health',
      date: 'Aug 30, 2026',
      readTime: '5 min read',
      image: '/explore/e1.jpg',
      author: 'Dr. Amit Verma, Oral Surgeon',
      excerpt: 'Emerging cardiovascular research highlights that subgingival periodontal pathogens can enter systemic circulation and accelerate arterial plaque formation.',
      content: `Your mouth is not an isolated ecosystem—it is the primary gateway to your entire vascular and respiratory systems.

Recent clinical studies published in the Journal of the American Heart Association demonstrate that chronic periodontal infection introduces pathogenic bacteria (such as P. gingivalis) directly into the bloodstream. These bacteria stimulate systemic inflammatory cascades, elevated C-reactive protein (CRP), and increased risk of arterial stiffness.

Routine 6-month ultrasonic prophylaxis and early laser sulcular decontamination do more than brighten teeth—they actively lower your systemic inflammatory burden.`,
    }
  ];

  return (
    <section id="news" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3 border border-white/20">
            <Newspaper className="w-3.5 h-3.5 text-cyan-400" />
            <span>CLINICAL NEWS & INSIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
            Advancing Oral Health
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl font-light">
            Stay educated on the latest clinical breakthroughs, cosmetic dentistry standards, and bio-compatible care.
          </p>
        </div>
      </div>

      {/* 3 News Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelectedArticle(art)}
            className="glass-panel glass-panel-interactive rounded-3xl overflow-hidden border border-white/15 hover:border-cyan-400/40 flex flex-col justify-between cursor-pointer group shadow-2xl"
          >
            {/* Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-900">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-pill text-[11px] font-bold text-cyan-300 border border-white/20">
                {art.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{art.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-300/80 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              {/* Author & Read CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400 truncate max-w-[170px]">
                  {art.author}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-cyan-300 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Lightbox Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="glass-panel rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-white/25 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-cyan-300 mb-3 border border-white/20">
              <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
              <span>{selectedArticle.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {selectedArticle.title}
            </h3>

            <div className="flex items-center gap-3 text-xs text-slate-400 mt-3 pb-4 border-b border-white/10">
              <span>By {selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="mt-5 text-xs sm:text-sm text-slate-200/90 leading-relaxed whitespace-pre-line space-y-4">
              {selectedArticle.content}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full glass-button-primary text-xs font-bold text-white"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
