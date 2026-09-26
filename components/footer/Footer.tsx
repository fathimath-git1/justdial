import { quickLinks, jdVerticals } from "@/lib/data";

export function Footer() {
  const [col1, col2] = [
    quickLinks.filter((_, i) => i % 2 === 0),
    quickLinks.filter((_, i) => i % 2 === 1),
  ];

  return (
    <footer className="border-t border-jd-border bg-white">
      <div className="mx-auto max-w-content px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2.5fr]">
          <div>
            <h3 className="mb-3 text-base font-bold text-jd-text">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
              {col1.map((l) => (
                <a key={l.label} href={l.href} className="hover:text-jd-blue hover:underline">
                  {l.label}
                </a>
              ))}
              {col2.map((l) => (
                <a key={l.label} href={l.href} className="hover:text-jd-blue hover:underline">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-jd-text">JD Verticals</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
              {jdVerticals.map((group) => (
                <div key={group.heading} className="space-y-2 text-sm text-gray-600">
                  {group.items.map((item) => (
                    <a key={item} href="#" className="block hover:text-jd-blue hover:underline">
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-jd-border">
        <div className="mx-auto max-w-content break-words px-4 py-4 text-xs leading-relaxed text-gray-500 md:px-6">
          Copyrights 2008-26. All Rights Reserved.{" "}
          <a href="#" className="hover:text-jd-blue hover:underline">Privacy</a>
          {" | "}
          <a href="#" className="hover:text-jd-blue hover:underline">Terms</a>
          {" | "}
          <a href="#" className="hover:text-jd-blue hover:underline">Infringement</a>
        </div>
      </div>
    </footer>
  );
}
