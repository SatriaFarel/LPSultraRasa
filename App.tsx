
import React, { useEffect, useState } from 'react';
import { 
  Menu as MenuIcon, 
  X, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Clock, 
  Phone,
  ArrowRight,
  Star,
  Utensils,
  ShieldCheck,
  Target,
  Compass,
  Award
} from 'lucide-react';
import { MENU_ITEMS, FEATURES, TESTIMONIALS, WHATSAPP_NUMBER } from './constants';

declare var AOS: any;

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Kasoami' | 'Es Teler'>('All');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleWhatsAppOrder = (menuName?: string) => {
    const message = menuName 
      ? `Halo Sultra Rasa, saya ingin memesan ${menuName}`
      : `Halo Sultra Rasa, saya ingin bertanya tentang menu Anda.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredMenu = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-extrabold text-emerald-600 tracking-tight">Sultra<span className="text-orange-500">Rasa</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-sm font-semibold hover:text-emerald-600 transition-colors">Home</a>
              <a href="#tentang" className="text-sm font-semibold hover:text-emerald-600 transition-colors">Tentang</a>
              <a href="#menu" className="text-sm font-semibold hover:text-emerald-600 transition-colors">Menu</a>
              <a href="#keunggulan" className="text-sm font-semibold hover:text-emerald-600 transition-colors">Keunggulan</a>
              <a href="#testimoni" className="text-sm font-semibold hover:text-emerald-600 transition-colors">Testimoni</a>
              <a href="#kontak" className="text-sm font-semibold hover:text-emerald-600 transition-colors">Kontak</a>
              <button 
                onClick={() => handleWhatsAppOrder()}
                className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95"
              >
                Pesan Sekarang
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Home</a>
              <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Tentang</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Menu</a>
              <a href="#keunggulan" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Keunggulan</a>
              <a href="#testimoni" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Testimoni</a>
              <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-orange-50/50 rounded-l-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left" data-aos="fade-up">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-emerald-700 bg-emerald-100 rounded-full">
                Kuliner Khas Sulawesi Tenggara
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Kasoami & <span className="text-orange-500">Es Teler</span> Autentik
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
                Nikmati perpaduan cita rasa tradisional Sultra yang gurih dan segar. Dibuat dengan bahan-bahan pilihan untuk kualitas terbaik di setiap gigitannya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => handleWhatsAppOrder()}
                  className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} /> Pesan via WhatsApp
                </button>
                <a 
                  href="#menu" 
                  className="px-8 py-4 bg-orange-100 text-orange-700 font-bold rounded-2xl hover:bg-orange-200 transition-all flex items-center justify-center gap-2"
                >
                  Lihat Menu <ArrowRight size={20} />
                </a>
              </div>
            </div>
            <div className="flex-1 relative" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" 
                  alt="Sultra Rasa Hero" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block" data-aos="fade-right" data-aos-delay="400">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Rating Pelanggan</p>
                    <p className="text-lg font-bold text-slate-900">4.9 / 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Section */}
      <section id="tentang" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sejarah */}
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="flex-1 order-2 lg:order-1" data-aos="fade-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
                  alt="Proses Masak" 
                  className="rounded-3xl shadow-xl w-full"
                />
                <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg hidden md:block">
                  <Award size={32} />
                  <p className="font-bold mt-2">Bahan Lokal Alami</p>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2" data-aos="fade-left">
              <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-4 block">Cerita Kami</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
                Dedikasi Rasa dari <span className="text-emerald-600">Sulawesi Tenggara</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Sultra Rasa berawal dari sebuah dapur keluarga di Kendari yang menjunjung tinggi keaslian kuliner lokal. Kami menyadari bahwa Kasoami bukan sekadar makanan, melainkan identitas dan warisan budaya yang perlu dijaga keasliannya di tengah modernisasi.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Dimulai dari menjajakan Kasoami hangat dengan resep turun-temurun, kami kemudian berinovasi menghadirkan Es Teler sebagai penyeimbang yang segar. Kini, Sultra Rasa hadir untuk menjembatani rindu para perantau dan memperkenalkan kelezatan Sultra kepada dunia.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-4 rounded-2xl">
                  <p className="text-2xl font-extrabold text-emerald-600">10+</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Resep Warisan</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-2xl">
                  <p className="text-2xl font-extrabold text-orange-600">100%</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Halal & Alami</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-slate-100">
            <div className="bg-orange-50/50 p-10 rounded-[40px] border border-orange-100" data-aos="fade-up">
              <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Visi Kami</h3>
              <p className="text-slate-600 leading-relaxed italic">
                "Menjadi pionir kuliner Sulawesi Tenggara yang mendunia dengan tetap mempertahankan nilai-nilai tradisional dan kualitas rasa yang autentik."
              </p>
            </div>
            <div className="bg-emerald-50/50 p-10 rounded-[40px] border border-emerald-100" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                <Compass size={28} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Misi Kami</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-[10px] text-white">1</div>
                  <p className="text-sm">Menjaga standar kualitas bahan baku singkong dan buah-buahan lokal terbaik.</p>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-[10px] text-white">2</div>
                  <p className="text-sm">Memberikan pelayanan yang hangat dan profesional kepada setiap pelanggan.</p>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-[10px] text-white">3</div>
                  <p className="text-sm">Terus berinovasi tanpa menghilangkan ruh keaslian rasa tradisional.</p>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-[10px] text-white">4</div>
                  <p className="text-sm">Mempromosikan kekayaan budaya Sultra melalui setiap hidangan yang disajikan.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" data-aos="fade-up">Daftar Menu Favorit</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Pilih menu andalan kami yang siap menggoyang lidah Anda. Dari yang gurih hangat hingga yang manis segar.
          </p>
          
          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar" data-aos="fade-up">
            {['All', 'Kasoami', 'Es Teler'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                  : 'bg-white text-slate-600 hover:bg-emerald-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Menu */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMenu.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full"
                data-aos="zoom-in"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-emerald-700">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-xl font-extrabold mb-2">{item.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-emerald-600 font-extrabold text-lg">{item.price}</span>
                    <button 
                      onClick={() => handleWhatsAppOrder(item.name)}
                      className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all active:scale-90"
                    >
                      <MessageCircle size={22} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section id="keunggulan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" data-aos="fade-up">Kenapa Harus Sultra Rasa?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Kualitas dan rasa adalah prioritas kami untuk memuaskan kerinduan Anda akan kuliner daerah yang berkualitas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => (
              <div 
                key={feature.id} 
                className="p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-xl transition-all group"
                data-aos="fade-up"
                data-aos-delay={feature.id * 100}
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-extrabold mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimoni" className="py-24 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4" data-aos="fade-up">Apa Kata Pelanggan?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Kepercayaan pelanggan adalah motivasi kami untuk terus menyajikan yang terbaik.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testi) => (
              <div 
                key={testi.id} 
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100"
                data-aos="fade-up"
                data-aos-delay={testi.id * 150}
              >
                <div className="flex gap-1 mb-6 text-orange-400">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{testi.comment}"</p>
                <div className="flex items-center gap-4">
                  <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">{testi.name}</h4>
                    <p className="text-xs text-slate-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="green-peach-gradient rounded-[40px] p-10 lg:p-20 text-center relative overflow-hidden shadow-2xl"
            data-aos="zoom-in"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Lapar? Pesan Kasoami & <br className="hidden md:block"/> Es Teler Sekarang!
              </h2>
              <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
                Dapatkan promo menarik untuk setiap pembelian di atas Rp 100.000 khusus pemesanan via WhatsApp hari ini.
              </p>
              <button 
                onClick={() => handleWhatsAppOrder()}
                className="px-10 py-5 bg-white text-emerald-700 font-extrabold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto"
              >
                <MessageCircle size={24} /> Hubungi Sultra Rasa
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="kontak" className="pt-24 pb-12 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <span className="text-3xl font-extrabold text-emerald-500 tracking-tight mb-6 inline-block">Sultra<span className="text-orange-400">Rasa</span></span>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Menyajikan kuliner terbaik dari tanah Sulawesi Tenggara. Kualitas rasa nomor satu, higienis, dan pastinya halal.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Kontak Kami</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-400 text-sm">
                  <MapPin className="text-emerald-500 flex-shrink-0" size={20} />
                  <span>Jl. Kuliner Khas Sultra No. 123, Kendari, Sulawesi Tenggara</span>
                </li>
                <li className="flex gap-3 text-slate-400 text-sm items-center">
                  <Phone className="text-emerald-500 flex-shrink-0" size={20} />
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex gap-3 text-slate-400 text-sm items-center">
                  <Clock className="text-emerald-500 flex-shrink-0" size={20} />
                  <span>Setiap Hari: 10.00 - 21.00</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Navigasi</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-slate-400 hover:text-white text-sm transition-colors">Home</a></li>
                <li><a href="#tentang" className="text-slate-400 hover:text-white text-sm transition-colors">Tentang Kami</a></li>
                <li><a href="#menu" className="text-slate-400 hover:text-white text-sm transition-colors">Daftar Menu</a></li>
                <li><a href="#testimoni" className="text-slate-400 hover:text-white text-sm transition-colors">Testimoni</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Langganan Info</h4>
              <p className="text-slate-400 text-sm mb-4">Dapatkan update menu baru dan promo eksklusif.</p>
              <div className="flex gap-2 p-1 bg-slate-800 rounded-xl">
                <input type="email" placeholder="Email Anda" className="bg-transparent border-none focus:ring-0 text-sm px-4 py-2 w-full text-white" />
                <button className="bg-emerald-600 p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
            <p>&copy; {new Date().getFullYear()} Sultra Rasa. All rights reserved. Crafted with heart for local taste.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => handleWhatsAppOrder()}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-bounce group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-20 bg-white text-slate-800 px-4 py-2 rounded-xl text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Order Sekarang
        </span>
      </button>
    </div>
  );
};

export default App;
