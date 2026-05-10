"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="medium"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Collections",          id: "products"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="WHITE EAGLE"
      button={{ text: "Contact Us", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars"}}
      title="Luxury Multibrand Outlet in Dhariwal"
      description="Your premier destination for exclusive clothing, accessories, and premium fashion. Visit once, visit forever."
      kpis={[
        {
          value: "4.9+",          label: "Google Rating"},
        {
          value: "1000+",          label: "Happy Clients"},
        {
          value: "Premium",          label: "Quality Only"},
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Get Directions",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/two-stylish-shop-assistants-elegantly-dressed-working-menswear-store_613910-19747.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/elderly-client-looking-formal-blazers-shopping-mall_482257-99066.jpg",          alt: "Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/full-length-portrait-man-suit-using-smartphone_171337-19117.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/elegantly-dressed-bearded-shop-assistant-with-standing-near-mannequin-menswear-store_613910-19737.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/middle-eastern-client-wheelchair-examining-clothes-racks-retail-store_482257-118472.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/owner-getting-ready-reopening_23-2149142189.jpg",          alt: "Customer 5"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Premium Quality"},
        {
          type: "text",          text: "Worldwide Shipping"},
        {
          type: "text",          text: "Trendy Collections"},
        {
          type: "text",          text: "Expert Styling"},
        {
          type: "text",          text: "Customer Focused"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Style & Elegance"
      description="Located in the heart of Dhariwal, White Eagle offers a curated selection of luxury multi-brand apparel. From formal wear to casual chic, we cater to your unique style needs with professional service and top-tier quality."
      imageSrc="http://img.b2bpic.net/free-photo/tailor-student-choosing-design-create-tailored-clothes-custom-made-learning-manufacturing-process-atelier-experienced-craftsman-teaching-apprentice-design-items-handheld-shot_482257-65211.jpg"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Formal Shirts",          price: "₹2,499",          variant: "Premium Cotton",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-holding-champagne-glass_23-2148741473.jpg"},
        {
          id: "p2",          name: "Designer Denim",          price: "₹3,999",          variant: "Slim Fit",          imageSrc: "http://img.b2bpic.net/free-photo/young-charming-girl-photographer-working-with-tablet-sits-table-studio-with-loft-interior_613910-14398.jpg"},
        {
          id: "p3",          name: "Casual Polos",          price: "₹1,899",          variant: "Summer Wear",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-indian-man-posing-studio_23-2150692805.jpg"},
        {
          id: "p4",          name: "Luxury Watches",          price: "₹5,000",          variant: "Analog",          imageSrc: "http://img.b2bpic.net/free-photo/view-women-bag-stuff_93675-131548.jpg"},
        {
          id: "p5",          name: "Winter Sweatshirts",          price: "₹2,999",          variant: "Thermal",          imageSrc: "http://img.b2bpic.net/free-photo/serious-sad-black-guy-wears-blank-grey-jeans-sweatportrait-hoodie-posing-front-white-wall_346278-1066.jpg"},
        {
          id: "p6",          name: "Premium Shades",          price: "₹1,200",          variant: "Polarized",          imageSrc: "http://img.b2bpic.net/free-photo/woman-buying-stuff-decoration-store_1303-24636.jpg"},
      ]}
      title="Exclusive Collections"
      description="Discover our latest trends in fashion and accessories."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "4.9",          title: "Review Score",          description: "Highly rated by customers",          imageSrc: "http://img.b2bpic.net/free-photo/empty-clothing-store-mall_482257-91309.jpg"},
        {
          id: "m2",          value: "12",          title: "Years Active",          description: "Serving since inception",          imageSrc: "http://img.b2bpic.net/free-photo/wide-assortment-jeans-hanging-store_627829-6053.jpg"},
        {
          id: "m3",          value: "24/7",          title: "Style Support",          description: "Always ready to help",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-looking-upward-t-shirt-hat-looking-thoughtful-front-view_176474-31262.jpg"},
      ]}
      title="Our Growth"
      description="Serving the Gurdaspur and Dhariwal community with pride."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Luxury stuff & excellent collection paji di... god bless you paji!"
      rating={5}
      author="Krishan Kumar"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-female-personal-shopper-working_23-2148924146.jpg",          alt: "Customer"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-shopping_23-2149241331.jpg",          alt: "Customer"},
        {
          src: "http://img.b2bpic.net/free-photo/selfie-happy-latin-black-haired-woman-standing-near-rack-with-dresses-fashion-shop-looking-camera-smiling-boutique-customer-shop-assistant-concept_74855-11953.jpg",          alt: "Customer"},
        {
          src: "http://img.b2bpic.net/free-photo/designer-face-mask-studio-show-room_53876-100303.jpg",          alt: "Customer"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-shopping_23-2149241332.jpg",          alt: "Customer"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Fashion Daily",        "Dhariwal Trends",        "Gurdaspur Lifestyle",        "Punjab Chic",        "Modern Style Co.",        "Elite Apparel",        "Heritage Wear"]}
      title="Trusted by Local Icons"
      description="Join our community of satisfied shoppers in Punjab."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Do you ship worldwide?",          content: "Yes, we offer global shipping for our luxury collections."},
        {
          id: "f2",          title: "What are your store hours?",          content: "We open at 9:00 AM daily."},
        {
          id: "f3",          title: "Where are you located?",          content: "Near State Bank of India, Dhariwal, Punjab."},
      ]}
      title="Frequent Questions"
      description="Answers to common queries about White Eagle."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Visit Us"
      title="Visit Our Store"
      description="Near State Bank of India, Gurdaspur, Dhariwal, Punjab 143519. Call us at 080066 81000."
      buttons={[
        {
          text: "Call Now",          href: "tel:08006681000"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="WHITE EAGLE"
      columns={[
        {
          title: "Store",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Collections",              href: "#products"},
          ],
        },
        {
          title: "Help",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
