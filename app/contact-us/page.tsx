import Image from "next/image";
import Link from "next/link";
import { BackToTop } from "@/components/ui/BackToTop";

const offices = [
  { name: "Registered & Corporate Office", address: "Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Goregaon Sports Complex, Malad (W), Mumbai - 400064." },
  { name: "Ahmedabad", address: "Just Dial Tower Shaiv Complex 19 Inquilab Society, Ambawadi, Opposite Sears Tower Gulbai Tekra, Ahmedabad - 380006." },
  { name: "Bangalore (Cunningham Road)", address: "#29, SRT Street, Cunningham Road, Bangalore - 560052." },
  { name: "Bangalore (Manyata Tech Park)", address: "E2 Silver Oak|4th Floor|Tower E2 Manyatha Embassy business park, Outer Ring Road, Nagawara, Near JAI Hanuman Petrol Bunk, Opposite To B.E.L Corporate Office, Bangalore - 560045." },
  { name: "Chandigarh", address: "Plot No. 66, 2nd floor, Near Honda Harmony Showroom, Industrial Area, Phase 2, Chandigarh - 160002." },
  { name: "Chennai", address: "B Wing, 3rd Floor, Temple Steps, 184-187 Anna Salai, Little Mount, Saidapet, Chennai - 600015." },
  { name: "Coimbatore", address: "# 25, AGT Business Park, 3rd Floor, Avinashi Road, Coimbatore - 641014." },
  { name: "Delhi", address: "A-45-50, Sector - 16, Noida - 201301." },
  { name: "Hyderabad", address: "No: 7-1-23 First Floor, Roxana Building, Above HDFC Bank, Greenlands, Begumpet, Hyderabad - 500016." },
  { name: "Jaipur", address: "4th Floor, SB 57, Ridhi Tower, Tonk Road, Opp SMS Stadium, Jaipur-302017." },
  { name: "Kolkata", address: "No: 703, Godrej Waterside Tower One Sector V, Salt Lake City, Kolkata - 700091." },
  { name: "Pune", address: "S.No.67/1, 67/2A, 66A/1A & 66A/1B, Clover Lingfield Plaza, 1st Floor Above Reliance Fresh, Off Wanawarie Salunke Vihar Road, Pune-411040." },
  { name: "Media Contact", address: "Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Goregaon Sports Complex, Malad (W), Mumbai - 400064." },
];

/* ─── card accent colours matching the screenshot ───────────────────────── */
const COMPANY_COLOR = "#c0392b"; // orange-red for "Just Dial Limited" label

const socials = [
  ["facebook_icon.svg", "Facebook"], ["youtube_icon.svg", "YouTube"],
  ["insta_icon.svg", "Instagram"], ["linked_ic.svg", "LinkedIn"], ["twitter_icon.svg", "X"],
] as const;

const footerLinks = [
  ["About Us", "about_ic.svg", "/about-us"], ["Feedback", "chat_bubble_icon.svg", "#"],
  ["Testimonials", "cms_testimonials.svg", "#"], ["Accessibility", "accessibility.svg", "#"],
  ["Contact Us", "mic_icon.svg", "/contact-us"], ["Media", "cms_media.svg", "#"],
  ["Success Stories", "cms_successStories.svg", "#"], ["Return & Exchange Policy", "return_policyicon.svg", "#"],
] as const;

