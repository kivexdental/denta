import React, { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { VideoControls } from './components/VideoControls';
import { EmergencyTriageModal } from './components/EmergencyBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsMarquee } from './components/ReviewsMarquee';
import { ExploreSection } from './components/ExploreSection';
import { AboutSection } from './components/AboutSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CostEstimator } from './components/CostEstimator';
import { DoctorsSection } from './components/DoctorsSection';
import { TrustFeatures } from './components/TrustFeatures';
import { NewsSection } from './components/NewsSection';
import { FaqSection } from './components/FaqSection';
import { VisitUsSection } from './components/VisitUsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal, PolicyTab } from './components/LegalModal';
import { Doctor, ServiceItem } from './data/dentalData';

export const App: React.FC = () => {
  // Ambient video state for website
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [blurLevel, setBlurLevel] = useState<'low' | 'medium' | 'high'>('low');

  // Booking modal state for website
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<Doctor | null>(null);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);

  // Emergency triage modal state for website
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  // Legal policy modal state for website
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [selectedLegalTab, setSelectedLegalTab] = useState<PolicyTab>('privacy');

  // Service detail modal state for website
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);

  const handleOpenBooking = () => {
    setSelectedDoctorForBooking(null);
    setSelectedServiceForBooking(null);
    setIsBookingOpen(true);
  };

  const handleBookWithDoctor = (doctor: Doctor) => {
    setSelectedDoctorForBooking(doctor);
    setSelectedServiceForBooking(null);
    setIsBookingOpen(true);
  };

  const handleBookService = (service: ServiceItem) => {
    setSelectedServiceForBooking(service);
    setSelectedDoctorForBooking(null);
    setIsBookingOpen(true);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTour = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient Background Video Layer */}
      <BackgroundVideo isPlaying={isPlaying} isMuted={isMuted} blurLevel={blurLevel} />

      {/* Floating Ambient Video Controller */}
      <VideoControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        blurLevel={blurLevel}
        setBlurLevel={setBlurLevel}
      />

      {/* Apple Glass Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} onOpenEmergency={() => setIsEmergencyModalOpen(true)} />

      {/* Main Website Sections */}
      <main className="relative z-10">
        <Hero onOpenBooking={handleOpenBooking} onExploreServices={scrollToServices} onOpenVideoTour={scrollToTour} />
        <ServicesSection onOpenBooking={handleOpenBooking} onSelectService={(service) => setSelectedServiceForDetail(service)} />
        <ReviewsMarquee />
        <ExploreSection onOpenBooking={handleOpenBooking} />
        <AboutSection onOpenBooking={handleOpenBooking} />
        <BeforeAfterSlider onOpenBooking={handleOpenBooking} />
        <CostEstimator onOpenBooking={handleOpenBooking} />
        <DoctorsSection onSelectDoctorToBook={handleBookWithDoctor} />
        <TrustFeatures />
        <NewsSection />
        <FaqSection onOpenBooking={handleOpenBooking} />
        <VisitUsSection onOpenBooking={handleOpenBooking} />
      </main>

      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenLegal={(tab) => {
          setSelectedLegalTab(tab);
          setIsLegalOpen(true);
        }}
      />

      {/* Website Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedDoctor={selectedDoctorForBooking}
        preSelectedService={selectedServiceForBooking}
      />

      <ServiceDetailModal
        service={selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onBookService={handleBookService}
      />

      <EmergencyTriageModal isOpen={isEmergencyModalOpen} onClose={() => setIsEmergencyModalOpen(false)} />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        initialTab={selectedLegalTab}
      />
    </div>
  );
};

export default App;
