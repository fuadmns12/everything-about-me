import type { ProfileData } from '@/types/profile';
import HudFrame from '@/components/HudFrame';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface ContactSectionProps {
  profile: ProfileData;
}

type OrbitKind = 'image' | 'icon';

type OrbitItem = {
  key: string;
  url: string;
  label: string;
  slotClass: string;
  badge?: string;
  kind: OrbitKind;
  imgSrc?: string;
};

export default function ContactSection({ profile }: ContactSectionProps) {
  const orbitItems: OrbitItem[] = profile.socialLinks.map((link) => {
    const isInstagram = link.platform === 'Instagram';
    const isLeg = isInstagram && link.url.includes('learningenglishgeuwat');

    if (link.platform === 'Facebook') {
      return {
        key: `${link.platform}-${link.url}`,
        url: link.url,
        label: link.label,
        slotClass: 'slot-facebook',
        kind: 'image',
        imgSrc: '/social-media/facebook.webp',
      };
    }

    if (link.platform === 'LinkedIn') {
      return {
        key: `${link.platform}-${link.url}`,
        url: link.url,
        label: link.label,
        slotClass: 'slot-linkedin',
        kind: 'image',
        imgSrc: '/social-media/linkedin.webp',
      };
    }

    if (link.platform === 'Discord') {
      return {
        key: `${link.platform}-${link.url}`,
        url: link.url,
        label: link.label,
        slotClass: 'slot-discord',
        kind: 'image',
        imgSrc: '/social-media/discord.webp',
      };
    }

    if (link.platform === 'Email') {
      return {
        key: `${link.platform}-${link.url}`,
        url: link.url,
        label: link.label,
        slotClass: 'slot-mail',
        kind: 'image',
        imgSrc: '/social-media/email.webp',
      };
    }

    if (link.platform === 'WhatsApp') {
      return {
        key: `${link.platform}-${link.url}`,
        url: link.url,
        label: link.label,
        slotClass: 'slot-whatsapp',
        kind: 'image',
        imgSrc: '/social-media/whatsapp.webp',
      };
    }

    if (isInstagram) {
      return {
        key: `${link.platform}-${link.url}`,
        url: link.url,
        label: link.label,
        slotClass: isLeg ? 'slot-instagram-alt' : 'slot-instagram',
        badge: isLeg ? 'LEG' : 'FM',
        kind: 'image',
        imgSrc: '/social-media/instagram.webp',
      };
    }

    return {
      key: `${link.platform}-${link.url}`,
      url: link.url,
      label: link.label,
      slotClass: 'slot-generic',
      kind: 'icon',
    };
  });

  // New layout: no orbit. Icons are stacked on the left/right rails of the portrait card,
  // from mid -> top (matching the reference composition).
  // DOM order is top -> bottom.
  const leftOrder = ['slot-discord', 'slot-mail', 'slot-whatsapp'];
  const rightOrder = ['slot-facebook', 'slot-instagram-alt', 'slot-instagram', 'slot-linkedin'];

  const leftItems = orbitItems
    .filter((item) => leftOrder.includes(item.slotClass))
    .sort((a, b) => leftOrder.indexOf(a.slotClass) - leftOrder.indexOf(b.slotClass));

  const rightItems = orbitItems
    .filter((item) => rightOrder.includes(item.slotClass))
    .sort((a, b) => rightOrder.indexOf(a.slotClass) - rightOrder.indexOf(b.slotClass));

  // Keep any unknown socials accessible (append them to the right rail).
  const extraItems = orbitItems.filter(
    (item) => !leftOrder.includes(item.slotClass) && !rightOrder.includes(item.slotClass),
  );
  rightItems.push(...extraItems);

  return (
    <section id="contact" className="section" aria-label="Contact">
      <HudFrame className="contact-panel">
        <h2 className="section-title">Connect</h2>

        <div className="contact-orbit" aria-label="Social links">
          <div className="contact-portrait-card">
            <Image
              className="contact-orbit-portrait"
              src="/social-media/fuadfix.webp"
              alt=""
              fill
              sizes="(max-width: 767px) 86vw, 520px"
              priority={false}
            />

            <div className="contact-side contact-side-left" aria-label="Left social links">
              {leftItems.map((item) => (
                <a
                  key={item.key}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`contact-orbit-item ${item.slotClass} ${item.badge ? 'has-badge' : ''}`.trim()}
                  data-badge={item.badge}
                  aria-label={`Open ${item.label}`}
                  title={`Open ${item.label}`}
                >
                  {item.kind === 'image' && item.imgSrc ? (
                    <Image
                      className="contact-orbit-img"
                      src={item.imgSrc}
                      alt=""
                      fill
                      sizes="96px"
                      priority={false}
                    />
                  ) : (
                    <MessageCircle className="contact-orbit-icon" size={26} aria-hidden="true" />
                  )}
                </a>
              ))}
            </div>

            <div className="contact-side contact-side-right" aria-label="Right social links">
              {rightItems.map((item) => (
                <a
                  key={item.key}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`contact-orbit-item ${item.slotClass} ${item.badge ? 'has-badge' : ''}`.trim()}
                  data-badge={item.badge}
                  aria-label={`Open ${item.label}`}
                  title={`Open ${item.label}`}
                >
                  {item.kind === 'image' && item.imgSrc ? (
                    <Image
                      className="contact-orbit-img"
                      src={item.imgSrc}
                      alt=""
                      fill
                      sizes="96px"
                      priority={false}
                    />
                  ) : (
                    <MessageCircle className="contact-orbit-icon" size={26} aria-hidden="true" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </HudFrame>
    </section>
  );
}