export default function ContactUsPage() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <Link href="/" className="contact-brand" aria-label="OSKA Ventures LLP home">
          <Image src="/images/oska-logo.png" alt="OSKA Ventures LLP" width={56} height={56} priority className="h-14 w-14 object-contain rounded-md" />
        </Link>
        <span className="contact-investor">Investor Relations</span>
        <nav>
          {[
            "Overview",
            "Financials",
            "News & Events",
            "Governance",
            "CSR",
            "Shareholders' Information",
            "Others",
          ].map((item) => (
            <a href="#" key={item}>{item}</a>
          ))}
        </nav>
      </header>

      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="office-section">
        <h2>OSKA Ventures LLP has its offices across the country.</h2>
        <div className="office-grid">
          {offices.map((office, index) => (
            <article className="office-card" key={office.name}>
              <h3 className="card-title">{office.name}</h3>
              <div className="card-body">
                <span className="card-company">OSKA Ventures LLP</span>
                <p className="card-address">{office.address}</p>
              </div>
              <a
                href={office.name === "Media Contact" ? "#media-contact" : "#contact-details"}
                id={index === 0 ? "contact-details" : office.name === "Media Contact" ? "media-contact" : undefined}
                className="card-link"
              >
                Contact Us <span className="card-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact-footer">
        {/* ── Column 1: Brand + footer links ── */}
        <div className="contact-footer-col">
          <span className="cf-tagline">Search for Anything . Anywhere</span>
          <h2 className="cf-heading">India&apos;s No.1 Local Search Engine</h2>
          <div className="cf-links-grid">
            {footerLinks.map(([label, icon, href]) => (
              <Link href={href} key={label} className="cf-link">
                <Image src={`/images/about-us/${icon}`} alt="" width={22} height={22} unoptimized />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Column 2: Social + copyright ── */}
        <div className="contact-footer-col cf-middle">
          <span className="cf-section-label">Connect With Us</span>
          <div className="cf-socials">
            {socials.map(([icon, label]) => (
              <a href="#" aria-label={label} key={label} className="cf-social-btn">
                <Image src={`/images/about-us/${icon}`} alt={label} width={20} height={20} unoptimized />
              </a>
            ))}
          </div>
          <p className="cf-copy">
            Copyrights 2008-26. All Rights Reserved.<br />
            <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Infringement</a>
          </p>
        </div>

        {/* ── Column 3: Links ── */}
        <div className="contact-footer-col">
          <span className="cf-section-label">Links</span>
          <div className="cf-nav-links">
            {[
              "Investors Services", "Governance",
              "Financials",        "CSR",
              "News & Events",     "Customer Care",
              "Careers",           "Others",
            ].map((item) => (
              <a href="#" key={item} className="cf-nav-link">{item}</a>
            ))}
          </div>
        </div>
      </footer>

      <BackToTop />

      {/* ── single consolidated style block ── */}
      <style>{`
        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; }
        nextjs-portal, [data-nextjs-toast], [data-nextjs-dialog-overlay] { display: none !important; }

        /* ── Page shell ── */
        .contact-page {
          min-height: 100vh;
          background: #fff;
          color: #111;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* ── Header ── */
        .contact-header {
          height: 88px;
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 0 max(calc((100% - 1645px) / 2), 5.6%);
          background: #fff;
          border-bottom: 1px solid #dfe3e6;
        }
        .contact-brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .contact-brand img {
          width: 56px;
          height: 56px;
          object-fit: contain;
          border-radius: 6px;
        }
        .contact-investor {
          padding: 8px 14px;
          border: 1px solid #9aa3aa;
          border-radius: 4px;
          color: #444;
          font-size: 16px;
          white-space: nowrap;
          background: #f9f9f9;
        }
        .contact-header nav {
          display: flex;
          align-items: center;
          gap: clamp(18px, 2.3vw, 34px);
          margin-left: auto;
          white-space: nowrap;
        }
        .contact-header nav a {
          color: #111;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
        }

        /* ── Hero banner ── */
        .contact-hero {
          height: 312px;
          display: grid;
          place-items: center;
          background: linear-gradient(rgba(0,0,0,.33),rgba(0,0,0,.33)),
                      url('/images/contact-us/contactusbanner@2x.jpg') center/cover no-repeat;
        }
        .contact-hero h1 {
          margin: 0;
          color: #fff;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 1.43;
          text-shadow: 0 1px 3px rgba(0,0,0,.35);
        }

        /* ── Office section ── */
        .contact-page .office-section {
          width: min(1280px, calc(100% - 40px));
          margin: 0 auto;
          padding: 50px 0 70px;
        }
        .contact-page .office-section > h2 {
          font-size: 22px;
          line-height: 1.4;
          font-weight: 400;
          text-align: center;
          margin: 0 0 36px;
          color: #111;
        }

        /* ── Office grid ── */
        .contact-page .office-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px 20px;
          justify-content: start;
        }

        /* ── Office card ── */
        .contact-page .office-card {
          min-height: 0;
          padding: 30px 28px 24px;
          background: #f1f5f7;
          border: 1px solid #dde2e6;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          transition: box-shadow .2s, border-color .2s;
        }
        .contact-page .office-card:hover {
          box-shadow: 0 3px 12px rgba(0,0,0,.10);
          border-color: #c8d0d8;
        }

        /* card title */
        .contact-page .office-card .card-title {
          margin: 0 0 14px;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 700;
          color: #111;
        }

        /* card body */
        .contact-page .office-card .card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        /* "Just Dial Limited" label — orange-red */
        .contact-page .office-card .card-company {
          font-size: 14px;
          line-height: 1.4;
          color: #c0392b;
          font-weight: 400;
        }

        /* address text */
        .contact-page .office-card .card-address {
          margin: 0;
          font-size: 16px;
          line-height: 26px;
          color: #68727d;
        }

        /* "Contact Us →" link pinned to bottom */
        .contact-page .office-card .card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          padding-top: 18px;
          color: #0076d7;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.43;
          text-decoration: none;
        }
        .contact-page .office-card .card-link:hover { text-decoration: underline; }
        .contact-page .office-card .card-arrow {
          font-size: 18px;
          line-height: 1;
        }

        /* ── Footer ── */
        /* ── Footer shell ── */
        .contact-footer {
          background: #f5f5f5;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0 5%;
          padding: 48px max(calc((100% - 1200px) / 2), 40px) 44px;
          border-top: 1px solid #e0e0e0;
        }

        /* each column gets a right-border except last */
        .contact-footer .contact-footer-col {
          padding: 0 32px 0 0;
          border-bottom: none;
        }
        .contact-footer .contact-footer-col:last-child { padding-right: 0; }

        /* Col-1 tagline */
        .cf-tagline {
          display: block;
          font-size: 13px;
          color: #555;
          margin-bottom: 6px;
        }

        /* Col-1 heading */
        .cf-heading {
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin: 0 0 24px;
          line-height: 1.3;
        }

        /* Col-1 2-column icon-link grid */
        .cf-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 12px;
        }
        .cf-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #111;
          font-size: 14px;
          text-decoration: none;
          line-height: 1.4;
          white-space: nowrap;
        }
        .cf-link:hover { color: #0076d7; }
        .cf-link img { flex-shrink: 0; width: 22px; height: 22px; opacity: .75; }

        /* Col-2 section label */
        .cf-section-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #555;
          margin-bottom: 14px;
        }

        /* Col-2 social icons — bordered squares */
        .cf-socials {
          display: flex;
          gap: 10px;
          margin-bottom: 18px;
        }
        .cf-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1.5px solid #999;
          border-radius: 4px;
          color: #333;
          text-decoration: none;
          transition: border-color .15s, background .15s;
        }
        .cf-social-btn:hover { border-color: #0076d7; background: #f0f7ff; }
        .cf-social-btn img { width: 20px; height: 20px; object-fit: contain; }

        /* Col-2 copyright */
        .cf-copy {
          font-size: 13px;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }
        .cf-copy a { color: #0076d7; text-decoration: none; }
        .cf-copy a:hover { text-decoration: underline; }

        /* Col-3 nav links 2-column grid */
        .cf-nav-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 24px;
          margin-top: 4px;
        }
        .cf-nav-link {
          color: #111;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          line-height: 1.4;
        }
        .cf-nav-link:hover { color: #0076d7; }

        /* middle col spacing */
        .cf-middle { padding: 0 24px; }

        .contact-page > button { bottom: 30px !important; right: 30px !important; width: 44px; height: 42px; border-radius: 4px; background: #666; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .contact-header { padding: 0 4%; gap: 20px; }
          .contact-page .office-grid { grid-template-columns: repeat(2, 1fr); gap: 16px 12px; }
          .contact-footer { padding: 36px 28px 36px; gap: 0 3%; }
          .cf-middle { padding: 0 18px; }
        }
        @media (max-width: 760px) {
          .contact-header { height: auto; min-height: 74px; padding: 12px 16px; flex-wrap: wrap; }
          .contact-header nav { width: 100%; overflow-x: auto; margin: 0; padding-bottom: 4px; }
          .contact-investor { margin-right: auto; }
          .contact-hero { height: 240px; }
          .contact-page .office-section { width: 100%; padding: 28px 16px 40px; }
          .contact-page .office-section > h2 { font-size: 16px; margin-bottom: 20px; }
          .contact-page .office-grid { grid-template-columns: 1fr; gap: 12px; }
          .contact-footer { grid-template-columns: 1fr; padding: 32px 20px 28px; gap: 32px 0; }
          .contact-footer .contact-footer-col { padding-right: 0; border-bottom: 1px solid #e0e0e0; padding-bottom: 28px; }
          .cf-middle { padding: 0; }
          .contact-page > button { bottom: 24px !important; right: 24px !important; }
        }
      `}</style>
      <style>{`@media(max-width:760px){.contact-page .contact-header{height:auto!important;min-height:68px;padding:10px 16px!important;gap:10px;flex-wrap:wrap}.contact-page .contact-brand{font-size:34px!important;letter-spacing:-2px}.contact-page .contact-investor{font-size:12px;padding:6px 8px;margin-right:auto}.contact-page .contact-header nav{display:flex!important;width:100%;margin:0;gap:18px;overflow-x:auto;overscroll-behavior-inline:contain;padding:2px 0 6px;scrollbar-width:none}.contact-page .contact-header nav::-webkit-scrollbar{display:none}.contact-page .contact-header nav a{font-size:12px;flex:0 0 auto}.contact-page .contact-hero{height:180px!important;background-position:center!important}.contact-page .contact-hero h1{font-size:26px!important}.contact-page .office-section{width:100%!important;padding:28px 16px 40px!important}.contact-page .office-section>h2{font-size:18px!important;line-height:1.4;margin-bottom:22px!important}.contact-page .office-grid{grid-template-columns:minmax(0,1fr)!important;gap:14px!important}.contact-page .office-card{width:100%!important;min-height:250px!important;padding:22px!important}.contact-page .office-card .card-title{font-size:19px;line-height:1.4;margin-bottom:14px}.contact-page .office-card .card-company{font-size:14px}.contact-page .office-card .card-address{font-size:14px;line-height:22px;overflow-wrap:anywhere}.contact-page .office-card .card-link{font-size:16px;padding-top:16px}.contact-page .contact-footer{grid-template-columns:minmax(0,1fr)!important;gap:26px;padding:32px 18px 28px!important}.contact-page .contact-footer .contact-footer-col{min-width:0;padding:0 0 24px;border-bottom:1px solid #e0e0e0}.contact-page .cf-middle{padding:0}.contact-page .cf-links-grid,.contact-page .cf-nav-links{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 10px}.contact-page .cf-link{white-space:normal;font-size:13px;gap:8px}.contact-page .cf-nav-link{font-size:14px}.contact-page .cf-socials{gap:8px}.contact-page .cf-copy{font-size:12px}.contact-page>button{right:18px!important;bottom:18px!important}}@media(max-width:380px){.contact-page .contact-brand{font-size:30px!important}.contact-page .contact-investor{font-size:11px}.contact-page .office-card{padding:18px!important}.contact-page .cf-links-grid,.contact-page .cf-nav-links{grid-template-columns:1fr}}`}</style>    </main>
  );
}
