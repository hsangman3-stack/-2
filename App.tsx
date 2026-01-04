
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  MessageSquare,
  Instagram,
  Facebook
} from 'lucide-react';
import { ServiceItem, ReviewItem } from './types';
import AIConsultant from './components/AIConsultant';

const SERVICES: ServiceItem[] = [
  {
    id: 'diet',
    title: '강대근 한방 다이어트',
    description: '체질 분석을 통한 1:1 맞춤 한약으로 요요 없이 건강한 체중 감량을 도와드립니다.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    tags: ['체질개선', '식욕억제', '부종제거']
  },
  {
    id: 'skin',
    title: '여드름 & 흉터 치료',
    description: '피부 겉과 속을 동시에 다스리는 근본적인 한방 피부 솔루션을 제공합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619245-6677f2cc548d?q=80&w=800&auto=format&fit=crop',
    tags: ['여드름', '피부재생', '흉터']
  },
  {
    id: 'facial',
    title: '안면비대칭 교정',
    description: '수술 없이 한방 수기 요법과 침 치료를 통해 자연스러운 얼굴 라인을 되찾아드립니다.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    tags: ['비수술', '추나요법', '정안침']
  }
];

const REVIEWS: ReviewItem[] = [
  { id: '1', name: '김*현', treatment: '다이어트', content: '3개월 만에 10kg 감량 성공했어요! 체력이 좋아진 게 느껴집니다.', rating: 5 },
  { id: '2', name: '이*우', treatment: '안면교정', content: '거울 볼 때마다 스트레스였는데, 비대칭이 많이 잡혀서 너무 만족해요.', rating: 5 },
  { id: '3', name: '박*서', treatment: '피부치료', content: '피부과 다녀도 안 낫던 여드름이 한의원 다니고 나서 싹 들어갔어요.', rating: 4 },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-primary text-gray-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">强</div>
            <span className={`text-2xl font-bold serif transition-colors ${scrolled ? 'text-gray-900' : 'text-accent'}`}>강대근한의원</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            {['지점소개', '다이어트', '피부클리닉', '안면교정', '커뮤니티'].map((item) => (
              <button key={item} className="hover:text-accent transition-colors" onClick={() => scrollToSection(item)}>{item}</button>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="bg-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
              예약문의
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t absolute w-full left-0 p-4 space-y-4 shadow-xl">
            {['지점소개', '다이어트', '피부클리닉', '안면교정', '커뮤니티'].map((item) => (
              <button key={item} className="block w-full text-left py-2 text-lg font-medium border-b border-gray-100" onClick={() => scrollToSection(item)}>{item}</button>
            ))}
            <button className="w-full bg-accent text-white py-3 rounded-lg mt-4">빠른 예약상담</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-primary"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in-up">
          <h2 className="text-accent text-lg md:text-xl font-medium mb-4 tracking-widest">PREMIUM ORIENTAL CLINIC</h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            당신의 <span className="text-accent">본연의 아름다움</span>을<br />찾아드립니다
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            강대근한의원은 획일적인 치료가 아닌, 개개인의 체질과 건강 상태를 분석하여 가장 자연스럽고 건강한 변화를 약속합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-white px-10 py-4 rounded-full text-lg font-medium shadow-2xl hover:translate-y-[-2px] transition-all">
              상담 예약하기
            </button>
            <button className="bg-white text-accent border border-accent px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-accent hover:text-white transition-all">
              진료 프로그램 보기
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-accent rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: '누적 환자수', value: '50,000+' },
            { label: '다이어트 성공률', value: '94%' },
            { label: '진료 경력', value: '15년' },
            { label: '만족도 조사', value: '4.9/5' },
          ].map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-accent text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="다이어트" className="py-24 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-accent text-lg font-bold mb-2">Our Specialties</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 serif">강대근한의원의 특별한 진료 프로그램</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="bg-white/90 text-accent text-xs px-2 py-1 rounded-full font-bold">#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 serif group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">{service.description}</p>
                  <button className="flex items-center text-accent font-bold group-hover:translate-x-2 transition-transform">
                    자세히 보기 <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dad99978?q=80&w=800&auto=format&fit=crop" 
                alt="Clinic Atmosphere" 
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full -z-0"></div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-accent font-bold text-lg">Philosophy</h3>
            <h2 className="text-3xl md:text-4xl font-bold serif leading-tight">
              근본을 다스리는 치료,<br />강대근한의원의 진심입니다.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              단순히 증상만을 해결하는 것이 아니라, 몸속의 흐름을 바로잡고 균형을 되찾아드리는 것이 우리의 사명입니다. 
              최상급 한약재와 현대적 진단 시스템을 결합하여 신뢰할 수 있는 의료 서비스를 제공합니다.
            </p>
            <ul className="space-y-4">
              {[
                'GMP 인증 최상급 한약재 사용',
                '1:1 전담 주치의 책임 진료제',
                '과학적이고 체계적인 체성분 분석 시스템',
                '프라이빗한 1인 진료실 운영'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <Star size={12} fill="currentColor" />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-accent font-bold">Reviews</h3>
              <h2 className="text-3xl md:text-4xl font-bold serif">환자들의 리얼한 목소리</h2>
            </div>
            <button className="text-accent font-bold flex items-center">더 많은 후기 보기 <ChevronRight size={20}/></button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.content}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold">{review.name}</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">{review.treatment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 serif">지금, 상담을 받아보세요</h2>
          <p className="text-lg opacity-90 mb-12">당신의 고민에 대해 가장 전문적이고 따뜻한 해답을 드립니다.</p>
          <form className="grid md:grid-cols-3 gap-4 bg-white/10 p-6 rounded-3xl backdrop-blur-md">
            <input type="text" placeholder="성함" className="bg-white text-gray-900 px-6 py-4 rounded-xl focus:outline-none" />
            <input type="tel" placeholder="연락처" className="bg-white text-gray-900 px-6 py-4 rounded-xl focus:outline-none" />
            <button className="bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-colors">상담 신청하기</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">强</div>
              <span className="text-2xl font-bold text-white serif">강대근한의원</span>
            </div>
            <div className="space-y-4 text-sm opacity-70 font-light leading-relaxed">
              <p>상호명: 강대근한의원 | 대표원장: 강대근 | 사업자등록번호: 123-45-67890</p>
              <p>주소: 서울특별시 강남구 테헤란로 123 강대근빌딩 4층</p>
              <p>의료법 준수사항: 본 홈페이지의 치료 후기는 환자의 동의를 받았으며, 동일한 치료라도 개인차에 따라 부작용이 발생할 수 있으므로 충분한 상담 후 결정하시기 바랍니다.</p>
            </div>
            <div className="flex space-x-4 mt-8">
              <Instagram className="cursor-pointer hover:text-accent transition-colors" />
              <Facebook className="cursor-pointer hover:text-accent transition-colors" />
              <MessageSquare className="cursor-pointer hover:text-accent transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-accent" />
                <span>강남역 10번 출구 도보 3분</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-accent mt-1" />
                <div>
                  <p>평일: 10:00 - 20:30 (야간진료)</p>
                  <p>토/일: 10:00 - 16:00 (점심없음)</p>
                  <p>공휴일: 휴무</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">지점안내</a></li>
              <li><a href="#" className="hover:text-white transition-colors">다이어트 성공사례</a></li>
              <li><a href="#" className="hover:text-white transition-colors">전후사진(로그인 필요)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-20 pt-8 border-t border-gray-800 text-xs opacity-40">
          © 2024 KANG DAE GEUN CLINIC. All rights reserved.
        </div>
      </footer>

      {/* AI Consultant */}
      <AIConsultant />

      {/* Floating Buttons */}
      <div className="fixed bottom-24 right-6 flex flex-col space-y-4 z-40">
        <button className="w-14 h-14 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <MessageSquare size={28} />
        </button>
        <button className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <Phone size={28} />
        </button>
      </div>
    </div>
  );
};

export default App;
